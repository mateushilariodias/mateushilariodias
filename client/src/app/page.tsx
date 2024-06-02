import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomepageHeader from "@/components/HomepageHeader";

export default function Home() {
  return (
    <main  className="flex flex-col items-center justify-between bg-zinc-100">
      <HomepageHeader />
      {/* <HeroSection />
      <AboutSection />
      <Footer /> */}
    </main>
  );
}