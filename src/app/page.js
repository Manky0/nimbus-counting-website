import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ApplicationsSection from "./components/ApplicationsSection";
import AdvantagesSection from "./components/AdvantagesSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import AboutCompany from "./components/CompanySection";
import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R3J9004T8N" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-R3J9004T8N');
        `}
      </Script>
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
