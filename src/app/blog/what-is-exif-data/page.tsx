import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "What is EXIF Data? The Hidden 'Digital Passport' in Your Photos",
    description: "EXIF data is the invisible digital footprint in every photo you take. Learn what it stores, why it matters for privacy, and how to control it.",
};

export default function Page() {
    return (
        <article>
            <header className="mb-10">
                <h1 className="mb-4 leading-tight">What is EXIF Data? <br /><span className="text-accent">The Hidden "Passport" in Your Photos</span></h1>
                <p className="text-xl text-foreground-secondary leading-relaxed">
                    You just snapped a photo of your morning coffee and posted it online. But along with that latte art, you might have just shared your exact home address, the camera you used, and the precise time you woke up.
                </p>
            </header>

            {/* <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg">
                <Image 
                    src="/blog/exif-visualization.jpg" 
                    alt="Visualization of EXIF data layers on a digital photo" 
                    width={800} 
                    height={450} 
                    className="w-full h-auto"
                />
            </div> */}

            <section className="prose prose-zinc dark:prose-invert max-w-none">
                <h2>The Invisible Layer</h2>
                <p>
                    Think of a digital photo like a physical print. The image itself is what you see on the front. <strong>EXIF data</strong> (Exchangeable Image File Format) is like the writing on the back of that print—only it’s written by a robot that tracks <em>everything</em>.
                </p>
                <p>
                    When you press the shutter, your camera or smartphone doesn't just capture light. It stamps a massive amount of technical metadata into the file header. This was originally designed to help photographers sort their libraries and help printers reproduce colors accurately.
                </p>

                <div className="bg-background-secondary p-8 rounded-2xl my-8 border border-border">
                    <h3 className="mt-0 flex items-center gap-2">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        What's actually inside?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <strong className="block text-foreground mb-1">📸 Camera Specs</strong>
                            <ul className="m-0 text-sm text-foreground-secondary">
                                <li>Make & Model (e.g., iPhone 15 Pro)</li>
                                <li>Lens Type</li>
                                <li>Software Version</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-foreground mb-1">⚙️ Settings</strong>
                            <ul className="m-0 text-sm text-foreground-secondary">
                                <li>Shutter Speed & ISO</li>
                                <li>Aperture (f-stop)</li>
                                <li>Flash Fired: Yes/No</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-foreground mb-1">🗓️ Timeline</strong>
                            <ul className="m-0 text-sm text-foreground-secondary">
                                <li>Date Created</li>
                                <li>Time Created (down to the second)</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-red-500 mb-1">📍 Location (The Risky Part)</strong>
                            <ul className="m-0 text-sm text-foreground-secondary">
                                <li>GPS Latitude & Longitude</li>
                                <li>Altitude</li>
                                <li>Compass Direction</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Why Should You Care?</h2>
                <p>
                    For a professional photographer, this data is gold. It helps them learn from their shots ("<em>What settings did I use for that perfect sunset?</em>").
                </p>
                <p>
                    <strong>For the average person, it’s a privacy leak waiting to happen.</strong>
                </p>
                <p>
                    Imagine listing a bicycle for sale on a classifieds site. You upload a clear photo of the bike in your garage. If you haven't scrubbed the EXIF data, a savvy thief could download that image, view the "GPSInfo" tag, and plug the coordinates straight into Google Maps to find your exact driveway.
                </p>

                <h2>How to Check Your Own Photos</h2>
                <p>
                    You don't need to be a hacker to see this stuff.
                </p>
                <ul>
                    <li><strong>On Windows:</strong> Right-click an image {'>'} Properties {'>'} Details tab.</li>
                    <li><strong>On Mac:</strong> Open the image in Preview {'>'} Tools {'>'} Show Inspector {'>'} GPS tab.</li>
                </ul>

                <h2>The Solution: Scrub It Clean</h2>
                <p>
                    The safest habit is to strip this metadata before sharing publicly. Platforms like Facebook and Instagram usually do this for you (to save space), but email attachments, cloud links, and smaller websites often keep the original data intact.
                </p>
                <p>
                    You can use our <Link href="/exif-data-remover-online" className="text-accent no-underline hover:underline font-semibold">Free Online EXIF Remover</Link> to instantly wipe this hidden passport from your images without affecting the picture quality. It runs entirely in your browser, so your photos—and your secrets—never leave your device.
                </p>
            </section>
        </article>
    );
}
