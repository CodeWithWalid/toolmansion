import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    CATEGORIES,
    getCategoryBySlug,
    getToolsByCategory,
} from "@/data/toolsRegistry";
import { ToolGrid } from "@/components/directory/ToolGrid";
import { ImageToolsContent, imageToolsFAQ } from "./ImageToolsContent";
import { PdfToolsContent, pdfToolsFAQ } from "./PdfToolsContent";
import { DevToolsContent, devToolsFAQ } from "./DevToolsContent";
import { TextToolsContent, textToolsFAQ } from "./TextToolsContent";
import { GeneratorsContent, generatorsFAQ } from "./GeneratorsContent";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        slug: category.slug,
    }));
}

// SEO-optimized titles for categories (without | ToolMansion - layout adds it)
const categorySeoData: Record<string, { 
    title: string; 
    description: string; 
    keywords: string[];
    h1?: string;
}> = {
    image: {
        title: "Image Tools - Free Browser-Based Image Editor & Converter",
        h1: "Free Image Tools — Convert, Resize, Compress & Edit Privately",
        description: "Free browser-based image tools. Convert between JPG, PNG, WebP, resize, compress, crop, add watermarks — all processing happens locally on your device. No uploads, 100% private.",
        keywords: [
            "image tools", 
            "browser image editor", 
            "offline image converter",
            "private image resizer",
            "compress images without uploading",
            "free image editor online",
            "local image processing",
            "secure photo editor"
        ],
    },
    pdf: {
        title: "PDF Tools - Merge, Split & Convert PDFs Online",
        description: "Free PDF tools that work offline in your browser. Merge multiple PDFs, split pages, convert to images — 100% private, no file uploads required.",
        keywords: ["pdf tools", "merge pdf", "split pdf", "pdf converter", "offline pdf"],
    },
    text: {
        title: "Text Tools - Word Counter, Case Converter & More",
        description: "Free text manipulation tools. Count words, convert case, remove duplicates, extract emails/URLs — all processed locally in your browser for complete privacy.",
        keywords: ["text tools", "word counter", "case converter", "text utilities"],
    },
    dev: {
        title: "Developer Tools - JSON Formatter, Base64, UUID Generator",
        description: "Free developer utilities that run in your browser. Format JSON, encode Base64, generate UUIDs and QR codes. No internet required after load.",
        keywords: ["developer tools", "json formatter", "base64 encoder", "uuid generator", "dev utilities"],
    },
    generators: {
        title: "Online Generators - QR Codes, Passwords, UUIDs",
        description: "Free online generators for QR codes, secure passwords, UUIDs, and Lorem Ipsum. Generate instantly in your browser without uploading any data.",
        keywords: ["qr code generator", "password generator", "uuid generator", "online generators"],
    },
};

