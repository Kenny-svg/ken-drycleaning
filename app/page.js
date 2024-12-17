"use client";

import About from "./Components/About";
import ContactSection from "./Components/ContactSection";
import FeedbackSection from "./Components/Feedback";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <ServicesSection />
      <About />
      <FeedbackSection />
      <ContactSection />
    </div>
  );
}
