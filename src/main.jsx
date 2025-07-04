import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./hooks/useAuth";
import AuthRedirect from "./components/auth/AuthRedirect";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ThemeProvider from "./context/ThemeContext.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthPage />}>
              <Route path="/register" element={<AuthRedirect><Register/></AuthRedirect>} />
              <Route path="/login" element={<AuthRedirect><Login/></AuthRedirect>} />
            </Route>
            <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
