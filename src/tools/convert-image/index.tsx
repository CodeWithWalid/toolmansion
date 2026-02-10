"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { FileDropzone } from "@/components/tool-shell/FileDropzone";
import { FileInfoChips } from "@/components/tool-shell/FileInfoChips";
import { ToolChainMenu } from "@/components/tool-shell/ToolChainMenu";
import { useFileContext } from "@/context/FileContext";
import { getToolBySlug } from "@/data/toolsRegistry";

type OutputFormat = "jpeg" | "png" | "webp";

interface ImageFile {
    id: string;
    file: File;
    preview: string;
    dimensions: { width: number; height: number };
    status: "pending" | "processing" | "done" | "error";
    output?: {
        blob: Blob;
        url: string;
        size: number;
    };
    error?: string;
}

export default function ConvertImageTool() {
    const [files, setFiles] = useState<ImageFile[]>([]);
    const [batchMode, setBatchMode] = useState(false);
    const [outputFormat, setOutputFormat] = useState<OutputFormat>("jpeg");
    const [quality, setQuality] = useState(85);
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [showWarning, setShowWarning] = useState(false);
    const [processing, setProcessing] = useState(false);

    const { file: contextFile, sourceTool, clearContext } = useFileContext();
    const toolDef = getToolBySlug("convert-image");

    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Handle incoming file from context
    useEffect(() => {
        if (contextFile && sourceTool !== "convert-image") {
            handleFilesSelected([contextFile]);
            clearContext();
        }
    }, [contextFile, sourceTool]);

    // Handle file selection
    const handleFilesSelected = useCallback(
        async (selectedFiles: File[]) => {
            const imageFiles = selectedFiles.filter((f) =>
                f.type.startsWith("image/")
            );

            const newFiles: ImageFile[] = await Promise.all(
                imageFiles.map(async (file) => {
                    const preview = URL.createObjectURL(file);
                    const dimensions = await getImageDimensions(preview);

                    return {
                        id: Math.random().toString(36).substring(7),
                        file,
                        preview,
                        dimensions,
                        status: "pending" as const,
                    };
                })
            );

            if (batchMode) {
                setFiles((prev) => [...prev, ...newFiles]);
            } else {
                // Clean up old previews
                files.forEach((f) => {
                    URL.revokeObjectURL(f.preview);
                    if (f.output?.url) URL.revokeObjectURL(f.output.url);
                });
                setFiles(newFiles.slice(0, 1));
            }

            // Check for transparency warning
            const hasTransparency = imageFiles.some(
                (f) => f.type === "image/png" || f.type === "image/webp"
            );
            if (hasTransparency && outputFormat === "jpeg") {
                setShowWarning(true);
            }
        },
        [batchMode, files, outputFormat]
    );

    // Get image dimensions
    const getImageDimensions = (
        src: string
    ): Promise<{ width: number; height: number }> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
            img.src = src;
        });
    };

    // Convert single image
    const convertImage = async (imageFile: ImageFile): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = canvasRef.current;
                if (!canvas) {
                    reject(new Error("Canvas not available"));
                    return;
                }

                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");

                if (!ctx) {
                    reject(new Error("Could not get canvas context"));
                    return;
                }

                // Fill background for JPEG (no transparency support)
                if (outputFormat === "jpeg") {
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }

                ctx.drawImage(img, 0, 0);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error("Conversion failed"));
                        }
                    },
                    `image/${outputFormat}`,
                    outputFormat === "png" ? undefined : quality / 100
                );
            };
            img.onerror = () => reject(new Error("Failed to load image"));
            img.src = imageFile.preview;
        });
    };

    // Process all images
    const processImages = async () => {
        setProcessing(true);

        const updatedFiles = [...files];

        for (let i = 0; i < updatedFiles.length; i++) {
            updatedFiles[i].status = "processing";
            setFiles([...updatedFiles]);

            try {
                const blob = await convertImage(updatedFiles[i]);
                const url = URL.createObjectURL(blob);

                updatedFiles[i].status = "done";
                updatedFiles[i].output = {
                    blob,
                    url,
                    size: blob.size,
                };
            } catch (err) {
                updatedFiles[i].status = "error";
                updatedFiles[i].error = err instanceof Error ? err.message : "Unknown error";
            }

            setFiles([...updatedFiles]);
        }

        setProcessing(false);
    };

    // Download single file
    const downloadFile = (imageFile: ImageFile) => {
        if (!imageFile.output) return;

        const ext = outputFormat === "jpeg" ? "jpg" : outputFormat;
        const name = imageFile.file.name.replace(/\.[^/.]+$/, "") + "." + ext;

        const a = document.createElement("a");
        a.href = imageFile.output.url;
        a.download = name;
        a.click();
    };

    // Download all as ZIP
    const downloadAllAsZip = async () => {
        const completedFiles = files.filter((f) => f.output);
        if (completedFiles.length === 0) return;

        // Dynamic import JSZip for code splitting
        const JSZip = (await import("jszip")).default;
        const zip = new JSZip();

        const ext = outputFormat === "jpeg" ? "jpg" : outputFormat;

        completedFiles.forEach((f, index) => {
            if (f.output) {
                const name = `${f.file.name.replace(/\.[^/.]+$/, "")}_${index + 1}.${ext}`;
                zip.file(name, f.output.blob);
            }
        });

        const content = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(content);
        const a = document.createElement("a");
        a.href = url;
        a.download = `converted_images.zip`;
        a.click();
        URL.revokeObjectURL(url);
    };

    // Remove file
    const removeFile = (id: string) => {
        setFiles((prev) => {
            const file = prev.find((f) => f.id === id);
            if (file) {
                URL.revokeObjectURL(file.preview);
                if (file.output?.url) URL.revokeObjectURL(file.output.url);
            }
            return prev.filter((f) => f.id !== id);
        });
    };

    // Clear all
    const clearAll = () => {
        files.forEach((f) => {
            URL.revokeObjectURL(f.preview);
            if (f.output?.url) URL.revokeObjectURL(f.output.url);
        });
        setFiles([]);
    };

    // Format bytes
    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    // Calculate savings
    const calculateSavings = (original: number, converted: number): string => {
        const saved = original - converted;
        const percent = ((saved / original) * 100).toFixed(1);
        if (saved > 0) {
            return `${formatBytes(saved)} smaller (${percent}%)`;
        } else {
            return `${formatBytes(Math.abs(saved))} larger`;
        }
    };

    const completedCount = files.filter((f) => f.status === "done").length;
    const hasFiles = files.length > 0;
    const allDone = files.length > 0 && files.every((f) => f.status === "done");

    return (
        <div className="space-y-6">
            {/* Hidden canvas for image processing */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Action Cue */}
            {!hasFiles && (
                <div className="text-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-xl font-medium text-foreground">
                        Drop an image or select a file to start converting
                    </p>
                </div>
            )}

            {/* Batch Mode Toggle */}
            <div className="flex items-center justify-between p-4 bg-background-tertiary rounded-xl">
                <div>
                    <p className="font-medium text-foreground">Batch Mode</p>
                    <p className="text-sm text-foreground-secondary">
                        When enabled, multiple images will be converted together and downloaded as a single ZIP file.
                    </p>
                </div>
                <button
                    onClick={() => {
                        setBatchMode(!batchMode);
                        if (!batchMode) clearAll();
                    }}
                    className={`relative w-12 h-6 rounded-full transition-colors ${batchMode ? "bg-accent" : "bg-border"
                        }`}
                >
                    <span
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${batchMode ? "left-7" : "left-1"
                            }`}
                    />
                </button>
            </div>

            {/* Transparency Warning */}
            {showWarning && (
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
                    <div>
                        <p className="font-medium text-warning">Transparency Warning</p>
                        <p className="text-sm text-foreground-secondary">
                            JPG does not support transparency. Transparent areas will be
                            filled with the selected background color.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowWarning(false)}
                        className="text-foreground-secondary hover:text-foreground flex-shrink-0"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {/* File Dropzone */}
            {(!hasFiles || batchMode) && (
                <FileDropzone
                    accept=".jpg,.jpeg,.png,.webp"
                    multiple={batchMode}
                    onFilesSelected={handleFilesSelected}
                    maxFiles={50}
                    disabled={processing}
                />
            )}

            {/* Files List */}
            {hasFiles && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-medium text-foreground">
                            {batchMode ? `${files.length} Files Selected` : "Selected File"}
                        </h3>
                        <button
                            onClick={clearAll}
                            className="text-sm text-foreground-secondary hover:text-error transition-colors"
                            disabled={processing}
                        >
                            Clear All
                        </button>
                    </div>

                    <div className="space-y-3 max-h-[400px] overflow-y-auto">
                        {files.map((imageFile) => (
                            <div
                                key={imageFile.id}
                                className="flex items-center gap-4 p-4 bg-background-tertiary rounded-xl"
                            >
                                {/* Preview */}
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-background flex-shrink-0">
                                    <img
                                        src={imageFile.output?.url || imageFile.preview}
                                        alt={imageFile.file.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-foreground truncate">
                                        {imageFile.file.name}
                                    </p>
                                    <p className="text-sm text-foreground-secondary">
                                        {imageFile.dimensions.width} × {imageFile.dimensions.height}
                                        {" • "}
                                        {formatBytes(imageFile.file.size)}
                                        {imageFile.output && (
                                            <>
                                                {" → "}
                                                <span className="text-success">
                                                    {formatBytes(imageFile.output.size)}
                                                </span>
                                            </>
                                        )}
                                    </p>
                                    {imageFile.output && (
                                        <p className="text-xs text-foreground-secondary">
                                            {calculateSavings(imageFile.file.size, imageFile.output.size)}
                                        </p>
                                    )}
                                </div>

                                {/* Status/Actions */}
                                <div className="flex items-center gap-2">
                                    {imageFile.status === "processing" && (
                                        <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full spinner" />
                                    )}
                                    {imageFile.status === "done" && (
                                        <button
                                            onClick={() => downloadFile(imageFile)}
                                            className="p-2 text-success hover:bg-success/10 rounded-lg transition-colors"
                                            title="Download"
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
                                        </button>
                                    )}
                                    {imageFile.status === "error" && (
                                        <span className="text-error text-sm">Error</span>
                                    )}
                                    {!processing && (
                                        <button
                                            onClick={() => removeFile(imageFile.id)}
                                            className="p-2 text-foreground-secondary hover:text-error hover:bg-error/10 rounded-lg transition-colors"
                                            title="Remove"
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
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Controls */}
            {hasFiles && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-background-tertiary rounded-xl">
                    {/* Output Format */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Output Format
                        </label>
                        <select
                            value={outputFormat}
                            onChange={(e) => {
                                setOutputFormat(e.target.value as OutputFormat);
                                if (e.target.value === "jpeg") {
                                    const hasPng = files.some(
                                        (f) =>
                                            f.file.type === "image/png" ||
                                            f.file.type === "image/webp"
                                    );
                                    if (hasPng) setShowWarning(true);
                                } else {
                                    setShowWarning(false);
                                }
                            }}
                            disabled={processing}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        >
                            <option value="jpeg">JPG</option>
                            <option value="png">PNG</option>
                            <option value="webp">WebP (Recommended)</option>
                        </select>
                        {outputFormat === "webp" && (
                            <p className="text-xs text-success mt-1">
                                💡 WebP typically produces smaller files
                            </p>
                        )}
                    </div>

                    {/* Quality Slider (for JPG and WebP) */}
                    {outputFormat !== "png" && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Quality: {quality}%
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={quality}
                                onChange={(e) => setQuality(Number(e.target.value))}
                                disabled={processing}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-foreground-secondary mt-1">
                                <span>Smaller file</span>
                                <span>Better quality</span>
                            </div>
                        </div>
                    )}

                    {/* Background Color (for JPG) */}
                    {outputFormat === "jpeg" && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Background Color
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                    disabled={processing}
                                    className="w-10 h-10 rounded-lg border border-border cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                    disabled={processing}
                                    className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm"
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Action Buttons */}
            {hasFiles && (
                <div className="flex flex-wrap gap-3">
                    {!allDone && (
                        <button
                            onClick={processImages}
                            disabled={processing}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                        >
                            {processing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full spinner" />
                                    Converting...
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
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                    Convert {batchMode ? `${files.length} Images` : "Image"}
                                </>
                            )}
                        </button>
                    )}

                    {allDone && !batchMode && (
                        <button
                            onClick={() => downloadFile(files[0])}
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
                            Download
                        </button>
                    )}

                    {allDone && batchMode && (
                        <button
                            onClick={downloadAllAsZip}
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
                            Download All as ZIP ({completedCount} files)
                        </button>
                    )}
                </div>
            )}

            {/* Preview Comparison (single mode) */}
            {!batchMode && files.length === 1 && files[0].output && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground-secondary">
                            Original
                        </p>
                        <div className="aspect-video rounded-xl overflow-hidden bg-background border border-border">
                            <img
                                src={files[0].preview}
                                alt="Original"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <FileInfoChips file={files[0].file} dimensions={files[0].dimensions} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground-secondary">
                            Converted
                        </p>
                        <div className="aspect-video rounded-xl overflow-hidden bg-background border border-accent">
                            <img
                                src={files[0].output.url}
                                alt="Converted"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background-tertiary rounded-lg text-sm">
                                <span className="text-foreground-secondary">Format:</span>
                                <span className="text-foreground font-medium">
                                    {outputFormat.toUpperCase()}
                                </span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background-tertiary rounded-lg text-sm">
                                <span className="text-foreground-secondary">Size:</span>
                                <span className="text-success font-medium">
                                    {formatBytes(files[0].output.size)}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Tool Chaining Menu */}
            {allDone && !batchMode && files.length === 1 && files[0].output && toolDef && (
                <ToolChainMenu
                    currentToolSlug="convert-image"
                    relatedTools={toolDef.relatedTools}
                    file={new File([files[0].output.blob], files[0].file.name.replace(/\.[^/.]+$/, "") + "." + (outputFormat === "jpeg" ? "jpg" : outputFormat), { type: `image/${outputFormat}` })}
                />
            )}

            {/* SEO Content Block */}
            <div className="mt-12 p-6 bg-background-tertiary/30 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                    When should you convert images?
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                    Converting images helps reduce file size, improve compatibility, or prepare images for web and social platforms. <strong className="text-foreground">JPG</strong> is best for photos as it offers smaller file sizes, <strong className="text-foreground">PNG</strong> preserves transparency and sharpness for graphics, and <strong className="text-foreground">WebP</strong> offers the smallest file size with high quality for modern websites.
                </p>
            </div>
        </div>
    );
}
