import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import SideBar from "@/components/home/SideBar";
import NavBar from "@/components/home/Navbar";
import ProductList from "@/components/cart/ProductList";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const {
    products,
    loading,
    searchQuery,
    categories,
    setSearchQuery,
    searchProducts,
    changeCategories,
  } = useProducts();

  return (
    <div className={`${theme} min-h-screen font-[Poppins]`}>
      {/* Navbar */}
      <NavBar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchProducts={searchProducts}
      />

      {/* Main Layout */}
      <div className="flex flex-row">
        {/* Sidebar */}
        <SideBar
          isMobileMenuOpen={isMobileMenuOpen}
          categories={categories}
          changeCategories={changeCategories}
        />

        {/* Main Content */}
        <main className="flex-1 py-6 px-5 lg:py-16 lg:px-24">
          <div className="relative mx-auto md:ml-56">
            <ProductList products={products} loading={loading} />
          </div>
        </main>
      </div>
    </div>
  );
}
