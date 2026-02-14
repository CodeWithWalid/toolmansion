"use client";

import { useState, useRef, useCallback } from "react";

export default function CompressImageToSizeTool() {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [originalSize, setOriginalSize] = useState(0);
    const [targetSize, setTargetSize] = useState(500); // KB
    const [targetUnit, setTargetUnit] = useState<"KB" | "MB">("KB");
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [compressedSize, setCompressedSize] = useState(0);
    const [processing, setProcessing] = useState(false);
    const [quality, setQuality] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        setOriginalSize(file.size);
        setCompressedImage(null);

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                imageRef.current = img;
                setImage(event.target?.result as string);
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const input = document.createElement("input");
            input.type = "file";
            const dt = new DataTransfer();
            dt.items.add(file);
            input.files = dt.files;
            handleImageUpload({ target: input } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    const getTargetBytes = () => {
        return targetUnit === "MB" ? targetSize * 1024 * 1024 : targetSize * 1024;
    };

    const compressImage = useCallback(async () => {
        if (!imageRef.current || !canvasRef.current) return;

        setProcessing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imageRef.current;
        const targetBytes = getTargetBytes();

        // Start with original dimensions
        let scale = 1;
        let currentQuality = 0.92;
        let blob: Blob | null = null;

        // Binary search for the right quality/scale combination
        for (let i = 0; i < 20; i++) {
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            blob = await new Promise<Blob | null>((resolve) =>
                canvas.toBlob(resolve, "image/jpeg", currentQuality)
            );

            if (!blob) break;

            if (blob.size <= targetBytes) {
                // Success - but can we do better?
                if (blob.size < targetBytes * 0.9 && currentQuality < 0.95) {
                    currentQuality = Math.min(0.95, currentQuality + 0.05);
                } else {
                    break;
                }
            } else {
                // Too large - reduce quality or scale
                if (currentQuality > 0.3) {
                    currentQuality -= 0.1;
                } else {
                    scale *= 0.9;
                    currentQuality = 0.8;
                }
            }
        }

        if (blob) {
            const url = URL.createObjectURL(blob);
            setCompressedImage(url);
            setCompressedSize(blob.size);
            setQuality(Math.round(currentQuality * 100));
        }

        setProcessing(false);
    }, [targetSize, targetUnit]);

    const downloadImage = () => {
        if (!compressedImage) return;
        const a = document.createElement("a");
        a.href = compressedImage;
        a.download = `${fileName}-compressed.jpg`;
        a.click();
    };

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const reduction = originalSize > 0 ? Math.round((1 - compressedSize / originalSize) * 100) : 0;

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {/* Upload Area */}
            {!image ? (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="dropzone rounded-2xl p-12 text-center cursor-pointer"
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-2">
                            Drop your image here or click to upload
                        </p>
                        <p className="text-sm text-foreground-secondary mb-3">
                            Set a target file size and let the tool handle quality optimization automatically.
                        </p>
                        <p className="text-xs text-foreground-secondary/70 italic max-w-sm mx-auto">
                            Very small target sizes may reduce visual quality, especially for detailed images.
                        </p>
                    </label>
                </div>
            ) : (
                <>
                    {/* Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-background-secondary rounded-xl p-4">
                            <h3 className="text-sm font-medium text-foreground-secondary mb-3">Original</h3>
                            <img src={image} alt="Original" className="w-full h-48 object-contain rounded-lg" />
                            <p className="text-center mt-2 text-sm text-foreground">{formatSize(originalSize)}</p>
                        </div>
                        <div className="bg-background-secondary rounded-xl p-4">
                            <h3 className="text-sm font-medium text-foreground-secondary mb-3">Compressed</h3>
                            {compressedImage ? (
                                <>
                                    <img src={compressedImage} alt="Compressed" className="w-full h-48 object-contain rounded-lg" />
                                    <p className="text-center mt-2 text-sm text-accent font-medium">
                                        {formatSize(compressedSize)} ({reduction}% smaller)
                                    </p>
                                </>
                            ) : (
                                <div className="w-full h-48 flex items-center justify-center bg-background-tertiary rounded-lg">
                                    <p className="text-sm text-foreground-muted">Set target size and compress</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Target Size */}
                    <div className="p-6 bg-background-secondary rounded-xl">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Target Size</h3>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                value={targetSize}
                                onChange={(e) => setTargetSize(Math.max(1, Number(e.target.value)))}
                                className="w-32 px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground text-center"
                                min={1}
                            />
                            <select
                                value={targetUnit}
                                onChange={(e) => setTargetUnit(e.target.value as "KB" | "MB")}
                                className="px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                            >
                                <option value="KB">KB</option>
                                <option value="MB">MB</option>
                            </select>
                            <div className="flex-1" />
                            <div className="flex gap-2">
                                {[100, 250, 500, 1000].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => {
                                            setTargetSize(size);
                                            setTargetUnit("KB");
                                        }}
                                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${targetSize === size && targetUnit === "KB"
                                            ? "bg-accent text-white"
                                            : "bg-background-tertiary hover:bg-background-tertiary/80"
                                            }`}
                                    >
                                        {size}KB
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button
                            onClick={compressImage}
                            disabled={processing}
                            className="flex-1 py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            {processing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Compressing...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Compress to {targetSize} {targetUnit}
                                </>
                            )}
                        </button>
                        {compressedImage && (
                            <button
                                onClick={downloadImage}
                                className="px-8 py-4 bg-success hover:bg-success/90 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download
                            </button>
                        )}
                    </div>

                    {/* Stats */}
                    {compressedImage && (
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 bg-background-secondary rounded-xl text-center">
                                <div className="text-2xl font-bold text-foreground">{formatSize(originalSize)}</div>
                                <div className="text-sm text-foreground-secondary">Original</div>
                            </div>
                            <div className="p-4 bg-background-secondary rounded-xl text-center">
                                <div className="text-2xl font-bold text-accent">{formatSize(compressedSize)}</div>
                                <div className="text-sm text-foreground-secondary">Compressed</div>
                            </div>
                            <div className="p-4 bg-background-secondary rounded-xl text-center">
                                <div className="text-2xl font-bold text-success">{reduction}%</div>
                                <div className="text-sm text-foreground-secondary">Reduced</div>
                            </div>
                        </div>
                    )}

                    {/* Reset */}
                    <button
                        onClick={() => {
                            setImage(null);
                            setCompressedImage(null);
                            imageRef.current = null;
                        }}
                        className="w-full py-2 text-foreground-secondary hover:text-foreground transition-colors"
                    >
                        Upload a different image
                    </button>
                </>
            )}

            {/* SEO Content Block */}
            <div className="mt-12 p-6 bg-background-tertiary/30 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                    When should you use target size compression?
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-6">
                    Target size compression is ideal when images must meet strict upload limits—such as email attachments, forms, or website performance requirements. Instead of guessing quality levels, you choose the size (e.g., <strong className="text-foreground">100KB</strong>, <strong className="text-foreground">2MB</strong>) and let the tool optimize automatically.
                </p>

                <div className="pt-6 border-t border-border/50">
                    <h4 className="text-base font-semibold text-foreground mb-2">Remove metadata before sharing?</h4>
                    <p className="text-sm text-foreground-secondary">
                        Photos often contain hidden location data. Use our <a href="/exif-data-remover-online" className="text-accent hover:underline">Remove EXIF Data</a> tool to strip this information before compressing.
                    </p>
                </div>
            </div>
        </div>
    );
}
