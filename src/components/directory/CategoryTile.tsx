import Link from "next/link";
import { Category, getToolsByCategory } from "@/data/toolsRegistry";
import { IconMapper } from "@/components/ui/IconMapper";
import { ArrowRight } from "lucide-react";

interface CategoryTileProps {
    category: Category;
}

export function CategoryTile({ category }: CategoryTileProps) {
    const tools = getToolsByCategory(category.slug);
    const liveCount = tools.filter((t) => t.status === "Live").length;

    return (
        <Link
            href={`/category/${category.slug}`}
            className="group relative overflow-hidden block bg-card hover:bg-muted/50 border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
        >
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <IconMapper category={category.slug} className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {category.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-medium">
                        <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                            {tools.length} Tools
                        </span>
                        {liveCount > 0 && (
                            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                {liveCount} Live
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
