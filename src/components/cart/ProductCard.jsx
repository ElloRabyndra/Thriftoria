import { ShoppingCart, Eye } from "lucide-react";
import { Card } from "../ui/card";

// ProductCard Component
export default function ProductCard({ product}) {
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price * 15000); 
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-translate duration-300 ">
      <div className="relative overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />

        {/* Detail icon */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button 
            className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase font-medium">
            {product.category.replace("-", " ")}
          </span>
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </div>

        <div className="mb-2">
          <p className="text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <button 
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-lg transition-all duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="text-sm font-medium">
            Add to Cart
          </span>
        </button>
      </div>
    </Card>
  );
}
