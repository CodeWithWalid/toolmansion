// Comprehensive content component for Developer Tools category hub
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
  Code2,
  Braces,
  Binary,
  Link as LinkIcon,
  Hash,
  Palette,
  KeyRound,
  Terminal,
  Cpu,
  Globe,
  Database
} from "lucide-react";

interface DevToolsContentProps {
  tools: ToolDefinition[];
}

// Tool icon mapping
const toolIcons: Record<string, React.ReactNode> = {
  "json-formatter": <Braces className="w-6 h-6" />,
  "base64": <Binary className="w-6 h-6" />,
  "url-encode": <LinkIcon className="w-6 h-6" />,
  "uuid-generator": <KeyRound className="w-6 h-6" />,
  "hash-generator": <Hash className="w-6 h-6" />,
  "color-picker": <Palette className="w-6 h-6" />,
};

// Extended tool descriptions for category page
const toolDescriptions: Record<string, { overview: string; useCases: string[] }> = {
  "json-formatter": {
    overview: "Format, validate, and beautify JSON data with syntax highlighting and error detection. Features collapsible tree view, minification, and real-time validation. Perfect for debugging API responses, configuration files, and data structures.",
    useCases: ["Debugging API responses", "Formatting config files", "Validating JSON schemas", "Minifying for production"]
  },
  "base64": {
    overview: "Encode text or binary files to Base64 format, or decode Base64 back to original content. Supports drag-and-drop file encoding, image preview for Base64 data URIs, and批量 processing. Essential for embedding images in CSS/HTML and API data transmission.",
    useCases: ["Embedding images in HTML/CSS", "API data encoding", "Binary data in JSON", "Data URI generation"]
  },
  "url-encode": {
    overview: "Encode special characters for safe URL transmission, or decode percent-encoded URLs back to readable format. Handles UTF-8 characters, query strings, and full URLs. Critical for web development when passing data in URLs or API parameters.",
    useCases: ["Query string encoding", "API parameter handling", "Special character URLs", "Form data encoding"]
  },
  "uuid-generator": {
    overview: "Generate cryptographically secure UUID v4 identifiers for database keys, session tokens, and unique identifiers. Supports bulk generation up to 1000 UUIDs at once with copy-to-clipboard and download options. Uses Web Crypto API for true randomness.",
    useCases: ["Database primary keys", "API session tokens", "Unique file names", "Distributed system IDs"]
  },
  "hash-generator": {
    overview: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes for text and files. Useful for checksums, password hashing (with salt), data integrity verification, and blockchain development. Supports file hashing for verifying downloads.",
    useCases: ["File checksums", "Data integrity verification", "Password hashing", "Blockchain development"]
  },
  "color-picker": {
    overview: "Professional color picker with HEX, RGB, HSL, and CSS color format conversion. Includes color harmonies (complementary, triadic), shade/tint generation, and CSS custom property support. Perfect for frontend development and design systems.",
    useCases: ["CSS color values", "Design system colors", "Color harmonies", "Accessibility testing"]
  },
};

