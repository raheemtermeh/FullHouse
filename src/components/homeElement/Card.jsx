import React from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/img_machine_learning_dark.png";
import pic3 from "../../assets/img-splunkbase-collection-cisco.png";


//باکس گنده ها 
const CardSection = () => {
  return (
    <section className="py-10 px-8 w-full">
      <div className=" justify-center items-center mb-10 ">
        <h2 className="text-3xl font-bold text-gray-200 text-center">
          مجموعه‌های Splunkbase
        </h2>

      </div>
      <div className="flex justify-center">
        <div className="grid  md:grid-cols-2 ">
          <div
            className="bg-[#1a1c20] ml-14 mb-4 rounded-lg shadow-2xl border border-gray-400 text-right flex"
            style={{ height: "350px", width: "80%" }}
          >
            <img
              src={pic2}
              alt="Cisco Apps"
              className="w-1/3 h-full object-cover rounded-md"
            />
            <div className="w-2/3 pl-4 p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                شروع با اپلیکیشن‌های Cisco
              </h3>
              <p className="text-gray-400 text-sm mb-4">24 راه‌حل</p>
              <p className="text-gray-400 text-sm mb-4">
                قدرت Cisco + Splunk را با این اپلیکیشن‌های بهبود یافته برای
                امنیت و مشاهده‌پذیری ببینید.
              </p>
              <button className="smky-btn3 text-[#ffffff] relative hover:text-[#ffffff] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#0013bb] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
                مشاهده اپلیکیشن‌ها
              </button>
            </div>
          </div>

          <div
            className="bg-[#1a1c20] ml-14 mb-4 rounded-lg border border-gray-400 shadow-2xl text-right flex"
            style={{ height: "350px", width: "80%" }}
          >
            <img
              src={pic3}
              alt="AI Apps"
              className="w-1/3 h-full object-cover rounded-md"
            />
            <div className="w-2/3 pl-4 p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                شروع با هوش مصنوعی
              </h3>
              <p className="text-gray-400 text-sm mb-4">9 راه‌حل</p>
              <p className="text-gray-400 text-sm mb-4">
                این اپلیکیشن‌ها و دستیارهای مبتنی بر یادگیری ماشین و هوش مصنوعی
                به شما قدرت یادگیری ماشین برای موارد استفاده رایج را با چند کلیک
                می‌دهند.
              </p>
              <button className="smky-btn3 text-[#ffffff] relative hover:text-[#ffffff] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#a500bb] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
                مشاهده اپلیکیشن‌ها
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="border text-white px-4 py-2 rounded-full hover:border-[#0013bb] hover:text-[#cc00ff]">
          دیدن پست‌های جدید
        </button>
      </div>
    </section>
  );
};

export default CardSection;

