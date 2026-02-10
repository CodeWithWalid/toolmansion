import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { TOOLS, getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";
import { ToolShell } from "@/components/tool-shell/ToolShell";
import { ComingSoon } from "@/components/tool-shell/ComingSoon";

interface ToolPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return TOOLS.map((tool) => ({
        slug: tool.slug,
    }));
}

export async function generateMetadata({
    params,
}: ToolPageProps): Promise<Metadata> {
    const { slug } = await params;
    const tool = getToolBySlug(slug);

    if (!tool) {
        return {
            title: "Tool Not Found",
        };
    }

    return {
        title: tool.seo.title,
        description: tool.seo.metaDescription,
        keywords: tool.tags,
        ...(tool.status === "ComingSoon" && {
            robots: { index: false, follow: true },
        }),
    };
}

// Dynamic tool imports
const toolComponents: Record<string, React.ComponentType> = {
    "convert-image": dynamic(() => import("@/tools/convert-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "resize-image": dynamic(() => import("@/tools/resize-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "crop-image": dynamic(() => import("@/tools/crop-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "word-counter": dynamic(() => import("@/tools/word-counter"), {
        loading: () => <ToolLoadingState />,
    }),
    "case-converter": dynamic(() => import("@/tools/case-converter"), {
        loading: () => <ToolLoadingState />,
    }),
    "json-formatter": dynamic(() => import("@/tools/json-formatter"), {
        loading: () => <ToolLoadingState />,
    }),
    "base64": dynamic(() => import("@/tools/base64"), {
        loading: () => <ToolLoadingState />,
    }),
    "url-encode": dynamic(() => import("@/tools/url-encode"), {
        loading: () => <ToolLoadingState />,
    }),
    "password-generator": dynamic(() => import("@/tools/password-generator"), {
        loading: () => <ToolLoadingState />,
    }),
    "uuid-generator": dynamic(() => import("@/tools/uuid-generator"), {
        loading: () => <ToolLoadingState />,
    }),
    "remove-duplicate-lines": dynamic(() => import("@/tools/remove-duplicate-lines"), {
        loading: () => <ToolLoadingState />,
    }),
    "extract-emails": dynamic(() => import("@/tools/extract-emails"), {
        loading: () => <ToolLoadingState />,
    }),
    "extract-urls": dynamic(() => import("@/tools/extract-urls"), {
        loading: () => <ToolLoadingState />,
    }),
    "rotate-flip-image": dynamic(() => import("@/tools/rotate-flip-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "qr-generator": dynamic(() => import("@/tools/qr-generator"), {
        loading: () => <ToolLoadingState />,
    }),
    "compress-image-to-size": dynamic(() => import("@/tools/compress-image-to-size"), {
        loading: () => <ToolLoadingState />,
    }),
    "hash-generator": dynamic(() => import("@/tools/hash-generator"), {
        loading: () => <ToolLoadingState />,
    }),
    "lorem-ipsum": dynamic(() => import("@/tools/lorem-ipsum"), {
        loading: () => <ToolLoadingState />,
    }),
    "watermark-image": dynamic(() => import("@/tools/watermark-image"), {
        loading: () => <ToolLoadingState />,
    }),
    "remove-exif": dynamic(() => import("@/tools/remove-exif"), {
        loading: () => <ToolLoadingState />,
    }),
    "webp-to-jpg": dynamic(() => import("@/tools/webp-to-jpg"), {
        loading: () => <ToolLoadingState />,
    }),
    "bulk-compress-images": dynamic(() => import("@/tools/bulk-compress-images"), {
        loading: () => <ToolLoadingState />,
    }),
    "jpg-to-pdf": dynamic(() => import("@/tools/jpg-to-pdf"), {
        loading: () => <ToolLoadingState />,
    }),
    "pdf-to-images": dynamic(() => import("@/tools/pdf-to-images"), {
        loading: () => <ToolLoadingState />,
    }),
    "merge-pdf": dynamic(() => import("@/tools/merge-pdf"), {
        loading: () => <ToolLoadingState />,
    }),
    "split-pdf": dynamic(() => import("@/tools/split-pdf"), {
        loading: () => <ToolLoadingState />,
    }),
    "color-picker": dynamic(() => import("@/tools/color-picker"), {
        loading: () => <ToolLoadingState />,
    }),
    "text-diff": dynamic(() => import("@/tools/text-diff"), {
        loading: () => <ToolLoadingState />,
    }),
    "markdown-preview": dynamic(() => import("@/tools/markdown-preview"), {
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

export default async function ToolPage({ params }: ToolPageProps) {
    const { slug } = await params;
    const tool = getToolBySlug(slug);

    if (!tool) {
        notFound();
    }

    const category = getCategoryBySlug(tool.category);
    const ToolComponent = toolComponents[slug];

    return (
        <ToolShell tool={tool} category={category}>
            {tool.status === "Live" && ToolComponent ? (
                <ToolComponent />
            ) : (
                <ComingSoon tool={tool} />
            )}
        </ToolShell>
    );
}
