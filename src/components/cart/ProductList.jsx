import { useOutletContext } from "react-router";
import ProductCard from "./ProductCard";
import RenderProduct from "./RenderProduct";
import Empty from "../ui/Empty";

export default function ProductList() {
  const { products, loading, addToCart } = useOutletContext();
  if (loading) {
    return <RenderProduct />;
  }

  return (
    <>
      {products.length === 0 && <Empty>No products found</Empty>}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}
