export function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This App</h1>
      <p>
        This is a modern web application built with Vite, React 18, and TypeScript. It demonstrates
        best practices for building fast, scalable, and maintainable web applications.
      </p>
      <section>
        <h2>Features</h2>
        <ul>
          <li>⚡ Lightning-fast development with Vite</li>
          <li>⚛️ React 18 with hooks</li>
          <li>🔒 Type-safe with TypeScript</li>
          <li>🎨 Dark mode support</li>
          <li>🧪 Comprehensive testing setup</li>
          <li>📱 Responsive design</li>
        </ul>
      </section>
      <section>
        <h2>Technology Stack</h2>
        <ul>
          <li>Vite - Next generation frontend tooling</li>
          <li>React - UI library</li>
          <li>TypeScript - Type safety</li>
          <li>Vitest - Unit testing</li>
          <li>ESLint & Prettier - Code quality</li>
        </ul>
      </section>
    </div>
  );
}
