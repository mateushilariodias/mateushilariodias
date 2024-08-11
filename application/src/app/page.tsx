import Header from "@/components/common/Header";
import AboutSection from "@/components/homepage/AboutSection";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection/>
      <AboutSection/>
    </main>
  );
}
