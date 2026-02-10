"use client";

import { useState } from "react";

export default function SplitPdfTool() {
    const [file, setFile] = useState<File | null>(null);
    const [pageCount, setPageCount] = useState<number>(0);
    const [mode, setMode] = useState<"all" | "range">("all");
    const [range, setRange] = useState("");
    const [processing, setProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; name: string } | null>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (!uploadedFile) return;

        setFile(uploadedFile);
        setResult(null);
        setProcessing(true);

        try {
            const { PDFDocument } = await import("pdf-lib");
            const buffer = await uploadedFile.arrayBuffer();
            const pdf = await PDFDocument.load(buffer);
            setPageCount(pdf.getPageCount());
        } catch (err) {
            console.error("Error loading PDF:", err);
            alert("Failed to load PDF. Please try a different file.");
        } finally {
            setProcessing(false);
        }
    };

    const splitPdf = async () => {
        if (!file) return;
        setProcessing(true);
        setResult(null);

        try {
            const { PDFDocument } = await import("pdf-lib");
            const buffer = await file.arrayBuffer();
            const srcPdf = await PDFDocument.load(buffer);

            if (mode === "all") {
                const JSZip = (await import("jszip")).default;
                const zip = new JSZip();

                for (let i = 0; i < srcPdf.getPageCount(); i++) {
                    const newPdf = await PDFDocument.create();
                    const [copiedPage] = await newPdf.copyPages(srcPdf, [i]);
                    newPdf.addPage(copiedPage);
                    const pdfBytes = await newPdf.save();
                    zip.file(`page-${i + 1}.pdf`, pdfBytes);
                }

                const zipBlob = await zip.generateAsync({ type: "blob" });
                const url = URL.createObjectURL(zipBlob);
                setResult({ url, name: `${file.name.replace(".pdf", "")}-split.zip` });

            } else {
                // Parse range (e.g. "1, 3-5")
                const pagesToExtract = new Set<number>();
                const parts = range.split(",").map(p => p.trim());

                for (const part of parts) {
                    if (part.includes("-")) {
                        const [start, end] = part.split("-").map(Number);
                        if (!isNaN(start) && !isNaN(end)) {
                            for (let i = start; i <= end; i++) {
                                if (i >= 1 && i <= pageCount) pagesToExtract.add(i - 1);
                            }
                        }
                    } else {
                        const num = Number(part);
                        if (!isNaN(num) && num >= 1 && num <= pageCount) {
                            pagesToExtract.add(num - 1);
                        }
                    }
                }

                if (pagesToExtract.size === 0) {
                    alert("Invalid page range.");
                    setProcessing(false);
                    return;
                }

                const newPdf = await PDFDocument.create();
                const sortedIndices = Array.from(pagesToExtract).sort((a, b) => a - b);
                const copiedPages = await newPdf.copyPages(srcPdf, sortedIndices);
                copiedPages.forEach(page => newPdf.addPage(page));

                const pdfBytes = await newPdf.save();
                const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
                const url = URL.createObjectURL(blob);
                setResult({ url, name: `${file.name.replace(".pdf", "")}-extracted.pdf` });
            }

        } catch (err) {
            console.error("Split failed:", err);
            alert("Failed to split PDF.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="space-y-6">
            {!file ? (
                <div className="dropzone rounded-2xl p-12 text-center bg-background-secondary border-2 border-dashed border-border hover:border-accent/50 transition-colors">
                    <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleUpload}
                        className="hidden"
                        id="split-upload"
                    />
                    <label htmlFor="split-upload" className="cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-2">Upload PDF to split</p>
                        <p className="text-sm text-foreground-secondary">
                            Extract pages or split into multiple files
                        </p>
                    </label>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-background-secondary rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-12 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-xs border border-red-200 dark:border-red-800/50">
                                PDF
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{file.name}</p>
                                <p className="text-sm text-foreground-secondary">{pageCount} pages</p>
                            </div>
                        </div>
                        <button onClick={() => { setFile(null); setResult(null); }} className="text-sm text-accent hover:underline">Change file</button>
                    </div>

                    <div className="bg-background-secondary rounded-xl p-6 space-y-4">
                        <h3 className="font-medium text-foreground">Split Options</h3>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="mode"
                                    checked={mode === "all"}
                                    onChange={() => setMode("all")}
                                    className="w-4 h-4 text-accent border-border focus:ring-accent"
                                />
                                <span className="text-foreground">Split into single pages</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="mode"
                                    checked={mode === "range"}
                                    onChange={() => setMode("range")}
                                    className="w-4 h-4 text-accent border-border focus:ring-accent"
                                />
                                <span className="text-foreground">Extract specific pages</span>
                            </label>
                        </div>

                        {mode === "range" && (
                            <div className="animate-in fade-in slide-in-from-top-2">
                                <label className="block text-sm font-medium text-foreground mb-2">Page Range (e.g. 1, 3-5, 8)</label>
                                <input
                                    type="text"
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                    placeholder={`1-${pageCount}`}
                                    className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground focus:border-accent outline-none"
                                />
                            </div>
                        )}
                    </div>

                    <button
                        onClick={splitPdf}
                        disabled={processing || (mode === "range" && !range)}
                        className="w-full py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg active:scale-[0.98] flex justify-center items-center gap-2"
                    >
                        {processing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Processing...
                            </>
                        ) : mode === "all" ? "Split All Pages" : "Extract Pages"}
                    </button>

                    {result && (
                        <div className="p-6 bg-success/10 border border-success/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in zoom-in-50 duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-success/20 text-success flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Success!</h3>
                                    <p className="text-sm text-foreground-secondary">Your file is ready for download.</p>
                                </div>
                            </div>
                            <a
                                href={result.url}
                                download={result.name}
                                className="px-6 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl shadow-lg shadow-success/25 transition-all text-center"
                            >
                                Download {result.name.endsWith('.zip') ? 'ZIP' : 'PDF'}
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
