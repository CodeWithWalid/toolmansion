"use client";

import { useState, useCallback } from "react";

export default function TextDiffTool() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [diffResult, setDiffResult] = useState<{ type: string; value: string }[]>([]);
    const [viewMode, setViewMode] = useState<"inline" | "sidebyside">("inline");

    const computeDiff = useCallback(() => {
        const lines1 = text1.split("\n");
        const lines2 = text2.split("\n");
        const result: { type: string; value: string }[] = [];

        // Simple line-by-line diff
        const maxLen = Math.max(lines1.length, lines2.length);

        for (let i = 0; i < maxLen; i++) {
            const line1 = lines1[i];
            const line2 = lines2[i];

            if (line1 === undefined) {
                result.push({ type: "added", value: line2 });
            } else if (line2 === undefined) {
                result.push({ type: "removed", value: line1 });
            } else if (line1 === line2) {
                result.push({ type: "unchanged", value: line1 });
            } else {
                result.push({ type: "removed", value: line1 });
                result.push({ type: "added", value: line2 });
            }
        }

        setDiffResult(result);
    }, [text1, text2]);

    const loadSample = () => {
        setText1(`const greeting = "Hello";
const name = "World";
console.log(greeting + " " + name);
function oldFunction() {
  return true;
}`);
        setText2(`const greeting = "Hello";
const name = "Universe";
console.log(\`\${greeting} \${name}\`);
function newFunction() {
  return false;
}`);
    };

    const clearAll = () => {
        setText1("");
        setText2("");
        setDiffResult([]);
    };

    const stats = {
        added: diffResult.filter(d => d.type === "added").length,
        removed: diffResult.filter(d => d.type === "removed").length,
        unchanged: diffResult.filter(d => d.type === "unchanged").length,
    };

    return (
        <div className="space-y-6">
            {/* Input Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">Original Text</label>
                        <span className="text-xs text-foreground-secondary">{text1.split("\n").length} lines</span>
                    </div>
                    <textarea
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        placeholder="Paste original text here..."
                        className="w-full h-48 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted resize-none font-mono text-sm"
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">Modified Text</label>
                        <span className="text-xs text-foreground-secondary">{text2.split("\n").length} lines</span>
                    </div>
                    <textarea
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                        placeholder="Paste modified text here..."
                        className="w-full h-48 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted resize-none font-mono text-sm"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={computeDiff}
                    className="flex-1 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl"
                >
                    Compare Text
                </button>
                <button
                    onClick={loadSample}
                    className="px-6 py-3 bg-background-tertiary border border-border text-foreground rounded-xl hover:border-accent/50"
                >
                    Load Sample
                </button>
                <button
                    onClick={clearAll}
                    className="px-6 py-3 bg-background-tertiary border border-border text-foreground rounded-xl hover:border-accent/50"
                >
                    Clear
                </button>
            </div>

            {/* Results */}
            {diffResult.length > 0 && (
                <>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-success/10 border border-success/20 rounded-xl text-center">
                            <div className="text-2xl font-bold text-success">+{stats.added}</div>
                            <div className="text-sm text-foreground-secondary">Added</div>
                        </div>
                        <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-center">
                            <div className="text-2xl font-bold text-error">-{stats.removed}</div>
                            <div className="text-sm text-foreground-secondary">Removed</div>
                        </div>
                        <div className="p-4 bg-background-secondary rounded-xl text-center">
                            <div className="text-2xl font-bold text-foreground">{stats.unchanged}</div>
                            <div className="text-sm text-foreground-secondary">Unchanged</div>
                        </div>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center justify-center gap-2 p-1 bg-background-tertiary rounded-xl">
                        <button
                            onClick={() => setViewMode("inline")}
                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${viewMode === "inline" ? "bg-accent text-white" : "text-foreground-secondary"
                                }`}
                        >
                            Inline View
                        </button>
                        <button
                            onClick={() => setViewMode("sidebyside")}
                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${viewMode === "sidebyside" ? "bg-accent text-white" : "text-foreground-secondary"
                                }`}
                        >
                            Side by Side
                        </button>
                    </div>

                    {/* Diff Output */}
                    <div className="p-4 bg-background-secondary rounded-xl overflow-x-auto">
                        <pre className="font-mono text-sm">
                            {diffResult.map((line, i) => (
                                <div
                                    key={i}
                                    className={`px-3 py-1 rounded ${line.type === "added"
                                            ? "bg-success/20 text-success"
                                            : line.type === "removed"
                                                ? "bg-error/20 text-error"
                                                : "text-foreground"
                                        }`}
                                >
                                    <span className="inline-block w-8 text-foreground-muted">
                                        {line.type === "added" ? "+" : line.type === "removed" ? "-" : " "}
                                    </span>
                                    {line.value || " "}
                                </div>
                            ))}
                        </pre>
                    </div>
                </>
            )}
        </div>
    );
}
