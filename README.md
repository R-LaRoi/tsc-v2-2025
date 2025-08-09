# TSC v2 2025 - Trupti Samuel Consultancy

A modern, responsive website for Trupti Samuel Consultancy, providing evidence-based parenting support and professional development services for families and educators.

## About

Trupti Samuel Consultancy specializes in evidence-based parenting guidance for families with children from birth to age fourteen. We empower parents and educators with the knowledge and tools needed to foster healthy family environments and support child development.

## Features

- **Responsive Design**: Built with Next.js 15 and Tailwind CSS for optimal viewing across all devices
- **Interactive Animations**: Smooth GSAP animations and scroll-triggered effects
- **Modern UI/UX**: Clean, professional design with CSS modules
- **Video Integration**: Hero section with embedded video content
- **Service Packages**: Three comprehensive support packages for different needs

## Service Packages

### Connection Package

**Parenting Consultation**

- Focus on parent-child relationships
- Family systems theory approach
- Enhanced parenting skills for behavior management

### Calm Package

**Baby Massage (BM)**

- Dedicated parent-infant bonding sessions
- Attachment theory-based approach
- Support for early development and sleep patterns

### Curious Package

**Professional Development for Educators**

- Tailored workshops for early childhood centers
- Trauma-informed practices
- Emotional and social development enhancement

## Tech Stack

- **Framework**: Next.js 15.4.6 with Turbopack
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.0 + CSS Modules
- **Animations**: GSAP 3.13.0 with ScrollTrigger
- **Language**: TypeScript 5
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tsc-v2-2025
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── MoreAbout.tsx
│   │   ├── Services.tsx
│   │   └── Packages.tsx
│   ├── styles/
│   │   ├── Hero.module.css
│   │   ├── Services.module.css
│   │   ├── MoreAbout.module.css
│   │   └── Packages.module.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
public/
├── assets/
│   ├── tscvidai.mp4
│   ├── icon-1.png
│   ├── icon-2.png
│   ├── icon-3.png
│   └── [images...]
```

## Components

- **Navigation**: Responsive navigation with mobile hamburger menu
- **Hero**: Video background with animated text overlays
- **MoreAbout**: Interactive image gallery with GSAP animations
- **Services**: Evidence-based parenting information with features
- **Packages**: Service package cards with icons and descriptions

## Configuration

- **ESLint**: Configured with Next.js and TypeScript rules
- **Tailwind CSS**: Custom configuration with PostCSS
- **Next.js**: Optimized for production with image optimization

## Responsive Design

The website is fully responsive with:

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Optimized images and videos

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

This project is private and proprietary to Trupti Samuel Consultancy.

---

**Contact**: For more information about our services, visit our website or contact Trupti Samuel Consultancy directly.
