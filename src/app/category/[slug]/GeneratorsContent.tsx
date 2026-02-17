// Comprehensive content component for Generators category hub
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
  QrCode,
  KeyRound,
  Hash,
  FileText,
  Smartphone,
  Wifi,
  Mail,
  Phone,
  Shield,
  Sparkles,
  Palette,
  Link as LinkIcon
} from "lucide-react";

interface GeneratorsContentProps {
  tools: ToolDefinition[];
}

// Tool icon mapping
const toolIcons: Record<string, React.ReactNode> = {
  "qr-generator": <QrCode className="w-6 h-6" />,
  "password-generator": <KeyRound className="w-6 h-6" />,
  "uuid-generator": <Hash className="w-6 h-6" />,
  "lorem-ipsum": <FileText className="w-6 h-6" />,
};

// Extended tool descriptions for category page
const toolDescriptions: Record<string, { overview: string; useCases: string[] }> = {
  "qr-generator": {
    overview: "Create custom QR codes for URLs, text, WiFi credentials, contact cards (vCards), email, SMS, and phone numbers. Customize colors, download as PNG or SVG, and choose error correction levels. Perfect for marketing materials, business cards, and contactless information sharing.",
    useCases: ["Business cards", "Marketing materials", "WiFi sharing", "Contact information"]
  },
  "password-generator": {
    overview: "Generate cryptographically secure passwords with customizable length and character sets. Options include uppercase, lowercase, numbers, and special characters. Also supports memorable passphrase generation using word lists. Uses Web Crypto API for true randomness suitable for production passwords.",
    useCases: ["Account creation", "Password updates", "Secure tokens", "API keys"]
  },
  "uuid-generator": {
    overview: "Generate RFC 4122 compliant UUID v4 identifiers using cryptographically secure random number generation. Perfect for database primary keys, session tokens, and distributed system identifiers. Supports bulk generation up to 1000 UUIDs at once with export options.",
    useCases: ["Database keys", "Session tokens", "File naming", "Distributed systems"]
  },
  "lorem-ipsum": {
    overview: "Generate placeholder text (Lorem Ipsum) for design mockups and prototypes. Customize the number of paragraphs, sentences, or words. Option to start with classic 'Lorem ipsum dolor sit amet...' or random text. Essential for designers and developers creating layouts before final content is ready.",
    useCases: ["Design mockups", "UI prototypes", "Layout testing", "Typography showcase"]
  },
};

// FAQ data for Generators category
export const generatorsFAQ = [
  {
    question: "Are the passwords and codes generated truly secure?",
    answer: "Yes, our password generator and UUID generator use the Web Crypto API, which provides cryptographically secure random number generation. This is the same security standard used by operating systems and password managers. The randomness is suitable for production passwords, security tokens, and session IDs. For passwords, we recommend using the generator with at least 12 characters including uppercase, lowercase, numbers, and symbols."
  },
  {
    question: "Can I use the generated QR codes commercially?",
    answer: "Absolutely! All QR codes generated through our tool are completely free for both personal and commercial use. There are no licensing fees, attribution requirements, or usage limits. Use them on business cards, marketing materials, product packaging, advertisements, or any other commercial application. The QR codes you create are yours to use however you see fit."
  },
  {
    question: "Is there a limit on how many items I can generate?",
    answer: "There are no artificial limits on single-item generation. For bulk operations, our UUID generator supports up to 1000 UUIDs at once, and the password generator can create multiple passwords simultaneously. For QR codes, you can generate as many as you need one at a time. Since everything processes locally in your browser, the only practical limit is your device's memory."
  },
  {
    question: "Do you store the passwords, QR codes, or UUIDs I generate?",
    answer: "No, absolutely nothing is stored. All generation happens locally in your browser using JavaScript. Generated passwords, QR codes, and UUIDs never leave your device and are not transmitted to our servers or anywhere else. Once you close the browser tab or navigate away, all generated data is automatically cleared. This ensures complete privacy and security."
  },
  {
    question: "Can I use these generators offline?",
    answer: "Yes! Once you load the generator page, you can disconnect from the internet and continue using it. This is particularly useful for generating sensitive passwords in secure environments or when you have limited connectivity. All generation algorithms run entirely in your browser without requiring server communication."
  },
  {
    question: "What types of QR codes can I create?",
    answer: "Our QR Generator supports multiple types: URLs (website links), Plain Text (any text content), WiFi Network (auto-connect credentials), Contact Cards (vCard format), Email (pre-filled email composition), Phone Numbers (direct dial), and SMS (pre-filled text messages). Each type is optimized for its specific use case with proper formatting."
  },
  {
    question: "What's the difference between random passwords and passphrases?",
    answer: "Random passwords use a mix of characters (like xK9#mP2$vL) and offer maximum security for a given length. Passphrases combine random words (like correct-horse-battery-staple) and are easier to remember while still being secure due to their length. Passphrases are great for master passwords or when you need to remember the password without a manager. Random passwords are better for machine-stored credentials."
  },
  {
    question: "Are the UUIDs generated truly unique?",
    answer: "UUID v4 (which we generate) provides 122 bits of randomness, making the probability of collision astronomically low—approximately 0.0000000000000000000000000000000000000000004% for 1 billion UUIDs. While not mathematically guaranteed, the uniqueness is sufficient for virtually all practical applications including database keys, session tokens, and distributed systems. For reference, you'd need to generate 1 billion UUIDs per second for 85 years to have a 50% chance of a single collision."
  }
];

