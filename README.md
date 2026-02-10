# toolmansion 🧰⚡
A privacy-first, browser-only tools hub for images, PDFs, text, and developer utilities.  
Runs fully client-side with **no uploads**. Subsidiary product powered by **Botsquash**.

---

## ✅ What it is
toolmansion is a fast, SEO-first multi-tool web app designed for high-intent tasks like:
- Image: convert, resize, crop, compress, batch ZIP
- PDF: merge, split, JPG↔PDF (client-side)
- Text: counters, case tools, extract emails/URLs, diff
- Dev: JSON tools, Base64, URL encode/decode, UUID, hashes
- Generators: QR, passwords, lorem ipsum

---

## 🔐 Privacy by design
- **100% client-side processing**
- Files never leave your device
- No file storage on servers
- Built for speed and trust

---

## 🚀 Status
- ✅ 29 tools live
- ✅ Tool pages + FAQs + related tools blocks
- ✅ CLS-protected ad placeholders (ads disabled by default)

---

## 🧱 Tech stack
- Next.js + TypeScript (static-friendly)
- Tailwind CSS
- Registry-driven tools + reusable ToolShell layout

---

## 📁 Project structure (high level)
- `src/data/toolsRegistry.ts` — tools, categories, SEO metadata
- `src/tools/<tool-slug>/` — tool implementations
- `src/components/` — ToolShell + shared components
- `public/ads.txt` — ads.txt (add publisher ID after AdSense approval)

---

## 🧑‍💻 Local development

### Requirements
- Node.js 18+ recommended

### Install
```bash
npm install

npm run dev
```
