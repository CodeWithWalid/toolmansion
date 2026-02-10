"use client";

import { useState, useCallback } from "react";

export default function ExtractURLsTool() {
    const [input, setInput] = useState("");
    const [urls, setUrls] = useState<string[]>([]);
    const [removeDuplicates, setRemoveDuplicates] = useState(true);
    const [sortUrls, setSortUrls] = useState(false);
    const [copied, setCopied] = useState(false);

    const extractUrls = useCallback(() => {
        if (!input.trim()) {
            setUrls([]);
            return;
        }

        // URL regex pattern - matches http, https, ftp URLs
        const urlRegex = /https?:\/\/[^\s<>"{}|\\^`\[\]]+/gi;
        let matches = input.match(urlRegex) || [];

        // Clean up URLs (remove trailing punctuation)
        matches = matches.map((url) => url.replace(/[.,;:!?)"'\]]+$/, ""));

        // Remove duplicates if option is enabled
        if (removeDuplicates) {
            matches = [...new Set(matches)];
        }

        // Sort if option is enabled
        if (sortUrls) {
            matches = matches.sort((a, b) => a.localeCompare(b));
        }

        setUrls(matches);
    }, [input, removeDuplicates, sortUrls]);

    const copyUrls = async () => {
        await navigator.clipboard.writeText(urls.join("\n"));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const downloadUrls = () => {
        const blob = new Blob([urls.join("\n")], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `extracted-urls-${new Date().toISOString().split("T")[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const clearAll = () => {
        setInput("");
        setUrls([]);
    };

    const loadSample = () => {
        setInput(`Check out our website at https://example.com for more information.
Documentation is available at https://docs.example.com/guide
API endpoint: https://api.example.com/v1/users
Also see: https://github.com/example/repo and https://example.com (duplicate)
Blog post: https://blog.example.com/2024/01/post-title
FTP server: ftp://files.example.com/downloads`);
    };

    return (
        <div className="space-y-6">
            {/* Options */}
            <div className="flex flex-wrap gap-4 p-4 bg-background-secondary rounded-xl">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={removeDuplicates}
                        onChange={(e) => setRemoveDuplicates(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Remove duplicates</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={sortUrls}
                        onChange={(e) => setSortUrls(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Sort alphabetically</span>
                </label>
            </div>

            {/* Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        Text to Extract URLs From
                    </label>
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
                    placeholder="Paste your text containing URLs..."
                    className="w-full h-48 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                />
            </div>

            {/* Extract Button */}
            <button
                onClick={extractUrls}
                className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
            >
                Extract URLs
            </button>

            {/* Results */}
            {urls.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                            Found {urls.length} URL{urls.length > 1 ? "s" : ""}
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={downloadUrls}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                Download
                            </button>
                            <button
                                onClick={copyUrls}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                {copied ? "Copied!" : "Copy All"}
                            </button>
                        </div>
                    </div>

                    {/* URL List */}
                    <div className="max-h-64 overflow-y-auto space-y-1">
                        {urls.map((url, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 p-2 bg-background-tertiary rounded-lg group"
                            >
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-sm font-mono text-accent hover:underline truncate"
                                >
                                    {url}
                                </a>
                                <button
                                    onClick={async () => {
                                        await navigator.clipboard.writeText(url);
                                    }}
                                    className="opacity-0 group-hover:opacity-100 text-foreground-secondary hover:text-accent transition-all flex-shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* No Results */}
            {input && urls.length === 0 && (
                <div className="text-center py-8 text-foreground-secondary">
                    No URLs found in the text.
                </div>
            )}
        </div>
    );
}
