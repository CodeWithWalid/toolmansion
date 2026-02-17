// Comprehensive content component for PDF Tools category hub
// Optimized for SEO with 2000+ words, structured data, and rich content

import Link from "next/link";
import { ToolDefinition } from "@/data/toolsRegistry";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  WifiOff, 
  Lock,
  CheckCircle2,
  FileText,
  Merge,
  Scissors,
  Image as ImageIcon,
  FilePlus,
  Building2,
  GraduationCap,
  Briefcase,
  User
} from "lucide-react";

interface PdfToolsContentProps {
  tools: ToolDefinition[];
}

// Tool icon mapping
const toolIcons: Record<string, React.ReactNode> = {
  "merge-pdf": <Merge className="w-6 h-6" />,
  "split-pdf": <Scissors className="w-6 h-6" />,
  "jpg-to-pdf": <FilePlus className="w-6 h-6" />,
  "pdf-to-images": <ImageIcon className="w-6 h-6" />,
};

// Extended tool descriptions for category page
const toolDescriptions: Record<string, { overview: string; useCases: string[] }> = {
  "merge-pdf": {
    overview: "Combine multiple PDF files into a single document with an intuitive drag-and-drop interface. Rearrange pages, remove unwanted pages, and create perfectly organized PDFs in seconds. Ideal for consolidating reports, contracts, or scanned documents.",
    useCases: ["Combining monthly reports", "Merging signed contracts", "Consolidating scanned documents", "Creating document portfolios"]
  },
  "split-pdf": {
    overview: "Extract specific pages or split large PDFs into smaller, manageable files. Extract individual pages, specific ranges, or split by fixed page counts. Perfect for sharing specific sections or reducing file sizes for email.",
    useCases: ["Extracting specific chapters", "Splitting large reports", "Creating sample excerpts", "Separating scanned batches"]
  },
  "jpg-to-pdf": {
    overview: "Convert images to professional PDF documents. Combine multiple JPGs, PNGs, or WebP files into a single PDF with customizable page sizes (A4, Letter, Legal) and margins. Perfect for creating photo albums, document scans, or presentation materials.",
    useCases: ["Creating photo albums", "Scanning documents to PDF", "Making presentation PDFs", "Archiving image collections"]
  },
  "pdf-to-images": {
    overview: "Extract pages from PDF documents as high-quality images. Convert entire PDFs or selected pages to JPG, PNG, or WebP formats. Useful for sharing PDF content on social media, creating thumbnails, or editing in image software.",
    useCases: ["Sharing PDF pages on social media", "Creating presentation thumbnails", "Editing PDF content in Photoshop", "Archiving PDF pages as images"]
  },
};

// FAQ data for PDF Tools category
export const pdfToolsFAQ = [
  {
    question: "Are these PDF tools truly free with no limits?",
    answer: "Yes, all our PDF tools are completely free with no usage limits, file size restrictions, or watermarks. You can merge, split, and convert as many PDFs as you need. The service is supported by non-intrusive advertisements, allowing us to keep the tools free for everyone while maintaining complete privacy."
  },
  {
    question: "How do you ensure my PDFs stay private and secure?",
    answer: "Our privacy-first architecture means all PDF processing happens locally in your browser using JavaScript libraries. Your files are never uploaded to our servers or any third-party service. This is fundamentally different from most online PDF tools that require cloud processing. Your documents never leave your device, making our tools safe for sensitive contracts, financial documents, and personal records."
  },
  {
    question: "Is there a file size limit for PDF processing?",
    answer: "Since processing happens locally on your device, the main limitation is your browser's available memory (RAM). Most modern devices can handle PDFs up to 100MB or larger. For merging multiple PDFs, you can typically combine 20-50 files at once depending on their sizes. Unlike cloud-based tools, we don't impose artificial limits."
  },
  {
    question: "Can I use these PDF tools offline?",
    answer: "Absolutely! Once you load the tool page, you can disconnect from the internet and continue processing PDFs. This is perfect for working with sensitive documents in secure environments, while traveling, or when you have limited connectivity. The tools work entirely within your browser without requiring any server communication."
  },
  {
    question: "Will the quality of my PDFs be affected?",
    answer: "No, our tools preserve the original quality of your PDFs. When merging or splitting, the content remains exactly as it was in the original files. When converting between formats (like JPG to PDF or PDF to images), we use high-quality rendering to ensure no loss of clarity or detail. The output files maintain the resolution and quality of your originals."
  },
  {
    question: "What PDF versions and features are supported?",
    answer: "Our tools support PDF versions 1.2 through 1.7, which covers virtually all PDFs created in the last 20 years. This includes text-based PDFs, scanned documents, PDFs with embedded images, and documents with various compression formats. However, password-protected or encrypted PDFs need to be unlocked before processing."
  },
  {
    question: "Can I process PDFs for commercial use?",
    answer: "Yes, you retain full ownership and rights to all documents processed through our tools. We claim no rights to your content. Whether you're processing client contracts, business reports, or professional documents, you can use the output freely for commercial purposes without any attribution or licensing requirements."
  },
  {
    question: "Which PDF tool should I use for my task?",
    answer: "For combining multiple documents, use the PDF Merger. For extracting specific pages or creating smaller files from a large PDF, use the PDF Splitter. To convert images to a document format, use JPG to PDF. To extract content from PDFs as images, use PDF to Images. Each tool is optimized for its specific purpose, and you can use them in sequence for complex workflows."
  }
];

