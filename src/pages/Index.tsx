import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpaceSection from "@/components/SpaceSection";
import VideoCarousel from "@/components/VideoCarousel";
import EventsReservations from "@/components/EventsReservations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpaceSection />
        <VideoCarousel />
        <EventsReservations />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
