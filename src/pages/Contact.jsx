import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6 rtl text-right">
      <h1 className="text-3xl font-bold mb-4">تماس با ما</h1>
      <p className="text-gray-300 mb-6">
        اگر سوال یا پیشنهادی دارید، می‌توانید از طریق فرم زیر با ما تماس بگیرید.
      </p>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md">
        <label className="block mb-4 text-gray-400">
          نام:
          <input
            type="text"
            className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
            placeholder="نام خود را وارد کنید"
          />
        </label>
        <label className="block mb-4 text-gray-400">
          ایمیل:
          <input
            type="email"
            className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
            placeholder="ایمیل خود را وارد کنید"
          />
        </label>
        <label className="block mb-4 text-gray-400">
          پیام:
          <textarea
            className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
            placeholder="پیام خود را بنویسید"
            rows="4"
          ></textarea>
        </label>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Contact;
