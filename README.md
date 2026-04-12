<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-white?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js" alt="Three.js" />
  <h1>✨ Satya's Premium Portfolio</h1>
  <p>A stunning, modern, and interactive personal developer portfolio built with the latest bleeding-edge technologies.</p>
</div>

<br />

## 🚀 Overview
Welcome to my personal web portfolio ecosystem! This project is designed not just to elegantly display my experience as an AI Engineer, Cybersecurity Analyst, and Full Stack Developer, but also to serve as a benchmark for modern front-end web design. It features a complete Light Professional theme, cutting-edge CSS layouts, deep React 3D animations, and native system-like routing.

## 🛠 Features
- **3D Interactive Backgrounds**: Uses `@react-three/fiber` and `@react-three/drei` for highly optimized star particle backgrounds that respond natively to resize and canvas bounds.
- **Project Tilt Cards**: Hover dynamically over the Featured Projects to visualize beautiful 3D tilt behaviors created with custom `perspective` and `framer-motion` calculation loops.
- **Interactive Bash Terminal**: Features a fully functioning interactive command-line interface popup. Try navigating via the terminal inside the browser!
- **Custom Cursor Hardware**: Built a custom Framer Motion cursor follower bridging interactions beautifully with clickable actions.
- **Glassmorphism UI**: Uses extensive backdrop-blurs, transparent layered overlays, and sleek semantic variables adapting beautifully to modern standards.
- **Modern Routing & Tooling**: Built exclusively with Next.js 15 App Router standard utilizing Turbopack. Fully typed and built on modern `Tailwind CSS v4`.

## 💻 Tech Stack
- **Framework**: `Next.js (App Router)`
- **Styling**: `Tailwind CSS`, `Shadcn UI`
- **Animations**: `Framer Motion`
- **3D Rendering**: `Three.js`, `React Three Fiber`
- **Language**: `TypeScript`

## ⚙️ Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) and npm installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SatyaCMD/satyaverse.git
   cd satyaverse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the application.

## 📁 Architecture Highlights
```text
/src
 ├── /app              # Next.js 15 App entrypoints, page.tsx and layout configs.
 ├── /components
 │    ├── /layout      # Shared layout configurations like Navbar and footers.
 │    ├── /sections    # View logic divided by modules (Hero, About, Projects).
 │    ├── /three       # WebGL / React Three Fiber contexts (Particles).
 │    └── /ui          # Headless UI primitives (Shadcn, Project Cards, Terminal).
 └── /lib              # Shared utilities and Tailwind class integrators.
```

## 📫 Contact
Interested in collaborating or discussing AI/Cybersecurity? Let's connect!
- **GitHub**: [SatyaCMD](https://github.com/SatyaCMD)
- **LinkedIn**: [Satya](https://linkedin.com/in/satyacmd)

<p align="center"><i>Crafted with passion using Next.js 15 and Tailwind CSS.</i></p>
