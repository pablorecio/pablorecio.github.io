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

## Environment Variables Setup

### PostHog Configuration

The project uses PostHog for analytics. To configure PostHog with environment variables:

#### Required Environment Variables
- `NEXT_PUBLIC_POSTHOG_KEY`: Your PostHog project key
- `NEXT_PUBLIC_POSTHOG_HOST`: PostHog API host (default: https://eu.i.posthog.com)

#### Local Development Setup

1. Create a `.env.local` file in the root directory:
```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_Dr4HuSTh5ssM6Gw0Shm5Vh3h0QFyMc0dI7omWNXdghW
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

2. Restart your development server:
```bash
npm run dev
```

#### Vercel Deployment Setup

**Option 1: Using Vercel CLI**
```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Set environment variables
vercel env add NEXT_PUBLIC_POSTHOG_KEY
vercel env add NEXT_PUBLIC_POSTHOG_HOST

# Deploy
vercel --prod
```

**Option 2: Using Vercel Dashboard**
1. Go to your project in the Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `NEXT_PUBLIC_POSTHOG_KEY`: `phc_Dr4HuSTh5ssM6Gw0Shm5Vh3h0QFyMc0dI7omWNXdghW`
   - `NEXT_PUBLIC_POSTHOG_HOST`: `https://eu.i.posthog.com`
4. Redeploy your application

#### How It Works

The PostHog configuration has been moved from the hardcoded `index.html` file to a React component (`src/components/PostHogProvider.tsx`) that uses environment variables. This provides:

- **Flexibility**: Different keys for development and production
- **Security**: No hardcoded keys in your repository
- **Maintainability**: Easy to update keys without code changes

#### Security Notes

- Never commit `.env.local` to version control
- Use different PostHog keys for development and production
- Consider using Vercel's built-in environment variable management for production

#### Troubleshooting

1. **PostHog not tracking**: Check that environment variables are properly set
2. **Environment variables not loading**: Ensure they start with `NEXT_PUBLIC_` for client-side access
3. **Fallback behavior**: If environment variables are not set, the system will fall back to the original hardcoded values

## Contact

- **Email**: pablo@recio.me
- **LinkedIn**: [linkedin.com/in/pablorecio](https://linkedin.com/in/pablorecio)
- **GitHub**: [github.com/pablorecio](https://github.com/pablorecio)
