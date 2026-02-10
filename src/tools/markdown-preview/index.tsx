"use client";

import { useState } from "react";

export default function MarkdownPreviewTool() {
    const [markdown, setMarkdown] = useState(`# Welcome to Markdown Preview

This is a **live preview** of your markdown content.

## Features

- Real-time preview
- Common markdown support
- Copy rendered HTML

### Code Example

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Lists

1. First item
2. Second item
3. Third item

### Links & Images

[Visit Example](https://example.com)

> This is a blockquote. It can span multiple lines.

---

*Italic*, **bold**, and \`inline code\`.
`);
    const [copied, setCopied] = useState(false);

    // Simple markdown to HTML converter
    const parseMarkdown = (md: string): string => {
        let html = md
            // Code blocks
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-background-tertiary p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>')
            // Headers
            .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
            .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
            .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-6 mb-4">$1</h1>')
            // Bold and italic
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Inline code
            .replace(/`([^`]+)`/g, '<code class="bg-background-tertiary px-1.5 py-0.5 rounded text-accent">$1</code>')
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:underline" target="_blank">$1</a>')
            // Blockquotes
            .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-accent pl-4 my-4 italic text-foreground-secondary">$1</blockquote>')
            // Horizontal rule
            .replace(/^---$/gm, '<hr class="my-6 border-border" />')
            // Unordered lists
            .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
            // Ordered lists
            .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')
            // Paragraphs - wrap remaining lines
            .split('\n\n')
            .map(p => {
                if (p.startsWith('<')) return p;
                return `<p class="my-2">${p}</p>`;
            })
            .join('');

        return html;
    };

    const copyHtml = async () => {
        const html = parseMarkdown(markdown);
        await navigator.clipboard.writeText(html);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const loadSample = () => {
        setMarkdown(`# Sample Document

## Introduction

This is a sample markdown document to demonstrate the preview functionality.

## Code

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

## Lists

- Item one
- Item two
- Item three

## Quote

> The best way to predict the future is to invent it.

---

**Thank you for using Markdown Preview!**
`);
    };

    return (
        <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex items-center gap-3">
                <button
                    onClick={loadSample}
                    className="px-4 py-2 bg-background-tertiary border border-border text-foreground rounded-lg hover:border-accent/50"
                >
                    Load Sample
                </button>
                <button
                    onClick={copyHtml}
                    className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg"
                >
                    {copied ? "Copied!" : "Copy HTML"}
                </button>
                <button
                    onClick={() => setMarkdown("")}
                    className="px-4 py-2 bg-background-tertiary border border-border text-foreground rounded-lg hover:border-accent/50"
                >
                    Clear
                </button>
            </div>

            {/* Editor and Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Editor */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Markdown</label>
                    <textarea
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        placeholder="Type your markdown here..."
                        className="w-full h-96 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted resize-none font-mono text-sm"
                    />
                </div>

                {/* Preview */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preview</label>
                    <div
                        className="w-full h-96 px-6 py-4 bg-background-secondary border border-border rounded-xl overflow-y-auto prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
                    />
                </div>
            </div>

            {/* Quick Reference */}
            <div className="p-4 bg-background-secondary rounded-xl">
                <h4 className="font-medium text-foreground mb-3">Quick Reference</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div><code className="text-accent"># H1</code> <span className="text-foreground-secondary">Heading 1</span></div>
                    <div><code className="text-accent">**bold**</code> <span className="text-foreground-secondary">Bold</span></div>
                    <div><code className="text-accent">*italic*</code> <span className="text-foreground-secondary">Italic</span></div>
                    <div><code className="text-accent">`code`</code> <span className="text-foreground-secondary">Code</span></div>
                    <div><code className="text-accent">[text](url)</code> <span className="text-foreground-secondary">Link</span></div>
                    <div><code className="text-accent">- item</code> <span className="text-foreground-secondary">List</span></div>
                    <div><code className="text-accent">&gt; quote</code> <span className="text-foreground-secondary">Quote</span></div>
                    <div><code className="text-accent">---</code> <span className="text-foreground-secondary">Divider</span></div>
                </div>
            </div>
        </div>
    );
}
