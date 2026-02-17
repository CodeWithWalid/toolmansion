"use client";

import {
    FileImage,
    Shield,
    Zap,
    Scan,
    Printer,
    Share2,
    Lock,
    CheckCircle2,
    FileText,
    Settings
} from "lucide-react";

export function JpgToPdfContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Convert JPG Images to PDF Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Turn your photos, scans, and images into professional PDF documents. Our free 
                    JPG to PDF converter preserves image quality while creating universally compatible 
                    documents. Process everything locally — your images never leave your device.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload Images</h3>
                        <p className="text-sm text-muted-foreground">
                            Select JPG, PNG, or WebP images. Upload one file for a single-page PDF 
                            or multiple files for a multi-page document.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Arrange & Configure</h3>
                        <p className="text-sm text-muted-foreground">
                            Drag to reorder images, select page size (A4, Letter, etc.), 
                            and adjust margins. Preview before creating the PDF.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download PDF</h3>
                        <p className="text-sm text-muted-foreground">
                            Get your PDF document instantly. All images embedded at full quality 
                            with selectable text if OCR was applied.
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
                            Why Convert Images to PDF?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            PDF is the universal standard for document sharing. Unlike image files that 
                            may display differently on various devices, PDFs maintain consistent formatting 
                            everywhere. They&apos;re also harder to accidentally edit and work better for printing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Universal Compatibility</span>
                                    <span className="text-sm text-muted-foreground">Works on every device and OS</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Print-Ready</span>
                                    <span className="text-sm text-muted-foreground">Perfect formatting for printing</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Professional Appearance</span>
                                    <span className="text-sm text-muted-foreground">Documents look more official</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Tamper Resistant</span>
                                    <span className="text-sm text-muted-foreground">Harder to accidentally modify</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common JPG to PDF Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Scan className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Document Scanning</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Scanned receipts, contracts, and forms are often saved as JPG. Converting 
                            to PDF creates professional documents suitable for email and archiving.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Receipts and invoices</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Signed contracts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Application forms</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Photo Albums</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Create digital photo albums by converting multiple images into a single PDF. 
                            Easy to share, print, or archive for long-term storage.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Vacation photo collections</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Portfolio presentations</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Event documentation</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Share2 className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Professional Sharing</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Sending designs, screenshots, or diagrams? PDF format looks more professional 
                            and ensures recipients see exactly what you intended.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Design mockups</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Screenshot documentation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Diagrams and charts</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Printer className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Print Preparation</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Print shops often prefer PDF files for consistent output. Convert your images 
                            to PDF with proper page sizing for professional printing results.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Photo books</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Marketing materials</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Large format printing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Page Size Guide */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF Page Size Guide
                </h2>
                <p className="text-muted-foreground mb-6">
                    Choose the right page size for your intended use. Our converter supports standard 
                    paper sizes used worldwide.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Page Size</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Dimensions</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { size: "A4", dimensions: "210 × 297 mm", use: "International standard, documents, letters" },
                                { size: "Letter", dimensions: "216 × 279 mm", use: "US/Canada standard, business documents" },
                                { size: "Legal", dimensions: "216 × 356 mm", use: "Contracts, legal documents" },
                                { size: "A3", dimensions: "297 × 420 mm", use: "Posters, large diagrams" },
                                { size: "A5", dimensions: "148 × 210 mm", use: "Booklets, flyers" },
                                { size: "Original", dimensions: "Match image", use: "Photos, preserving exact dimensions" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.size}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.dimensions}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.use}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    JPG to PDF Converter Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Settings className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Customizable Layout</h3>
                            <p className="text-sm text-muted-foreground">
                                Adjust margins, page orientation (portrait/landscape), and image positioning. 
                                Fit images to page or maintain original aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Batch Conversion</h3>
                            <p className="text-sm text-muted-foreground">
                                Convert multiple images to a single multi-page PDF, or create separate 
                                PDFs for each image. Your choice with one click.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Lock className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Privacy Protected</h3>
                            <p className="text-sm text-muted-foreground">
                                All processing happens in your browser. Your photos and documents are 
                                never uploaded to any server, ensuring complete confidentiality.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <FileImage className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Multiple Formats</h3>
                            <p className="text-sm text-muted-foreground">
                                Not just JPG — also supports PNG, WebP, BMP, and GIF inputs. 
                                Mix different image types in a single PDF.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    JPG to PDF Best Practices
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">1</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Optimize Image Size First</h3>
                            <p className="text-sm text-muted-foreground">
                                Large images create large PDFs. If file size matters, resize images to 
                                appropriate dimensions (e.g., 150 DPI for screen viewing) before conversion.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">2</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Match Page Size to Purpose</h3>
                            <p className="text-sm text-muted-foreground">
                                Use A4 or Letter for documents meant to be printed. Use &quot;Original&quot; size 
                                for photo albums to preserve image dimensions exactly.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">3</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Consider Margins</h3>
                            <p className="text-sm text-muted-foreground">
                                Leave adequate margins (minimum 0.5 inches) if the PDF will be printed. 
                                Printers often can&apos;t print to the edge of the page.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Maintain Aspect Ratio</h3>
                            <p className="text-sm text-muted-foreground">
                                Enable &quot;Maintain Aspect Ratio&quot; to prevent images from being stretched 
                                or squashed. Black or white bars are better than distorted images.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
