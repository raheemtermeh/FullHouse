import React from "react";

const NotFound = () => {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">صفحه مورد نظر یافت نشد!</p>
      <button
        className="mt-6 px-6 py-2 bg-accent text-white rounded-lg"
        onClick={() => (window.location.href = "/")}
      >
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
};

export default NotFound;
