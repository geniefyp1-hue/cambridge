# Cambridge University Project

## Overview
This repository contains a **React** application bootstrapped with **Vite** and styled using **Tailwind CSS**. The project is pre‑configured with PostCSS (Tailwind + Autoprefixer) and includes a ready‑to‑run development environment.

## Features
- Fast development server powered by Vite
- Modern React with JSX/TSX support via `@vitejs/plugin-react`
- Utility‑first styling with Tailwind CSS (custom colors, fonts, background images)
- Automatic vendor prefixing via Autoprefixer
- Git‑aware `.gitignore` to keep the repo clean

## Prerequisites
- **Node.js** (v18 or later recommended)
- **npm** (comes with Node) or **yarn**/`pnpm`

## Installation
```bash
# Clone the repository
git clone <repository‑url>
cd <repo‑directory>

# Install dependencies
npm install   # or `yarn` / `pnpm install`
```

## Available Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the Vite development server (hot‑module reloading). |
| `npm run build` | Produces an optimized production build in the `dist/` folder. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs ESLint (if configured) to check code quality. |

## Project Structure
```
├─ .gitignore          # Files/folders ignored by Git
├─ package.json        # Project metadata, scripts, dependencies
├─ postcss.config.js   # PostCSS plugins (Tailwind, Autoprefixer)
├─ tailwind.config.js  # Tailwind configuration (content paths, theme extensions)
├─ vite.config.js      # Vite configuration (React plugin)
├─ src/                # React source files (components, pages, etc.)
└─ public/             # Static assets
```

## Configuration Highlights
- **Tailwind**: Custom colors, fonts, and background images are defined in `tailwind.config.js` under `theme.extend`.
- **Vite**: The React plugin is enabled in `vite.config.js` to support JSX/TSX and fast refresh.
- **PostCSS**: `postcss.config.js` loads Tailwind CSS and Autoprefixer, ensuring modern CSS output.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes with clear messages.
4. Open a Pull Request describing the changes.

Please keep the code style consistent and run `npm run lint` before submitting.

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---
*Happy coding!*