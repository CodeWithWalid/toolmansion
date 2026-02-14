import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/tool-shell/ToolShell";
import { getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";

import RemoveExifTool from "../../tools/remove-exif";

export const metadata: Metadata = {
    title: "Remove Metadata from Image – No Upload Required",
    description: "Safely remove metadata from any image. Clean EXIF, XMP, and IPTC data without uploading your files. Protect your privacy instantly.",
    alternates: {
        canonical: "/remove-metadata-from-image",
    },
};

export default function Page() {
    const tool = getToolBySlug("remove-exif");
    const category = getCategoryBySlug("image");

    if (!tool || !category) return null;

    const pageTool = {
        ...tool,
        seo: {
            ...tool.seo,
            faq: []
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does this remove XMP and IPTC data?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our tool targets the entire metadata header block, which typically includes EXIF, XMP (Adobe metadata), and IPTC (Copyright/Caption) data."
                }
            },
            {
                "@type": "Question",
                "name": "Will it delete my copyright?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you choose to remove all metadata, copyright tags will be removed. If you are a photographer who wants to keep copyright but remove location, this tool might be too aggressive for your needs."
                }
            },
            {
                "@type": "Question",
                "name": "Does removing metadata lower quality?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The pixel data (the actual picture) is not compressed or altered. We only cut out the text-based headers hidden in the file structure."
                }
            }
        ]
    };

    return (
        <ToolShell tool={pageTool} category={category}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <RemoveExifTool />

            <article className="mt-12 prose prose-zinc dark:prose-invert max-w-none">
                <h1>Remove Metadata From Image: Clean, Light, and Private</h1>

                <p className="lead">
                    Metadata is the "data about data" hidden inside your image files. While invisible to the naked eye, it carries a wealth of information. Learning how to <strong>remove metadata from an image</strong> is a crucial skill for digital privacy and file optimization.
                </p>

                <h2>What Metadata is Hiding in Your Images?</h2>
                <p>
                    Image metadata standards like EXIF, IPTC, and XMP can store thousands of different tags. Common examples include:
                </p>
                <ul>
                    <li><strong>Author Information:</strong> Copyright notices, creator names, and contact details.</li>
                    <li><strong>Software Details:</strong> Which editing software was used (e.g., Photoshop Generative Fill, Lightroom).</li>
                    <li><strong>Thumbnails:</strong> Sometimes a small preview of the <em>original</em> image is saved, even if you cropped the main image to hide something!</li>
                    <li><strong>Technical Specs:</strong> Focus distance, flash status, white balance, and lens serial numbers.</li>
                </ul>

                <h2>Benefits of Removing Metadata</h2>
                <h3>1. Enhanced Privacy</h3>
                <p>
                    The most obvious benefit is privacy. By stripping metadata, you ensure that no personal details—like your name or location—travel with the image. This is vital for whistleblowers, journalists, or anyone posting strictly anonymous content on public forums.
                </p>

                <h3>2. Reduced File Size</h3>
                <p>
                    Metadata takes up space. In some cases, especially with extensive editing history or embedded color profiles and thumbnails, metadata can add several kilobytes or even megabytes to a file. Removing it is a "lossless" way to reduce file size without touching specific pixel quality.
                </p>

                <h3>3. Clean Professional Delivery</h3>
                <p>
                    If you are a designer or photographer delivering final assets to a client, you might want to remove edit history or internal comments. A clean file looks more professional and prevents clients from analyzing your workflow secrets.
                </p>

                <h2>How Our Tool Works</h2>
                <p>
                    Our tool simplifies the process of cleaning your images. You don't need complex software like Photoshop or command-line tools like ExifTool.
                </p>
                <ol>
                    <li><strong>Upload:</strong> Select the image (search for "remove metadata from image" in your files) you want to clean.</li>
                    <li><strong>Analyze:</strong> We instantly show you the meaningful metadata found in the file header.</li>
                    <li><strong>Strip:</strong> With one click on "Remove Exif", we regenerate the file without the headers.</li>
                    <li><strong>Download:</strong> Your image is now safe to share.</li>
                </ol>

                <h2>Is This Tool Secure?</h2>
                <div className="bg-green-500/10 border-l-4 border-green-500 p-4 my-6">
                    <p className="m-0 font-medium">
                        <span className="text-xl mr-2">🔒</span> Browser-Based Security
                    </p>
                    <p className="m-0 text-sm mt-2">
                        Unlike server-side tools, our metadata remover runs <strong>100% inside your web browser</strong>. Your images effectively never leave your computer, ensuring total privacy.
                    </p>
                </div>

                <h2>Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group p-4 bg-background-secondary rounded-lg open:bg-background-tertiary transition-colors">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                            Does this remove XMP and IPTC data?
                            <span className="transform group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-sm text-foreground-secondary">
                            Yes. Our tool targets the entire metadata header block, which typically includes EXIF, XMP (Adobe metadata), and IPTC (Copyright/Caption) data.
                        </p>
                    </details>

                    <details className="group p-4 bg-background-secondary rounded-lg open:bg-background-tertiary transition-colors">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                            Will it delete my copyright?
                            <span className="transform group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-sm text-foreground-secondary">
                            Yes, if you choose to remove all metadata, copyright tags will be removed. If you are a photographer who wants to <em>keep</em> copyright but remove <em>location</em>, this tool might be too aggressive for your needs (it wipes everything for maximum safety).
                        </p>
                    </details>
                    <details className="group p-4 bg-background-secondary rounded-lg open:bg-background-tertiary transition-colors">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                            Does removing metadata lower quality?
                            <span className="transform group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-sm text-foreground-secondary">
                            No. The pixel data (the actual picture) is not compressed or altered. We only cut out the text-based headers hidden in the file structure.
                        </p>
                    </details>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-lg font-semibold mb-4">Other Useful Tools</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                        <Link href="/tools/crop-image" className="p-4 rounded-lg border border-border hover:border-accent transition-colors block no-underline group">
                            <span className="font-medium group-hover:text-accent">Crop Image</span>
                            <span className="block text-sm text-foreground-secondary mt-1">Focus on what matters</span>
                        </Link>
                        <Link href="/tools/remove-exif" className="p-4 rounded-lg border border-border hover:border-accent transition-colors block no-underline group">
                            <span className="font-medium group-hover:text-accent">Main Privacy Tool</span>
                            <span className="block text-sm text-foreground-secondary mt-1">Return to hub</span>
                        </Link>
                    </div>
                </div>
            </article>
        </ToolShell>
    );
}