// FAQ data for Developer Tools category
export const devToolsFAQ = [
  {
    question: "Why use browser-based developer tools instead of CLI or desktop apps?",
    answer: "Browser-based tools offer instant accessibility across any device without installation. They're perfect for quick tasks when you don't have your development environment set up, working on client machines, or collaborating with team members. Unlike cloud-based alternatives, our tools process everything locally, ensuring your code and data never leaves your device—critical when working with proprietary code, API keys, or sensitive data structures."
  },
  {
    question: "Are these developer tools free for commercial use?",
    answer: "Yes, all our developer tools are completely free for both personal and commercial use. There are no licensing fees, attribution requirements, or usage limits. Use them in your professional projects, client work, or enterprise applications without any restrictions. The tools are supported by non-intrusive advertising that doesn't compromise your workflow."
  },
  {
    question: "Can I use these tools without an internet connection?",
    answer: "Absolutely! Once you load a tool page, you can disconnect from the internet and continue using it indefinitely. This is particularly useful when working in secure environments, on airplanes, or in areas with poor connectivity. All processing happens in your browser using JavaScript, so no server connection is required after the initial page load."
  },
  {
    question: "Is my code or data stored when using these tools?",
    answer: "No. We have a strict privacy-first policy: absolutely no code, data, or generated values are transmitted to our servers or stored anywhere. Everything is processed using client-side JavaScript in your browser's memory. Once you close the tab or navigate away, all data is automatically cleared. This makes our tools safe for processing proprietary code, API keys, passwords, and sensitive data structures."
  },
  {
    question: "How accurate are the UUIDs and random values generated?",
    answer: "Our UUID generator and password generator use the Web Crypto API, which provides cryptographically secure random number generation. This is the same level of randomness used by operating systems for security purposes. UUIDs are version 4 (random) and follow RFC 4122 specifications. The randomness is suitable for security tokens, session IDs, and production database keys."
  },
  {
    question: "What programming languages and formats are supported?",
    answer: "Our JSON Formatter supports standard JSON (RFC 8259) with syntax highlighting and validation. The Base64 tool handles standard Base64 encoding/decoding (RFC 4648) with URL-safe variant support. URL encoding follows RFC 3986 standards. Hash generation supports MD5, SHA-1, SHA-256, and SHA-512 (FIPS 180 standards). These cover the vast majority of web development, API integration, and data processing needs."
  },
  {
    question: "Can I integrate these tools into my workflow or IDE?",
    answer: "While we don't offer direct IDE plugins, you can bookmark frequently used tools for quick access. Many developers keep our tools open in a separate browser window or tab while coding. The offline capability means you can use them even in restricted network environments. For automated workflows, consider using native CLI tools or build scripts that accomplish similar functions."
  },
  {
    question: "Which hash algorithm should I use for my project?",
    answer: "For security-critical applications like password hashing, use SHA-256 or SHA-512. Avoid MD5 and SHA-1 for security purposes as they have known vulnerabilities. For file checksums and data integrity verification, any algorithm works—MD5 is fastest but SHA-256 provides better collision resistance. For blockchain or cryptocurrency work, SHA-256 is the standard. For password storage, always use a proper password hashing function like bcrypt, argon2, or PBKDF2 with salt, not raw SHA hashes."
  }
];

