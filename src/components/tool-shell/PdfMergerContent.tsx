"use client";

import {
    FileStack,
    Shield,
    Zap,
    ArrowUpDown,
    Clock,
    Building2,
    GraduationCap,
    FileText,
    CheckCircle2,
    AlertCircle,
    Download
} from "lucide-react";

export function PdfMergerContent() {
    return (
        <div className="space-y-16">
            {/* Hero/How It Works Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How to Merge PDF Files Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Combine multiple PDF documents into a single file in seconds. Our free PDF merger 
                    works entirely in your browser — no uploads, no registration, no watermarks. 
                    Perfect for organizing documents, creating reports, or combining scanned pages.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload PDF Files</h3>
                        <p className="text-sm text-muted-foreground">
                            Select multiple PDF files from your device. Drag and drop or click to browse. 
                            Upload 2 to 50+ files at once with no size limits.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Arrange Order</h3>
                        <p className="text-sm text-muted-foreground">
                            Drag and drop to reorder pages and files. Preview each document to ensure 
                            the correct sequence before merging.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Merged PDF</h3>
                        <p className="text-sm text-muted-foreground">
                            Click merge and download your combined PDF instantly. All formatting, 
                            fonts, and images preserved exactly as in the originals.
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
                            Secure PDF Merging — Your Documents Stay Private
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Many online PDF tools upload your files to remote servers, creating privacy risks 
                            and leaving copies of your sensitive documents on third-party systems. 
                            ToolMansion processes everything locally in your browser.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">100% Client-Side</span>
                                    <span className="text-sm text-muted-foreground">PDFs never leave your device</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Cloud Storage</span>
                                    <span className="text-sm text-muted-foreground">Zero server interaction</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Watermarks</span>
                                    <span className="text-sm text-muted-foreground">Clean professional output</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Instant Processing</span>
                                    <span className="text-sm text-muted-foreground">No upload/download delays</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common Uses for PDF Merging
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Business Documents</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Combine contracts, invoices, receipts, and reports into single organized files. 
                            Create comprehensive proposals by merging cover pages with specifications.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Monthly report compilation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Contract + appendix merging</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Invoice batch processing</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Academic Work</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Merge research papers, appendices, and bibliographies. Combine scanned 
                            assignment pages into single submissions for online portals.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Thesis chapter compilation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Assignment submissions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Research paper assembly</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Personal Organization</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Organize personal documents, receipts, and scanned forms. Combine 
                            bank statements, tax documents, and insurance papers for archiving.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Tax document organization</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Receipt collection</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">E-book compilation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF Merger Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <ArrowUpDown className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Drag & Drop Reordering</h3>
                            <p className="text-sm text-muted-foreground">
                                Easily rearrange files and pages with intuitive drag-and-drop. 
                                Preview thumbnails ensure correct page sequence.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <FileStack className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Unlimited Files</h3>
                            <p className="text-sm text-muted-foreground">
                                Merge 2 files or 50+ files in one operation. No artificial limits — 
                                constrained only by your device&apos;s memory.
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
                                Browser-based processing means instant results. No waiting for uploads 
                                or server processing queues.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Download className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Format Preservation</h3>
                            <p className="text-sm text-muted-foreground">
                                All text, images, fonts, and formatting preserved exactly. 
                                The merged PDF looks identical to the originals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PDF Tips */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    PDF Merging Best Practices
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">1</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Optimize Before Merging</h3>
                            <p className="text-sm text-muted-foreground">
                                If your PDFs contain large images, consider compressing them first for a smaller 
                                final file size. This is especially helpful for email attachments.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">2</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Check Page Orientation</h3>
                            <p className="text-sm text-muted-foreground">
                                Ensure all pages have consistent orientation (portrait/landscape) before merging. 
                                Mixing orientations can make the final document harder to read.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">3</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Add a Table of Contents</h3>
                            <p className="text-sm text-muted-foreground">
                                For large merged documents, consider creating a cover page with a table of contents 
                                listing all included documents and their starting page numbers.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Watch File Size Limits</h3>
                            <p className="text-sm text-muted-foreground">
                                Email providers have attachment limits (typically 10-25MB). If your merged PDF 
                                is too large, use our PDF compression tool before sending.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    ToolMansion vs Other PDF Mergers
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                                <th className="text-center py-3 px-4 font-semibold text-primary">ToolMansion</th>
                                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Cloud Tools</th>
                                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Desktop Software</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { feature: "Privacy (No Uploads)", mansion: "✓ Yes", cloud: "✗ No", desktop: "✓ Yes" },
                                { feature: "Works Offline", mansion: "✓ Yes", cloud: "✗ No", desktop: "✓ Yes" },
                                { feature: "No Installation", mansion: "✓ Yes", cloud: "✓ Yes", desktop: "✗ No" },
                                { feature: "No Watermarks", mansion: "✓ Yes", cloud: "Sometimes", desktop: "Usually" },
                                { feature: "Unlimited Files", mansion: "✓ Yes", cloud: "Often Limited", desktop: "Usually" },
                                { feature: "100% Free", mansion: "✓ Yes", cloud: "Freemium", desktop: "Paid" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.feature}</td>
                                    <td className="py-3 px-4 text-center text-success">{row.mansion}</td>
                                    <td className="py-3 px-4 text-center text-muted-foreground">{row.cloud}</td>
                                    <td className="py-3 px-4 text-center text-muted-foreground">{row.desktop}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
