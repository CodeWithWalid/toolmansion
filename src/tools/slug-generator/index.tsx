"use client";

import { useState, useCallback, useEffect } from "react";

type SeparatorType = "hyphen" | "underscore" | "dot";

export default function SlugGeneratorTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [separator, setSeparator] = useState<SeparatorType>("hyphen");
    const [lowercase, setLowercase] = useState(true);
    const [removeStopWords, setRemoveStopWords] = useState(false);
    const [copied, setCopied] = useState(false);

    const STOP_WORDS = new Set([
        "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
        "of", "with", "by", "from", "up", "about", "into", "through", "during",
        "before", "after", "above", "below", "between", "under", "again",
        "further", "then", "once", "here", "there", "when", "where", "why",
        "how", "all", "any", "both", "each", "few", "more", "most", "other",
        "some", "such", "no", "nor", "not", "only", "own", "same", "so",
        "than", "too", "very", "can", "will", "just", "should", "now"
    ]);

    const generateSlug = useCallback((text: string): string => {
        if (!text) return "";

        let slug = text;

        // Convert to lowercase if option is enabled
        if (lowercase) {
            slug = slug.toLowerCase();
        }

        // Remove stop words if option is enabled
        if (removeStopWords) {
            slug = slug
                .split(/\s+/)
                .filter(word => !STOP_WORDS.has(word.toLowerCase()))
                .join(" ");
        }

        // Replace special characters and spaces based on separator
        const separatorChar = separator === "hyphen" ? "-" : separator === "underscore" ? "_" : ".";
        
        slug = slug
            // Replace spaces and underscores/hyphens with selected separator
            .replace(/[\s_\-]+/g, separatorChar)
            // Remove special characters except alphanumeric and selected separator
            .replace(new RegExp(`[^a-zA-Z0-9${separatorChar === "." ? "\\." : separatorChar}]`, "g"), "")
            // Remove multiple consecutive separators
            .replace(new RegExp(`${separatorChar === "." ? "\\." : separatorChar}+`, "g"), separatorChar)
            // Remove leading and trailing separators
            .replace(new RegExp(`^${separatorChar === "." ? "\\." : separatorChar}+|${separatorChar === "." ? "\\." : separatorChar}+$`, "g"), "");

        return slug;
    }, [lowercase, removeStopWords, separator]);

    // Auto-generate slug when input or options change
    useEffect(() => {
        setOutput(generateSlug(input));
    }, [input, generateSlug]);

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
    };

    const getSeparatorLabel = () => {
        switch (separator) {
            case "hyphen": return "Hyphen (-)";
            case "underscore": return "Underscore (_)";
            case "dot": return "Dot (.)";
        }
    };

    return (
        <div className="space-y-6">
            {/* Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        Enter your text
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
                    placeholder="Type or paste your text here... e.g., 'My Blog Post Title!'"
                    className="w-full h-32 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                />
            </div>

            {/* Options */}
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-4">Options</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Separator */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Separator
                        </label>
                        <select
                            value={separator}
                            onChange={(e) => setSeparator(e.target.value as SeparatorType)}
                            className="w-full px-3 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="hyphen">Hyphen (-)</option>
                            <option value="underscore">Underscore (_)</option>
                            <option value="dot">Dot (.)</option>
                        </select>
                    </div>

                    {/* Lowercase Toggle */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Case
                        </label>
                        <button
                            onClick={() => setLowercase(!lowercase)}
                            className={`w-full px-3 py-2 rounded-lg border transition-colors text-left ${
                                lowercase 
                                    ? "bg-accent/10 border-accent text-accent" 
                                    : "bg-background-tertiary border-border text-foreground"
                            }`}
                        >
                            {lowercase ? "lowercase ✓" : "Preserve Case"}
                        </button>
                    </div>

                    {/* Stop Words Toggle */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Stop Words
                        </label>
                        <button
                            onClick={() => setRemoveStopWords(!removeStopWords)}
                            className={`w-full px-3 py-2 rounded-lg border transition-colors text-left ${
                                removeStopWords 
                                    ? "bg-accent/10 border-accent text-accent" 
                                    : "bg-background-tertiary border-border text-foreground"
                            }`}
                        >
                            {removeStopWords ? "Remove ✓" : "Keep All Words"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Output */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        Generated Slug
                        {output && (
                            <span className="ml-2 text-xs text-foreground-muted">
                                ({output.length} characters)
                            </span>
                        )}
                    </label>
                    {output && (
                        <button
                            onClick={copyOutput}
                            className="text-sm text-foreground-secondary hover:text-accent transition-colors flex items-center gap-1"
                        >
                            {copied ? (
                                <>
                                    <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy
                                </>
                            )}
                        </button>
                    )}
                </div>
                <div className="relative">
                    <input
                        type="text"
                        value={output}
                        readOnly
                        placeholder="Your slug will appear here..."
                        className="w-full px-4 py-4 bg-background-tertiary border border-accent/50 rounded-xl text-foreground font-mono text-lg"
                    />
                    {output && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <span className="text-xs text-foreground-muted bg-background-secondary px-2 py-1 rounded">
                                {getSeparatorLabel()}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Preview */}
            {output && (
                <div className="p-4 bg-background-secondary rounded-xl">
                    <h4 className="text-sm font-medium text-foreground mb-2">URL Preview</h4>
                    <p className="text-sm text-foreground-secondary font-mono break-all">
                        https://yoursite.com/<span className="text-accent">{output}</span>
                    </p>
                </div>
            )}

            {/* Info */}
            <div className="p-4 bg-background-secondary rounded-xl">
                <h4 className="text-sm font-medium text-foreground mb-2">What is a URL Slug?</h4>
                <p className="text-sm text-foreground-secondary">
                    A URL slug is the part of a web address that identifies a specific page in a 
                    human-readable format. For example, in &quot;toolmansion.com/tools/slug-generator&quot;, 
                    the slug is &quot;slug-generator&quot;. Good slugs improve SEO and make URLs easier to 
                    understand and share.
                </p>
            </div>
        </div>
    );
}
