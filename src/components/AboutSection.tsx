import ScrollReveal from "./ScrollReveal";
import carHero from "@/assets/car-hero.png";
import { Eye, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-lg overflow-hidden border border-border border-glow">
              <img
                src={carHero}
                alt="LEGAWORKX Premium Automotive"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal direction="right">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">About Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Vision & Mission
              </h2>
              <div className="gradient-line max-w-[80px] mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex gap-4 mb-6">
                <div className="mt-1 shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2 tracking-wider uppercase">Vision</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To be the leading automotive solutions provider in the region, delivering innovative, high-quality, and technology-driven car care, customization, and service that exceeds customer expectations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.25}>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <Target className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2 tracking-wider uppercase">Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To provide comprehensive car care, customization, and maintenance services. To leverage AI and advanced technology for smarter diagnostics, predictive maintenance, and enhanced efficiency. To foster innovation, quality, and customer satisfaction in every aspect of automotive services.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
