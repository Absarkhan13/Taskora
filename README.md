# Taskora

### Smart Work. Simple Progress.

Taskora is a modern React-based task and project management SPA designed to help users manage tasks, projects, and team members from a single workspace.

The project was developed as part of the DigiHust Frontend Development Internship, Phase 3, focusing on advanced React engineering, state management, routing, custom hooks, performance optimization, and production-ready architecture.

---

## 🚀 Features

### Authentication
- User login interface
- Global authentication state using Redux Toolkit
- Authentication persistence using localStorage
- Protected application routes
- Automatic redirect for unauthenticated users
- Logout functionality

### Dashboard
- Personalized dashboard
- User profile information
- Task statistics
- Project progress overview
- Recent activity
- Modern responsive UI

### Task Management
- Create and manage tasks
- Mark tasks as completed or pending
- Task priority indicators
- Task descriptions
- Task status tracking
- Persistent task data using localStorage
- Reusable `TaskCard` component

### Project Management
- Project listing
- Project details page
- Dynamic project routes
- Project progress information
- Project statistics
- Task distribution by project

### Team Management
- Team members fetched from an external API
- Team member profiles
- Company information
- Loading skeletons
- API error handling

### Navigation
- React Router
- Protected routes
- Dynamic route parameters
- Nested routing architecture
- Navigation between dashboard sections
- Back navigation

### Performance
- React.lazy for code splitting
- Suspense loading states
- React.memo for component optimization
- Reusable custom hooks
- LocalStorage persistence
- Optimized component structure

### Error Handling
- Global Error Boundary
- API error states
- Loading states
- Fallback UI
- Retry functionality

### Responsive Design
- Responsive dashboard
- Mobile-friendly layouts
- Responsive task cards
- Responsive team and project grids
- Modern glassmorphism login interface

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| React Router | Routing and navigation |
| Redux Toolkit | Global state management |
| React Redux | Connecting React with Redux |
| Vite | Development and build tool |
| Axios | HTTP requests |
| Lucide React | Icons |
| CSS3 | Styling and responsive design |
| JSONPlaceholder | Demo API |
| ESLint/Oxlint | Code quality |

---

## 📁 Project Structure

```text
taskora/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── PageHeader.jsx
│   │   ├── PageLoader.jsx
│   │   ├── Sidebar.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── useFetch.js
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Tasks.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── Team.jsx
│   │
│   ├── redux/
│   │   ├── slices/
│   │   │   └── authSlice.js
│   │   └── store.js
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
