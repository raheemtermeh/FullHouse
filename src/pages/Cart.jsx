import React from "react";

const Cart = () => {
  return (
    <div className="container mx-auto p-6 rtl text-right">
      <h1 className="text-3xl font-bold mb-4">سبد خرید</h1>
      <p className="text-gray-300 mb-6">سبد خرید شما در حال حاضر خالی است.</p>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
        بازگشت به فروشگاه
      </button>
    </div>
  );
};

export default Cart;
