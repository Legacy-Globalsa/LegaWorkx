import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import { Cog, Package, Music, Sofa, Monitor, Car, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carAccessories from "@/assets/car-accessories.png";

const categories = [
  {
    title: "Genuine & Aftermarket Parts",
    icon: Cog,
    items: [
      "OEM replacement parts for all major brands",
      "High-quality aftermarket alternatives",
      "Engine components & gaskets",
      "Brake pads, rotors & calipers",
      "Filters (oil, air, cabin, fuel)",
      "Belts, hoses & cooling system parts",
    ],
    description: "We source genuine manufacturer parts and trusted aftermarket alternatives to keep your vehicle running at its best, with competitive pricing and warranty coverage."
  },
  {
    title: "Performance Parts & Upgrades",
    icon: Package,
    items: [
      "Performance air intakes & filters",
      "Turbo & supercharger kits",
      "Performance exhaust headers & downpipes",
      "High-flow catalytic converters",
      "Performance brake kits",
      "Lightweight flywheels & clutch kits",
    ],
    description: "Unlock more power, better response, and improved handling with our range of performance-grade components sourced from top aftermarket manufacturers."
  },
  {
    title: "Car Cleaning & Care Products",
    icon: Package,
    items: [
      "Premium car shampoos & wash mitts",
      "Clay bars & decontamination kits",
      "Polishing compounds & pads",
      "Ceramic coating kits",
      "Interior cleaners & protectants",
      "Tire dressing & wheel cleaners",
    ],
    description: "Professional-grade cleaning and detailing products to maintain your vehicle's showroom finish between service appointments."
  },
  {
    title: "Interior Accessories",
    icon: Sofa,
    items: [
      "Custom-fit floor mats (all-weather & carpet)",
      "Seat covers (leather, neoprene, fabric)",
      "Steering wheel covers & grips",
      "Organizers & storage solutions",
      "Sun shades & windshield covers",
      "Ambient lighting kits",
    ],
    description: "Protect and personalize your cabin with premium interior accessories designed for a perfect fit and lasting durability."
  },
  {
    title: "Car Electronics",
    icon: Monitor,
    items: [
      "Dashcams (front, rear & 360°)",
      "Premium speakers & subwoofers",
      "Android Auto / Apple CarPlay head units",
      "GPS navigation systems",
      "Radar detectors",
      "LED & HID lighting kits",
    ],
    description: "Upgrade your vehicle's technology with the latest in-car electronics for safety, entertainment, and convenience."
  },
  {
    title: "Exterior Accessories",
    icon: Car,
    items: [
      "Spoilers & wing extensions",
      "Roof racks & cargo carriers",
      "Car covers (indoor & outdoor)",
      "Mud flaps & splash guards",
      "License plate frames",
      "Tow hooks & recovery gear",
    ],
    description: "Functional and aesthetic exterior accessories that enhance your vehicle's look, protection, and utility."
  },
];

const AccessoriesParts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Image background with left-aligned text */}
      <section className="relative min-h-[520px] md:min-h-[580px] overflow-hidden">
        <img src={carAccessories} alt="Accessories & Parts" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Parts & Gear</p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Accessories &<br /><span className="text-primary">Parts</span>
              </h1>
              <div className="gradient-line max-w-xs mb-6" />
              <p className="text-muted-foreground max-w-lg text-lg mb-10">
                From genuine OEM parts to premium accessories and performance upgrades, we stock everything
                you need to maintain, protect, and personalize your vehicle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">Request Parts <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-white/5" asChild>
                  <Link to="/#services">All Services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories grid — masonry-inspired with varying heights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Browse Categories</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Parts & Accessories</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.05}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                  {/* Colored top bar */}
                  <div className="h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                        <cat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{cat.title}</h3>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{cat.items.length} items</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                    <div className="space-y-1.5">
                      {cat.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <ChevronRight className="w-3 h-3 text-primary/60 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Grainient */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" zoom={0.7} timeSpeed={0.15} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-background" />
        <div className="relative z-10 text-center container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Need a Specific Part?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Contact us with your vehicle details and we'll source exactly what you need.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Request Parts <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessoriesParts;
