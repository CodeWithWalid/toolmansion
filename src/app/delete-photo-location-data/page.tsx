import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/tool-shell/ToolShell";
import { getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";

import RemoveExifTool from "../../tools/remove-exif";

export const metadata: Metadata = {
    title: "Delete Photo Location Data (GPS) – Map Safe Tool",
    description: "Delete GPS location data from your photos before sharing. Prevent stalking and protect your home address. Works offline in your browser.",
    alternates: {
        canonical: "/delete-photo-location-data",
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
                "name": "Can I delete location without deleting other data?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our tool currently removes all metadata headers to ensure maximum safety. Often, location data is hidden in multiple tags (GPS, XMP, MakerNotes), so a full wipe is the only way to be 100% sure it's gone."
                }
            },
            {
                "@type": "Question",
                "name": "Does this work on iPhone photos (HEIC)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Browsers struggle with HEIC files directly. We recommend converting HEIC to JPG first, then running it through this tool. For JPG, PNG, and WebP, it works natively."
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
                <h1>Delete Photo Location Data: Protect Your Real-World Privacy</h1>

                <p className="lead">
                    Did you know your smartphone camera likely records the exact GPS coordinates of every photo you take? This feature, known as geotagging, can inadvertently reveal your home address to the world. Our tool helps you <strong>delete photo location data</strong> instantly.
                </p>

                <h2>The Danger of Geotags</h2>
                <p>
                    Geotags are incredibly precise. They don't just say "New York City"; they say "Latitude 40.7128° N, Longitude 74.0060° W". When you upload a photo to social media or a blog, sophisticated viewers (or automated bots) can extract this data to map exactly where you were standing.
                </p>
                <p>
                    This poses several risks:
                </p>
                <ul>
                    <li><strong>Stalking:</strong> Revealing frequented locations like your home, work, or child's school.</li>
                    <li><strong>Theft:</strong> Posting vacation photos with location data confirms you are far away from your home.</li>
                    <li><strong>Doxing:</strong> Malicious actors can use photo location data to find your real-world identity.</li>
                </ul>

                <h2>How to Check for Location Data</h2>
                <p>
                    You can check if your photo has location data by uploading it to our tool above. If a "GPS" field appears in the detected metadata section, your photo is geotagged.
                </p>

                <h2>Stripping GPS Data Securely</h2>
                <p>
                    The safest way to share photos is to strip this data before the file ever leaves your device. That's exactly what our tool does.
                </p>
                <p>
                    Because we process files locally, you aren't sending your location-tagged photos to a cloud server to be cleaned. You are cleaning them right here, on your own machine. This ensures that the link between your photo and your location is broken securely and permanently.
                </p>

                <p>
                    Start now: Upload a photo above to <strong>delete location data</strong> and share with peace of mind.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
                    <h3 className="mt-0">Pro Tip: Turn off Geotagging</h3>
                    <p className="mb-0">
                        To prevent this in the future, you can go into your iPhone or Android camera settings and disable "Location Tags" or "save Location". However, for all your existing photos, our <a href="/tools/remove-exif" className="text-accent hover:underline">EXIF remover</a> is the perfect solution.
                    </p>
                </div>
            </article>
        </ToolShell>
    );
}
