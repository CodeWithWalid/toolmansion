"use client";

import {
    Scissors,
    Shield,
    Zap,
    FileStack,
    Building2,
    GraduationCap,
    FileText,
    CheckCircle2,
    Download,
    Layers
} from "lucide-react";

export function PdfSplitterContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How to Split PDF Files Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Extract specific pages or split large PDFs into smaller documents. Our free PDF 
                    splitter lets you separate pages by range, extract individual pages, or divide 
                    by file size — all processed locally in your browser for complete privacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload Your PDF</h3>
                        <p className="text-sm text-muted-foreground">
                            Select the PDF file you want to split. We handle files of any size, 
                            from single-page documents to thousand-page ebooks.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Choose Split Method</h3>
                        <p className="text-sm text-muted-foreground">
                            Select specific pages, define page ranges, split evenly, or extract 
                            every N pages. Preview pages before splitting.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Results</h3>
                        <p className="text-sm text-muted-foreground">
                            Get your split PDFs instantly as individual files or a ZIP archive. 
                            All formatting and content preserved.
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
                            Split PDFs Without Uploading
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            PDF documents often contain sensitive information — contracts, financial records, 
                            personal data. Unlike cloud-based splitters that require uploading to remote servers, 
                            ToolMansion processes everything locally in your browser.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">100% Private</span>
                                    <span className="text-sm text-muted-foreground">Documents never leave your device</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Size Limits</span>
                                    <span className="text-sm text-muted-foreground">Split files of any size</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Instant Processing</span>
                                    <span className="text-sm text-muted-foreground">No upload or download delays</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Works Offline</span>
                                    <span className="text-sm text-muted-foreground">After page loads, disconnect internet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split Methods */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF Splitting Methods
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Extract Specific Pages</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Select individual pages to extract as a new PDF. Perfect when you only 
                            need certain pages from a large document.
                        </p>
                        <div className="p-3 bg-background rounded-lg">
                            <span className="text-xs text-muted-foreground">Example: </span>
                            <code className="text-xs text-primary">Pages 1, 5, 10, 15</code>
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Layers className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Split by Page Range</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Define page ranges to create multiple PDFs. Split a 100-page document 
                            into chapters or sections.
                        </p>
                        <div className="p-3 bg-background rounded-lg">
                            <span className="text-xs text-muted-foreground">Example: </span>
                            <code className="text-xs text-primary">1-10, 11-20, 21-30</code>
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Scissors className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Split Every N Pages</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Automatically split a PDF into equal parts. Great for dividing large 
                            documents into manageable chunks.
                        </p>
                        <div className="p-3 bg-background rounded-lg">
                            <span className="text-xs text-muted-foreground">Example: </span>
                            <code className="text-xs text-primary">Split every 10 pages</code>
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileStack className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Extract as Images</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Convert specific pages to JPG or PNG images. Useful for using PDF 
                            content in presentations or websites.
                        </p>
                        <div className="p-3 bg-background rounded-lg">
                            <span className="text-xs text-muted-foreground">Output: </span>
                            <code className="text-xs text-primary">page_1.jpg, page_2.jpg...</code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common PDF Splitting Scenarios
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Business Documents</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Separate large reports into chapters, extract specific contracts from 
                            document collections, or split invoices for distribution.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Extract specific contracts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Separate invoices</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Split annual reports</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Academic Use</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Extract relevant chapters from textbooks, split scanned notes by topic, 
                            or separate specific articles from journals.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Extract textbook chapters</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Split research papers</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Organize study notes</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Personal Organization</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Split scanned document collections, extract pages from ebooks, or separate 
                            forms for different recipients.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Split scanned receipts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Extract ebook chapters</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Separate tax documents</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF Splitter Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Scissors className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Flexible Splitting</h3>
                            <p className="text-sm text-muted-foreground">
                                Multiple splitting modes: by page number, by range, by size, or custom selection. 
                                Handle any splitting scenario.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Download className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Batch Download</h3>
                            <p className="text-sm text-muted-foreground">
                                Download split pages as individual PDFs or bundled in a ZIP file. 
                                Organized naming for easy identification.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Lightning Fast</h3>
                            <p className="text-sm text-muted-foreground">
                                Browser-based processing means instant results. Split 100-page documents 
                                in seconds without uploading.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Format Preservation</h3>
                            <p className="text-sm text-muted-foreground">
                                All text, images, fonts, and formatting preserved exactly in each split file. 
                                No quality loss.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF Splitting Best Practices
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">1</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Plan Your Split Strategy</h3>
                            <p className="text-sm text-muted-foreground">
                                Before splitting, decide on your organization scheme. Will you split by chapter, 
                                by date, or by document type? Consistent naming helps keep files organized.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">2</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Consider File Size</h3>
                            <p className="text-sm text-muted-foreground">
                                If you need to split for email attachment limits (typically 10-25MB), 
                                calculate target sizes beforehand. Use our PDF compressor if needed.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">3</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Keep the Original</h3>
                            <p className="text-sm text-muted-foreground">
                                Always keep a backup of the original complete PDF before splitting. 
                                You may need the full document later.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Preview Before Splitting</h3>
                            <p className="text-sm text-muted-foreground">
                                Use the preview feature to verify you&apos;ve selected the right pages. 
                                It&apos;s easier to check now than to re-merge later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
