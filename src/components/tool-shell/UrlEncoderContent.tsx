"use client";

import {
    Link,
    Shield,
    Zap,
    Globe,
    Code,
    FileJson,
    Terminal,
    CheckCircle2,
    AlertTriangle,
    ExternalLink
} from "lucide-react";

export function UrlEncoderContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    URL Encode and Decode Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Convert special characters in URLs to percent-encoded format for safe transmission. 
                    Essential for web developers, API integration, and handling international characters. 
                    Our free URL encoder processes everything locally in your browser.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Enter URL or Text</h3>
                        <p className="text-sm text-muted-foreground">
                            Paste a full URL, query string, or text containing special characters 
                            that need encoding.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Select Operation</h3>
                        <p className="text-sm text-muted-foreground">
                            Choose encode to make URL-safe, or decode to restore original characters. 
                            Supports full and component encoding.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Copy Result</h3>
                        <p className="text-sm text-muted-foreground">
                            Copy the encoded/decoded result for use in your code, API calls, or 
                            browser address bar.
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
                            What is URL Encoding (Percent Encoding)?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            URL encoding converts characters into a format that can be transmitted over the Internet. 
                            URLs can only be sent over the Internet using the ASCII character set. Since URLs often 
                            contain characters outside this set, they must be converted to a valid ASCII format.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Percent Format</span>
                                    <span className="text-sm text-muted-foreground">% followed by two hex digits</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">UTF-8 Support</span>
                                    <span className="text-sm text-muted-foreground">Full Unicode character encoding</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Reversible</span>
                                    <span className="text-sm text-muted-foreground">Decode to restore original</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">RFC 3986 Compliant</span>
                                    <span className="text-sm text-muted-foreground">Follows official URI standard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How URL Encoding Works
                </h2>
                <p className="text-muted-foreground mb-6">
                    URL encoding replaces unsafe ASCII characters with a % followed by two hexadecimal digits 
                    representing the character&apos;s UTF-8 byte value.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { char: "Space", encoded: "%20", note: "Most common encoding" },
                        { char: "!", encoded: "%21", note: "Exclamation mark" },
                        { char: "@", encoded: "%40", note: "At symbol" },
                        { char: "#", encoded: "%23", note: "Hash/pound" },
                        { char: "$", encoded: "%24", note: "Dollar sign" },
                        { char: "%", encoded: "%25", note: "Percent (itself)" },
                        { char: "&", encoded: "%26", note: "Ampersand" },
                        { char: "+", encoded: "%2B", note: "Plus sign" },
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border text-center">
                            <div className="text-2xl font-bold text-foreground mb-1">{item.char}</div>
                            <div className="text-primary font-mono text-lg">{item.encoded}</div>
                            <div className="text-xs text-muted-foreground mt-1">{item.note}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Safe vs Unsafe */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Safe and Unsafe Characters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-success/5 rounded-xl border border-success/20">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-success" />
                            Safe (Unreserved)
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            These characters never need encoding in URLs:
                        </p>
                        <div className="font-mono text-sm text-muted-foreground">
                            A-Z a-z 0-9 - _ . ~
                        </div>
                    </div>
                    <div className="p-6 bg-warning/5 rounded-xl border border-warning/20">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                            Reserved
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Have special meaning; encode when used as data:
                        </p>
                        <div className="font-mono text-sm text-muted-foreground">
                            : / ? # [ ] @ ! $ & &apos; ( ) * + , ; =
                        </div>
                    </div>
                    <div className="p-6 bg-error/5 rounded-xl border border-error/20">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-error" />
                            Unsafe
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Should always be encoded in URLs:
                        </p>
                        <div className="font-mono text-sm text-muted-foreground">
                            Space &lt; &gt; {`{ }`} | \ ^ ` [non-ASCII]
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    When to Use URL Encoding
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Query Parameters</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            When passing data in URL query strings, special characters must be encoded 
                            to prevent them from being interpreted as URL delimiters.
                        </p>
                        <div className="p-3 bg-background rounded text-xs text-muted-foreground font-mono">
                            ?search=hello%20world&price=%24100
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileJson className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">API Requests</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            REST API endpoints often require encoded parameters. JSON data in URLs 
                            must be properly encoded to maintain structure.
                        </p>
                        <div className="p-3 bg-background rounded text-xs text-muted-foreground font-mono">
                            /api/search?q=%7B%22term%22%3A%22test%22%7D
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Code className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Form Submissions</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            HTML form data submitted via GET method is automatically URL-encoded. 
                            Understanding encoding helps debug form issues.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">GET form submissions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">AJAX requests</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">International Characters</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Non-ASCII characters (Unicode) must be UTF-8 encoded for URL transmission. 
                            Essential for multilingual applications.
                        </p>
                        <div className="p-3 bg-background rounded text-xs text-muted-foreground font-mono">
                            caf%C3%A9 → café<br/>
                            %E4%B8%AD%E6%96%87 → 中文
                        </div>
                    </div>
                </div>
            </section>

            {/* Encode vs Decode */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Encode vs Decode: When to Use Each
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <ExternalLink className="w-5 h-5 text-primary" />
                            URL Encode
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Use encoding when preparing data for URLs. Convert special characters 
                            to percent-encoded format for safe transmission.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Creating query strings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Building API URLs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Handling user input in URLs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Encoding special characters</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Link className="w-5 h-5 text-primary" />
                            URL Decode
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Use decoding when reading URL data. Convert percent-encoded strings 
                            back to human-readable format.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Parsing query parameters</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Reading API responses</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Debugging URLs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Processing form data</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    URL Encoder Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Full & Component Modes</h3>
                            <p className="text-sm text-muted-foreground">
                                Encode complete URLs preserving protocol and domain, or encode components 
                                (query strings, path segments) individually.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Globe className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Unicode Support</h3>
                            <p className="text-sm text-muted-foreground">
                                Full UTF-8 encoding support for international characters, emojis, 
                                and non-Latin scripts (Chinese, Arabic, Cyrillic, etc.).
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Code className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Programming Examples</h3>
                            <p className="text-sm text-muted-foreground">
                                Get code examples in JavaScript, Python, PHP, and other languages 
                                for implementing URL encoding in your projects.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Privacy Protected</h3>
                            <p className="text-sm text-muted-foreground">
                                All encoding/decoding happens locally. Your URLs and data never 
                                leave your browser — safe for sensitive links and API keys.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Issues */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Common URL Encoding Issues
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Double Encoding</h3>
                            <p className="text-sm text-muted-foreground">
                                Encoding already-encoded text creates invalid URLs. %20 becomes %2520. 
                                Always check if text is already encoded before encoding again.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Plus Sign Confusion</h3>
                            <p className="text-sm text-muted-foreground">
                                In query strings, + represents a space. In URL paths, + is literal. 
                                encodeURIComponent encodes + as %2B, but form data may treat + as space.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Encoding Entire URLs</h3>
                            <p className="text-sm text-muted-foreground">
                                Encoding a complete URL (including :// and ?) breaks it. Use encodeURI 
                                for full URLs, encodeURIComponent for components only.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
