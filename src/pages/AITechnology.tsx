import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import { Cpu, Radar, MapPin, Shield, Activity, Smartphone, Building2, ArrowRight, Zap, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carDiagnostics from "@/assets/car-diagnostics.png";

const services = [
  { icon: Cpu, title: "Smart Vehicle Diagnostics", description: "AI-powered diagnostic systems that analyze hundreds of data points in real-time, providing accurate fault detection and repair recommendations faster than traditional methods." },
  { icon: Activity, title: "Predictive Maintenance Alerts", description: "Machine learning algorithms monitor your vehicle's health patterns and alert you before components fail, preventing costly breakdowns and ensuring uninterrupted reliability." },
  { icon: MapPin, title: "GPS Tracking & Telematics", description: "Real-time vehicle tracking with route optimization, geo-fencing, driver behavior analytics, and comprehensive trip history for personal and fleet vehicles." },
  { icon: Shield, title: "Vehicle Security & Anti-Theft", description: "Multi-layer security systems including GPS tracking, immobilizers, remote kill switches, and smartphone-connected alarm systems for ultimate peace of mind." },
  { icon: Radar, title: "AI Engine & Performance Monitoring", description: "Continuous engine performance analysis using artificial intelligence to optimize fuel efficiency, detect anomalies, and suggest performance improvements in real-time." },
  { icon: Smartphone, title: "Remote Start & Smart Controls", description: "Control your vehicle from anywhere — remote engine start, climate pre-conditioning, door locks, and vehicle status checks all from your smartphone." },
  { icon: Building2, title: "Fleet Management Solutions", description: "Enterprise-grade fleet management platforms with vehicle tracking, maintenance scheduling, fuel monitoring, driver scoring, and real-time operational analytics for businesses." },
];

const techStats = [
  { icon: Zap, value: "99.7%", label: "Uptime Reliability" },
  { icon: BarChart3, value: "500+", label: "Data Points Analyzed" },
  { icon: Lock, value: "256-bit", label: "Encryption Standard" },
  { icon: Cpu, value: "< 2s", label: "Diagnostic Speed" },
];

const AITechnology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Futuristic centered with Grainient */}
      <section className="relative min-h-[560px] md:min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#DB2424" color2="#0D0F11" color3="#6C707A" timeSpeed={0.3} zoom={0.85} warpStrength={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(219,36,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(219,36,36,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-medium uppercase tracking-wider">Next-Gen Solutions</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
              AI & <span className="text-primary">Technology</span><br />Services
            </h1>
            <div className="gradient-line max-w-xs mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
              Harness the power of artificial intelligence and cutting-edge technology to monitor, protect,
              and optimize your vehicle like never before.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/#contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-white/5" asChild>
                <Link to="/#services">All Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech stats */}
      <section className="relative border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="block font-display text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Image + alternating cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
            {/* Sticky image column */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <ScrollReveal>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5 mb-6">
                  <img src={carDiagnostics} alt="AI Technology" className="w-full h-[280px] md:h-[360px] object-cover" />
                </div>
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5">
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2">Why AI Matters</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our AI systems process thousands of data points per second, detecting issues before they become problems and optimizing your vehicle's performance in real-time.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Services list */}
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal>
                <div className="mb-8">
                  <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Our Solutions</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Smart Services</h2>
                  <div className="gradient-line max-w-[120px]" />
                </div>
              </ScrollReveal>

              {services.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.06}>
                  <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(219,36,36,0.12)]">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Upgrade to Smart Automotive</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Let our AI-driven solutions transform how you interact with your vehicle.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITechnology;
