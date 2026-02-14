
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hidden in Plain Sight: How to Check If Your Photos Have Location Data",
    description: "Your photos might be broadcasting your home address. Here is how to check for hidden GPS data on iPhone, Android, Mac, and Windows.",
};

export default function Page() {
    return (
        <article>
            <header className="mb-10">
                <h1 className="mb-4 leading-tight">Is Your Camera Tracking You? <br /><span className="text-accent">How to Check for Hidden GPS Data</span></h1>
                <p className="text-xl text-foreground-secondary leading-relaxed">
                    It&apos;s a sunny Saturday. You snap a photo of your new car in the driveway and post it. You didn't type your address, but a stranger online just opened a map and dropped a pin right on your garage. How? <strong className="text-foreground">Geo-tagging.</strong>
                </p>
            </header>

            {/* <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg">
                <Image 
                    src="/blog/check-location-data.jpg" 
                    alt="Smartphone showing map location of a photo" 
                    width={800} 
                    height={450} 
                    className="w-full h-auto"
                />
            </div> */}

            <section className="prose prose-zinc dark:prose-invert max-w-none">
                <h2>The "Digital Breadcrumbs" You Leave Behind</h2>
                <p>
                    Modern smartphones are incredible tools. They have built-in GPS that communicates effectively with satellites to help you navigate traffic. But that same GPS chip is often linked directly to your camera app.
                </p>
                <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                    <p className="text-foreground-secondary m-0">
                        <strong>The Reality Check:</strong> Unless you explicitly turned it off, your phone is likely embedding your precise Latitude, Longitude, and Altitude into every single image you capture.
                    </p>
                </div>

                <h2>How to Check Your Photos (Right Now)</h2>
                <p>
                    You don't need expensive software to become a digital detective. Here is how to investigate your own gallery on any device.
                </p>

                <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
                    <div className="bg-background-secondary p-6 rounded-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                            <span className="text-2xl mr-2">🍏</span> On iPhone / iPad
                        </h3>
                        <ol className="space-y-3 text-foreground-secondary list-decimal list-inside">
                            <li>Open the <strong>Photos</strong> app.</li>
                            <li>Tap on any photo to view it full screen.</li>
                            <li>Swipe <strong>Up</strong> on the photo (or tap the "i" info button).</li>
                            <li><strong>Look for a Map:</strong> If there is location data, you will see a mini-map at the bottom showing exactly where it was taken.</li>
                        </ol>
                    </div>

                    <div className="bg-background-secondary p-6 rounded-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                            <span className="text-2xl mr-2">🤖</span> On Android (Google Photos)
                        </h3>
                        <ol className="space-y-3 text-foreground-secondary list-decimal list-inside">
                            <li>Open <strong>Google Photos</strong>.</li>
                            <li>Tap a photo to open it.</li>
                            <li>Tap the <strong>three dots</strong> (menu) in the top-right corner.</li>
                            <li>Scroll down to the "Details" section. If a location was saved, you'll see a map and coordinate pin.</li>
                        </ol>
                    </div>

                    <div className="bg-background-secondary p-6 rounded-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                            <span className="text-2xl mr-2">💻</span> On Windows PC
                        </h3>
                        <ol className="space-y-3 text-foreground-secondary list-decimal list-inside">
                            <li><strong>Right-click</strong> the image file.</li>
                            <li>Select <strong>Properties</strong>.</li>
                            <li>Click the <strong>Details</strong> tab at the top.</li>
                            <li>Scroll down to the <strong>GPS</strong> section. If you see Latitude/Longitude numbers, you're tagged.</li>
                        </ol>
                    </div>

                    <div className="bg-background-secondary p-6 rounded-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                            <span className="text-2xl mr-2">🍎</span> On Mac (macOS)
                        </h3>
                        <ol className="space-y-3 text-foreground-secondary list-decimal list-inside">
                            <li>Open the image in <strong>Preview</strong> (default).</li>
                            <li>Press <strong>Command + I</strong> to show the Inspector.</li>
                            <li>Click the <strong>GPS</strong> tab (pin icon). No tab means no data.</li>
                        </ol>
                    </div>
                </div>

                <h2>Found Something? Here is How to Delete It.</h2>
                <p>
                    Seeing your home address pop up on a photo you planned to tweet can be unsettling. But fixing it is easy.
                </p>
                <p>
                    While you <em>can</em> disable geo-tagging in your camera settings for future photos, what about the ones you already took?
                </p>
                <p>
                    <strong>Do not risk it.</strong> Use our specialized privacy tool to scrub these GPS tags clean instantly. It works on your phone or computer, and because it runs in the browser, your photos are never uploaded to a risky server.
                </p>

                <div className="mt-8">
                    <Link
                        href="/exif-data-remover-online"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent hover:bg-accent/90 rounded-xl transition-all shadow-lg hover:shadow-accent/25 no-underline"
                    >
                        <span>Check & Clean My Photos Now</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </div>
            </section>
        </article>
    );
}

