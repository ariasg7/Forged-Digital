import { Navigation } from "../components/Navigation";
import { HeroParallax } from "../components/HeroParallax";
import { AntiTemplateSection } from "../components/AntiTemplateSection"
import { CTAButton } from "../components/CTAButton"
import {Services} from "../components/Services"
import { TrustBar } from "../components/TrustBar"
import { AboutUs } from "../components/AboutUs"
import { CompactProcess } from "../components/CompactProcess";
import { ToolCarousel } from "../components/ToolCarousel";
import { IndustryRibbon } from "../components/IndustryRibbon";
import { BentoPortfolio } from "../components/BentoPortfolio";
import { Testimonials } from "../components/Testimonials";
import { MinimalistContact } from "../components/MinimalistContact";
import { MinimalistFooter } from "../components/MinimalistFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      <section id = "hero"><HeroParallax /></section>
      <section className="bg-black">
        
      <section id = "aboutus" className="scroll-mt-24"><AboutUs /></section>
      <section id = "antitemplate" className="scroll-mt-24"><AntiTemplateSection /></section>
      
      <CTAButton text="Initate Blueprint" variant="secondary" />
      {/*<TrustBar />*/}
      <Services/>
      
      
      <CTAButton text="Initiate Blueprint" variant="primary" />
      <CompactProcess />
      <CTAButton text="Initiate Blueprint" variant="secondary" />
      <ToolCarousel />
      <IndustryRibbon />
      <BentoPortfolio />
      <CTAButton text="Initiate Blueprint" variant="primary" />
      <section id = "testimonials" className="scroll-mt-24">< Testimonials /></section>
      <CTAButton text="Initiate Blueprint" variant="secondary" />
      <section id = "form" className="scroll-mt-24">< MinimalistContact /></section>
      < MinimalistFooter />
      </section>
    </>
  );
}
