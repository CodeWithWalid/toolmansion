"use client";

import { useState, useCallback, useRef } from "react";
import { FileDropzone } from "@/components/tool-shell/FileDropzone";
import { FileInfoChips } from "@/components/tool-shell/FileInfoChips";

type FitMode = "contain" | "cover" | "stretch";
type OutputFormat = "jpeg" | "png" | "webp";

interface Preset {
    name: string;
    width: number;
    height: number;
}

const PRESETS: Preset[] = [
    { name: "Avatar", width: 150, height: 150 },
    { name: "Facebook Cover", width: 820, height: 312 },
    { name: "Twitter Header", width: 1500, height: 500 },
    { name: "Instagram Square", width: 1080, height: 1080 },
    { name: "Instagram Portrait", width: 1080, height: 1350 },
    { name: "YouTube Thumbnail", width: 1280, height: 720 },
    { name: "LinkedIn Banner", width: 1584, height: 396 },
    { name: "HD (1080p)", width: 1920, height: 1080 },
];

export default function ResizeImageTool() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [originalDimensions, setOriginalDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    const [width, setWidth] = useState<number>(800);
    const [height, setHeight] = useState<number>(600);
    const [keepAspect, setKeepAspect] = useState(true);
    const [aspectRatio, setAspectRatio] = useState(1);
    const [fitMode, setFitMode] = useState<FitMode>("contain");
    const [preventUpscaling, setPreventUpscaling] = useState(true);
    const [outputFormat, setOutputFormat] = useState<OutputFormat>("jpeg");
    const [quality, setQuality] = useState(85);

    const [output, setOutput] = useState<{ url: string; blob: Blob } | null>(null);
    const [processing, setProcessing] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Handle file selection
    const handleFilesSelected = useCallback(async (files: File[]) => {
        const imageFile = files[0];
        if (!imageFile) return;

        // Cleanup old preview
        if (preview) URL.revokeObjectURL(preview);
        if (output?.url) URL.revokeObjectURL(output.url);

        const objectUrl = URL.createObjectURL(imageFile);
        setPreview(objectUrl);
        setFile(imageFile);
        setOutput(null);

        // Get dimensions
        const img = new Image();
        img.onload = () => {
            setOriginalDimensions({ width: img.width, height: img.height });
            setWidth(img.width);
            setHeight(img.height);
            setAspectRatio(img.width / img.height);
        };
        img.src = objectUrl;
    }, [preview, output]);

    // Handle width change
    const handleWidthChange = (newWidth: number) => {
        setWidth(newWidth);
        if (keepAspect && aspectRatio) {
            setHeight(Math.round(newWidth / aspectRatio));
        }
    };

    // Handle height change
    const handleHeightChange = (newHeight: number) => {
        setHeight(newHeight);
        if (keepAspect && aspectRatio) {
            setWidth(Math.round(newHeight * aspectRatio));
        }
    };

    // Apply preset
    const applyPreset = (preset: Preset) => {
        setWidth(preset.width);
        setHeight(preset.height);
        setKeepAspect(false);
    };

    // Resize image
    const resizeImage = async () => {
        if (!file || !preview) return;

        setProcessing(true);

        try {
            const img = new Image();
            img.src = preview;
            await new Promise((resolve) => (img.onload = resolve));

            const canvas = canvasRef.current;
            if (!canvas) return;

            let targetWidth = width;
            let targetHeight = height;

            // Prevent upscaling
            if (preventUpscaling && originalDimensions) {
                if (targetWidth > originalDimensions.width) {
                    targetWidth = originalDimensions.width;
                    if (keepAspect) {
                        targetHeight = Math.round(targetWidth / aspectRatio);
                    }
                }
                if (targetHeight > originalDimensions.height) {
                    targetHeight = originalDimensions.height;
                    if (keepAspect) {
                        targetWidth = Math.round(targetHeight * aspectRatio);
                    }
                }
            }

            canvas.width = targetWidth;
            canvas.height = targetHeight;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Background for JPEG
            if (outputFormat === "jpeg") {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Calculate draw dimensions based on fit mode
            let drawX = 0;
            let drawY = 0;
            let drawWidth = targetWidth;
            let drawHeight = targetHeight;

            if (fitMode === "contain" || fitMode === "cover") {
                const imgAspect = img.width / img.height;
                const canvasAspect = targetWidth / targetHeight;

                if (fitMode === "contain") {
                    if (imgAspect > canvasAspect) {
                        drawWidth = targetWidth;
                        drawHeight = targetWidth / imgAspect;
                        drawY = (targetHeight - drawHeight) / 2;
                    } else {
                        drawHeight = targetHeight;
                        drawWidth = targetHeight * imgAspect;
                        drawX = (targetWidth - drawWidth) / 2;
                    }
                } else {
                    // cover
                    if (imgAspect > canvasAspect) {
                        drawHeight = targetHeight;
                        drawWidth = targetHeight * imgAspect;
                        drawX = (targetWidth - drawWidth) / 2;
                    } else {
                        drawWidth = targetWidth;
                        drawHeight = targetWidth / imgAspect;
                        drawY = (targetHeight - drawHeight) / 2;
                    }
                }
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

            // Convert to blob
            const blob = await new Promise<Blob>((resolve, reject) => {
                canvas.toBlob(
                    (b) => (b ? resolve(b) : reject(new Error("Failed to create blob"))),
                    `image/${outputFormat}`,
                    outputFormat === "png" ? undefined : quality / 100
                );
            });

            const url = URL.createObjectURL(blob);
            setOutput({ url, blob });
        } catch (error) {
            console.error("Resize failed:", error);
        } finally {
            setProcessing(false);
        }
    };

    // Download
    const downloadImage = () => {
        if (!output || !file) return;

        const ext = outputFormat === "jpeg" ? "jpg" : outputFormat;
        const name = file.name.replace(/\.[^/.]+$/, "") + `_resized.${ext}`;

        const a = document.createElement("a");
        a.href = output.url;
        a.download = name;
        a.click();
    };

    // Clear
    const clearImage = () => {
        if (preview) URL.revokeObjectURL(preview);
        if (output?.url) URL.revokeObjectURL(output.url);
        setFile(null);
        setPreview("");
        setOutput(null);
        setOriginalDimensions(null);
    };

    // Format bytes
    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {/* File Dropzone */}
            {!file && (
                <>
                    <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-xl font-medium text-foreground mb-2">
                            Upload an image to resize it instantly
                        </h2>
                        <p className="text-foreground-secondary">
                            Includes presets for Instagram, Facebook, X, LinkedIn, and more.
                        </p>
                    </div>
                    <FileDropzone
                        accept=".jpg,.jpeg,.png,.webp"
                        multiple={false}
                        onFilesSelected={handleFilesSelected}
                    />
                </>
            )}

            {/* File Selected */}
            {file && originalDimensions && (
                <>
                    {/* File Info */}
                    <div className="flex items-center justify-between">
                        <FileInfoChips file={file} dimensions={originalDimensions} />
                        <button
                            onClick={clearImage}
                            className="text-sm text-foreground-secondary hover:text-error transition-colors"
                        >
                            Remove
                        </button>
                    </div>

                    {/* Presets */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Quick Presets
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {PRESETS.map((preset) => (
                                <button
                                    key={preset.name}
                                    onClick={() => applyPreset(preset)}
                                    className="px-3 py-1.5 text-sm bg-background-tertiary hover:bg-accent/20 hover:text-accent border border-border rounded-lg transition-colors"
                                >
                                    {preset.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dimensions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-background-tertiary rounded-xl">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Width (px)
                            </label>
                            <input
                                type="number"
                                value={width}
                                onChange={(e) => handleWidthChange(Number(e.target.value))}
                                min={1}
                                max={10000}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Height (px)
                            </label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => handleHeightChange(Number(e.target.value))}
                                min={1}
                                max={10000}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                        </div>
                        <div className="flex items-end">
                            <button
                                onClick={() => setKeepAspect(!keepAspect)}
                                className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors ${keepAspect
                                    ? "bg-accent/20 border-accent text-accent"
                                    : "bg-background border-border text-foreground-secondary"
                                    }`}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg>
                                {keepAspect ? "Aspect Locked" : "Lock Aspect"}
                            </button>
                        </div>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-background-tertiary rounded-xl">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Fit Mode
                            </label>
                            <select
                                value={fitMode}
                                onChange={(e) => setFitMode(e.target.value as FitMode)}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:ring-1 focus:ring-accent"
                            >
                                <option value="contain">Contain (fit inside)</option>
                                <option value="cover">Cover (fill & crop)</option>
                                <option value="stretch">Stretch</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Output Format
                            </label>
                            <select
                                value={outputFormat}
                                onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:ring-1 focus:ring-accent"
                            >
                                <option value="jpeg">JPG</option>
                                <option value="png">PNG</option>
                                <option value="webp">WebP</option>
                            </select>
                        </div>
                        {outputFormat !== "png" && (
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Quality: {quality}%
                                </label>
                                <input
                                    type="range"
                                    min={1}
                                    max={100}
                                    value={quality}
                                    onChange={(e) => setQuality(Number(e.target.value))}
                                    className="w-full mt-2"
                                />
                            </div>
                        )}
                    </div>

                    {/* Prevent Upscaling Toggle */}
                    <div className="flex items-center justify-between p-4 bg-background-tertiary rounded-xl">
                        <div>
                            <p className="font-medium text-foreground">Prevent Upscaling</p>
                            <p className="text-sm text-foreground-secondary">
                                Don&apos;t enlarge images beyond their original size
                            </p>
                        </div>
                        <button
                            onClick={() => setPreventUpscaling(!preventUpscaling)}
                            className={`relative w-12 h-6 rounded-full transition-colors ${preventUpscaling ? "bg-accent" : "bg-border"
                                }`}
                        >
                            <span
                                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preventUpscaling ? "left-7" : "left-1"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Upscaling Warning */}
                    {!preventUpscaling &&
                        originalDimensions &&
                        (width > originalDimensions.width ||
                            height > originalDimensions.height) && (
                            <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/20 rounded-xl">
                                <svg
                                    className="w-5 h-5 text-warning flex-shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="text-sm text-foreground-secondary">
                                    <span className="font-medium text-warning">
                                        Upscaling warning:
                                    </span>{" "}
                                    The target dimensions are larger than the original image. This
                                    may result in reduced quality.
                                </p>
                            </div>
                        )}

                    {/* Action Button */}
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={resizeImage}
                            disabled={processing}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                        >
                            {processing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full spinner" />
                                    Resizing...
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                        />
                                    </svg>
                                    Resize to {width} × {height}
                                </>
                            )}
                        </button>

                        {output && (
                            <button
                                onClick={downloadImage}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                                Download ({formatBytes(output.blob.size)})
                            </button>
                        )}
                    </div>

                    {/* Preview */}
                    {output && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-foreground-secondary">
                                    Original ({originalDimensions.width} × {originalDimensions.height})
                                </p>
                                <div className="aspect-video rounded-xl overflow-hidden bg-background border border-border">
                                    <img
                                        src={preview}
                                        alt="Original"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-foreground-secondary">
                                    Resized ({width} × {height})
                                </p>
                                <div className="aspect-video rounded-xl overflow-hidden bg-background border border-accent">
                                    <img
                                        src={output.url}
                                        alt="Resized"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* SEO Content Block */}
            <div className="mt-12 p-6 bg-background-tertiary/30 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                    When should you resize images?
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-6">
                    Resizing images helps meet platform requirements, reduce file size, and avoid distortion. Use <strong className="text-foreground">Exact Dimensions</strong> for design work, or use our ready-made <strong className="text-foreground">Social Media Presets</strong> for perfectly optimized profiles and posts.
                </p>

                <div className="pt-6 border-t border-border/50">
                    <h4 className="text-base font-semibold text-foreground mb-2">Remove metadata before sharing?</h4>
                    <p className="text-sm text-foreground-secondary">
                        Photos often contain hidden location data. Use our <a href="/exif-data-remover-online" className="text-accent hover:underline">Remove EXIF Data</a> tool to strip this information before resizing.
                    </p>
                </div>
            </div>
        </div >
    );
}
