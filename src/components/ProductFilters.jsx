import React from "react";

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSortChange, // تابع مرتب‌سازی
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* فیلتر دسته‌بندی */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <h2 className="text-xl font-bold text-gray-200">دسته‌بندی</h2>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="p-2 bg-[#08090a] border border-gray-800 text-gray-300 rounded-md"
        >
          <option value="">همه دسته‌ها</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* فیلتر مرتب‌سازی */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <h2 className="text-xl font-bold text-gray-200">مرتب‌سازی</h2>
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="p-2 bg-[#08090a] border border-gray-800 text-gray-300 rounded-md"
        >
          <option value="">مرتب‌سازی بر اساس</option>
          <option value="priceAsc">قیمت (صعودی)</option>
          <option value="priceDesc">قیمت (نزولی)</option>
          <option value="titleAsc">عنوان (الفبایی)</option>
          <option value="titleDesc">عنوان (معکوس)</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
