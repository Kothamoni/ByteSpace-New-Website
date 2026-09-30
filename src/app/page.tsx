import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import CourseSection from "@/components/sections/CourseSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import GrowthSection from "@/components/sections/GrowthSection";
import CreateManageSection from "@/components/sections/CreateManageSection";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CourseSection />
        <CategoriesSection />
        <GrowthSection />
        <CreateManageSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
