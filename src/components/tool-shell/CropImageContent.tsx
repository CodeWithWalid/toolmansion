"use client";

import {
    Crop,
    Shield,
    Zap,
    Instagram,
    Monitor,
    Camera,
    ImageIcon,
    CheckCircle2,
    Grid3x3,
    Maximize,
    Move
} from "lucide-react";

export function CropImageContent() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    How to Crop Images Online
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Remove unwanted edges, change aspect ratios, and focus on what matters in your photos. 
                    Our free online image cropper works with pixel-perfect precision — all in your browser 
                    with no uploads required. Perfect for social media, prints, and professional editing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Upload Your Image</h3>
                        <p className="text-sm text-muted-foreground">
                            Select any JPG, PNG, or WebP image. The full-resolution image loads instantly 
                            in the browser for precise cropping.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Define Crop Area</h3>
                        <p className="text-sm text-muted-foreground">
                            Drag to position, resize the crop frame, or choose from preset aspect ratios. 
                            Use grid overlays for perfect composition.
                        </p>
                    </div>
                    <div className="relative p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Download Cropped Image</h3>
                        <p className="text-sm text-muted-foreground">
                            Preview the result and download your cropped image. Original quality 
                            preserved — only pixels outside the crop are removed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-primary/10">
                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                            Your Photos Stay Private — Always
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Photo editing often involves personal or sensitive images. Unlike online editors 
                            that upload your photos to remote servers, ToolMansion crops images locally using 
                            your browser&apos;s canvas API. Your images never leave your device.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Client-Side Processing</span>
                                    <span className="text-sm text-muted-foreground">Canvas API in your browser</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Safe for Any Content</span>
                                    <span className="text-sm text-muted-foreground">Personal, professional, sensitive</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Instant Results</span>
                                    <span className="text-sm text-muted-foreground">No upload/download delays</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-medium text-foreground block">Works Offline</span>
                                    <span className="text-sm text-muted-foreground">After page loads, no internet needed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aspect Ratio Presets */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Aspect Ratio Presets for Every Platform
                </h2>
                <p className="text-muted-foreground mb-6">
                    Different platforms require different image shapes. Use our preset aspect ratios 
                    to ensure your cropped images display perfectly everywhere.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Original", ratio: "Keep as-is", icon: ImageIcon, desc: "Maintain source ratio" },
                        { name: "Square", ratio: "1:1", icon: Grid3x3, desc: "Instagram posts, avatars" },
                        { name: "Portrait", ratio: "4:5", icon: Camera, desc: "Instagram portrait" },
                        { name: "Landscape", ratio: "16:9", icon: Monitor, desc: "YouTube, widescreen" },
                        { name: "Story", ratio: "9:16", icon: Instagram, desc: "Stories, Reels, TikTok" },
                        { name: "Classic", ratio: "4:3", icon: ImageIcon, desc: "Presentations, photos" },
                        { name: "Cinema", ratio: "21:9", icon: Monitor, desc: "Ultrawide displays" },
                        { name: "Freeform", ratio: "Custom", icon: Move, desc: "Any dimensions" },
                    ].map((preset) => (
                        <div key={preset.name} className="p-4 bg-muted/50 rounded-lg border border-border text-center">
                            <preset.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-semibold text-foreground text-sm">{preset.name}</div>
                            <div className="text-xs text-primary font-medium">{preset.ratio}</div>
                            <div className="text-[10px] text-muted-foreground mt-1">{preset.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    When to Crop Your Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Instagram className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Social Media Optimization</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Each platform has specific aspect ratio requirements. Crop to the right shape 
                            to avoid awkward automatic cropping by the platform.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Instagram: 1:1, 4:5, or 9:16</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Facebook cover: 2.6:1</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Twitter header: 3:1</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">YouTube thumbnail: 16:9</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Camera className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Photo Composition</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Improve your photos by removing distracting elements and applying the 
                            rule of thirds for more compelling compositions.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Remove distractions from edges</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Center the subject</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Apply rule of thirds</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Straighten horizons</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Website & App Graphics</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Create perfectly sized images for websites, apps, and digital displays. 
                            Crop to exact pixel dimensions for crisp rendering.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Hero banners</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Product thumbnails</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Avatar/profile pictures</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">App icons</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Maximize className="w-6 h-6 text-primary" />
                            <h3 className="font-semibold text-foreground">Print Preparation</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Prepare images for printing by cropping to standard photo sizes and 
                            ensuring proper aspect ratios for frames and albums.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">4×6, 5×7, 8×10 prints</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Passport photos</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Wallet size</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Custom frame sizes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Image Cropper Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Grid3x3 className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Grid Overlays</h3>
                            <p className="text-sm text-muted-foreground">
                                Enable rule of thirds, golden ratio, or center grid overlays to achieve 
                                professional photo composition. Guides help place subjects perfectly.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Maximize className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Exact Pixel Control</h3>
                            <p className="text-sm text-muted-foreground">
                                Enter precise pixel dimensions for width and height. Perfect for creating 
                                images that must meet exact size specifications.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Move className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Freeform Cropping</h3>
                            <p className="text-sm text-muted-foreground">
                                Not constrained by aspect ratios? Use freeform mode to crop any rectangular 
                                area, then resize to your target dimensions.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Live Preview</h3>
                            <p className="text-sm text-muted-foreground">
                                See exactly how your cropped image will look before downloading. 
                                Adjust and refine until it&apos;s perfect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crop vs Resize */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Cropping vs. Resizing: What&apos;s the Difference?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Crop className="w-5 h-5 text-primary" />
                            Cropping
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Removes portions of the image to change composition or aspect ratio. 
                            The remaining portion stays at full resolution.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Changes image composition</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Removes unwanted areas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Maintains pixel quality</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 italic">
                            Use when: You want to change what&apos;s in the frame
                        </p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Maximize className="w-5 h-5 text-primary" />
                            Resizing
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Changes the dimensions of the entire image without removing any content. 
                            All pixels are preserved but made larger or smaller.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Keeps entire image</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">Changes pixel dimensions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">May affect quality</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 italic">
                            Use when: You need different pixel dimensions of the same image
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
