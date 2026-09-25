import { useState } from "react";

import TaskCard from "../components/TaskCard";
import useLocalStorage from "../hooks/useLocalStorage";
import useDebounce from "../hooks/useDebounce";

function Tasks() {
  const [tasks, setTasks] = useLocalStorage(
    "digihust_tasks",
    [
      {
        id: 1,
        title: "Build Login Page",
        description:
          "Create authentication interface",
        priority: "high",
        completed: true,
      },
      {
        id: 2,
        title: "Create Dashboard",
        description:
          "Build responsive dashboard",
        priority: "medium",
        completed: false,
      },
      {
        id: 3,
        title: "Add React Router",
        description:
          "Implement protected routes",
        priority: "low",
        completed: false,
      },
    ]
  );

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(
    search,
    500
  );

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(
        debouncedSearch.toLowerCase()
      )
  );

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  return (
    <div className="page-content">

      <h1>Tasks</h1>

      <p className="page-description">
        Manage your daily tasks and track progress.
      </p>

      <div className="task-search">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="tasks-list">

        {filteredTasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Tasks;