"use client";

import { useState, useEffect, useCallback } from "react";

interface Stats {
    chars: number;
    charsNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    lines: number;
    readingTime: string;
    speakingTime: string;
}

export default function WordCounterTool() {
    const [text, setText] = useState("");
    const [stats, setStats] = useState<Stats>({
        chars: 0,
        charsNoSpaces: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        lines: 0,
        readingTime: "0 min",
        speakingTime: "0 min",
    });

    const analyzeText = useCallback((input: string) => {
        const chars = input.length;
        const charsNoSpaces = input.replace(/\s/g, "").length;
        const words = input.trim() ? input.trim().split(/\s+/).length : 0;
        const sentences = input.split(/[.!?]+/).filter((s) => s.trim()).length;
        const paragraphs = input.split(/\n\n+/).filter((p) => p.trim()).length;
        const lines = input.split("\n").length;

        // Average reading speed: 200-250 words per minute
        const readingMinutes = words / 225;
        const readingTime =
            readingMinutes < 1
                ? "< 1 min"
                : `${Math.ceil(readingMinutes)} min`;

        // Average speaking speed: 125-150 words per minute
        const speakingMinutes = words / 137;
        const speakingTime =
            speakingMinutes < 1
                ? "< 1 min"
                : `${Math.ceil(speakingMinutes)} min`;

        setStats({
            chars,
            charsNoSpaces,
            words,
            sentences,
            paragraphs,
            lines,
            readingTime,
            speakingTime,
        });
    }, []);

    useEffect(() => {
        analyzeText(text);
    }, [text, analyzeText]);

    const clearText = () => setText("");

    const copyStats = () => {
        const statsText = `Characters: ${stats.chars}
Characters (no spaces): ${stats.charsNoSpaces}
Words: ${stats.words}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}
Lines: ${stats.lines}
Reading time: ${stats.readingTime}
Speaking time: ${stats.speakingTime}`;
        navigator.clipboard.writeText(statsText);
    };

    const StatCard = ({ label, value }: { label: string; value: string | number }) => (
        <div className="bg-background-tertiary rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{value}</div>
            <div className="text-sm text-foreground-secondary">{label}</div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Text Input */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                        Enter or paste your text
                    </label>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={copyStats}
                            className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                        >
                            Copy Stats
                        </button>
                        <button
                            onClick={clearText}
                            className="text-sm text-foreground-secondary hover:text-error transition-colors"
                        >
                            Clear
                        </button>
                    </div>
                </div>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Start typing or paste your text here..."
                    className="w-full h-64 px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent resize-none font-mono"
                />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Characters" value={stats.chars.toLocaleString()} />
                <StatCard label="Characters (no spaces)" value={stats.charsNoSpaces.toLocaleString()} />
                <StatCard label="Words" value={stats.words.toLocaleString()} />
                <StatCard label="Sentences" value={stats.sentences.toLocaleString()} />
                <StatCard label="Paragraphs" value={stats.paragraphs.toLocaleString()} />
                <StatCard label="Lines" value={stats.lines.toLocaleString()} />
                <StatCard label="Reading Time" value={stats.readingTime} />
                <StatCard label="Speaking Time" value={stats.speakingTime} />
            </div>

            {/* Sample Text */}
            <div className="text-center">
                <button
                    onClick={() =>
                        setText(
                            "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        )
                    }
                    className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                >
                    Load sample text
                </button>
            </div>
        </div>
    );
}
