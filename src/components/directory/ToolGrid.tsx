"use client";

import { useState } from "react";
import { ToolDefinition } from "@/data/toolsRegistry";
import { ToolCard } from "./ToolCard";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";

interface ToolGridProps {
    tools: ToolDefinition[];
    showCategoryFilter?: boolean;
    categories?: { slug: string; name: string }[];
}

type SortOption = "popular" | "new" | "az";

export function ToolGrid({
    tools,
    showCategoryFilter = false,
    categories = [],
}: ToolGridProps) {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [sortBy, setSortBy] = useState<SortOption>("popular");

    // Filter tools
    let filteredTools = tools.filter((tool) => {
        const matchesSearch =
            search === "" ||
            tool.name.toLowerCase().includes(search.toLowerCase()) ||
            tool.description.toLowerCase().includes(search.toLowerCase()) ||
            tool.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

        const matchesCategory =
            selectedCategory === "all" || tool.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Sort tools
    filteredTools = [...filteredTools].sort((a, b) => {
        switch (sortBy) {
            case "az":
                return a.name.localeCompare(b.name);
            case "popular":
                // Featured first, then Live
                if (a.featured !== b.featured) return a.featured ? -1 : 1;
                if (a.status !== b.status) return a.status === "Live" ? -1 : 1;
                return 0;
            case "new":
                // Live tools first
                if (a.status !== b.status) return a.status === "Live" ? -1 : 1;
                return 0;
            default:
                return 0;
        }
    });

    return (
        <div className="space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                </div>

                {/* Category Filter */}
                {showCategoryFilter && categories.length > 0 && (
                    <div className="relative">
                        <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="pl-10 pr-10 py-3 bg-card border border-border rounded-xl text-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer min-w-[200px]"
                        >
                            <option value="all">All Categories</option>
                            {categories.map((cat) => (
                                <option key={cat.slug} value={cat.slug}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 opacity-50 pointer-events-none" />
                    </div>
                )}

                {/* Sort */}
                <div className="relative">
                    <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="pl-10 pr-10 py-3 bg-card border border-border rounded-xl text-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="popular">Popular</option>
                        <option value="new">Newest</option>
                        <option value="az">A-Z</option>
                    </select>
                </div>
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground text-sm font-medium">
                Found {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""}
            </p>

            {/* Grid */}
            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.map((tool) => (
                        <ToolCard key={tool.slug} tool={tool} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border border-dashed border-border rounded-3xl bg-muted/30">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">No tools found</h3>
                    <p className="text-muted-foreground">
                        Try adjusting your search terms or filters.
                    </p>
                </div>
            )}
        </div>
    );
}
