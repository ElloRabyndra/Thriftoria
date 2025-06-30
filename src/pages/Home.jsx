import { useContext } from "react";
import ToggleButton from "@/components/theme/ToggleButton";
import { ThemeContext } from "@/context/ThemeContext";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useAuth();

  return (
    <section
      className={`${theme} flex items-center justify-center min-h-screen p-8 font-[Poppins]`}
    >
      <div className="absolute top-5 right-6">
        <ToggleButton />
      </div>

      <div className="min-h-screen flex items-center justify-center text-center">
        <div className="p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
          <p className="mb-4">Hello, {user?.email}!</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
