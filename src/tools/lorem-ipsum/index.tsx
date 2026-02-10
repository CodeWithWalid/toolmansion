"use client";

import { useState, useCallback } from "react";

type LoremType = "paragraphs" | "sentences" | "words";

const LOREM_WORDS = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
    "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
    "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
    "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
    "deserunt", "mollit", "anim", "id", "est", "laborum", "perspiciatis", "unde",
    "omnis", "iste", "natus", "error", "voluptatem", "accusantium", "doloremque",
    "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa", "quae", "ab", "illo",
    "inventore", "veritatis", "quasi", "architecto", "beatae", "vitae", "dicta",
    "explicabo", "nemo", "ipsam", "quia", "voluptas", "aspernatur", "aut", "odit",
    "fugit", "consequuntur", "magni", "dolores", "eos", "ratione", "sequi",
    "nesciunt", "neque", "porro", "quisquam", "nihil", "impedit", "quo", "minus",
];

export default function LoremIpsumTool() {
    const [type, setType] = useState<LoremType>("paragraphs");
    const [count, setCount] = useState(3);
    const [startWithLorem, setStartWithLorem] = useState(true);
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);

    const getRandomWord = useCallback(() => {
        return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
    }, []);

    const generateWords = useCallback((num: number, capitalize: boolean = false): string => {
        const words: string[] = [];
        for (let i = 0; i < num; i++) {
            let word = getRandomWord();
            if (capitalize && i === 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }
            words.push(word);
        }
        return words.join(" ");
    }, [getRandomWord]);

    const generateSentence = useCallback((): string => {
        const wordCount = Math.floor(Math.random() * 10) + 8; // 8-17 words
        const sentence = generateWords(wordCount, true);
        return sentence + ".";
    }, [generateWords]);

    const generateParagraph = useCallback((): string => {
        const sentenceCount = Math.floor(Math.random() * 4) + 4; // 4-7 sentences
        const sentences: string[] = [];
        for (let i = 0; i < sentenceCount; i++) {
            sentences.push(generateSentence());
        }
        return sentences.join(" ");
    }, [generateSentence]);

    const generate = useCallback(() => {
        let result = "";

        switch (type) {
            case "paragraphs":
                const paragraphs: string[] = [];
                for (let i = 0; i < count; i++) {
                    paragraphs.push(generateParagraph());
                }
                result = paragraphs.join("\n\n");
                break;
            case "sentences":
                const sentences: string[] = [];
                for (let i = 0; i < count; i++) {
                    sentences.push(generateSentence());
                }
                result = sentences.join(" ");
                break;
            case "words":
                result = generateWords(count, true);
                break;
        }

        if (startWithLorem && result) {
            result = "Lorem ipsum dolor sit amet, " + result.slice(result.indexOf(" ") + 1);
        }

        setOutput(result);
    }, [type, count, startWithLorem, generateParagraph, generateSentence, generateWords]);

    const copyOutput = async () => {
        if (output) {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const stats = output
        ? {
            words: output.split(/\s+/).filter((w) => w).length,
            characters: output.length,
            paragraphs: output.split("\n\n").length,
        }
        : null;

    return (
        <div className="space-y-6">
            {/* Options */}
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Options</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Generate
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value as LoremType)}
                            className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value="paragraphs">Paragraphs</option>
                            <option value="sentences">Sentences</option>
                            <option value="words">Words</option>
                        </select>
                    </div>

                    {/* Count */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Count
                        </label>
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
                            min={1}
                            max={100}
                            className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                        />
                    </div>

                    {/* Start with Lorem */}
                    <div className="flex items-end">
                        <label className="flex items-center gap-2 cursor-pointer pb-2">
                            <input
                                type="checkbox"
                                checked={startWithLorem}
                                onChange={(e) => setStartWithLorem(e.target.checked)}
                                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                            />
                            <span className="text-sm text-foreground">Start with &quot;Lorem ipsum...&quot;</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={generate}
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Generate Lorem Ipsum
            </button>

            {/* Output */}
            {output && (
                <>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-foreground">Generated Text</label>
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
                            className="w-full h-64 px-4 py-3 bg-background-tertiary border border-accent/50 rounded-xl text-foreground resize-none"
                        />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-background-secondary rounded-xl text-center">
                            <div className="text-2xl font-bold text-accent">{stats?.words}</div>
                            <div className="text-sm text-foreground-secondary">Words</div>
                        </div>
                        <div className="p-4 bg-background-secondary rounded-xl text-center">
                            <div className="text-2xl font-bold text-foreground">{stats?.characters}</div>
                            <div className="text-sm text-foreground-secondary">Characters</div>
                        </div>
                        <div className="p-4 bg-background-secondary rounded-xl text-center">
                            <div className="text-2xl font-bold text-foreground">{stats?.paragraphs}</div>
                            <div className="text-sm text-foreground-secondary">Paragraphs</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
