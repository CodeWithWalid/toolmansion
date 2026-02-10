"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { TOOLS } from "@/data/toolsRegistry";
import { Search, X, ArrowRight } from "lucide-react";

export function SearchDialog() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const results = query.trim()
        ? TOOLS.filter(
            (tool) =>
                tool.name.toLowerCase().includes(query.toLowerCase()) ||
                tool.description.toLowerCase().includes(query.toLowerCase()) ||
                tool.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 8)
        : [];

    // Keyboard shortcut: Ctrl+K or Cmd+K to open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Focus input when dialog opens
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery("");
            setSelectedIndex(0);
        }
    }, [open]);

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0);
    }, [results.length]);

    const navigate = useCallback(
        (slug: string) => {
            setOpen(false);
            setQuery("");
            router.push(`/tools/${slug}`);
        },
        [router]
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === "Enter" && results[selectedIndex]) {
            navigate(results[selectedIndex].slug);
        }
    };

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 border border-border rounded-lg hover:bg-muted hover:text-foreground transition-all"
                aria-label="Search tools"
            >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-medium bg-background border border-border rounded">
                    ⌘K
                </kbd>
            </button>

            {/* Backdrop + Dialog */}
            {open && (
                <div className="fixed inset-0 z-[100]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Dialog */}
                    <div className="relative max-w-xl mx-auto mt-[15vh] px-4">
                        <div className="bg-popover border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                            {/* Search Input */}
                            <div className="flex items-center gap-3 px-4 border-b border-border">
                                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Search tools... (e.g. resize, PDF, JSON)"
                                    className="flex-1 py-4 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                                />
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1 text-muted-foreground hover:text-foreground rounded transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Results */}
                            <div className="max-h-[50vh] overflow-y-auto">
                                {query.trim() === "" ? (
                                    <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                                        Start typing to search across {TOOLS.length} tools...
                                    </div>
                                ) : results.length === 0 ? (
                                    <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                                        No tools found for &quot;{query}&quot;
                                    </div>
                                ) : (
                                    <div className="p-2">
                                        {results.map((tool, i) => (
                                            <button
                                                key={tool.slug}
                                                onClick={() => navigate(tool.slug)}
                                                onMouseEnter={() => setSelectedIndex(i)}
                                                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-colors ${i === selectedIndex
                                                        ? "bg-primary/10 text-foreground"
                                                        : "text-muted-foreground hover:bg-muted"
                                                    }`}
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-sm text-foreground truncate">
                                                        {tool.name}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground truncate mt-0.5">
                                                        {tool.description}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    <span
                                                        className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${tool.status === "Live"
                                                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                                            }`}
                                                    >
                                                        {tool.status}
                                                    </span>
                                                    {i === selectedIndex && (
                                                        <ArrowRight className="w-4 h-4 text-primary" />
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer hint */}
                            <div className="px-4 py-2 border-t border-border flex items-center gap-4 text-[11px] text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1 py-0.5 bg-muted border border-border rounded text-[10px]">↑↓</kbd>
                                    navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1 py-0.5 bg-muted border border-border rounded text-[10px]">↵</kbd>
                                    select
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1 py-0.5 bg-muted border border-border rounded text-[10px]">esc</kbd>
                                    close
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
