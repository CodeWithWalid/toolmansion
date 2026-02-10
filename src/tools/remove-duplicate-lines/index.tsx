"use client";

import { useState, useCallback } from "react";

export default function RemoveDuplicateLinesTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [caseSensitive, setCaseSensitive] = useState(true);
    const [trimLines, setTrimLines] = useState(true);
    const [removeEmpty, setRemoveEmpty] = useState(true);
    const [sortOutput, setSortOutput] = useState(false);
    const [stats, setStats] = useState<{ original: number; unique: number; removed: number } | null>(null);
    const [copied, setCopied] = useState(false);

    const removeDuplicates = useCallback(() => {
        if (!input.trim()) {
            setOutput("");
            setStats(null);
            return;
        }

        let lines = input.split("\n");
        const originalCount = lines.length;

        // Trim lines if option is enabled
        if (trimLines) {
            lines = lines.map((line) => line.trim());
        }

        // Remove empty lines if option is enabled
        if (removeEmpty) {
            lines = lines.filter((line) => line.length > 0);
        }

        // Remove duplicates
        const seen = new Set<string>();
        const unique: string[] = [];

        for (const line of lines) {
            const key = caseSensitive ? line : line.toLowerCase();
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(line);
            }
        }

        // Sort if option is enabled
        let result = unique;
        if (sortOutput) {
            result = [...unique].sort((a, b) =>
                caseSensitive
                    ? a.localeCompare(b)
                    : a.toLowerCase().localeCompare(b.toLowerCase())
            );
        }

        setOutput(result.join("\n"));
        setStats({
            original: originalCount,
            unique: result.length,
            removed: originalCount - result.length,
        });
    }, [input, caseSensitive, trimLines, removeEmpty, sortOutput]);

    const copyOutput = async () => {
        if (output) {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const clearAll = () => {
        setInput("");
        setOutput("");
        setStats(null);
    };

    const loadSample = () => {
        setInput(`apple
banana
Apple
cherry
banana
date
APPLE
elderberry
cherry
fig`);
    };

    return (
        <div className="space-y-6">
            {/* Options */}
            <div className="flex flex-wrap gap-4 p-4 bg-background-secondary rounded-xl">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={caseSensitive}
                        onChange={(e) => setCaseSensitive(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Case sensitive</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={trimLines}
                        onChange={(e) => setTrimLines(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Trim whitespace</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={removeEmpty}
                        onChange={(e) => setRemoveEmpty(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Remove empty lines</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={sortOutput}
                        onChange={(e) => setSortOutput(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Sort alphabetically</span>
                </label>
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
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter text with duplicate lines..."
                        className="w-full h-64 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none font-mono text-sm"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">Output</label>
                        {output && (
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
                        placeholder="Unique lines will appear here..."
                        className="w-full h-64 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted resize-none font-mono text-sm"
                    />
                </div>
            </div>

            {/* Process Button */}
            <button
                onClick={removeDuplicates}
                className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
            >
                Remove Duplicates
            </button>

            {/* Stats */}
            {stats && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-background-secondary rounded-xl text-center">
                        <div className="text-2xl font-bold text-foreground">{stats.original}</div>
                        <div className="text-sm text-foreground-secondary">Original Lines</div>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-xl text-center">
                        <div className="text-2xl font-bold text-accent">{stats.unique}</div>
                        <div className="text-sm text-foreground-secondary">Unique Lines</div>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-xl text-center">
                        <div className="text-2xl font-bold text-error">{stats.removed}</div>
                        <div className="text-sm text-foreground-secondary">Removed</div>
                    </div>
                </div>
            )}
        </div>
    );
}
