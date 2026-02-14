import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/tool-shell/ToolShell";
import { getToolBySlug, getCategoryBySlug } from "@/data/toolsRegistry";

import RemoveExifTool from "../../tools/remove-exif";

export const metadata: Metadata = {
    title: "Remove GPS Data from Photo – Hide Your Location",
    description: "Strip hidden GPS coordinates from your pictures. Ensure your photos don't reveal where you live or work. 100% secure local processing.",
    alternates: {
        canonical: "/remove-gps-data-from-photo",
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
                "name": "Does this remove the location from the map app?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This tool removes the data from the file itself. If you re-upload the cleaned photo to your phone, it will no longer appear on your \"Places\" map because the coordinate data is gone."
                }
            },
            {
                "@type": "Question",
                "name": "Can I just turn off GPS in settings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, for future photos. But for the thousands of photos you have already taken, you need a tool like this to scrub them clean before sharing."
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
                <h1>Remove GPS Data from Photo: A Vital Step for Online Privacy</h1>

                <p className="lead">
                    Imagine posting a photo of your new car or your child's first day of school, only to realize you've accidentally broadcasted your exact home address. This nightmare scenario is real, thanks to embedded GPS data. Our tool lets you <strong>remove GPS data from photos</strong> in seconds.
                </p>

                <h2>How GPS Data Gets Into Your Photos</h2>
                <p>
                    Modern smartphones and GPS-enabled cameras have a feature often called "Location Tags" or "Geotagging." When enabled, the device uses satellites, Wi-Fi, and cell towers to pinpoint your location the moment you press the shutter.
                </p>
                <p>
                    This latitudinal and longitudinal data is written directly into the image file's EXIF header. It stays there even if you edit the photo, crop it, or email it.
                </p>

                <h2>Why You Must Remove It Before Sharing</h2>
                <p>
                    While major social networks like Facebook and Instagram automatically strip EXIF data upon upload, many other platforms do not:
                </p>
                <ul>
                    <li><strong>Email Attachments:</strong> Sending a photo keeps the data intact.</li>
                    <li><strong>Messaging Apps:</strong> Some apps send the original file with full metadata.</li>
                    <li><strong>Forums & Blogs:</strong> Uploading to a forum or Wordpress site may preserve the GPS tags.</li>
                    <li><strong>Cloud Storage:</strong> Shared folders on Google Drive or Dropbox keep the original file.</li>
                </ul>

                <h2>The Secure Solution</h2>
                <p>
                    Don't rely on social media platforms to protect you. Take control of your own data.
                </p>
                <p>
                    Our <strong>Remove GPS Data</strong> tool works locally in your browser. It scans the file header for specific GPS IFD (Image File Directory) tags and wipes them clean. It then saves a new copy of your image that is visually identical but digitally silent about its origins.
                </p>

                <h2>Step-by-Step Guide</h2>
                <ol>
                    <li>Drag your photo into the upload box on this page.</li>
                    <li>Check the "Detected Metadata" section. If you see "GPS Latitude" or "GPS Longitude", your location is exposed.</li>
                    <li>Click <strong>"Remove All Metadata"</strong>.</li>
                    <li>Download the safe version of your image.</li>
                </ol>

                <p>
                    It's fast, free, and runs entirely on your device. Start now and <a href="/tools/remove-exif" className="text-accent hover:underline">remove GPS data</a> from your photos before you share them.
                </p>
            </article>
        </ToolShell>
    );
}
