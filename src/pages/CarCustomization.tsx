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

      {/* Categories — Sticky Sidebar + Scrolling Panels */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(rgba(219,36,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(219,36,36,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Full Spectrum</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Customization Categories</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sticky sidebar — category index */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <ScrollReveal>
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 mb-6">
                    <h3 className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Categories</h3>
                    <div className="space-y-1">
                      {categories.map((cat, i) => (
                        <div key={cat.title} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-colors duration-200 cursor-default">
                          <cat.icon className="w-4 h-4 text-primary/60 shrink-0" />
                          <span className="text-sm text-muted-foreground">{cat.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-5">
                    <span className="font-display text-4xl font-bold text-primary">{categories.length}</span>
                    <p className="text-xs text-muted-foreground mt-1">Customization categories covering every aspect of your vehicle</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Main content panels */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              {categories.map((cat, i) => (
                <ScrollReveal key={cat.title} delay={0.05}>
                  <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-5px_rgba(219,36,36,0.12)]">
                    {/* Image placeholder banner for each category */}
                    <div className="relative h-[160px] bg-gradient-to-r from-primary/6 via-card/80 to-card/40 border-b border-border/30 overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(219,36,36,0.08),transparent_60%)]" />
                      <div className="absolute top-4 right-5 font-display text-6xl font-bold text-primary/5 select-none">{String(i + 1).padStart(2, '0')}</div>
                      <div className="absolute bottom-4 left-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                          <cat.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cat.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.items.map(item => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground bg-card/50 px-3 py-2 rounded-lg border border-border/30">
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
