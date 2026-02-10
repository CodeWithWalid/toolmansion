"use client";

import { useState, useRef, useCallback } from "react";

interface ExtractedPage {
    pageNumber: number;
    preview: string;
}

export default function PdfToImagesTool() {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pages, setPages] = useState<ExtractedPage[]>([]);
    const [format, setFormat] = useState<"png" | "jpeg">("png");
    const [quality, setQuality] = useState(90);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || file.type !== "application/pdf") {
            setError("Please upload a valid PDF file");
            return;
        }

        setPdfFile(file);
        setPages([]);
        setError("");
        setProcessing(true);

        try {
            // Dynamic import
            const pdfjsLib = await import("pdfjs-dist");

            // Set worker with specific version to match the library
            // Using unpkg cdn
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const buffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(buffer).promise;

            const extractedPages: ExtractedPage[] = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);

                // Render to canvas
                const viewport = page.getViewport({ scale: 1.5 }); // 1.5x scale for better quality
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                if (!ctx) continue;

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({
                    canvasContext: ctx,
                    viewport: viewport,
                } as any).promise;

                extractedPages.push({
                    pageNumber: i,
                    preview: canvas.toDataURL("image/png"),
                });
            }

            setPages(extractedPages);
            setProcessing(false);
        } catch (err) {
            console.error("PDF processing failed:", err);
            setError("Failed to process PDF. Please try a different file.");
            setProcessing(false);
        }
    };

    const downloadAll = () => {
        pages.forEach((page) => {
            const a = document.createElement("a");
            a.href = page.preview;
            const ext = format === "jpeg" ? "jpg" : format;
            a.download = `page-${page.pageNumber}.${ext}`;
            a.click();
        });
    };

    const downloadSingle = (page: ExtractedPage) => {
        const a = document.createElement("a");
        a.href = page.preview;
        const ext = format === "jpeg" ? "jpg" : format;
        a.download = `page-${page.pageNumber}.${ext}`;
        a.click();
    };

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {/* Upload Area */}
            <div className="dropzone rounded-2xl p-12 text-center">
                <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleUpload}
                    className="hidden"
                    id="pdf-upload"
                />
                <label htmlFor="pdf-upload" className="cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">
                        {pdfFile ? pdfFile.name : "Upload PDF to extract images"}
                    </p>
                    <p className="text-sm text-foreground-secondary">
                        Each page will be converted to an image
                    </p>
                </label>
            </div>

            {/* Error Message */}
            {error && (
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-xl">
                    <p className="text-warning">{error}</p>
                </div>
            )}

            {/* Processing Message */}
            {processing && (
                <div className="flex items-center justify-center gap-3 py-8">
                    <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    <span className="text-foreground">Processing PDF...</span>
                </div>
            )}

            {/* Options */}
            {pages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-background-secondary rounded-xl">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Output Format</label>
                        <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value as "png" | "jpeg")}
                            className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="png">PNG (Lossless)</option>
                            <option value="jpeg">JPEG (Smaller size)</option>
                        </select>
                    </div>
                    {format === "jpeg" && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Quality: {quality}%
                            </label>
                            <input
                                type="range"
                                value={quality}
                                onChange={(e) => setQuality(Number(e.target.value))}
                                min={50}
                                max={100}
                                className="w-full"
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Pages Grid */}
            {pages.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{pages.length} page(s)</span>
                        <button
                            onClick={downloadAll}
                            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover"
                        >
                            Download All
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {pages.map((page) => (
                            <div key={page.pageNumber} className="bg-background-secondary rounded-xl p-3">
                                <img
                                    src={page.preview}
                                    alt={`Page ${page.pageNumber}`}
                                    className="w-full h-40 object-contain rounded-lg bg-white"
                                />
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-sm text-foreground">Page {page.pageNumber}</span>
                                    <button
                                        onClick={() => downloadSingle(page)}
                                        className="text-sm text-accent hover:underline"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Info */}
            <div className="p-4 bg-background-secondary rounded-xl">
                <h4 className="font-medium text-foreground mb-2">How it works</h4>
                <p className="text-sm text-foreground-secondary">
                    Upload a PDF file and each page will be converted to a high-quality image.
                    You can download individual pages or all at once.
                </p>
            </div>
        </div>
    );
}
