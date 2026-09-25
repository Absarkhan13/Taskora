import useFetch from "../hooks/useFetch";

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
      <div className="page-content">
        <h1>Team</h1>

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
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-content">
        <h1>Team</h1>

        <div className="error-box">
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1>Team</h1>

      <p className="page-description">
        View team members fetched from the API.
      </p>

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
    </div>
  );
}

export default Team;