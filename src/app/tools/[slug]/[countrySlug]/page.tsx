import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";
import { GEO_PAGES, getGeoPage } from "@/data/geoPages";
import { FAQ } from "@/components/tool-shell/FAQ";
import { ChevronRight, Home, Globe, ShieldCheck } from "lucide-react";

interface GeoPageProps {
    params: Promise<{ slug: string; countrySlug: string }>;
}

export async function generateStaticParams() {
    return GEO_PAGES.map((page) => ({
        slug: page.toolSlug,
        countrySlug: page.countrySlug,
    }));
}

export async function generateMetadata({ params }: GeoPageProps): Promise<Metadata> {
    const { slug, countrySlug } = await params;
    const geoPage = getGeoPage(slug, countrySlug);

    if (!geoPage) {
        return { title: "Not Found" };
    }

    return {
        title: geoPage.seo.title,
        description: geoPage.seo.metaDescription,
    };
}

// Reuse the same dynamic tool components
const toolComponents: Record<string, React.ComponentType> = {
    "resize-image": dynamic(() => import("@/tools/resize-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "convert-image": dynamic(() => import("@/tools/convert-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "crop-image": dynamic(() => import("@/tools/crop-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "compress-image-to-size": dynamic(() => import("@/tools/compress-image-to-size"), {
        loading: () => <ToolLoadingState />,
    }),
};

function ToolLoadingState() {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full spinner" />
                <p className="text-foreground-secondary">Loading tool...</p>
            </div>
        </div>
    );
}

export default async function GeoPage({ params }: GeoPageProps) {
    const { slug, countrySlug } = await params;
    const geoPage = getGeoPage(slug, countrySlug);

    if (!geoPage) {
        notFound();
    }

    const tool = getToolBySlug(slug);
    if (!tool || tool.status !== "Live") {
        notFound();
    }

    const category = getCategoryBySlug(tool.category);
    const ToolComponent = toolComponents[slug];

    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolmansion.com';

    // Breadcrumb schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: category?.name || "Tools",
                item: `${BASE_URL}/category/${tool.category}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: tool.name,
                item: `${BASE_URL}/tools/${slug}`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: geoPage.countryName,
                item: `${BASE_URL}/tools/${slug}/${countrySlug}`,
            },
        ],
    };

    return (
        <div className="min-h-screen pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-12 md:py-20 bg-gradient-to-b from-muted/80 to-background overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
                        <Link href="/" className="hover:text-foreground transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <ChevronRight className="w-3 h-3 opacity-40" />
                        {category && (
                            <>
                                <Link
                                    href={`/category/${tool.category}`}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {category.name}
                                </Link>
                                <ChevronRight className="w-3 h-3 opacity-40" />
                            </>
                        )}
                        <Link
                            href={`/tools/${slug}`}
                            className="hover:text-foreground transition-colors"
                        >
                            {tool.name}
                        </Link>
                        <ChevronRight className="w-3 h-3 opacity-40" />
                        <span className="text-foreground font-medium">{geoPage.countryName}</span>
                    </nav>

                    {/* Country Preset Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Globe className="w-4 h-4" />
                        Preset for {geoPage.countryName}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        {geoPage.seo.h1}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        Runs in your browser. No upload. No registration.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            100% Private
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-blue-500" />
                            {geoPage.countryName} Specification
                        </div>
                    </div>
                </div>
            </section>

            {/* Preset Info */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="p-4 bg-muted/50 border border-border rounded-xl">
                    <h3 className="font-semibold text-sm text-foreground mb-2">Applied Presets</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        {geoPage.presets.width && geoPage.presets.height && (
                            <span className="px-3 py-1 bg-background border border-border rounded-lg">
                                📐 {geoPage.presets.width} × {geoPage.presets.height} {geoPage.presets.unit || "px"}
                            </span>
                        )}
                        {geoPage.presets.dpi && (
                            <span className="px-3 py-1 bg-background border border-border rounded-lg">
                                🔍 {geoPage.presets.dpi} DPI
                            </span>
                        )}
                        {geoPage.presets.backgroundColor && (
                            <span className="px-3 py-1 bg-background border border-border rounded-lg flex items-center gap-2">
                                🎨 Background
                                <span
                                    className="w-4 h-4 rounded border"
                                    style={{ backgroundColor: geoPage.presets.backgroundColor }}
                                />
                            </span>
                        )}
                        {geoPage.presets.targetSizeKB && (
                            <span className="px-3 py-1 bg-background border border-border rounded-lg">
                                📦 Max {geoPage.presets.targetSizeKB}KB
                            </span>
                        )}
                    </div>
                </div>
            </section>

            {/* Tool Component */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {ToolComponent ? (
                    <ToolComponent />
                ) : (
                    <div className="text-center py-20 text-muted-foreground">
                        Tool component not available for GEO preset.
                    </div>
                )}
            </section>

            {/* Guidance Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4">
                        {tool.name} Guide for {geoPage.countryName}
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                        {geoPage.guidance.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {geoPage.seo.faq.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <FAQ faqs={geoPage.seo.faq} toolName={tool.name} />
                </section>
            )}

            {/* Internal Linking */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="p-6 bg-muted/30 border border-border rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">Related</h3>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href={`/tools/${slug}`}
                            className="px-4 py-2 bg-background border border-border rounded-lg text-sm hover:border-primary/50 transition-colors"
                        >
                            ← Back to {tool.name}
                        </Link>
                        {tool.relatedTools.slice(0, 3).map((relSlug) => {
                            const relTool = getToolBySlug(relSlug);
                            if (!relTool) return null;
                            return (
                                <Link
                                    key={relSlug}
                                    href={`/tools/${relSlug}`}
                                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm hover:border-primary/50 transition-colors"
                                >
                                    {relTool.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
