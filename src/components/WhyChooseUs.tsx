import { Cpu, Layers, Settings, Users, Heart, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Grainient from "./Grainient";

const reasons = [
  {
    icon: Cpu,
    title: "Innovation at Core",
    description: "AI-driven diagnostics, predictive maintenance, and smart solutions that keep you ahead of the curve.",
    stat: "98%",
    statLabel: "Diagnostic Accuracy",
  },
  {
    icon: Layers,
    title: "All-in-One Services",
    description: "Car care, customization, sales, and service under one roof — your single automotive destination.",
    stat: "7+",
    statLabel: "Service Categories",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "Personalized upgrades and services crafted to match your unique style and driving preferences.",
    stat: "100%",
    statLabel: "Custom Fit",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Skilled professionals dedicated to maximizing vehicle performance, safety, and aesthetics.",
    stat: "50+",
    statLabel: "Certified Experts",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Seamless, reliable, and high-quality automotive experiences built around your satisfaction.",
    stat: "4.9",
    statLabel: "Client Rating",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-28 md:py-36 overflow-hidden">
      {/* Grainient background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Grainient
          color1="#DB2424"
          color2="#0D0F11"
          color3="#6C707A"
          zoom={1.2}
          timeSpeed={0.15}
          warpStrength={0.8}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 max-w-6xl mx-auto">
          <ScrollReveal>
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">The Difference</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why <span className="text-primary">LEGAWORKX</span>
              </h2>
              <div className="gradient-line max-w-xs" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground max-w-md lg:text-right leading-relaxed">
              We combine cutting-edge technology with hands-on expertise to deliver an automotive experience unlike any other.
            </p>
          </ScrollReveal>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-5">
          {reasons.slice(0, 3).map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.1}>
              <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 h-full overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.15)]">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-foreground font-display">{reason.stat}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{reason.statLabel}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {reason.description}
                </p>

                <div className="flex items-center text-xs text-primary font-medium uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row: 2 wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {reasons.slice(3).map((reason, i) => (
            <ScrollReveal key={reason.title} delay={(i + 3) * 0.1}>
              <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 h-full overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.15)]">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500">
                      <reason.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-lg font-semibold text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <div className="text-right ml-4 flex-shrink-0">
                        <span className="block text-2xl font-bold text-foreground font-display">{reason.stat}</span>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{reason.statLabel}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    <div className="flex items-center text-xs text-primary font-medium uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Learn More <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
