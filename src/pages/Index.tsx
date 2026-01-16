import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveNowSection from "@/components/LiveNowSection";
import DiscussionRoomsSection from "@/components/DiscussionRoomsSection";
import SupportSection from "@/components/SupportSection";
import CategoriesSection from "@/components/CategoriesSection";
import MentorsSection from "@/components/MentorsSection";
import TrendingSkillsSection from "@/components/TrendingSkillsSection";
import LatestSkillsSection from "@/components/LatestSkillsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LiveNowSection />
        <DiscussionRoomsSection />
        <SupportSection />
        <CategoriesSection />
        <MentorsSection />
        <TrendingSkillsSection />
        <LatestSkillsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
