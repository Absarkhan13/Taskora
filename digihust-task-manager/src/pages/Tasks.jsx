import {
  useCallback,
  useMemo,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import PageHeader from "../components/PageHeader";

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
      {
        id: 4,
        title: "Create Projects Page",
        description:
          "Build projects management page",
        priority: "high",
        completed: false,
      },
      {
        id: 5,
        title: "Create Team Page",
        description:
          "Fetch team members from API",
        priority: "medium",
        completed: false,
      },
      {
        id: 6,
        title: "Add Error Boundary",
        description:
          "Handle unexpected React errors",
        priority: "low",
        completed: true,
      },
      {
        id: 7,
        title: "Add Lazy Loading",
        description:
          "Implement React.lazy and Suspense",
        priority: "high",
        completed: false,
      },
      {
        id: 8,
        title: "Optimize Performance",
        description:
          "Use memoization techniques",
        priority: "medium",
        completed: false,
      },
    ]
  );

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const tasksPerPage = 4;

  const debouncedSearch = useDebounce(
    search,
    400
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const searchText =
        debouncedSearch.toLowerCase();

      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(searchText) ||
        task.description
          .toLowerCase()
          .includes(searchText);

      const matchesStatus =
        status === "all" ||
        (status === "completed" &&
          task.completed) ||
        (status === "pending" &&
          !task.completed);

      const matchesPriority =
        priority === "all" ||
        task.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    tasks,
    debouncedSearch,
    status,
    priority,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredTasks.length / tasksPerPage
    )
  );

  const paginatedTasks = useMemo(() => {
    const start =
      (currentPage - 1) *
      tasksPerPage;

    return filteredTasks.slice(
      start,
      start + tasksPerPage
    );
  }, [
    filteredTasks,
    currentPage,
  ]);

  const toggleTask = useCallback(
    (id) => {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                completed:
                  !task.completed,
              }
            : task
        )
      );
    },
    [setTasks]
  );

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
    setCurrentPage(1);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setPriority("all");
    setCurrentPage(1);
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingCount =
    tasks.length - completedCount;

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          title="Tasks"
          description="Manage your tasks, priorities and progress."
        />

        {/* Task Overview */}
        <div className="task-overview">
          <div className="task-overview-card">
            <div className="overview-icon blue">
              ✓
            </div>

            <div>
              <strong>
                {completedCount}
              </strong>

              <span>Completed</span>
            </div>
          </div>

          <div className="task-overview-card">
            <div className="overview-icon orange">
              ◷
            </div>

            <div>
              <strong>
                {pendingCount}
              </strong>

              <span>Pending</span>
            </div>
          </div>

          <div className="task-overview-card">
            <div className="overview-icon purple">
              #
            </div>

            <div>
              <strong>
                {tasks.length}
              </strong>

              <span>Total Tasks</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="task-filter-panel">
          <div className="task-search-modern">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={handleSearch}
            />
          </div>

          <select
            value={status}
            onChange={handleStatus}
          >
            <option value="all">
              All Status
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="completed">
              Completed
            </option>
          </select>

          <select
            value={priority}
            onChange={handlePriority}
          >
            <option value="all">
              All Priorities
            </option>

            <option value="high">
              High
            </option>

            <option value="medium">
              Medium
            </option>

            <option value="low">
              Low
            </option>
          </select>

          <button
            className="clear-filter-button"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>

        {/* Results */}
        <div className="task-results">
          <div>
            <strong>
              {filteredTasks.length}
            </strong>{" "}
            tasks found
          </div>

          <span>
            Page {currentPage} of{" "}
            {totalPages}
          </span>
        </div>

        {/* Task List */}
        <div className="tasks-list">
          {paginatedTasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                ✓
              </div>

              <h2>
                No tasks found
              </h2>

              <p>
                Try changing your search
                or filters.
              </p>

              <button
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            paginatedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
              />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="modern-pagination">
            <button
              onClick={() =>
                setCurrentPage(1)
              }
              disabled={
                currentPage === 1
              }
            >
              «
            </button>

            <button
              onClick={() =>
                setCurrentPage(
                  (page) =>
                    Math.max(
                      1,
                      page - 1
                    )
                )
              }
              disabled={
                currentPage === 1
              }
            >
              ←
            </button>

            {Array.from(
              {
                length: totalPages,
              },
              (_, index) =>
                index + 1
            ).map((page) => (
              <button
                key={page}
                className={
                  currentPage === page
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(page)
                }
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(
                  (page) =>
                    Math.min(
                      totalPages,
                      page + 1
                    )
                )
              }
              disabled={
                currentPage ===
                totalPages
              }
            >
              →
            </button>

            <button
              onClick={() =>
                setCurrentPage(
                  totalPages
                )
              }
              disabled={
                currentPage ===
                totalPages
              }
            >
              »
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Tasks;