import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import { Car, DollarSign, ArrowLeftRight, Globe, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carSales from "@/assets/car-sales.png";

const services = [
  { icon: Car, title: "New Vehicle Sales", description: "Access to the latest models from top manufacturers. Our sales consultants help you find the perfect vehicle to match your lifestyle, preferences, and budget — with full transparency and no hidden fees." },
  { icon: Car, title: "Pre-Owned Vehicle Sales", description: "Every pre-owned vehicle in our inventory undergoes a rigorous multi-point inspection. We provide complete vehicle history reports and certified pre-owned options with extended warranty coverage." },
  { icon: DollarSign, title: "Vehicle Valuation & Trade-In", description: "Get a fair and accurate market valuation for your current vehicle. Our hassle-free trade-in process makes upgrading seamless, with competitive offers based on real-time market data." },
  { icon: Globe, title: "Vehicle Import/Export Assistance", description: "Navigating international vehicle transactions made easy. We handle customs clearance, shipping logistics, compliance documentation, and registration for imports and exports worldwide." },
  { icon: CreditCard, title: "Financing & Leasing Consultation", description: "Flexible financing solutions tailored to your financial situation. We work with multiple lenders to secure competitive rates for purchases, leases, and refinancing options." },
  { icon: ShieldCheck, title: "Warranty & Insurance Assistance", description: "Comprehensive warranty packages and insurance consultation to protect your investment. We help you choose the right coverage — from bumper-to-bumper to powertrain warranties." },
  { icon: ArrowLeftRight, title: "Brokerage Services", description: "Looking for a specific vehicle? Our brokerage team leverages an extensive network to source rare, luxury, and specialty vehicles at the best possible price, handling all negotiations on your behalf." },
];

const steps = [
  { step: "01", title: "Initial Consultation", desc: "Tell us what you're looking for or what you'd like to sell. We listen first." },
  { step: "02", title: "Receive Offers", desc: "We source the best options or buyer offers using our extensive network." },
  { step: "03", title: "Test Drive", desc: "Experience your shortlisted vehicles firsthand before making a decision." },
  { step: "04", title: "Secure & Finalize", desc: "Complete financing, insurance, and paperwork — we handle the details." },
];

const CarSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Split with image right */}
      <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" timeSpeed={0.2} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Buy & Sell With Confidence</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Car Sales &<br /><span className="text-primary">Brokerage</span>
                </h1>
                <div className="gradient-line max-w-xs mb-6" />
                <p className="text-muted-foreground max-w-lg text-lg mb-8">
                  Whether you're buying your dream car, selling your current vehicle, or looking for expert brokerage services,
                  we deliver a transparent and seamless experience.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">Get In Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                  <img src={carSales} alt="Car Sales" className="w-full h-[320px] md:h-[400px] object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-display font-bold text-sm shadow-lg">
                  7+ Services
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">What We Offer</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Sales & Brokerage Services</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex gap-4 items-start">
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

      {/* How It Works — Timeline style */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(219,36,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(219,36,36,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Simple Process</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="relative text-center group">
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center mb-4 group-hover:bg-primary/15 transition-all duration-300">
                    <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Find Your Perfect Vehicle</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Start your journey with a trusted automotive partner.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Get In Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarSales;
