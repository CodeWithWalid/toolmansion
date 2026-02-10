"use client";

import { useState, useCallback } from "react";

export default function ColorPickerTool() {
    const [color, setColor] = useState("#6366f1");
    const [copied, setCopied] = useState<string | null>(null);

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!result) return { r: 0, g: 0, b: 0 };
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    };

    const rgbToHsl = (r: number, g: number, b: number) => {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    };

    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    const formats = {
        hex: color.toUpperCase(),
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        css: `--color: ${color};`,
    };

    const copyValue = async (key: string, value: string) => {
        await navigator.clipboard.writeText(value);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    const randomColor = () => {
        const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        setColor(hex);
    };

    // Complementary colors
    const complementary = `hsl(${(hsl.h + 180) % 360}, ${hsl.s}%, ${hsl.l}%)`;
    const triadic1 = `hsl(${(hsl.h + 120) % 360}, ${hsl.s}%, ${hsl.l}%)`;
    const triadic2 = `hsl(${(hsl.h + 240) % 360}, ${hsl.s}%, ${hsl.l}%)`;

    return (
        <div className="space-y-6">
            {/* Color Picker */}
            <div className="flex flex-col items-center gap-6">
                <div
                    className="w-48 h-48 rounded-2xl shadow-lg border-4 border-white/20"
                    style={{ backgroundColor: color }}
                />
                <div className="flex items-center gap-4">
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-16 h-16 rounded-xl border-0 cursor-pointer"
                    />
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-32 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground font-mono text-center uppercase"
                    />
                    <button
                        onClick={randomColor}
                        className="px-4 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl"
                    >
                        Random
                    </button>
                </div>
            </div>

            {/* Color Values */}
            <div className="p-6 bg-background-secondary rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Color Formats</h3>
                <div className="space-y-3">
                    {Object.entries(formats).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4">
                            <span className="w-16 text-sm font-medium text-foreground-secondary uppercase">{key}</span>
                            <code className="flex-1 px-4 py-2 bg-background-tertiary rounded-lg text-foreground font-mono text-sm">
                                {value}
                            </code>
                            <button
                                onClick={() => copyValue(key, value)}
                                className="px-3 py-2 text-sm bg-accent/10 text-accent rounded-lg hover:bg-accent/20"
                            >
                                {copied === key ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Color Harmonies */}
            <div className="p-6 bg-background-secondary rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Color Harmonies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="w-full h-16 rounded-lg mb-2" style={{ backgroundColor: color }} />
                        <span className="text-sm text-foreground-secondary">Base</span>
                    </div>
                    <div className="text-center">
                        <div className="w-full h-16 rounded-lg mb-2" style={{ backgroundColor: complementary }} />
                        <span className="text-sm text-foreground-secondary">Complementary</span>
                    </div>
                    <div className="text-center">
                        <div className="w-full h-16 rounded-lg mb-2" style={{ backgroundColor: triadic1 }} />
                        <span className="text-sm text-foreground-secondary">Triadic 1</span>
                    </div>
                    <div className="text-center">
                        <div className="w-full h-16 rounded-lg mb-2" style={{ backgroundColor: triadic2 }} />
                        <span className="text-sm text-foreground-secondary">Triadic 2</span>
                    </div>
                </div>
            </div>

            {/* Shades */}
            <div className="p-6 bg-background-secondary rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Shades & Tints</h3>
                <div className="flex gap-2">
                    {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((l) => (
                        <div
                            key={l}
                            className="flex-1 h-12 rounded-lg cursor-pointer hover:ring-2 ring-white/50 transition-all"
                            style={{ backgroundColor: `hsl(${hsl.h}, ${hsl.s}%, ${l}%)` }}
                            onClick={() => copyValue(`shade-${l}`, `hsl(${hsl.h}, ${hsl.s}%, ${l}%)`)}
                            title={`Click to copy: hsl(${hsl.h}, ${hsl.s}%, ${l}%)`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
