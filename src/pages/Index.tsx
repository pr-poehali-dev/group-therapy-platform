import { useState } from "react";
import type { FormData } from "@/components/shared/data";
import {
  NavSection,
  HeroSection,
  PainSection,
  SolutionSection,
  PsychologistsSection,
  PhotoGallerySection,
  HowItWorksSection,
} from "@/components/sections/TopSections";
import {
  AccentDividerSection,
  DirectionsSection,
  BenefitsSection,
  ReviewsSection,
  PricingSection,
  FAQSection,
  FinalCTASection,
} from "@/components/sections/BottomSections";
import { FormSection } from "@/components/sections/FormSection";

export default function Index() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    topic: "",
    direction: "",
    contactMethod: "telegram",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://functions.poehali.dev/2a22ec45-740f-4b26-860c-5396f7362ff8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) { console.error(err); }
    setSubmitted(true);
  };

  const handleDirectionClick = (title: string) => {
    setFormData(f => ({ ...f, direction: title }));
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-body" style={{ backgroundColor: "var(--cream)" }}>
      <NavSection />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <PsychologistsSection />
      <PhotoGallerySection />
      <HowItWorksSection />
      <AccentDividerSection />
      <DirectionsSection onDirectionClick={handleDirectionClick} />
      <BenefitsSection />
      <ReviewsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <FormSection
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        handleSubmit={handleSubmit}
        privacyOpen={privacyOpen}
        setPrivacyOpen={setPrivacyOpen}
      />
    </div>
  );
}
