"use client";

import {
    Binary,
    Shield,
    Zap,
    Code,
    FileJson,
    ImageIcon,
    Globe,
    CheckCircle2,
    Copy,
    Terminal
} from "lucide-react";

export function Base64Content() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Base64 Encode and Decode Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Convert text and binary data to Base64 format and back. Essential for developers, 
                    data transmission, and embedding resources in code. Our free Base64 encoder works 
                    entirely in your browser — your data never leaves your device.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Enter Text or Upload File</h3>
                        <p className="text-sm text-muted-foreground">
                            Type text directly, paste content, or upload files including images, 
                            documents, and binary data.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Choose Encode or Decode</h3>
                        <p className="text-sm text-muted-foreground">
                            Select whether to encode to Base64 or decode from Base64 back to 
                            original format.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Get Result</h3>
                        <p className="text-sm text-muted-foreground">
                            Copy the result to clipboard or download as a file. Instant processing 
                            with no server uploads.
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
                            What is Base64 Encoding?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Base64 is a binary-to-text encoding scheme that represents binary data in an 
                            ASCII string format. It&apos;s commonly used when there&apos;s a need to encode binary data 
                            that needs to be stored or transferred over media designed to deal with text.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Text Representation</span>
                                    <span className="text-sm text-muted-foreground">Converts binary to printable ASCII</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">URL & Email Safe</span>
                                    <span className="text-sm text-muted-foreground">No special character issues</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Reversible</span>
                                    <span className="text-sm text-muted-foreground">Decode back to original data</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Universal Standard</span>
                                    <span className="text-sm text-muted-foreground">Supported by all programming languages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How Base64 Encoding Works
                </h2>
                <p className="text-muted-foreground mb-6">
                    Base64 encoding works by dividing binary data into 6-bit chunks, with each chunk 
                    mapped to a specific character in the Base64 alphabet (A-Z, a-z, 0-9, +, /).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg border border-border text-center">
                        <div className="text-2xl mb-2">📄</div>
                        <h4 className="font-semibold text-foreground mb-2">Original Data</h4>
                        <p className="text-xs text-muted-foreground">Binary or text input</p>
                        <code className="block mt-2 text-xs bg-background p-2 rounded">Hello</code>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg border border-border text-center">
                        <div className="text-2xl mb-2">⚙️</div>
                        <h4 className="font-semibold text-foreground mb-2">Processing</h4>
                        <p className="text-xs text-muted-foreground">6-bit chunk conversion</p>
                        <code className="block mt-2 text-xs bg-background p-2 rounded">010010 000110...</code>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg border border-border text-center">
                        <div className="text-2xl mb-2">🔣</div>
                        <h4 className="font-semibold text-foreground mb-2">Base64 Output</h4>
                        <p className="text-xs text-muted-foreground">ASCII representation</p>
                        <code className="block mt-2 text-xs bg-background p-2 rounded">SGVsbG8=</code>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common Base64 Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <ImageIcon className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Embedding Images in Code</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Embed images directly in HTML, CSS, or JavaScript as data URIs. 
                            Reduces HTTP requests but increases file size by ~33%.
                        </p>
                        <div className="p-3 bg-background rounded text-xs text-muted-foreground font-mono">
                            data:image/png;base64,iVBORw0KGgo...
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileJson className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">API Data Transmission</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Send binary data (files, images) in JSON payloads. APIs often require 
                            Base64 encoding for binary content in JSON.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">File uploads via API</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Image transmission</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Email Attachments</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Email systems use Base64 to encode binary attachments (images, PDFs) 
                            for transmission through text-based protocols.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">MIME encoding</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">SMTP compatibility</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Data Storage</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Store binary data in text-based systems like databases, XML files, 
                            or configuration files that don&apos;t support binary content.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Database storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Config files</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Base64 Encoder Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Binary className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">File Encoding</h3>
                            <p className="text-sm text-muted-foreground">
                                Upload any file type — images, PDFs, documents — and convert to Base64. 
                                Preview images before downloading.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Code className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Text Encoding</h3>
                            <p className="text-sm text-muted-foreground">
                                Encode plain text strings for use in code, APIs, or configuration files. 
                                Supports Unicode characters.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Copy className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">One-Click Copy</h3>
                            <p className="text-sm text-muted-foreground">
                                Copy encoded/decoded results to clipboard instantly. Format with line 
                                breaks for better readability.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Private Processing</h3>
                            <p className="text-sm text-muted-foreground">
                                All encoding/decoding happens locally. Your sensitive files and data 
                                never leave your device.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Details */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Base64 Technical Details
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Property</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Value</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { prop: "Alphabet", value: "A-Z, a-z, 0-9, +, /", desc: "64 characters representing 6-bit values (0-63)" },
                                { prop: "Padding", value: "=", desc: "Equals signs added to make length multiple of 3 bytes" },
                                { prop: "Output Size", value: "~133% of input", desc: "Base64 encoding increases size by approximately 33%" },
                                { prop: "Line Length", value: "76 chars (RFC)", desc: "Standard recommends line breaks every 76 characters" },
                                { prop: "URL Variant", value: "Base64URL", desc: "Uses - and _ instead of + and / for URL safety" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.prop}</td>
                                    <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{row.value}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Best Practices */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Base64 Best Practices
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">1</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Consider File Size Impact</h3>
                            <p className="text-sm text-muted-foreground">
                                Base64 encoding increases file size by ~33%. For large files, consider 
                                whether direct binary transfer is more efficient than Base64 encoding.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">2</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Use for Small Images</h3>
                            <p className="text-sm text-muted-foreground">
                                Embedding small icons and images as Base64 data URIs can reduce HTTP requests. 
                                For larger images, traditional file serving is usually better.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">3</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Not for Encryption</h3>
                            <p className="text-sm text-muted-foreground">
                                Base64 is encoding, not encryption. Anyone can decode Base64. For sensitive 
                                data, use proper encryption before or instead of Base64 encoding.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Handle URL-Safe Variants</h3>
                            <p className="text-sm text-muted-foreground">
                                Standard Base64 uses + and / which can break URLs. Use Base64URL encoding 
                                (replaces + with - and / with _) for URL parameters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
