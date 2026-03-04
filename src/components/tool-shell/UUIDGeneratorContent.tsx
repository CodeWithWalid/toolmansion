import { Check, Copy, Shield, Zap, Lock, EyeOff, ServerOff, CheckCircle2, XCircle, AlertCircle, Lightbulb } from "lucide-react";

export function UUIDGeneratorContent() {
    return (
        <div className="space-y-12">
            {/* Introduction Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    What is a UUID?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                    A UUID (Universally Unique Identifier), also known as a GUID (Globally Unique Identifier), is a 128-bit unique identifier used to distinguish objects, records, or transactions in computer systems. Unlike sequential IDs that are easy to enumerate and predict, UUIDs are randomly generated and virtually impossible to duplicate, making them ideal for distributed systems, databases, APIs, and security-sensitive applications.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our free online UUID generator creates RFC 4122 compliant UUID v4 identifiers using cryptographically secure random number generation. This ensures your UUIDs are suitable for use in database primary keys, session IDs, API tokens, transaction identifiers, and any application requiring unique identifiers without central coordination.
                </p>
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Example UUID:</strong> <code className="bg-background-secondary px-2 py-1 rounded text-foreground font-mono">550e8400-e29b-41d4-a716-446655440000</code>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">128-bit number · 36 characters (hyphenated) · Cryptographically random · RFC 4122 compliant</p>
                </div>
            </section>
            {/* UUID Use Cases Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    Why Developers Need a UUID Generator
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    A UUID generator is essential for modern development. Generating unique identifiers manually is impractical, and using sequential numbers becomes problematic in distributed systems. Our online UUID generator solves this instantly, with no registration, zero privacy concerns, and support for bulk generation of unique IDs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Check className="w-5 h-5 text-success" />
                            Distributed Systems
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Generate unique IDs across multiple services and databases without central coordination. Perfect for microservices architectures.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Check className="w-5 h-5 text-success" />
                            Database Sharding
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Use UUIDs as primary keys when sharding databases horizontally. Prevents ID collisions across shards without coordination protocol.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Check className="w-5 h-5 text-success" />
                            API Security
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Generate secure API keys and tokens that cannot be enumerated or predicted. Ideal for authentication and authorization.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Check className="w-5 h-5 text-success" />
                            Offline Sync
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Enable applications to work offline and sync later. UUIDs prevent ID conflicts when merging data from multiple offline sources.
                        </p>
                    </div>
                </div>
            </section>
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

            {/* Why Use Toolmansion Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-success" />
                    Why Choose Toolmansion's UUID Generator?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                            <ServerOff className="w-5 h-5 text-success" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">100% Client-Side</h3>
                        <p className="text-sm text-muted-foreground">
                            All UUIDs are generated locally in your browser using the Web Crypto API. No server communication, completely private.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                            <Lock className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Cryptographically Secure</h3>
                        <p className="text-sm text-muted-foreground">
                            Uses Web Crypto API for true randomness. Suitable for security-sensitive applications and cryptographic use cases.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                            <Copy className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Bulk Generation</h3>
                        <p className="text-sm text-muted-foreground">
                            Generate up to 1,000 UUIDs at once. Perfect for database seeding, testing, and bulk operations. Copy or download with one click.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                            <EyeOff className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">No Tracking or Ads</h3>
                        <p className="text-sm text-muted-foreground">
                            Zero analytics, zero cookies, zero tracking. No banner ads, no popups, no invasive advertising. Clean interface.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Instant & Free</h3>
                        <p className="text-sm text-muted-foreground">
                            No registration or login required. Generate unlimited UUIDs instantly, forever free. No hidden limits or paywalls.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">RFC 4122 Compliant</h3>
                        <p className="text-sm text-muted-foreground">
                            All generated UUIDs comply with RFC 4122 standard. Compatible with databases, APIs, and all major programming languages.
                        </p>
                    </div>
                </div>

                {/* Privacy Banner */}
                <div className="p-5 bg-primary/5 border border-primary/10 rounded-lg mb-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Client-Side Generation — Your Data Stays Private
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong className="text-foreground">Never leaves your browser:</strong> All UUID generation happens locally using JavaScript.</li>
                        <li>• <strong className="text-foreground">No server storage:</strong> We never store, log, or track any generated UUIDs.</li>
                        <li>• <strong className="text-foreground">Instant generation:</strong> No network latency — UUIDs are created immediately.</li>
                        <li>• <strong className="text-foreground">Works offline:</strong> Generate UUIDs without internet connection after page loads.</li>
                    </ul>
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

            {/* UUID Versions Explained */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">UUID Versions Explained</h2>
                <p className="text-muted-foreground mb-6">
                    The UUID standard defines several versions, each with different generation methods. Our online UUID generator focuses on UUID v4, but understanding the differences helps you choose the right identifier for your use case.
                </p>
                <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">UUID v1 - Timestamp + MAC Address</h3>
                        <p className="text-sm text-muted-foreground">
                            Generated using timestamp and computer MAC address. Predictable and not recommended for security-sensitive applications. Can expose your computer identifier.
                        </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">UUID v3 - MD5 Namespace Hash</h3>
                        <p className="text-sm text-muted-foreground">
                            Generated by hashing a namespace and name using MD5. Deterministic (same input always produces same UUID). Useful when you need reproducible identifiers.
                        </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-primary/5">
                        <h3 className="font-semibold text-foreground mb-2">UUID v4 - Random (Recommended) ⭐</h3>
                        <p className="text-sm text-muted-foreground">
                            Generated using random numbers from cryptographic random sources. Most commonly used, no hardware dependency, unpredictable, and ideal for general purpose use. <strong className="text-foreground">Our UUID generator creates UUID v4 identifiers.</strong>
                        </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">UUID v5 - SHA1 Namespace Hash</h3>
                        <p className="text-sm text-muted-foreground">
                            Similar to v3 but uses SHA1 hashing instead of MD5. Deterministic like v3. Better security properties but still not recommended when randomness is needed.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    Common Use Cases for UUID Generators
                </h2>
                <p className="text-muted-foreground mb-6">
                    Professional developers, database administrators, and API designers choose UUID generators to solve unique identifier challenges across various applications and systems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Database Primary Keys
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Replace auto-incrementing integers with UUIDs for database records. Essential for distributed databases, sharding, and merging databases from different systems without ID conflicts.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            API Keys & Security Tokens
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Generate secure API keys, authentication tokens, and session identifiers that are cryptographically random and virtually impossible to enumerate or guess.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            File Upload Management
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Prevent filename collisions when storing user uploads. UUIDs ensure every file has a unique name across your storage system without requiring database lookups.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Transaction & Order IDs
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Create unique identifiers for e-commerce orders, payment transactions, and invoice numbers that are non-sequential and secure against enumeration attacks.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Offline Synchronization
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Enable mobile and offline-first applications to generate unique IDs locally, then sync seamlessly without conflicts when reconnected.
                        </p>
                    </div>
                    <div className="space-y-3 p-4 bg-background-secondary border border-border rounded-xl">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Logging & Tracing
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Generate correlation IDs and trace identifiers for request tracking across microservices. Each request gets a unique, globally trackable identifier.
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
