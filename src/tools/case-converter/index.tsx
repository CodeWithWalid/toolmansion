"use client";

import { useState, useCallback } from "react";

type CaseType =
    | "upper"
    | "lower"
    | "title"
    | "sentence"
    | "camel"
    | "pascal"
    | "snake"
    | "kebab"
    | "toggle";

const CASE_OPTIONS: { value: CaseType; label: string; example: string }[] = [
    { value: "upper", label: "UPPERCASE", example: "HELLO WORLD" },
    { value: "lower", label: "lowercase", example: "hello world" },
    { value: "title", label: "Title Case", example: "Hello World" },
    { value: "sentence", label: "Sentence case", example: "Hello world" },
    { value: "camel", label: "camelCase", example: "helloWorld" },
    { value: "pascal", label: "PascalCase", example: "HelloWorld" },
    { value: "snake", label: "snake_case", example: "hello_world" },
    { value: "kebab", label: "kebab-case", example: "hello-world" },
    { value: "toggle", label: "tOGGLE cASE", example: "hELLO wORLD" },
];

export default function CaseConverterTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);

    const convertCase = useCallback((text: string, caseType: CaseType): string => {
        if (!text) return "";

        switch (caseType) {
            case "upper":
                return text.toUpperCase();
            case "lower":
                return text.toLowerCase();
            case "title":
                return text.replace(
                    /\w\S*/g,
                    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
            case "sentence":
                return text
                    .toLowerCase()
                    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
            case "camel":
                return text
                    .toLowerCase()
                    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
            case "pascal":
                return text
                    .toLowerCase()
                    .replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, __, c) => c.toUpperCase());
            case "snake":
                return text
                    .replace(/([a-z])([A-Z])/g, "$1_$2")
                    .replace(/[\s-]+/g, "_")
                    .toLowerCase();
            case "kebab":
                return text
                    .replace(/([a-z])([A-Z])/g, "$1-$2")
                    .replace(/[\s_]+/g, "-")
                    .toLowerCase();
            case "toggle":
                return text
                    .split("")
                    .map((c) =>
                        c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
                    )
                    .join("");
            default:
                return text;
        }
    }, []);

    const handleConvert = (caseType: CaseType) => {
        setOutput(convertCase(input, caseType));
    };

    const copyOutput = async () => {
        if (output) {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const clearAll = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div className="space-y-6">
            {/* Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        Enter your text
                    </label>
                    <button
                        onClick={clearAll}
                        className="text-sm text-foreground-secondary hover:text-error transition-colors"
                    >
                        Clear
                    </button>
                </div>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className="w-full h-40 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                />
            </div>

            {/* Case Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {CASE_OPTIONS.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleConvert(option.value)}
                        className="p-3 bg-background-tertiary border border-border hover:border-accent/50 rounded-xl transition-all group"
                    >
                        <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {option.label}
                        </div>
                        <div className="text-xs text-foreground-muted mt-1">{option.example}</div>
                    </button>
                ))}
            </div>

            {/* Output */}
            {output && (
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">
                            Result
                        </label>
                        <button
                            onClick={copyOutput}
                            className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <textarea
                        value={output}
                        readOnly
                        className="w-full h-40 px-4 py-3 bg-background-tertiary border border-accent/50 rounded-xl text-foreground resize-none"
                    />
                </div>
            )}
        </div>
    );
}
