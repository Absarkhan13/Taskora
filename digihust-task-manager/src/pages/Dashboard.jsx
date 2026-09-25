import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <div className="topbar">
          <h1>Dashboard</h1>

          <span>
            Welcome, {user?.name} 👋
          </span>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>12</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>28</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h3>18</h3>
            <p>Completed</p>
          </div>

          <div className="stat-card">
            <h3>10</h3>
            <p>Pending</p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;