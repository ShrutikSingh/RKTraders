// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import FloatingButtons from "./components/FloatingButtons";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const location = useLocation();

  // Check if current route is admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Hide footer on specific public routes (About, Contact)
  const footerHiddenRoutes = ["/about", "/contact"];
  const showFooter = !isAdminRoute && !footerHiddenRoutes.includes(location.pathname);

  return (
    <>
      {/* Show Navbar only on public pages */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Show Footer only on selected public pages */}
      {showFooter && <Footer />}
      {!isAdminRoute && <FloatingButtons />}
    </>
  );
}

export default App;
