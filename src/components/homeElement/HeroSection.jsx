import Banner from "../../assets/Banner1.png";
import TextField from "@mui/material/TextField";

const HeroSection = () => {
  return (
    <section className="text-white py-28">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="text-center lg:text-right lg:w-1/2 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-relaxed">
            از اسپلانک بیشترین بهره را ببرید <br /> با برنامه‌های کاربردی
          </h2>
          <p className="text-gray-200 mb-6">
            جستجو کنید و برنامه‌های مناسب برای نیازهای خود را پیدا کنید.
          </p>
          <div dir="">
            <TextField
              className="w-full lg:w-3/4 bg-dark rounded-md text-right"
              placeholder="دنبال چی می‌گردید؟"
              variant="outlined"
              color="secondary"
              focused
              InputProps={{
                style: {
                  backgroundColor: "dark",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontFamily: "IranianSans",
                  textAlign: "right",
                  direction: "rtl",
                  color: "white",
                },
              }}

            />
          </div>
        </div>

        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={Banner}
            alt="اپلیکیشن‌ها"
            className="w-full max-w-lg mx-auto rounded-lg shadow-xl animate-up-down"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
