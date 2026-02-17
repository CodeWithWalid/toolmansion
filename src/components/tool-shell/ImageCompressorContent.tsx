"use client";

import {
    Minimize2,
    Shield,
    Zap,
    Gauge,
    BarChart3,
    Globe,
    Smartphone,
    HardDrive,
    CheckCircle2,
    AlertTriangle,
    Info
} from "lucide-react";

export function ImageCompressorContent() {
    return (
        <div className="space-y-16">
            {/* How It Works Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How to Compress Images Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Reduce image file sizes without sacrificing quality. Our intelligent compression algorithm 
                    analyzes each image to find the perfect balance between size and visual quality. 
                    Process everything locally for complete privacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload Your Images</h3>
                        <p className="text-sm text-muted-foreground">
                            Select one or multiple images. Supports JPG, PNG, and WebP formats. 
                            Upload up to 50 images at once for batch compression.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Adjust Quality Settings</h3>
                        <p className="text-sm text-muted-foreground">
                            Choose your compression level or set a target file size. 
                            Preview the results in real-time before downloading.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Compressed Files</h3>
                        <p className="text-sm text-muted-foreground">
                            Get your optimized images instantly. See exactly how much space you saved 
                            with our detailed compression statistics.
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
                            Privacy-First Image Compression
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Your images contain sensitive information. That&apos;s why we built a compressor 
                            that processes everything locally in your browser. Your files never touch our servers 
                            — in fact, we don&apos;t even have servers for image processing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Data Transfer</span>
                                    <span className="text-sm text-muted-foreground">Files stay on your device throughout</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">GDPR Compliant</span>
                                    <span className="text-sm text-muted-foreground">No personal data collection whatsoever</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Watermarks</span>
                                    <span className="text-sm text-muted-foreground">Clean output, no branding added</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Unlimited Free Use</span>
                                    <span className="text-sm text-muted-foreground">Compress as many images as you need</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compression Stats */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Typical Compression Results
                </h2>
                <p className="text-muted-foreground mb-6">
                    Our smart compression algorithm adapts to each image type. Here&apos;s what you can 
                    typically expect when compressing different image formats.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border text-center">
                        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                            <BarChart3 className="w-8 h-8 text-success" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">70-85%</div>
                        <div className="font-medium text-foreground mb-2">JPG Compression</div>
                        <p className="text-sm text-muted-foreground">
                            Photographs compress exceptionally well. A 5MB photo can often be reduced to under 1MB 
                            with virtually no visible quality loss.
                        </p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Gauge className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">30-50%</div>
                        <div className="font-medium text-foreground mb-2">PNG Compression</div>
                        <p className="text-sm text-muted-foreground">
                            Graphics and screenshots with fewer colors see great results. 
                            Complex PNGs with gradients compress less but still benefit.
                        </p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border text-center">
                        <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                            <Minimize2 className="w-8 h-8 text-warning" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">20-40%</div>
                        <div className="font-medium text-foreground mb-2">WebP Compression</div>
                        <p className="text-sm text-muted-foreground">
                            Already optimized format, but we can squeeze out extra savings. 
                            Perfect for converting from JPG/PNG to WebP.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Why Compress Your Images?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Faster Website Loading</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Large images are the #1 cause of slow websites. Compressed images load faster, 
                            improving user experience and boosting your Google PageSpeed scores and SEO rankings.
                        </p>
                        <div className="p-3 bg-background rounded-lg">
                            <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Before compression</span>
                                <span className="text-warning font-medium">4.2 seconds</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">After compression</span>
                                <span className="text-success font-medium">1.1 seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <HardDrive className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Save Storage Space</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Whether it&apos;s your phone, computer, or cloud storage, compressed images take up 
                            significantly less space. Archive thousands of photos without running out of room.
                        </p>
                        <div className="p-3 bg-background rounded-lg">
                            <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Original collection</span>
                                <span className="text-warning font-medium">12.5 GB</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Compressed collection</span>
                                <span className="text-success font-medium">3.2 GB</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Smartphone className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Mobile Data Savings</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Smaller images mean less data usage when browsing on mobile. Essential for users 
                            on limited data plans or in areas with slow connections.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Reduce mobile data consumption</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Faster loading on 3G/4G networks</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Email & Sharing</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Email services have attachment limits. Compressed images attach faster and are 
                            more likely to be received without being blocked by size restrictions.
                        </p>
                        <div className="p-3 bg-background rounded-lg border border-warning/20">
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                    Gmail limits: 25MB | Outlook: 20MB | Yahoo: 25MB
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Guide */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Finding the Right Quality Balance
                </h2>
                <p className="text-muted-foreground mb-6">
                    Different use cases require different compression levels. Use this guide to select 
                    the optimal quality setting for your needs.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Quality Level</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Size Reduction</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { level: "High (85-95%)", reduction: "40-60%", use: "Photography portfolios, print preparation, archiving" },
                                { level: "Medium (70-85%)", reduction: "60-75%", use: "Websites, blogs, social media, general sharing" },
                                { level: "Low (50-70%)", reduction: "75-85%", use: "Thumbnails, previews, temporary files, email attachments" },
                                { level: "Maximum (<50%)", reduction: "85-95%", use: "Icons, small avatars, when file size is critical" },
                            ].map((row) => (
                                <tr key={row.level} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.level}</td>
                                    <td className="py-3 px-4">
                                        <span className="px-2 py-0.5 rounded text-xs bg-success/10 text-success">
                                            {row.reduction}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.use}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Lossy vs Lossless */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Lossy vs. Lossless Compression
                </h2>
                <p className="text-muted-foreground mb-6">
                    Understanding the difference between compression types helps you make the right choice 
                    for your specific use case.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Info className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Lossy Compression</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Permanently removes some image data to achieve smaller file sizes. 
                            The quality loss is usually imperceptible at medium settings.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm text-muted-foreground">Much smaller file sizes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm text-muted-foreground">Best for photographs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm text-muted-foreground">Ideal for web use</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-warning" />
                                <span className="text-sm text-muted-foreground">Cannot restore original quality</span>
                            </div>
                        </div>
                        <div className="mt-4 p-2 bg-primary/5 rounded text-xs text-muted-foreground">
                            <span className="font-medium">Formats:</span> JPG, WebP (lossy mode)
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Info className="w-6 h-6 text-success" />
                            <h3 className="font-semibold text-foreground">Lossless Compression</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Reduces file size without removing any image data. Perfect when you need 
                            to preserve every detail of the original image.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm text-muted-foreground">Zero quality loss</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm text-muted-foreground">Perfect for graphics, logos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm text-muted-foreground">Can restore to original</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-warning" />
                                <span className="text-sm text-muted-foreground">Larger files than lossy</span>
                            </div>
                        </div>
                        <div className="mt-4 p-2 bg-success/5 rounded text-xs text-muted-foreground">
                            <span className="font-medium">Formats:</span> PNG, WebP (lossless mode), GIF
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Image Compression Best Practices
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">1</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Compress Before Uploading</h3>
                            <p className="text-sm text-muted-foreground">
                                Always compress images before adding them to your website or CMS. 
                                This gives you control over the quality/file size balance.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">2</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Choose the Right Format</h3>
                            <p className="text-sm text-muted-foreground">
                                Use JPG for photos, PNG for graphics with transparency, and WebP 
                                when browser support allows for the best compression.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">3</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Resize Before Compressing</h3>
                            <p className="text-sm text-muted-foreground">
                                There&apos;s no benefit to compressing a 4000×3000 image that will 
                                display at 800×600. Resize first, then compress.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Keep Originals Archived</h3>
                            <p className="text-sm text-muted-foreground">
                                Always keep uncompressed originals. You may need them for future 
                                edits or different use cases requiring higher quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
