import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container mx-auto px-4 pt-12 max-w-3xl">
                <nav className="mb-12">
                    <Link href="/" className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors mb-4 inline-block">
                        ← Back to Tools
                    </Link>
                </nav>
                <main className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl prose-p:text-lg prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                    {children}
                </main>
            </div>
        </div>
    );
}
