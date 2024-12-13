import React from "react";

const Support = () => {
  return (
    <div className="bg-primary text-white min-h-screen p-6 text-right">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">پشتیبانی</h1>
        <p className="text-lg leading-8">
          در صورتی که سوال یا مشکلی دارید، تیم پشتیبانی ما آماده پاسخگویی است.
          از طریق ایمیل یا فرم زیر با ما تماس بگیرید.
        </p>
        <form className="mt-6">
          <label className="block mb-2">ایمیل:</label>
          <input
            type="email"
            className="w-full p-2 mb-4 rounded-lg bg-secondary text-white"
          />
          <label className="block mb-2">پیام:</label>
          <textarea
            className="w-full p-2 mb-4 rounded-lg bg-secondary text-white"
            rows="4"
          ></textarea>
          <button className="px-6 py-2 bg-accent text-white rounded-lg">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
