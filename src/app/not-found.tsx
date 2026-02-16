import Link from 'next/link'
import { Metadata } from 'next'
import { Search, Home, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | ToolMansion',
  description: 'The page you are looking for could not be found. Browse our free browser-based tools for images, PDFs, and developers.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  const popularTools = [
    { name: 'Image Converter', href: '/tools/convert-image', icon: '🖼️' },
    { name: 'Image Resizer', href: '/tools/resize-image', icon: '📐' },
    { name: 'PDF Merger', href: '/tools/merge-pdf', icon: '📄' },
    { name: 'JSON Formatter', href: '/tools/json-formatter', icon: '💻' },
  ]

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
          <Search className="w-12 h-12 text-muted-foreground" />
        </div>

        {/* Error Code */}
        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have vanished into thin air. 
          But don&apos;t worry, our tools are still here and ready to use!
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors font-medium"
          >
            <Wrench className="w-5 h-5" />
            Browse All Tools
          </Link>
        </div>

        {/* Popular Tools Section */}
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-semibold mb-4">Popular Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col items-center p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <span className="text-3xl mb-2">{tool.icon}</span>
                <span className="text-sm font-medium">{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <p className="text-sm text-muted-foreground mt-8">
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-primary hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
