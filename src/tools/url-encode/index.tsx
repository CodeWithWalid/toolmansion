"use client";

import { useState, useCallback } from "react";

type Mode = "encode" | "decode";

export default function URLEncodeTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<Mode>("encode");
    const [encodeFullUrl, setEncodeFullUrl] = useState(false);
    const [copied, setCopied] = useState(false);

    const processText = useCallback(() => {
        if (!input.trim()) {
            setOutput("");
            return;
        }

        if (mode === "encode") {
            if (encodeFullUrl) {
                setOutput(encodeURI(input));
            } else {
                setOutput(encodeURIComponent(input));
            }
        } else {
            try {
                setOutput(decodeURIComponent(input));
            } catch {
                setOutput("Invalid encoded string");
            }
        }
    }, [input, mode, encodeFullUrl]);

    const copyOutput = async () => {
        if (output && output !== "Invalid encoded string") {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const swapInputOutput = () => {
        if (output && output !== "Invalid encoded string") {
            setInput(output);
            setOutput("");
            setMode(mode === "encode" ? "decode" : "encode");
        }
    };

    const clearAll = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div className="space-y-6">
            {/* Mode Toggle */}
            <div className="flex items-center justify-center gap-2 p-1 bg-background-tertiary rounded-xl">
                <button
                    onClick={() => {
                        setMode("encode");
                        setOutput("");
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${mode === "encode"
                            ? "bg-accent text-white"
                            : "text-foreground-secondary hover:text-foreground"
                        }`}
                >
                    Encode
                </button>
                <button
                    onClick={() => {
                        setMode("decode");
                        setOutput("");
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${mode === "decode"
                            ? "bg-accent text-white"
                            : "text-foreground-secondary hover:text-foreground"
                        }`}
                >
                    Decode
                </button>
            </div>

            {/* Options */}
            {mode === "encode" && (
                <div className="flex items-center gap-3 p-4 bg-background-tertiary rounded-xl">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={encodeFullUrl}
                            onChange={(e) => setEncodeFullUrl(e.target.checked)}
                            className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                        />
                        <span className="text-sm text-foreground">
                            Encode full URL (preserve special URL characters like :, /, ?, &)
                        </span>
                    </label>
                </div>
            )}

            {/* Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        {mode === "encode" ? "Text to Encode" : "URL to Decode"}
                    </label>
                    <button
                        onClick={clearAll}
                        className="text-sm text-foreground-secondary hover:text-error transition-colors"
                    >
                        Clear
                    </button>
                </div>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                        mode === "encode"
                            ? "Enter text or URL to encode..."
                            : "Enter URL-encoded string to decode..."
                    }
                    className="w-full h-32 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none font-mono text-sm"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3">
                <button
                    onClick={processText}
                    className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
                >
                    {mode === "encode" ? "Encode URL" : "Decode URL"}
                </button>
                {output && output !== "Invalid encoded string" && (
                    <button
                        onClick={swapInputOutput}
                        className="p-3 bg-background-tertiary border border-border hover:border-accent/50 rounded-xl transition-colors"
                        title="Swap input and output"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Output */}
            {output && (
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">
                            {mode === "encode" ? "Encoded URL" : "Decoded Text"}
                        </label>
                        {output !== "Invalid encoded string" && (
                            <button
                                onClick={copyOutput}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        )}
                    </div>
                    <textarea
                        value={output}
                        readOnly
                        className={`w-full h-32 px-4 py-3 bg-background-tertiary border rounded-xl text-foreground resize-none font-mono text-sm ${output === "Invalid encoded string"
                                ? "border-error"
                                : "border-accent/50"
                            }`}
                    />
                </div>
            )}

            {/* Common Examples */}
            <div className="p-4 bg-background-secondary rounded-xl">
                <h3 className="text-sm font-medium text-foreground mb-3">Common Characters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-background-tertiary rounded">
                        <span className="text-foreground-muted">Space</span>
                        <span className="font-mono text-accent">%20</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background-tertiary rounded">
                        <span className="text-foreground-muted">&</span>
                        <span className="font-mono text-accent">%26</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background-tertiary rounded">
                        <span className="text-foreground-muted">=</span>
                        <span className="font-mono text-accent">%3D</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background-tertiary rounded">
                        <span className="text-foreground-muted">?</span>
                        <span className="font-mono text-accent">%3F</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
