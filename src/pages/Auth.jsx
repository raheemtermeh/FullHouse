import React from "react";

const Auth = () => {
  return (
    <div className="container mx-auto p-6 rtl text-right">
      <h1 className="text-3xl font-bold mb-4">ورود/ثبت‌نام</h1>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md">
        <label className="block mb-4 text-gray-400">
          ایمیل:
          <input
            type="email"
            className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
            placeholder="ایمیل خود را وارد کنید"
          />
        </label>
        <label className="block mb-4 text-gray-400">
          رمز عبور:
          <input
            type="password"
            className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </label>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          ورود
        </button>
      </form>
    </div>
  );
};

export default Auth;
