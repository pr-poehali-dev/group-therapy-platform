import { useState } from "react";
import type { FormData } from "@/components/shared/data";
import {
  NavSection,
  HeroSection,
  PainSection,
  SolutionSection,
  HybridFormatSection,
  PsychologistsSection,
} from "@/components/sections/TopSections";
import {
  AccentDividerSection,
  BenefitsSection,
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
    psychologist: "",
    contactMethod: "telegram",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://functions.poehali.dev/d62b24a3-8e87-4210-bd46-21bc5792a72a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) { console.error(err); }
    try {
      await fetch('https://functions.poehali.dev/2a22ec45-740f-4b26-860c-5396f7362ff8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) { console.error(err); }
    setSubmitted(true);
  };

  const handlePsychologistSelect = (name: string) => {
    setFormData(f => ({ ...f, psychologist: name }));
  };

  return (
    <div className="font-body" style={{ backgroundColor: "var(--cream)" }}>
      <NavSection />
      <HeroSection />
      <PainSection />
      <PsychologistsSection onSelect={handlePsychologistSelect} />
      <HybridFormatSection />
      <SolutionSection />
      <AccentDividerSection />
      <BenefitsSection />
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