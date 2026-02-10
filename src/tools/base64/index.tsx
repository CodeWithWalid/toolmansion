"use client";

import { useState, useCallback } from "react";

type Mode = "encode" | "decode";

export default function Base64Tool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<Mode>("encode");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const processText = useCallback(() => {
        if (!input.trim()) {
            setError("Please enter some text");
            setOutput("");
            return;
        }

        try {
            if (mode === "encode") {
                // Encode to Base64
                const encoded = btoa(unescape(encodeURIComponent(input)));
                setOutput(encoded);
                setError("");
            } else {
                // Decode from Base64
                const decoded = decodeURIComponent(escape(atob(input)));
                setOutput(decoded);
                setError("");
            }
        } catch (e) {
            setError(mode === "decode" ? "Invalid Base64 string" : "Encoding failed");
            setOutput("");
        }
    }, [input, mode]);

    const copyOutput = async () => {
        if (output) {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const swapInputOutput = () => {
        setInput(output);
        setOutput("");
        setMode(mode === "encode" ? "decode" : "encode");
        setError("");
    };

    const clearAll = () => {
        setInput("");
        setOutput("");
        setError("");
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const base64 = (reader.result as string).split(",")[1];
            setInput(base64);
            setMode("decode");
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="space-y-6">
            {/* Mode Toggle */}
            <div className="flex items-center justify-center gap-2 p-1 bg-background-tertiary rounded-xl">
                <button
                    onClick={() => {
                        setMode("encode");
                        setOutput("");
                        setError("");
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
                        setError("");
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${mode === "decode"
                            ? "bg-accent text-white"
                            : "text-foreground-secondary hover:text-foreground"
                        }`}
                >
                    Decode
                </button>
            </div>

            {/* Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
                    </label>
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-foreground-secondary hover:text-accent transition-colors cursor-pointer">
                            Upload File
                            <input
                                type="file"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </label>
                        <button
                            onClick={clearAll}
                            className="text-sm text-foreground-secondary hover:text-error transition-colors"
                        >
                            Clear
                        </button>
                    </div>
                </div>
                <textarea
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setError("");
                    }}
                    placeholder={
                        mode === "encode"
                            ? "Enter text to encode to Base64..."
                            : "Enter Base64 string to decode..."
                    }
                    className="w-full h-40 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none font-mono text-sm"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3">
                <button
                    onClick={processText}
                    className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
                >
                    {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
                </button>
                {output && (
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

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 p-3 bg-error/10 border border-error/20 rounded-xl">
                    <svg className="w-5 h-5 text-error" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-error">{error}</p>
                </div>
            )}

            {/* Output */}
            {output && (
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">
                            {mode === "encode" ? "Base64 Output" : "Decoded Text"}
                        </label>
                        <button
                            onClick={copyOutput}
                            className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <textarea
                        value={output}
                        readOnly
                        className="w-full h-40 px-4 py-3 bg-background-tertiary border border-accent/50 rounded-xl text-foreground resize-none font-mono text-sm"
                    />
                </div>
            )}
        </div>
    );
}
