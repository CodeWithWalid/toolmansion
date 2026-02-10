"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type QRType = "url" | "text" | "wifi" | "email" | "phone";

interface WifiData {
    ssid: string;
    password: string;
    security: "WPA" | "WEP" | "nopass";
    hidden: boolean;
}

// QR Code Generator using qr-code-styling CDN approach
declare global {
    interface Window {
        QRCodeStyling: any;
    }
}

export default function QRGeneratorTool() {
    const [type, setType] = useState<QRType>("url");
    const [text, setText] = useState("https://example.com");
    const [wifiData, setWifiData] = useState<WifiData>({
        ssid: "",
        password: "",
        security: "WPA",
        hidden: false,
    });
    const [email, setEmail] = useState({ address: "", subject: "", body: "" });
    const [phone, setPhone] = useState("");
    const [fgColor, setFgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [size, setSize] = useState(256);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [qrInstance, setQrInstance] = useState<any>(null);
    const qrRef = useRef<HTMLDivElement>(null);

    // Load QR code library from CDN
    useEffect(() => {
        if (typeof window !== "undefined" && !window.QRCodeStyling) {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/qr-code-styling@1.6.0-rc.1/lib/qr-code-styling.js";
            script.async = true;
            script.onload = () => setScriptLoaded(true);
            document.head.appendChild(script);
        } else if (window.QRCodeStyling) {
            setScriptLoaded(true);
        }
    }, []);

    const getQRData = useCallback((): string => {
        switch (type) {
            case "url":
            case "text":
                return text || "https://example.com";
            case "wifi":
                if (!wifiData.ssid) return "";
                return `WIFI:T:${wifiData.security};S:${wifiData.ssid};P:${wifiData.password};H:${wifiData.hidden ? "true" : "false"};;`;
            case "email":
                if (!email.address) return "";
                let emailData = `mailto:${email.address}`;
                const params: string[] = [];
                if (email.subject) params.push(`subject=${encodeURIComponent(email.subject)}`);
                if (email.body) params.push(`body=${encodeURIComponent(email.body)}`);
                if (params.length) emailData += `?${params.join("&")}`;
                return emailData;
            case "phone":
                return phone ? `tel:${phone}` : "";
            default:
                return text;
        }
    }, [type, text, wifiData, email, phone]);

    // Generate QR code
    useEffect(() => {
        if (!scriptLoaded || !window.QRCodeStyling || !qrRef.current) return;

        const data = getQRData();
        if (!data) return;

        // Clear previous QR code
        if (qrRef.current) {
            qrRef.current.innerHTML = "";
        }

        const qr = new window.QRCodeStyling({
            width: size,
            height: size,
            data: data,
            dotsOptions: {
                color: fgColor,
                type: "rounded",
            },
            backgroundOptions: {
                color: bgColor,
            },
            cornersSquareOptions: {
                type: "extra-rounded",
            },
            cornersDotOptions: {
                type: "dot",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 10,
            },
        });

        qr.append(qrRef.current);
        setQrInstance(qr);
    }, [scriptLoaded, getQRData, size, fgColor, bgColor]);

    const downloadQR = (extension: "png" | "svg" | "jpeg") => {
        if (qrInstance) {
            qrInstance.download({ name: `qrcode-${Date.now()}`, extension });
        }
    };

    const TypeButton = ({ value, label, icon }: { value: QRType; label: string; icon: string }) => (
        <button
            onClick={() => setType(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${type === value
                    ? "bg-accent text-white"
                    : "bg-background-tertiary text-foreground-secondary hover:text-foreground"
                }`}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    );

    return (
        <div className="space-y-6">
            {/* Type Selection */}
            <div className="flex flex-wrap gap-2">
                <TypeButton value="url" label="URL" icon="🔗" />
                <TypeButton value="text" label="Text" icon="📝" />
                <TypeButton value="wifi" label="WiFi" icon="📶" />
                <TypeButton value="email" label="Email" icon="✉️" />
                <TypeButton value="phone" label="Phone" icon="📞" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-6">
                    <div className="p-6 bg-background-secondary rounded-xl border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Content</h3>

                        {(type === "url" || type === "text") && (
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    {type === "url" ? "URL" : "Text"}
                                </label>
                                <input
                                    type={type === "url" ? "url" : "text"}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder={type === "url" ? "https://example.com" : "Enter your text..."}
                                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent"
                                />
                            </div>
                        )}

                        {type === "wifi" && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Network Name (SSID) *
                                    </label>
                                    <input
                                        type="text"
                                        value={wifiData.ssid}
                                        onChange={(e) => setWifiData((prev) => ({ ...prev, ssid: e.target.value }))}
                                        placeholder="My WiFi Network"
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={wifiData.password}
                                        onChange={(e) => setWifiData((prev) => ({ ...prev, password: e.target.value }))}
                                        placeholder="WiFi password"
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-foreground mb-2">Security</label>
                                        <select
                                            value={wifiData.security}
                                            onChange={(e) => setWifiData((prev) => ({ ...prev, security: e.target.value as "WPA" | "WEP" | "nopass" }))}
                                            className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                                        >
                                            <option value="WPA">WPA/WPA2</option>
                                            <option value="WEP">WEP</option>
                                            <option value="nopass">None</option>
                                        </select>
                                    </div>
                                    <label className="flex items-center gap-2 cursor-pointer mt-6">
                                        <input
                                            type="checkbox"
                                            checked={wifiData.hidden}
                                            onChange={(e) => setWifiData((prev) => ({ ...prev, hidden: e.target.checked }))}
                                            className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                                        />
                                        <span className="text-sm text-foreground">Hidden</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {type === "email" && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        value={email.address}
                                        onChange={(e) => setEmail((prev) => ({ ...prev, address: e.target.value }))}
                                        placeholder="example@email.com"
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                                    <input
                                        type="text"
                                        value={email.subject}
                                        onChange={(e) => setEmail((prev) => ({ ...prev, subject: e.target.value }))}
                                        placeholder="Email subject"
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Body</label>
                                    <textarea
                                        value={email.body}
                                        onChange={(e) => setEmail((prev) => ({ ...prev, body: e.target.value }))}
                                        placeholder="Email body..."
                                        rows={3}
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground resize-none"
                                    />
                                </div>
                            </div>
                        )}

                        {type === "phone" && (
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+1234567890"
                                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-foreground"
                                />
                            </div>
                        )}
                    </div>

                    {/* Customization */}
                    <div className="p-6 bg-background-secondary rounded-xl border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Customize</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Size</label>
                                <select
                                    value={size}
                                    onChange={(e) => setSize(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background-tertiary border border-border rounded-lg text-foreground"
                                >
                                    <option value={128}>128 x 128</option>
                                    <option value={256}>256 x 256</option>
                                    <option value={512}>512 x 512</option>
                                    <option value={1024}>1024 x 1024</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Foreground</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color"
                                        value={fgColor}
                                        onChange={(e) => setFgColor(e.target.value)}
                                        className="w-10 h-10 rounded border-0 cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={fgColor}
                                        onChange={(e) => setFgColor(e.target.value)}
                                        className="flex-1 px-2 py-1 bg-background-tertiary border border-border rounded text-foreground font-mono text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Background</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="w-10 h-10 rounded border-0 cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="flex-1 px-2 py-1 bg-background-tertiary border border-border rounded text-foreground font-mono text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Preview Section */}
                <div className="flex flex-col items-center gap-6">
                    <div className="p-8 bg-white rounded-2xl shadow-lg">
                        {!scriptLoaded ? (
                            <div className="w-64 h-64 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full spinner" />
                                    <p className="text-sm text-gray-500">Loading QR generator...</p>
                                </div>
                            </div>
                        ) : (
                            <div ref={qrRef} className="flex items-center justify-center min-w-[256px] min-h-[256px]" />
                        )}
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                            onClick={() => downloadQR("png")}
                            disabled={!scriptLoaded}
                            className="px-5 py-2.5 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            PNG
                        </button>
                        <button
                            onClick={() => downloadQR("svg")}
                            disabled={!scriptLoaded}
                            className="px-5 py-2.5 bg-background-tertiary border border-border hover:border-accent/50 disabled:opacity-50 text-foreground font-medium rounded-xl transition-colors"
                        >
                            SVG
                        </button>
                        <button
                            onClick={() => downloadQR("jpeg")}
                            disabled={!scriptLoaded}
                            className="px-5 py-2.5 bg-background-tertiary border border-border hover:border-accent/50 disabled:opacity-50 text-foreground font-medium rounded-xl transition-colors"
                        >
                            JPEG
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
