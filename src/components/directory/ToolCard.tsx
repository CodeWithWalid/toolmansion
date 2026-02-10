import Link from "next/link";
import { ToolDefinition } from "@/data/toolsRegistry";
import { IconMapper } from "@/components/ui/IconMapper";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
    tool: ToolDefinition;
}

export function ToolCard({ tool }: ToolCardProps) {
    return (
        <Link
            href={`/tools/${tool.slug}`}
            className="group relative block bg-card hover:bg-muted/50 border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <IconMapper slug={tool.slug} category={tool.category} className="w-6 h-6" />
                </div>
                {tool.status === "Live" ? (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                        Live
                    </span>
                ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                        Soon
                    </span>
                )}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {tool.name}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                {tool.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                <span className="px-2 py-1 rounded-md bg-secondary">
                    {tool.difficulty}
                </span>
                {tool.featured && (
                    <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-600 border border-amber-500/20">
                        Featured
                    </span>
                )}
            </div>
        </Link>
    );
}
