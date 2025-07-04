import { Card } from "../ui/card";
import Loading from "../ui/loading";
import ProductCard  from "./ProductCard";
import RenderProduct from "./RenderProduct";
// ProductGrid Component
export default function ProductList({ products, loading }) {
  if (loading) {
    return (
      <RenderProduct />
    );
  }

  return (
    <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
}