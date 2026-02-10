"use client";

import { useState, useRef, useCallback } from "react";

type RotateAngle = 0 | 90 | 180 | 270;
type FlipType = "none" | "horizontal" | "vertical" | "both";

export default function RotateFlipImageTool() {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [rotation, setRotation] = useState<RotateAngle>(0);
    const [flip, setFlip] = useState<FlipType>("none");
    const [format, setFormat] = useState<"png" | "jpg" | "webp">("png");
    const [processing, setProcessing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                imageRef.current = img;
                setImage(event.target?.result as string);
                setRotation(0);
                setFlip("none");
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

    const rotate = (angle: 90 | -90) => {
        setRotation((prev) => {
            const newAngle = (prev + angle + 360) % 360;
            return newAngle as RotateAngle;
        });
    };

    const toggleFlip = (type: "horizontal" | "vertical") => {
        setFlip((prev) => {
            if (type === "horizontal") {
                if (prev === "none") return "horizontal";
                if (prev === "horizontal") return "none";
                if (prev === "vertical") return "both";
                if (prev === "both") return "vertical";
            } else {
                if (prev === "none") return "vertical";
                if (prev === "vertical") return "none";
                if (prev === "horizontal") return "both";
                if (prev === "both") return "horizontal";
            }
            return "none";
        });
    };

    const reset = () => {
        setRotation(0);
        setFlip("none");
    };

    const processAndDownload = useCallback(async () => {
        if (!imageRef.current || !canvasRef.current) return;

        setProcessing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imageRef.current;
        const isRotated90or270 = rotation === 90 || rotation === 270;

        // Set canvas dimensions based on rotation
        canvas.width = isRotated90or270 ? img.height : img.width;
        canvas.height = isRotated90or270 ? img.width : img.height;

        // Move to center
        ctx.translate(canvas.width / 2, canvas.height / 2);

        // Apply rotation
        ctx.rotate((rotation * Math.PI) / 180);

        // Apply flip
        const scaleX = flip === "horizontal" || flip === "both" ? -1 : 1;
        const scaleY = flip === "vertical" || flip === "both" ? -1 : 1;
        ctx.scale(scaleX, scaleY);

        // Draw image centered
        ctx.drawImage(img, -img.width / 2, -img.height / 2);

        // Convert to blob and download
        const mimeType = format === "jpg" ? "image/jpeg" : `image/${format}`;
        canvas.toBlob(
            (blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${fileName}-modified.${format}`;
                    a.click();
                    URL.revokeObjectURL(url);
                }
                setProcessing(false);
            },
            mimeType,
            0.92
        );
    }, [rotation, flip, format, fileName]);

    const getTransformStyle = () => {
        const transforms: string[] = [];
        if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
        if (flip === "horizontal" || flip === "both") transforms.push("scaleX(-1)");
        if (flip === "vertical" || flip === "both") transforms.push("scaleY(-1)");
        return transforms.join(" ");
    };

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {/* Upload Area */}
            {!image ? (
                <>
                    <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-xl font-medium text-foreground mb-2">
                            Fix wrong orientation instantly
                        </h2>
                        <p className="text-foreground-secondary mb-1">
                            Rotate or flip images to correct their layout.
                        </p>
                        <p className="text-sm text-foreground-secondary text-accent/80">
                            Processed locally — no uploads.
                        </p>
                    </div>
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
                            <p className="text-sm text-foreground-secondary">
                                Supports JPG, PNG, WebP, GIF
                            </p>
                        </label>

                    </div>
                </>
            ) : (
                <>
                    {/* Preview */}
                    <div className="relative bg-background-secondary rounded-2xl p-4 overflow-hidden">
                        <div className="flex items-center justify-center min-h-[300px] max-h-[500px]">
                            <img
                                src={image}
                                alt="Preview"
                                className="max-w-full max-h-[450px] object-contain transition-transform duration-300"
                                style={{ transform: getTransformStyle() }}
                            />
                        </div>
                        <button
                            onClick={() => {
                                setImage(null);
                                imageRef.current = null;
                                reset();
                            }}
                            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur rounded-lg hover:bg-error/20 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Controls */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button
                            onClick={() => rotate(-90)}
                            className="flex items-center justify-center gap-2 p-4 bg-background-secondary border border-border hover:border-accent/50 rounded-xl transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            <span>Rotate Left</span>
                        </button>
                        <button
                            onClick={() => rotate(90)}
                            className="flex items-center justify-center gap-2 p-4 bg-background-secondary border border-border hover:border-accent/50 rounded-xl transition-colors"
                        >
                            <svg className="w-5 h-5 transform scale-x-[-1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            <span>Rotate Right</span>
                        </button>
                        <button
                            onClick={() => toggleFlip("horizontal")}
                            className={`flex items-center justify-center gap-2 p-4 border rounded-xl transition-colors ${flip === "horizontal" || flip === "both"
                                ? "bg-accent/10 border-accent text-accent"
                                : "bg-background-secondary border-border hover:border-accent/50"
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <span>Flip H</span>
                        </button>
                        <button
                            onClick={() => toggleFlip("vertical")}
                            className={`flex items-center justify-center gap-2 p-4 border rounded-xl transition-colors ${flip === "vertical" || flip === "both"
                                ? "bg-accent/10 border-accent text-accent"
                                : "bg-background-secondary border-border hover:border-accent/50"
                                }`}
                        >
                            <svg className="w-5 h-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <span>Flip V</span>
                        </button>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-center gap-4 p-4 bg-background-secondary rounded-xl">
                        <div className="text-sm text-foreground-secondary">
                            Rotation: <span className="text-foreground font-medium">{rotation}°</span>
                        </div>
                        <div className="text-sm text-foreground-secondary">
                            Flip: <span className="text-foreground font-medium">
                                {flip === "none" ? "None" : flip === "horizontal" ? "Horizontal" : flip === "vertical" ? "Vertical" : "Both"}
                            </span>
                        </div>
                        {(rotation !== 0 || flip !== "none") && (
                            <button
                                onClick={reset}
                                className="text-sm text-error hover:underline"
                            >
                                Reset
                            </button>
                        )}
                    </div>

                    {/* Output Options */}
                    <div className="flex flex-wrap items-center gap-4 p-4 bg-background-secondary rounded-xl">
                        <div className="flex items-center gap-2">
                            <label className="text-sm text-foreground">Format:</label>
                            <select
                                value={format}
                                onChange={(e) => setFormat(e.target.value as "png" | "jpg" | "webp")}
                                className="px-3 py-1.5 bg-background-tertiary border border-border rounded-lg text-foreground"
                            >
                                <option value="png">PNG</option>
                                <option value="jpg">JPG</option>
                                <option value="webp">WebP</option>
                            </select>
                        </div>
                    </div>

                    {/* Download Button */}
                    <button
                        onClick={processAndDownload}
                        disabled={processing}
                        className="w-full py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        {processing ? (
                            <>
                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download
                            </>
                        )}
                    </button>
                </>
            )
            }


            {/* SEO Content Block */}
            < div className="mt-12 p-6 bg-background-tertiary/30 rounded-xl border border-border/50" >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                    When should you rotate or flip images?
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                    Use this tool when photos are displayed sideways or upside down due to incorrect device metadata. Flipping is useful for correcting "mirror" selfies or creating artistic reflections. All changes are saved permanently when you download.
                </p>
            </div >
        </div >
    );
}
