import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import SideBar from "@/components/home/SideBar";
import NavBar from "@/components/home/Navbar";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`${theme} min-h-screen font-[Poppins]`}>
        {/* Navbar */}
        <NavBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

        {/* Main Layout */}
        <div className="flex flex-row">
          {/* Sidebar */}
          <SideBar isMobileMenuOpen={isMobileMenuOpen} />

          {/* Main Content */}
          <main className="flex-1 py-6 px-5 lg:py-16 lg:px-24">
            <div className="min-h-[200vh] mx-auto md:ml-56">
            </div>
          </main>
        </div>
      </div>
  );
}
