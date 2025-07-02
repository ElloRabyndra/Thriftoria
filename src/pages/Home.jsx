import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import SideBar from "@/components/home/SideBar";
import NavBar from "@/components/home/Navbar";
import ProductList from "@/components/cart/ProductList";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const {products, loading, categories, changeCategories} = useProducts();

  return (
      <div className={`${theme} min-h-screen font-[Poppins]`}>
        {/* Navbar */}
        <NavBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

        {/* Main Layout */}
        <div className="flex flex-row">
          {/* Sidebar */}
          <SideBar isMobileMenuOpen={isMobileMenuOpen} categories={categories} changeCategories={changeCategories} />

          {/* Main Content */}
          <main className="flex-1 py-6 px-5 lg:py-16 lg:px-24">
            <div className="relative mx-auto md:ml-56">
              {/* <div className="mb-6">
                <h1 className="text-2xl font-bold text-primary">All Thrifts</h1>
              </div> */}
              <ProductList products={products} loading={loading} />
            </div>
          </main>
        </div>
      </div>
  );
}
