import { Metadata } from "next";
import { TOOLS, CATEGORIES } from "@/data/toolsRegistry";
import { ToolGrid } from "@/components/directory/ToolGrid";

export const metadata: Metadata = {
    title: "All Tools",
    description:
        "Browse our complete collection of free browser-based tools. Convert images, format JSON, generate passwords and more - all processing happens locally in your browser.",
};

export default function ToolsPage() {
    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        All Tools
                    </h1>
                    <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                        Explore our complete collection of browser-based tools. All
                        processing happens locally — your files never leave your device.
                    </p>
                </div>

                {/* Tool Grid */}
                <ToolGrid
                    tools={TOOLS}
                    showCategoryFilter
                    categories={CATEGORIES}
                />
            </div>
        </div>
    );
}
