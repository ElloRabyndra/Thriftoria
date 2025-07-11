import { Link, useLocation } from "react-router";
import { Card } from "../ui/card";
import { ShoppingCart, User, Shirt, Footprints , Laptop } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProducts } from "@/hooks/useProducts";

export default function ({isMobileMenuOpen, categories, changeCategories, cart} ) {
  const { logout } = useAuth();
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const {thriftCategories, shirtsCategories, shoesCategories, gadgetsCategories} = useProducts();
  return (
    <Card
      className={`sidebar min-h-screen fixed z-10 right-0 bottom-0 top-16 mt-3 md:right-auto md:left-0 md:mt-0 shadow-xs border-none rounded-none w-60 border-r ${isMobileMenuOpen ? "sidebar-open" : "sidebar-close"}`}
    >
      <div className="py-6 px-4 md:py-0">
        <div className="space-y-3 mb-4">
          <h3 className="text-xs uppercase font-semibold mb-4 text-gray-500">
            User
          </h3>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-secondary/50 cursor-pointer">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>
          <Link to="/cart" className={`${isCartPage ? "bg-secondary/50 text-primary" : "hover:bg-secondary/50"} relative w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer`}>
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            <span className="absolute -top-1 left-6 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </Link>
        </div>

        <div className="mb-4">
          <h3 className="text-xs uppercase font-semibold mb-4 text-gray-500">
            Categories
          </h3>
          <div className="space-y-2">
            <Link to="/" onClick={() => changeCategories(thriftCategories)} className={`${!isCartPage && (categories === thriftCategories || categories.length === 0 ) ? "bg-secondary/50 text-primary" : "hover:bg-secondary/50"} w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer`}>
              <i className="bx bx-grid-alt text-2xl"></i>
              <span>All</span>
            </Link>
            <Link to="/" onClick={() => changeCategories(shirtsCategories)} className={`${!isCartPage && categories === shirtsCategories ? "bg-secondary/50 text-primary" : "hover:bg-secondary/50"} w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer`}>
              <Shirt className="h-5 w-5" />
              <span>Shirts</span>
            </Link>
            <Link to="/" onClick={() => changeCategories(shoesCategories)} className={`${!isCartPage && categories === shoesCategories ? "bg-secondary/50 text-primary" : "hover:bg-secondary/50"} w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer`}>
              <Footprints className="h-5 w-5" />
              <span>Shoes</span>
            </Link>
            <Link to="/" onClick={() => changeCategories(gadgetsCategories)} className={`${!isCartPage && categories === gadgetsCategories ? "bg-secondary/50 text-primary" : "hover:bg-secondary/50"} w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer`}>
              <Laptop className="h-5 w-5" />
              <span>Gadget</span>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs uppercase font-semibold mb-4 text-gray-500">
            Preference
          </h3>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-all duration-200 cursor-pointer"
          >
            <i className="bx bx-log-out text-2xl"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
