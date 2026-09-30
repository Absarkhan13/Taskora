# Taskora

### Smart Work. Simple Progress.

Taskora is a modern React-based task management application developed as part of the DigiHust Frontend Development Internship Phase 3 assignment.

The main purpose of the project is to demonstrate advanced React concepts such as global state management, protected routing, custom hooks, dynamic routes, code splitting, reusable components, localStorage synchronization, and performance-focused development.

## Live Demo

**Live Application:**
https://taskora-khan-2614.vercel.app/

## GitHub Repository

**Source Code:**
https://github.com/Absarkhan13/taskora

---

## Features

* User login and authentication state
* Protected routes
* Dashboard
* Task management interface
* Projects section
* Dynamic project details pages
* Team section
* Redux Toolkit for global authentication state
* LocalStorage synchronization
* Custom React hooks
* Debounced search functionality
* Fetch API hook
* Lazy loading with React.lazy
* Suspense loading states
* Error Boundary
* Reusable components
* Memoized TaskCard component
* Responsive user interface
* Vercel deployment

---

## Technologies Used

* React
* React Router
* Redux Toolkit
* React Redux
* JavaScript
* Vite
* Axios
* Lucide React
* CSS
* Vercel

---

## Project Structure

```text
src/
├── components/
│   ├── ErrorBoundary.jsx
│   ├── PageHeader.jsx
│   ├── PageLoader.jsx
│   ├── Sidebar.jsx
│   └── TaskCard.jsx
│
├── hooks/
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   └── useFetch.js
│
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Tasks.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   └── Team.jsx
│
├── redux/
│   ├── slices/
│   │   └── authSlice.js
│   └── store.js
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## State Management

Redux Toolkit is used for global authentication state.

The authentication state contains:

* Current user
* Authentication status
* Login action
* Logout action

User authentication data is synchronized with browser localStorage so that the login state can persist after refreshing the page.

---

## Custom Hooks

### useLocalStorage

Used for storing and retrieving data from browser localStorage while keeping the React state synchronized.

### useDebounce

Used to delay rapidly changing input values and reduce unnecessary operations.

### useFetch

A reusable hook created for handling API requests and loading/error states.

---

## Routing

React Router is used to manage application navigation.

The project includes:

* Login route
* Dashboard route
* Tasks route
* Projects route
* Dynamic project details route
* Team route
* Protected routes

Example dynamic route:

```text
/projects/:projectId
```

Unauthenticated users are redirected to the login page.

---

## Performance Features

The project includes several performance-focused techniques:

* React.lazy for route-level code splitting
* Suspense loading fallback
* React.memo for reusable task cards
* Debounced input handling
* Reusable components
* Lightweight UI structure
* Lazy-loaded pages

These techniques help reduce unnecessary rendering and improve the overall user experience.

---

## Error and Loading Handling

The application includes:

* Global Error Boundary
* Page loading component
* Suspense fallback
* Authentication route protection
* Loading states for asynchronous operations

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Absarkhan13/taskora.git
```

Move into the project directory:

```bash
cd taskora
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file if required.

Example:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

A `.env.example` file is included in the project for reference.

---

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## Deployment

The application is deployed using Vercel.

**Production URL:**

https://taskora-khan-2614.vercel.app/

Before submitting the project, the production URL should be tested in an incognito/private browser window to make sure the application itself loads without requiring Vercel authentication.

---

## Student Information

**Name:** Muhammad Absar Khan

**Assignment:** DigiHust Frontend Development Internship - Phase 3

**Assignment Number:** A03

**Project:** Taskora

---

## Conclusion

Taskora was developed to demonstrate practical knowledge of modern React development. The project focuses on reusable components, global state management, routing, authentication flow, custom hooks, performance optimization, and deployment.

The project also helped me understand how different React concepts work together in a complete single-page application.
