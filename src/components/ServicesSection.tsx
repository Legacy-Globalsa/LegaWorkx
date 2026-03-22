import { Sparkles, Wrench, Palette, Cpu, Car, Package, LifeBuoy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import carDetailing from "@/assets/car-detailing.png";
import carMechanical from "@/assets/car-mechanical.png";
import carCustom from "@/assets/car-custom.png";
import carDiagnostics from "@/assets/car-diagnostics.png";
import carSales from "@/assets/car-sales.png";
import carAccessories from "@/assets/car-accessories.png";
import carRoadside from "@/assets/car-roadside.png";

const services = [
  {
    icon: Sparkles,
    title: "Car Care & Detailing",
    description: "Full exterior/interior detailing, ceramic coatings, paint protection, tinting, and sanitization.",
    image: carDetailing,
  },
  {
    icon: Wrench,
    title: "Mechanical & Maintenance",
    description: "Oil changes, brake repair, engine diagnostics, transmission, A/C service, and scheduled maintenance.",
    image: carMechanical,
  },
  {
    icon: Palette,
    title: "Customization & Upgrades",
    description: "Body kits, vinyl wraps, performance tuning, suspension, audio systems, and LED lighting.",
    image: carCustom,
  },
  {
    icon: Cpu,
    title: "AI & Technology Services",
    description: "Smart diagnostics, predictive maintenance, GPS tracking, fleet management, and remote controls.",
    image: carDiagnostics,
  },
  {
    icon: Car,
    title: "Car Sales & Brokerage",
    description: "New and pre-owned sales, trade-ins, import/export, financing, and warranty assistance.",
    image: carSales,
  },
  {
    icon: Package,
    title: "Accessories & Parts",
    description: "Genuine and aftermarket parts, performance upgrades, electronics, and interior accessories.",
    image: carAccessories,
  },
  {
    icon: LifeBuoy,
    title: "Additional Services",
    description: "24/7 roadside assistance, vehicle storage, dent removal, classic restoration, and event vehicles.",
    image: carRoadside,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 bg-grid-pattern">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">What We Offer</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "up"}>
              <div className="group relative bg-card rounded-lg overflow-hidden border border-border card-hover-glow h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
