import { Navigation } from "../src/components/Navigation";
import { HeroParallax } from "../src/components/HeroParallax";
import { AntiTemplateSection } from "../src/components/AntiTemplateSection"
import { CTAButton } from "../src/components/CTAButton"
import { TrustBar } from "../src/components/TrustBar"
import { AboutUs } from "../src/components/AboutUs"
import { CompactProcess } from "../src/components/CompactProcess";
import { ToolCarousel } from "../src/components/ToolCarousel";
import { IndustryRibbon } from "../src/components/IndustryRibbon";
import { BentoPortfolio } from "../src/components/BentoPortfolio";
import { Testimonials } from "../src/components/Testimonials";
import { MinimalistContact } from "../src/components/MinimalistContact";
import { MinimalistFooter } from "../src/components/MinimalistFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      <section id = "hero"><HeroParallax /></section>
      <section className="bg-black">
      <section id = "antitemplate" className="scroll-mt-24"><AntiTemplateSection /></section>
      
      <CTAButton text="Initate Blueprint" variant="secondary" />
      <TrustBar />
      <section id = "aboutus" className="scroll-mt-24"><AboutUs /></section>
      
      
      <CTAButton text="Initate Blueprint" variant="primary" />
      <CompactProcess />
      <CTAButton text="Initate Blueprint" variant="secondary" />
      <ToolCarousel />
      <IndustryRibbon />
      <BentoPortfolio />
      <CTAButton text="Initate Blueprint" variant="primary" />
      <section id = "testimonials" className="scroll-mt-24">< Testimonials /></section>
      <CTAButton text="Initate Blueprint" variant="secondary" />
      <section id = "form" className="scroll-mt-24">< MinimalistContact /></section>
      < MinimalistFooter />
      </section>
    </>
  );
}
