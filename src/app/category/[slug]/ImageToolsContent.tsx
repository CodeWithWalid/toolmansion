// Comprehensive content component for Image Tools category hub
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
  Image,
  Minimize2,
  Crop,
  RefreshCw,
  Layers,
  Stamp,
  FileImage,
  Trash2,
  Maximize2,
  RotateCw
} from "lucide-react";

interface ImageToolsContentProps {
  tools: ToolDefinition[];
}

// Tool icon mapping
const toolIcons: Record<string, React.ReactNode> = {
  "convert-image": <RefreshCw className="w-6 h-6" />,
  "resize-image": <Maximize2 className="w-6 h-6" />,
  "crop-image": <Crop className="w-6 h-6" />,
  "compress-image-to-size": <Minimize2 className="w-6 h-6" />,
  "bulk-compress-images": <Layers className="w-6 h-6" />,
  "rotate-flip-image": <RotateCw className="w-6 h-6" />,
  "watermark-image": <Stamp className="w-6 h-6" />,
  "remove-exif": <Trash2 className="w-6 h-6" />,
  "webp-to-jpg": <FileImage className="w-6 h-6" />,
};

// Extended tool descriptions for category page
const toolDescriptions: Record<string, { overview: string; useCases: string[] }> = {
  "convert-image": {
    overview: "Convert between JPG, PNG, WebP, and GIF formats instantly. Batch convert multiple files at once with our ZIP download feature. Perfect for web optimization and cross-platform compatibility.",
    useCases: ["Web developers optimizing images", "Social media content creators", "Photographers sharing work online"]
  },
  "resize-image": {
    overview: "Resize images to exact pixel dimensions with intelligent aspect ratio preservation. Includes presets for Instagram, Twitter, Facebook, and LinkedIn to ensure your images look perfect on every platform.",
    useCases: ["Social media managers", "E-commerce product photos", "Profile picture updates"]
  },
  "crop-image": {
    overview: "Precise cropping with visual grid overlays including Rule of Thirds and Golden Ratio. Crop to exact dimensions or freehand for creative control over your image composition.",
    useCases: ["Photography composition", "Banner and header creation", "Focus on specific subjects"]
  },
  "compress-image-to-size": {
    overview: "Smart compression that targets exact file sizes (KB or MB). Our algorithm automatically adjusts quality settings to hit your target size while preserving as much visual quality as possible.",
    useCases: ["Email attachments under limits", "Website speed optimization", "Form upload requirements"]
  },
  "bulk-compress-images": {
    overview: "Process dozens of images simultaneously with uniform quality settings. Ideal for preparing large photo collections for web galleries or reducing storage space.",
    useCases: ["Website image galleries", "Portfolio preparation", "Batch photo processing"]
  },
  "rotate-flip-image": {
    overview: "Fix orientation issues with 90° rotation and horizontal/vertical flipping. Correct photos that appear sideways or upside down from camera sensors.",
    useCases: ["Fixing camera orientation", "Mirror image creation", "Artistic effects"]
  },
  "watermark-image": {
    overview: "Protect your intellectual property by adding text or image watermarks. Customize position, opacity, size, and rotation to create branded images that can't be easily stolen.",
    useCases: ["Photographer portfolio protection", "Brand content creation", "Copyright marking"]
  },
  "remove-exif": {
    overview: "Strip all metadata including GPS location, camera information, and timestamps from your images. Essential for privacy before sharing photos online.",
    useCases: ["Privacy protection before sharing", "Removing location data", "Social media safety"]
  },
  "webp-to-jpg": {
    overview: "Convert modern WebP images to universally compatible JPG format. Ensures your images can be viewed on older browsers and devices that don't support WebP.",
    useCases: ["Cross-browser compatibility", "Legacy system support", "Universal image sharing"]
  },
};

