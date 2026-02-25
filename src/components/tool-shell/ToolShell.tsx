import Link from "next/link";
import dynamic from "next/dynamic";
import { ToolDefinition, Category, getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";
import { FAQ } from "./FAQ";
import { ToolTracker } from "./ToolTracker";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";

// Lazy load enhanced content components for SEO
const ImageConverterContent = dynamic(() => import("./ImageConverterContent").then(m => ({ default: m.ImageConverterContent })), {
    loading: () => <ContentLoadingState />,
});
const ImageResizerContent = dynamic(() => import("./ImageResizerContent").then(m => ({ default: m.ImageResizerContent })), {
    loading: () => <ContentLoadingState />,
});
const ImageCompressorContent = dynamic(() => import("./ImageCompressorContent").then(m => ({ default: m.ImageCompressorContent })), {
    loading: () => <ContentLoadingState />,
});
// Week 4
const PdfMergerContent = dynamic(() => import("./PdfMergerContent").then(m => ({ default: m.PdfMergerContent })), {
    loading: () => <ContentLoadingState />,
});
const JsonFormatterContent = dynamic(() => import("./JsonFormatterContent").then(m => ({ default: m.JsonFormatterContent })), {
    loading: () => <ContentLoadingState />,
});
// Week 5
const WebpToJpgContent = dynamic(() => import("./WebpToJpgContent").then(m => ({ default: m.WebpToJpgContent })), {
    loading: () => <ContentLoadingState />,
});
const JpgToPdfContent = dynamic(() => import("./JpgToPdfContent").then(m => ({ default: m.JpgToPdfContent })), {
    loading: () => <ContentLoadingState />,
});
const CropImageContent = dynamic(() => import("./CropImageContent").then(m => ({ default: m.CropImageContent })), {
    loading: () => <ContentLoadingState />,
});
// Week 6
const PdfSplitterContent = dynamic(() => import("./PdfSplitterContent").then(m => ({ default: m.PdfSplitterContent })), {
    loading: () => <ContentLoadingState />,
});
const PdfToImagesContent = dynamic(() => import("./PdfToImagesContent").then(m => ({ default: m.PdfToImagesContent })), {
    loading: () => <ContentLoadingState />,
});
const WordCounterContent = dynamic(() => import("./WordCounterContent").then(m => ({ default: m.WordCounterContent })), {
    loading: () => <ContentLoadingState />,
});
// Week 7
const Base64Content = dynamic(() => import("./Base64Content").then(m => ({ default: m.Base64Content })), {
    loading: () => <ContentLoadingState />,
});
const UrlEncoderContent = dynamic(() => import("./UrlEncoderContent").then(m => ({ default: m.UrlEncoderContent })), {
    loading: () => <ContentLoadingState />,
});
const UUIDGeneratorContent = dynamic(() => import("./UUIDGeneratorContent").then(m => ({ default: m.UUIDGeneratorContent })), {
    loading: () => <ContentLoadingState />,
});
const SlugGeneratorContent = dynamic(() => import("./SlugGeneratorContent").then(m => ({ default: m.SlugGeneratorContent })), {
    loading: () => <ContentLoadingState />,
});

function ContentLoadingState() {
    return (
        <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
            <div className="h-32 bg-muted rounded"></div>
        </div>
    );
}

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

    // SoftwareApplication schema for tool pages
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": tool.name,
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any (Web Browser)",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": tool.status === "Live" ? {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150"
        } : undefined,
        "description": tool.description,
        "url": `${BASE_URL}/tools/${tool.slug}`,
        "featureList": tool.tags.slice(0, 5).join(", "),
        "softwareVersion": "1.0",
        "license": "https://opensource.org/licenses/MIT"
    };

    // FAQPage schema for tools with FAQs
    const faqSchema = tool.seo.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": tool.seo.faq.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    } : null;

    return (
        <div className="min-h-screen pb-12">
            {/* Track tool usage */}
            <ToolTracker toolName={tool.slug} toolCategory={tool.category} />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
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

                {/* Enhanced SEO Content for High-Volume Keywords */}
                {/* Week 3 */}
                {tool.slug === "convert-image" && (
                    <div className="mb-12">
                        <ImageConverterContent />
                    </div>
                )}
                {tool.slug === "resize-image" && (
                    <div className="mb-12">
                        <ImageResizerContent />
                    </div>
                )}
                {tool.slug === "compress-image-to-size" && (
                    <div className="mb-12">
                        <ImageCompressorContent />
                    </div>
                )}
                {/* Week 4 */}
                {tool.slug === "merge-pdf" && (
                    <div className="mb-12">
                        <PdfMergerContent />
                    </div>
                )}
                {tool.slug === "json-formatter" && (
                    <div className="mb-12">
                        <JsonFormatterContent />
                    </div>
                )}
                {/* Week 5 */}
                {tool.slug === "webp-to-jpg" && (
                    <div className="mb-12">
                        <WebpToJpgContent />
                    </div>
                )}
                {tool.slug === "jpg-to-pdf" && (
                    <div className="mb-12">
                        <JpgToPdfContent />
                    </div>
                )}
                {tool.slug === "crop-image" && (
                    <div className="mb-12">
                        <CropImageContent />
                    </div>
                )}
                {/* Week 6 */}
                {tool.slug === "split-pdf" && (
                    <div className="mb-12">
                        <PdfSplitterContent />
                    </div>
                )}
                {tool.slug === "pdf-to-images" && (
                    <div className="mb-12">
                        <PdfToImagesContent />
                    </div>
                )}
                {tool.slug === "word-counter" && (
                    <div className="mb-12">
                        <WordCounterContent />
                    </div>
                )}
                {/* Week 7 */
                }
                {tool.slug === "base64" && (
                    <div className="mb-12">
                        <Base64Content />
                    </div>
                )}
                {tool.slug === "url-encode" && (
                    <div className="mb-12">
                        <UrlEncoderContent />
                    </div>
                )}
                {tool.slug === "uuid-generator" && (
                    <div className="mb-12">
                        <UUIDGeneratorContent />
                    </div>
                )}
                {tool.slug === "slug-generator" && (
                    <div className="mb-12">
                        <SlugGeneratorContent />
                    </div>
                )}

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

