"use client";

import { useState, useCallback } from "react";

export default function JSONFormatterTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [indent, setIndent] = useState(2);
    const [copied, setCopied] = useState(false);

    const formatJSON = useCallback(() => {
        if (!input.trim()) {
            setError("Please enter JSON data");
            setOutput("");
            return;
        }

        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, indent));
            setError("");
        } catch (e) {
            setError(`Invalid JSON: ${(e as Error).message}`);
            setOutput("");
        }
    }, [input, indent]);

    const minifyJSON = useCallback(() => {
        if (!input.trim()) {
            setError("Please enter JSON data");
            setOutput("");
            return;
        }

        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed));
            setError("");
        } catch (e) {
            setError(`Invalid JSON: ${(e as Error).message}`);
            setOutput("");
        }
    }, [input]);

    const validateJSON = useCallback(() => {
        if (!input.trim()) {
            setError("Please enter JSON data");
            return;
        }

        try {
            JSON.parse(input);
            setError("");
            setOutput("✓ Valid JSON");
        } catch (e) {
            setError(`Invalid JSON: ${(e as Error).message}`);
            setOutput("");
        }
    }, [input]);

    const copyOutput = async () => {
        if (output && !output.startsWith("✓")) {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const clearAll = () => {
        setInput("");
        setOutput("");
        setError("");
    };

    const loadSample = () => {
        const sample = {
            name: "Tools Hub",
            version: "1.0.0",
            features: ["Image Conversion", "PDF Tools", "Text Utilities"],
            settings: {
                theme: "dark",
                language: "en",
                notifications: true,
            },
            stats: {
                users: 10000,
                tools: 25,
                uptime: 99.9,
            },
        };
        setInput(JSON.stringify(sample));
        setOutput("");
        setError("");
    };

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
                <button
                    onClick={formatJSON}
                    className="px-4 py-2 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors"
                >
                    Beautify
                </button>
                <button
                    onClick={minifyJSON}
                    className="px-4 py-2 bg-background-tertiary border border-border hover:border-accent/50 text-foreground font-medium rounded-lg transition-colors"
                >
                    Minify
                </button>
                <button
                    onClick={validateJSON}
                    className="px-4 py-2 bg-background-tertiary border border-border hover:border-accent/50 text-foreground font-medium rounded-lg transition-colors"
                >
                    Validate
                </button>
                <div className="flex items-center gap-2 ml-auto">
                    <label className="text-sm text-foreground-secondary">Indent:</label>
                    <select
                        value={indent}
                        onChange={(e) => setIndent(Number(e.target.value))}
                        className="px-2 py-1 bg-background-tertiary border border-border rounded-lg text-foreground text-sm"
                    >
                        <option value={2}>2 spaces</option>
                        <option value={4}>4 spaces</option>
                        <option value={1}>Tab</option>
                    </select>
                </div>
            </div>

            {/* Input/Output Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">Input</label>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={loadSample}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                Load Sample
                            </button>
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
                        placeholder='{"key": "value"}'
                        className="w-full h-80 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none font-mono text-sm"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">Output</label>
                        {output && !output.startsWith("✓") && (
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
                        placeholder="Formatted JSON will appear here..."
                        className={`w-full h-80 px-4 py-3 bg-background-tertiary border rounded-xl text-foreground placeholder:text-foreground-muted resize-none font-mono text-sm ${output.startsWith("✓") ? "border-success" : "border-border"
                            }`}
                    />
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="flex items-start gap-3 p-4 bg-error/10 border border-error/20 rounded-xl">
                    <svg
                        className="w-5 h-5 text-error flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="text-sm text-error">{error}</p>
                </div>
            )}
        </div>
    );
}
