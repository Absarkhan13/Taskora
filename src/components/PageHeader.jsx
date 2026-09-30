import { useNavigate } from "react-router-dom";

function PageHeader({
  title,
  description,
  backTo = "/dashboard",
}) {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      <button
        className="back-button"
        onClick={() => navigate(backTo)}
      >
        <span>←</span>
        <span>Back</span>
      </button>

      <div className="page-header-content">
        <p className="page-label">TASKORA</p>

        <h1>{title}</h1>

        {description && (
          <p className="page-description">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default PageHeader;