"use client";

import {
    Images,
    Shield,
    Zap,
    ImageIcon,
    Presentation,
    Globe,
    Edit3,
    CheckCircle2,
    Download,
    FileType
} from "lucide-react";

export function PdfToImagesContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Convert PDF Pages to Images
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Transform PDF pages into high-quality JPG or PNG images. Perfect for extracting 
                    visuals from documents, creating thumbnails, or using PDF content in presentations 
                    and websites. All conversion happens locally in your browser.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload PDF</h3>
                        <p className="text-sm text-muted-foreground">
                            Select your PDF file. We support documents of any size and page count. 
                            Preview all pages before converting.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Choose Format & Quality</h3>
                        <p className="text-sm text-muted-foreground">
                            Select JPG (smaller files, photos) or PNG (transparency support, graphics). 
                            Adjust DPI for your intended use.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Images</h3>
                        <p className="text-sm text-muted-foreground">
                            Get your images as individual files or a ZIP archive. All pages converted 
                            at your chosen quality settings.
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
                            Convert PDFs to Images Privately
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            PDF documents often contain sensitive or confidential information. 
                            Unlike cloud converters that upload your files to external servers, 
                            ToolMansion converts PDF pages to images entirely within your browser 
                            using client-side rendering technology.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Zero Server Uploads</span>
                                    <span className="text-sm text-muted-foreground">PDFs stay on your device</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Confidential Safe</span>
                                    <span className="text-sm text-muted-foreground">Process sensitive documents securely</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Data Retention</span>
                                    <span className="text-sm text-muted-foreground">Nothing stored or logged</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Fast Processing</span>
                                    <span className="text-sm text-muted-foreground">No upload/download wait times</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Format Comparison */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    JPG vs PNG: Which Format to Choose?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <ImageIcon className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">JPG (JPEG)</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Best for photographs and complex images with gradients. Smaller file sizes 
                            make JPG ideal for web use and email sharing.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Smaller file sizes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Great for photos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Universal compatibility</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            <span className="font-medium">Best for:</span> Web images, email attachments, photos
                        </p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileType className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">PNG</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Best for graphics, text, and images requiring transparency. Lossless quality 
                            preserves sharp edges and fine details.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Lossless quality</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Transparency support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Sharp text & graphics</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            <span className="font-medium">Best for:</span> Graphics, screenshots, text documents
                        </p>
                    </div>
                </div>
            </section>

            {/* DPI Guide */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    DPI Settings Guide
                </h2>
                <p className="text-muted-foreground mb-6">
                    DPI (dots per inch) determines image resolution. Choose the right setting for your 
                    intended use to balance quality and file size.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">DPI Setting</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Resolution</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Best For</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">File Size</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { dpi: "72 DPI", resolution: "Web standard", use: "Website images, previews", size: "Smallest" },
                                { dpi: "150 DPI", resolution: "Medium quality", use: "Email attachments, drafts", size: "Small" },
                                { dpi: "200 DPI", resolution: "Good quality", use: "Presentations, documents", size: "Medium" },
                                { dpi: "300 DPI", resolution: "Print quality", use: "Professional printing", size: "Large" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.dpi}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.resolution}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.use}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-2 py-0.5 rounded text-xs ${
                                            row.size === "Smallest" ? "bg-success/10 text-success" :
                                            row.size === "Small" ? "bg-primary/10 text-primary" :
                                            row.size === "Medium" ? "bg-warning/10 text-warning" :
                                            "bg-error/10 text-error"
                                        }`}>
                                            {row.size}
                                        </span>
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
                    When to Convert PDF to Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Presentation className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Presentations</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Extract pages from PDF reports or documents to use as slides in PowerPoint 
                            or Google Slides presentations.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">PowerPoint slides</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Google Slides</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Keynote presentations</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Web Content</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Convert PDF pages to web-friendly images for embedding in websites, blogs, 
                            or social media posts.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Blog post images</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Social media content</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Website galleries</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Edit3 className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Image Editing</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Extract content from PDFs to edit in Photoshop, GIMP, or other image 
                            editing software.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Photoshop editing</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">GIMP modifications</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Canva integration</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Images className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Archiving</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Create image backups of important PDF documents for long-term storage 
                            or compatibility purposes.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Document backups</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Cross-platform storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Thumbnail creation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF to Image Converter Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Images className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">All Pages or Selection</h3>
                            <p className="text-sm text-muted-foreground">
                                Convert all pages or select specific page ranges. Perfect when you only 
                                need certain pages from a large document.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Download className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Flexible Download</h3>
                            <p className="text-sm text-muted-foreground">
                                Download images individually or as a ZIP archive. Organized file naming 
                                with page numbers for easy reference.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">High-Speed Conversion</h3>
                            <p className="text-sm text-muted-foreground">
                                Client-side processing converts pages instantly. No server bottlenecks 
                                or upload queues to slow you down.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <FileType className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Quality Control</h3>
                            <p className="text-sm text-muted-foreground">
                                Adjustable DPI settings let you balance image quality and file size 
                                for your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
