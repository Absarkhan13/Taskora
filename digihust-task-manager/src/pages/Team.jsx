import useFetch from "../hooks/useFetch";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

function Team() {
  const {
    data: users,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <PageHeader
            title="Team"
            description="View and collaborate with your workspace team members."
          />

          <div className="skeleton-list">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                className="skeleton-card"
                key={item}
              >
                <div className="skeleton-avatar"></div>

                <div className="skeleton-content">
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <PageHeader
            title="Team"
            description="View and collaborate with your workspace team members."
          />

          <div className="error-box">
            <h2>Something went wrong</h2>

            <p>{error}</p>

            <button
              onClick={() =>
                window.location.reload()
              }
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          title="Team"
          description="View and collaborate with your workspace team members."
        />

        <div className="team-grid">
          {users?.map((user) => (
            <div
              className="team-card"
              key={user.id}
            >
              <div className="team-avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <h3>{user.name}</h3>

                <p>{user.email}</p>

                <span>
                  {user.company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Team;