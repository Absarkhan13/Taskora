import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

function ProjectDetails() {
  const { projectId } = useParams();

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
      deadline: "October 15, 2026",
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
      deadline: "November 02, 2026",
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
      deadline: "December 10, 2026",
    },
  ];

  const project = projects.find(
    (item) => item.id === Number(projectId)
  );

  if (!project) {
    return (
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <PageHeader
            title="Project Not Found"
            description="The requested project does not exist."
            backTo="/projects"
          />

          <div className="empty-state">
            <h2>Project not found</h2>

            <p>
              Please return to the projects page.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const remaining =
    project.tasks - project.completed;

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          title={project.name}
          description={project.description}
          backTo="/projects"
        />

        {/* Project Hero */}
        <div className="project-details-hero">
          <div className="details-project-icon">
            {project.name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <p>PROJECT #{project.id}</p>

            <h2>{project.name}</h2>

            <span>
              Deadline: {project.deadline}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="project-details-stats">
          <div>
            <span>Total Tasks</span>
            <strong>{project.tasks}</strong>
          </div>

          <div>
            <span>Completed</span>
            <strong>{project.completed}</strong>
          </div>

          <div>
            <span>Remaining</span>
            <strong>{remaining}</strong>
          </div>

          <div>
            <span>Members</span>
            <strong>{project.members}</strong>
          </div>
        </div>

        {/* Progress */}
        <div className="details-panel">
          <div className="details-panel-header">
            <div>
              <h2>Project Progress</h2>

              <p>Overall project completion</p>
            </div>

            <strong>{project.progress}%</strong>
          </div>

          <div className="large-progress">
            <span
              style={{
                width: `${project.progress}%`,
              }}
            ></span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="details-panel">
          <div className="details-panel-header">
            <div>
              <h2>Project Activity</h2>

              <p>Latest project updates</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-dot green"></div>

            <div>
              <strong>Task completed</strong>

              <p>
                Build Login Page was completed.
              </p>
            </div>

            <span>Today</span>
          </div>

          <div className="activity-item">
            <div className="activity-dot blue"></div>

            <div>
              <strong>Project updated</strong>

              <p>
                Project progress was updated.
              </p>
            </div>

            <span>Yesterday</span>
          </div>

          <div className="activity-item">
            <div className="activity-dot purple"></div>

            <div>
              <strong>New member added</strong>

              <p>
                A new team member joined the project.
              </p>
            </div>

            <span>2 days ago</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetails;