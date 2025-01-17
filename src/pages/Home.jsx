import HeroSection from "../components/homeElement/HeroSection";
import Footer from "../components/homeElement/Footer";
import CardSlider from "../components/homeElement/CardSlider";
import Section from "../components/homeElement/Section";
import pic1 from "../assets/pic1.jpg";
import CardSection from "../components/homeElement/Card";
import Build from "../components/homeElement/‌Build";

const Home = () => {
  const cardsitems = [
    {
      title: "Splunk Enterprise Security",
      description:
        "Splunk Enterprise Security (ES) طیف گسترده‌ای از تحلیل‌های امنیتی و موارد استفاده عملیاتی را حل می‌کند از جمله...",
      platform: "Splunk Enterprise, Splunk Cloud",
      company: "Splunk LLC",
      image: pic1,
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Splunk Add-on for Microsoft Windows",
      description:
        "افزونه Splunk برای Windows، از نسخه 7.0.0 به بعد، شامل ادغام تمام قابلیت‌های افزونه Splunk برای...",
      platform: "Splunk Enterprise, Splunk Cloud",
      company: "Splunk LLC",
      image: pic1,
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Splunk Add-on for Amazon Web Services (AWS)",
      description:
        "افزونه Splunk برای AWS، از نسخه 7.0.0 به بعد، شامل ادغام تمام قابلیت‌های افزونه Splunk برای...",
      platform: "Splunk Enterprise, Splunk Cloud",
      company: "Splunk LLC",
      image: pic1,
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Splunk Add-on for Unix and Linux",
      description:
        "افزونه Splunk برای Unix و Linux، از نسخه 7.0.0 به بعد، شامل ادغام تمام قابلیت‌های افزونه Splunk برای...",
      platform: "Splunk Enterprise, Splunk Cloud",
      company: "Splunk LLC",
      image: pic1,
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Splunk App for Content Packs",
      description:
        "Splunk App for Content Packs شامل مجموعه‌ای از محتواهای از پیش ساخته شده برای استفاده در Splunk Enterprise و Splunk Cloud است...",
      platform: "Splunk Enterprise, Splunk Cloud",
      company: "Splunk LLC",
      image: pic1,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Splunk Service Intelligence for SAP Solutions",
      description:
        "Splunk Service Intelligence for SAP Solutions به شما کمک می‌کند تا عملکرد و سلامت سیستم‌های SAP خود را مانیتور کنید...",
      platform: "Splunk Enterprise, Splunk Cloud",
      company: "Splunk LLC",
      image: pic1,
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <>
      <HeroSection />

      <CardSlider title="کارت‌های برتر" cards={cardsitems} />

      <Section
        title=" برنامه های جدید ساخته شده و پشتیبانی شده Splunk "
        cards={cardsitems}
      />

      <CardSection />

      <Section
        title=" برنامه های جدید ساخته شده و پشتیبانی شده Splunk "
        cards={cardsitems}
      />

      <CardSlider title="کارت‌های برتر" cards={cardsitems} />

        <Build />

      <Footer />
    </>
  );
};

export default Home;
