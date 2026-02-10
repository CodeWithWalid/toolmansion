"use client";

import { useState, useRef, useCallback } from "react";

interface ImageItem {
    file: File;
    preview: string;
    compressed?: string;
    originalSize: number;
    compressedSize?: number;
}

export default function BulkCompressImagesTool() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [quality, setQuality] = useState(80);
    const [format, setFormat] = useState<"jpeg" | "png" | "webp">("jpeg");
    const [processing, setProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const imageFiles = files.filter(f => f.type.startsWith("image/"));

        const newImages: ImageItem[] = imageFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
            originalSize: file.size,
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
            originalSize: file.size,
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const compressAll = useCallback(async () => {
        if (!canvasRef.current || images.length === 0) return;
        setProcessing(true);
        setProgress(0);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const compressed: ImageItem[] = [];

        for (let i = 0; i < images.length; i++) {
            const item = images[i];

            const result = await new Promise<ImageItem>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                const url = URL.createObjectURL(blob);
                                resolve({
                                    ...item,
                                    compressed: url,
                                    compressedSize: blob.size,
                                });
                            } else {
                                resolve(item);
                            }
                        },
                        `image/${format}`,
                        quality / 100
                    );
                };
                img.src = item.preview;
            });

            compressed.push(result);
            setProgress(Math.round(((i + 1) / images.length) * 100));
        }

        setImages(compressed);
        setProcessing(false);
    }, [images, quality, format]);

    const downloadAll = () => {
        images.forEach((item) => {
            if (item.compressed) {
                const a = document.createElement("a");
                a.href = item.compressed;
                const ext = format === "jpeg" ? "jpg" : format;
                a.download = item.file.name.replace(/\.[^/.]+$/, `.${ext}`);
                a.click();
            }
        });
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const clearAll = () => setImages([]);

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const totalOriginal = images.reduce((acc, i) => acc + i.originalSize, 0);
    const totalCompressed = images.reduce((acc, i) => acc + (i.compressedSize || 0), 0);
    const savings = totalOriginal > 0 && totalCompressed > 0
        ? Math.round((1 - totalCompressed / totalOriginal) * 100)
        : 0;

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {/* Workflow Explanation */}
            {!images.length && (
                <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-xl font-medium text-foreground mb-2">
                        Fast, Private Batch Compression
                    </h2>
                    <p className="text-foreground-secondary mb-1">
                        Upload multiple images, apply one quality setting, and download all compressed files together.
                    </p>
                </div>
            )}

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
                    id="bulk-upload"
                />
                <label htmlFor="bulk-upload" className="cursor-pointer">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-foreground font-medium mb-1">Drop images here</p>
                    <p className="text-sm text-foreground-secondary">or click to select multiple files</p>
                </label>
            </div>

            {/* Performance Note */}
            {!images.length && (
                <p className="text-xs text-center text-foreground-secondary/70 italic mt-4 mb-8">
                    Performance depends on your device and browser. Very large batches may take longer to process.
                </p>
            )}

            {/* Options */}
            {images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-background-secondary rounded-xl">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Quality: {quality}%
                        </label>
                        <input
                            type="range"
                            value={quality}
                            onChange={(e) => setQuality(Number(e.target.value))}
                            min={10}
                            max={100}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Output Format</label>
                        <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value as "jpeg" | "png" | "webp")}
                            className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="jpeg">JPEG</option>
                            <option value="png">PNG</option>
                            <option value="webp">WebP</option>
                        </select>
                    </div>
                </div>
            )}

            {/* Stats */}
            {totalCompressed > 0 && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-background-secondary rounded-xl text-center">
                        <div className="text-xl font-bold text-foreground">{formatSize(totalOriginal)}</div>
                        <div className="text-sm text-foreground-secondary">Original</div>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-xl text-center">
                        <div className="text-xl font-bold text-accent">{formatSize(totalCompressed)}</div>
                        <div className="text-sm text-foreground-secondary">Compressed</div>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-xl text-center">
                        <div className="text-xl font-bold text-success">{savings}%</div>
                        <div className="text-sm text-foreground-secondary">Saved</div>
                    </div>
                </div>
            )}

            {/* Image Grid */}
            {images.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{images.length} image(s)</span>
                        <button onClick={clearAll} className="text-sm text-foreground-secondary hover:text-error">
                            Clear all
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {images.map((item, i) => (
                            <div key={i} className="relative group bg-background-secondary rounded-xl p-2">
                                <img
                                    src={item.compressed || item.preview}
                                    alt={item.file.name}
                                    className="w-full h-24 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => removeImage(i)}
                                    className="absolute top-1 right-1 p-1 bg-error rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="mt-1 text-xs text-center">
                                    <span className="text-foreground-secondary">{formatSize(item.originalSize)}</span>
                                    {item.compressedSize && (
                                        <span className="text-success"> → {formatSize(item.compressedSize)}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Progress Bar */}
            {processing && (
                <div className="p-4 bg-background-secondary rounded-xl">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">Compressing...</span>
                        <span className="text-accent">{progress}%</span>
                    </div>
                    <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                        <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            )}

            {/* Actions */}
            {images.length > 0 && (
                <div className="flex gap-4">
                    <button
                        onClick={compressAll}
                        disabled={processing}
                        className="flex-1 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl"
                    >
                        {processing ? "Compressing..." : `Compress ${images.length} Image(s)`}
                    </button>
                    {images.some(i => i.compressed) && (
                        <button
                            onClick={downloadAll}
                            className="px-8 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl"
                        >
                            Download All
                        </button>
                    )}
                </div>
            )}


            {/* SEO Content Block */}
            <div className="mt-12 p-6 bg-background-tertiary/30 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                    When should you use bulk compression?
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                    Bulk image compression is ideal for galleries, website uploads, or large folders where consistent quality and faster processing matter more than per-image tuning. It helps you save time by processing dozens of images at once without uploading them to a server.
                </p>
            </div>
        </div >
    );
}
