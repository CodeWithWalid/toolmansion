import Link from "next/link";
import { ToolDefinition, getToolsByCategory } from "@/data/toolsRegistry";

interface ComingSoonProps {
    tool: ToolDefinition;
}

export function ComingSoon({ tool }: ComingSoonProps) {
    const categoryTools = getToolsByCategory(tool.category).filter(
        (t) => t.slug !== tool.slug && t.status === "Live"
    );

    return (
        <div className="text-center py-12">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-warning/20 text-5xl mb-6">
                🚧
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground mb-4">
                Coming Soon
            </h2>

            {/* Description */}
            <p className="text-foreground-secondary max-w-md mx-auto mb-8">
                We&apos;re working hard to bring you the {tool.name} tool. Check back soon
                or try one of our live tools below.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tool.tags.slice(0, 5).map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-background-tertiary text-foreground-secondary text-sm rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Alternative Tools */}
            {categoryTools.length > 0 && (
                <div className="border-t border-border pt-8 mt-8">
                    <p className="text-foreground-secondary mb-4">
                        Try these available tools instead:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categoryTools.slice(0, 3).map((t) => (
                            <Link
                                key={t.slug}
                                href={`/tools/${t.slug}`}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors"
                            >
                                {t.name}
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Back to Tools */}
            <div className="mt-8">
                <Link
                    href="/tools"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                    ← Browse all tools
                </Link>
            </div>
        </div>
    );
}
