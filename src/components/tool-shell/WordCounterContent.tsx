"use client";

import {
    Type,
    Shield,
    Zap,
    BookOpen,
    Twitter,
    Instagram,
    FileText,
    CheckCircle2,
    BarChart3,
    AlignLeft,
    Hash
} from "lucide-react";

export function WordCounterContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Count Words, Characters & More
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Instantly analyze any text with our comprehensive word counter. Get word count, 
                    character count (with and without spaces), sentence count, paragraph count, 
                    and reading time estimate. Perfect for writers, students, and content creators 
                    with strict length requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Paste or Type Text</h3>
                        <p className="text-sm text-muted-foreground">
                            Enter your text directly in the text area or paste from any source. 
                            Supports unlimited text length with real-time counting.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">View Live Statistics</h3>
                        <p className="text-sm text-muted-foreground">
                            Watch counts update as you type. See words, characters, sentences, 
                            paragraphs, and estimated reading time instantly.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Check Platform Limits</h3>
                        <p className="text-sm text-muted-foreground">
                            Compare your text against social media and platform limits. 
                            Know if your content fits before posting.
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
                            Your Text Is Never Stored or Transmitted
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Whether you&apos;re working on confidential documents, creative writing, or sensitive content, 
                            your text remains completely private. Our word counter operates entirely within your browser 
                            — no data is sent to any server, ever.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">100% Private</span>
                                    <span className="text-sm text-muted-foreground">Text never leaves your browser</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">No Data Collection</span>
                                    <span className="text-sm text-muted-foreground">Zero tracking or analytics</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Instant Results</span>
                                    <span className="text-sm text-muted-foreground">Real-time counting as you type</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Works Offline</span>
                                    <span className="text-sm text-muted-foreground">Count words without internet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Limits */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Character Limits by Platform
                </h2>
                <p className="text-muted-foreground mb-6">
                    Different platforms have different limits. Use our word counter to ensure your 
                    content fits within these constraints before posting.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { platform: "Twitter/X", limit: "280 chars", type: "Characters", icon: Twitter },
                        { platform: "Instagram", limit: "2,200 chars", type: "Caption", icon: Instagram },
                        { platform: "LinkedIn", limit: "3,000 chars", type: "Post", icon: Type },
                        { platform: "Facebook", limit: "63,206 chars", type: "Post", icon: Type },
                        { platform: "SMS", limit: "160 chars", type: "Per message", icon: Type },
                        { platform: "Meta Title", limit: "60 chars", type: "SEO", icon: FileText },
                        { platform: "Meta Desc", limit: "155-160 chars", type: "SEO", icon: FileText },
                        { platform: "Google Ads", limit: "30/90 chars", type: "Headline/Desc", icon: Type },
                    ].map((item) => (
                        <div key={item.platform} className="p-4 bg-muted/50 rounded-lg border border-border text-center">
                            <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                            <div className="font-semibold text-foreground text-sm">{item.platform}</div>
                            <div className="text-primary font-medium text-lg">{item.limit}</div>
                            <div className="text-[10px] text-muted-foreground">{item.type}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Who Uses Word Counters?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Students & Academics</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Meet essay word count requirements, check assignment lengths, and ensure 
                            abstracts and summaries fit within specified limits.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Essay assignments (1,500-3,000 words)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Dissertation chapters</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Abstracts (150-300 words)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Type className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Content Writers</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Hit target word counts for blog posts, articles, and SEO content. 
                            Optimize meta descriptions and titles for search engines.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Blog posts (1,000-2,500 words)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Meta descriptions (155-160 chars)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Title tags (50-60 chars)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Twitter className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Social Media Managers</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Stay within platform character limits. Perfect for crafting tweets, 
                            Instagram captions, and LinkedIn posts that fit requirements.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Twitter posts (280 chars)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Instagram captions (2,200 chars)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">LinkedIn updates (3,000 chars)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Professional Writers</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Novelists, screenwriters, and journalists track manuscript progress, 
                            meet publication requirements, and maintain consistent chapter lengths.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Novels (50,000-100,000 words)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Short stories (1,000-7,500 words)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Articles (500-2,000 words)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Statistics Explained */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Text Statistics Explained
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Hash className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Word Count</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            The total number of words in your text. A word is defined as any sequence 
                            of characters separated by whitespace. Essential for essays, articles, 
                            and content with word count requirements.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Example:</span> &quot;Hello world&quot; = 2 words
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <AlignLeft className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Character Count</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Two measurements: characters with spaces (total length) and characters 
                            without spaces (actual content). Critical for platforms with character 
                            limits like Twitter and SMS.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Example:</span> &quot;Hello world&quot; = 11 chars / 10 no spaces
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <BarChart3 className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Reading Time</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Estimated time to read the text based on average adult reading speed 
                            (200-250 words per minute). Helps gauge content length for audiences.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Average:</span> 200-250 WPM for adults
                        </div>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Sentence & Paragraph Count</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Track sentence and paragraph structure. Useful for analyzing writing style, 
                            readability, and ensuring appropriate paragraph length.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Note:</span> Sentences end with . ! ?
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Word Counter Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Real-Time Counting</h3>
                            <p className="text-sm text-muted-foreground">
                                Statistics update instantly as you type. No need to click buttons 
                                or refresh — watch counts change character by character.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Comprehensive Stats</h3>
                            <p className="text-sm text-muted-foreground">
                                Get word count, character count (with/without spaces), sentence count, 
                                paragraph count, and reading time estimate all at once.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Twitter className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Platform Limit Checker</h3>
                            <p className="text-sm text-muted-foreground">
                                Visual indicators show if your text fits within Twitter, Instagram, 
                                and other platform limits. Green means go, red means trim.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Private & Secure</h3>
                            <p className="text-sm text-muted-foreground">
                                Your text never leaves your browser. Count words on confidential 
                                documents, drafts, and sensitive content with complete privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
