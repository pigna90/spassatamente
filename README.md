# Spassatamente

<p align="center">
  <img src="public/logo.png" alt="Spassatamente Logo" width="200">
</p>

A React application built with TypeScript and Vite, featuring modern UI animations with Framer Motion and routing capabilities.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Framer Motion** for animations
- **Emotion** for styled components
- **React Router** for navigation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## How to Modify

1. Make your changes to the source code in the `src/` directory
2. Test locally using `npm run dev`
3. Commit and push your changes to the repository
4. **GitHub Actions will automatically handle deployment** when changes are pushed to the main branch

The project is configured with automated deployment via GitHub Actions - no manual deployment steps required!

## Favicon Optimization Required

⚠️ **Action Needed**: The current favicon is 399KB and needs optimization for better performance.

Generate optimized favicon files using [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/):

- `favicon.ico` (16x16, 32x32, 48x48px) - ~5KB max
- `favicon-16x16.png` (16x16px) - ~1KB max  
- `favicon-32x32.png` (32x32px) - ~2KB max
- `apple-touch-icon.png` (180x180px) - ~10KB max
- `android-chrome-192x192.png` (192x192px) - ~10KB max
- `android-chrome-512x512.png` (512x512px) - ~25KB max

Place these files in the `public/` directory. The HTML structure is already configured to use them.
