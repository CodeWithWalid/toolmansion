import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of service for ToolMansion. Read our usage terms, disclaimers, and policies.",
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                        By accessing and using ToolMansion ("the Service"), you agree to be bound by these Terms
                        of Service. If you do not agree to these terms, please do not use the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                    <p className="text-muted-foreground">
                        ToolMansion provides free, browser-based utility tools including image conversion,
                        PDF manipulation, text processing, and developer utilities. All file processing
                        occurs locally within your web browser — no files are uploaded to our servers.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                    <p className="text-muted-foreground">
                        You are solely responsible for the content you process using our tools. You agree not
                        to use the Service for any unlawful purpose or in violation of any applicable laws.
                        You must not attempt to interfere with the proper functioning of the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                        The Service, including its design, code, and branding, is the property of Botsquash.
                        Files you process through our tools remain your property — we claim no rights over
                        your content.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
                    <p className="text-muted-foreground">
                        The Service is provided "as-is" without warranties of any kind, express or implied.
                        We do not guarantee that the Service will be uninterrupted, error-free, or that
                        the results will meet your specific requirements. Always verify output files
                        before using them for critical purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                        To the maximum extent permitted by law, Botsquash shall not be liable for any
                        indirect, incidental, special, or consequential damages arising from your use
                        of the Service. Since all processing happens locally in your browser, data loss
                        or corruption is governed by your device's capabilities.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
                    <p className="text-muted-foreground">
                        We reserve the right to modify these Terms at any time. Continued use of the
                        Service after changes constitutes acceptance of the modified Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
                    <p className="text-muted-foreground">
                        For questions about these Terms, contact us at support@toolmansion.com.
                    </p>
                </section>
            </div>
        </div>
    );
}
