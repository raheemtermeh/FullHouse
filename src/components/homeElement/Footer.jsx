import React from "react";
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png";
const Footer = () => {
  return (
    <footer className="bg-[#111215] text-gray-400 py-8 text-right">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-white font-bold mb-4">شرکت</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  درباره ما
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  فرصت‌های شغلی
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  تاثیر جهانی
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  رهبری
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">محصولات</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  دانلودها و نسخه‌های آزمایشی
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  قیمت‌ها
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  مشاهده همه محصولات
                </a>
              </li>
            </ul>
          </div>

          {/* ستون ۳ */}
          <div>
            <h4 className="text-white font-bold mb-4">سایت‌های ما</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  مستندات
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  آموزش و گواهینامه‌ها
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  فروشگاه
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  ویدئوها
                </a>
              </li>
            </ul>
          </div>

          {/* ستون ۴ */}
          <div>
            <h4 className="text-white font-bold mb-4">تماس با ما</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  پشتیبانی
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  فروش
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a href="#" className="inline-block mr-2">
                <img
                  src={appStore}
                  alt="اپ استور"
                  className="w-32 rounded-xl"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src={googlePlay}
                  alt="گوگل پلی"
                  className="w-32 rounded-xl mb-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* جداکننده و حقوق */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© ۲۰۲۴ اسپلانک فارسی. تمامی حقوق محفوظ است.</p>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-white">
              شرایط استفاده
            </a>
            <a href="#" className="hover:text-white">
              تماس با ما
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
