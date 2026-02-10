"use client";

import { useState, useCallback } from "react";

interface PasswordOptions {
    length: number;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    excludeAmbiguous: boolean;
}

export default function PasswordGeneratorTool() {
    const [password, setPassword] = useState("");
    const [passwords, setPasswords] = useState<string[]>([]);
    const [count, setCount] = useState(1);
    const [copied, setCopied] = useState(false);
    const [options, setOptions] = useState<PasswordOptions>({
        length: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeAmbiguous: false,
    });

    const generatePassword = useCallback((opts: PasswordOptions): string => {
        let chars = "";
        const ambiguous = "0O1lI";

        if (opts.uppercase) {
            chars += opts.excludeAmbiguous
                ? "ABCDEFGHJKLMNPQRSTUVWXYZ"
                : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (opts.lowercase) {
            chars += opts.excludeAmbiguous
                ? "abcdefghjkmnpqrstuvwxyz"
                : "abcdefghijklmnopqrstuvwxyz";
        }
        if (opts.numbers) {
            chars += opts.excludeAmbiguous ? "23456789" : "0123456789";
        }
        if (opts.symbols) {
            chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
        }

        if (!chars) {
            return "Please select at least one character type";
        }

        const array = new Uint32Array(opts.length);
        crypto.getRandomValues(array);

        return Array.from(array, (num) => chars[num % chars.length]).join("");
    }, []);

    const generate = useCallback(() => {
        if (count === 1) {
            setPassword(generatePassword(options));
            setPasswords([]);
        } else {
            const newPasswords = Array.from({ length: count }, () =>
                generatePassword(options)
            );
            setPasswords(newPasswords);
            setPassword("");
        }
    }, [options, count, generatePassword]);

    const copyPassword = async (pwd: string) => {
        await navigator.clipboard.writeText(pwd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const copyAll = async () => {
        await navigator.clipboard.writeText(passwords.join("\n"));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getStrength = useCallback((pwd: string): { label: string; color: string; width: string } => {
        let score = 0;
        if (pwd.length >= 8) score++;
        if (pwd.length >= 12) score++;
        if (pwd.length >= 16) score++;
        if (/[a-z]/.test(pwd)) score++;
        if (/[A-Z]/.test(pwd)) score++;
        if (/[0-9]/.test(pwd)) score++;
        if (/[^a-zA-Z0-9]/.test(pwd)) score++;

        if (score <= 2) return { label: "Weak", color: "bg-error", width: "w-1/4" };
        if (score <= 4) return { label: "Fair", color: "bg-warning", width: "w-2/4" };
        if (score <= 5) return { label: "Strong", color: "bg-success", width: "w-3/4" };
        return { label: "Very Strong", color: "bg-success", width: "w-full" };
    }, []);

    const strength = password ? getStrength(password) : null;

    return (
        <div className="space-y-6">
            {/* Options */}
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Options</h3>

                <div className="space-y-4">
                    {/* Length Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-foreground">Length</label>
                            <span className="text-sm text-accent font-mono">{options.length}</span>
                        </div>
                        <input
                            type="range"
                            min={4}
                            max={64}
                            value={options.length}
                            onChange={(e) =>
                                setOptions((prev) => ({ ...prev, length: Number(e.target.value) }))
                            }
                            className="w-full"
                        />
                    </div>

                    {/* Character Types */}
                    <div className="grid grid-cols-2 gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={options.uppercase}
                                onChange={(e) =>
                                    setOptions((prev) => ({ ...prev, uppercase: e.target.checked }))
                                }
                                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                            />
                            <span className="text-sm text-foreground">Uppercase (A-Z)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={options.lowercase}
                                onChange={(e) =>
                                    setOptions((prev) => ({ ...prev, lowercase: e.target.checked }))
                                }
                                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                            />
                            <span className="text-sm text-foreground">Lowercase (a-z)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={options.numbers}
                                onChange={(e) =>
                                    setOptions((prev) => ({ ...prev, numbers: e.target.checked }))
                                }
                                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                            />
                            <span className="text-sm text-foreground">Numbers (0-9)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={options.symbols}
                                onChange={(e) =>
                                    setOptions((prev) => ({ ...prev, symbols: e.target.checked }))
                                }
                                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                            />
                            <span className="text-sm text-foreground">Symbols (!@#$...)</span>
                        </label>
                    </div>

                    {/* Additional Options */}
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={options.excludeAmbiguous}
                            onChange={(e) =>
                                setOptions((prev) => ({
                                    ...prev,
                                    excludeAmbiguous: e.target.checked,
                                }))
                            }
                            className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                        />
                        <span className="text-sm text-foreground">
                            Exclude ambiguous characters (0, O, l, 1, I)
                        </span>
                    </label>

                    {/* Count */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-medium text-foreground">Generate</label>
                        <select
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="px-3 py-1.5 bg-background-tertiary border border-border rounded-lg text-foreground"
                        >
                            <option value={1}>1 password</option>
                            <option value={5}>5 passwords</option>
                            <option value={10}>10 passwords</option>
                            <option value={20}>20 passwords</option>
                        </select>
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
                Generate Password{count > 1 ? "s" : ""}
            </button>

            {/* Single Password Output */}
            {password && (
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={password}
                            readOnly
                            className="flex-1 px-4 py-4 bg-background-tertiary border border-accent/50 rounded-xl text-foreground font-mono text-lg text-center"
                        />
                        <button
                            onClick={() => copyPassword(password)}
                            className="p-4 bg-background-tertiary border border-border hover:border-accent/50 rounded-xl transition-colors"
                        >
                            {copied ? (
                                <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Strength Indicator */}
                    {strength && (
                        <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-foreground-secondary">Strength</span>
                                <span className="font-medium text-foreground">{strength.label}</span>
                            </div>
                            <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                                <div className={`h-full ${strength.color} ${strength.width} transition-all`} />
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Multiple Passwords Output */}
            {passwords.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                            Generated {passwords.length} passwords
                        </span>
                        <button
                            onClick={copyAll}
                            className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                        >
                            {copied ? "Copied all!" : "Copy all"}
                        </button>
                    </div>
                    <div className="max-h-80 overflow-y-auto space-y-2">
                        {passwords.map((pwd, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 p-3 bg-background-tertiary rounded-lg"
                            >
                                <span className="flex-1 font-mono text-sm truncate">{pwd}</span>
                                <button
                                    onClick={() => copyPassword(pwd)}
                                    className="text-foreground-secondary hover:text-accent transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
