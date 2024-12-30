import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const HomeData = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // شبیه‌سازی فراخوانی API
    const fetchProducts = async () => {
      const data = await fetch("/api/products").then((res) => res.json());
      dispatch({ type: "SET_PRODUCTS", payload: data });
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h1>محصولات</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeData;
