function TaskCard({ task, onToggle }) {
  return (
    <div className="task-card">
      <div>
        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <span className={`priority ${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-actions">
        <span>
          {task.completed ? "Completed" : "Pending"}
        </span>

        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;