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
      title: 'Image Converter - Convert JPG, PNG, WebP Offline',
      h1: 'Convert Images Between JPG, PNG & WebP — 100% Private & Offline',
      metaDescription: 'Convert images between JPG, PNG, and WebP formats instantly in your browser. No uploads, 100% private, completely free. Batch conversion supported.',
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
      title: 'Image Resizer - Resize Images to Exact Dimensions',
      h1: 'Resize Images to Exact Dimensions — Private & Offline',
      metaDescription: 'Resize images to exact pixel dimensions with aspect ratio control. Social media presets included. Works offline in your browser — no uploads, completely private.',
      faq: [
        { q: 'Does resizing reduce image quality?', a: 'Scaling down (making images smaller) generally maintains excellent quality. Scaling up (enlarging) can cause pixelation or blurriness because the tool must invent new pixels. Our "Prevent Upscaling" feature helps avoid accidentally degrading image quality. For best results, always start with the largest original image available.' },
        { q: 'What image size should I use for social media platforms?', a: 'Each platform has optimal dimensions: Instagram posts work best at 1080×1080 (square) or 1080×1350 (portrait). Instagram Stories and Reels should be 1080×1920. Facebook covers are 820×312. Twitter/X headers are 1500×500. YouTube thumbnails are 1280×720. Our tool includes presets for all major platforms.' },
        { q: 'Can I resize images without uploading them to a server?', a: 'Absolutely! ToolMansion processes all images locally in your browser using WebAssembly technology. Your photos never leave your device, ensuring complete privacy and security. This also means no waiting for uploads or downloads.' },
        { q: 'How do I maintain aspect ratio when resizing?', a: 'The "Lock Aspect Ratio" option is enabled by default. This means when you change the width, the height automatically adjusts proportionally to prevent stretching or squashing. You can unlock it if you need specific non-proportional dimensions.' },
        { q: 'What\'s the difference between resizing and cropping?', a: 'Resizing changes the overall dimensions of the entire image while keeping all content. Cropping removes portions of the image to change its shape or focus. Use resize to make an image fit specific pixel dimensions, use crop to change the composition or remove unwanted edges.' },
        { q: 'What is DPI and should I change it when resizing?', a: 'DPI (dots per inch) affects print size, not digital display. For web use, 72-96 DPI is standard. For print, 300 DPI is recommended. When resizing for screens, focus on pixel dimensions. When resizing for print, consider both pixels and DPI to ensure proper physical size.' },
        { q: 'Can I resize multiple images at once?', a: 'Yes, batch resizing is supported. Upload multiple images, set your desired dimensions or select a preset, and all images will be resized with the same settings. Download them individually or as a ZIP file.' },
        { q: 'What\'s the best size for email attachments?', a: 'Most email providers limit attachments to 10-25MB. For inline images, keep them under 1MB for fast loading. Resize large photos to 1200-1600 pixels on the longest side for email sharing. This ensures recipients can view them quickly without exceeding attachment limits.' },
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
      title: 'Image Compressor - Reduce File Size Without Losing Quality',
      h1: 'Compress Images to Exact File Size (KB or MB) — Offline & Secure',
      metaDescription: 'Compress images to reduce file size while maintaining quality. Target specific KB/MB sizes. All processing happens locally — your images never leave your device.',
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
      title: 'WebP to JPG - Convert WebP Images to JPEG',
      metaDescription: 'Convert WebP images to JPG format for broader compatibility. Batch convert multiple files. All processing happens locally — completely private.',
      faq: [
        { q: 'Why should I convert WebP images to JPG?', a: 'While WebP offers superior compression and smaller file sizes, it\'s not universally supported. Many older devices, software applications, social media platforms, email clients, and printing services don\'t support WebP. Converting to JPG ensures your images can be viewed and used everywhere. We recommend keeping both formats — WebP for your website and JPG for sharing and compatibility.' },
        { q: 'Will converting WebP to JPG reduce image quality?', a: 'Some minimal quality loss may occur because JPG uses lossy compression. However, at high quality settings (85-95%), the difference is virtually imperceptible. Our converter lets you adjust the quality slider to find the right balance between file size and visual fidelity for your specific needs.' },
        { q: 'Can I convert multiple WebP files to JPG at once?', a: 'Yes! Our batch conversion feature allows you to upload multiple WebP files and convert them all to JPG format simultaneously. You can download the converted files individually or as a single ZIP archive for convenience.' },
        { q: 'What happens to transparency when converting WebP to JPG?', a: 'JPG format does not support transparency (alpha channel). If your WebP image has transparent areas, they will be filled with a solid background color — white by default. You can choose a different background color (black, custom color) before converting if white doesn\'t work for your image.' },
        { q: 'Are my images uploaded to your servers during conversion?', a: 'Never. All conversion happens locally in your browser using WebAssembly technology. Your images never leave your device, making this tool completely private and secure. This is especially important when working with personal photos or sensitive images.' },
        { q: 'Which platforms still don\'t support WebP format?', a: 'While WebP support has improved, some platforms still have limited or inconsistent support: older Windows versions (pre-Windows 10), some email clients (older Outlook versions), certain printing services and photo labs, some social media scheduling tools, and legacy content management systems. When in doubt, use JPG for maximum compatibility.' },
        { q: 'Can I convert WebP to PNG instead of JPG?', a: 'Yes, you can use our general Image Converter tool to convert WebP to PNG. PNG is a better choice than JPG if you need to preserve transparency, if your image contains text or sharp graphics, or if you want lossless quality. JPG is preferred for photographs where smaller file size is important.' },
        { q: 'What quality setting should I use for WebP to JPG conversion?', a: 'For most purposes, 85-90% quality offers the best balance — minimal visible quality loss with significantly smaller files than 100%. Use 95-100% only for archival purposes or when file size doesn\'t matter. Use 70-80% for web images where faster loading is prioritized over absolute quality.' },
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
      title: 'JPG to PDF - Convert Images to PDF Online',
      metaDescription: 'Convert JPG, PNG images to PDF documents instantly. Merge multiple images into one PDF or create separate pages. Works offline in your browser.',
      faq: [
        { q: 'Can I combine multiple images into a single PDF document?', a: 'Yes! Upload multiple JPG, PNG, or WebP images and arrange them in your desired order. The tool will create a multi-page PDF with one image per page (or multiple images per page if you choose that layout option). You can drag and drop to reorder images before generating the PDF.' },
        { q: 'What image formats can be converted to PDF?', a: 'Our converter supports JPG, PNG, WebP, and BMP image formats. You can mix different formats in the same PDF — for example, combine JPG photos with PNG graphics. The output is always a standard PDF file compatible with all PDF readers.' },
        { q: 'Can I adjust the page size when converting images to PDF?', a: 'Yes, you can choose from standard page sizes including A4 (210×297mm), Letter (8.5×11 inches), Legal, A3, A5, and more. You can also select "Original" to preserve each image\'s exact dimensions. Additionally, you can set portrait or landscape orientation for each page.' },
        { q: 'Is my data secure when converting images to PDF?', a: 'Absolutely. All processing happens locally in your browser using JavaScript and WebAssembly. Your images are never uploaded to any server, ensuring complete privacy and security. This makes it safe to convert sensitive documents, personal photos, and confidential materials.' },
        { q: 'Can I set margins and adjust image positioning in the PDF?', a: 'Yes, you can adjust margins to control how much white space appears around your images. You can also choose how images are positioned on the page: fit to page (fills the page while maintaining aspect ratio), original size (preserves exact pixel dimensions), or stretch to fill (fills the entire page, may distort the image).' },
        { q: 'Will the image quality be preserved in the PDF?', a: 'Yes, your images are embedded in the PDF at their original resolution and quality. No compression or quality reduction is applied unless you specifically choose those options. The resulting PDF will look identical to your original images when viewed at 100% zoom.' },
        { q: 'What\'s the difference between "Fit to Page" and "Original Size"?', a: '"Fit to Page" resizes the image to fill as much of the page as possible while maintaining the aspect ratio, adding white space if needed. "Original Size" preserves the image\'s exact pixel dimensions, which may result in very large or very small images on the page depending on your DPI settings. Fit to Page is recommended for most use cases.' },
        { q: 'Can I convert images to PDF on my phone or tablet?', a: 'Yes! Our tool works on any device with a modern web browser, including iPhones, iPads, Android phones and tablets. The interface is responsive and touch-friendly. You can select images from your device\'s photo gallery and convert them to PDF on the go.' },
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
      title: 'PDF Merger - Combine Multiple PDFs into One',
      metaDescription: 'Merge multiple PDF files into one document instantly. Drag, reorder, and combine — all in your browser. 100% secure, no file uploads required.',
      faq: [
        { q: 'How many PDF files can I merge at once?', a: 'You can merge as many PDFs as your browser can handle, typically dozens of files. Since processing happens locally in your browser, the practical limit depends on your device\'s available RAM. Most users can easily merge 20-50 PDFs without issues. For very large numbers of files, consider merging in batches.' },
        { q: 'Can I reorder pages before merging PDFs?', a: 'Yes! After uploading your PDFs, you can drag and drop to reorder the files. You can also rearrange individual pages within each PDF. This gives you complete control over the final document\'s structure before creating the merged PDF.' },
        { q: 'Is there a file size limit for merging PDFs?', a: 'There are no artificial limits imposed by our servers since all processing happens locally in your browser. The practical limit depends on your device\'s memory. Most modern devices can handle PDFs totaling hundreds of megabytes. If you encounter performance issues, try merging files in smaller batches.' },
        { q: 'Are my PDF files uploaded to your servers during merging?', a: 'Absolutely not. All PDF merging happens entirely within your browser using client-side JavaScript and PDF manipulation libraries. Your documents never leave your device, ensuring complete privacy and security. This makes it safe to merge sensitive documents like contracts, financial records, and personal files.' },
        { q: 'Will the quality of my PDFs be affected by merging?', a: 'No, the original quality of each PDF is preserved exactly. The merge process combines the files without re-rendering or compressing the content. All text, images, fonts, and formatting remain exactly as in the original files. The resulting merged PDF is a lossless combination of your input files.' },
        { q: 'Can I add a table of contents to the merged PDF?', a: 'Currently, our merger creates a straightforward combined document without automatically generating a table of contents. However, you can create a separate first page (as a PDF) listing the contents, upload it first, then merge your other documents after it. Advanced TOC generation is planned for future updates.' },
        { q: 'What should I do if the merged PDF is too large to email?', a: 'If your merged PDF exceeds email attachment limits (typically 10-25MB), you have several options: use our PDF compression tool to reduce file size, split the merged PDF into smaller parts using our PDF splitter, or use a file sharing service instead of email attachment.' },
        { q: 'Can I merge password-protected PDFs?', a: 'No, password-protected PDFs must be unlocked before merging. You\'ll need to remove the password protection using the original software that created the PDF or ask the document creator for an unprotected version. For security reasons, our tool does not attempt to bypass PDF password protection.' },
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
        { q: 'Can I extract specific pages from a PDF?', a: 'Yes! You can select individual pages (e.g., pages 1, 5, 10) or page ranges (e.g., pages 3-15) to extract into a new PDF. This is perfect when you only need certain sections of a large document. Simply enter the page numbers or ranges in the input field, and the tool will create a new PDF containing only those pages.' },
        { q: 'Can I split a PDF into equal parts?', a: 'Yes, you can split a PDF into equal parts by specifying how many pages each output file should contain. For example, if you have a 100-page PDF and want 10-page files, the tool will create 10 separate PDFs, each containing 10 pages. This is useful for dividing large documents into manageable chunks.' },
        { q: 'How do I download the split PDF files?', a: 'After splitting, you can download the resulting files in two ways: individually (each split PDF downloads separately) or as a ZIP archive (all split files bundled in one convenient download). The ZIP option is recommended when splitting into many files to avoid multiple download dialogs.' },
        { q: 'Is my PDF document uploaded to any server during splitting?', a: 'No, never. All PDF splitting happens entirely within your browser using client-side processing. Your document is never transmitted to any server, ensuring complete privacy and security. This makes it safe to split confidential documents, financial records, contracts, and personal files.' },
        { q: 'Is there a page limit for PDF splitting?', a: 'There are no artificial page limits. The practical limit depends on your browser\'s available memory. Most devices can handle PDFs with hundreds or even thousands of pages. Very large PDFs may take longer to process but should complete successfully. If you experience issues with extremely large files, try splitting in smaller chunks.' },
        { q: 'What\'s the difference between splitting and extracting pages?', a: 'Splitting divides a PDF into multiple output files based on a pattern (e.g., every 10 pages creates separate files). Extracting selects specific pages to create a single output file containing only those pages. Use splitting to create multiple files; use extracting to create one file with specific content.' },
        { q: 'Can I split a PDF and convert pages to images at the same time?', a: 'While our tools work independently, you can accomplish this in two steps: first, use the PDF splitter to extract the pages you want as separate PDFs, then use our PDF to Images tool to convert those pages to JPG or PNG. This gives you maximum flexibility in how you work with your documents.' },
        { q: 'Will splitting a PDF affect the quality of the content?', a: 'No, PDF splitting does not affect quality. The tool extracts pages without re-rendering or compressing the content. All text, images, fonts, and formatting remain exactly as in the original PDF. The resulting files are lossless extracts containing only the pages you selected.' },
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
        { q: 'What image formats can I export PDF pages to?', a: 'You can convert PDF pages to either PNG or JPG format. PNG is recommended for images containing text, graphics, or when you need transparency support — it offers lossless quality. JPG is better for photographs and when you need smaller file sizes. You can choose your preferred format and quality settings before converting.' },
        { q: 'Is my PDF document uploaded to any server during conversion?', a: 'No, absolutely not. All PDF to image conversion happens locally in your browser using client-side rendering technology. Your PDF is never transmitted to any server, ensuring complete privacy and security. This makes it safe to convert confidential documents, contracts, financial statements, and personal files.' },
        { q: 'Can I convert all pages or just specific pages?', a: 'You have full flexibility: convert all pages in the PDF, or select specific page ranges (e.g., pages 1-5, 10, 15-20). This is useful when you only need certain pages as images rather than the entire document. The tool lets you preview pages before selecting which ones to convert.' },
        { q: 'What DPI setting should I use for converting PDF to images?', a: 'DPI (dots per inch) determines image resolution: 72 DPI is standard for web images and screen viewing; 150 DPI works well for email attachments and drafts; 200 DPI provides good quality for presentations; 300 DPI is recommended for professional printing. Higher DPI creates larger, higher-quality images but increases file size.' },
        { q: 'How do I download the converted images?', a: 'After conversion, you can download the images individually (each page as a separate file) or as a ZIP archive containing all pages. Individual files are named sequentially (page_1.jpg, page_2.jpg, etc.) for easy organization. The ZIP option is convenient when converting many pages at once.' },
        { q: 'Will the converted images look exactly like the PDF pages?', a: 'Yes, the conversion renders each PDF page as an image that looks identical to the original PDF when viewed at the selected DPI. Text, images, colors, and layout are preserved exactly. Higher DPI settings produce sharper text and finer details, especially important for documents with small print.' },
        { q: 'Can I convert password-protected PDFs to images?', a: 'No, password-protected PDFs must be unlocked before conversion. You\'ll need to remove the password using the original software or obtain an unlocked version from the document creator. Our tool cannot bypass PDF security for legal and ethical reasons.' },
        { q: 'What are common uses for converting PDF pages to images?', a: 'Common use cases include: creating thumbnails or previews of PDF documents, extracting graphics or diagrams for use in presentations, converting PDF content for websites that work better with images, creating social media content from PDF reports, and extracting pages for editing in image software like Photoshop.' },
      ],
    },
  },

  // === TEXT TOOLS ===
  {
    name: 'Word Counter',
    slug: 'word-counter',
    category: 'text',
    description: 'Count words, characters, sentences, and paragraphs with reading time estimates. Perfect for essays, articles, and social media posts.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['word counter', 'character counter', 'word count', 'character count', 'text counter', 'word count tool', 'online word counter', 'essay word count', 'social media character limit', 'reading time calculator'],
    featured: true,
    relatedTools: ['case-converter', 'text-diff', 'slug-generator'],
    seo: {
      title: 'Word Counter | Count Words, Characters & Reading Time Free',
      h1: 'Word Counter — Count Words, Characters, Sentences & Reading Time',
      metaDescription: 'Free online word counter with real-time statistics. Count words, characters (with/without spaces), sentences, paragraphs. Get reading time estimates. Perfect for essays, articles, and social media limits. 100% private.',
      faq: [
        { q: 'What statistics does the word counter provide?', a: 'Our word counter provides comprehensive real-time statistics including: word count (total words), character count with spaces, character count without spaces, sentence count, paragraph count, and estimated reading time. You also get average words per sentence for readability insights. All stats update instantly as you type — no need to click buttons or refresh.' },
        { q: 'How is reading time calculated?', a: 'Reading time is calculated based on the average adult reading speed of 200-250 words per minute for comfortable comprehension. Speaking time is calculated at approximately 130-150 words per minute. For dense technical documents, academic papers, or complex literature, actual reading time may be longer. These estimates help content creators plan articles and presentations.' },
        { q: 'Can I check social media character limits?', a: 'Yes! Our counter includes visual indicators for popular platforms: Twitter/X posts (280 characters), Instagram captions (2,200 characters), LinkedIn posts (3,000 characters), Facebook posts (63,206 characters), and SMS text messages (160 characters). The progress bar shows green when you\'re within limits and turns red when you exceed them, helping you optimize content for each platform.' },
        { q: 'Is there a limit on how much text I can count?', a: 'There are no artificial limits — you can paste novels, dissertations, or lengthy reports. The practical limit depends on your browser\'s memory and performance. Most users can comfortably count hundreds of thousands of words without issues. Extremely large documents (500,000+ words) may experience slight delays but should work fine on modern devices.' },
        { q: 'Is my text private when using the word counter?', a: 'Absolutely! All text processing happens 100% locally in your browser using JavaScript. Your text is never transmitted to any server, stored in any database, logged, or analyzed. This ensures complete privacy for sensitive documents, confidential writing, personal content, and proprietary business materials. You can disconnect from the internet after loading the page and it will continue working.' },
        { q: 'What counts as a word?', a: 'A word is defined as any sequence of characters separated by whitespace (spaces, tabs, line breaks). Specific rules: hyphenated words like "well-known" count as one word; numbers ("123") count as words; email addresses and URLs count as single words if not space-separated; contractions like "don\'t" and "it\'s" count as single words; and emoji count as characters but not words.' },
        { q: 'Can I use this for academic essays with specific word limits?', a: 'Yes! This tool is perfect for students and academics. Many assignments have strict word count requirements (e.g., "1,500-2,000 words"). Our counter helps you stay within limits while writing. The real-time updates let you see exactly how much content you need to add or remove. The character count is also useful for abstracts and citations with length restrictions.' },
        { q: 'How accurate is the sentence and paragraph count?', a: 'Sentence count is based on punctuation marks (. ! ?) followed by spaces or line breaks, which is accurate for most standard text. Paragraph count is based on blocks of text separated by blank lines. While these work well for typical writing, edge cases like abbreviations ("Dr.", "U.S.A.") or unconventional formatting may affect accuracy slightly. For critical counts, we recommend manual verification.' },
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
    relatedTools: ['word-counter', 'case-converter', 'extract-emails', 'slug-generator'],
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
    relatedTools: ['extract-urls', 'remove-duplicate-lines', 'word-counter', 'slug-generator'],
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
  {
    name: 'Slug Generator',
    slug: 'slug-generator',
    category: 'text',
    description: 'Convert text to SEO-friendly URL slugs. Perfect for blog posts, product pages, and permalinks.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['slug', 'url', 'seo', 'permalink', 'friendly url', 'slug generator', 'url slug', 'text to slug', 'seo friendly url'],
    featured: true,
    relatedTools: ['case-converter', 'url-encode', 'word-counter'],
    seo: {
      title: 'Slug Generator | Free Online URL Slug Creator - Toolmansion',
      h1: 'Slug Generator - Create SEO-Friendly URL Slugs',
      metaDescription: 'Generate SEO-friendly URL slugs instantly. Convert any text to clean, readable URLs. Perfect for blog posts, products & permalinks. 100% private, no ads, free!',
      faq: [
        { q: 'What is a URL slug?', a: 'A URL slug is the part of a web address that identifies a specific page in a human-readable format. For example, in "example.com/blog/my-first-post", the slug is "my-first-post". It helps with SEO and makes URLs easier to understand.' },
        { q: 'Why are URL slugs important for SEO?', a: 'SEO-friendly slugs help search engines understand your page content better. They also improve click-through rates because users can see what the page is about from the URL. Clean slugs without special characters or numbers are preferred by search engines.' },
        { q: 'What separator should I use for slugs?', a: 'Hyphens (-) are the recommended separator for URL slugs as they are most readable and SEO-friendly. Underscores (_) are also acceptable but less common. Avoid using spaces or special characters in slugs.' },
        { q: 'Should I use lowercase in URL slugs?', a: 'Yes, always use lowercase in URL slugs. URLs are case-sensitive on some servers, and using lowercase prevents duplicate content issues and confusion. It also looks cleaner and is easier to type.' },
        { q: 'What are stop words in URL slugs?', a: 'Stop words are common words like "a", "an", "the", "and", "in", "of" that add little meaning. Removing them can create shorter, cleaner URLs while maintaining readability. However, keeping them is also fine if they help with understanding.' },
      ],
    },
  },

  // === DEVELOPER TOOLS ===
  {
    name: 'JSON Formatter',
    slug: 'json-formatter',
    category: 'dev',
    description: 'Format, validate, and beautify JSON data with syntax highlighting. Convert between pretty-printed and minified formats instantly.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['json formatter', 'json validator', 'json beautifier', 'json prettifier', 'format json', 'validate json', 'json parser', 'json minifier', 'json editor', 'pretty print json'],
    featured: true,
    relatedTools: ['base64', 'url-encode', 'text-diff'],
    seo: {
      title: 'JSON Formatter | Beautify, Validate & Parse JSON Online Free',
      h1: 'JSON Formatter & Validator — Pretty Print, Minify & Validate Instantly',
      metaDescription: 'Format, validate, and beautify JSON with syntax highlighting. Convert between pretty-printed and minified formats. Works 100% offline in your browser. No data sent to servers.',
      faq: [
        { q: 'Does the JSON formatter validate JSON syntax?', a: 'Yes! Our tool validates your JSON in real-time and highlights syntax errors with detailed messages including line numbers. Common errors detected include missing brackets, trailing commas, unquoted keys, invalid escape sequences, and incorrect data types. The validator shows exactly where the error occurs and suggests how to fix it, making debugging much faster.' },
        { q: 'What is the difference between beautify and minify?', a: 'Beautify (or prettify) adds indentation and line breaks to make JSON human-readable with proper nesting and spacing. Minify removes all unnecessary whitespace to create the smallest possible file size. Use beautify when editing or debugging JSON, and minify for production environments where file size matters, such as API responses or web assets.' },
        { q: 'Can I convert JSON to other formats?', a: 'While this tool focuses on formatting JSON, you can easily copy the formatted output for use elsewhere. The minified format is useful for embedding JSON in URLs or JavaScript code. For converting JSON to XML, CSV, or YAML, use our dedicated converter tools. All formatting happens locally in your browser for maximum security.' },
        { q: 'Is my JSON data safe when using this formatter?', a: 'Absolutely! All processing happens locally in your browser using JavaScript. Your JSON data is never uploaded to any server, stored in any database, or transmitted over the internet. This makes it completely safe to format JSON containing API keys, authentication tokens, personal information, or proprietary business data. You can verify this by disconnecting from the internet after loading the page.' },
        { q: 'What are the most common JSON syntax errors?', a: 'The most common errors include: trailing commas after the last item in arrays/objects (not allowed in JSON), using single quotes instead of double quotes for strings, unquoted object keys (keys must always be in double quotes), missing commas between items, unescaped special characters like newlines in strings, and missing closing brackets or braces. Our validator catches all of these and more.' },
        { q: 'Does this tool support JSON5 or JSON with comments?', a: 'Yes! Our formatter can handle JSON5 and JSONC (JSON with Comments) formats. When you paste JSON containing comments (// single-line or /* multi-line */), the tool will strip them during formatting and produce valid standard JSON. This is useful when working with configuration files from tools like VS Code that support commented JSON.' },
        { q: 'Can I format large JSON files with this tool?', a: 'Yes, the formatter can handle JSON files up to several megabytes, typically hundreds of thousands of lines. The practical limit depends on your browser\'s memory and processing power. For extremely large files (10MB+), you may experience some delay, but the tool should complete successfully. For production batch processing of very large datasets, consider command-line tools like jq.' },
        { q: 'Why is my JSON showing as invalid when it looks correct?', a: "Common hidden issues include: invisible characters copied from rich text editors, smart quotes instead of straight quotes, trailing commas (not allowed in standard JSON), BOM at the start of the file, and unescaped backslashes in Windows file paths. Try pasting from a plain text source." },
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
        { q: 'What is Base64 encoding?', a: 'Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It converts binary data into a set of 64 printable characters (A-Z, a-z, 0-9, +, /) plus padding (=). This makes it possible to transmit binary data through text-only channels like email, JSON, XML, and URLs without corruption.' },
        { q: 'Can I encode files to Base64 using this tool?', a: 'Yes! You can upload any file type — images, PDFs, documents, executables — and convert them to Base64 strings. The tool supports drag-and-drop file upload and can handle files up to several megabytes. For images, you can preview the decoded result before downloading.' },
        { q: 'Can I decode Base64 images and preview them?', a: 'Absolutely! Paste Base64 image data (including data URIs like data:image/png;base64,...) and the tool will display a preview of the image. You can then download the decoded image file. This is useful for extracting images from CSS, HTML, or API responses that contain embedded Base64 image data.' },
        { q: 'Is there a file size limit for Base64 encoding?', a: 'There are no artificial size limits. However, Base64 encoding increases file size by approximately 33%, and very large files (50MB+) may cause browser performance issues or memory constraints. For most use cases — images under 10MB, documents, text files — processing is instant. For extremely large files, consider command-line tools.' },
        { q: 'Is my data stored when using the Base64 encoder?', a: 'No, never. All Base64 encoding and decoding happens entirely within your browser using JavaScript. Your files and data are never uploaded to any server, stored in any database, or transmitted over the internet. This makes it completely safe for sensitive files, confidential documents, and private data.' },
        { q: 'What are common uses for Base64 encoding?', a: 'Common uses include: embedding small images directly in HTML/CSS as data URIs (reducing HTTP requests), transmitting binary data in JSON APIs, encoding email attachments for SMTP transmission, storing binary data in databases or XML files, and including binary resources in JavaScript or configuration files. It\'s also used for basic authentication headers and URL tokens.' },
        { q: 'Does Base64 encoding encrypt or secure my data?', a: 'No, Base64 is encoding, not encryption. It provides zero security — anyone can decode Base64 data instantly. Base64 simply transforms data into a different representation that is safe for text-based transmission. If you need to protect sensitive data, use proper encryption (like AES) before or instead of Base64 encoding.' },
        { q: 'What is the difference between Base64 and Base64URL?', a: 'Standard Base64 uses + and / characters, which can break in URLs. Base64URL is a URL-safe variant that replaces + with - and / with _, and often omits padding = characters. Use Base64URL when encoding data that will be transmitted in URL parameters or file names. Our tool supports both formats.' },
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
        { q: 'What is URL encoding (percent encoding)?', a: 'URL encoding, also known as percent encoding, is a mechanism for encoding information in a Uniform Resource Locator (URL) under certain circumstances. It converts special characters to a percent sign (%) followed by two hexadecimal digits representing the character&apos;s UTF-8 byte value. This ensures URLs remain valid and can be transmitted safely over the internet using the ASCII character set.' },
        { q: 'When should I use URL encoding?', a: 'Use URL encoding when: passing special characters in query parameters (e.g., spaces, &amp;, =, ?), including user input in URLs, sending non-ASCII characters (Unicode, emojis, international text) in URLs, constructing API requests with dynamic parameters, or handling data that might contain URL-reserved characters. Essentially, encode any data that will appear in a URL and might contain special characters.' },
        { q: 'Does the URL encoder handle Unicode and international characters?', a: 'Yes, our URL encoder fully supports Unicode characters including emojis, Chinese characters, Arabic script, Cyrillic, and all international text. These characters are first converted to UTF-8 byte sequences, then each byte is percent-encoded. For example, the Chinese character 中 becomes %E4%B8%AD. This ensures URLs work correctly across all languages and regions.' },
        { q: 'Can I encode a complete URL or just components?', a: 'Both! Use "Full URL" mode to encode special characters within a complete URL while preserving the structure (protocol, domain, path). Use "Component" mode (equivalent to encodeURIComponent) for encoding individual query parameters or path segments. The difference is important: encoding a full URL preserves :// and ? characters, while component encoding treats all special characters as data.' },
        { q: 'Is my URL or data stored when using the encoder?', a: 'No, absolutely not. All URL encoding and decoding happens locally in your browser using JavaScript. Your URLs, API endpoints, query parameters, and any sensitive data they contain are never transmitted to any server, stored in any database, or logged anywhere. This makes it safe for encoding URLs containing API keys, tokens, or confidential parameters.' },
        { q: 'What characters need to be URL encoded?', a: 'Characters that must be encoded include: space (becomes %20 or +), non-ASCII Unicode characters, reserved characters when used as data (&amp;, =, ?, #, /), unsafe characters (&lt;, &gt;, {, }, |, \, ^, ~, [space]), and the percent sign itself (% becomes %25). Unreserved characters (A-Z, a-z, 0-9, -, _, ., ~) never need encoding.' },
        { q: 'What is the difference between encodeURI and encodeURIComponent?', a: 'encodeURI is designed for full URLs — it encodes special characters but preserves URL structure characters like : / ? #. encodeURIComponent is for URL components (query parameters, path segments) — it encodes everything including / ? # which would otherwise break URL structure. Use encodeURI for complete URLs, encodeURIComponent for individual parameters you&apos;re inserting into URLs.' },
        { q: 'Why do spaces become %20 or + in URLs?', a: 'In the URL path and most contexts, spaces should be encoded as %20. However, in HTML form data submitted via GET method (application/x-www-form-urlencoded), spaces are traditionally encoded as + for historical reasons. Our tool handles both formats: %20 is the RFC 3986 standard, while + is the application/x-www-form-urlencoded convention.' },
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
    tags: ['uuid', 'guid', 'unique id', 'random', 'uuid generator', 'guid generator', 'online uuid generator', 'generate uuid', 'unique id generator', 'uuid v4 generator'],
    featured: true,
    relatedTools: ['password-generator', 'json-formatter', 'hash-generator'],
    seo: {
      title: 'UUID Generator | Free Online GUID Creator Tool - Toolmansion',
      h1: 'UUID Generator - Free Online GUID Creator Tool',
      metaDescription: 'Use our free UUID generator to create unique identifiers instantly. Generate UUID v4, GUID, and unique IDs. 100% private, no ads, client-side processing. Bulk generation supported!',
      faq: [
        { q: 'What is a UUID?', a: 'UUID (Universally Unique Identifier) is a 128-bit number used to identify information in computer systems. It\'s designed to be unique across both space and time, making it ideal for database keys, session IDs, and distributed systems.' },
        { q: 'What\'s the difference between UUID and GUID?', a: 'UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) are essentially the same thing. UUID is the standardized term (RFC 4122), while GUID is Microsoft\'s implementation. Both are 128-bit unique identifiers and are interchangeable in practice.' },
        { q: 'What is UUID v4?', a: 'UUID version 4 is generated using random numbers. It\'s the most commonly used version because it requires no unique identifiers from the computer (like MAC addresses in v1). Our tool generates cryptographically secure random UUIDs using the Web Crypto API.' },
        { q: 'Can I generate multiple UUIDs at once?', a: 'Yes! You can generate up to 1,000 UUIDs at once. Simply enter the quantity, click generate, and copy or download the entire list as a text file. Perfect for developers who need bulk UUIDs for database seeding or testing.' },
        { q: 'Is this UUID generator secure?', a: 'Absolutely. We use the Web Crypto API for cryptographically secure random number generation. All processing happens locally in your browser — no data is sent to any server. Your UUIDs are never stored or logged anywhere.' },
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
      title: 'QR Code Generator - Create QR Codes Free',
      metaDescription: 'Generate QR codes for URLs, text, WiFi, and more. Customizable size and error correction. Create instantly in your browser without uploading data.',
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
    description: 'Generate strong, secure passwords with custom length and character options. Cryptographically secure random generation.',
    status: 'Live',
    difficulty: 'Easy',
    tags: ['password generator', 'strong password', 'secure password', 'random password', 'password creator', 'generate password', 'online password generator', 'password maker', 'complex password', 'safe password'],
    featured: true,
    relatedTools: ['uuid-generator', 'hash-generator'],
    seo: {
      title: 'Password Generator | Create Strong & Secure Passwords Free',
      h1: 'Generate Strong, Secure Passwords Instantly — 100% Private & Offline',
      metaDescription: 'Create strong, random passwords with our free password generator. Customize length, characters, and symbols. Cryptographically secure, works offline. No data stored or transmitted.',
      faq: [
        { q: 'How secure are the generated passwords?', a: 'Our passwords are generated using the Web Crypto API, which provides cryptographically secure random numbers. This is the same security standard used by banks and government agencies. Each password is truly random and cannot be predicted or reversed. For maximum security, we recommend passwords of at least 16 characters with a mix of uppercase, lowercase, numbers, and symbols.' },
        { q: 'What makes a password strong and secure?', a: 'A strong password should be: at least 12-16 characters long, include uppercase and lowercase letters, contain numbers and special symbols, avoid dictionary words and personal information, and be unique (not reused across sites). Our generator creates passwords that meet all these criteria by default, making them resistant to brute force attacks and password cracking attempts.' },
        { q: 'Can I customize the password length and characters?', a: 'Yes! You can set password length from 6 to 128 characters. You can also toggle specific character sets: uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special symbols (!@#$%^&* etc.). For compatibility with older systems, you can also exclude ambiguous characters like 0, O, 1, l, and I that look similar.' },
        { q: 'Is it safe to use an online password generator?', a: 'Yes, because our tool runs entirely in your browser. Passwords are generated locally on your device using JavaScript and are never sent to our servers, stored in databases, or logged anywhere. You can verify this by disconnecting from the internet after loading the page — the generator will still work. For extra security, we recommend using the tool in incognito/private browsing mode.' },
        { q: 'Can I generate multiple passwords at once?', a: 'Absolutely! You can generate batches of 1, 5, 10, or 20 passwords at once. This is useful when you need to update multiple accounts or want to compare different options. All generated passwords are displayed with their strength rating, and you can copy individual passwords or the entire list with one click.' },
        { q: 'How does the password strength indicator work?', a: 'Our strength calculator analyzes password entropy (randomness) based on length and character variety. Weak passwords are short with limited character types. Fair passwords have moderate length. Strong passwords are longer with mixed characters. Very Strong passwords are 16+ characters with all character types, providing maximum security against attacks.' },
        { q: 'Should I use random passwords or passphrases?', a: 'Both have advantages. Random passwords (like "k9#mP$vL2@xQ") offer maximum security but are harder to remember. Passphrases (like "correct-horse-battery-staple") are easier to remember while still being secure due to their length. Use random passwords for critical accounts (banks, email) and passphrases for accounts you might need to type manually. Our tool supports both styles.' },
        { q: 'What is the recommended password length in 2024?', a: 'Security experts now recommend minimum 16 characters for important accounts. For regular accounts, 12 characters is acceptable. Our default is 16 characters with mixed character types, which provides excellent security. Each additional character exponentially increases the time needed to crack the password — a 16-character password is billions of times stronger than an 8-character one.' },
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
