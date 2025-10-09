# Pablo Recio - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Data-Driven**: Content managed through JSON files for easy updates
- **PDF Export**: Built-in PDF export functionality for resume
- **Performance Optimized**: Static generation with Next.js
- **SEO Ready**: Proper meta tags and structured data

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PDF Generation**: jsPDF + html2canvas
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pablorecio/pablorecio.github.io.git
cd pablorecio.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Experience.tsx  # Work experience
│   ├── Technologies.tsx # Tech stack
│   ├── Hobbies.tsx     # Hobbies section
│   ├── Contact.tsx     # Contact information
│   └── PDFExport.tsx  # PDF export functionality
├── data/              # JSON data files
│   ├── experience.json
│   ├── technologies.json
│   ├── hobbies.json
│   └── contact.json
└── lib/               # Utility functions
    └── utils.ts
```

## Customization

### Updating Content

All content is managed through JSON files in the `src/data/` directory:

- **Experience**: Edit `src/data/experience.json`
- **Technologies**: Edit `src/data/technologies.json`
- **Hobbies**: Edit `src/data/hobbies.json`
- **Contact**: Edit `src/data/contact.json`

### Styling

The project uses Tailwind CSS with custom configuration. Key files:

- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles and custom CSS
- `src/components/` - Component-specific styles

### Colors

The project uses a custom dark theme with green accents:

- Background: `#0E1116`
- Primary: `#22FF88`
- Card: `#11161D`
- Text: `#E6E6E6`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out/` directory
3. Deploy the contents to GitHub Pages

### Other Platforms

The project generates static files that can be deployed to any static hosting service.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### PDF Export

The portfolio includes a PDF export feature that generates a clean, printable version of the resume. The export uses:

- jsPDF for PDF generation
- html2canvas for content capture
- Custom styling for print optimization

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images and fonts

### Performance

- Static generation for fast loading
- Image optimization with Next.js Image component
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: pablo@recio.me
- **LinkedIn**: [linkedin.com/in/pablorecio](https://linkedin.com/in/pablorecio)
- **GitHub**: [github.com/pablorecio](https://github.com/pablorecio)
