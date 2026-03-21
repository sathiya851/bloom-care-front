import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import DoctorsSection from "@/components/DoctorsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    <DoctorsSection />
    <FacilitiesSection />
    <ReviewsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
