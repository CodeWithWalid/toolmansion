import {
    FileImage,
    FileText,
    Type,
    Code,
    Wrench,
    Minimize2,
    Maximize2,
    Crop,
    RefreshCw,
    RotateCw,
    Layers,
    Image as ImageIcon,
    Wand2,
    Settings2,
    Palette,
    QrCode,
    Hash,
    AlignLeft,
    Stamp,
    Camera,
    FileJson,
    Split,
    Merge,
    Pipette,
    Diff,
    MonitorPlay
} from "lucide-react";

interface IconMapperProps {
    slug?: string;
    category?: string;
    className?: string;
}

export function IconMapper({ slug, category, className }: IconMapperProps) {
    // Map specific tools to icons
    if (slug) {
        switch (slug) {
            // Image Tools
            case 'convert-image': return <RefreshCw className={className} />;
            case 'resize-image': return <Maximize2 className={className} />;
            case 'crop-image': return <Crop className={className} />;
            case 'compress-image-to-size': return <Minimize2 className={className} />;
            case 'bulk-compress-images': return <Layers className={className} />;
            case 'rotate-flip-image': return <RotateCw className={className} />;
            case 'watermark-image': return <Stamp className={className} />;
            case 'remove-exif-data': return <Camera className={className} />;
            case 'webp-to-jpg': return <FileImage className={className} />;

            // PDF Tools
            case 'jpg-to-pdf': return <FileText className={className} />;
            case 'pdf-to-images': return <ImageIcon className={className} />;
            case 'merge-pdf': return <Merge className={className} />;
            case 'split-pdf': return <Split className={className} />;

            // Text/Dev Tools
            case 'lorem-ipsum-generator': return <AlignLeft className={className} />;
            case 'qr-code-generator': return <QrCode className={className} />;
            case 'hash-generator': return <Hash className={className} />;
            case 'json-formatter': return <FileJson className={className} />;
            case 'text-diff': return <Diff className={className} />;
            case 'markdown-preview': return <MonitorPlay className={className} />;

            // Utils
            case 'color-picker': return <Pipette className={className} />;

            default:
                break;
        }
    }

    // Map categories to icons
    switch (category) {
        case 'image': return <FileImage className={className} />;
        case 'pdf': return <FileText className={className} />;
        case 'text': return <Type className={className} />;
        case 'dev': return <Code className={className} />;
        case 'generators': return <Wand2 className={className} />;
        default: return <Wrench className={className} />;
    }
}
