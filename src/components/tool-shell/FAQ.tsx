"use client";

import { useState } from "react";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQProps {
    faqs: FAQItem[];
    toolName: string;
}

export function FAQ({ faqs, toolName }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // JSON-LD FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    };

    return (
        <div>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* FAQ Accordion */}
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-background-secondary border border-border rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-background-tertiary transition-colors"
                        >
                            <span className="font-medium text-foreground pr-4">{faq.q}</span>
                            <svg
                                className={`w-5 h-5 text-foreground-secondary flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-foreground-secondary fade-in">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
