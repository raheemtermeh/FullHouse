import React from "react";

const Profile = () => {
  return (
    <div className="bg-primary text-white min-h-screen p-6 text-right">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">پروفایل کاربری</h1>
        <div className="bg-secondary p-4 rounded-lg">
          <h2 className="text-xl font-semibold">نام کاربر: علی محمدی</h2>
          <p className="text-lg">ایمیل: ali.mohamadi@example.com</p>
          <p className="text-lg">عضویت: 1402/01/01</p>
        </div>
        <button className="mt-6 px-6 py-2 bg-accent text-white rounded-lg">
          ویرایش پروفایل
        </button>
      </div>
    </div>
  );
};

export default Profile;
