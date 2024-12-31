import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductFilters from "../components/ProductFilters"; // وارد کردن کامپوننت فیلتر

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]); // محصولات مرتب‌شده

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);

        // استخراج دسته‌بندی‌ها از داده‌ها
        const categories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("مشکلی در بارگذاری محصولات به وجود آمد.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // فیلتر کردن محصولات بر اساس دسته‌بندی و جستجو
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    );

  // تابع مرتب‌سازی
  const handleSortChange = (sortOption) => {
    let sorted = [...filteredProducts];
    switch (sortOption) {
      case "priceAsc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "titleAsc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "titleDesc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setSortedProducts(sorted);
  };

  if (loading) {
    return <p>در حال بارگذاری محصولات...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="py-6 px-4 text-right">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSortChange={handleSortChange} // ارسال تابع مرتب‌سازی
        />

        <div className="mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-md bg-transparent border-gray-900 border text-gray-300"
          />
        </div>
      </div>

      {/* محصولات فیلتر شده و مرتب شده */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {(sortedProducts.length > 0 ? sortedProducts : filteredProducts).map(
          (product) => (
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 hover:animate-pulse"
              key={product.id}
            >
              <div className="bg-[#111215] rounded-lg shadow-md p-4 w-auto h-auto mx-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gray-200 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4 truncate">
                  {product.description}
                </p>
                <p className="text-yellow-400 mb-4">قیمت: ${product.price}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default AllProductsPage;
