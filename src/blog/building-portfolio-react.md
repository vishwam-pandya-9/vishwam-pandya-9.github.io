# Building a Portfolio with React & GitHub Pages

Creating a personal portfolio is one of the best ways to showcase your skills and projects to potential employers and clients. In this guide, I'll walk you through building a modern portfolio website using React and deploying it to GitHub Pages.

## Why React for Your Portfolio?

React offers several advantages for building portfolios:

- **Component Reusability**: Build once, reuse everywhere
- **Performance**: Fast rendering with virtual DOM
- **Modern Stack**: Shows you're up-to-date with current technologies
- **Easy to Update**: Quick deployments and content updates

## Getting Started

### Step 1: Initialize Your Project

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

### Step 2: Set Up GitHub Pages Configuration

Update your `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

### Step 3: Create Your Components

Build reusable components for different sections:

- **Navigation**: Header with links
- **Hero**: Landing section
- **About**: Your bio and skills
- **Projects**: Showcase your work
- **Contact**: Ways to reach you
- **Footer**: Additional info

## Styling with CSS Modules

Using CSS modules keeps your styles scoped and maintainable:

```css
.card {
  padding: 2rem;
  border-radius: 8px;
  background: var(--bg-primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Theme System

Implement a theme system using React Context and CSS variables for dark/light mode switching.

## Deploying to GitHub Pages

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Final Thoughts

Building a portfolio in React not only showcases your work but also demonstrates your skills to potential employers. Focus on clean code, responsive design, and compelling project descriptions.

Happy coding! 🚀
