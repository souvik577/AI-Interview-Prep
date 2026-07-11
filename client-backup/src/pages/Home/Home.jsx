import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero/Hero";
import Features from "../../components/sections/Features/Features";
import HowItWorks from "../../components/sections/HowItWorks/HowItWorks";
import Pricing from "../../components/sections/Pricing/Pricing";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import FAQ from "../../components/sections/FAQ/FAQ";
import CTA from "../../components/sections/CTA/CTA";
import Footer from "../../components/layout/Footer";


const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default Home;