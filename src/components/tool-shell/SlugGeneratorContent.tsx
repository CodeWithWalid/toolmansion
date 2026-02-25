import { Check, Copy, Shield, Zap, Lock, EyeOff, ServerOff, CheckCircle2, XCircle, Globe, FileText, ShoppingCart, BookOpen } from "lucide-react";

export function SlugGeneratorContent() {
    return (
        <div className="space-y-12">
            {/* How to Use Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    How to Use Our Slug Generator
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Enter Your Text</h3>
                                <p className="text-muted-foreground text-sm">
                                    Type or paste any text — blog post titles, product names, or page headings. 
                                    The tool converts them instantly as you type.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Choose Separator</h3>
                                <p className="text-muted-foreground text-sm">
                                    Select hyphens (-), underscores (_), or dots (.) as your word separator. 
                                    Hyphens are recommended for best SEO.
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
                                <h3 className="font-semibold text-foreground mb-1">Customize Options</h3>
                                <p className="text-muted-foreground text-sm">
                                    Enable lowercase for standard URLs. Optionally remove stop words 
                                    (a, an, the, and) for shorter, cleaner slugs.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                                4
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Copy & Use</h3>
                                <p className="text-muted-foreground text-sm">
                                    Copy your generated slug with one click. The URL preview shows 
                                    exactly how it will look in your final web address.
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
                    Why Use Our Slug Generator?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                            <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">SEO Optimized</h3>
                        <p className="text-sm text-muted-foreground">
                            Creates search engine friendly URLs that improve your rankings 
                            and click-through rates.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5 text-success" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Real-Time Conversion</h3>
                        <p className="text-sm text-muted-foreground">
                            See your slug generated instantly as you type. No need to click 
                            buttons or wait for processing.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                            <Shield className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">100% Private</h3>
                        <p className="text-sm text-muted-foreground">
                            All processing happens in your browser. Your content is never 
                            sent to any server or stored anywhere.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                            <EyeOff className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">No Ads</h3>
                        <p className="text-sm text-muted-foreground">
                            Clean, distraction-free interface. No popups, no banner ads, 
                            just a pure focus on getting your work done.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                            <Copy className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">URL Preview</h3>
                        <p className="text-sm text-muted-foreground">
                            See exactly how your slug will look in a complete URL before 
                            you use it on your website.
                        </p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                            <Lock className="w-5 h-5 text-cyan-500" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Stop Words Removal</h3>
                        <p className="text-sm text-muted-foreground">
                            Optional feature to remove common words like &quot;a&quot;, &quot;the&quot;, &quot;and&quot; 
                            for shorter, cleaner URLs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    Common Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            Blog Posts & Articles
                        </h3>
                        <p className="text-sm text-muted-foreground pl-7">
                            Convert blog post titles into readable URLs. 
                            &quot;10 Tips for Better SEO&quot; becomes &quot;10-tips-for-better-seo&quot; — 
                            clean, shareable, and SEO-friendly.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            E-Commerce Products
                        </h3>
                        <p className="text-sm text-muted-foreground pl-7">
                            Create clean product URLs from item names. 
                            &quot;Sony WH-1000XM5 Headphones&quot; becomes &quot;sony-wh-1000xm5-headphones&quot; — 
                            better for users and search engines.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            Documentation Pages
                        </h3>
                        <p className="text-sm text-muted-foreground pl-7">
                            Generate consistent URLs for documentation. 
                            Technical headings become readable, bookmarkable addresses 
                            that users can easily share and remember.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary" />
                            Website Pages
                        </h3>
                        <p className="text-sm text-muted-foreground pl-7">
                            Create SEO-friendly URLs for any website page. 
                            Service names, category titles, and page headings 
                            all become clean, professional web addresses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Best Practices Section */}
            <section className="p-6 bg-muted/30 border border-border rounded-xl">
                <h2 className="text-lg font-bold text-foreground mb-4">
                    URL Slug Best Practices
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-medium text-foreground text-sm">Use Hyphens</h4>
                            <p className="text-sm text-muted-foreground">
                                Google recommends hyphens (-) over underscores (_) 
                                for word separation in URLs.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-medium text-foreground text-sm">Keep It Short</h4>
                            <p className="text-sm text-muted-foreground">
                                Aim for 3-5 words. Shorter URLs are easier to read, 
                                share, and remember.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-medium text-foreground text-sm">Use Lowercase</h4>
                            <p className="text-sm text-muted-foreground">
                                URLs are case-sensitive on some servers. 
                                Always use lowercase to avoid issues.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-medium text-foreground text-sm">Include Keywords</h4>
                            <p className="text-sm text-muted-foreground">
                                Put your main keyword in the slug. 
                                It helps with SEO and tells users what to expect.
                            </p>
                        </div>
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
            </section>

            {/* Example Conversion Section */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    Example Conversions
                </h2>
                <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-background-secondary rounded-xl">
                        <span className="text-foreground-secondary text-sm sm:w-1/3">Input:</span>
                        <span className="font-medium text-foreground">&quot;My First Blog Post!&quot;</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-background-secondary rounded-xl border border-accent/20">
                        <span className="text-foreground-secondary text-sm sm:w-1/3">Output:</span>
                        <code className="font-mono text-accent">my-first-blog-post</code>
                    </div>
                    
                    <div className="h-4" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-background-secondary rounded-xl">
                        <span className="text-foreground-secondary text-sm sm:width-1/3">Input:</span>
                        <span className="font-medium text-foreground">&quot;How to Build a Website in 2024&quot;</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-background-secondary rounded-xl border border-accent/20">
                        <span className="text-foreground-secondary text-sm sm:w-1/3">Output (with stop words):</span>
                        <code className="font-mono text-accent">how-to-build-a-website-in-2024</code>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-background-secondary rounded-xl border border-accent/20">
                        <span className="text-foreground-secondary text-sm sm:w-1/3">Output (without stop words):</span>
                        <code className="font-mono text-accent">how-build-website-2024</code>
                    </div>
                </div>
            </section>
        </div>
    );
}
