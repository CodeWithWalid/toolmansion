import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    CATEGORIES,
    getCategoryBySlug,
    getToolsByCategory,
} from "@/data/toolsRegistry";
import { ToolGrid } from "@/components/directory/ToolGrid";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: category.name,
        description: category.description,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const tools = getToolsByCategory(slug);
    const liveCount = tools.filter((t) => t.status === "Live").length;

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 text-5xl mb-6">
                        {category.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {category.name}
                    </h1>
                    <p className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-6">
                        {category.description}
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm">
                        <span className="text-foreground-secondary">
                            {tools.length} tools
                        </span>
                        {liveCount > 0 && (
                            <span className="text-success">{liveCount} live</span>
                        )}
                    </div>
                </div>

                {/* Tool Grid */}
                <ToolGrid tools={tools} />
            </div>
        </div>
    );
}
