import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Taskora Platform",
      description:
        "Smart task and project management workspace for teams.",
      progress: 82,
      tasks: 12,
      completed: 9,
      members: 5,
      status: "In Progress",
      statusClass: "progress",
    },
    {
      id: 2,
      name: "Marketing Website",
      description:
        "Modern responsive website for digital marketing.",
      progress: 64,
      tasks: 18,
      completed: 11,
      members: 4,
      status: "In Progress",
      statusClass: "progress",
    },
    {
      id: 3,
      name: "Mobile Application",
      description:
        "Cross-platform mobile application project.",
      progress: 42,
      tasks: 24,
      completed: 10,
      members: 6,
      status: "Planning",
      statusClass: "planning",
    },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          title="Projects"
          description="Manage and monitor your projects."
        />

        <div className="projects-summary">
          <div>
            <strong>{projects.length}</strong>
            <span>Active Projects</span>
          </div>

          <div>
            <strong>54</strong>
            <span>Total Tasks</span>
          </div>

          <div>
            <strong>30</strong>
            <span>Completed Tasks</span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="professional-project-card"
              key={project.id}
            >
              <div className="project-card-header">
                <div className="project-icon">
                  {project.name
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <span
                  className={`project-status ${project.statusClass}`}
                >
                  {project.status}
                </span>
              </div>

              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <div className="project-progress-info">
                <span>Progress</span>

                <strong>
                  {project.progress}%
                </strong>
              </div>

              <div className="project-progress-bar">
                <span
                  style={{
                    width: `${project.progress}%`,
                  }}
                ></span>
              </div>

              <div className="project-stats">
                <div>
                  <strong>{project.tasks}</strong>
                  <span>Tasks</span>
                </div>

                <div>
                  <strong>
                    {project.completed}
                  </strong>
                  <span>Done</span>
                </div>

                <div>
                  <strong>{project.members}</strong>
                  <span>Members</span>
                </div>
              </div>

              <button
                className="view-project-button"
                onClick={() =>
                  navigate(
                    `/projects/${project.id}`
                  )
                }
              >
                View Project
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;