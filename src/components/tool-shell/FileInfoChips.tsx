interface FileInfoChipsProps {
    file: File;
    dimensions?: { width: number; height: number };
}

export function FileInfoChips({ file, dimensions }: FileInfoChipsProps) {
    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const getFileExtension = (filename: string): string => {
        return filename.split(".").pop()?.toUpperCase() || "UNKNOWN";
    };

    return (
        <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background-tertiary rounded-lg text-sm">
                <svg
                    className="w-4 h-4 text-foreground-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                <span className="text-foreground truncate max-w-[200px]">
                    {file.name}
                </span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background-tertiary rounded-lg text-sm">
                <span className="text-foreground-secondary">Format:</span>
                <span className="text-foreground font-medium">
                    {getFileExtension(file.name)}
                </span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background-tertiary rounded-lg text-sm">
                <span className="text-foreground-secondary">Size:</span>
                <span className="text-foreground font-medium">
                    {formatBytes(file.size)}
                </span>
            </span>

            {dimensions && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background-tertiary rounded-lg text-sm">
                    <span className="text-foreground-secondary">Dimensions:</span>
                    <span className="text-foreground font-medium">
                        {dimensions.width} × {dimensions.height}
                    </span>
                </span>
            )}
        </div>
    );
}
