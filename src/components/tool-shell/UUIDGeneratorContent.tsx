import { Check, Copy, Shield, Zap, Lock, EyeOff, ServerOff, CheckCircle2, XCircle } from "lucide-react";

export function UUIDGeneratorContent() {
    return (
        <div className="space-y-12">
            {/* How to Use Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    How to Use Our UUID Generator
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Choose Quantity</h3>
                                <p className="text-muted-foreground text-sm">
                                    Enter how many UUIDs you need — from a single identifier to 1,000 bulk UUIDs for database seeding.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Select Format</h3>
                                <p className="text-muted-foreground text-sm">
                                    Choose standard hyphenated format or compact format without hyphens for easier copying.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                3
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Generate</h3>
                                <p className="text-muted-foreground text-sm">
                                    Click generate to create cryptographically secure random UUIDs using the Web Crypto API.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                4
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Copy or Download</h3>
                                <p className="text-muted-foreground text-sm">
                                    Copy individual UUIDs with one click or download all generated UUIDs as a text file.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-success" />
                    Why Use Our UUID Generator?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                            <Lock className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Cryptographically Secure</h3>
                        <p className="text-sm text-muted-foreground">
                            Uses Web Crypto API for true randomness, suitable for security-sensitive applications.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                            <ServerOff className="w-5 h-5 text-success" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">100% Client-Side</h3>
                        <p className="text-sm text-muted-foreground">
                            All UUIDs are generated locally in your browser. No server communication, completely private.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                            <Copy className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Bulk Generation</h3>
                        <p className="text-sm text-muted-foreground">
                            Generate up to 1,000 UUIDs at once. Perfect for database seeding, testing, and bulk operations.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                            <Shield className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">No Tracking</h3>
                        <p className="text-sm text-muted-foreground">
                            Zero analytics, zero cookies, zero tracking. We don&apos;t collect or store any data about your usage.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                            <EyeOff className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">No Ads</h3>
                        <p className="text-sm text-muted-foreground">
                            Clean, distraction-free interface. No popups, no banner ads, no sponsored content.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5 text-cyan-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Instant & Free</h3>
                        <p className="text-sm text-muted-foreground">
                            No registration required. Generate unlimited UUIDs instantly, forever free.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Comparison Table */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    Privacy Comparison: Toolmansion vs Competitors
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                                <th className="text-center py-3 px-4 font-semibold text-primary bg-primary/5 rounded-t-lg">
                                    Toolmansion
                                </th>
                                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                                    SmallSEOTools
                                </th>
                                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                                    CodeBeautify
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4 text-foreground">Advertisements</td>
                                <td className="py-3 px-4 text-center bg-primary/5">
                                    <span className="inline-flex items-center gap-1 text-success font-medium">
                                        <XCircle className="w-4 h-4" /> None
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        <CheckCircle2 className="w-4 h-4" /> Heavy ads
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        <CheckCircle2 className="w-4 h-4" /> Yes
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4 text-foreground">Tracking / Analytics</td>
                                <td className="py-3 px-4 text-center bg-primary/5">
                                    <span className="inline-flex items-center gap-1 text-success font-medium">
                                        <XCircle className="w-4 h-4" /> Zero tracking
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        <CheckCircle2 className="w-4 h-4" /> Google Analytics
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        <CheckCircle2 className="w-4 h-4" /> Yes
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4 text-foreground">Login Required</td>
                                <td className="py-3 px-4 text-center bg-primary/5">
                                    <span className="inline-flex items-center gap-1 text-success font-medium">
                                        <XCircle className="w-4 h-4" /> Never
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        <CheckCircle2 className="w-4 h-4" /> For some features
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                                        Sometimes
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4 text-foreground">Data Processing</td>
                                <td className="py-3 px-4 text-center bg-primary/5">
                                    <span className="inline-flex items-center gap-1 text-success font-medium">
                                        <Check className="w-4 h-4" /> Client-side only
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        <ServerOff className="w-4 h-4" /> Server processing
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-destructive">
                                        Server-side
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-foreground">Load Speed</td>
                                <td className="py-3 px-4 text-center bg-primary/5 rounded-b-lg">
                                    <span className="inline-flex items-center gap-1 text-success font-medium">
                                        <Zap className="w-4 h-4" /> Lightning fast
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                                        Slower (ads)
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                                        Moderate
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                    <strong className="text-foreground">Privacy-first by design:</strong> Unlike competitors who monetize through ads and data collection, Toolmansion is built for developers who value privacy. Your data never leaves your device — period.
                </p>
            </section>

            {/* Use Cases Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    Common Use Cases for UUIDs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Database Primary Keys
                        </h3>
                        <p className="text-sm text-muted-foreground pl-4">
                            Use UUIDs instead of auto-incrementing integers for database records. This enables distributed systems and prevents ID collisions when merging databases.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            API Keys & Tokens
                        </h3>
                        <p className="text-sm text-muted-foreground pl-4">
                            Generate secure API keys, authentication tokens, and session identifiers that are virtually impossible to guess.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            File Naming
                        </h3>
                        <p className="text-sm text-muted-foreground pl-4">
                            Prevent filename collisions when storing user uploads. UUIDs ensure every file has a unique name across your storage system.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Order & Transaction IDs
                        </h3>
                        <p className="text-sm text-muted-foreground pl-4">
                            Create unique identifiers for e-commerce orders, financial transactions, and invoice numbers that are non-sequential and secure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Info */}
            <section className="p-6 bg-muted/30 border border-border rounded-xl">
                <h2 className="text-lg font-bold text-foreground mb-3">
                    About UUID Version 4
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                    Our generator creates UUID version 4 identifiers, which are randomly generated using cryptographically secure random number generation. A UUID v4 looks like this: <code className="bg-background-secondary px-2 py-1 rounded text-foreground">550e8400-e29b-41d4-a716-446655440000</code>
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-background-secondary border border-border rounded-full text-xs text-muted-foreground">
                        RFC 4122 Compliant
                    </span>
                    <span className="px-3 py-1 bg-background-secondary border border-border rounded-full text-xs text-muted-foreground">
                        128-bit Unique ID
                    </span>
                    <span className="px-3 py-1 bg-background-secondary border border-border rounded-full text-xs text-muted-foreground">
                        Web Crypto API
                    </span>
                    <span className="px-3 py-1 bg-background-secondary border border-border rounded-full text-xs text-muted-foreground">
                        Collision Probability: ~0
                    </span>
                </div>
            </section>
        </div>
    );
}
