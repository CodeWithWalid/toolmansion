import Link from "next/link";
import { ToolDefinition, Category, getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";
import { FAQ } from "./FAQ";
import { ChevronRight, Home, ShieldCheck, Zap } from "lucide-react";

interface ToolShellProps {
    tool: ToolDefinition;
    category?: Category;
    children: React.ReactNode;
}

export function ToolShell({ tool, category, children }: ToolShellProps) {
    const relatedTools = tool.relatedTools
        .map((slug) => getToolBySlug(slug))
        .filter(Boolean) as ToolDefinition[];

    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolmansion.com';

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": BASE_URL
            },
            ...(category ? [{
                "@type": "ListItem",
                "position": 2,
                "name": category.name,
                "item": `${BASE_URL}/category/${category.slug}`
            }] : []),
            {
                "@type": "ListItem",
                "position": category ? 3 : 2,
                "name": tool.name,
                "item": `${BASE_URL}/tools/${tool.slug}`
            }
        ]
    };

    return (
        <div className="min-h-screen pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Hero Section */}
            <div className="bg-muted/30 border-b border-border mb-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-foreground transition-colors p-1 hover:bg-muted rounded-md">
                            <Home className="w-4 h-4" />
                        </Link>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                        {category && (
                            <>
                                <Link
                                    href={`/category/${category.slug}`}
                                    className="hover:text-foreground transition-colors hover:underline"
                                >
                                    {category.name}
                                </Link>
                                <ChevronRight className="w-4 h-4 opacity-50" />
                            </>
                        )}
                        <span className="text-foreground font-medium">{tool.name}</span>
                    </nav>

                    {/* Header Content */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="max-w-3xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                    {tool.seo.h1 || tool.name}
                                </h1>
                                {tool.status === "Live" ? (
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20 shadow-sm">
                                        Live
                                    </span>
                                ) : (
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trust Banner */}
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/10 rounded-xl mb-8">
                    <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">100% Private & Offline.</span>{" "}
                        Processed locally in your browser — your files never leave your device.
                    </p>
                </div>

                {/* Ad Placeholder (Desktop) */}
                <div className="hidden md:flex items-center justify-center h-[90px] w-full bg-muted/40 border border-border/50 rounded-lg mb-8 text-xs text-muted-foreground/50 overflow-hidden">
                    <span className="opacity-50">Advertisement Space (CLS Protected)</span>
                </div>



                {/* Tool Content */}
                <div className="bg-background-secondary border border-border rounded-2xl p-6 md:p-8 mb-12">
                    {children}
                </div>

                {/* Ad Placeholder (Bottom) */}
                <div className="flex items-center justify-center min-h-[250px] bg-background-tertiary/50 border border-border/50 rounded-xl mb-12 text-sm text-foreground-secondary">
                    {/* Advertisement Space */}
                </div>

                {/* FAQ Section */}
                {tool.seo.faq.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                            Frequently Asked Questions
                        </h2>
                        <FAQ faqs={tool.seo.faq} toolName={tool.name} />
                    </div>
                )}

                {/* Related Tools */}
                {relatedTools.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                            Related Tools
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {relatedTools.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/tools/${related.slug}`}
                                    className="flex items-center gap-4 p-4 bg-background-secondary border border-border rounded-xl hover:border-border-hover transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-xl">
                                        {getCategoryBySlug(related.category)?.icon || "🔧"}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-foreground truncate">
                                            {related.name}
                                        </h3>
                                        <span
                                            className={`text-xs ${related.status === "Live"
                                                ? "text-success"
                                                : "text-warning"
                                                }`}
                                        >
                                            {related.status}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

