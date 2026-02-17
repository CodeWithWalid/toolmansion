// Comprehensive content component for Text Tools category hub
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
  Type,
  CaseUpper,
  CaseLower,
  FileText,
  Mail,
  Link as LinkIcon,
  GitCompare,
  ScrollText,
  PenTool,
  BookOpen,
  Hash
} from "lucide-react";

interface TextToolsContentProps {
  tools: ToolDefinition[];
}

// Tool icon mapping
const toolIcons: Record<string, React.ReactNode> = {
  "word-counter": <FileText className="w-6 h-6" />,
  "case-converter": <Type className="w-6 h-6" />,
  "remove-duplicate-lines": <GitCompare className="w-6 h-6" />,
  "extract-emails": <Mail className="w-6 h-6" />,
  "extract-urls": <LinkIcon className="w-6 h-6" />,
  "text-diff": <ScrollText className="w-6 h-6" />,
};

// Extended tool descriptions for category page
const toolDescriptions: Record<string, { overview: string; useCases: string[] }> = {
  "word-counter": {
    overview: "Count words, characters, sentences, and paragraphs with real-time statistics. Perfect for writers, students, and social media managers who need to meet specific length requirements. Includes reading time estimation and character count with/without spaces.",
    useCases: ["Essay length requirements", "Social media character limits", "SEO meta descriptions", "Reading time estimation"]
  },
  "case-converter": {
    overview: "Convert text between uppercase, lowercase, title case, sentence case, and programming cases (camelCase, snake_case, kebab-case). Essential for developers, writers, and data formatting. Instantly transform text for code, titles, or formatting consistency.",
    useCases: ["Code variable naming", "Title formatting", "Data normalization", "Programming conventions"]
  },
  "remove-duplicate-lines": {
    overview: "Remove duplicate lines from text while preserving order. Option for case-sensitive or case-insensitive comparison. Perfect for cleaning email lists, URL collections, data exports, and log files. Can also sort results alphabetically.",
    useCases: ["Cleaning email lists", "Deduplicating URLs", "Data cleanup", "Log file processing"]
  },
  "extract-emails": {
    overview: "Extract all email addresses from any text using intelligent pattern matching. Supports various email formats including subdomains and plus addressing. Removes duplicates automatically and exports as clean list. Ideal for contact list building and data mining.",
    useCases: ["Contact list building", "Email harvesting", "Data extraction", "Lead generation"]
  },
  "extract-urls": {
    overview: "Extract all URLs and links from text content. Detects HTTP, HTTPS, FTP links, and common URL shorteners. Perfect for archiving link collections, analyzing content, or building bookmark lists from documents and web pages.",
    useCases: ["Link archiving", "Content analysis", "Bookmark extraction", "URL collection"]
  },
  "text-diff": {
    overview: "Compare two texts side-by-side and highlight differences. Shows additions in green and deletions in red. Perfect for reviewing document changes, comparing code versions, or tracking edits. Essential for writers, editors, and developers.",
    useCases: ["Document comparison", "Code review", "Edit tracking", "Version comparison"]
  },
};

// FAQ data for Text Tools category
export const textToolsFAQ = [
  {
    question: "Are these text tools free to use without any limits?",
    answer: "Yes, all our text tools are completely free with no usage limits, character restrictions, or hidden fees. You can process as much text as you need. The tools work entirely in your browser, so there's no server-side processing that would impose artificial limits. The service is supported by non-intrusive advertising."
  },
  {
    question: "Is my text content secure and private?",
    answer: "Absolutely. We take privacy seriously—all text processing happens locally in your browser using JavaScript. Your text is never uploaded to our servers or any third party. Once you close the browser tab or navigate away, all data is automatically cleared from memory. This makes our tools safe for processing sensitive documents, proprietary content, or confidential information."
  },
  {
    question: "Can I use these text tools offline?",
    answer: "Yes! Once you load a tool page, you can disconnect from the internet and continue using it. This is perfect for working on sensitive documents in secure environments, while traveling, or in areas with poor connectivity. All processing happens client-side, so no internet connection is required after the initial page load."
  },
  {
    question: "Is there a limit on how much text I can process?",
    answer: "There are no artificial limits. The practical limit depends on your device's memory (RAM). Most modern computers can handle several megabytes of text at once. For extremely large files (100MB+), you might experience slower performance, but the tools will still work. Unlike cloud-based services, we don't restrict text length or charge for processing large documents."
  },
  {
    question: "Can I use these tools for commercial purposes?",
    answer: "Yes, you can use all our text tools for both personal and commercial projects without any restrictions. Whether you're processing client documents, preparing content for your business, or cleaning data for professional analysis, our tools are completely free for commercial use. No attribution required."
  },
  {
    question: "Which case conversion options are available?",
    answer: "Our Case Converter supports: UPPERCASE (all caps), lowercase (all small), Title Case (First Letter Capitalized), Sentence case (First letter of each sentence), camelCase (for JavaScript variables), PascalCase (for class names), snake_case (for Python/Ruby), and kebab-case (for CSS/HTML). Perfect for developers and writers who need consistent text formatting."
  },
  {
    question: "How accurate is the word count and reading time?",
    answer: "Word count is calculated by splitting text on whitespace and counting non-empty tokens. Character count includes/excludes spaces based on your selection. Reading time is estimated at 200-250 words per minute for average adult readers. These metrics are industry-standard and suitable for academic, professional, and publishing purposes."
  },
  {
    question: "Can I extract emails and URLs from any text format?",
    answer: "Yes, our extraction tools work with any text you paste in—whether it's from Word documents, PDFs, web pages, emails, or code files. Simply copy the text containing emails or URLs and paste it into the tool. The pattern matching is sophisticated enough to find valid addresses while filtering out false positives."
  }
];

