import React from "react";

const Categories = () => {
  const categories = [
    { title: "امنیت", appsCount: 120, icon: "🔒" },
    { title: "مانیتورینگ", appsCount: 95, icon: "📊" },
    { title: "ادغام‌سازی", appsCount: 65, icon: "🔗" },
    { title: "هوش مصنوعی", appsCount: 45, icon: "🤖" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">دسته‌بندی‌ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="text-4xl">{category.icon}</div>
            <h2 className="text-xl font-bold mt-2">{category.title}</h2>
            <p className="text-sm text-gray-300">
              تعداد اپلیکیشن‌ها: {category.appsCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
