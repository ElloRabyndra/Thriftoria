import {useContext } from "react";
import ToggleButton from "../components/theme/ToggleButton";
import { Outlet } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

export default function AuthPage() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <section className={`${theme} flex flex-col items-center justify-center min-h-screen font-[Poppins]`}>
      <div className="absolute top-5 right-6"><ToggleButton/></div>
      <div className="p-8 space-y-3 min-w-sm">
        <Outlet />
      </div>
    </section>
  );
}