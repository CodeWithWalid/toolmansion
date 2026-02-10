"use client";

import { useState, useCallback } from "react";

export default function ExtractEmailsTool() {
    const [input, setInput] = useState("");
    const [emails, setEmails] = useState<string[]>([]);
    const [removeDuplicates, setRemoveDuplicates] = useState(true);
    const [sortEmails, setSortEmails] = useState(false);
    const [copied, setCopied] = useState(false);

    const extractEmails = useCallback(() => {
        if (!input.trim()) {
            setEmails([]);
            return;
        }

        // Email regex pattern
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        let matches = input.match(emailRegex) || [];

        // Remove duplicates if option is enabled
        if (removeDuplicates) {
            matches = [...new Set(matches.map((e) => e.toLowerCase()))];
        }

        // Sort if option is enabled
        if (sortEmails) {
            matches = matches.sort((a, b) => a.localeCompare(b));
        }

        setEmails(matches);
    }, [input, removeDuplicates, sortEmails]);

    const copyEmails = async (format: "list" | "comma" | "semicolon") => {
        let text = "";
        switch (format) {
            case "list":
                text = emails.join("\n");
                break;
            case "comma":
                text = emails.join(", ");
                break;
            case "semicolon":
                text = emails.join("; ");
                break;
        }
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const downloadEmails = () => {
        const blob = new Blob([emails.join("\n")], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `extracted-emails-${new Date().toISOString().split("T")[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const clearAll = () => {
        setInput("");
        setEmails([]);
    };

    const loadSample = () => {
        setInput(`Contact us at support@example.com for any questions.
You can also reach our sales team at sales@company.org or john.doe@business.co.uk.
For partnerships, email partner@example.com or visit our website.
Duplicate: support@example.com
Invalid emails: @example.com, user@, test@test`);
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
                        checked={sortEmails}
                        onChange={(e) => setSortEmails(e.target.checked)}
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">Sort alphabetically</span>
                </label>
            </div>

            {/* Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        Text to Extract Emails From
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
                    placeholder="Paste your text containing email addresses..."
                    className="w-full h-48 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                />
            </div>

            {/* Extract Button */}
            <button
                onClick={extractEmails}
                className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
            >
                Extract Emails
            </button>

            {/* Results */}
            {emails.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                            Found {emails.length} email{emails.length > 1 ? "s" : ""}
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={downloadEmails}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                Download
                            </button>
                        </div>
                    </div>

                    {/* Copy Options */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => copyEmails("list")}
                            className="px-3 py-1.5 bg-background-tertiary border border-border hover:border-accent/50 rounded-lg text-sm transition-colors"
                        >
                            {copied ? "Copied!" : "Copy as list"}
                        </button>
                        <button
                            onClick={() => copyEmails("comma")}
                            className="px-3 py-1.5 bg-background-tertiary border border-border hover:border-accent/50 rounded-lg text-sm transition-colors"
                        >
                            Copy comma-separated
                        </button>
                        <button
                            onClick={() => copyEmails("semicolon")}
                            className="px-3 py-1.5 bg-background-tertiary border border-border hover:border-accent/50 rounded-lg text-sm transition-colors"
                        >
                            Copy semicolon-separated
                        </button>
                    </div>

                    {/* Email List */}
                    <div className="max-h-64 overflow-y-auto space-y-1">
                        {emails.map((email, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 p-2 bg-background-tertiary rounded-lg group"
                            >
                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="flex-1 text-sm font-mono">{email}</span>
                                <button
                                    onClick={async () => {
                                        await navigator.clipboard.writeText(email);
                                    }}
                                    className="opacity-0 group-hover:opacity-100 text-foreground-secondary hover:text-accent transition-all"
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
            {input && emails.length === 0 && (
                <div className="text-center py-8 text-foreground-secondary">
                    No email addresses found in the text.
                </div>
            )}
        </div>
    );
}
