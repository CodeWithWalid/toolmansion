"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { FileDropzone } from "@/components/tool-shell/FileDropzone";
import { FileInfoChips } from "@/components/tool-shell/FileInfoChips";

type AspectRatio = "free" | "1:1" | "4:5" | "16:9" | "9:16" | "4:3" | "3:2";
type OutputFormat = "jpeg" | "png" | "webp";

interface CropArea {
    x: number;
    y: number;
    width: number;
    height: number;
}

const ASPECT_RATIOS: { value: AspectRatio; label: string; ratio: number | null }[] = [
    { value: "free", label: "Free", ratio: null },
    { value: "1:1", label: "1:1 Square", ratio: 1 },
    { value: "4:5", label: "4:5 Portrait", ratio: 4 / 5 },
    { value: "16:9", label: "16:9 Widescreen", ratio: 16 / 9 },
    { value: "9:16", label: "9:16 Stories", ratio: 9 / 16 },
    { value: "4:3", label: "4:3 Standard", ratio: 4 / 3 },
    { value: "3:2", label: "3:2 Photo", ratio: 3 / 2 },
];

export default function CropImageTool() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [originalDimensions, setOriginalDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    const [aspectRatio, setAspectRatio] = useState<AspectRatio>("free");
    const [showGrid, setShowGrid] = useState(true);
    const [outputFormat, setOutputFormat] = useState<OutputFormat>("jpeg");
    const [quality, setQuality] = useState(90);

    const [cropArea, setCropArea] = useState<CropArea>({ x: 0, y: 0, width: 100, height: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState<string | null>(null);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const [output, setOutput] = useState<{ url: string; blob: Blob } | null>(null);
    const [processing, setProcessing] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    // Handle file selection
    const handleFilesSelected = useCallback(async (files: File[]) => {
        const imageFile = files[0];
        if (!imageFile) return;

        if (preview) URL.revokeObjectURL(preview);
        if (output?.url) URL.revokeObjectURL(output.url);

        const objectUrl = URL.createObjectURL(imageFile);
        setPreview(objectUrl);
        setFile(imageFile);
        setOutput(null);

        const img = new Image();
        img.onload = () => {
            setOriginalDimensions({ width: img.width, height: img.height });
            // Initialize crop area to full image
            setCropArea({ x: 0, y: 0, width: 100, height: 100 });
        };
        img.src = objectUrl;
    }, [preview, output]);

    // Apply aspect ratio
    useEffect(() => {
        const ratio = ASPECT_RATIOS.find((r) => r.value === aspectRatio)?.ratio;
        if (ratio === null || ratio === undefined) return;

        const currentWidth = cropArea.width;
        const currentHeight = cropArea.height;

        // Adjust height based on width and ratio
        let newHeight = currentWidth / ratio;

        // If height is too large, adjust width instead
        if (cropArea.y + newHeight > 100) {
            newHeight = 100 - cropArea.y;
            const newWidth = newHeight * ratio;
            setCropArea((prev) => ({
                ...prev,
                width: Math.min(newWidth, 100 - prev.x),
                height: newHeight,
            }));
        } else {
            setCropArea((prev) => ({ ...prev, height: newHeight }));
        }
    }, [aspectRatio]);

    // Mouse handlers for crop area
    const handleMouseDown = (e: React.MouseEvent, action: "drag" | string) => {
        e.preventDefault();
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        setDragStart({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });

        if (action === "drag") {
            setIsDragging(true);
        } else {
            setIsResizing(action);
        }
    };

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging && !isResizing) return;

            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;

            const currentX = ((e.clientX - rect.left) / rect.width) * 100;
            const currentY = ((e.clientY - rect.top) / rect.height) * 100;

            const deltaX = currentX - dragStart.x;
            const deltaY = currentY - dragStart.y;

            if (isDragging) {
                setCropArea((prev) => {
                    let newX = prev.x + deltaX;
                    let newY = prev.y + deltaY;

                    // Bounds checking
                    newX = Math.max(0, Math.min(100 - prev.width, newX));
                    newY = Math.max(0, Math.min(100 - prev.height, newY));

                    return { ...prev, x: newX, y: newY };
                });
            } else if (isResizing) {
                setCropArea((prev) => {
                    let { x, y, width, height } = prev;
                    const ratio = ASPECT_RATIOS.find((r) => r.value === aspectRatio)?.ratio;

                    // Handle different resize handles
                    if (isResizing.includes("e")) width = Math.max(10, Math.min(100 - x, prev.width + deltaX));
                    if (isResizing.includes("w")) {
                        const newWidth = Math.max(10, prev.width - deltaX);
                        if (x + deltaX >= 0) {
                            width = newWidth;
                            x = prev.x + deltaX;
                        }
                    }
                    if (isResizing.includes("s")) height = Math.max(10, Math.min(100 - y, prev.height + deltaY));
                    if (isResizing.includes("n")) {
                        const newHeight = Math.max(10, prev.height - deltaY);
                        if (y + deltaY >= 0) {
                            height = newHeight;
                            y = prev.y + deltaY;
                        }
                    }

                    // Maintain aspect ratio if set
                    if (ratio) {
                        if (isResizing.includes("e") || isResizing.includes("w")) {
                            height = width / ratio;
                            if (y + height > 100) {
                                height = 100 - y;
                                width = height * ratio;
                            }
                        } else {
                            width = height * ratio;
                            if (x + width > 100) {
                                width = 100 - x;
                                height = width / ratio;
                            }
                        }
                    }

                    return { x, y, width, height };
                });
            }

            setDragStart({ x: currentX, y: currentY });
        },
        [isDragging, isResizing, dragStart, aspectRatio]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        setIsResizing(null);
    }, []);

    useEffect(() => {
        if (isDragging || isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

    // Crop image
    const cropImage = async () => {
        if (!file || !preview || !originalDimensions) return;

        setProcessing(true);

        try {
            const img = new Image();
            img.src = preview;
            await new Promise((resolve) => (img.onload = resolve));

            const canvas = canvasRef.current;
            if (!canvas) return;

            // Calculate actual pixel values
            const sx = (cropArea.x / 100) * originalDimensions.width;
            const sy = (cropArea.y / 100) * originalDimensions.height;
            const sWidth = (cropArea.width / 100) * originalDimensions.width;
            const sHeight = (cropArea.height / 100) * originalDimensions.height;

            canvas.width = sWidth;
            canvas.height = sHeight;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            if (outputFormat === "jpeg") {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

            const blob = await new Promise<Blob>((resolve, reject) => {
                canvas.toBlob(
                    (b) => (b ? resolve(b) : reject(new Error("Failed"))),
                    `image/${outputFormat}`,
                    outputFormat === "png" ? undefined : quality / 100
                );
            });

            const url = URL.createObjectURL(blob);
            setOutput({ url, blob });
        } catch (error) {
            console.error("Crop failed:", error);
        } finally {
            setProcessing(false);
        }
    };

    // Download
    const downloadImage = () => {
        if (!output || !file) return;

        const ext = outputFormat === "jpeg" ? "jpg" : outputFormat;
        const name = file.name.replace(/\.[^/.]+$/, "") + `_cropped.${ext}`;

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

    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const outputDimensions = originalDimensions
        ? {
            width: Math.round((cropArea.width / 100) * originalDimensions.width),
            height: Math.round((cropArea.height / 100) * originalDimensions.height),
        }
        : null;

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {!file && (
                <>
                    <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-xl font-medium text-foreground mb-2">
                            Upload an image to crop it precisely
                        </h2>
                        <p className="text-foreground-secondary mb-2">
                            Your image never leaves your device.
                        </p>
                        <p className="text-sm text-foreground-secondary text-accent/80">
                            Optional grid overlays help align subjects and improve composition.
                        </p>
                    </div>
                    <FileDropzone
                        accept=".jpg,.jpeg,.png,.webp"
                        multiple={false}
                        onFilesSelected={handleFilesSelected}
                    />
                </>
            )}

            {file && originalDimensions && (
                <>
                    <div className="flex items-center justify-between">
                        <FileInfoChips file={file} dimensions={originalDimensions} />
                        <button
                            onClick={clearImage}
                            className="text-sm text-foreground-secondary hover:text-error"
                        >
                            Remove
                        </button>
                    </div>

                    {/* Aspect Ratio Presets */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Aspect Ratio
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {ASPECT_RATIOS.map((ar) => (
                                <button
                                    key={ar.value}
                                    onClick={() => setAspectRatio(ar.value)}
                                    className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${aspectRatio === ar.value
                                        ? "bg-accent/20 border-accent text-accent"
                                        : "bg-background-tertiary border-border hover:border-border-hover"
                                        }`}
                                >
                                    {ar.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Crop Area */}
                    <div
                        ref={containerRef}
                        className="relative aspect-video bg-background rounded-xl overflow-hidden border border-border select-none"
                    >
                        <img
                            ref={imageRef}
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-contain"
                            draggable={false}
                        />

                        {/* Darkened overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Top */}
                            <div
                                className="absolute bg-black/60"
                                style={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: `${cropArea.y}%`,
                                }}
                            />
                            {/* Bottom */}
                            <div
                                className="absolute bg-black/60"
                                style={{
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: `${100 - cropArea.y - cropArea.height}%`,
                                }}
                            />
                            {/* Left */}
                            <div
                                className="absolute bg-black/60"
                                style={{
                                    top: `${cropArea.y}%`,
                                    left: 0,
                                    width: `${cropArea.x}%`,
                                    height: `${cropArea.height}%`,
                                }}
                            />
                            {/* Right */}
                            <div
                                className="absolute bg-black/60"
                                style={{
                                    top: `${cropArea.y}%`,
                                    right: 0,
                                    width: `${100 - cropArea.x - cropArea.width}%`,
                                    height: `${cropArea.height}%`,
                                }}
                            />
                        </div>

                        {/* Crop Box */}
                        <div
                            className="absolute border-2 border-white cursor-move"
                            style={{
                                left: `${cropArea.x}%`,
                                top: `${cropArea.y}%`,
                                width: `${cropArea.width}%`,
                                height: `${cropArea.height}%`,
                            }}
                            onMouseDown={(e) => handleMouseDown(e, "drag")}
                        >
                            {/* Grid Overlay */}
                            {showGrid && (
                                <>
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/50" />
                                        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/50" />
                                        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/50" />
                                        <div className="absolute top-2/3 left-0 right-0 h-px bg-white/50" />
                                    </div>
                                </>
                            )}

                            {/* Resize Handles */}
                            {["nw", "n", "ne", "e", "se", "s", "sw", "w"].map((handle) => (
                                <div
                                    key={handle}
                                    className={`absolute w-3 h-3 bg-white border border-accent rounded-sm ${handle.includes("n") ? "top-0 -translate-y-1/2" : ""
                                        } ${handle.includes("s") ? "bottom-0 translate-y-1/2" : ""} ${handle.includes("w") ? "left-0 -translate-x-1/2" : ""
                                        } ${handle.includes("e") ? "right-0 translate-x-1/2" : ""} ${handle === "n" || handle === "s"
                                            ? "left-1/2 -translate-x-1/2"
                                            : ""
                                        } ${handle === "e" || handle === "w"
                                            ? "top-1/2 -translate-y-1/2"
                                            : ""
                                        } ${handle.includes("n") && handle.includes("w")
                                            ? "cursor-nw-resize"
                                            : ""
                                        } ${handle.includes("n") && handle.includes("e")
                                            ? "cursor-ne-resize"
                                            : ""
                                        } ${handle.includes("s") && handle.includes("w")
                                            ? "cursor-sw-resize"
                                            : ""
                                        } ${handle.includes("s") && handle.includes("e")
                                            ? "cursor-se-resize"
                                            : ""
                                        } ${handle === "n" || handle === "s" ? "cursor-ns-resize" : ""} ${handle === "e" || handle === "w" ? "cursor-ew-resize" : ""
                                        }`}
                                    onMouseDown={(e) => handleMouseDown(e, handle)}
                                />
                            ))}

                            {/* Dimensions Display */}
                            {outputDimensions && (
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap">
                                    {outputDimensions.width} × {outputDimensions.height}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-background-tertiary rounded-xl">
                        <div className="flex items-center justify-between md:col-span-1">
                            <span className="text-sm font-medium text-foreground">
                                Show Grid
                            </span>
                            <button
                                onClick={() => setShowGrid(!showGrid)}
                                className={`relative w-12 h-6 rounded-full transition-colors ${showGrid ? "bg-accent" : "bg-border"
                                    }`}
                            >
                                <span
                                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${showGrid ? "left-7" : "left-1"
                                        }`}
                                />
                            </button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Output Format
                            </label>
                            <select
                                value={outputFormat}
                                onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent"
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

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={cropImage}
                            disabled={processing}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl transition-colors"
                        >
                            {processing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full spinner" />
                                    Cropping...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Crop Image
                                </>
                            )}
                        </button>

                        {output && (
                            <button
                                onClick={downloadImage}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download ({formatBytes(output.blob.size)})
                            </button>
                        )}
                    </div>

                    {/* Output Preview */}
                    {output && (
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground-secondary">
                                Cropped Result
                            </p>
                            <div className="max-w-md rounded-xl overflow-hidden bg-background border border-accent">
                                <img
                                    src={output.url}
                                    alt="Cropped"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* SEO Content Block */}
            <div className="mt-12 p-6 bg-background-tertiary/30 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                    When should you crop images?
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-6">
                    Cropping helps remove unwanted areas, improve framing, and match platform aspect ratios. Use <strong className="text-foreground">Presets</strong> for social media standards, or <strong className="text-foreground">Free-form cropping</strong> for custom layouts.
                </p>

                <div className="pt-6 border-t border-border/50">
                    <h4 className="text-base font-semibold text-foreground mb-2">Remove metadata before sharing?</h4>
                    <p className="text-sm text-foreground-secondary">
                        Photos often contain hidden location data. Use our <a href="/exif-data-remover-online" className="text-accent hover:underline">Remove EXIF Data</a> tool to strip this information before cropping.
                    </p>
                </div>
            </div>
        </div >
    );
}
