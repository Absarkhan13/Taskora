import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-logo">
        <h2>Taskora</h2>
        <span>WORKSPACE</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          Tasks
        </NavLink>

        <NavLink to="/projects">
          Projects
        </NavLink>

        <NavLink to="/team">
          Team
        </NavLink>
      </nav>

      {/* Logout */}
      <button
        className="sidebar-logout"
        onClick={handleLogout}
      >
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;