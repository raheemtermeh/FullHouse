import React from "react";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/img_machine_learning_dark.png";
import pic3 from "../assets/img-splunkbase-collection-cisco.png";
import pic4 from "../assets/security.png";
import pic5 from "../assets/pipeline.png";
import pic6 from "../assets/accenture.png";

const data = [
  {
    img: pic2,
    title: "شروع با اپلیکیشن‌های Cisco",
    solutions: "24 راه‌حل",
    description:
      "قدرت Cisco + Splunk را با این اپلیکیشن‌های بهبود یافته برای امنیت و مشاهده‌پذیری ببینید.",
    buttonColor: "#0013bb",
  },
  {
    img: pic3,
    title: "شروع با هوش مصنوعی",
    solutions: "9 راه‌حل",
    description:
      "این اپلیکیشن‌ها و دستیارهای مبتنی بر یادگیری ماشین و هوش مصنوعی به شما قدرت یادگیری ماشین برای موارد استفاده رایج را با چند کلیک می‌دهند.",
    buttonColor: "#a500bb",
  },
  {
    img: pic1,
    title: "شروع با تحلیل داده‌ها",
    solutions: "15 راه‌حل",
    description:
      "با این مجموعه اپلیکیشن‌ها، داده‌های خود را تحلیل کنید و گزارش‌های دقیق ایجاد کنید.",
    buttonColor: "#ff5722",
  },

];

const Collections = () => {
  return (
    <div className="p-6">
      <section className="py-10 px-2 w-full">
        <div className="justify-center items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-200 text-center">
            مجموعه‌های Splunkbase
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1c20] ml-14 mb-4 rounded-lg shadow-2xl border border-gray-400 text-right flex"
                style={{ height: "350px", width: "80%" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-1/3 h-full object-cover rounded-md"
                />
                <div className="w-2/3 pl-4 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.solutions}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  <button className="smky-btn3 text-[#ffffff] mt-10 relative hover:text-[#ffffff] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#0013bb] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
                    مشاهده اپلیکیشن‌ها
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
