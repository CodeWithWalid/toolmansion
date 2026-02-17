"use client";

import {
    ImageIcon,
    Shield,
    Zap,
    Monitor,
    Smartphone,
    Globe,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    FileImage
} from "lucide-react";

export function WebpToJpgContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Convert WebP to JPG Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    WebP images offer superior compression, but not all devices and applications support them. 
                    Our free WebP to JPG converter creates universally compatible JPEG files while preserving 
                    image quality. All processing happens locally in your browser for complete privacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload WebP Files</h3>
                        <p className="text-sm text-muted-foreground">
                            Select WebP images from your device. Supports drag-and-drop and batch upload 
                            for converting multiple files at once.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Set Quality (Optional)</h3>
                        <p className="text-sm text-muted-foreground">
                            Adjust JPG quality if needed. Higher quality = larger file size. 
                            Default settings work great for most use cases.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download JPG</h3>
                        <p className="text-sm text-muted-foreground">
                            Get your converted JPG files instantly. Download individually or as a ZIP 
                            archive for batch conversions.
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
                            Why You Might Need to Convert WebP to JPG
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            WebP is Google&apos;s modern image format that provides superior compression — typically 
                            25-35% smaller files than JPEG with equivalent quality. However, compatibility issues 
                            remain with older software, social media platforms, and certain devices.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Limited Compatibility</span>
                                    <span className="text-sm text-muted-foreground">Older software and some social platforms</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Printing Services</span>
                                    <span className="text-sm text-muted-foreground">Many photo labs don&apos;t accept WebP</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Email Clients</span>
                                    <span className="text-sm text-muted-foreground">Some email apps won&apos;t preview WebP</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Legacy Systems</span>
                                    <span className="text-sm text-muted-foreground">Corporate software and old CMS platforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WebP vs JPG Comparison */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    WebP vs JPG: Format Comparison
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                                <th className="text-center py-3 px-4 font-semibold text-primary">WebP</th>
                                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">JPG</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { feature: "File Size", webp: "⭐⭐⭐ Smallest", jpg: "⭐⭐ Medium" },
                                { feature: "Browser Support", webp: "⭐⭐⭐ 96%+ modern", jpg: "⭐⭐⭐ Universal" },
                                { feature: "Software Support", webp: "⭐⭐ Growing", jpg: "⭐⭐⭐ Universal" },
                                { feature: "Transparency", webp: "✅ Yes", jpg: "❌ No" },
                                { feature: "Animation", webp: "✅ Yes", jpg: "❌ No" },
                                { feature: "Lossless Option", webp: "✅ Yes", jpg: "❌ No" },
                                { feature: "Best For", webp: "Modern websites", jpg: "Universal sharing" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.feature}</td>
                                    <td className="py-3 px-4 text-center text-muted-foreground">{row.webp}</td>
                                    <td className="py-3 px-4 text-center text-muted-foreground">{row.jpg}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Transparency Warning */}
            <section className="p-6 bg-warning/5 border border-warning/20 rounded-xl">
                <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-foreground mb-2">Important: Transparency Handling</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                            JPG does not support transparency (alpha channel). If your WebP image has transparent 
                            areas, they will be filled with a background color (white by default).
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground">
                                Transparent → White (default)
                            </span>
                            <span className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground">
                                Or choose: Black, Custom Color
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    When to Convert WebP to JPG
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Smartphone className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Social Media Upload</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Some social platforms still have inconsistent WebP support. Converting to JPG 
                            ensures your images display correctly everywhere.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Instagram posts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Facebook sharing</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">LinkedIn articles</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Email Attachments</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Email clients often don&apos;t preview WebP images inline. JPG ensures recipients 
                            can see your images without downloading and opening separately.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Gmail inline preview</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Outlook compatibility</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Mobile email apps</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileImage className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Print Services</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Photo printing services, online and retail, typically require JPG format. 
                            WebP files are often rejected at upload.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Online photo labs</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Retail kiosks (Walgreens, CVS)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Professional printing</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Legacy Software</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Older image editors, CMS platforms, and corporate systems may not support WebP. 
                            JPG ensures compatibility across all systems.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Old image editors</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Legacy CMS platforms</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Corporate systems</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quality Tips */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    WebP to JPG Conversion Tips
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">1</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Choose Quality Wisely</h3>
                            <p className="text-sm text-muted-foreground">
                                85-90% quality offers the best balance of file size and visual quality. 
                                Only use 100% for archival purposes.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">2</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Handle Transparency</h3>
                            <p className="text-sm text-muted-foreground">
                                If your WebP has transparency, choose an appropriate background color. 
                                White works for most photos, but consider your use case.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">3</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Batch Processing</h3>
                            <p className="text-sm text-muted-foreground">
                                Converting multiple files? Use batch mode and download as ZIP to save time. 
                                All files use the same quality settings.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Keep Originals</h3>
                            <p className="text-sm text-muted-foreground">
                                JPG is lossy — each save reduces quality slightly. Keep your original WebP 
                                files for future editing or reconversion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
