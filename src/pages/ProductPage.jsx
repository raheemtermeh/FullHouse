import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("summary");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("مشکلی در بارگذاری داده‌ها به وجود آمد.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const renderTabContent = () => {
    if (!product) return null;

    switch (activeTab) {
      case "summary":
        return (
          <div className="text-gray-300">
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-yellow-400 mt-2">قیمت: ${product.price}</p>
          </div>
        );
      case "details":
        return (
          <div className="text-gray-300">
            <p>دسته‌بندی: {product.category}</p>
            <p>
              رتبه: {product.rating?.rate} ({product.rating?.count} نظر)
            </p>
          </div>
        );
      case "installation":
        return (
          <div className="text-gray-300">
            <p>برای نصب این محصول لطفاً دستورالعمل‌های زیر را دنبال کنید...</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <p className="text-center text-gray-400">در حال بارگذاری...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="py-6 px-4">
      <div className="bg-[#111215] rounded-lg shadow-md p-6 text-right">
        <div className="flex items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-48 h-24 objext-cover rounded-md mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-200 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-yellow-400">قیمت: ${product.price}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex space-x-4 mb-4">
            <button
              className={`py-2 px-4 rounded ${
                activeTab === "summary"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setActiveTab("summary")}
            >
              خلاصه
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeTab === "details"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setActiveTab("details")}
            >
              جزئیات
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeTab === "installation"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setActiveTab("installation")}
            >
              نصب
            </button>
          </div>
          {renderTabContent()}
        </div>
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
