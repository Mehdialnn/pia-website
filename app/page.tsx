import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import DashboardSection from "@/components/dashboard-section";
import FeatureSection from "@/components/feature-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialSection from "@/components/testimonial-section";
import FAQSection from "@/components/faq-section";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import ScrollFadeIn from "@/components/scroll-fade-in";
import TrustSection from "@/components/trust-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <TrustSection />
      <ScrollFadeIn>
        <StatsSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={100}>
        <DashboardSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={100}>
        <FeatureSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={100}>
        <HowItWorksSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={100}>
        <TestimonialSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={100}>
        <FAQSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={100}>
        <CTABanner />
      </ScrollFadeIn>
      <Footer />
    </div>
  );
}
