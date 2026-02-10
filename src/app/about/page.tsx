import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About ToolMansion",
    description: "Learn about ToolMansion — free, privacy-first browser tools powered by Botsquash.",
};

export default function AboutPage() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Botsquash",
        url: "https://botsquash.com",
        description: "AI automation and systems company focused on efficient, privacy-respecting digital products.",
        brand: {
            "@type": "Brand",
            name: "ToolMansion",
            url: "https://toolmansion.com",
        },
    };

    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "ToolMansion",
        url: "https://toolmansion.com",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        creator: {
            "@type": "Organization",
            name: "Botsquash",
            url: "https://botsquash.com",
        },
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
            />

            <h1 className="text-4xl font-bold mb-8">About ToolMansion</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg text-muted-foreground">
                        ToolMansion is a collection of free, browser-based utility tools designed to help you
                        convert images, manipulate PDFs, process text, and perform developer tasks — all without
                        uploading a single file to any server.
                    </p>
                    <p className="text-muted-foreground">
                        We believe that simple file operations shouldn't require installing software, creating
                        accounts, or trusting third-party servers with your data. Every tool on ToolMansion
                        processes your files locally using modern Web APIs, WebAssembly, and JavaScript.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Built by Botsquash</h2>
                    <p className="text-muted-foreground">
                        This tool suite is built and maintained by{" "}
                        <a
                            href="https://botsquash.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Botsquash
                        </a>
                        , an AI automation and systems company focused on creating efficient,
                        privacy-respecting digital products.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Privacy by Design</h2>
                    <p className="text-muted-foreground">
                        We don't just claim privacy — it's built into the architecture. There are no backend
                        servers processing your files. No file upload endpoints. No tracking pixels. Your files
                        stay on your device, and the tools work even when you're offline.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Open & Accessible</h2>
                    <p className="text-muted-foreground">
                        ToolMansion is free to use with no registration required. We're committed to keeping
                        essential tools accessible to everyone, regardless of their location or device.
                    </p>
                </section>
            </div>
        </div>
    );
}