// FAQ data for Image Tools category
export const imageToolsFAQ = [
  {
    question: "What makes browser-based image tools better than desktop software?",
    answer: "Browser-based image tools offer several advantages: instant access without installation, works on any device (Windows, Mac, Linux, mobile), automatic updates, and most importantly for privacy-conscious users—your images never leave your device. Unlike cloud-based tools, we don't upload your files to servers, making them completely private and secure."
  },
  {
    question: "Are these image tools completely free to use?",
    answer: "Yes, all our image tools are 100% free with no hidden costs, watermarks, or usage limits. We believe privacy-focused tools should be accessible to everyone. The service is supported by non-intrusive advertisements that don't compromise your experience or privacy."
  },
  {
    question: "Can I use these tools without an internet connection?",
    answer: "Absolutely! Once you load the page, our tools work entirely offline. After the initial page load, you can disconnect from the internet and continue processing images. This is perfect for working on sensitive documents or when you have limited connectivity."
  },
  {
    question: "What image formats are supported?",
    answer: "Our tools support all major image formats including JPG/JPEG, PNG, WebP, and GIF. You can convert between these formats, and most tools accept any of these formats as input. For specialized formats like RAW or TIFF, we recommend converting to JPG or PNG first."
  },
  {
    question: "Is there a limit on file size or number of images?",
    answer: "Since everything processes locally in your browser, the main limitation is your device's memory (RAM). For single images, most modern devices can handle files up to 50MB. For batch processing, you can typically process 20-50 images at once depending on their size and your device's capabilities."
  },
  {
    question: "How do you ensure my images stay private?",
    answer: "Our privacy guarantee is built on our technical architecture: all image processing happens using JavaScript Web APIs directly in your browser. Your files are never transmitted to our servers or any third party. We don't store, view, or have access to any images you process. Once you close the page, all data is cleared from memory."
  },
  {
    question: "Which tool should I use for website optimization?",
    answer: "For website optimization, we recommend a three-step process: First, use the Image Converter to convert to WebP format for the smallest file size. Second, use the Resize Image tool to ensure dimensions match your layout needs (don't serve 4000px images for 800px spaces). Finally, use the Compress Image tool to fine-tune quality vs. file size. This combination typically reduces image file sizes by 70-90% while maintaining visual quality."
  },
  {
    question: "Can I process images for commercial use?",
    answer: "Yes, you own all rights to images processed through our tools. We claim no ownership or rights to your content. Whether you're a professional photographer, designer, or business owner, you can freely use images processed here for commercial projects, client work, or products."
  }
];