export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    const seoData = categorySeoData[slug];

    return {
        title: seoData?.title || `${category.name} | ToolMansion`,
        description: seoData?.description || category.description,
        keywords: seoData?.keywords || [category.name, "tools"],
        alternates: {
            canonical: `/category/${slug}`,
        },
        openGraph: {
            title: seoData?.title || `${category.name} | ToolMansion`,
            description: seoData?.description || category.description,
            url: `/category/${slug}`,
            type: "website",
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const tools = getToolsByCategory(slug);
    const liveCount = tools.filter((t) => t.status === "Live").length;
    const seoData = categorySeoData[slug];

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://toolmansion.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": category.name,
                "item": `https://toolmansion.com/category/${slug}`
            }
        ]
    };

    // FAQ Schema for category pages
    const faqSchema = slug === 'image' ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": imageToolsFAQ.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : slug === 'pdf' ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pdfToolsFAQ.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : slug === 'dev' ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": devToolsFAQ.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : slug === 'text' ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": textToolsFAQ.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : slug === 'generators' ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": generatorsFAQ.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // ItemList Schema for category pages
    const itemListSchema = slug === 'image' || slug === 'pdf' || slug === 'dev' || slug === 'text' || slug === 'generators' ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `ToolMansion ${category.name}`,
        "description": `Complete collection of free browser-based ${category.name.toLowerCase()}`,
        "itemListElement": tools
            .filter(t => t.status === "Live")
            .map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": tool.name,
                "description": tool.description,
                "url": `https://toolmansion.com/tools/${tool.slug}`
            }))
    } : null;

    return (
        <div className="min-h-screen py-12 md:py-20">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {itemListSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
                />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 text-5xl mb-6">
                        {category.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {seoData?.h1 || category.name}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                        {seoData?.description || category.description}
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm">
                        <span className="text-muted-foreground">
                            {tools.length} tools
                        </span>
                        {liveCount > 0 && (
                            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                {liveCount} live
                            </span>
                        )}
                    </div>
                </div>

                {/* Enhanced Content for Image Tools */}
                {slug === 'image' ? (
                    <>
                        <ImageToolsContent tools={tools} />
                        
                        {/* FAQ Section */}
                        <section className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                Frequently Asked Questions About Our Image Tools
                            </h2>
                            <div className="space-y-4">
                                {imageToolsFAQ.map((faq, index) => (
                                    <div 
                                        key={index}
                                        className="bg-card border border-border rounded-xl overflow-hidden"
                                    >
                                        <details className="group">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                                                <h3 className="font-semibold text-foreground pr-4">
                                                    {faq.question}
                                                </h3>
                                                <svg 
                                                    className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                ) : slug === 'pdf' ? (
                    /* Enhanced Content for PDF Tools */
                    <>
                        <PdfToolsContent tools={tools} />
                        
                        {/* FAQ Section */}
                        <section className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                Frequently Asked Questions About Our PDF Tools
                            </h2>
                            <div className="space-y-4">
                                {pdfToolsFAQ.map((faq, index) => (
                                    <div 
                                        key={index}
                                        className="bg-card border border-border rounded-xl overflow-hidden"
                                    >
                                        <details className="group">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                                                <h3 className="font-semibold text-foreground pr-4">
                                                    {faq.question}
                                                </h3>
                                                <svg 
                                                    className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                ) : slug === 'dev' ? (
                    /* Enhanced Content for Developer Tools */
                    <>
                        <DevToolsContent tools={tools} />
                        
                        {/* FAQ Section */}
                        <section className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                Frequently Asked Questions About Our Developer Tools
                            </h2>
                            <div className="space-y-4">
                                {devToolsFAQ.map((faq, index) => (
                                    <div 
                                        key={index}
                                        className="bg-card border border-border rounded-xl overflow-hidden"
                                    >
                                        <details className="group">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                                                <h3 className="font-semibold text-foreground pr-4">
                                                    {faq.question}
                                                </h3>
                                                <svg 
                                                    className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                ) : slug === 'text' ? (
                    /* Enhanced Content for Text Tools */
                    <>
                        <TextToolsContent tools={tools} />
                        
                        {/* FAQ Section */}
                        <section className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                Frequently Asked Questions About Our Text Tools
                            </h2>
                            <div className="space-y-4">
                                {textToolsFAQ.map((faq, index) => (
                                    <div 
                                        key={index}
                                        className="bg-card border border-border rounded-xl overflow-hidden"
                                    >
                                        <details className="group">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                                                <h3 className="font-semibold text-foreground pr-4">
                                                    {faq.question}
                                                </h3>
                                                <svg 
                                                    className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                ) : slug === 'generators' ? (
                    /* Enhanced Content for Generators */
                    <>
                        <GeneratorsContent tools={tools} />
                        
                        {/* FAQ Section */}
                        <section className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                Frequently Asked Questions About Our Generators
                            </h2>
                            <div className="space-y-4">
                                {generatorsFAQ.map((faq, index) => (
                                    <div 
                                        key={index}
                                        className="bg-card border border-border rounded-xl overflow-hidden"
                                    >
                                        <details className="group">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                                                <h3 className="font-semibold text-foreground pr-4">
                                                    {faq.question}
                                                </h3>
                                                <svg 
                                                    className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                ) : (
                    /* Standard Tool Grid for Other Categories */
                    <ToolGrid tools={tools} />
                )}
            </div>
        </div>
    );
}
