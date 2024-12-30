import React from "react";

const ServerError = () => {
  return (
    <div className="container mx-auto p-6 rtl text-right text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">500</h1>
      <p className="text-gray-300 mb-6">
        خطای سرور. لطفاً بعداً دوباره تلاش کنید.
      </p>
    </div>
  );
};

export default ServerError;