export function GeneratorsContent({ tools }: GeneratorsContentProps) {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Free Online Generators — QR Codes, Passwords, UUIDs & More
          </h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p className="text-lg">
              Welcome to ToolMansion's collection of <strong className="text-foreground">free browser-based generators</strong>. 
              Whether you need to <strong className="text-foreground">create QR codes</strong> for your business, 
              <strong className="text-foreground"> generate secure passwords</strong>, 
              <strong className="text-foreground"> produce unique UUIDs</strong>, or 
              <strong className="text-foreground"> create placeholder text</strong> for designs — our utilities handle it all without uploading any data to servers.
            </p>
            <p>
              Generators are essential tools for modern digital work. QR codes bridge the physical and digital worlds, passwords protect our online accounts, UUIDs provide unique identifiers for databases, and placeholder text helps designers create layouts before final content is ready. Our generator suite provides all these capabilities with professional-grade security and complete privacy.
            </p>
            <p>
              All our generators work entirely in your browser using advanced JavaScript and the Web Crypto API. This means your passwords, codes, and generated data never leave your device. Whether you're a business owner creating QR codes for marketing, a developer generating database IDs, or a designer working on mockups, you can use our tools with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Use Our Generators Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Why Use Our Online Generators?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Cryptographically Secure</h3>
            <p className="text-sm text-muted-foreground">
              Uses Web Crypto API for true randomness. Suitable for production passwords and security tokens.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
            <p className="text-sm text-muted-foreground">
              Generate codes and passwords without internet. Perfect for secure environments.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Zero Data Storage</h3>
            <p className="text-sm text-muted-foreground">
              Nothing is saved or transmitted. Your generated codes exist only on your device.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Instant Results</h3>
            <p className="text-sm text-muted-foreground">
              Generate codes immediately with no waiting. Real-time preview and customization.
            </p>
          </div>
        </div>
      </section>

      {/* QR Code Types Section */}
      <section className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl p-8 md:p-12 border border-orange-500/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          QR Code Types & Use Cases
        </h2>
        <p className="text-muted-foreground mb-8">
          Our QR Generator supports multiple content types, each optimized for specific use cases:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
              <LinkIcon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Website URLs</h3>
            <p className="text-sm text-muted-foreground">
              Direct users to websites, landing pages, or specific product pages. Perfect for marketing materials and advertisements.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">WiFi Credentials</h3>
            <p className="text-sm text-muted-foreground">
              Share WiFi network name and password. Guests scan to connect automatically—no typing needed.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Contact Cards (vCard)</h3>
            <p className="text-sm text-muted-foreground">
              Share complete contact information. Scanning adds the contact directly to the phone's address book.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Composition</h3>
            <p className="text-sm text-muted-foreground">
              Pre-fill email subject and body. Scanning opens the email app with fields already populated.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
            <p className="text-sm text-muted-foreground">
              Enable one-tap calling. Perfect for business cards, support lines, and contact pages.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-500 mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Plain Text</h3>
            <p className="text-sm text-muted-foreground">
              Encode any text content. Useful for serial numbers, promo codes, or any short message.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Tool Overview Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Generator Collection
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Each generator is designed for professional use with customizable options and instant results. 
          No accounts required, no usage limits, complete privacy.
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {toolIcons[tool.slug] || <Sparkles className="w-6 h-6" />}
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

      {/* Password Security Section */}
      <section className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Password Security Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Strong Password Guidelines</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Minimum 12 characters (16+ recommended)</li>
                  <li>• Mix uppercase, lowercase, numbers, symbols</li>
                  <li>• Avoid dictionary words and personal info</li>
                  <li>• Use unique passwords for each account</li>
                  <li>• Consider passphrases for master passwords</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Password Management</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use a reputable password manager</li>
                  <li>• Enable two-factor authentication (2FA)</li>
                  <li>• Change passwords after security breaches</li>
                  <li>• Don't share passwords via email or text</li>
                  <li>• Log out of shared computers</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Remember:</strong> Even the strongest password is only as secure as how you store it. 
                Consider using a password manager like Bitwarden, 1Password, or KeePass to safely store your generated passwords.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UUID vs Sequential IDs Section */}
      <section className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl p-8 md:p-12 border border-blue-500/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          UUID vs. Sequential IDs: When to Use Each
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-500" />
              Use UUIDs When...
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You need distributed generation across multiple servers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You want to prevent enumeration attacks (IDs can't be guessed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You're merging data from multiple sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You need offline ID generation capability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You want to avoid coordination between systems</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-500" />
              Use Sequential IDs When...
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>You need human-readable, short identifiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Storage space is at a premium (UUIDs are 36 chars)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>You want natural sorting by creation time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>You're building internal/admin tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Database performance is critical (UUIDs can fragment indexes)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start Generating Now
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All generators are free, private, and work instantly in your browser. 
            No registration, no limits, complete privacy. Choose a generator and create what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/qr-generator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              <QrCode className="w-5 h-5" />
              Create QR Code
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
