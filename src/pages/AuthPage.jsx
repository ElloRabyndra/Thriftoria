import {useContext } from "react";
import ToggleButton from "../components/theme/ToggleButton";
import { Link } from "react-router";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "../context/ThemeContext";

export default function AuthPage() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <section className={`${theme} flex flex-col items-center justify-center min-h-screen font-[Poppins]`}>
      <ToggleButton/>
      <div className="p-8 space-y-3 min-w-sm">
        <Outlet />
      </div>
    </section>
  );
}