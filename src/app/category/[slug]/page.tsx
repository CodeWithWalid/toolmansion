import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    CATEGORIES,
    getCategoryBySlug,
    getToolsByCategory,
} from "@/data/toolsRegistry";
import { ToolGrid } from "@/components/directory/ToolGrid";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        slug: category.slug,
    }));
}

// SEO-optimized titles for categories (without | ToolMansion - layout adds it)
const categorySeoData: Record<string, { title: string; description: string; keywords: string[] }> = {
    image: {
        title: "Image Tools - Resize, Convert & Compress Images",
        description: "Free browser-based image tools. Convert between JPG, PNG, WebP, resize, compress, crop, add watermarks — all processing happens locally on your device. No uploads.",
        keywords: ["image tools", "image converter", "resize image", "compress image", "browser image editor"],
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

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 text-5xl mb-6">
                        {category.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {category.name}
                    </h1>
                    <p className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-6">
                        {category.description}
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm">
                        <span className="text-foreground-secondary">
                            {tools.length} tools
                        </span>
                        {liveCount > 0 && (
                            <span className="text-success">{liveCount} live</span>
                        )}
                    </div>
                </div>

                {/* Tool Grid */}
                <ToolGrid tools={tools} />
            </div>
        </div>
    );
}
