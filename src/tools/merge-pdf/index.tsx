"use client";

import { useState, useRef, useCallback } from "react";

interface PdfFile {
    id: string;
    name: string;
    file: File;
    pageCount?: number;
}

export default function MergePdfTool() {
    const [files, setFiles] = useState<PdfFile[]>([]);
    const [processing, setProcessing] = useState(false);
    const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = Array.from(e.target.files || []);
        if (uploadedFiles.length === 0) return;

        // Add new files
        const newFiles: PdfFile[] = uploadedFiles.map((file) => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            file,
        }));

        setFiles((prev) => [...prev, ...newFiles]);
        setMergedPdfUrl(null); // Reset previous result

        // Get page counts
        try {
            const { PDFDocument } = await import("pdf-lib");

            const filesWithCounts = await Promise.all(
                newFiles.map(async (item) => {
                    try {
                        const buffer = await item.file.arrayBuffer();
                        const pdf = await PDFDocument.load(buffer);
                        return { ...item, pageCount: pdf.getPageCount() };
                    } catch (err) {
                        console.error(`Error loading PDF ${item.name}:`, err);
                        return item;
                    }
                })
            );

            setFiles((prev) =>
                prev.map(f => {
                    const updated = filesWithCounts.find(u => u.id === f.id);
                    return updated || f;
                })
            );

        } catch (err) {
            console.error("Error loading pdf-lib:", err);
        }
    };

    const moveFile = (index: number, direction: -1 | 1) => {
        const newFiles = [...files];
        if (direction === -1 && index > 0) {
            [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]];
        } else if (direction === 1 && index < newFiles.length - 1) {
            [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
        }
        setFiles(newFiles);
        setMergedPdfUrl(null);
    };

    const removeFile = (id: string) => {
        setFiles((prev) => prev.filter((f) => f.id !== id));
        setMergedPdfUrl(null);
    };

    const mergePdfs = async () => {
        if (files.length < 2) return;
        setProcessing(true);

        try {
            const { PDFDocument } = await import("pdf-lib");
            const mergedPdf = await PDFDocument.create();

            for (const fileItem of files) {
                try {
                    const buffer = await fileItem.file.arrayBuffer();
                    const pdf = await PDFDocument.load(buffer);
                    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                    copiedPages.forEach((page) => mergedPdf.addPage(page));
                } catch (err) {
                    console.error(`Error processing ${fileItem.name}:`, err);
                    // Continue with other files? Or stop?
                    // For now, let's continue but maybe warn user
                }
            }

            const mergedPdfBytes = await mergedPdf.save();
            const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            setMergedPdfUrl(url);
        } catch (err) {
            console.error("Merge failed:", err);
            alert("Failed to merge PDFs. Please try again.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Upload Area */}
            <div className="dropzone rounded-2xl p-8 text-center bg-background-secondary border-2 border-dashed border-border hover:border-accent/50 transition-colors">
                <input
                    type="file"
                    accept=".pdf,application/pdf"
                    multiple
                    onChange={handleUpload}
                    className="hidden"
                    id="merge-upload"
                />
                <label htmlFor="merge-upload" className="cursor-pointer block w-full h-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">
                        Select PDF files to merge
                    </p>
                    <p className="text-sm text-foreground-secondary">
                        Drag & drop or click to upload
                    </p>
                </label>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm text-foreground-secondary px-2">
                        <span>{files.length} files selected</span>
                        <button onClick={() => setFiles([])} className="text-error hover:underline">Clear all</button>
                    </div>

                    <div className="space-y-2">
                        {files.map((file, index) => (
                            <div key={file.id} className="flex items-center gap-3 p-4 bg-background-secondary rounded-xl animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        onClick={() => moveFile(index, -1)}
                                        disabled={index === 0}
                                        className="p-1 rounded hover:bg-background-tertiary disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <svg className="w-4 h-4 text-foreground-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                    </button>
                                    <button
                                        onClick={() => moveFile(index, 1)}
                                        disabled={index === files.length - 1}
                                        className="p-1 rounded hover:bg-background-tertiary disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <svg className="w-4 h-4 text-foreground-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                </div>

                                <div className="w-10 h-12 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-xs border border-red-200 dark:border-red-800/50">
                                    PDF
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-foreground truncate">{file.name}</p>
                                    <p className="text-xs text-foreground-secondary">
                                        {(file.file.size / 1024 / 1024).toFixed(2)} MB • {file.pageCount ? `${file.pageCount} pages` : 'Loading pages...'}
                                    </p>
                                </div>

                                <button
                                    onClick={() => removeFile(file.id)}
                                    className="p-2 text-foreground-secondary hover:text-error hover:bg-error/10 rounded-lg transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Button */}
            {files.length > 0 && (
                <div className="flex flex-col gap-4">
                    <button
                        onClick={mergePdfs}
                        disabled={processing || files.length < 2}
                        className="w-full py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg shadow-accent/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        {processing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Merging...
                            </>
                        ) : (
                            <>
                                Confirm & Merge {files.length} PDFs
                            </>
                        )}
                    </button>

                    {processing && (
                        <p className="text-center text-sm text-foreground-secondary animate-pulse">Processing locally in your browser...</p>
                    )}
                </div>
            )}

            {/* Result */}
            {mergedPdfUrl && (
                <div className="p-6 bg-success/10 border border-success/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in zoom-in-50 duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-success/20 text-success flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Merge Complete!</h3>
                            <p className="text-sm text-foreground-secondary">Your merged PDF is ready.</p>
                        </div>
                    </div>
                    <a
                        href={mergedPdfUrl}
                        download={`merged-${new Date().toISOString().slice(0, 10)}.pdf`}
                        className="px-6 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl shadow-lg shadow-success/25 transition-all flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download PDF
                    </a>
                </div>
            )}
        </div>
    );
}
