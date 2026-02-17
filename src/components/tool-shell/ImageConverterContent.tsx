"use client";

import {
    ArrowRightLeft,
    Shield,
    Zap,
    FileImage,
    Smartphone,
    Globe,
    Clock,
    CheckCircle2,
    XCircle,
    Monitor
} from "lucide-react";

export function ImageConverterContent() {
    return (
        <div className="space-y-16">
            {/* How It Works Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How to Convert Images Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Converting images has never been easier. Our free online image converter works directly in your browser 
                    — no downloads, no uploads, no waiting. Follow these simple steps to convert your images to any format in seconds.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload Your Image</h3>
                        <p className="text-sm text-muted-foreground">
                            Drag and drop your image file or click to browse. We support JPG, PNG, WebP, 
                            GIF, BMP, TIFF, and more. Files up to 50MB accepted.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Choose Output Format</h3>
                        <p className="text-sm text-muted-foreground">
                            Select your target format from 15+ supported formats. Each format has different 
                            use cases — we&apos;ll help you choose the best one.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Instantly</h3>
                        <p className="text-sm text-muted-foreground">
                            Your converted image downloads immediately. No registration, no email required. 
                            Convert as many images as you need, completely free.
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
                            100% Private & Secure — Your Files Never Leave Your Device
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Unlike other online image converters that upload your files to remote servers, 
                            ToolMansion processes everything locally in your browser using WebAssembly technology. 
                            This means:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Zero data transfer — images stay on your device</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">No cloud storage or servers involved</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">No registration or account required</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">GDPR compliant by design — no personal data collection</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Supported Formats */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Supported Image Formats
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                    Convert between 15+ popular image formats. Whether you need to optimize for web, 
                    create transparency, or maintain maximum quality, we&apos;ve got you covered.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "JPG/JPEG", desc: "Best for photos", badge: "Popular" },
                        { name: "PNG", desc: "Transparency support", badge: "Popular" },
                        { name: "WebP", desc: "Modern web format", badge: "Recommended" },
                        { name: "GIF", desc: "Animations supported" },
                        { name: "BMP", desc: "Uncompressed bitmap" },
                        { name: "TIFF", desc: "High quality print" },
                        { name: "ICO", desc: "Favicon format" },
                        { name: "SVG", desc: "Vector graphics" },
                    ].map((format) => (
                        <div key={format.name} className="p-4 bg-muted/50 rounded-lg border border-border">
                            <div className="flex items-center gap-2 mb-2">
                                <FileImage className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-foreground">{format.name}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{format.desc}</p>
                            {format.badge && (
                                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                                    format.badge === "Popular" 
                                        ? "bg-success/10 text-success" 
                                        : "bg-primary/10 text-primary"
                                }`}>
                                    {format.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Format Comparison Table */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Choosing the Right Image Format
                </h2>
                <p className="text-muted-foreground mb-6">
                    Different formats serve different purposes. Use this guide to select the optimal format 
                    for your specific use case.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Format</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Best For</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Compression</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Transparency</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Animation</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { format: "JPG", best: "Photography", compression: "Lossy", transparency: "No", animation: "No" },
                                { format: "PNG", best: "Graphics, Screenshots", compression: "Lossless", transparency: "Yes", animation: "No" },
                                { format: "WebP", best: "Web images (all types)", compression: "Both", transparency: "Yes", animation: "Yes" },
                                { format: "GIF", best: "Simple animations", compression: "Lossless", transparency: "Yes (1-bit)", animation: "Yes" },
                                { format: "BMP", best: "Legacy compatibility", compression: "None", transparency: "No", animation: "No" },
                            ].map((row) => (
                                <tr key={row.format} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.format}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.best}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-2 py-0.5 rounded text-xs ${
                                            row.compression === "Lossy" ? "bg-warning/10 text-warning" :
                                            row.compression === "Lossless" ? "bg-success/10 text-success" :
                                            "bg-primary/10 text-primary"
                                        }`}>
                                            {row.compression}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        {row.transparency === "Yes" || row.transparency === "Yes (1-bit)" ? (
                                            <CheckCircle2 className="w-4 h-4 text-success" />
                                        ) : (
                                            <XCircle className="w-4 h-4 text-muted-foreground/50" />
                                        )}
                                    </td>
                                    <td className="py-3 px-4">
                                        {row.animation === "Yes" ? (
                                            <CheckCircle2 className="w-4 h-4 text-success" />
                                        ) : (
                                            <XCircle className="w-4 h-4 text-muted-foreground/50" />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Website Optimization</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Convert large PNG screenshots to compressed JPG or WebP to reduce page load times 
                            and improve Core Web Vitals scores. Smaller images mean faster websites and better SEO.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Recommended:</span> PNG → WebP or JPG
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Smartphone className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Social Media</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Instagram, Twitter, and Facebook have specific format requirements. Convert HEIC 
                            from iPhone to JPG for universal compatibility, or create transparent PNGs for overlays.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Recommended:</span> HEIC → JPG, or any → PNG
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Print & Design</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Professional printing requires specific formats. Convert to TIFF for lossless quality 
                            in print production, or create ICO files for application icons and favicons.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Recommended:</span> Any → TIFF, or PNG → ICO
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Archive & Storage</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Convert older formats like BMP or TIFF to modern compressed formats to save disk space 
                            while maintaining visual quality. Batch convert entire folders of images.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Recommended:</span> BMP/TIFF → PNG or WebP
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Why Choose ToolMansion Image Converter?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Lightning Fast</h3>
                            <p className="text-sm text-muted-foreground">
                                Client-side processing means no upload/download delays. Convert images instantly, 
                                even large files up to 50MB.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Maximum Privacy</h3>
                            <p className="text-sm text-muted-foreground">
                                Your images are processed locally. No cloud servers, no data collection, 
                                no risk of data breaches. Perfect for sensitive documents.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <ArrowRightLeft className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Universal Compatibility</h3>
                            <p className="text-sm text-muted-foreground">
                                Works on any device with a modern browser — Windows, Mac, Linux, iOS, Android. 
                                No app installation needed.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <FileImage className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Quality Preserved</h3>
                            <p className="text-sm text-muted-foreground">
                                Advanced algorithms ensure your converted images maintain the highest possible 
                                quality for the target format.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
