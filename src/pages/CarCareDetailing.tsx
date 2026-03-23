import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import { Sparkles, Droplets, Shield, Sun, Car, Wind, Gauge, Sofa, Gem, SprayCan, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carDetailing from "@/assets/car-detailing.png";

const services = [
  { icon: Droplets, title: "Full Exterior Wash & Wax", description: "A thorough hand wash followed by premium wax application to protect your vehicle's paint and deliver a showroom-quality shine that lasts." },
  { icon: Shield, title: "Paint Protection & Coatings", description: "Advanced ceramic and nano coatings that form an invisible barrier against UV rays, chemical stains, bird droppings, and road contaminants." },
  { icon: Sparkles, title: "Polishing & Scratch Removal", description: "Multi-stage machine polishing to eliminate swirl marks, light scratches, and oxidation, restoring your paint to its original luster." },
  { icon: Sun, title: "Headlight Restoration", description: "Professional restoration of yellowed or hazy headlights using wet sanding and UV-resistant clear coating for improved visibility and aesthetics." },
  { icon: Car, title: "Glass Treatment & Window Tinting", description: "Hydrophobic glass coatings for rain repellency and premium window tinting films that block UV rays, reduce glare, and enhance privacy." },
  { icon: Gauge, title: "Tire & Rim Cleaning", description: "Deep cleaning and detailing of wheels and tires using specialized degreasers and protective dressings for a factory-fresh look." },
  { icon: Wind, title: "Engine Bay Cleaning", description: "Safe and thorough engine bay degreasing and detailing that improves aesthetics and helps identify potential leaks or wear." },
  { icon: Sofa, title: "Interior Deep Cleaning", description: "Complete interior rejuvenation including carpet shampooing, seat extraction, dashboard conditioning, and crevice detailing." },
  { icon: Gem, title: "Leather Conditioning & Treatment", description: "Premium leather cleaning, conditioning, and protection services that keep your leather seats supple, crack-free, and looking brand new." },
  { icon: SprayCan, title: "Odor Removal & Sanitization", description: "Industrial-grade ozone treatment and antimicrobial fogging to eliminate stubborn odors from smoke, pets, mold, and bacteria." },
];

const highlights = [
  "Premium products only",
  "Certified detailing experts",
  "Interior & exterior services",
  "Ceramic coating specialists",
];

const CarCareDetailing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Split layout with image */}
      <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" timeSpeed={0.2} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Premium Services</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Car Care &<br /><span className="text-primary">Detailing</span>
                </h1>
                <div className="gradient-line max-w-xs mb-6" />
                <p className="text-muted-foreground max-w-lg text-lg mb-8">
                  From a quick exterior wash to comprehensive paint correction and ceramic coatings, our detailing
                  experts use only premium products and techniques to keep your vehicle looking immaculate.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">Book Detailing <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                  <img src={carDetailing} alt="Car Care & Detailing" className="w-full h-[320px] md:h-[400px] object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-display font-bold text-sm shadow-lg">
                  10+ Services
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services — Bento grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">What We Offer</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Detailing Services</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Book a detailing appointment today and experience the LEGAWORKX difference.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarCareDetailing;
