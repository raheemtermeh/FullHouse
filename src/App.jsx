import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Header from "./components/homeElement/Header";
import Collections from "./pages/Collections";
import Docs from "./pages/Docs";
import Applications from "./pages/Applications";
import Footer from "./components/homeElement/Footer";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Wishlist from "./pages/Wishlist";
import ServerError from "./pages/ServerError";
import AllProductsPage from "./pages/AllProductsPage";

const App = () => {
  return (
    <Router>
      <div className="bg-primary text-white min-h-screen font-IranianSans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/apps" element={<Applications />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/products"
            element={
              <AllProductsPage apiEndpoint="https://fakestoreapi.com/products" />
            }
          />

          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
