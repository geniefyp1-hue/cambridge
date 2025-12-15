# User Manual – Cambridge University React App

---

## Table of Contents
1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Project Setup](#project-setup)
4. [Running the Application](#running-the-application)
5. [Building for Production](#building-for-production)
6. [Tailwind CSS Customisation](#tailwind-css-customisation)
7. [Adding New React Components](#adding-new-react-components)
8. [Managing Assets](#managing-assets)
9. [Troubleshooting](#troubleshooting)
10. [FAQ](#faq)
11. [Appendix – Scripts Reference](#appendix-scripts-reference)
---

## 1. Introduction
This manual guides developers through the complete lifecycle of the **Cambridge University React application** – from initial setup to deployment and ongoing maintenance. The app uses **Vite** for bundling, **React** for UI, and **Tailwind CSS** for styling.

## 2. System Requirements
| Requirement | Minimum Version |
|-------------|-----------------|
| Operating System | Windows 10 / macOS 12 / Linux (any modern distro) |
| Node.js | 18.0.0 |
| npm / yarn / pnpm | Latest stable |
| Git | 2.30.0 |

## 3. Project Setup
### 3.1 Clone the Repository
```bash
git clone <repository‑url>
cd <repo‑directory>
```
### 3.2 Install Dependencies
Choose your package manager:
```bash
# npm (default)
npm install

# yarn
yarn install

# pnpm
pnpm install
```
The command reads `package.json` and installs:
- **React** (`react`, `react-dom`)
- **Vite** (`vite`, `@vitejs/plugin-react`)
- **Tailwind CSS** (`tailwindcss`, `autoprefixer`)
- Development utilities (ESLint, testing libraries if added later)

### 3.3 Verify the Installation
```bash
npm run dev   # should start the dev server on http://localhost:5173
```
If the browser opens and you see the default Vite + React page, the setup succeeded.

## 4. Running the Application
### 4.1 Development Server
```bash
npm run dev
```
- Hot Module Replacement (HMR) updates the UI instantly on code changes.
- The server watches files listed in `vite.config.js` and `tailwind.config.js`.

### 4.2 Environment Variables
Create a `.env` file at the project root for custom variables:
```
VITE_API_URL=https://api.example.com
VITE_FEATURE_FLAG=true
```
Prefix all variables with `VITE_` so Vite can expose them to the client.

## 5. Building for Production
```bash
npm run build
```
- Generates an optimized bundle in the `dist/` directory.
- Files are minified, hashed, and ready for static hosting (Netlify, Vercel, GitHub Pages, etc.).

To preview the production build locally:
```bash
npm run preview
```

## 6. Tailwind CSS Customisation
The Tailwind configuration lives in **`tailwind.config.js`**.
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#e8f0fe",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
```
### 6.1 Adding New Utilities
1. Edit the `extend` section.
2. Run `npm run dev` – Tailwind recompiles automatically.
### 6.2 Purging Unused Styles
The `content` array tells Tailwind where to look for class names. Ensure all component directories are listed; otherwise unused styles may be stripped from production builds.

## 7. Adding New React Components
1. **Create a folder** under `src/components/` (e.g., `Button`).
2. Add a component file (`Button.jsx`) and optional style file (`Button.module.css` if you need CSS modules).
3. Export the component:
```jsx
export default function Button({ children, onClick }) {
  return (
    <button className="px-4 py-2 bg-primary text-white rounded" onClick={onClick}>
      {children}
    </button>
  );
}
```
4. Import and use it in any page or component:
```jsx
import Button from "./components/Button";

function Home() {
  return <Button onClick={() => alert('Clicked!')}>Click Me</Button>;
}
```
5. Run `npm run dev` to see the changes instantly.

## 8. Managing Assets
- Place static assets (images, fonts) in `src/assets/`.
- Reference them with relative imports:
```jsx
import heroImg from "../assets/hero.jpg";
<img src={heroImg} alt="Hero" />
```
- For files that should be served unchanged (e.g., favicons), put them in the `public/` folder. They are copied verbatim to the build output.

## 9. Troubleshooting
| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `vite` fails to start, complaining about missing modules | Dependencies not installed or corrupted | Delete `node_modules` and reinstall (`npm ci` or `npm install`). |
| Tailwind classes not applying | `tailwind.config.js` `content` paths missing the file | Add the missing path pattern and restart the dev server. |
| Styles appear un‑prefixed in older browsers | Autoprefixer not running | Ensure `postcss.config.js` includes `require('autoprefixer')`. |
| Environment variable is `undefined` in code | Variable not prefixed with `VITE_` or not defined in `.env` | Rename to `VITE_…` and restart the dev server. |

## 10. FAQ
**Q:** *Can I use TypeScript?*  
**A:** Yes. Install `typescript` and `@types/react`, rename files to `.tsx`, and Vite will handle the compilation automatically.

**Q:** *How do I add a CSS framework alongside Tailwind?*  
**A:** Install the framework (e.g., `npm i bootstrap`) and import its CSS in `src/main.jsx` **after** the Tailwind import to avoid specificity conflicts.

**Q:** *Where are the build artifacts?*  
**A:** After `npm run build`, the output resides in the `dist/` folder.

## 11. Appendix – Scripts Reference
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext .js,.jsx,.ts,.tsx"
}
```
- **dev** – Starts the development server.
- **build** – Produces a production‑ready bundle.
- **preview** – Serves the production bundle locally.
- **lint** – Runs ESLint across the `src` directory (configure ESLint separately if needed).

---
*End of Manual*