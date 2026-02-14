// Tool Registry - Single Source of Truth

export interface FAQ {
  q: string;
  a: string;
}

export interface SEO {
  title: string;
  h1?: string;
  metaDescription: string;
  faq: FAQ[];
}

export interface ToolDefinition {
  name: string;
  slug: string;
  category: string;
  description: string;
  status: 'Live' | 'ComingSoon';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  featured: boolean;
  relatedTools: string[];
  seo: SEO;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'image',
    name: 'Image Tools',
    description: 'Convert, resize, crop, compress and transform images directly in your browser',
    icon: '🖼️',
  },
  {
    slug: 'pdf',
    name: 'PDF Tools',
    description: 'Merge, split, and convert PDF files without uploading to any server',
    icon: '📄',
  },
  {
    slug: 'text',
    name: 'Text Tools',
    description: 'Word counting, case conversion, and text extraction utilities',
    icon: '📝',
  },
  {
    slug: 'dev',
    name: 'Developer Tools',
    description: 'JSON formatting, encoding/decoding, and other developer utilities',
    icon: '💻',
  },
  {
    slug: 'generators',
    name: 'Generators',
    description: 'Generate QR codes, passwords, UUIDs and more',
    icon: '⚡',
  },
];

export const TOOLS: ToolDefinition[] = [
  // === IMAGE TOOLS ===
  {
    name: 'Convert Image',
    slug: 'convert-image',
    category: 'image',
    description: 'Instantly convert images between JPG, PNG, and WebP directly in your browser. No uploads, no servers, no tracking — even for batch conversions.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['convert', 'jpg', 'png', 'webp', 'image format', 'batch'],
    featured: true,
    relatedTools: ['resize-image', 'crop-image', 'compress-image-to-size'],
    seo: {
      title: 'Convert Image Offline - No Upload Required | Free Tool',
      h1: 'Convert Images to JPG, PNG, or WebP — 100% Private & Offline',
      metaDescription: 'Convert images between JPG, PNG, and WebP formats instantly in your browser. 100% client-side, no files uploaded. Batch conversion supported.',
      faq: [
        { q: 'Is this image converter safe for sensitive images?', a: 'Yes. Unlike other sites, this tool runs 100% in your browser. Your images never leave your device, making it safe for sensitive documents and personal photos.' },
        { q: 'What’s the difference between JPG, PNG, and WebP?', a: 'JPG is best for photos (smaller size). PNG is best for graphics with transparency. WebP offers the best balance of small size and high quality for the web.' },
        { q: 'Does converting reduce image quality?', a: 'It depends on your settings. Converting to WebP or JPG at 100% quality preserves most detail. You can adjust the quality slider to find the right balance.' },
        { q: 'Can I convert multiple images at once?', a: 'Yes, enable "Batch Mode" to process dozens of images instantly and download them as a single ZIP file.' },
        { q: 'Why use this tool instead of a cloud converter?', a: 'Cloud converters require uploading files, which is slower and risks privacy. This tool is instant, works offline, and guarantees your data stays private.' },
      ],
    },
  },
  {
    name: 'Resize Image',
    slug: 'resize-image',
    category: 'image',
    description: 'Resize images to exact pixel dimensions with aspect ratio control and ready-made presets for social media — all processed locally in your browser.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['resize', 'scale', 'dimensions', 'social media', 'avatar'],
    featured: true,
    relatedTools: ['convert-image', 'crop-image', 'compress-image-to-size'],
    seo: {
      title: 'Resize Image Locally - Private & Fast | Free Tool',
      h1: 'Resize Images to Exact Dimensions — Private & Offline',
      metaDescription: 'Resize images to exact dimensions or percentage without uploading. Secure client-side processing works offline.',
      faq: [
        { q: 'Does resizing reduce image quality?', a: 'It depends. Scaling down (making smaller) usually maintains quality. Scaling up (making larger) can cause pixelation, but our "Prevent Upscaling" feature helps avoid this.' },
        { q: 'What image size should I use for social media?', a: 'We include built-in presets for Instagram (1080x1080), Twitter Header (1500x500), and more. Just select a preset to get the perfect size.' },
        { q: 'Can I resize images without uploading them?', a: 'Yes! This tool runs entirely in your browser. Your photos are never sent to a server, ensuring 100% privacy.' },
        { q: 'Can I maintain the aspect ratio while resizing?', a: 'Yes, the "Lock Aspect" button is enabled by default to keep your images from looking stretched or squashed.' },
        { q: 'What formats can I resize?', a: 'You can resize JPG, PNG, and WebP images and save them in any of these formats.' },
      ],
    },
  },
  {
    name: 'Crop Image',
    slug: 'crop-image',
    category: 'image',
    description: 'Crop images precisely using aspect ratio presets and grid overlays — all processed locally in your browser with no uploads.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['crop', 'trim', 'aspect ratio', 'composition'],
    featured: true,
    relatedTools: ['resize-image', 'convert-image', 'rotate-flip-image'],
    seo: {
      title: 'Crop Image - Interactive & Privacy-First | Free Tool',
      h1: 'Crop Images Precisely — Aspect Ratios, Grids & Full Privacy',
      metaDescription: 'Crop images with presets or freehand. All processing happens in your browser for maximum privacy. No upload needed.',
      faq: [
        { q: 'What’s the difference between cropping and resizing?', a: 'Cropping removes parts of an image to change its composition or aspect ratio. Resizing changes the pixel dimensions of the entire image without removing anything.' },
        { q: 'Can I crop images without losing quality?', a: 'Yes. Cropping itself does not reduce quality. However, if you crop a small area and then enlarge it, it may look pixelated. Always start with the highest quality image possible.' },
        { q: 'Which aspect ratio should I use for social media?', a: 'Use 1:1 for Instagram posts, 9:16 for Stories/Reels, and 16:9 for YouTube thumbnails or landscape photos.' },
        { q: 'Is cropping done in my browser?', a: 'Yes, all processing happens locally. Your images never leave your device.' },
        { q: 'Can I use a grid overlay?', a: 'Yes, the "Rule of Thirds" grid overlay is enabled by default to help you compose balanced and professional-looking shots.' },
      ],
    },
  },
  {
    name: 'Compress Image to Size',
    slug: 'compress-image-to-size',
    category: 'image',
    description: 'Reduce image size to an exact KB or MB target. The tool automatically adjusts quality to get as close as possible—processed entirely in your browser.',
    status: 'Live',
    difficulty: 'Medium',
    tags: ['compress', 'reduce size', 'optimize', 'file size'],
    featured: false,
    relatedTools: ['convert-image', 'bulk-compress-images', 'resize-image'],
    seo: {
      title: 'Compress Image to Specific Size (KB/MB) - Local Tool',
      h1: 'Compress Images to Exact File Size (KB or MB) — Offline & Secure',
      metaDescription: 'Compress images to a target file size (e.g., 500KB, 1MB) securely in your browser. No server uploads, works offline.',
      faq: [
        { q: 'Can I compress an image to exactly 100KB?', a: 'Yes! Just set the target size to 100KB, and the tool will automatically adjust the compression level to get your image under that limit.' },
        { q: 'Why can’t some images reach very small file sizes?', a: 'If an image has high resolution and detail, compressing it to a tiny size (like 10KB) might require too much quality loss. We recommend resizing the image first if you need it that small.' },
        { q: 'Is this better than manually adjusting quality?', a: 'Yes, because you don’t have to guess. Instead of trying "80% quality" and checking the size, you just say "Make it 500KB" and we do the math for you.' },
        { q: 'Are my images uploaded?', a: 'No, all compression happens locally in your browser. Your files stay private.' },
        { q: 'What formats are supported?', a: 'Input supports JPG, PNG, and WebP. Output can be any of these formats.' },
      ],
    },
  },
  {
    name: 'Bulk Compress Images',
    slug: 'bulk-compress-images',
    category: 'image',
    description: 'Compress multiple images in one batch using a single quality setting. All processing happens locally in your browser—no uploads required.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['bulk', 'batch', 'compress', 'optimize', 'multiple'],
    featured: false,
    relatedTools: ['compress-image-to-size', 'convert-image', 'resize-image'],
    seo: {
      title: 'Bulk Image Compressor - Batch Process Locally',
      h1: 'Bulk Compress Images at Once — Fast, Private & Offline',
      metaDescription: 'Compress multiple images at once in your browser. Fast, private batch processing with ZIP download. No server limits.',
      faq: [
        { q: 'Are images downloaded individually or as a ZIP?', a: 'To save you time, all compressed images are automatically bundled into a single ZIP file for one-click downloading.' },
        { q: 'Is bulk compression done entirely in my browser?', a: 'Yes! Unlike other bulk tools that upload your files to a server, we process everything locally. This is faster and 100% private.' },
        { q: 'How many images can I compress at once?', a: 'You can process dozens of images at once. Since it runs in your browser, performance depends on your device’s memory.' },
        { q: 'What’s the difference between this and target-size compression?', a: 'Bulk compression applies a consistent "Quality %" to all images for speed. Target-size compression tweaks each image individually to hit a specific file size (like 500KB).' },
        { q: 'Does this work offline?', a: 'Yes, once the page loads, you can disconnect from the internet and continue compressing batches of images.' },
      ],
    },
  },
  {
    name: 'Rotate & Flip Image',
    slug: 'rotate-flip-image',
    category: 'image',
    description: 'Correct wrong orientation by rotating or flipping images. Processed entirely in your browser using local image APIs — no uploads.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['rotate', 'flip', 'mirror', 'orientation'],
    featured: false,
    relatedTools: ['crop-image', 'resize-image', 'convert-image'],
    seo: {
      title: 'Rotate & Flip Image - Fix Orientation Locally',
      h1: 'Rotate or Flip Images Instantly — Fix Orientation Offline',
      metaDescription: 'Rotate images by 90° or flip them horizontally/vertically. Fixes orientation issues instantly in your browser. No server uploads.',
      faq: [
        { q: 'Why is my photo upside down or sideways?', a: 'Some devices save orientation data incorrectly. This tool lets you manually rotate the image to the correct orientation and save it that way.' },
        { q: 'Does rotating an image reduce its quality?', a: 'Rotating by 90-degree increments (90°, 180°, 270°) is generally lossless. Our tool preserves maximum quality during the transformation.' },
        { q: 'How do I mirror a selfie?', a: 'Use the "Flip Horizontal" button. This corrects photos taken with front cameras that often look "backward" like a mirror reflection.' },
        { q: 'Is the image uploaded to a server?', a: 'No. We use your browser’s canvas API to rotate the image data locally on your device.' },
        { q: 'What is the difference between rotating and flipping?', a: 'Rotating turns the image around a center point (like a clock). Flipping creates a mirror image across a line (horizontal or vertical).' },
      ],
    },
  },
  {
    name: 'Watermark Image',
    slug: 'watermark-image',
    category: 'image',
    description: 'Add text or image watermarks to protect your images.',
    status: 'Live',
    difficulty: 'Medium',
    tags: ['watermark', 'protect', 'branding', 'copyright'],
    featured: false,
    relatedTools: ['convert-image', 'resize-image', 'bulk-compress-images'],
    seo: {
      title: 'Watermark Image Offline - Protect Your Photos',
      metaDescription: 'Add text or logo watermarks to images locally. Secure processing ensures your original photos never leave your device.',
      faq: [
        { q: 'Can I add both text and image watermarks?', a: 'Yes, you can add text watermarks, image watermarks, or both.' },
        { q: 'Can I adjust watermark opacity?', a: 'Yes, opacity can be adjusted from fully transparent to fully opaque.' },
        { q: 'Where can I position the watermark?', a: 'Position watermarks in corners, center, or tile across the entire image.' },
        { q: 'Is my image uploaded?', a: 'No, all watermarking happens locally in your browser.' },
        { q: 'Can I batch watermark multiple images?', a: 'Batch watermarking will be available in a future update.' },
      ],
    },
  },
  {
    name: 'Remove EXIF Data',
    slug: 'remove-exif',
    category: 'image',
    description: 'Strip EXIF metadata from images to protect your privacy.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['exif', 'metadata', 'privacy', 'strip', 'remove'],
    featured: false,
    relatedTools: ['convert-image', 'compress-image-to-size', 'bulk-compress-images'],
    seo: {
      title: 'Remove EXIF Data Online – Free Tool (No Upload)',
      metaDescription: 'Remove EXIF and GPS location data instantly in your browser. Your photos never leave your device. Free, secure, and easy to use.',
      faq: [
        { q: 'What is EXIF data?', a: 'EXIF (Exchangeable Image File Format) data is metadata embedded in image files that contains information about how the photo was taken. This includes camera settings (ISO, aperture, shutter speed), the date and time the photo was taken, and often the GPS coordinates of where the photo was taken.' },
        { q: 'Why remove photo metadata?', a: 'Removing metadata protects your privacy by hiding where and when a photo was taken. It also reduces the file size slightly. This is especially important before sharing photos on social media or public platforms to prevent leaking your location or personal habits.' },
        { q: 'Does this remove GPS location?', a: 'Yes, this tool specifically targets and removes GPS coordinates (latitude, longitude, altitude) along with all other EXIF tags to ensure your location privacy is protected.' },
        { q: 'Is this secure?', a: 'Yes, all processing happens locally in your browser. Your photos are never uploaded to any server, so your data remains completely private and secure on your own device.' },
        { q: 'How to remove metadata from JPG?', a: 'Simply upload your JPG file, and our tool will automatically strip all EXIF metadata. You can then download the clean image.' },
      ],
    },
  },
  {
    name: 'WebP to JPG',
    slug: 'webp-to-jpg',
    category: 'image',
    description: 'Convert WebP images to JPG format for broader compatibility.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['webp', 'jpg', 'convert', 'compatibility'],
    featured: false,
    relatedTools: ['convert-image', 'compress-image-to-size', 'resize-image'],
    seo: {
      title: 'WebP to JPG Converter - Free Online Tool',
      metaDescription: 'Convert WebP images to JPG format instantly. Free browser tool, no upload required.',
      faq: [
        { q: 'Why convert WebP to JPG?', a: 'Some older software and platforms do not support WebP format. JPG has universal compatibility.' },
        { q: 'Is there quality loss?', a: 'Minimal quality loss occurs during conversion. You can adjust the JPG quality setting.' },
        { q: 'Can I convert multiple files?', a: 'Yes, batch conversion is supported with ZIP download.' },
        { q: 'What about transparency?', a: 'JPG does not support transparency. You can choose a background color for transparent areas.' },
        { q: 'Is my image uploaded?', a: 'No, all conversion happens locally in your browser.' },
      ],
    },
  },

  // === PDF TOOLS ===
  {
    name: 'JPG to PDF',
    slug: 'jpg-to-pdf',
    category: 'pdf',
    description: 'Convert one or multiple JPG images into a single PDF document.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['jpg', 'pdf', 'convert', 'document'],
    featured: false,
    relatedTools: ['merge-pdf', 'split-pdf', 'convert-image'],
    seo: {
      title: 'JPG to PDF Converter - Create PDF from Images | Free Tool',
      metaDescription: 'Convert JPG images to PDF documents. Combine multiple images into one PDF. Free browser tool.',
      faq: [
        { q: 'Can I combine multiple images into one PDF?', a: 'Yes, you can add multiple images and arrange their order before creating the PDF.' },
        { q: 'What image formats are supported?', a: 'JPG, PNG, and WebP images can be converted to PDF.' },
        { q: 'Can I adjust page size?', a: 'Yes, choose from standard sizes like A4, Letter, or Custom dimensions.' },
        { q: 'Is my data secure?', a: 'Yes, all processing happens in your browser. No files are uploaded.' },
        { q: 'Can I set PDF margins?', a: 'Yes, you can adjust margins and image positioning on each page.' },
      ],
    },
  },
  {
    name: 'Merge PDF',
    slug: 'merge-pdf',
    category: 'pdf',
    description: 'Combine multiple PDF files into a single document.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['merge', 'combine', 'pdf', 'join'],
    featured: false,
    relatedTools: ['split-pdf', 'jpg-to-pdf'],
    seo: {
      title: 'Merge PDF Files - Combine PDFs Online | Free Tool',
      metaDescription: 'Merge multiple PDF files into one document. Drag to reorder pages. Free browser tool, no upload.',
      faq: [
        { q: 'How many PDFs can I merge?', a: 'You can merge as many PDFs as your browser can handle, typically dozens of files.' },
        { q: 'Can I reorder pages?', a: 'Yes, drag and drop to reorder pages from different PDFs before merging.' },
        { q: 'Is there a file size limit?', a: 'The limit depends on your browser memory. Large files may take longer to process.' },
        { q: 'Are my files uploaded?', a: 'No, all merging happens locally in your browser.' },
        { q: 'Is the merged PDF quality affected?', a: 'No, the original quality of each PDF is preserved.' },
      ],
    },
  },
  {
    name: 'Split PDF',
    slug: 'split-pdf',
    category: 'pdf',
    description: 'Split a PDF into multiple files or extract specific pages.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['split', 'extract', 'pages', 'pdf'],
    featured: false,
    relatedTools: ['merge-pdf', 'jpg-to-pdf'],
    seo: {
      title: 'Split PDF - Extract Pages from PDF | Free Online Tool',
      metaDescription: 'Split PDF files into multiple documents or extract specific pages. Free browser tool.',
      faq: [
        { q: 'Can I extract specific pages?', a: 'Yes, select individual pages or page ranges to extract.' },
        { q: 'Can I split into equal parts?', a: 'Yes, split a PDF into equal parts by specifying the number of pages per file.' },
        { q: 'How do I download split files?', a: 'Split files are downloaded as a ZIP archive or individually.' },
        { q: 'Is my PDF uploaded anywhere?', a: 'No, all processing happens locally in your browser.' },
        { q: 'Is there a page limit?', a: 'The limit depends on your browser memory. Most PDFs process quickly.' },
      ],
    },
  },
  {
    name: 'PDF to Images',
    slug: 'pdf-to-images',
    category: 'pdf',
    description: 'Convert PDF pages to high-quality images.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['pdf', 'images', 'convert', 'extract'],
    featured: false,
    relatedTools: ['jpg-to-pdf', 'merge-pdf'],
    seo: {
      title: 'PDF to Images - Convert PDF Pages to JPG/PNG | Free Tool',
      metaDescription: 'Convert each PDF page to an image. Download as PNG or JPG. Free browser tool.',
      faq: [
        { q: 'What image formats can I export?', a: 'PNG and JPEG are supported.' },
        { q: 'Is my PDF uploaded anywhere?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },

  // === TEXT TOOLS ===
  {
    name: 'Word Counter',
    slug: 'word-counter',
    category: 'text',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['word count', 'character count', 'statistics', 'text analysis'],
    featured: false,
    relatedTools: ['case-converter', 'remove-duplicate-lines', 'extract-emails'],
    seo: {
      title: 'Word Counter - Count Words, Characters & More | Free Tool',
      metaDescription: 'Count words, characters, sentences, and paragraphs. Real-time text analysis with reading time estimate.',
      faq: [
        { q: 'What statistics are provided?', a: 'Word count, character count (with and without spaces), sentences, paragraphs, and estimated reading time.' },
        { q: 'Does it count in real-time?', a: 'Yes, statistics update instantly as you type or paste text.' },
        { q: 'Can I exclude certain words?', a: 'Currently not supported, but planned for future updates.' },
        { q: 'Is there a character limit?', a: 'No practical limit for typical text. Very large documents may slow processing.' },
        { q: 'Is my text stored anywhere?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'Case Converter',
    slug: 'case-converter',
    category: 'text',
    description: 'Convert text between uppercase, lowercase, title case, and more.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['uppercase', 'lowercase', 'title case', 'sentence case'],
    featured: false,
    relatedTools: ['word-counter', 'remove-duplicate-lines'],
    seo: {
      title: 'Case Converter - Change Text Case Online | Free Tool',
      metaDescription: 'Convert text to uppercase, lowercase, title case, sentence case, and more. Instant conversion.',
      faq: [
        { q: 'What case options are available?', a: 'UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, and kebab-case.' },
        { q: 'Can I convert code variable names?', a: 'Yes, camelCase, PascalCase, snake_case, and kebab-case are perfect for developers.' },
        { q: 'Is there a text limit?', a: 'No practical limit for typical text lengths.' },
        { q: 'Can I undo conversions?', a: 'Yes, use the undo button or paste your original text again.' },
        { q: 'Is my text stored?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'Remove Duplicate Lines',
    slug: 'remove-duplicate-lines',
    category: 'text',
    description: 'Remove duplicate lines from text, keeping unique entries only.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['duplicate', 'unique', 'lines', 'clean'],
    featured: false,
    relatedTools: ['word-counter', 'case-converter', 'extract-emails'],
    seo: {
      title: 'Remove Duplicate Lines - Dedupe Text Online | Free Tool',
      metaDescription: 'Remove duplicate lines from text instantly. Keep unique lines only. Case-sensitive or insensitive options.',
      faq: [
        { q: 'Is the comparison case-sensitive?', a: 'You can choose case-sensitive or case-insensitive duplicate detection.' },
        { q: 'Are empty lines removed?', a: 'Optionally, you can choose to trim empty lines or keep them.' },
        { q: 'Does it preserve order?', a: 'Yes, the first occurrence of each line is kept in its original position.' },
        { q: 'Can I sort the results?', a: 'Yes, optionally sort lines alphabetically after removing duplicates.' },
        { q: 'Is my text stored?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'Extract Emails',
    slug: 'extract-emails',
    category: 'text',
    description: 'Extract all email addresses from text or documents.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['extract', 'email', 'regex', 'parse'],
    featured: false,
    relatedTools: ['extract-urls', 'remove-duplicate-lines', 'word-counter'],
    seo: {
      title: 'Extract Email Addresses from Text | Free Online Tool',
      metaDescription: 'Extract all email addresses from any text. Remove duplicates and export as list. Free browser tool.',
      faq: [
        { q: 'What email formats are detected?', a: 'Standard email formats including subdomains and plus addressing are detected.' },
        { q: 'Are duplicates removed?', a: 'Optionally, duplicate email addresses can be automatically removed.' },
        { q: 'Can I export the results?', a: 'Yes, copy to clipboard or download as a text file.' },
        { q: 'Is my text analyzed on a server?', a: 'No, all extraction happens locally in your browser.' },
        { q: 'Can I extract from documents?', a: 'Paste text content from any source. PDF and Word import coming soon.' },
      ],
    },
  },
  {
    name: 'Extract URLs',
    slug: 'extract-urls',
    category: 'text',
    description: 'Extract all URLs and links from text content.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['extract', 'url', 'links', 'parse'],
    featured: false,
    relatedTools: ['extract-emails', 'remove-duplicate-lines'],
    seo: {
      title: 'Extract URLs from Text - Link Extractor | Free Tool',
      metaDescription: 'Extract all URLs and links from any text. Supports HTTP, HTTPS, and various URL formats. Free.',
      faq: [
        { q: 'What URL formats are detected?', a: 'HTTP, HTTPS, FTP URLs, and common shortlinks are detected.' },
        { q: 'Are duplicates removed?', a: 'Optionally, duplicate URLs can be automatically removed.' },
        { q: 'Can I validate the links?', a: 'URL validation is not currently supported to maintain privacy.' },
        { q: 'Can I export the results?', a: 'Yes, copy to clipboard or download as a text file.' },
        { q: 'Is my text stored?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },

  // === DEVELOPER TOOLS ===
  {
    name: 'JSON Formatter',
    slug: 'json-formatter',
    category: 'dev',
    description: 'Format, validate, and beautify JSON data with syntax highlighting.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['json', 'format', 'beautify', 'validate', 'minify'],
    featured: false,
    relatedTools: ['base64', 'url-encode'],
    seo: {
      title: 'JSON Formatter & Validator - Beautify JSON Online | Free Tool',
      metaDescription: 'Format, validate, and beautify JSON with syntax highlighting. Minify or expand. Free browser tool.',
      faq: [
        { q: 'Does it validate JSON?', a: 'Yes, invalid JSON is detected and error locations are highlighted.' },
        { q: 'Can I minify JSON?', a: 'Yes, switch between beautified (expanded) and minified (compact) views.' },
        { q: 'Is syntax highlighting available?', a: 'Yes, keys, strings, numbers, and booleans are color-coded.' },
        { q: 'Can I edit the JSON directly?', a: 'Yes, edit in the text area and re-format as needed.' },
        { q: 'Is my data stored?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'Base64 Encoder/Decoder',
    slug: 'base64',
    category: 'dev',
    description: 'Encode text to Base64 or decode Base64 to text.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['base64', 'encode', 'decode', 'binary'],
    featured: false,
    relatedTools: ['url-encode', 'json-formatter'],
    seo: {
      title: 'Base64 Encoder Decoder Online | Free Tool',
      metaDescription: 'Encode text to Base64 or decode Base64 to text instantly. Supports files and images. Free browser tool.',
      faq: [
        { q: 'What is Base64?', a: 'Base64 is an encoding scheme that represents binary data in ASCII string format.' },
        { q: 'Can I encode files?', a: 'Yes, drag and drop files to encode them as Base64 strings.' },
        { q: 'Can I decode images?', a: 'Yes, paste Base64 image data to preview and download the image.' },
        { q: 'Is there a size limit?', a: 'Large files may slow processing. Typical text and small files work instantly.' },
        { q: 'Is my data stored?', a: 'No, all encoding happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'URL Encoder/Decoder',
    slug: 'url-encode',
    category: 'dev',
    description: 'Encode or decode URL-unsafe characters for safe URL usage.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['url', 'encode', 'decode', 'percent encoding'],
    featured: false,
    relatedTools: ['base64', 'json-formatter'],
    seo: {
      title: 'URL Encoder Decoder Online | Free Tool',
      metaDescription: 'Encode or decode URLs and query strings. Handle special characters safely. Free browser tool.',
      faq: [
        { q: 'What is URL encoding?', a: 'URL encoding converts special characters to percent-encoded format safe for URLs.' },
        { q: 'When should I use this?', a: 'Use when passing special characters in URLs, query strings, or API parameters.' },
        { q: 'Does it handle unicode?', a: 'Yes, unicode characters are properly encoded to UTF-8 percent encoding.' },
        { q: 'Can I encode full URLs?', a: 'Yes, paste a complete URL to encode special characters within it.' },
        { q: 'Is my data stored?', a: 'No, all processing happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'UUID Generator',
    slug: 'uuid-generator',
    category: 'dev',
    description: 'Generate random UUIDs (v4) for unique identifiers.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['uuid', 'guid', 'unique id', 'random'],
    featured: false,
    relatedTools: ['password-generator', 'json-formatter'],
    seo: {
      title: 'UUID Generator - Generate Random UUIDs Online | Free Tool',
      metaDescription: 'Generate random UUID v4 identifiers. Bulk generation supported. Free browser tool.',
      faq: [
        { q: 'What version of UUID is generated?', a: 'Version 4 (random) UUIDs are generated using cryptographically secure random numbers.' },
        { q: 'Can I generate multiple UUIDs?', a: 'Yes, generate up to 1000 UUIDs at once and copy or download the list.' },
        { q: 'Are the UUIDs truly random?', a: 'Yes, using the Web Crypto API for cryptographically secure randomness.' },
        { q: 'What format options are available?', a: 'Standard hyphenated format or compact (no hyphens) format.' },
        { q: 'Is any data stored?', a: 'No, UUIDs are generated locally and not stored anywhere.' },
      ],
    },
  },

  // === GENERATORS ===
  {
    name: 'QR Code Generator',
    slug: 'qr-generator',
    category: 'generators',
    description: 'Generate QR codes for URLs, text, WiFi, and more.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['qr code', 'barcode', 'generate', 'wifi'],
    featured: false,
    relatedTools: ['password-generator', 'uuid-generator'],
    seo: {
      title: 'QR Code Generator - Create QR Codes Online | Free Tool',
      metaDescription: 'Generate QR codes for URLs, text, WiFi credentials, and more. Download as PNG or SVG. Free.',
      faq: [
        { q: 'What types of QR codes can I create?', a: 'URLs, plain text, WiFi credentials, vCards, email, SMS, and phone numbers.' },
        { q: 'What download formats are available?', a: 'Download as PNG for images or SVG for scalable vector graphics.' },
        { q: 'Can I customize colors?', a: 'Yes, customize foreground and background colors of the QR code.' },
        { q: 'Can I add a logo?', a: 'Logo embedding will be available in a future update.' },
        { q: 'Are QR codes stored?', a: 'No, QR codes are generated locally in your browser.' },
      ],
    },
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    category: 'generators',
    description: 'Generate strong, random passwords with customizable options.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['password', 'random', 'secure', 'generator'],
    featured: false,
    relatedTools: ['uuid-generator', 'qr-generator'],
    seo: {
      title: 'Password Generator - Create Strong Passwords | Free Tool',
      metaDescription: 'Generate strong, random passwords with customizable length and character options. Free and secure.',
      faq: [
        { q: 'How secure are the generated passwords?', a: 'Passwords are generated using cryptographically secure random numbers via Web Crypto API.' },
        { q: 'What options are available?', a: 'Customize length, include/exclude uppercase, lowercase, numbers, and special characters.' },
        { q: 'Can I generate memorable passwords?', a: 'Yes, passphrase mode generates memorable word-based passwords.' },
        { q: 'Can I generate multiple passwords?', a: 'Yes, generate multiple passwords at once and copy the list.' },
        { q: 'Are passwords stored?', a: 'No, passwords are generated locally and never transmitted or stored.' },
      ],
    },
  },
  {
    name: 'Hash Generator',
    slug: 'hash-generator',
    category: 'dev',
    description: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes for text or files.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['hash', 'md5', 'sha256', 'sha512', 'checksum'],
    featured: false,
    relatedTools: ['base64', 'password-generator'],
    seo: {
      title: 'Hash Generator - MD5, SHA-256, SHA-512 | Free Tool',
      metaDescription: 'Generate secure hashes for text and files. Supports MD5, SHA-1, SHA-256, SHA-512. Free online hash calculator.',
      faq: [
        { q: 'What hash algorithms are supported?', a: 'MD5, SHA-1, SHA-256, and SHA-512 are all supported.' },
        { q: 'Can I hash files?', a: 'Yes, upload any file to generate its hash checksums.' },
        { q: 'Are the hashes secure?', a: 'SHA-256 and SHA-512 are considered secure. MD5 and SHA-1 are not recommended for security-critical uses.' },
        { q: 'Is my data uploaded?', a: 'No, all hashing happens locally in your browser.' },
      ],
    },
  },
  {
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum',
    category: 'generators',
    description: 'Generate placeholder text for designs and mockups.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['lorem ipsum', 'placeholder', 'dummy text', 'filler'],
    featured: false,
    relatedTools: ['password-generator', 'uuid-generator'],
    seo: {
      title: 'Lorem Ipsum Generator - Placeholder Text | Free Tool',
      metaDescription: 'Generate lorem ipsum placeholder text. Customize paragraphs, sentences, or words. Free and instant.',
      faq: [
        { q: 'What types of text can I generate?', a: 'Generate paragraphs, sentences, or a specific number of words.' },
        { q: 'Can I customize the output?', a: 'Yes, choose the amount and whether to start with "Lorem ipsum...".' },
        { q: 'What is lorem ipsum used for?', a: 'It is placeholder text used in design mockups and layouts.' },
      ],
    },
  },
  {
    name: 'Color Picker',
    slug: 'color-picker',
    category: 'dev',
    description: 'Pick colors and convert between HEX, RGB, HSL formats with harmonies.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['color', 'hex', 'rgb', 'hsl', 'picker'],
    featured: false,
    relatedTools: ['hash-generator', 'base64'],
    seo: {
      title: 'Color Picker - HEX, RGB, HSL Converter | Free Tool',
      metaDescription: 'Pick colors and convert between formats. Get color harmonies and shades. Free online tool.',
      faq: [
        { q: 'What formats are supported?', a: 'HEX, RGB, RGBA, HSL, and CSS custom properties.' },
        { q: 'Can I get color harmonies?', a: 'Yes, complementary and triadic colors are shown.' },
      ],
    },
  },
  {
    name: 'Text Diff',
    slug: 'text-diff',
    category: 'text',
    description: 'Compare two texts and highlight the differences.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['diff', 'compare', 'text', 'differences'],
    featured: false,
    relatedTools: ['word-counter', 'case-converter'],
    seo: {
      title: 'Text Diff - Compare Text Online | Free Tool',
      metaDescription: 'Compare two texts side by side. See additions, deletions, and changes highlighted.',
      faq: [
        { q: 'How are differences shown?', a: 'Added lines are green, removed lines are red.' },
        { q: 'Can I compare code?', a: 'Yes, any text including code can be compared.' },
      ],
    },
  },
  {
    name: 'Markdown Preview',
    slug: 'markdown-preview',
    category: 'text',
    description: 'Write markdown and see live HTML preview.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['markdown', 'preview', 'html', 'editor'],
    featured: false,
    relatedTools: ['text-diff', 'word-counter'],
    seo: {
      title: 'Markdown Preview - Live Editor | Free Tool',
      metaDescription: 'Write and preview markdown in real-time. Export as HTML. Free online editor.',
      faq: [
        { q: 'What markdown features are supported?', a: 'Headers, bold, italic, code, links, lists, and blockquotes.' },
        { q: 'Can I export the HTML?', a: 'Yes, click Copy HTML to get the rendered HTML.' },
      ],
    },
  },
];

// Helper functions
export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(categorySlug: string): ToolDefinition[] {
  return TOOLS.filter((tool) => tool.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getFeaturedTools(): ToolDefinition[] {
  return TOOLS.filter((tool) => tool.featured);
}

export function getLiveTools(): ToolDefinition[] {
  return TOOLS.filter((tool) => tool.status === 'Live');
}

export function searchTools(query: string): ToolDefinition[] {
  const lowerQuery = query.toLowerCase();
  return TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
