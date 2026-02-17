"use client";

import {
    Move,
    Shield,
    Zap,
    Smartphone,
    Monitor,
    Instagram,
    Facebook,
    ImageIcon,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

export function ImageResizerContent() {
    return (
        <div className="space-y-16">
            {/* How It Works Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How to Resize Images Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Resize your images to exact dimensions in seconds. Our online image resizer helps you 
                    optimize photos for any platform — social media, websites, email attachments, or print. 
                    Process everything locally in your browser for maximum privacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload Your Image</h3>
                        <p className="text-sm text-muted-foreground">
                            Select your image file. We support JPG, PNG, WebP, GIF, and BMP formats. 
                            Drag and drop or click to browse from your device.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Set Dimensions</h3>
                        <p className="text-sm text-muted-foreground">
                            Enter your desired width and height in pixels, or choose from preset sizes 
                            for popular platforms. Lock aspect ratio to prevent distortion.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Resized Image</h3>
                        <p className="text-sm text-muted-foreground">
                            Preview the result and download your resized image instantly. 
                            Your original file remains unchanged.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-primary/10">
                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                            Your Privacy Matters — Processed 100% Locally
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            When you resize images on ToolMansion, nothing leaves your device. Unlike online 
                            services that upload your photos to remote servers, our resizer uses browser-based 
                            technology to process your images securely and privately.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">No server uploads — processing happens in your browser</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Safe for personal photos and sensitive documents</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">No watermarks, no registration, no limits</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Social Media Sizes */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Social Media Image Sizes Guide
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                    Get the perfect dimensions for every platform. Use these presets or enter custom sizes 
                    to ensure your images display perfectly on any social network.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { platform: "Instagram Post", size: "1080 × 1080", ratio: "1:1 Square", icon: Instagram },
                        { platform: "Instagram Story", size: "1080 × 1920", ratio: "9:16 Portrait", icon: Instagram },
                        { platform: "Facebook Cover", size: "820 × 312", ratio: "2.6:1 Wide", icon: Facebook },
                        { platform: "Twitter/X Header", size: "1500 × 500", ratio: "3:1 Wide", icon: Monitor },
                        { platform: "LinkedIn Banner", size: "1584 × 396", ratio: "4:1 Wide", icon: Monitor },
                        { platform: "YouTube Thumbnail", size: "1280 × 720", ratio: "16:9 HD", icon: Monitor },
                        { platform: "Pinterest Pin", size: "1000 × 1500", ratio: "2:3 Portrait", icon: ImageIcon },
                        { platform: "TikTok Video", size: "1080 × 1920", ratio: "9:16 Vertical", icon: Smartphone },
                    ].map((item) => (
                        <div key={item.platform} className="p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <item.icon className="w-5 h-5 text-primary" />
                                <span className="font-semibold text-foreground">{item.platform}</span>
                            </div>
                            <div className="space-y-1 text-sm">
                                <div className="text-foreground font-medium">{item.size}</div>
                                <div className="text-muted-foreground text-xs">{item.ratio}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    When to Resize Your Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Smartphone className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Social Media Optimization</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Each platform has specific size requirements. Resize your images to exact dimensions 
                            to prevent awkward cropping and ensure your content looks professional across all networks.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Instagram: Square, portrait, or landscape posts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Facebook: Cover photos, profile pictures, posts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">LinkedIn: Professional banners and posts</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Website Performance</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Large images slow down websites. Resize images to match your display dimensions 
                            to improve page load speed, SEO rankings, and user experience.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Hero banners: 1920 × 600 or similar</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Product thumbnails: 300 × 300</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Blog images: 800 × 400 or 1200 × 630</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <ImageIcon className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Email Attachments</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Email providers have attachment size limits. Resize images to fit within these 
                            constraints while maintaining acceptable quality for sharing.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-warning" />
                                <span className="text-muted-foreground">Gmail: 25MB limit per email</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-warning" />
                                <span className="text-muted-foreground">Outlook: 20MB limit typically</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Move className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Print Preparation</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Prepare images for printing by setting exact pixel dimensions or DPI. 
                            Ensure your prints come out crisp and properly sized.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Passport photos: 600 × 600 pixels</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">4×6 print: 1200 × 1800 at 300 DPI</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Aspect Ratio Guide */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Understanding Aspect Ratios
                </h2>
                <p className="text-muted-foreground mb-6">
                    The aspect ratio determines the shape of your image. Maintaining the correct ratio 
                    prevents stretching or distortion when resizing.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Aspect Ratio</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Common Sizes</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { ratio: "1:1 (Square)", sizes: "1080×1080, 512×512", use: "Instagram posts, profile pictures" },
                                { ratio: "4:3 (Standard)", sizes: "1024×768, 800×600", use: "Presentations, older monitors" },
                                { ratio: "16:9 (Widescreen)", sizes: "1920×1080, 1280×720", use: "Videos, modern displays, YouTube" },
                                { ratio: "9:16 (Portrait)", sizes: "1080×1920, 720×1280", use: "Stories, TikTok, mobile content" },
                                { ratio: "3:2 (Photo)", sizes: "1800×1200, 1500×1000", use: "Photography, DSLR cameras" },
                                { ratio: "21:9 (Ultrawide)", sizes: "2560×1080, 3440×1440", use: "Cinematic videos, gaming" },
                            ].map((row) => (
                                <tr key={row.ratio} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.ratio}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.sizes}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.use}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Features Grid */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Features That Make Us Different
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Batch Resizing</h3>
                            <p className="text-sm text-muted-foreground">
                                Resize multiple images at once with the same dimensions. Perfect for 
                                creating consistent galleries or product catalogs.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Move className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Smart Cropping</h3>
                            <p className="text-sm text-muted-foreground">
                                Choose from multiple cropping modes — center crop, smart crop, or manual 
                                selection to get the perfect composition.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <ImageIcon className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Format Conversion</h3>
                            <p className="text-sm text-muted-foreground">
                                Resize and convert format in one step. Output as JPG, PNG, WebP, or GIF 
                                depending on your needs.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">No Quality Loss</h3>
                            <p className="text-sm text-muted-foreground">
                                Advanced resizing algorithms preserve image quality. Enlarge with AI 
                                or reduce while maintaining sharpness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
