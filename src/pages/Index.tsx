import { useState } from "react";
import type { FormData } from "@/components/shared/data";
import {
  NavSection,
  HeroSection,
  TrialTeaserSection,
  TrialOfferSection,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const payload = JSON.stringify(formData);
    Promise.allSettled([
      fetch('https://functions.poehali.dev/d62b24a3-8e87-4210-bd46-21bc5792a72a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }),
      fetch('https://functions.poehali.dev/2a22ec45-740f-4b26-860c-5396f7362ff8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }),
    ]).then((results) => {
      results.forEach((r) => {
        if (r.status === 'rejected') console.error(r.reason);
      });
    });
  };

  const handlePsychologistSelect = (name: string) => {
    setFormData(f => ({ ...f, psychologist: name }));
  };

  return (
    <div className="font-body" style={{ backgroundColor: "var(--cream)" }}>
      <NavSection />
      <HeroSection />
      <TrialTeaserSection />
      <TrialOfferSection />
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