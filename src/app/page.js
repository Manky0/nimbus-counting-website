import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ApplicationsSection from "./components/ApplicationsSection";
import AdvantagesSection from "./components/AdvantagesSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import AboutCompany from "./components/CompanySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <ApplicationsSection />
        <AdvantagesSection />
        <AboutCompany/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
