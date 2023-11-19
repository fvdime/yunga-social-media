import AboutUs from "@/components/landing-page-props/AboutUs";
import Footer from "@/components/landing-page-props/Footer";
import HeroBanner from "@/components/landing-page-props/HeroBanner";

export default async function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUs/>
      <Footer/>
    </>
  );
}
