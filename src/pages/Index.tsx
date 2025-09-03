import { Contact } from "@/components/Contact";
import Features from "@/components/Features";
import FloatingButton from "@/components/FloatingButton";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconSlider from "@/components/IconSlider";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen w-screen">
        <Header />
        <Hero />
        <IconSlider /> 
        <Features />
        <Pricing />
        <Contact />
        <Footer />
        <FloatingButton />
    </div>
  );
};

export default Index;
