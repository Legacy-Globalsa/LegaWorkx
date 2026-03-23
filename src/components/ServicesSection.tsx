import { Sparkles, Wrench, Palette, Cpu, Car, Package, LifeBuoy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import Grainient from "./Grainient";
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
    link: "/services/car-care-detailing",
  },
  {
    icon: Wrench,
    title: "Mechanical & Maintenance",
    description: "Oil changes, brake repair, engine diagnostics, transmission, A/C service, and scheduled maintenance.",
    image: carMechanical,
    link: "/services/mechanical-maintenance",
  },
  {
    icon: Palette,
    title: "Customization & Upgrades",
    description: "Body kits, vinyl wraps, performance tuning, suspension, audio systems, and LED lighting.",
    image: carCustom,
    link: "/services/customization",
  },
  {
    icon: Cpu,
    title: "AI & Technology Services",
    description: "Smart diagnostics, predictive maintenance, GPS tracking, fleet management, and remote controls.",
    image: carDiagnostics,
    link: "/services/ai-technology",
  },
  {
    icon: Car,
    title: "Car Sales & Brokerage",
    description: "New and pre-owned sales, trade-ins, import/export, financing, and warranty assistance.",
    image: carSales,
    link: "/services/car-sales",
  },
  {
    icon: Package,
    title: "Accessories & Parts",
    description: "Genuine and aftermarket parts, performance upgrades, electronics, and interior accessories.",
    image: carAccessories,
    link: "/services/accessories-parts",
  },
  {
    icon: LifeBuoy,
    title: "Additional Services",
    description: "24/7 roadside assistance, vehicle storage, dent removal, classic restoration, and event vehicles.",
    image: carRoadside,
    link: "/services/additional",
  },
];


const ServicesSection = () => {

  return (
    <section id="services" className="relative overflow-hidden">

      {/* Grainient Hero Header */}
      <div className="relative h-[320px] md:h-[420px] w-full">
        <Grainient
          color1="#DB2424"
          color2="#0D0F11"
          color3="#6C707A"
          timeSpeed={0.25}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          contrast={1.5}
          zoom={0.9}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Header text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <ScrollReveal>
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 text-center">
              What We Offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Our Services
            </h2>
            <div className="gradient-line max-w-xs mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-center">
              We offer car rental solutions that are flexible to your schedule, affordable for any budget,
              and reliable when you need them most.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <Link to={service.link} className="block h-full">
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground tracking-wide">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
