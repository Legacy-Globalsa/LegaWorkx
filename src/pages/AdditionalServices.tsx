import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
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

      {/* Services — Mixed card sizes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Full Support</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Cover</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <div className={`group relative bg-card/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)] ${
                  service.highlight
                    ? "border-primary/20 hover:border-primary/40"
                    : "border-border hover:border-primary/30"
                }`}>
                  {service.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                  )}

                  <div className="p-6 flex gap-5 items-start">
                    <div className={`shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                      service.highlight
                        ? "bg-primary/15 border-primary/30 group-hover:bg-primary/20"
                        : "bg-primary/10 border-primary/20 group-hover:bg-primary/15"
                    }`}>
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        {service.highlight && (
                          <span className="shrink-0 text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">Popular</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