export function DevToolsContent({ tools }: DevToolsContentProps) {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Free Developer Tools — JSON Formatter, Base64, UUID Generator & More
          </h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p className="text-lg">
              Welcome to ToolMansion's comprehensive suite of <strong className="text-foreground">free browser-based developer tools</strong>. 
              Whether you're debugging API responses with our <strong className="text-foreground">JSON formatter</strong>, 
              encoding data with <strong className="text-foreground">Base64</strong>, generating <strong className="text-foreground">UUIDs</strong> for your database, 
              or calculating <strong className="text-foreground">cryptographic hashes</strong> — our utilities provide professional-grade functionality without ever sending your code to a server.
            </p>
            <p>
              Modern web development requires constant data transformation: formatting JSON from APIs, encoding binary data for transmission, generating unique identifiers, and verifying data integrity through hashing. Our developer toolkit handles these tasks instantly in your browser, eliminating the need to install CLI tools, open terminal windows, or use cloud-based services that expose your code to third parties.
            </p>
            <p>
              Our suite includes 6 specialized tools designed for everyday development tasks: JSON Formatter for debugging and beautification, Base64 Encoder/Decoder for data transformation, URL Encoder/Decoder for web-safe strings, UUID Generator for unique identifiers, Hash Generator for checksums and security, and Color Picker for frontend styling. Each tool is optimized for speed, accuracy, and complete privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Developers Choose Us Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Why Developers Choose Our Browser-Based Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Zero Setup</h3>
            <p className="text-sm text-muted-foreground">
              No installation, no dependencies, no configuration. Open and start using immediately on any device.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Code Privacy</h3>
            <p className="text-sm text-muted-foreground">
              Your code never leaves your machine. Safe for proprietary code, API keys, and sensitive data.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Instant Results</h3>
            <p className="text-sm text-muted-foreground">
              Real-time processing with no server latency. See changes immediately as you type.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
            <p className="text-sm text-muted-foreground">
              Use in air-gapped environments. Perfect for secure development or travel.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Workflow Section */}
      <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Common Developer Workflows
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">API Development</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Debug API responses with the JSON Formatter. Validate structure, minify for production, or pretty-print for debugging.
            </p>
            <Link href="/tools/json-formatter" className="text-sm text-primary hover:underline">
              Try JSON Formatter →
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Web Integration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Encode data for URLs with URL Encoder. Handle special characters in query strings and API parameters safely.
            </p>
            <Link href="/tools/url-encode" className="text-sm text-primary hover:underline">
              Try URL Encoder →
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Data Encoding</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Convert binary data to Base64 for embedding in JSON, HTML, or CSS. Decode Base64 strings back to original format.
            </p>
            <Link href="/tools/base64" className="text-sm text-primary hover:underline">
              Try Base64 Tool →
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">ID Generation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Generate UUIDs for database records, session tokens, or unique identifiers. Bulk generation supported.
            </p>
            <Link href="/tools/uuid-generator" className="text-sm text-primary hover:underline">
              Try UUID Generator →
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Security & Integrity</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Generate SHA-256 hashes for file verification, checksums, and data integrity. Compare file versions.
            </p>
            <Link href="/tools/hash-generator" className="text-sm text-primary hover:underline">
              Try Hash Generator →
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Frontend Styling</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Pick colors and convert between HEX, RGB, HSL formats. Generate color harmonies and accessible palettes.
            </p>
            <Link href="/tools/color-picker" className="text-sm text-primary hover:underline">
              Try Color Picker →
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Tool Overview Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Developer Tool Collection
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Each tool is crafted for professional developers, with features you'd expect from desktop software 
          but with the convenience of instant browser access. No accounts, no limits, complete privacy.
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {toolIcons[tool.slug] || <Code2 className="w-6 h-6" />}
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

      {/* Technical Standards Section */}
      <section className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl p-8 md:p-12 border border-blue-500/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Standards & Specifications
        </h2>
        <p className="text-muted-foreground mb-8">
          Our tools implement industry-standard specifications to ensure compatibility with your projects:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Braces className="w-5 h-5 text-blue-500" />
              JSON (RFC 8259)
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Standard JSON syntax validation</li>
              <li>• Unicode support (UTF-8)</li>
              <li>• Large number handling</li>
              <li>• Pretty-print and minify modes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Binary className="w-5 h-5 text-blue-500" />
              Base64 (RFC 4648)
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Standard and URL-safe alphabets</li>
              <li>• Padding handling</li>
              <li>• Binary file encoding</li>
              <li>• Data URI generation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-blue-500" />
              UUID (RFC 4122)
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Version 4 (random) UUIDs</li>
              <li>• Cryptographically secure generation</li>
              <li>• Standard and compact formats</li>
              <li>• Bulk generation support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-500" />
              Hash Algorithms (FIPS 180)
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• MD5, SHA-1, SHA-256, SHA-512</li>
              <li>• File and text hashing</li>
              <li>• Hexadecimal output</li>
              <li>• Streaming for large files</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Real-World Usage Examples
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-2 border-b border-border">
              <span className="text-sm font-medium text-foreground">API Response Debugging</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Paste messy API responses into our JSON Formatter to instantly identify structure issues:
              </p>
              <pre className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground overflow-x-auto">
{`// Before: Unreadable one-liner
{"user":{"id":123,"name":"John","email":"john@example.com","roles":["admin","editor"],"metadata":{"created":"2024-01-15","lastLogin":"2024-02-01"}}}

// After: Formatted with syntax highlighting
{
  "user": {
    "id": 123,
    "name": "John",
    "email": "john@example.com",
    "roles": ["admin", "editor"],
    "metadata": {
      "created": "2024-01-15",
      "lastLogin": "2024-02-01"
    }
  }
}`}
              </pre>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-2 border-b border-border">
              <span className="text-sm font-medium text-foreground">Data Encoding for APIs</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Encode binary data for JSON APIs or embed images directly in CSS:
              </p>
              <pre className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground overflow-x-auto">
{`// Embed small image in CSS
.icon {
  background-image: url('data:image/png;base64,iVBORw0KGgo...');
}

// Send binary data in JSON
{
  "filename": "document.pdf",
  "content": "JVBERi0xLjQKJcOkw7zDtsO...",
  "encoding": "base64"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Security Note Section */}
      <section className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Security Best Practices
            </h3>
            <p className="text-muted-foreground mb-4">
              While our tools process everything locally, follow these guidelines when working with sensitive data:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Verify HTTPS:</strong> Always check for the secure lock icon before entering sensitive data</li>
              <li>• <strong className="text-foreground">Clear clipboard:</strong> Copy-paste operations store data in clipboard history</li>
              <li>• <strong className="text-foreground">Close when done:</strong> Close the tab after processing API keys or passwords</li>
              <li>• <strong className="text-foreground">Use offline mode:</strong> Disconnect internet for air-gapped security</li>
              <li>• <strong className="text-foreground">Prefer hashing:</strong> Never store raw passwords; use proper hashing algorithms with salt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start Coding Smarter Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All developer tools are free, private, and work instantly in your browser. 
            No registration, no installation, no limits. Choose a tool and boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/json-formatter"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Braces className="w-5 h-5" />
              Try JSON Formatter
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
