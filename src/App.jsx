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
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
