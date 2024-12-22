import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@/index.css";
import App from "@/App.tsx";
import Login from "@/pages/login";
import Project from "@/pages/Project";
import ProjectsPage from "@/pages/admin/projects";
import AddProject from "@/pages/admin/projects/addProject";
import Dashboard from "@/pages/admin/dashboard.tsx";
import EmailPage from "@/pages/admin/email";
import ProtectedRoute from "./components/protectedRoute";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project/:id" element={<Project />} />

        {/* Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects/add"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/emails"
          element={
            <ProtectedRoute>
              <EmailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
