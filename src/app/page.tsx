import { TOOLS, CATEGORIES } from "@/data/toolsRegistry";
import { CategoryTile } from "@/components/directory/CategoryTile";
import { ToolGrid } from "@/components/directory/ToolGrid";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Lock, WifiOff } from "lucide-react";

export default function HomePage() {
  const featuredTools = TOOLS.filter((tool) => tool.featured);
  const liveTools = TOOLS.filter((tool) => tool.status === "Live");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ShieldCheck className="w-4 h-4" />
            ToolMansion: 100% Private & Offline-Capable
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <span className="hero-gradient">The Ultimate</span>
            <br />
            <span className="text-foreground">Suite of Tools</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Welcome to ToolMansion. Convert images, manage PDFs, and format code —
            all processing happens locally on your device. No uploads, no servers,
            complete privacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link
              href="/tools"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Explore All Tools
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tools/convert-image"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border hover:border-primary/50 hover:bg-muted/50 text-foreground font-semibold rounded-xl transition-all duration-300"
            >
              Try Image Converter
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {TOOLS.length}+
              </div>
              <div className="text-muted-foreground text-sm">
                Total Tools
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {liveTools.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Live Now
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {CATEGORIES.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                0
              </div>
              <div className="text-muted-foreground text-sm">
                Server Uploads
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect tool for your needs across our organized
              categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryTile key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Tools
              </h2>
              <p className="text-muted-foreground">
                Our most popular and powerful tools ready to use
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View All Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ToolGrid tools={featuredTools} />
        </div>
      </section>

      {/* All Tools Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Search and filter through our complete collection of browser-based
              tools
            </p>
          </div>

          <ToolGrid
            tools={TOOLS}
            showCategoryFilter
            categories={CATEGORIES}
          />
        </div>
      </section>

      {/* Privacy CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your Privacy Matters
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Unlike other online tools, we never upload your files to any
                server. All processing happens locally in your browser using modern
                Web APIs. Your data stays on your device, always.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Lock className="w-5 h-5 text-emerald-500" />
                  No file uploads
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  No tracking
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="w-5 h-5 text-emerald-500" />
                  100% client-side
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <WifiOff className="w-5 h-5 text-emerald-500" />
                  Works offline
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
