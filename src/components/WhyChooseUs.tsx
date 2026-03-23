import { Cpu, Layers, Settings, Users, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Cpu,
    title: "Innovation at Core",
    description: "AI-driven diagnostics, predictive maintenance, and smart solutions.",
  },
  {
    icon: Layers,
    title: "All-in-One Services",
    description: "Car care, customization, sales, and service under one roof.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "Personalized upgrades and services to meet your preferences.",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Skilled professionals dedicated to vehicle performance and aesthetics.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Seamless, reliable, and high-quality automotive experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-32 bg-grid-pattern">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">The Difference</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why LEGAWORKX
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.1} direction="scale">
              <div className="bg-card border border-border rounded-lg p-6 text-center card-hover-glow h-full flex flex-col items-center group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-2 tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