export function ImageToolsContent({ tools }: ImageToolsContentProps) {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Free Browser-Based Image Tools — 100% Private & Offline
          </h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p className="text-lg">
              Welcome to the most comprehensive collection of free online image tools. Whether you need to 
              <strong className="text-foreground"> convert image formats</strong>, 
              <strong className="text-foreground"> resize photos</strong>, 
              <strong className="text-foreground"> compress files</strong>, or 
              <strong className="text-foreground"> protect your privacy</strong> — our browser-based utilities handle it all without ever uploading your files to a server.
            </p>
            <p>
              Unlike traditional online image editors that require uploading your photos to the cloud, ToolMansion's image tools process everything locally in your browser using modern Web APIs. This means your sensitive photos, personal screenshots, and confidential documents never leave your device. You get the convenience of online tools with the privacy of desktop software.
            </p>
            <p>
              Our suite includes 9 specialized image tools covering every common task: format conversion between JPG, PNG, WebP, and GIF; precise resizing with social media presets; smart compression to target file sizes; batch processing for efficiency; cropping with composition guides; rotation and flipping; watermark protection; and metadata removal for privacy. Each tool is designed to be intuitive while offering the advanced features professionals need.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Browser-Based Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Why Choose Our Browser-Based Image Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              Your images never leave your device. No server uploads means complete privacy and security for sensitive photos.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
            <p className="text-sm text-muted-foreground">
              Once loaded, disconnect from the internet and keep processing. Perfect for sensitive documents or travel.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              No upload/download delays. Processing happens instantly on your device using optimized Web APIs.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Completely Free</h3>
            <p className="text-sm text-muted-foreground">
              No watermarks, no usage limits, no registration required. Use all tools as much as you need.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Tool Overview Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Complete Image Tool Collection
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Explore our suite of 9 specialized image tools. Each tool is designed for a specific purpose, 
          with advanced features typically found only in expensive desktop software. Click any tool to try it instantly.
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    {toolIcons[tool.slug] || <Image className="w-6 h-6" />}
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
          Popular Use Cases for Our Image Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm">📸</span>
              </div>
              Photographers & Creatives
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Batch convert RAW exports to web-ready JPGs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Add watermarks to protect portfolio images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Remove EXIF data before client delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Crop to specific aspect ratios for prints</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm">💼</span>
              </div>
              Web Developers & Marketers
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Compress images to improve page speed scores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Convert to WebP for modern browsers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Resize hero images to exact dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Optimize thumbnails for product galleries</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm">📱</span>
              </div>
              Social Media Managers
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Resize to platform-specific dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Compress to meet upload size limits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Add branded watermarks to content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Batch process weekly content calendars</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm">🔒</span>
              </div>
              Privacy-Conscious Users
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Strip GPS location from photos before sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Remove metadata that reveals camera info</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Process sensitive documents offline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Avoid cloud services that store your files</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Format Comparison Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Image Format Guide: When to Use Each Format
        </h2>
        <p className="text-muted-foreground mb-8">
          Understanding image formats helps you choose the right tool for your needs. 
          Here's when to use each format for optimal results:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Format</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Best For</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">File Size</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Transparency</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">JPG/JPEG</td>
                <td className="py-4 px-4">Photographs, complex images with many colors</td>
                <td className="py-4 px-4">Small to Medium</td>
                <td className="py-4 px-4">❌ No</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">PNG</td>
                <td className="py-4 px-4">Graphics, logos, images needing transparency</td>
                <td className="py-4 px-4">Large</td>
                <td className="py-4 px-4">✅ Yes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 px-4 font-medium text-foreground">WebP</td>
                <td className="py-4 px-4">Web images (best compression + quality)</td>
                <td className="py-4 px-4">Smallest</td>
                <td className="py-4 px-4">✅ Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-foreground">GIF</td>
                <td className="py-4 px-4">Simple animations, small icons</td>
                <td className="py-4 px-4">Small (limited colors)</td>
                <td className="py-4 px-4">✅ Yes (1-bit)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Pro Tip:</strong> For website optimization, 
            use our <Link href="/tools/convert-image" className="text-primary hover:underline">Image Converter</Link> to 
            create WebP versions for modern browsers, with JPG fallbacks for older ones. 
            This typically reduces image file sizes by 25-35% compared to JPG alone.
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Recommended Image Optimization Workflow
        </h2>
        <p className="text-muted-foreground mb-8">
          Follow this proven workflow to optimize images for web or sharing. 
          This process typically reduces file sizes by 70-90% while maintaining visual quality:
        </p>
        
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: "Resize to Required Dimensions",
              desc: "Don't serve 4000px images for 800px spaces. Use our Image Resizer to match your actual display size.",
              tool: "/tools/resize-image"
            },
            {
              step: 2,
              title: "Choose the Right Format",
              desc: "Convert to WebP for maximum compression. Use PNG only if you need transparency. Keep JPG for maximum compatibility.",
              tool: "/tools/convert-image"
            },
            {
              step: 3,
              title: "Compress to Target Size",
              desc: "Use Compress Image to hit specific file size targets (e.g., under 100KB for web images).",
              tool: "/tools/compress-image-to-size"
            },
            {
              step: 4,
              title: "Remove Metadata (Optional)",
              desc: "Strip EXIF data to remove GPS location, camera info, and reduce file size further.",
              tool: "/tools/remove-exif"
            }
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div className="flex-1 pb-6 border-l-2 border-border ml-5 pl-6 -ml-5 last:border-0 last:pb-0">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                <Link 
                  href={item.tool} 
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Try the tool <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start Processing Your Images Now
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All tools are free, private, and work instantly in your browser. 
            No registration, no watermarks, no limits. Choose a tool above or browse all our image utilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/convert-image"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try Image Converter
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
