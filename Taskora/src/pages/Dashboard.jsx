import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">OVERVIEW</p>

            <h1>Dashboard</h1>

            <p className="dashboard-subtitle">
              Welcome back, {user?.name}! Here's what's happening
              with your projects today.
            </p>
          </div>

          <div className="profile-badge">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{user?.name}</strong>
              <span>{user?.email}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon blue">📁</div>
              <span className="stat-change">+12%</span>
            </div>

            <h2>12</h2>
            <p>Active Projects</p>

            <div className="progress-bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon purple">✓</div>
              <span className="stat-change">+8%</span>
            </div>

            <h2>28</h2>
            <p>Total Tasks</p>

            <div className="progress-bar">
              <span style={{ width: "82%" }}></span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon green">✓</div>
              <span className="stat-change">+18%</span>
            </div>

            <h2>18</h2>
            <p>Completed Tasks</p>

            <div className="progress-bar">
              <span style={{ width: "64%" }}></span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon orange">⏳</div>
              <span className="stat-change neutral">4 due</span>
            </div>

            <h2>10</h2>
            <p>Pending Tasks</p>

            <div className="progress-bar">
              <span style={{ width: "36%" }}></span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">

          {/* Recent Tasks */}
          <section className="dashboard-panel">
            <div className="panel-header">
              <div>
                <h2>Recent Tasks</h2>
                <p>Your latest task activity</p>
              </div>

              <span className="panel-link">
                View all →
              </span>
            </div>

            <div className="recent-task">
              <div className="task-check completed">✓</div>

              <div className="recent-task-info">
                <strong>Build Login Page</strong>
                <span>Authentication interface</span>
              </div>

              <span className="priority-badge high">
                HIGH
              </span>
            </div>

            <div className="recent-task">
              <div className="task-check"></div>

              <div className="recent-task-info">
                <strong>Create Dashboard</strong>
                <span>Responsive dashboard</span>
              </div>

              <span className="priority-badge medium">
                MEDIUM
              </span>
            </div>

            <div className="recent-task">
              <div className="task-check"></div>

              <div className="recent-task-info">
                <strong>Add React Router</strong>
                <span>Protected routes</span>
              </div>

              <span className="priority-badge low">
                LOW
              </span>
            </div>
          </section>

          {/* Projects */}
          <section className="dashboard-panel">
            <div className="panel-header">
              <div>
                <h2>Project Progress</h2>
                <p>Current project status</p>
              </div>

              <span className="panel-link">
                Projects →
              </span>
            </div>

            <div className="project-progress">
              <div className="project-title">
                <strong>Taskora Platform</strong>
                <span>82%</span>
              </div>

              <div className="progress-track">
                <span style={{ width: "82%" }}></span>
              </div>
            </div>

            <div className="project-progress">
              <div className="project-title">
                <strong>Marketing Website</strong>
                <span>64%</span>
              </div>

              <div className="progress-track">
                <span style={{ width: "64%" }}></span>
              </div>
            </div>

            <div className="project-progress">
              <div className="project-title">
                <strong>Mobile App</strong>
                <span>42%</span>
              </div>

              <div className="progress-track">
                <span style={{ width: "42%" }}></span>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;