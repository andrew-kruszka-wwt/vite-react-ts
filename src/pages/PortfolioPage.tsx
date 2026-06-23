import './PortfolioPage.css';

export function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript',
      tags: ['React', 'TypeScript', 'Vite'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack application with real-time features',
      tags: ['Node.js', 'React', 'WebSocket'],
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-first responsive design showcase',
      tags: ['CSS', 'Responsive', 'Accessibility'],
    },
  ];

  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        <section className="portfolio-header">
          <h1>Portfolio</h1>
          <p className="portfolio-subtitle">Check out some of my recent work</p>
        </section>

        <section className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-header">
                <h2>{project.title}</h2>
              </div>
              <p className="card-description">{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
