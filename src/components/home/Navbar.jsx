import { Menu, Search, X } from "lucide-react";
import ToggleButton from "../theme/ToggleButton";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export default function NavBar({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  searchQuery, 
  setSearchQuery, 
  searchProducts 
}) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchQuery.trim() && searchProducts(searchQuery);
    isMobileMenuOpen && setIsMobileMenuOpen(false);
    }
  return (
    <Card className="p-0 block rounded-none border-none shadow-xs border-b sticky top-0 z-50">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex">
            <h1 className="text-2xl font-bold text-primary">Thriftoria</h1>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <form onSubmit={handleSearchSubmit}>
                  <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" placeholder="Search for thrift products..." />
                </form>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="relative">
              <ToggleButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ToggleButton />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-primary hover:bg-secondary/80 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <form onSubmit={handleSearchSubmit}>
                <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  className="pl-10" placeholder="Cari produk thrift..." />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
