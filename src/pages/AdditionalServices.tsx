import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import ShapeGrid from "@/components/ShapeGrid";
import { LifeBuoy, Truck, Warehouse, Hammer, Crown, ClipboardCheck, Trophy, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carRoadside from "@/assets/car-roadside.png";

const services = [
  { icon: LifeBuoy, title: "24/7 Roadside Assistance & Emergency Support", description: "Stranded with a flat tire, dead battery, or engine trouble? Our rapid response team is available around the clock, anywhere in the region, to get you back on the road safely and quickly.", highlight: true },
  { icon: Truck, title: "Pick-up & Drop-off Service", description: "Too busy to bring your car in? We offer complimentary vehicle pick-up and drop-off for all major services, so your vehicle gets the care it needs without disrupting your schedule." },
  { icon: Warehouse, title: "Vehicle Storage & Protection", description: "Climate-controlled and secure storage facilities for seasonal vehicles, classic cars, or extended travel periods. GPS-monitored with regular maintenance checks to keep your vehicle ready." },
  { icon: Hammer, title: "Paintless Dent Removal (PDR)", description: "Advanced PDR techniques to remove minor dents, dings, and hail damage without affecting your vehicle's original paint finish — faster and more affordable than traditional body work." },
  { icon: Crown, title: "Classic & Luxury Car Restoration", description: "Meticulous frame-off or partial restorations for classic and luxury vehicles. From engine rebuilds to interior retrimming, we bring automotive legends back to their original glory.", highlight: true },
  { icon: ClipboardCheck, title: "Vehicle Inspection for Sale or Insurance", description: "Comprehensive multi-point inspections with detailed reports for pre-purchase evaluations, insurance requirements, or preparing your vehicle for sale with documented condition." },
  { icon: Trophy, title: "Custom Event Vehicles", description: "Show cars, display vehicles, and custom builds for corporate events, exhibitions, weddings, and marketing campaigns. We prepare vehicles to make a lasting impression." },
];

const AdditionalServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Split layout with image and Grainient */}
      <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" timeSpeed={0.2} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                  <img src={carRoadside} alt="Additional Services" className="w-full h-[300px] md:h-[380px] object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card border border-primary/30 px-5 py-3 rounded-xl shadow-lg flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-sm text-foreground">24/7 Support</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="order-1 lg:order-2">
                <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Beyond Service</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Additional<br /><span className="text-primary">Services</span>
                </h1>
                <div className="gradient-line max-w-xs mb-6" />
                <p className="text-muted-foreground max-w-lg text-lg mb-8">
                  From 24/7 emergency roadside support to classic car restoration and vehicle storage,
                  our additional services cover every need beyond regular maintenance.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">Get Help Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlighted Services — ShapeGrid Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#271E37"
            hoverFillColor="#222222"
            shape="square"
            hoverTrailAmount={0}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Full Support</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Cover</h2>
              <div className="gradient-line max-w-[120px]" />
            </div>
          </ScrollReveal>

          {/* Highlighted services as glass cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.filter(s => s.highlight).map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group relative bg-card/40 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_50px_-10px_rgba(219,36,36,0.25)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-[10px] uppercase tracking-widest text-primary bg-primary/10 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium border border-primary/20">Popular</span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Services — Staggered Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(219,36,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(219,36,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative z-10 container mx-auto px-4">
          {/* Row 1: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {services.filter(s => !s.highlight).slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.06}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                  <div className={`h-1.5 ${i === 0 ? 'bg-gradient-to-r from-primary/60 via-primary/30 to-transparent' : i === 1 ? 'bg-gradient-to-r from-transparent via-primary/40 to-transparent' : 'bg-gradient-to-r from-transparent via-primary/30 to-primary/60'}`} />
                  <div className="p-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: 2 wider columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.filter(s => !s.highlight).slice(3).map((service, i) => (
              <ScrollReveal key={service.title} delay={(i + 3) * 0.06}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                  <div className="flex items-start gap-5 p-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Need Assistance?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Our team is ready to help — reach out for any of our additional services.</p>
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

export default AdditionalServices;
