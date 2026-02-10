"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/data/toolsRegistry";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { IconMapper } from "@/components/ui/IconMapper";
import { SearchDialog } from "@/components/layout/SearchDialog";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
                            <img src="/logo.svg" alt="ToolMansion Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                            ToolMansion
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/tools"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            All Tools
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                Categories
                                <ChevronDown className="w-3 h-3 opacity-50 transition-transform group-hover:rotate-180" />
                            </button>
                            {/* Dropdown */}
                            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="p-1 bg-popover/95 backdrop-blur-md rounded-xl border border-border shadow-lg">
                                    {CATEGORIES.map((category) => (
                                        <Link
                                            key={category.slug}
                                            href={`/category/${category.slug}`}
                                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                                        >
                                            <span className="text-muted-foreground"><IconMapper category={category.slug} className="w-4 h-4" /></span>
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <SearchDialog />

                        {/* Theme Toggle - Desktop */}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile: Search + Theme Toggle + Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <SearchDialog />
                        <ThemeToggle />
                        <button
                            className="p-1 text-foreground hover:bg-muted rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
                        <nav className="flex flex-col gap-1">
                            <Link
                                href="/tools"
                                className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                All Tools
                            </Link>
                            <div className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground mt-2 mb-1">
                                Categories
                            </div>
                            {CATEGORIES.map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <IconMapper category={category.slug} className="w-4 h-4" />
                                    {category.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
