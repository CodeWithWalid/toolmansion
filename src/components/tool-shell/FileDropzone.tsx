"use client";

import { useCallback, useState } from "react";

interface FileDropzoneProps {
    accept: string;
    multiple?: boolean;
    onFilesSelected: (files: File[]) => void;
    maxFiles?: number;
    disabled?: boolean;
}

export function FileDropzone({
    accept,
    multiple = false,
    onFilesSelected,
    maxFiles = 50,
    disabled = false,
}: FileDropzoneProps) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) {
            setIsDragging(true);
        }
    }, [disabled]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            if (disabled) return;

            const files = Array.from(e.dataTransfer.files);
            const validFiles = files.slice(0, maxFiles);
            if (validFiles.length > 0) {
                onFilesSelected(validFiles);
            }
        },
        [disabled, maxFiles, onFilesSelected]
    );

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files ? Array.from(e.target.files) : [];
            const validFiles = files.slice(0, maxFiles);
            if (validFiles.length > 0) {
                onFilesSelected(validFiles);
            }
            // Reset input so same file can be selected again
            e.target.value = "";
        },
        [maxFiles, onFilesSelected]
    );

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative rounded-xl p-8 md:p-12 text-center transition-all border-2 border-dashed ${isDragging
                    ? "border-primary bg-primary/10 scale-[1.01]"
                    : "border-border hover:border-primary/50 bg-muted/40 hover:bg-muted/70"
                } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
            <input
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFileInput}
                disabled={disabled}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
            />

            <div className="pointer-events-none">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-4">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                </div>

                <p className="text-lg font-medium text-foreground mb-2">
                    {isDragging ? "Drop files here" : "Drag & drop files here"}
                </p>
                <p className="text-foreground-secondary text-sm mb-4">
                    or click to browse
                </p>
                <p className="text-foreground-secondary text-xs">
                    {multiple
                        ? `Supports ${accept.replace(/\./g, "").toUpperCase()} (up to ${maxFiles} files)`
                        : `Supports ${accept.replace(/\./g, "").toUpperCase()}`}
                </p>
            </div>
        </div>
    );
}
