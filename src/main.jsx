import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./hooks/useAuth";
import AuthRedirect from "./components/auth/AuthRedirect";
import ToastWrapper from "./components/auth/ToastWrapper";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ThemeProvider from "./context/ThemeContext.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login";
import MainPage from "./pages/MainPage.jsx";
import ProductList from "./components/cart/ProductList";
import ProductDetail from "./components/cart/ProductDetail";
import CartList from "./components/cart/CartList";

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
            <Route path="/" element={<MainPage/>}>
              <Route index element={<ProtectedRoute><ProductList/></ProtectedRoute>} />
              <Route path="/product/:id" element={<ProtectedRoute><ProductDetail/></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute><CartList/></ProtectedRoute>} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ToastWrapper/>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
