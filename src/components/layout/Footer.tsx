import Link from "next/link";
import { CATEGORIES } from "@/data/toolsRegistry";
import { Wrench, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 group">
                            <div className="w-8 h-8 relative transition-transform duration-300 group-hover:scale-110">
                                <img src="/logo.svg" alt="ToolMansion Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">ToolMansion</span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Free, privacy-first tools that run entirely in your browser. No server uploads, no data collection, works offline.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit">
                            <ShieldCheck className="w-4 h-4" />
                            <span>100% Private & Secure</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                        <ul className="space-y-2.5">
                            {CATEGORIES.map((category) => (
                                <li key={category.slug}>
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href="/tools"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    All Tools
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tools/convert-image"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Convert Image
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tools/resize-image"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Resize Image
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tools/crop-image"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Crop Image
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} ToolMansion. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="opacity-30">|</span>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                        <span className="opacity-30">|</span>
                        <Link href="/about" className="hover:text-primary transition-colors">
                            About
                        </Link>
                    </div>
                </div>

                {/* Powered by Botsquash */}
                <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground/60">
                        <strong>Powered by{" "}
                            <a href="https://botsquash.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                Botsquash
                            </a>
                        </strong> — Automation-first digital products.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                        <span>Made with</span>
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        <span>for the web</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
