import React, { useState } from "react";

const appsData = [
  {
    name: "اپلیکیشن امنیتی Cisco",
    category: "امنیت",
    description:
      "اپلیکیشن امنیتی Cisco با قابلیت یکپارچگی با Splunk برای تحلیل و مشاهده‌پذیری.",
    downloads: "12,345",
  },
  {
    name: "ابزارهای یادگیری ماشین",
    category: "یادگیری ماشین",
    description:
      "ابزارهایی برای استفاده از یادگیری ماشین در Splunk با چند کلیک.",
    downloads: "8,910",
  },
  {
    name: "نظارت بر شبکه",
    category: "عملیات IT",
    description:
      "راه‌حل‌های نظارت بر شبکه برای اطمینان از عملکرد و پایداری سیستم‌ها.",
    downloads: "7,521",
  },
  {
    name: "Splunk IT Service Intelligence",
    category: "عملیات IT",
    description:
      "اطلاعات هوشمند سرویس‌های IT برای شناسایی مشکلات و بهبود عملکرد.",
    downloads: "5,432",
  },
  {
    name: "تحلیل داده‌های بزرگ",
    category: "داده‌های بزرگ",
    description: "راه‌حل‌های مدیریت و تحلیل داده‌های حجیم برای کسب بینش بهتر.",
    downloads: "6,345",
  },
  {
    name: "مدیریت لاگ‌های سیستم",
    category: "تحلیل داده‌ها",
    description: "ابزاری برای مدیریت و تحلیل لاگ‌های سیستم در Splunk.",
    downloads: "4,789",
  },
  {
    name: "پلتفرم توسعه‌دهنده Splunk",
    category: "ابزارهای توسعه",
    description:
      "ابزاری برای توسعه‌دهندگان برای یکپارچه‌سازی و سفارشی‌سازی Splunk.",
    downloads: "3,210",
  },
  {
    name: "مدیریت زیرساخت‌های ابری",
    category: "مدیریت زیرساخت‌ها",
    description: "مدیریت سرورها و سرویس‌های ابری با قابلیت مانیتورینگ دقیق.",
    downloads: "2,954",
  },
];

const filters = [
  { label: "همه", value: "all" },
  { label: "امنیت", value: "امنیت" },
  { label: "یادگیری ماشین", value: "یادگیری ماشین" },
  { label: "عملیات IT", value: "عملیات IT" },
  { label: "داده‌های بزرگ", value: "داده‌های بزرگ" },
  { label: "تحلیل داده‌ها", value: "تحلیل داده‌ها" },
  { label: "ابزارهای توسعه", value: "ابزارهای توسعه" },
  { label: "مدیریت زیرساخت‌ها", value: "مدیریت زیرساخت‌ها" },
];

const Applications = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredApps =
    selectedFilter === "all"
      ? appsData
      : appsData.filter((app) => app.category === selectedFilter);

  return (
    <div className="flex flex-col md:flex-row bg-background min-h-screen text-gray-200">
      {/* Sidebar */}
      <aside className="w-full md:w-1/6 bg-background p-6 text-right border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-[#f39c12]">فیلترها</h2>
        <ul className="space-y-4">
          {filters.map((filter) => (
            <li key={filter.value}>
              <button
                className={`w-full text-right py-2 px-4 rounded-md ${
                  selectedFilter === filter.value
                    ? "bg-[#f39c12] text-black"
                    : "hover:bg-[#33373e]"
                }`}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">اپلیکیشن‌ها</h1>
          <p className="text-gray-400 text-lg mt-2">
            لیستی از اپلیکیشن‌های Splunk برای بهبود عملکرد شما.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((app, index) => (
              <div
                key={index}
                className="bg-[#1a1c20] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-2xl font-bold mb-2 text-[#f39c12]">
                  {app.name}
                </h2>
                <p className="text-sm text-gray-400">{app.category}</p>
                <p className="text-gray-300 mt-4">{app.description}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-gray-400 text-sm">
                    دانلودها: {app.downloads}
                  </span>
                  <button className="bg-[#f39c12] text-black py-2 px-4 rounded-md hover:bg-[#d87e05] transition">
                    جزئیات بیشتر
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              اپلیکیشنی یافت نشد.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Applications;
