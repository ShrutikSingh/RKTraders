import { useState } from "react";
import { loginAdmin } from "../firebaseAuth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginAdmin(email, password);
      navigate("/admin/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-orange-600 text-white py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
