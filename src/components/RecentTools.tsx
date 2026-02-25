"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getRecentTools, clearRecentTools, RecentTool } from "@/lib/recentTools";
import { getCategoryBySlug } from "@/data/toolsRegistry";
import { Clock, X, ArrowRight } from "lucide-react";

export function RecentTools() {
    const [tools, setTools] = useState<RecentTool[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTools(getRecentTools());
    }, []);

    const handleClear = () => {
        clearRecentTools();
        setTools([]);
    };

    // Don't render on server (hydration mismatch)
    if (!mounted || tools.length === 0) return null;

    return (
        <section className="py-8 border-b border-border/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-accent" />
                        <h2 className="text-lg font-semibold text-foreground">
                            Recently Used
                        </h2>
                        <span className="text-sm text-muted-foreground">
                            ({tools.length})
                        </span>
                    </div>
                    <button
                        onClick={handleClear}
                        className="text-sm text-muted-foreground hover:text-error transition-colors flex items-center gap-1"
                    >
                        <X className="w-4 h-4" />
                        Clear
                    </button>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                    {tools.map((tool) => {
                        const category = getCategoryBySlug(tool.category);
                        return (
                            <Link
                                key={tool.slug}
                                href={`/tools/${tool.slug}`}
                                className="flex-shrink-0 group flex items-center gap-3 p-3 bg-background-secondary border border-border hover:border-accent/50 rounded-xl transition-all min-w-[200px]"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-xl">
                                    {category?.icon || "🔧"}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-foreground text-sm truncate group-hover:text-accent transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {category?.name || tool.category}
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
