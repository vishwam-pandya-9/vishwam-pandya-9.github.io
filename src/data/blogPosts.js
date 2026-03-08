export const blogPosts = [
  {
    id: 1,
    title: "Vibe Coding My Portfolio: Claude Did Most of It (Until It Didn't)",
    slug: "vibe-coding-portfolio",
    date: "2026-03-08",
    excerpt: "How I built a full React portfolio in a single session with Claude Code — and the real bugs I had to debug along the way.",
    tags: ["Vibe Coding", "AI", "React"],
    readTime: 5,
    content: `
      <h2>The Setup</h2>
      <p>There's a new way to build things. It doesn't involve Stack Overflow tabs, documentation rabbit holes, or staring at a blinking cursor at 2am wondering if you even know what you're doing. It's called vibe coding — and it's exactly what it sounds like.</p>
      <p>You describe what you want. The AI builds it. You review. Repeat.</p>
      <p>I wanted a personal portfolio website. React, GitHub Pages, a clean glassmorphism aesthetic, dark/light theme toggle, scroll animations, a project section, and a blog. In short: a full portfolio that would've taken me a week to build properly on my own.</p>
      <p>I opened Claude Code, described what I wanted, and watched it scaffold the entire thing. Vite + React, CSS modules, custom hooks for theme switching, an Intersection Observer hook for scroll animations, a GitHub Actions workflow for auto-deployment — all generated in minutes. I didn't write a single line of configuration. I just described the vibe.</p>

      <h2>The Issues (Because There Are Always Issues)</h2>
      <p>Here's the thing about vibe coding that nobody tells you: the AI is great at writing code, but it can't <em>see</em> your screen. And a lot of bugs are visual.</p>
      <p>The first thing I noticed after the site was up? The Work Experience section was completely invisible. Not broken — just... not showing. The DOM had the data. The component was rendering. But nothing appeared on the page.</p>
      <p>Turns out the culprit was a <code>.stagger</code> CSS animation class that set <code>opacity: 0</code> by default. The plan was for an Intersection Observer to add a <code>.visible</code> class when elements scrolled into view — but the Observer was only watching the parent <code>&lt;section&gt;</code>, not the individual child cards. So the cards sat there, invisible, forever waiting for a signal that was never coming.</p>
      <p>Fix? Two seconds. Remove <code>stagger</code> from the child elements. But finding it? That took some digging. Then the blog articles had the exact same bug. Same class, same invisible fate.</p>

      <h2>Adding Content on the Fly</h2>
      <p>Once the layout was actually visible, I asked Claude to add a dummy article. It created the blog entry, added the metadata, wrote the content. Done in one prompt. That part was pure vibe. No friction, no boilerplate, just intent → result.</p>

      <h2>Routing: When Clicking Does Nothing</h2>
      <p>The next problem: clicking "Read Article" did absolutely nothing. The links were there, styled correctly, pointing to the right slugs — but nothing happened. No navigation, no new page, no URL change.</p>
      <p>The root issue was that there was no routing. The fix involved wrapping the app in React Router's <code>HashRouter</code> (critical for GitHub Pages, which can't handle server-side redirects), setting up routes for <code>/</code> and <code>/blog/:slug</code>, and creating a <code>BlogPost</code> component that reads the slug from the URL and renders the matching article.</p>
      <p>It works now. Click an article — the page changes, the URL updates, the content loads.</p>

      <h2>What Vibe Coding Actually Feels Like</h2>
      <p>The <em>building</em> part is shockingly easy. Describing what you want and watching it materialize is genuinely exciting. The architecture, the boilerplate, the wiring — Claude handles all of it without complaint.</p>
      <p>But the <em>debugging</em> part still requires you. Not because the AI can't fix bugs — it absolutely can — but because you still have to <em>notice</em> the bug, describe it accurately, and understand the feedback loop. The AI can't see your screen. It doesn't know a section is invisible until you tell it.</p>
      <p>That's the real skill in vibe coding: not writing code, but being a good observer. Noticing what's wrong, communicating it clearly, and trusting the process.</p>
      <p>Today I built a full portfolio with a blog, routing, animations, and auto-deployment — in a single session. I hit three real bugs. I fixed all three. That's vibe coding. Mostly effortless. Occasionally humbling. Completely worth it.</p>
    `
  },
  {
    id: 2,
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
