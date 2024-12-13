import React from "react";

const UploadApp = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">آپلود اپلیکیشن</h1>
      <form className="bg-secondary p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold">نام اپلیکیشن:</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg bg-primary text-white"
            placeholder="نام اپلیکیشن خود را وارد کنید"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">توضیحات:</label>
          <textarea
            className="w-full p-2 rounded-lg bg-primary text-white"
            placeholder="توضیحاتی درباره اپلیکیشن وارد کنید"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">دسته‌بندی:</label>
          <select className="w-full p-2 rounded-lg bg-primary text-white">
            <option>امنیت</option>
            <option>مانیتورینگ</option>
            <option>ادغام‌سازی</option>
            <option>هوش مصنوعی</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">فایل اپلیکیشن:</label>
          <input
            type="file"
            className="w-full p-2 rounded-lg bg-primary text-white"
          />
        </div>
        <button className="bg-accent p-2 rounded-lg w-full">ارسال</button>
      </form>
    </div>
  );
};

export default UploadApp;
