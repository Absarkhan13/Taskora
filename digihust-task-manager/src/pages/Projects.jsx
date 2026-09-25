import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "DigiTask Website",
    description: "Build the main task management application.",
    tasks: 12,
    completed: 8,
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Create a modern personal portfolio.",
    tasks: 8,
    completed: 5,
  },
  {
    id: 3,
    name: "E-Commerce App",
    description: "Develop a responsive shopping application.",
    tasks: 20,
    completed: 11,
  },
];

function Projects() {
  return (
    <div className="page-content">
      <h1>Projects</h1>

      <p className="page-description">
        Manage your projects and track their progress.
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const progress = Math.round(
            (project.completed / project.tasks) * 100
          );

          return (
            <div className="project-card" key={project.id}>
              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <div className="project-info">
                <span>
                  {project.completed}/{project.tasks} Tasks
                </span>

                <strong>{progress}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <Link
                to={`/projects/${project.id}`}
                className="project-button"
              >
                View Project
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;