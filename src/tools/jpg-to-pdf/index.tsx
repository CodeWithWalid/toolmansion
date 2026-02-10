"use client";

import { useState, useRef, useCallback } from "react";

interface ImageItem {
    file: File;
    preview: string;
}

export default function JpgToPdfTool() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [pageSize, setPageSize] = useState<"a4" | "letter" | "fit">("a4");
    const [margin, setMargin] = useState(20);
    const [processing, setProcessing] = useState(false);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const imageFiles = files.filter(f => f.type.startsWith("image/"));

        const newImages: ImageItem[] = imageFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const imageFiles = files.filter(f => f.type.startsWith("image/"));

        const newImages: ImageItem[] = imageFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const moveImage = (from: number, to: number) => {
        if (to < 0 || to >= images.length) return;
        const newImages = [...images];
        const [removed] = newImages.splice(from, 1);
        newImages.splice(to, 0, removed);
        setImages(newImages);
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const createPdf = useCallback(async () => {
        if (images.length === 0) return;
        setProcessing(true);

        try {
            // Dynamic import to avoid SSR issues
            const { jsPDF } = await import("jspdf");

            // Calculate dimensions based on first image or selection
            // multiple pages
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "pt",
                format: pageSize === "fit" ? "a4" : pageSize, // default to a4 for fit, adjusted later
            });

            // Remove default first page if we are going to add pages manually
            doc.deletePage(1);

            const PAGE_SIZES = {
                a4: { w: 595.28, h: 841.89 },
                letter: { w: 612, h: 792 },
            };

            for (const item of images) {
                // Load image to get dimensions
                const img = new Image();
                await new Promise<void>((resolve, reject) => {
                    img.onload = () => resolve();
                    img.onerror = reject;
                    img.src = item.preview;
                });

                let pageW, pageH;

                if (pageSize === "fit") {
                    pageW = img.width + (margin * 2);
                    pageH = img.height + (margin * 2);
                    doc.addPage([pageW, pageH], pageW > pageH ? "l" : "p");
                } else {
                    const size = PAGE_SIZES[pageSize];
                    pageW = size.w;
                    pageH = size.h;
                    doc.addPage(pageSize, "p");
                }

                const availW = pageW - (margin * 2);
                const availH = pageH - (margin * 2);

                // Calculate scaling
                const scale = Math.min(availW / img.width, availH / img.height, 1);
                const w = img.width * scale;
                const h = img.height * scale;
                const x = (pageW - w) / 2;
                const y = (pageH - h) / 2;

                doc.addImage(item.preview, "JPEG", x, y, w, h);
            }

            doc.save(`converted-images-${Date.now()}.pdf`);
        } catch (err) {
            console.error("PDF generation failed:", err);
            alert("Failed to create PDF. Please try again.");
        } finally {
            setProcessing(false);
        }
    }, [images, pageSize, margin]);

    return (
        <div className="space-y-6">
            {/* Upload Area */}
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="dropzone rounded-2xl p-8 text-center"
            >
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleUpload}
                    className="hidden"
                    id="jpg-upload"
                />
                <label htmlFor="jpg-upload" className="cursor-pointer">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <p className="text-foreground font-medium mb-1">Drop images here to create PDF</p>
                    <p className="text-sm text-foreground-secondary">Supports JPG, PNG, WebP</p>
                </label>
            </div>

            {/* Options */}
            {images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-background-secondary rounded-xl">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Page Size</label>
                        <select
                            value={pageSize}
                            onChange={(e) => setPageSize(e.target.value as "a4" | "letter" | "fit")}
                            className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="a4">A4</option>
                            <option value="letter">Letter</option>
                            <option value="fit">Fit to Image</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Margin: {margin}px</label>
                        <input
                            type="range"
                            value={margin}
                            onChange={(e) => setMargin(Number(e.target.value))}
                            min={0}
                            max={50}
                            className="w-full"
                        />
                    </div>
                </div>
            )}

            {/* Image List */}
            {images.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{images.length} page(s)</span>
                        <button onClick={() => setImages([])} className="text-sm text-foreground-secondary hover:text-error">
                            Clear all
                        </button>
                    </div>

                    <div className="space-y-2">
                        {images.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-background-secondary rounded-xl">
                                <span className="w-6 h-6 flex items-center justify-center bg-accent/20 text-accent rounded-full text-sm font-medium">
                                    {i + 1}
                                </span>
                                <img src={item.preview} alt="" className="w-12 h-12 object-cover rounded-lg" />
                                <span className="flex-1 text-foreground truncate">{item.file.name}</span>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => moveImage(i, i - 1)}
                                        disabled={i === 0}
                                        className="p-1.5 bg-background-tertiary rounded-lg disabled:opacity-30 hover:bg-accent/20"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => moveImage(i, i + 1)}
                                        disabled={i === images.length - 1}
                                        className="p-1.5 bg-background-tertiary rounded-lg disabled:opacity-30 hover:bg-accent/20"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => removeImage(i)}
                                        className="p-1.5 bg-error/10 text-error rounded-lg hover:bg-error/20"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Create PDF Button */}
            {images.length > 0 && (
                <button
                    onClick={createPdf}
                    disabled={processing}
                    className="w-full py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                    {processing ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Creating PDF...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Create PDF ({images.length} pages)
                        </>
                    )}
                </button>
            )}

            <div className="p-4 bg-background-secondary rounded-xl">
                <p className="text-sm text-foreground-secondary">
                    <strong>Tip:</strong> Drag images to reorder them. The print dialog will open - choose Save as PDF to download your file.
                </p>
            </div>
        </div>
    );
}
