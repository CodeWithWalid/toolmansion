"use client";

import { useState, useRef, useCallback } from "react";

type WatermarkType = "text" | "image";
type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "tile";

export default function WatermarkImageTool() {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [watermarkType, setWatermarkType] = useState<WatermarkType>("text");
    const [text, setText] = useState("© Your Name");
    const [fontSize, setFontSize] = useState(32);
    const [textColor, setTextColor] = useState("#ffffff");
    const [opacity, setOpacity] = useState(50);
    const [position, setPosition] = useState<Position>("bottom-right");
    const [watermarkImage, setWatermarkImage] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const watermarkImgRef = useRef<HTMLImageElement | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        setResult(null);
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

    const handleWatermarkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                watermarkImgRef.current = img;
                setWatermarkImage(event.target?.result as string);
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const getPosition = (canvasW: number, canvasH: number, wmW: number, wmH: number) => {
        const padding = 20;
        switch (position) {
            case "top-left": return { x: padding, y: padding + wmH };
            case "top-right": return { x: canvasW - wmW - padding, y: padding + wmH };
            case "bottom-left": return { x: padding, y: canvasH - padding };
            case "bottom-right": return { x: canvasW - wmW - padding, y: canvasH - padding };
            case "center": return { x: (canvasW - wmW) / 2, y: (canvasH + wmH) / 2 };
            default: return { x: canvasW - wmW - padding, y: canvasH - padding };
        }
    };

    const applyWatermark = useCallback(async () => {
        if (!imageRef.current || !canvasRef.current) return;
        setProcessing(true);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imageRef.current;
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);
        ctx.globalAlpha = opacity / 100;

        if (watermarkType === "text") {
            ctx.font = `bold ${fontSize}px Arial, sans-serif`;
            ctx.fillStyle = textColor;
            const metrics = ctx.measureText(text);
            const textHeight = fontSize;

            if (position === "tile") {
                const stepX = metrics.width + 100;
                const stepY = textHeight + 80;
                for (let y = textHeight; y < canvas.height + stepY; y += stepY) {
                    for (let x = 0; x < canvas.width + stepX; x += stepX) {
                        ctx.fillText(text, x, y);
                    }
                }
            } else {
                const pos = getPosition(canvas.width, canvas.height, metrics.width, textHeight);
                ctx.fillText(text, pos.x, pos.y);
            }
        } else if (watermarkType === "image" && watermarkImgRef.current) {
            const wmImg = watermarkImgRef.current;
            const scale = Math.min(canvas.width / 4 / wmImg.width, canvas.height / 4 / wmImg.height, 1);
            const wmW = wmImg.width * scale;
            const wmH = wmImg.height * scale;

            if (position === "tile") {
                const stepX = wmW + 50;
                const stepY = wmH + 50;
                for (let y = 0; y < canvas.height + stepY; y += stepY) {
                    for (let x = 0; x < canvas.width + stepX; x += stepX) {
                        ctx.drawImage(wmImg, x, y, wmW, wmH);
                    }
                }
            } else {
                const pos = getPosition(canvas.width, canvas.height, wmW, wmH);
                ctx.drawImage(wmImg, pos.x, pos.y - wmH, wmW, wmH);
            }
        }

        ctx.globalAlpha = 1;
        setResult(canvas.toDataURL("image/png"));
        setProcessing(false);
    }, [watermarkType, text, fontSize, textColor, opacity, position]);

    const download = () => {
        if (!result) return;
        const a = document.createElement("a");
        a.href = result;
        a.download = `${fileName}-watermarked.png`;
        a.click();
    };

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {!image ? (
                <div className="dropzone rounded-2xl p-12 text-center cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                    <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-2">Drop your image here</p>
                        <p className="text-sm text-foreground-secondary">or click to upload</p>
                    </label>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Preview */}
                        <div className="bg-background-secondary rounded-xl p-4">
                            <h3 className="text-sm font-medium text-foreground-secondary mb-3">Preview</h3>
                            <img src={result || image} alt="Preview" className="w-full max-h-80 object-contain rounded-lg" />
                        </div>

                        {/* Options */}
                        <div className="space-y-4">
                            <div className="p-4 bg-background-secondary rounded-xl">
                                <h3 className="font-medium text-foreground mb-3">Watermark Type</h3>
                                <div className="flex gap-2">
                                    <button onClick={() => setWatermarkType("text")} className={`flex-1 px-4 py-2 rounded-lg ${watermarkType === "text" ? "bg-accent text-white" : "bg-background-tertiary"}`}>Text</button>
                                    <button onClick={() => setWatermarkType("image")} className={`flex-1 px-4 py-2 rounded-lg ${watermarkType === "image" ? "bg-accent text-white" : "bg-background-tertiary"}`}>Image</button>
                                </div>
                            </div>

                            {watermarkType === "text" ? (
                                <div className="p-4 bg-background-secondary rounded-xl space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Text</label>
                                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Font Size</label>
                                            <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} min={12} max={120} className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Color</label>
                                            <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full h-10 rounded border-0" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 bg-background-secondary rounded-xl">
                                    <label className="block text-sm font-medium text-foreground mb-2">Watermark Image</label>
                                    <input type="file" accept="image/*" onChange={handleWatermarkUpload} className="hidden" id="wm-upload" />
                                    <label htmlFor="wm-upload" className="block p-4 border-2 border-dashed border-border rounded-lg text-center cursor-pointer hover:border-accent/50">
                                        {watermarkImage ? <img src={watermarkImage} alt="Watermark" className="max-h-20 mx-auto" /> : <span className="text-foreground-secondary">Click to upload watermark</span>}
                                    </label>
                                </div>
                            )}

                            <div className="p-4 bg-background-secondary rounded-xl space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Opacity: {opacity}%</label>
                                    <input type="range" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} min={10} max={100} className="w-full" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Position</label>
                                    <select value={position} onChange={(e) => setPosition(e.target.value as Position)} className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground">
                                        <option value="top-left">Top Left</option>
                                        <option value="top-right">Top Right</option>
                                        <option value="bottom-left">Bottom Left</option>
                                        <option value="bottom-right">Bottom Right</option>
                                        <option value="center">Center</option>
                                        <option value="tile">Tile (Repeat)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={applyWatermark} disabled={processing} className="flex-1 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl">
                            {processing ? "Applying..." : "Apply Watermark"}
                        </button>
                        {result && (
                            <button onClick={download} className="px-8 py-3 bg-success hover:bg-success/90 text-white font-semibold rounded-xl">Download</button>
                        )}
                    </div>

                    <button onClick={() => { setImage(null); setResult(null); }} className="w-full py-2 text-foreground-secondary hover:text-foreground">
                        Upload different image
                    </button>
                </>
            )}
        </div>
    );
}