export function PdfToolsContent({ tools }: PdfToolsContentProps) {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gradient-to-br from-primary/5 to-red-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Free PDF Tools — Merge, Split & Convert Without Uploading
          </h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p className="text-lg">
              Welcome to ToolMansion's complete suite of <strong className="text-foreground">free browser-based PDF tools</strong>. 
              Whether you need to <strong className="text-foreground">merge multiple PDFs</strong> into one document, 
              <strong className="text-foreground"> split large files</strong> into smaller pieces, or 
              <strong className="text-foreground"> convert between PDF and image formats</strong> — our privacy-focused utilities handle it all without ever uploading your files to a server.
            </p>
            <p>
              Unlike traditional online PDF services that require uploading your documents to the cloud for processing, ToolMansion's PDF tools work entirely within your browser using advanced JavaScript PDF libraries. This means your confidential business contracts, financial statements, personal records, and sensitive documents never leave your computer. You get professional-grade PDF processing with the privacy of offline software.
            </p>
            <p>
              Our PDF toolkit includes 4 specialized tools covering every common task: PDF Merger for combining documents, PDF Splitter for extracting pages, JPG to PDF for converting images to documents, and PDF to Images for extracting pages as pictures. Each tool is designed to be intuitive yet powerful, offering the features you need without unnecessary complexity or privacy compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Browser-Based Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Why Choose Our Browser-Based PDF Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              Your documents never leave your device. Perfect for confidential contracts, financial records, and sensitive files.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
            <p className="text-sm text-muted-foreground">
              Once loaded, disconnect and keep processing. Ideal for secure environments and travel.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Instant Processing</h3>
            <p className="text-sm text-muted-foreground">
              No upload/download delays. Process PDFs instantly on your device with no waiting.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">No Watermarks</h3>
            <p className="text-sm text-muted-foreground">
              Clean output without branding. Use for professional documents without any attribution.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Tool Overview Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Complete PDF Tool Collection
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Explore our suite of 4 specialized PDF tools. Each tool is designed for a specific purpose, 
          with professional features typically found only in expensive desktop software. Click any tool to try it instantly.
        </p>
        
        <div className="space-y-6">
          {tools.filter(t => t.status === "Live").map((tool) => {
            const details = toolDescriptions[tool.slug];
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {toolIcons[tool.slug] || <FileText className="w-6 h-6" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20 w-fit">
                        <CheckCircle2 className="w-3 h-3" />
                        Live
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {details?.overview || tool.description}
                    </p>
                    {details?.useCases && (
                      <div className="flex flex-wrap gap-2">
                        {details.useCases.map((useCase, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium mr-2">Try Tool</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Who Uses Our PDF Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <Building2 className="w-4 h-4" />
              </div>
              Business Professionals
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Merge monthly reports into annual compilations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Combine signed contract pages into final documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Extract specific sections for client presentations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Convert scanned receipts to expense report PDFs</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <GraduationCap className="w-4 h-4" />
              </div>
              Students & Educators
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Combine research papers with appendices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Merge assignment scans into single submissions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Extract specific chapters for study guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Convert presentation slides to PDF handouts</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <Briefcase className="w-4 h-4" />
              </div>
              Legal & Finance
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Organize case documents into binders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Split large discovery documents by topic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Merge financial statements with reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Convert scanned invoices to digital records</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <User className="w-4 h-4" />
              </div>
              Personal Use
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Create photo albums from vacation pictures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Organize scanned family documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Combine rental application documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Extract pages from ebooks for reference</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common PDF Tasks Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Common PDF Tasks & Solutions
        </h2>
        <p className="text-muted-foreground mb-8">
          Not sure which tool to use? Here's a quick guide to matching your task with the right tool:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Your Task</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Recommended Tool</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">What It Does</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-4 px-4">Combine multiple PDFs into one</td>
                <td className="py-4 px-4 font-medium text-foreground">
                  <Link href="/tools/merge-pdf" className="text-primary hover:underline">PDF Merger</Link>
                </td>
                <td className="py-4 px-4">Join unlimited PDFs and rearrange pages</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4">Extract pages from a PDF</td>
                <td className="py-4 px-4 font-medium text-foreground">
                  <Link href="/tools/split-pdf" className="text-primary hover:underline">PDF Splitter</Link>
                </td>
                <td className="py-4 px-4">Extract specific pages or split by page count</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4">Convert photos to PDF</td>
                <td className="py-4 px-4 font-medium text-foreground">
                  <Link href="/tools/jpg-to-pdf" className="text-primary hover:underline">JPG to PDF</Link>
                </td>
                <td className="py-4 px-4">Transform images into professional PDFs</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Save PDF pages as images</td>
                <td className="py-4 px-4 font-medium text-foreground">
                  <Link href="/tools/pdf-to-images" className="text-primary hover:underline">PDF to Images</Link>
                </td>
                <td className="py-4 px-4">Export pages as JPG, PNG, or WebP files</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PDF vs Image Formats Section */}
      <section className="bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl p-8 md:p-12 border border-red-500/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          When to Use PDF vs. Image Formats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-500" />
              Use PDF When...
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>You need to preserve text as selectable and searchable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Printing professional documents with precise layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Sharing multi-page documents that need to stay together</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Creating forms or documents with fillable fields</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Sending official documents (contracts, resumes, reports)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Use Image Formats When...
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Sharing on social media platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Need universal compatibility (every device supports images)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Editing content in image editing software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Creating thumbnails or previews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Need smaller file sizes for web or email</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          PDF Security Best Practices
        </h2>
        <div className="bg-card border border-border rounded-xl p-6 md:p-8">
          <p className="text-muted-foreground mb-6">
            When working with sensitive PDF documents, follow these security guidelines to protect your information:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Before Processing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Verify you're using our official toolmansion.com domain</li>
                <li>• Check for HTTPS and the secure lock icon in your browser</li>
                <li>• Consider working offline by disconnecting after page load</li>
                <li>• Clear browser cache after processing highly sensitive files</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">After Processing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Download files to a secure location, not public folders</li>
                <li>• Delete original working files when no longer needed</li>
                <li>• Consider password-protecting the final PDF if sharing</li>
                <li>• Use encrypted storage for long-term document retention</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Remember:</strong> Unlike cloud-based PDF tools, our browser-based approach 
              means your documents are processed entirely on your device. No data is transmitted to our servers, 
              providing an additional layer of privacy protection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start Processing Your PDFs Now
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All tools are free, private, and work instantly in your browser. 
            No registration, no watermarks, no limits. Choose a tool above or browse all our PDF utilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/merge-pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Merge className="w-5 h-5" />
              Try PDF Merger
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-foreground font-semibold rounded-xl hover:bg-muted/80 transition-colors"
            >
              Browse All Tools
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
