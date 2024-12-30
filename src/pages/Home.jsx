import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/homeElement/HeroSection";
import Footer from "../components/homeElement/Footer";
import CardSlider from "../components/homeElement/CardSlider";
import Section from "../components/homeElement/Section";
import CardSection from "../components/homeElement/Section";
import Build from "../components/homeElement/‌Build";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white py-10">
        در حال بارگذاری محصولات...
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <CardSlider title="کارت‌های برتر" cards={products.slice(0, 8)} />
      <Section
        title="برنامه‌های جدید ساخته‌شده و پشتیبانی‌شده"
        apiEndpoint="https://fakestoreapi.com/products"
      />
      <Section
        title="محصولات محبوب"
        apiEndpoint="https://fakestoreapi.com/products"
      />
      <CardSlider title="کارت‌های دیگر" cards={products.slice(8)} />
      <Build />
      
    </>
  );
};

export default Home;