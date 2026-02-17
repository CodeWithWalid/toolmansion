"use client";

import {
    Braces,
    Shield,
    Zap,
    Bug,
    Code2,
    FileJson,
    Terminal,
    CheckCircle2,
    AlertTriangle,
    Copy,
    Download
} from "lucide-react";

export function JsonFormatterContent() {
    return (
        <div className="space-y-16">
            {/* Hero/How It Works Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Format and Validate JSON Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Clean up messy JSON data instantly with our free formatter. Validate syntax, 
                    fix indentation, and make your JSON readable — all processed locally in your browser 
                    for maximum security. Perfect for developers, API testing, and data analysis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Paste Your JSON</h3>
                        <p className="text-sm text-muted-foreground">
                            Copy and paste your JSON data or upload a .json file. 
                            We handle files of any size — from simple objects to massive API responses.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Click Format</h3>
                        <p className="text-sm text-muted-foreground">
                            Our tool automatically validates syntax and applies perfect indentation. 
                            Errors are highlighted with line numbers for quick debugging.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Copy or Download</h3>
                        <p className="text-sm text-muted-foreground">
                            Copy the formatted JSON to clipboard or download as a .json file. 
                            Your data never leaves your browser.
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
                            Developer-Grade Privacy for Sensitive Data
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            JSON data often contains API keys, user information, and proprietary business logic. 
                            Unlike online formatters that send your data to remote servers, ToolMansion processes 
                            everything locally. Your JSON never touches our servers — or anyone else&apos;s.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Zero Network Requests</span>
                                    <span className="text-sm text-muted-foreground">No data transmission to any server</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Safe for Production Data</span>
                                    <span className="text-sm text-muted-foreground">Format real API responses securely</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Data Retention</span>
                                    <span className="text-sm text-muted-foreground">Nothing stored, cached, or logged</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Works Offline</span>
                                    <span className="text-sm text-muted-foreground">Use without internet after loading</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    When to Use a JSON Formatter
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Bug className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Debugging APIs</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            API returning minified JSON? Paste the response into our formatter to 
                            make it readable. Spot missing fields, incorrect types, and malformed 
                            data at a glance.
                        </p>
                        <div className="p-3 bg-background rounded text-xs text-muted-foreground font-mono">
                            {"{\"error\":true,\"code\":500}"} → Formatted
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Code2 className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Configuration Files</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Working with package.json, tsconfig.json, or custom config files? 
                            Format them for better readability and validate syntax before committing.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">package.json cleanup</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">tsconfig.json formatting</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Data Analysis</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Exploring large JSON datasets? Formatting makes the structure visible, 
                            helping you understand nested objects and arrays for analysis.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Database exports</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Analytics data</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    JSON Formatter Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Syntax Validation</h3>
                            <p className="text-sm text-muted-foreground">
                                Detects missing brackets, trailing commas, invalid escape sequences, 
                                and other JSON syntax errors with detailed error messages and line numbers.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Instant Formatting</h3>
                            <p className="text-sm text-muted-foreground">
                                No delays or loading states. Format megabytes of JSON data instantly 
                                with perfect indentation and line breaks.
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
                                Copy formatted JSON to clipboard with one click. Paste directly into 
                                your code editor, API client, or documentation.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Download className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">File Download</h3>
                            <p className="text-sm text-muted-foreground">
                                Download formatted JSON as a .json file with proper encoding. 
                                Maintains UTF-8 support for international characters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON Standards */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    JSON Standards & Compatibility
                </h2>
                <p className="text-muted-foreground mb-6">
                    Our formatter follows the official JSON specification (RFC 8259) and handles 
                    various edge cases and extensions used by different programming languages.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Standard JSON</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Our Support</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { feature: "Data Types", standard: "string, number, object, array, boolean, null", support: "Full support + BigInt handling" },
                                { feature: "Character Encoding", standard: "UTF-8", support: "UTF-8 with BOM detection" },
                                { feature: "Numbers", standard: "Double-precision float", support: "Arbitrary precision preserved" },
                                { feature: "Comments", standard: "Not allowed", support: "Strips JSON5/JSONC comments" },
                                { feature: "Trailing Commas", standard: "Not allowed", support: "Detects and reports error" },
                                { feature: "Single Quotes", standard: "Not allowed", support: "Detects and reports error" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.feature}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.standard}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{row.support}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Common Errors */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common JSON Errors We Detect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { error: "Trailing Commas", example: '{"a": 1,}' , fix: "Remove comma before closing bracket" },
                        { error: "Single Quotes", example: "{'key': 'value'}", fix: "Replace with double quotes" },
                        { error: "Unquoted Keys", example: "{key: 'value'}", fix: "Quote all object keys" },
                        { error: "Comments", example: "{// comment\n}", fix: "Remove all comments" },
                        { error: "Missing Commas", example: '{"a": 1 "b": 2}', fix: "Add comma between properties" },
                        { error: "Unclosed Strings", example: '{"text": "Hello}', fix: "Close string with quote" },
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border">
                            <h3 className="font-semibold text-foreground mb-2">{item.error}</h3>
                            <code className="block p-2 bg-background rounded text-xs text-error mb-2 font-mono">{item.example}</code>
                            <p className="text-sm text-muted-foreground">
                                <span className="text-success font-medium">Fix:</span> {item.fix}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Minify Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    JSON Minification
                </h2>
                <p className="text-muted-foreground mb-6">
                    In addition to formatting, our tool can also minify JSON — removing all unnecessary 
                    whitespace to create the smallest possible file size for production use.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <FileJson className="w-5 h-5 text-primary" />
                            When to Format (Pretty Print)
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Debugging and development</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Configuration files</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Documentation and examples</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Data analysis and inspection</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" />
                            When to Minify
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Production API responses</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Reducing file size for storage</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Embedding in URLs or cookies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Network optimization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
