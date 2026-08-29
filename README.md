#  Ink & Thread Co. // Digital Flagship Portal ⚡

A high-performance, minimalist dark-mode storefront designed exclusively for an elite solo tattoo artist and curated streetwear apparel brand. This application is optimized for speed, responsive multi-column layouts, and seamless client interactions.

Built natively as a static web ecosystem to leverage blazing-fast page loads on mobile browsers, making it the perfect platform for turning casual social media traffic into booked tattoo clients and retail sales.

---

## 🎨 Creative Architecture & Aesthetics

- **Dual-Entrance Homepage Portal:** Implements a clean, high-contrast entry routing system for the distinct Tattoo Residency and Curated Retail environments.
- **Solo Master Portfolio:** Focuses on the extensive style capabilities of a single resident artist, moving away from standard shop rosters to elevate signature creative authority.
- **Micro-Drop Apparel Storefront:** A card catalog architecture handling limited streetwear garments, oversized heavy fleece, and accessories.
- **Zero-Lag Vector Graphics:** Utilizes self-contained inline SVG structures to completely bypass browser caching blocks and connection restrictions.
- **Interactive Checkout Elements:** Integrates React-driven components handling responsive UI state tracking upon order submission.

---

## 🛠️ The Tech Stack

- **Framework Core:** [Astro v4](https://astro.build) (Static Site Generation Engine)
- **Component Engine:** [React](https://react.dev) (For interactive user interface elements)
- **Styling Architecture:** High-performance Native CSS Grid/Flexbox structures
- **Deployment & Hosting:** GitHub Actions Automated Pipeline Pipeline -> [GitHub Pages](https://github.com)

---

## ⚙️ Local Development Instructions

To clone the project repository and run the engine locally on your machine, follow these instructions:

### 1. Install Dependencies
Initialize the node package manager pipeline in your local project workspace terminal:
```bash
npm install
```

### 2. Launch the Local Development Server
Boot the Astro local compilation system:
```bash
npm run dev
```
Open your local test browser to `http://localhost:4321/` to review live code modifications.

### 3. Build for Production Execution
To test compile the static assets locally before pushing online:
```bash
npm run build
```

---

## 🤖 Continuous Deployment Pipeline (GitHub Actions)

This project features a fully automated deployment setup via `.github/workflows/deploy.yml`. 

Every time a code save is pushed to the `main` branch, a clean Linux container spins up upstream, automatically installs fresh dependencies, compiles your code assets into optimized production chunks, and pushes the modified storefront to live web browsers within seconds.

---
*Made for the rebels. Designed to look elite on every screen configuration.*
