import { memo } from "react";

function TaskCard({
  task,
  onToggle,
}) {
  return (
    <div
      className={`task-card ${
        task.completed
          ? "task-completed"
          : ""
      }`}
    >
      <div className="task-card-left">
        <button
          className={`task-checkbox ${
            task.completed
              ? "checked"
              : ""
          }`}
          onClick={() =>
            onToggle(task.id)
          }
          aria-label={
            task.completed
              ? "Mark as pending"
              : "Mark as completed"
          }
        >
          {task.completed
            ? "✓"
            : ""}
        </button>

        <div className="task-card-content">
          <div className="task-title-row">
            <h3>{task.title}</h3>

            <span
              className={`priority ${
                task.priority
              }`}
            >
              {task.priority}
            </span>
          </div>

          <p>
            {task.description}
          </p>

          <div className="task-meta">
            <span>
              {task.completed
                ? "✓ Completed"
                : "◷ Pending"}
            </span>

            <span>Task #{task.id}</span>
          </div>
        </div>
      </div>

      <div className="task-card-action">
        <button
          className={
            task.completed
              ? "undo-button"
              : "complete-button"
          }
          onClick={() =>
            onToggle(task.id)
          }
        >
          {task.completed
            ? "Mark Pending"
            : "Complete Task"}
        </button>
      </div>
    </div>
  );
}

export default memo(TaskCard);