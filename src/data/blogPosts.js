export const blogPosts = [
  {
    id: 1,
    title: "Building a Portfolio with React & GitHub Pages",
    slug: "building-portfolio-react",
    date: "2026-03-08",
    excerpt: "A comprehensive guide to creating a modern portfolio website using React and deploying it to GitHub Pages.",
    tags: ["React", "GitHub Pages", "Web Development"],
    readTime: 8,
    content: `
      <h2>Why React for a Portfolio?</h2>
      <p>React's component model makes it easy to build reusable, maintainable UI pieces — perfect for a portfolio that evolves over time. Paired with Vite, you get lightning-fast builds and an excellent developer experience.</p>
      <h2>Setting Up the Project</h2>
      <p>Start by scaffolding a new Vite + React project:</p>
      <pre><code>npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install</code></pre>
      <h2>Deploying to GitHub Pages</h2>
      <p>GitHub Pages serves static files directly from a repository. For a user site (username.github.io), push your built files to the <code>gh-pages</code> branch. GitHub Actions automates this on every push to main.</p>
      <h2>Theming with CSS Variables</h2>
      <p>CSS custom properties enable seamless dark/light mode switching without JavaScript complexity. Define your palette on <code>:root</code> and toggle a data attribute on the HTML element.</p>
      <h2>Scroll Animations</h2>
      <p>The Intersection Observer API detects when elements enter the viewport and applies animation classes. This gives you smooth, performant entrance animations without any external library.</p>
    `
  },
  {
    id: 2,
    title: "Exploring the Latest LLM Models in 2026",
    slug: "latest-llm-models-2026",
    date: "2026-03-01",
    excerpt: "An overview of cutting-edge language models released in early 2026 and their practical applications.",
    tags: ["GenAI", "LLMs", "Machine Learning"],
    readTime: 12,
    content: `
      <h2>The State of LLMs in 2026</h2>
      <p>The landscape of large language models has shifted dramatically. Models are smaller, faster, and far more capable than their predecessors — with reasoning capabilities that were considered impossible just two years ago.</p>
      <h2>Key Trends</h2>
      <ul>
        <li><strong>Multimodality</strong> — Text, vision, audio, and code in a single model</li>
        <li><strong>Long context</strong> — Millions of tokens in a single pass</li>
        <li><strong>Agentic reasoning</strong> — Models that plan, reflect, and self-correct</li>
        <li><strong>Efficiency</strong> — Smaller models matching larger ones through distillation</li>
      </ul>
      <h2>Practical Applications for Backend Engineers</h2>
      <p>For backend developers, the most impactful use cases are intelligent data extraction, code generation, autonomous API orchestration, and structured output generation for downstream processing.</p>
      <h2>What to Watch</h2>
      <p>The convergence of agentic frameworks and long-context models is enabling entirely new categories of applications — systems that can autonomously navigate complex workflows over extended periods.</p>
    `
  },
  {
    id: 3,
    title: "CSS Variables: A Game Changer for Theming",
    slug: "css-variables-theming",
    date: "2026-02-20",
    excerpt: "How to leverage CSS custom properties for dynamic theming without JavaScript complexity.",
    tags: ["CSS", "Web Development", "Frontend"],
    readTime: 6,
    content: `
      <h2>What Are CSS Custom Properties?</h2>
      <p>CSS custom properties (also called CSS variables) are entities defined by developers that contain specific values to be reused throughout a document. They follow the syntax <code>--property-name: value</code>.</p>
      <h2>Defining a Theme System</h2>
      <pre><code>:root[data-theme='light'] {
  --bg-primary: #ffffff;
  --text-primary: #1a1a2e;
  --accent: #6366f1;
}

:root[data-theme='dark'] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  --accent: #818cf8;
}</code></pre>
      <h2>Switching Themes with JavaScript</h2>
      <p>Toggle themes by changing a single attribute on the root element. All variables cascade instantly — no component re-renders needed.</p>
      <pre><code>document.documentElement.setAttribute('data-theme', 'dark');</code></pre>
      <h2>Advantages Over CSS-in-JS</h2>
      <p>CSS variables require zero JavaScript at runtime, work with any styling approach, and are natively supported in all modern browsers. They're also inspectable in DevTools, making debugging a breeze.</p>
    `
  },
  {
    id: 4,
    title: "Intersection Observer API: Lazy Loading & More",
    slug: "intersection-observer-api",
    date: "2026-02-10",
    excerpt: "Master the Intersection Observer API for scroll animations, infinite scroll, and performance optimizations.",
    tags: ["JavaScript", "Performance", "Web APIs"],
    readTime: 10,
    content: `
      <h2>What Is the Intersection Observer?</h2>
      <p>The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or the document's viewport. It replaces expensive scroll event listeners.</p>
      <h2>Basic Usage</h2>
      <pre><code>const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.my-element'));</code></pre>
      <h2>Use Cases</h2>
      <ul>
        <li><strong>Scroll animations</strong> — Trigger CSS animations as elements enter the viewport</li>
        <li><strong>Lazy loading images</strong> — Only load images when they're about to be visible</li>
        <li><strong>Infinite scroll</strong> — Load more content when the user nears the bottom</li>
        <li><strong>Ad viewability</strong> — Track when ads are actually seen</li>
      </ul>
      <h2>Performance Benefits</h2>
      <p>Unlike scroll event listeners, Intersection Observer runs off the main thread. This means no jank, no dropped frames, and no need for debouncing or throttling.</p>
    `
  },
  {
    id: 5,
    title: "Getting Started with Agentic Systems",
    slug: "agentic-systems-guide",
    date: "2026-03-15",
    excerpt: "A practical guide to building autonomous AI agents that can reason, plan, and execute tasks independently.",
    tags: ["AI", "Agents", "Backend"],
    readTime: 15,
    content: `
      <h2>What Makes an Agent?</h2>
      <p>Agentic systems represent a paradigm shift in how we build AI applications. Unlike traditional request-response models, agents can autonomously reason, plan, and execute complex tasks with minimal human intervention.</p>
      <p>An agentic system typically consists of three core components: <strong>perception</strong> (observing the environment), <strong>reasoning</strong> (planning actions), and <strong>action</strong> (executing tasks and learning from outcomes).</p>
      <h2>Why Agents Matter for Backend Engineers</h2>
      <p>In modern backend systems, agents enable autonomous problem-solving, complex workflow automation across multiple systems, intelligent decision-making based on context, and graceful handling of unforeseen scenarios.</p>
      <h2>Building Your First Agent</h2>
      <pre><code>class SimpleAgent {
  constructor(name, tools) {
    this.name = name;
    this.tools = tools;
  }

  async think(task) {
    return await this.plan(task);
  }

  async plan(task) {
    return this.execute();
  }

  async execute() {
    // Perform the planned actions
  }
}</code></pre>
      <h2>Real-World Applications</h2>
      <ul>
        <li><strong>E-commerce</strong> — Autonomous customer service agents</li>
        <li><strong>DevOps</strong> — Self-healing infrastructure systems</li>
        <li><strong>Finance</strong> — Intelligent portfolio management</li>
        <li><strong>Content Creation</strong> — Autonomous research and writing assistants</li>
      </ul>
      <h2>The Road Ahead</h2>
      <p>As large language models become more capable, agentic systems will become increasingly sophisticated. The key challenge is ensuring they remain aligned with human values while operating autonomously. The next frontier in AI isn't just making models smarter — it's making them more autonomous and trustworthy.</p>
    `
  }
];
