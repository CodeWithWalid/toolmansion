import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/tool-shell/ToolShell";
import { getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";

import RemoveExifTool from "../../tools/remove-exif";

export const metadata: Metadata = {
    title: "EXIF Data Remover Online – 100% Private & Free",
    description: "The fastest EXIF data remover online. Strip camera metadata and GPS tags locally in your browser. No server uploads. 100% free.",
    alternates: {
        canonical: "/exif-data-remover-online",
    },
};

export default function Page() {
    const tool = getToolBySlug("remove-exif");
    const category = getCategoryBySlug("image");

    if (!tool || !category) return null;

    // Custom tool object to disable default FAQ and add page-specific schema
    const pageTool = {
        ...tool,
        seo: {
            ...tool.seo,
            faq: [] // Disable default FAQ from ToolShell
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does this reduce image quality?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We only remove the metadata headers (the text hidden in the file). The actual visual image data (pixels) remains untouched and strictly lossless."
                }
            },
            {
                "@type": "Question",
                "name": "Can I remove metadata from multiple files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Currently, this tool processes one image at a time to ensure maximum browser performance. For bulk processing, check back for our upcoming batch tool update."
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
                <h1>Online EXIF Data Remover: Clean Your Photos Instantly</h1>

                <p className="lead">
                    Welcome to the most secure <strong>EXIF Data Remover Online</strong>. Unlike other tools that upload your sensitive photos to a cloud server, our tool processes everything <em>locally in your web browser</em>. This means your personal data, location history, and device details never leave your computer.
                </p>

                <h2>What Is EXIF Data?</h2>
                <p>
                    EXIF (Exchangeable Image File Format) is a standard used by digital cameras and smartphones to store technical information within image files. While this data is useful for organizing photos, it can pose significant privacy risks when shared publicly.
                </p>
                <p>
                    Common data points include:
                </p>
                <ul>
                    <li><strong>GPS Coordinates:</strong> Exact latitude and longitude where the photo was taken.</li>
                    <li><strong>Device Info:</strong> Phone model, camera make, and lens type.</li>
                    <li><strong>Settings:</strong> Shutter speed, ISO, aperture, and flash status.</li>
                    <li><strong>Timestamps:</strong> The precise date and time of capture.</li>
                </ul>

                <h2>Why Remove Photo Metadata?</h2>
                <p>
                    Scrubbing metadata is a critical step for digital hygiene. Here is why you should use an EXIF remover before sharing:
                </p>
                <ul>
                    <li><strong>Protect Your Privacy:</strong> Prevent strangers from finding your home address or workplace via GPS tags.</li>
                    <li><strong>Reduce File Size:</strong> Metadata headers adds unnecessary weight depending on the camera.</li>
                    <li><strong>Hide Camera Secrets:</strong> Keep your photography techniques and equipment settings private from competitors.</li>
                    <li><strong>Social Media Safety:</strong> Ensure photos of children or sensitive documents don't leak location data.</li>
                </ul>

                <h2>How to Remove GPS Location Data</h2>
                <p>
                    Using our tool is simple and requires no technical knowledge:
                </p>
                <ol>
                    <li><strong>Select your image:</strong> Drag and drop your JPG, PNG, or WebP file into the box above.</li>
                    <li><strong>Review data:</strong> Our tool will instantly scan and display any hidden metadata found in the file header.</li>
                    <li><strong>Click "Remove Exif":</strong> Push the button to strip all tags.</li>
                    <li><strong>Download:</strong> Save your clean, privacy-safe image back to your device.</li>
                </ol>

                <h2>Is This Tool Secure?</h2>
                <div className="bg-green-500/10 border-l-4 border-green-500 p-4 my-6">
                    <p className="m-0 font-medium">
                        <span className="text-xl mr-2">🔒</span> Yes, 100% Secure.
                    </p>
                    <p className="m-0 text-sm mt-2">
                        We use modern WebAssembly technology to process images directly in your browser. <strong>Your photos are never uploaded to our servers.</strong> You can even use this tool offline!
                    </p>
                </div>

                <h2>Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group p-4 bg-background-secondary rounded-lg open:bg-background-tertiary transition-colors">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                            Does this reduce image quality?
                            <span className="transform group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-sm text-foreground-secondary">
                            No. We only remove the <em>metadata headers</em> (the text hidden in the file). The actual visual image data (pixels) remains untouched and strictly lossless.
                        </p>
                    </details>

                    <details className="group p-4 bg-background-secondary rounded-lg open:bg-background-tertiary transition-colors">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                            Can I remove metadata from multiple files?
                            <span className="transform group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-sm text-foreground-secondary">
                            Currently, this tool processes one image at a time to ensure maximum browser performance. For bulk processing, check back for our upcoming batch tool update.
                        </p>
                    </details>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-lg font-semibold mb-4">Related Privacy Tools</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                        <Link href="/tools/compress-image-to-size" className="p-4 rounded-lg border border-border hover:border-accent transition-colors block no-underline group">
                            <span className="font-medium group-hover:text-accent">Compress Image</span>
                            <span className="block text-sm text-foreground-secondary mt-1">Reduce file size efficiently</span>
                        </Link>
                        <Link href="/tools/resize-image" className="p-4 rounded-lg border border-border hover:border-accent transition-colors block no-underline group">
                            <span className="font-medium group-hover:text-accent">Resize Image</span>
                            <span className="block text-sm text-foreground-secondary mt-1">Change dimensions perfectly</span>
                        </Link>
                    </div>
                </div>
            </article>
        </ToolShell>
    );
}
