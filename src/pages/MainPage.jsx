import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import SideBar from "@/components/home/SideBar";
import NavBar from "@/components/home/Navbar";
import { Outlet } from "react-router";

export default function MainPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const {
    products,
    cart,
    totalPrice,
    loading,
    searchQuery,
    categories,
    setSearchQuery,
    searchProducts,
    changeCategories,
    addToCart,
    decreaseQuantity,
    removeFromCart,
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
          cart={cart}
        />

        {/* Main Content */}
        <main className="flex-1 py-6 px-5 lg:py-8 lg:px-24">
          <div className="relative mx-auto md:ml-56">
            <Outlet
              context={{
                products,
                cart,
                totalPrice,
                loading,
                addToCart,
                decreaseQuantity,
                removeFromCart,
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
