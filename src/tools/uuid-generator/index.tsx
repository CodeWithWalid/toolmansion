"use client";

import { useState, useCallback } from "react";

export default function UUIDGeneratorTool() {
    const [uuids, setUuids] = useState<string[]>([]);
    const [count, setCount] = useState(1);
    const [format, setFormat] = useState<"hyphenated" | "compact">("hyphenated");
    const [uppercase, setUppercase] = useState(false);
    const [copied, setCopied] = useState<number | "all" | null>(null);

    const generateUUID = useCallback((): string => {
        // Generate UUID v4 using crypto API
        const array = new Uint8Array(16);
        crypto.getRandomValues(array);

        // Set version (4) and variant bits
        array[6] = (array[6] & 0x0f) | 0x40;
        array[8] = (array[8] & 0x3f) | 0x80;

        const hex = Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");

        let uuid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;

        if (format === "compact") {
            uuid = uuid.replace(/-/g, "");
        }

        if (uppercase) {
            uuid = uuid.toUpperCase();
        }

        return uuid;
    }, [format, uppercase]);

    const generate = useCallback(() => {
        const newUuids = Array.from({ length: count }, () => generateUUID());
        setUuids(newUuids);
    }, [count, generateUUID]);

    const copyUUID = async (uuid: string, index: number) => {
        await navigator.clipboard.writeText(uuid);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    };

    const copyAll = async () => {
        await navigator.clipboard.writeText(uuids.join("\n"));
        setCopied("all");
        setTimeout(() => setCopied(null), 2000);
    };

    const downloadUUIDs = () => {
        const blob = new Blob([uuids.join("\n")], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `uuids-${new Date().toISOString().split("T")[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            {/* Options */}
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Options</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Count */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Count
                        </label>
                        <select
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="w-full px-3 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value={1}>1 UUID</option>
                            <option value={5}>5 UUIDs</option>
                            <option value={10}>10 UUIDs</option>
                            <option value={25}>25 UUIDs</option>
                            <option value={50}>50 UUIDs</option>
                            <option value={100}>100 UUIDs</option>
                        </select>
                    </div>

                    {/* Format */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Format
                        </label>
                        <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value as "hyphenated" | "compact")}
                            className="w-full px-3 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="hyphenated">Hyphenated (Standard)</option>
                            <option value="compact">Compact (No hyphens)</option>
                        </select>
                    </div>

                    {/* Case */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Case
                        </label>
                        <select
                            value={uppercase ? "upper" : "lower"}
                            onChange={(e) => setUppercase(e.target.value === "upper")}
                            className="w-full px-3 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="lower">lowercase</option>
                            <option value="upper">UPPERCASE</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={generate}
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Generate UUID{count > 1 ? "s" : ""}
            </button>

            {/* Output */}
            {uuids.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                            Generated {uuids.length} UUID{uuids.length > 1 ? "s" : ""}
                        </span>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={downloadUUIDs}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                Download
                            </button>
                            <button
                                onClick={copyAll}
                                className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                            >
                                {copied === "all" ? "Copied!" : "Copy all"}
                            </button>
                        </div>
                    </div>

                    {/* Single UUID */}
                    {uuids.length === 1 && (
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={uuids[0]}
                                readOnly
                                className="flex-1 px-4 py-4 bg-background-tertiary border border-accent/50 rounded-xl text-foreground font-mono text-lg text-center"
                            />
                            <button
                                onClick={() => copyUUID(uuids[0], 0)}
                                className="p-4 bg-background-tertiary border border-border hover:border-accent/50 rounded-xl transition-colors"
                            >
                                {copied === 0 ? (
                                    <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Multiple UUIDs */}
                    {uuids.length > 1 && (
                        <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
                            {uuids.map((uuid, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 p-3 bg-background-tertiary rounded-lg group"
                                >
                                    <span className="text-xs text-foreground-muted w-8">{i + 1}.</span>
                                    <span className="flex-1 font-mono text-sm truncate">{uuid}</span>
                                    <button
                                        onClick={() => copyUUID(uuid, i)}
                                        className="opacity-0 group-hover:opacity-100 text-foreground-secondary hover:text-accent transition-all"
                                    >
                                        {copied === i ? (
                                            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Info */}
            <div className="p-4 bg-background-secondary rounded-xl">
                <h4 className="text-sm font-medium text-foreground mb-2">About UUID v4</h4>
                <p className="text-sm text-foreground-secondary">
                    UUID v4 (Universally Unique Identifier) is a 128-bit identifier generated using
                    cryptographically secure random numbers. The probability of generating the same
                    UUID twice is practically zero, making them ideal for database keys, session IDs,
                    and distributed systems.
                </p>
            </div>
        </div>
    );
}
