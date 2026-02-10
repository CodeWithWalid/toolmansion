"use client";

import { useState, useRef, useCallback } from "react";

export default function WebpToJpgTool() {
    const [images, setImages] = useState<{ file: File; preview: string; converted?: string }[]>([]);
    const [quality, setQuality] = useState(90);
    const [bgColor, setBgColor] = useState("#ffffff");
    const [processing, setProcessing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const webpFiles = files.filter(f => f.type === "image/webp" || f.name.endsWith(".webp"));

        const newImages = webpFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const webpFiles = files.filter(f => f.type === "image/webp" || f.name.endsWith(".webp"));

        const newImages = webpFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const convertAll = useCallback(async () => {
        if (!canvasRef.current) return;
        setProcessing(true);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const converted = await Promise.all(
            images.map(async (item) => {
                return new Promise<typeof item>((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        canvas.width = img.width;
                        canvas.height = img.height;

                        // Fill background (for transparency)
                        ctx.fillStyle = bgColor;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);

                        // Draw image
                        ctx.drawImage(img, 0, 0);

                        const jpgUrl = canvas.toDataURL("image/jpeg", quality / 100);
                        resolve({ ...item, converted: jpgUrl });
                    };
                    img.src = item.preview;
                });
            })
        );

        setImages(converted);
        setProcessing(false);
    }, [images, quality, bgColor]);

    const downloadAll = () => {
        images.forEach((item, i) => {
            if (item.converted) {
                const a = document.createElement("a");
                a.href = item.converted;
                a.download = item.file.name.replace(/\.webp$/i, ".jpg");
                a.click();
            }
        });
    };

    const downloadSingle = (item: typeof images[0]) => {
        if (item.converted) {
            const a = document.createElement("a");
            a.href = item.converted;
            a.download = item.file.name.replace(/\.webp$/i, ".jpg");
            a.click();
        }
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const clearAll = () => setImages([]);

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {/* Upload Area */}
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="dropzone rounded-2xl p-8 text-center"
            >
                <input
                    type="file"
                    accept=".webp,image/webp"
                    multiple
                    onChange={handleUpload}
                    className="hidden"
                    id="webp-upload"
                />
                <label htmlFor="webp-upload" className="cursor-pointer">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-foreground font-medium mb-1">Drop WebP images here</p>
                    <p className="text-sm text-foreground-secondary">or click to select files</p>
                </label>
            </div>

            {/* Options */}
            {images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-background-secondary rounded-xl">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            JPG Quality: {quality}%
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
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Background Color (for transparency)
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                                className="w-10 h-10 rounded border-0"
                            />
                            <input
                                type="text"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                                className="flex-1 px-3 py-2 bg-background-tertiary border border-border rounded-lg text-foreground font-mono text-sm"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Image List */}
            {images.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{images.length} image(s)</span>
                        <button onClick={clearAll} className="text-sm text-foreground-secondary hover:text-error">
                            Clear all
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((item, i) => (
                            <div key={i} className="relative group bg-background-secondary rounded-xl p-2">
                                <img
                                    src={item.converted || item.preview}
                                    alt={item.file.name}
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => removeImage(i)}
                                    className="absolute top-1 right-1 p-1 bg-error rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <p className="text-xs text-foreground-secondary text-center mt-2 truncate">{item.file.name}</p>
                                {item.converted && (
                                    <button
                                        onClick={() => downloadSingle(item)}
                                        className="w-full mt-2 py-1 text-xs bg-accent/20 text-accent rounded-lg hover:bg-accent/30"
                                    >
                                        Download
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            {images.length > 0 && (
                <div className="flex gap-4">
                    <button
                        onClick={convertAll}
                        disabled={processing}
                        className="flex-1 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    >
                        {processing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Converting...
                            </>
                        ) : (
                            "Convert to JPG"
                        )}
                    </button>
                    {images.some(i => i.converted) && (
                        <button
                            onClick={downloadAll}
                            className="px-8 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl"
                        >
                            Download All
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
