# Vishwam Pandya - Personal Portfolio

A modern, glassmorphism-styled portfolio website built with React and Vite, deployed to GitHub Pages.

## Features

✨ **Glassmorphism Design** - Modern frosted glass aesthetic with smooth animations
🌓 **Dark/Light Theme** - Toggle between dark and light modes with persistent storage
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
✅ **Scroll Animations** - Smooth fade-in and slide-up animations on scroll
🔍 **Project Filtering** - Filter projects by technology tags
📝 **Blog Section** - Markdown-based blog with syntax highlighting
⚡ **Performance** - Built with Vite for fast build times
🚀 **Auto-Deployment** - GitHub Actions workflow for automatic deployment

## Tech Stack

- **Framework**: React 19+
- **Build Tool**: Vite
- **Styling**: CSS Modules + CSS Custom Properties
- **Markdown**: remark + remark-react + prism-react-renderer
- **Hosting**: GitHub Pages

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Update Your Information

1. **About Section** - Edit `src/components/About.jsx`
2. **Projects** - Edit `src/data/projects.js` and `src/data/skills.js`
3. **Blog Posts** - Add markdown files to `src/blog/`
4. **Contact Links** - Edit `src/components/Contact.jsx`
5. **Theme Colors** - Customize CSS variables in `src/styles/globals.css`

### Project Structure

```
src/
├── components/          # React components with CSS modules
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── data/               # Data files (projects, blog, skills)
├── styles/             # Global styles
├── blog/               # Markdown blog posts
└── App.jsx
```

## Deployment to GitHub Pages

### Step 1: Create Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

- Go to repo Settings → Pages
- Select `gh-pages` branch as source
- (Optional) Add custom domain CNAME

### Step 3: Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` automatically builds and deploys on every push to `main`.

Simply push your changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Your portfolio will be live at `https://YOUR_USERNAME.github.io` 🚀

## Performance

Built for speed with Vite, achieving Lighthouse scores of 95+ in all categories.

## License

MIT - feel free to use this template for your own portfolio!

---

Built with ❤️ using React, Vite, and GitHub Pages
