# Sivaram Seela — Personal Portfolio Website

A premium, modern, responsive personal portfolio website for **Sivaram Seela**, Senior DCS Architect and RF/Wireless Engineering Expert specializing in railway communications, CBTC, train-to-ground wireless communication, RF engineering, network architecture, and emerging AI applications in engineering.

---

## 🛠️ Tech Stack & Architecture

- **React 19 & TypeScript**: Component-driven, strictly typed UI architecture.
- **Tailwind CSS (v4)**: Modern utility-first styling with custom dark engineering theme, grid geometry, and typography scales.
- **Lucide React**: High-contrast, lightweight technical vector icons.
- **Pure SVG/CSS Telemetry Animations**: Interactive visualizations (`RailwayNetworkAnimation`, `AiEngineeringFlow`, `RfLinkCalculatorMini`) with no heavy 3D or video dependencies.
- **Static Architecture**: Zero database, zero backend dependencies, blazing fast load times (Lighthouse 95+ performance).

---

## 🚀 Quick Start & Local Development

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

---

## 🌐 Vercel Deployment

This project is built using a clean static architecture and can be deployed directly to **Vercel** with zero extra configuration.

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Framework Preset: **Vite** (or **Other**).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 📝 How to Update Content

All content is centrally managed in **`src/data/portfolioData.ts`** and typed in **`src/types.ts`**.

### 1. Update Profile Information, Email & LinkedIn
Open `src/data/portfolioData.ts` and modify the `PERSONAL_INFO` object:
```typescript
export const PERSONAL_INFO = {
  name: 'Sivaram Seela',
  title: 'Senior DCS Architect & RF/Wireless Engineering Expert',
  email: 'sivaramseela@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sivaramseela-94128913',
  // ...
};
```

### 2. Add New Projects or Architecture Studies
Add a new item to the `PROJECTS` array in `src/data/portfolioData.ts`:
```typescript
{
  id: 'new-project-id',
  title: 'High-Speed Maglev DCS Architecture',
  category: 'railway', // 'railway' | 'rf' | 'ai-simulation'
  typeLabel: 'Production Architecture', // or 'Concept / Architecture Study'
  problem: 'Description of the engineering challenge...',
  approach: 'Architectural methodology and technologies...',
  technologies: ['CBTC', '5G-R', 'Beamforming'],
  outcome: 'Quantifiable reliability impact...',
  metrics: [
    { label: 'Latency', value: '< 10ms' }
  ]
}
```

### 3. Update Career Timeline & Experience
Modify the `EXPERIENCE_HISTORY` array in `src/data/portfolioData.ts` with updated positions, responsibilities, or milestones.

---

## 🎨 Visual Identity & Engineering Aesthetic

- **Color Palette**:
  - Deep Space Canvas: `#0B0F17` & `#070A10`
  - Accent / Primary Glow: Electric Cyan (`#38BDF8`) & Sky Blue (`#0EA5E9`)
  - Status Indicators: Emerald Green (`#10B981`) & Amber (`#F59E0B`)
- **Typography**: Plus Jakarta Sans (Body & Titles) paired with JetBrains Mono (Technical telemetry, math, & labels).
- **Accessibility**: Strict compliance with `prefers-reduced-motion` and WCAG AA contrast standards.

---

## 📄 License
© 2026 Sivaram Seela. All rights reserved.
