import { useState, useEffect } from "react";
import { getProducts, getSearchProducts } from "@/service/api";

// Daftar kategori thrift yang akan ditampilkan
export const thriftCategories = [
  "mens-shirts",
  "mens-shoes", 
  "tops",
  "womens-bags",
  "womens-dresses",
  "womens-shoes",
  "smartphones",
  "tablets",
  "mobile-accessories"
];

export const shirtsCategories = [
  "mens-shirts",
  "womens-dresses",
  "tops"
];

export const shoesCategories = [
  "mens-shoes",
  "womens-shoes"
];

export const gadgetsCategories = [
  "smartphones",
  "tablets",
  "laptops",
  "mobile-accessories"
];

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(thriftCategories);

  // Fungsi untuk mengambil semua produk 
  const fetchAllProducts = async (categories) => {
    setLoading(true);

    try {
      const data = await getProducts();
      
      // Filter hanya produk dari kategori thrift
      const thriftProducts = data.products.filter(product => 
        categories.includes(product.category)
      );
      
      setProducts(thriftProducts || []);
    } catch (error) {
      console.error("Error fetching all products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk pencarian produk
  const fetchSearchProducts = async (query) => {
    setLoading(true);

    try {
      const data = await getSearchProducts(query);
      setProducts(data.products || []);
    } catch(error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false);
    }
  }


  // Fungsi untuk mengubah kategori yang dipilih (hanya mengubah state)
  const changeCategories = (categories) => {
    setCategories(categories);
    setSearchQuery("");
  };

  // Fungsi pencarian produk
  const searchProducts =  (query) => {
    setCategories([]);
    fetchSearchProducts(query);
  }


  // fetch data ketika selectedCategory berubah
  useEffect(() => {
    categories.length > 0 && fetchAllProducts(categories);
  }, [categories]);

  return {
    products,
    loading,
    categories,
    searchQuery,
    setSearchQuery,
    thriftCategories,
    shirtsCategories,
    shoesCategories,
    gadgetsCategories,
    changeCategories,
    searchProducts
  };
};