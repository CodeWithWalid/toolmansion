"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ToolDefinition, getToolBySlug } from "@/data/toolsRegistry";
import { useFileContext } from "@/context/FileContext";

interface ToolChainMenuProps {
    currentToolSlug: string;
    relatedTools: string[];
    file: File | null;
}

export function ToolChainMenu({ currentToolSlug, relatedTools, file }: ToolChainMenuProps) {
    const router = useRouter();
    const { setFile, setSourceTool } = useFileContext();

    if (!file || relatedTools.length === 0) return null;

    const tools = relatedTools
        .map((slug) => getToolBySlug(slug))
        .filter(Boolean) as ToolDefinition[];

    const handleContinue = (targetSlug: string) => {
        setFile(file);
        setSourceTool(currentToolSlug);
        router.push(`/tools/${targetSlug}`);
    };

    return (
        <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Continue Editing</h3>
                    <p className="text-sm text-foreground-secondary">
                        Use this file in another tool without re-uploading
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {tools.map((tool) => (
                    <button
                        key={tool.slug}
                        onClick={() => handleContinue(tool.slug)}
                        className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                            {/* We need a way to get icon, but for now use emoji or generic */}
                            ⚡
                        </span>
                        <div>
                            <p className="font-medium text-foreground text-sm">{tool.name}</p>
                            <p className="text-xs text-foreground-secondary truncate max-w-[150px]">
                                {tool.description.split('.')[0]}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
