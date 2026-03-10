import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PlacementLogos from "./components/PlacementLogo";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";

const Index = () => {
  return (
    <>
      <EnquiryPopup />
      <Header />
      <HeroSection />
      <PlacementLogos />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;