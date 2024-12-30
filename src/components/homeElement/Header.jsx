import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 border-b border-blue-800 bg-[#08090a]">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
          splunkbase
        </h1>
      </Link>
      <nav className="flex flex-wrap justify-center space-x-4 rtl:space-x-reverse text-white mb-4 md:mb-0">
        <Link to="/collections" className="hover:text-gray-400">
          مجموعه‌ها
        </Link>
        <Link to="/apps" className="hover:text-gray-400">
          اپلیکیشن‌ها
        </Link>
        {/* <Link to="/docs" className="hover:text-gray-400">
          مستندات
        </Link> */}
        <Link to="/support" className="hover:text-gray-400">
          پشتیبانی
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          درباره ما
        </Link>
      </nav>

      <div className="flex flex-wrap justify-center md:justify-end space-x-4 rtl:space-x-reverse">
        <button className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-500">
          ارسال اپلیکیشن
        </button>
        <button className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-800">
          ورود
        </button>
      </div>
    </header>
  );
};

export default Header;
