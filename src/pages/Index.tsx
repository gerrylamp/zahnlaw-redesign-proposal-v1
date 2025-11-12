import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessSectors from "@/components/BusinessSectors";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BusinessSectors />
      <News />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
