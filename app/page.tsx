import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SpotlightSection } from "@/components/spotlight-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E12]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <SpotlightSection />
      <TestimonialsSection />
      <ContactSection />
      <SocialSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
