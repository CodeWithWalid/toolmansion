"use client";

import { useState, useRef, useCallback } from "react";

interface ExifData {
    [key: string]: string | number | undefined;
}

export default function RemoveExifTool() {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [exifData, setExifData] = useState<ExifData | null>(null);
    const [cleanedImage, setCleanedImage] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        setCleanedImage(null);
        setExifData(null);

        const reader = new FileReader();
        reader.onload = async (event) => {
            const dataUrl = event.target?.result as string;
            const img = new Image();
            img.onload = () => {
                imageRef.current = img;
                setImage(dataUrl);

                // Dynamic import to avoid SSR issues
                import("exif-js").then((EXIF) => {
                    // @ts-ignore - EXIF types are tricky
                    EXIF.default.getData(img as any, function (this: any) {
                        const allMetaData = EXIF.default.getAllTags(this);
                        const relevantData: ExifData = {};

                        if (Object.keys(allMetaData).length > 0) {
                            // Filter relevant tags
                            if (allMetaData.Make) relevantData["Camera Make"] = allMetaData.Make;
                            if (allMetaData.Model) relevantData["Camera Model"] = allMetaData.Model;
                            if (allMetaData.DateTime) relevantData["Date Taken"] = allMetaData.DateTime;
                            if (allMetaData.GPSLatitude) relevantData["GPS Latitude"] = `${allMetaData.GPSLatitude[0]}° ${allMetaData.GPSLatitude[1]}' ${allMetaData.GPSLatitude[2]}"`;
                            if (allMetaData.GPSLongitude) relevantData["GPS Longitude"] = `${allMetaData.GPSLongitude[0]}° ${allMetaData.GPSLongitude[1]}' ${allMetaData.GPSLongitude[2]}"`;
                            if (allMetaData.Software) relevantData["Software"] = allMetaData.Software;
                            if (allMetaData.FNumber) relevantData["Aperture"] = `f/${allMetaData.FNumber}`;
                            if (allMetaData.ExposureTime) relevantData["Exposure"] = `${allMetaData.ExposureTime.numerator}/${allMetaData.ExposureTime.denominator}s`;
                            if (allMetaData.ISOSpeedRatings) relevantData["ISO"] = allMetaData.ISOSpeedRatings;
                        } else {
                            relevantData["Status"] = "No EXIF data found";
                        }

                        setExifData(relevantData);
                    });
                });
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    };

    const removeExif = useCallback(async () => {
        if (!imageRef.current || !canvasRef.current) return;
        setProcessing(true);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imageRef.current;
        canvas.width = img.width;
        canvas.height = img.height;

        // Drawing to canvas strips EXIF data
        ctx.drawImage(img, 0, 0);

        // Convert to PNG (no EXIF) or clean JPEG
        const cleanedUrl = canvas.toDataURL("image/png", 1.0);
        setCleanedImage(cleanedUrl);
        setProcessing(false);
    }, []);

    const download = () => {
        if (!cleanedImage) return;
        const a = document.createElement("a");
        a.href = cleanedImage;
        a.download = `${fileName}-no-exif.png`;
        a.click();
    };

    const ExifRow = ({ label, value }: { label: string; value: string | number | undefined }) => (
        <div className="flex justify-between py-2 border-b border-border last:border-0">
            <span className="text-foreground-secondary">{label}</span>
            <span className="text-foreground font-medium">{value || "—"}</span>
        </div>
    );

    return (
        <div className="space-y-6">
            <canvas ref={canvasRef} className="hidden" />

            {!image ? (
                <div className="dropzone rounded-2xl p-12 text-center cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                    <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-2">Upload an image to strip EXIF data</p>
                        <p className="text-sm text-foreground-secondary">Protect your privacy by removing metadata</p>
                    </label>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Image Preview */}
                        <div className="bg-background-secondary rounded-xl p-4">
                            <h3 className="text-sm font-medium text-foreground-secondary mb-3">Image</h3>
                            <img src={image} alt="Uploaded" className="w-full max-h-64 object-contain rounded-lg" />
                            <p className="text-center text-sm text-foreground-secondary mt-2">{fileName}</p>
                        </div>

                        {/* EXIF Data */}
                        <div className="bg-background-secondary rounded-xl p-4">
                            <h3 className="text-sm font-medium text-foreground-secondary mb-3">Detected Metadata</h3>
                            {exifData && (
                                <div className="space-y-1">
                                    {Object.entries(exifData).map(([key, value]) => (
                                        <ExifRow key={key} label={key} value={value} />
                                    ))}
                                </div>
                            )}
                            <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                                <p className="text-sm text-warning">
                                    <strong>Privacy Warning:</strong> JPEG images often contain GPS coordinates, camera model, and timestamps.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button
                            onClick={removeExif}
                            disabled={processing}
                            className="flex-1 py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                        >
                            {processing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Remove All Metadata
                                </>
                            )}
                        </button>
                        {cleanedImage && (
                            <button
                                onClick={download}
                                className="px-8 py-4 bg-success hover:bg-success/90 text-white font-semibold rounded-xl flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Clean Image
                            </button>
                        )}
                    </div>

                    {/* Success Message */}
                    {cleanedImage && (
                        <div className="p-4 bg-success/10 border border-success/20 rounded-xl flex items-center gap-3">
                            <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                                <p className="font-medium text-success">Metadata removed successfully!</p>
                                <p className="text-sm text-foreground-secondary">Your image is now safe to share without exposing personal data.</p>
                            </div>
                        </div>
                    )}

                    <button onClick={() => { setImage(null); setCleanedImage(null); setExifData(null); }} className="w-full py-2 text-foreground-secondary hover:text-foreground">
                        Upload different image
                    </button>
                </>
            )}
        </div>
    );
}
