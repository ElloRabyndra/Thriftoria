import { useOutletContext } from "react-router";
import ProductCard  from "./ProductCard";
import RenderProduct from "./RenderProduct";

export default function ProductList() {
  const { products, loading } = useOutletContext();
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