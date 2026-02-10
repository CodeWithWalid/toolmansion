// GEO Pages Data - Single Source of Truth
// Only explicitly defined GEO pages will be rendered & indexed.
// To add a new GEO page, add an entry here.

export interface GeoPresets {
    width?: number;
    height?: number;
    unit?: "px" | "mm" | "in";
    targetSizeKB?: number;
    backgroundColor?: string;
    dpi?: number;
}

export interface GeoPageDefinition {
    toolSlug: string;
    countrySlug: string;
    countryName: string;
    presets: GeoPresets;
    guidance: string; // 200-400 word guidance section
    seo: {
        title: string;
        metaDescription: string;
        h1: string;
        faq: { q: string; a: string }[];
    };
}

export const GEO_PAGES: GeoPageDefinition[] = [
    {
        toolSlug: "resize-image",
        countrySlug: "india",
        countryName: "India",
        presets: {
            width: 350,
            height: 450,
            unit: "px",
            dpi: 300,
            backgroundColor: "#ffffff",
        },
        guidance: `Indian passport photos must comply with strict specifications set by the Ministry of External Affairs. The standard passport size photo in India is 35mm × 45mm (approximately 350×450 pixels at 300 DPI). The photo must have a plain white or light-colored background with no patterns, shadows, or other people visible.

Your face should occupy 70-80% of the frame, with a neutral expression and mouth closed. Both ears must be visible, and glasses should generally be avoided. The photo must be taken in front of a light background, and the lighting should be even across the face without harsh shadows.

Common mistakes include: using a colored or patterned background, wearing sunglasses or tinted glasses, having hair covering the face, and submitting blurry or low-resolution images. For online passport applications via Passport Seva, the digital photo must be between 10KB and 300KB in JPEG format.

This tool automatically resizes your photo to the exact 35×45mm specification. Simply upload your photo, and the preset will be applied. You can fine-tune the crop area to ensure your face is properly centered.`,
        seo: {
            title: "Passport Size Photo for India — Resize to 35×45mm Online Free",
            metaDescription: "Resize your photo to Indian passport size (35×45mm / 350×450px) instantly. Free, private, no upload. Compliant with Indian passport specifications.",
            h1: "Passport Size Photo for India",
            faq: [
                {
                    q: "What is the standard passport photo size in India?",
                    a: "The standard Indian passport photo size is 35mm × 45mm (width × height). In pixels at 300 DPI, this is approximately 413 × 531 pixels.",
                },
                {
                    q: "What background color is required for Indian passport photos?",
                    a: "Indian passport photos require a plain white or light-colored background. Patterned backgrounds or dark colors are not accepted.",
                },
                {
                    q: "Can I wear glasses in my Indian passport photo?",
                    a: "It is recommended to remove glasses for your passport photo. If you must wear prescription glasses, ensure there is no glare or reflection obscuring your eyes.",
                },
                {
                    q: "What is the file size limit for the online passport application?",
                    a: "For the Passport Seva online application, the photo must be in JPEG format, between 10KB and 300KB in file size.",
                },
                {
                    q: "Is this tool truly private?",
                    a: "Yes. Your photo is processed entirely in your browser. It is never uploaded to any server. You can even use this tool offline.",
                },
                {
                    q: "Does this work on mobile phones?",
                    a: "Yes. You can use this tool on any device with a modern browser — iPhone, Android, tablet, or desktop.",
                },
            ],
        },
    },
];

// Helper functions
export function getGeoPage(toolSlug: string, countrySlug: string): GeoPageDefinition | undefined {
    return GEO_PAGES.find(
        (page) => page.toolSlug === toolSlug && page.countrySlug === countrySlug
    );
}

export function getGeoPagesByTool(toolSlug: string): GeoPageDefinition[] {
    return GEO_PAGES.filter((page) => page.toolSlug === toolSlug);
}

export function getAllGeoPagesForSitemap(): { toolSlug: string; countrySlug: string }[] {
    return GEO_PAGES.map((page) => ({
        toolSlug: page.toolSlug,
        countrySlug: page.countrySlug,
    }));
}
