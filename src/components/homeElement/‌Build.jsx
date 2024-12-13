import React from "react";
import kali from "../../assets/kali-linux-background.jpg";
const Build = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-2/3 items-center text-white rounded-lg shadow-lg p-6 md:p-8 rtl relative overflow-hidden bg-[#111215] mb-10">
        {/* متن‌ها */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-right md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              هنوز اپلیکیشن مناسب خود را پیدا نکردید؟ خودتان بسازید!
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed">
              به عنوان یک توسعه‌دهنده، به منابع کامل دسترسی دارید و می‌توانید
              اپلیکیشن خود را برای حل مشکلات کاربران بسازید. همچنین می‌توانید از
              بیش از ۱۰۰۰ اپلیکیشن و افزونه‌های متنوع استفاده کنید.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center shadow-lg transform hover:scale-105"
              >
                ارسال اپلیکیشن شما
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 underline mt-2 transition-all duration-300 text-center"
              >
                مشاهده مستندات
              </a>
            </div>
          </div>

          {/* تصویر */}
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src={kali}
              alt="نماد اپلیکیشن"
              className="w-32 md:w-48 lg:w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
