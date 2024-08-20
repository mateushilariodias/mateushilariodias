import Agenda from "@/components/common/Agenda";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AboutSection from "@/components/homepage/AboutSection";
import FaqSection from "@/components/homepage/FaqSection";
import GalleryPresentationSection from "@/components/homepage/GalleryPresentationSection";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <GalleryPresentationSection/>
      <FaqSection/>
      <Agenda/>
      <Footer/>
    </main>
  );
}
