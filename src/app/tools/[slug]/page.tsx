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
        alternates: {
            canonical: `/tools/${tool.slug}`,
        },
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
    "slug-generator": dynamic(() => import("@/tools/slug-generator"), {
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

    // WebApplication Schema for this tool
    const toolSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": tool.name,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": tool.description,
        "featureList": tool.tags || [],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1000"
        },
    };

    // HowTo Schema for top tools
    const howToSchemas: Record<string, object> = {
        "convert-image": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Convert Images Between Formats",
            "description": "Convert images between JPG, PNG, and WebP formats using our browser-based tool without uploading to any server.",
            "totalTime": "PT2M",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
            },
            "supply": [{ "@type": "HowToSupply", "name": "Image file to convert" }],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion Image Converter" }],
            "step": [
                { "@type": "HowToStep", "name": "Open the Image Converter", "text": "Navigate to the Image Converter tool on ToolMansion.", "url": "https://toolmansion.com/tools/convert-image" },
                { "@type": "HowToStep", "name": "Upload Your Image", "text": "Drag and drop or click to select your image file (JPG, PNG, WebP, or GIF)." },
                { "@type": "HowToStep", "name": "Select Output Format", "text": "Choose your desired output format from the dropdown menu." },
                { "@type": "HowToStep", "name": "Adjust Quality (Optional)", "text": "Set the quality level for the output image (higher quality = larger file size)." },
                { "@type": "HowToStep", "name": "Download Converted Image", "text": "Click the download button to save your converted image to your device." }
            ]
        },
        "resize-image": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Resize Images Online",
            "description": "Resize images to exact dimensions with our browser-based tool. Perfect for social media, avatars, and web optimization.",
            "totalTime": "PT1M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "supply": [{ "@type": "HowToSupply", "name": "Image file to resize" }],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion Image Resizer" }],
            "step": [
                { "@type": "HowToStep", "name": "Open the Image Resizer", "text": "Navigate to the Image Resizer tool.", "url": "https://toolmansion.com/tools/resize-image" },
                { "@type": "HowToStep", "name": "Upload Your Image", "text": "Upload the image you want to resize." },
                { "@type": "HowToStep", "name": "Choose Dimensions", "text": "Enter custom width and height, or select a preset size for social media." },
                { "@type": "HowToStep", "name": "Maintain Aspect Ratio", "text": "Toggle aspect ratio lock to prevent distortion (recommended)." },
                { "@type": "HowToStep", "name": "Download Resized Image", "text": "Click download to save your resized image." }
            ]
        },
        "merge-pdf": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Merge PDF Files Online",
            "description": "Combine multiple PDF files into one document using our browser-based PDF merger tool.",
            "totalTime": "PT3M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "supply": [{ "@type": "HowToSupply", "name": "PDF files to merge" }],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion PDF Merger" }],
            "step": [
                { "@type": "HowToStep", "name": "Open PDF Merger", "text": "Navigate to the PDF Merger tool.", "url": "https://toolmansion.com/tools/merge-pdf" },
                { "@type": "HowToStep", "name": "Upload PDF Files", "text": "Upload two or more PDF files you want to combine." },
                { "@type": "HowToStep", "name": "Arrange Order", "text": "Drag and drop to reorder pages if needed." },
                { "@type": "HowToStep", "name": "Merge Files", "text": "Click the merge button to combine all PDFs." },
                { "@type": "HowToStep", "name": "Download Merged PDF", "text": "Download your combined PDF document." }
            ]
        },
        "json-formatter": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Format and Validate JSON",
            "description": "Beautify and validate JSON data with syntax highlighting using our browser-based formatter.",
            "totalTime": "PT30S",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "supply": [{ "@type": "HowToSupply", "name": "JSON data to format" }],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion JSON Formatter" }],
            "step": [
                { "@type": "HowToStep", "name": "Open JSON Formatter", "text": "Navigate to the JSON Formatter tool.", "url": "https://toolmansion.com/tools/json-formatter" },
                { "@type": "HowToStep", "name": "Paste JSON Data", "text": "Paste your JSON code into the input area or upload a JSON file." },
                { "@type": "HowToStep", "name": "Format Automatically", "text": "The tool automatically formats and validates your JSON with syntax highlighting." },
                { "@type": "HowToStep", "name": "Fix Errors", "text": "If validation errors exist, the tool highlights them for easy fixing." },
                { "@type": "HowToStep", "name": "Copy or Download", "text": "Copy the formatted JSON to clipboard or download as a file." }
            ]
        },
        "qr-generator": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Generate QR Codes",
            "description": "Create custom QR codes for URLs, text, WiFi, and more using our free QR code generator.",
            "totalTime": "PT1M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "supply": [{ "@type": "HowToSupply", "name": "URL, text, or WiFi details" }],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion QR Code Generator" }],
            "step": [
                { "@type": "HowToStep", "name": "Open QR Generator", "text": "Navigate to the QR Code Generator tool.", "url": "https://toolmansion.com/tools/qr-generator" },
                { "@type": "HowToStep", "name": "Select QR Type", "text": "Choose the type of QR code: URL, text, WiFi, email, or phone." },
                { "@type": "HowToStep", "name": "Enter Content", "text": "Enter the content you want to encode in the QR code." },
                { "@type": "HowToStep", "name": "Customize Size", "text": "Adjust the QR code size and error correction level if needed." },
                { "@type": "HowToStep", "name": "Download QR Code", "text": "Download your QR code as PNG or SVG." }
            ]
        },
        "uuid-generator": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Generate UUIDs Online",
            "description": "Generate UUID v4 and GUID identifiers instantly using our free online UUID generator. Perfect for developers needing unique identifiers.",
            "totalTime": "PT30S",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "supply": [],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion UUID Generator" }],
            "step": [
                { "@type": "HowToStep", "name": "Open UUID Generator", "text": "Navigate to the UUID Generator tool on ToolMansion.", "url": "https://toolmansion.com/tools/uuid-generator" },
                { "@type": "HowToStep", "name": "Choose Quantity", "text": 'Enter how many UUIDs you want to generate (1 to 1,000). Default is 1.' },
                { "@type": "HowToStep", "name": "Select Format", "text": 'Choose between standard hyphenated format (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx) or compact format without hyphens.' },
                { "@type": "HowToStep", "name": "Generate UUIDs", "text": 'Click the "Generate" button to create cryptographically secure random UUIDs.' },
                { "@type": "HowToStep", "name": "Copy or Download", "text": 'Copy individual UUIDs to clipboard with one click, or download all generated UUIDs as a text file.' }
            ]
        },
        "slug-generator": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Create SEO-Friendly URL Slugs",
            "description": "Generate clean, SEO-friendly URL slugs from any text using our free online slug generator. Perfect for bloggers, developers, and content creators.",
            "totalTime": "PT30S",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "supply": [{ "@type": "HowToSupply", "name": "Text to convert to slug" }],
            "tool": [{ "@type": "HowToTool", "name": "ToolMansion Slug Generator" }],
            "step": [
                { "@type": "HowToStep", "name": "Open Slug Generator", "text": "Navigate to the Slug Generator tool on ToolMansion.", "url": "https://toolmansion.com/tools/slug-generator" },
                { "@type": "HowToStep", "name": "Enter Your Text", "text": 'Type or paste the text you want to convert into a URL slug (e.g., "My Blog Post Title!").' },
                { "@type": "HowToStep", "name": "Choose Options", "text": 'Select your preferred separator (hyphen, underscore, or dot), choose whether to use lowercase, and decide if you want to remove stop words.' },
                { "@type": "HowToStep", "name": "Copy Your Slug", "text": 'The slug is generated automatically as you type. Copy the result to use in your URL.' }
            ]
        }
    };

    const howToSchema = howToSchemas[slug];

    return (
        <ToolShell tool={tool} category={category}>
            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
            />
            {/* HowTo Schema for top tools */}
            {howToSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
                />
            )}
            {tool.status === "Live" && ToolComponent ? (
                <ToolComponent />
            ) : (
                <ComingSoon tool={tool} />
            )}
        </ToolShell>
    );
}
