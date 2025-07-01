import { Card } from "../ui/card";
import { ShoppingCart, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function ({isMobileMenuOpen}) {
  const { user, logout } = useAuth();
  return (
    <Card
      className={`right-0 mt-3 md:right-auto md:translate-x-0 md:mt-0 shadow-xs border-none rounded-none w-60 border-r h-auto min-h-screen fixed top-16 transition-all duration-300 ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="py-6 px-4 md:py-0">
        <div className="space-y-3 mb-8">
          <h3 className="text-xs uppercase font-semibold mb-4 text-gray-500">
            User
          </h3>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-secondary/50 cursor-pointer">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>
          <button className="relative w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-secondary/50 cursor-pointer">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            <span className="absolute -top-1 left-6 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xs uppercase font-semibold mb-4 text-gray-500">
            Categories
          </h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/50 text-primary cursor-pointer">
              <i className="bx bx-grid-alt text-2xl"></i>
              <span>All</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-secondary/50 cursor-pointer">
              <i className="text-2xl text-primary bx bx-grid-alt"></i>
              <span>Clothes</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-secondary/50 cursor-pointer">
              <i className="text-2xl text-primary bx bx-grid-alt"></i>
              <span>Shoes</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-secondary/50 cursor-pointer">
              <i className="text-2xl text-primary bx bx-grid-alt"></i>
              <span>Jacket</span>
            </button>
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
