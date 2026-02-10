
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ToolMansion",
    description: "Our commitment to your privacy. No uploads, no servers, 100% client-side processing.",
};

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. No Server Uploads</h2>
                    <p className="text-lg text-muted-foreground">
                        ToolMansion operates with a strict "Client-Side Only" architecture. When you use our tools
                        (such as Image Converter, PDF Merger, etc.), your files are processed entirely within
                        your web browser using WebAssembly and JavaScript APIs.
                        <strong> Your files are never uploaded to our servers.</strong>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
                    <p className="text-muted-foreground">
                        We do not collect personal data, IP addresses, or usage logs associated with your file content.
                        We may use anonymous, privacy-friendly analytics (like minimal page view counters) to improve
                        site performance, but this data is never linked to your identity or files.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Local Storage</h2>
                    <p className="text-muted-foreground">
                        Some tools may use your browser's LocalStorage to save your preferences (like "Dark Mode"
                        or "Last Used Settings"). This data stays on your device and is not sent to us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
                    <p className="text-muted-foreground">
                        We may display non-personalized advertisements or use a content delivery network (CDN)
                        to serve the website assets faster. These services may collect standard technical logs
                        (like browser type) for security and operational purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                    <p className="text-muted-foreground">
                        If you have any questions about this privacy policy, please contact us at support@toolmansion.com.
                    </p>
                </section>

                <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl mt-8">
                    <p className="font-medium text-primary">
                        Summary: Your files stay on your computer. We don't see them, we don't save them, and we don't sell them.
                    </p>
                </div>
            </div>
        </div>
    );
}
