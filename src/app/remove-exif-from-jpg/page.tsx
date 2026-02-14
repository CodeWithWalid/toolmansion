import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/tool-shell/ToolShell";
import { getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";

import RemoveExifTool from "../../tools/remove-exif";

export const metadata: Metadata = {
    title: "Remove EXIF from JPG – Clean Metadata Instantly",
    description: "Remove EXIF headers from JPG/JPEG files. Reduce file size and hide camera settings. Free browser-based JPG metadata cleaner.",
    alternates: {
        canonical: "/remove-exif-from-jpg",
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
                "name": "What happens to the file size?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It almost always gets smaller! Metadata takes up space. On a small web graphic, removing EXIF data can reduce the file size by 10-15% without changing the look of the image at all."
                }
            },
            {
                "@type": "Question",
                "name": "Does this work on JPEG too?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. JPG and JPEG are effectively the same file format with different extensions. Our tool handles both (plus PNG and WebP) seamlessly."
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
                <h1>Remove EXIF from JPG: The Complete Guide</h1>

                <p className="lead">
                    JPG (or JPEG) is the most popular image format in the world, and it's also the worst offender for carrying hidden data. Our dedicated tool allows you to <strong>remove EXIF from JPG</strong> files instantly and reliably.
                </p>

                <h2>Why JPGs Carry So Much Data</h2>
                <p>
                    The JPEG standard was designed to be robust. Part of this design includes specific "markers" (like APP1) reserved for metadata. While other formats like PNG or WebP can store metadata, JPG is the native format for almost all digital cameras.
                </p>
                <p>
                    This means a raw JPG straight from a camera contains a massive header of data:
                </p>
                <ul>
                    <li><strong>Thumbnail images:</strong> A smaller version of the photo for previewing on the camera screen.</li>
                    <li><strong>Audio notes:</strong> Some cameras allow attaching voice memos to JPGs!</li>
                    <li><strong>Maker Notes:</strong> proprietary binary data specific to Canon, Nikon, Sony, etc.</li>
                </ul>

                <h2>Lossless Operations on JPG</h2>
                <p>
                    One concern users have when editing JPGs is "generation loss"—the idea that every time you save a JPG, it loses quality.
                </p>
                <p>
                    <strong>Good News:</strong> Removing EXIF data does <em>not</em> degrade your image quality. Metadata stripping is a "lossless" operation. We simply cut out the text sections of the file header without re-compressing the actual pixel data. Your image looks exactly the same, pixel-for-pixel; it just has a cleaner digital footprint.
                </p>

                <h2>Compatibility</h2>
                <p>
                    Our JPG to Clean JPG converter works with:
                </p>
                <ul>
                    <li>Standard JPEGs (.jpg, .jpeg)</li>
                    <li>Progressive JPEGs</li>
                    <li>High-resolution camera outputs</li>
                </ul>

                <p>
                    Whether you are an eBay seller wanting to hide your home location, or a photographer delivering "clean" files to a client, use our tool to <a href="/tools/remove-exif" className="text-accent hover:underline">remove EXIF from your JPGs</a> today.
                </p>
            </article>
        </ToolShell>
    );
}