export function TextToolsContent({ tools }: TextToolsContentProps) {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gradient-to-br from-primary/5 to-teal-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Free Text Tools — Word Counter, Case Converter & Text Utilities
          </h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p className="text-lg">
              Welcome to ToolMansion's collection of <strong className="text-foreground">free browser-based text tools</strong>. 
              Whether you need to <strong className="text-foreground">count words</strong> for an essay, 
              <strong className="text-foreground"> convert text case</strong> for programming, 
              <strong className="text-foreground"> remove duplicate lines</strong> from a list, or 
              <strong className="text-foreground"> extract emails and URLs</strong> — our utilities handle it all without uploading your text to any server.
            </p>
            <p>
              Text manipulation is a daily task for writers, students, developers, marketers, and data analysts. Our text toolkit provides essential utilities that work instantly in your browser: count words and characters with reading time estimation, convert between various text cases for different purposes, clean up data by removing duplicates, extract structured information like emails and URLs, and compare text versions to track changes.
            </p>
            <p>
              Unlike online text processors that require uploading your content to the cloud, our tools process everything locally. This means your drafts, documents, proprietary content, and sensitive data never leave your device. You get powerful text manipulation with complete privacy—no account required, no usage limits, and no data collection.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Text Tools Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Why Choose Our Text Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Real-Time Processing</h3>
            <p className="text-sm text-muted-foreground">
              See results instantly as you type. No delays, no waiting, no page reloads.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Complete Privacy</h3>
            <p className="text-sm text-muted-foreground">
              Your text never leaves your device. Safe for confidential documents and drafts.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
            <p className="text-sm text-muted-foreground">
              Use without internet after loading. Perfect for secure or remote environments.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">No Limits</h3>
            <p className="text-sm text-muted-foreground">
              Process any amount of text. No character limits, usage caps, or restrictions.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases by Profession Section */}
      <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Who Uses Our Text Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Writers & Bloggers</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Track word count for articles</li>
              <li>• Check reading time estimates</li>
              <li>• Format titles consistently</li>
              <li>• Compare draft versions</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
              <CaseUpper className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Students & Academics</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Meet essay word requirements</li>
              <li>• Format citations properly</li>
              <li>• Check character limits</li>
              <li>• Clean up research data</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
              <Hash className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Developers</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Convert variable naming cases</li>
              <li>• Compare code versions</li>
              <li>• Extract URLs from logs</li>
              <li>• Clean data exports</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Marketers</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Extract emails from documents</li>
              <li>• Clean contact lists</li>
              <li>• Count social media characters</li>
              <li>• Format campaign text</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Data Analysts</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Remove duplicate entries</li>
              <li>• Extract structured data</li>
              <li>• Normalize text formats</li>
              <li>• Clean imported data</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
              <ScrollText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Editors</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Compare document versions</li>
              <li>• Check word counts</li>
              <li>• Format consistency</li>
              <li>• Track changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Tool Overview Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Complete Text Tool Collection
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Each tool is designed for specific text manipulation tasks, with features that save time 
          and ensure accuracy. No accounts, no limits, complete privacy.
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-teal-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {toolIcons[tool.slug] || <Type className="w-6 h-6" />}
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

      {/* Word Count Standards Section */}
      <section className="bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl p-8 md:p-12 border border-teal-500/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Common Word Count Requirements
        </h2>
        <p className="text-muted-foreground mb-8">
          Different platforms and purposes have specific length requirements. Here's a quick reference guide:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Platform/Purpose</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Limit</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Use Case</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">Twitter/X Post</td>
                <td className="py-4 px-4">280 characters</td>
                <td className="py-4 px-4">Social media updates</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">Instagram Caption</td>
                <td className="py-4 px-4">2,200 characters</td>
                <td className="py-4 px-4">Photo descriptions</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">SEO Meta Description</td>
                <td className="py-4 px-4">150-160 characters</td>
                <td className="py-4 px-4">Search results snippet</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">Google Ads Headline</td>
                <td className="py-4 px-4">30 characters</td>
                <td className="py-4 px-4">Advertisement headlines</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">College Essay</td>
                <td className="py-4 px-4">500-650 words</td>
                <td className="py-4 px-4">Common App essays</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-foreground">Blog Post (Optimal)</td>
                <td className="py-4 px-4">1,500-2,500 words</td>
                <td className="py-4 px-4">SEO-friendly articles</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Tip:</strong> Use our 
            <Link href="/tools/word-counter" className="text-primary hover:underline"> Word Counter</Link> to 
            track your text against these limits in real-time. The reading time estimate helps you understand 
            how long your content takes to consume.
          </p>
        </div>
      </section>

      {/* Text Case Guide Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Text Case Conversion Guide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-3 border-b border-border">
              <h3 className="font-semibold text-foreground">Writing & Publishing Cases</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">UPPERCASE</code>
                <p className="text-sm text-muted-foreground mt-1">FOR HEADLINES, BUTTONS, AND EMPHASIS</p>
              </div>
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">lowercase</code>
                <p className="text-sm text-muted-foreground mt-1">for informal writing and aesthetics</p>
              </div>
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">Title Case</code>
                <p className="text-sm text-muted-foreground mt-1">For Book Titles, Article Headlines, And Proper Nouns</p>
              </div>
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">Sentence case</code>
                <p className="text-sm text-muted-foreground mt-1">For standard sentences and paragraphs. First letter capitalized.</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-3 border-b border-border">
              <h3 className="font-semibold text-foreground">Programming Cases</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">camelCase</code>
                <p className="text-sm text-muted-foreground mt-1">javaScriptVariableName — Used in JavaScript, Java</p>
              </div>
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">PascalCase</code>
                <p className="text-sm text-muted-foreground mt-1">ClassNameExample — Used for classes in most languages</p>
              </div>
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">snake_case</code>
                <p className="text-sm text-muted-foreground mt-1">python_variable_name — Used in Python, Ruby, PHP</p>
              </div>
              <div>
                <code className="text-xs bg-muted px-2 py-1 rounded">kebab-case</code>
                <p className="text-sm text-muted-foreground mt-1">css-class-name — Used in CSS, HTML, URLs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Cleaning Tips Section */}
      <section className="bg-card border border-border rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Text Data Cleaning Workflow
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Extract Structured Data</h3>
              <p className="text-sm text-muted-foreground">
                Use <Link href="/tools/extract-emails" className="text-primary hover:underline">Email Extractor</Link> or 
                <Link href="/tools/extract-urls" className="text-primary hover:underline"> URL Extractor</Link> to pull 
                specific information from mixed text sources.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Remove Duplicates</h3>
              <p className="text-sm text-muted-foreground">
                Paste your list into <Link href="/tools/remove-duplicate-lines" className="text-primary hover:underline">Remove Duplicate Lines</Link> to 
                get a clean, unique list. Choose case-sensitive or insensitive based on your needs.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Normalize Format</h3>
              <p className="text-sm text-muted-foreground">
                Use <Link href="/tools/case-converter" className="text-primary hover:underline">Case Converter</Link> to 
                ensure consistent formatting across all entries (e.g., all lowercase emails).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Verify Count</h3>
              <p className="text-sm text-muted-foreground">
                Use <Link href="/tools/word-counter" className="text-primary hover:underline">Word Counter</Link> to 
                check the final count of lines/entries in your cleaned data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start Processing Your Text Now
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All text tools are free, private, and work instantly in your browser. 
            No registration, no limits, complete privacy. Choose a tool and streamline your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/word-counter"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Try Word Counter
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
