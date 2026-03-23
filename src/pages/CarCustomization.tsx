import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import { Palette, Car, Sofa, Gauge, Cog, Disc, Music, Cpu, Sun, Shield, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carCustom from "@/assets/car-custom.png";

const categories = [
  {
    title: "Exterior Customization",
    icon: Car,
    items: ["Custom Body Kits & Aero Packages", "Front & Rear Spoilers", "Custom Grilles & Mesh Inserts", "Wide-Body Conversions", "Carbon Fiber Accents & Trim"],
    description: "Transform your vehicle's exterior with aerodynamic body kits, aggressive spoilers, and custom grilles that turn heads on every road."
  },
  {
    title: "Paint & Wraps",
    icon: Palette,
    items: ["Custom Paint Colors & Finishes", "Full & Partial Vinyl Wrapping", "Matte, Satin & Chrome Wraps", "Paint Protection Film (PPF)", "Custom Livery & Graphic Design"],
    description: "Express your personality with custom paint jobs, premium vinyl wraps in any finish, and protective films that keep your vehicle flawless."
  },
  {
    title: "Interior Customization",
    icon: Sofa,
    items: ["Premium Leather Upholstery", "Custom Dashboard Design", "Ambient LED Lighting Systems", "Alcantara & Suede Accents", "Custom Steering Wheels & Shift Knobs"],
    description: "Elevate your cabin experience with luxury materials, ambient lighting, and bespoke interior design tailored to your vision."
  },
  {
    title: "Performance Upgrades",
    icon: Gauge,
    items: ["ECU Remapping & Engine Tuning", "Turbocharger & Supercharger Kits", "Performance Exhaust Systems", "Cold Air Intake Upgrades", "Intercooler & Radiator Upgrades"],
    description: "Unlock your engine's full potential with professional tuning, forced induction kits, and performance exhaust systems."
  },
  {
    title: "Suspension & Handling",
    icon: Cog,
    items: ["Coilover Suspension Kits", "Air Suspension Systems", "Lowering Springs & Kits", "Anti-Roll Bars & Strut Braces", "Performance Bushings"],
    description: "Dial in your ride height and handling characteristics with precision suspension components for street or track use."
  },
  {
    title: "Wheels & Tires",
    icon: Disc,
    items: ["Forged & Flow-Formed Custom Rims", "Performance Tire Packages", "Staggered Wheel Setups", "Wheel Spacers & Adapters", "Custom Powder Coating"],
    description: "Complete your build with stunning custom wheels, performance tires, and precision fitment for the ultimate stance."
  },
  {
    title: "Audio & Multimedia",
    icon: Music,
    items: ["Premium Car Stereo Systems", "Subwoofers & Amplifiers", "Touchscreen Head Units", "Bluetooth & Wireless Integration", "Sound Deadening & Acoustic Treatment"],
    description: "Experience concert-quality sound on every drive with professionally installed audio systems and multimedia upgrades."
  },
  {
    title: "Smart & Tech Upgrades",
    icon: Cpu,
    items: ["HD Dashcams & 360° Cameras", "Parking Sensors & Blind Spot Monitors", "Smart Key & Keyless Entry Systems", "OBD Performance Monitors", "Wireless Charging Integration"],
    description: "Bring your vehicle into the future with intelligent tech upgrades that enhance safety, convenience, and connectivity."
  },
  {
    title: "Lighting Customization",
    icon: Sun,
    items: ["LED Headlight Conversions", "Halo & Angel Eye Rings", "Daytime Running Lights (DRL)", "Fog Light Upgrades", "Underglow & Accent LEDs"],
    description: "Illuminate the road with modern LED conversions, custom halo rings, and accent lighting that makes your car unmistakable."
  },
  {
    title: "Window Tinting & Privacy",
    icon: Shield,
    items: ["Premium Ceramic Window Films", "UV-Blocking Tint Options", "Privacy Films for SUVs & Sedans", "Windshield Sun Strip Installation", "Color-Stable Nano-Film Technology"],
    description: "Enhance privacy, reduce heat, and block harmful UV rays with our selection of professional-grade window tinting films."
  },
];

const CarCustomization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Full-width image with Grainient blend */}
      <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" timeSpeed={0.2} zoom={0.85} />
        </div>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                  <img src={carCustom} alt="Car Customization" className="w-full h-[300px] md:h-[380px] object-cover" />
                </div>
                <div className="absolute -top-3 -right-3 bg-card border border-primary/30 px-4 py-2 rounded-lg">
                  <span className="font-display text-2xl font-bold text-primary">10</span>
                  <span className="text-xs text-muted-foreground block">Categories</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="order-1 lg:order-2">
                <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Make It Yours</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Customization &<br /><span className="text-primary">Upgrades</span>
                </h1>
                <div className="gradient-line max-w-xs mb-6" />
                <p className="text-muted-foreground max-w-lg text-lg mb-8">
                  From subtle refinements to full-scale transformations, our customization experts bring your automotive
                  vision to life with precision craftsmanship and premium components.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">Start Your Build <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories — Alternating feature layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Full Spectrum</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Customization Categories</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.05}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                        <cat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{cat.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                    <div className="grid grid-cols-1 gap-1.5">
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

      {/* CTA with Grainient background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" zoom={0.7} timeSpeed={0.15} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-background" />
        <div className="relative z-10 text-center container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Build Your Dream Ride</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Consult with our customization specialists to design a build that's uniquely yours.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Start Your Build <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarCustomization;
