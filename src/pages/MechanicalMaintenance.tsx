import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import Hyperspeed from "@/components/Hyperspeed";
import { Wrench, Droplets, Disc, Gauge, Cog, RotateCcw, Cpu, ThermometerSun, Fuel, Wind, Calendar, ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carMechanical from "@/assets/car-mechanical.png";
import mechOilChange from "@/assets/mech-oil-change.jpg";
import mechBattery from "@/assets/mech-battery.jpg";
import mechBrakes from "@/assets/mech-brakes.jpg";

const featuredImages = [mechOilChange, mechBattery, mechBrakes];

const services = [
  { icon: Droplets, title: "Oil Change & Fluid Replacement", description: "Regular oil changes with premium synthetic or conventional oils, plus comprehensive fluid checks including coolant, brake fluid, power steering, and transmission fluid." },
  { icon: Gauge, title: "Battery Replacement & Diagnostics", description: "Advanced battery health testing, terminal cleaning, and replacement with high-quality batteries backed by warranty for reliable starting power." },
  { icon: Disc, title: "Brake System Inspection & Repair", description: "Complete brake system evaluation including pads, rotors, calipers, and brake lines. We ensure your stopping power is always at its peak." },
  { icon: Cog, title: "Suspension & Steering Check", description: "Thorough inspection of shocks, struts, bushings, tie rods, and ball joints to ensure a comfortable ride and precise handling." },
  { icon: RotateCcw, title: "Wheel Alignment & Balancing", description: "Computer-assisted four-wheel alignment and precision balancing to prevent uneven tire wear and ensure straight, stable driving." },
  { icon: Disc, title: "Tire Replacement & Rotation", description: "Expert tire mounting, balancing, and rotation services with access to all major tire brands at competitive prices." },
  { icon: Cpu, title: "Engine Diagnostics & Repair", description: "State-of-the-art OBD-II diagnostics to pinpoint engine issues, from misfires and sensor failures to complex mechanical problems." },
  { icon: Wrench, title: "Transmission Services", description: "Fluid changes, filter replacements, and complete transmission rebuilds for both automatic and manual gearboxes." },
  { icon: ThermometerSun, title: "Cooling System & Radiator Services", description: "Coolant flushes, radiator repairs, thermostat replacements, and water pump services to prevent overheating." },
  { icon: Wind, title: "Exhaust System Maintenance", description: "Inspection and repair of catalytic converters, mufflers, exhaust pipes, and manifolds for optimal performance and emissions compliance." },
  { icon: Fuel, title: "Fuel System Cleaning", description: "Professional fuel injector cleaning, throttle body service, and carbon buildup removal for improved fuel efficiency and engine performance." },
  { icon: Calendar, title: "Scheduled Maintenance Packages", description: "Customized maintenance plans based on your vehicle's make, model, and mileage — covering everything from minor to major service intervals." },
];

const stats = [
  { value: "12+", label: "Service Types" },
  { value: "50+", label: "Certified Technicians" },
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "Genuine Parts" },
];

const MechanicalMaintenance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Image background with overlay */}
      <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden">
        <img src={carMechanical} alt="Mechanical Maintenance" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Expert Care</p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Mechanical &<br /><span className="text-primary">Maintenance</span>
              </h1>
              <div className="gradient-line max-w-xs mb-6" />
              <p className="text-muted-foreground max-w-lg text-lg mb-10">
                Our certified technicians use the latest tools and genuine parts for everything from routine checkups
                to complex engine repairs. Keep your vehicle running at peak performance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">Book Service <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-white/5" asChild>
                  <Link to="/#services">All Services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="block font-display text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hyperspeed Accent Band */}
      <section className="relative h-[120px] md:h-[160px] overflow-hidden">
        <div className="absolute inset-0">
          <Hyperspeed effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5] as [number, number],
            lightStickHeight: [1.3, 1.7] as [number, number],
            movingAwaySpeed: [60, 80] as [number, number],
            movingCloserSpeed: [-120, -160] as [number, number],
            carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
            carLightsRadius: [0.05, 0.14] as [number, number],
            carWidthPercentage: [0.3, 0.5] as [number, number],
            carShiftX: [-0.8, 0.8] as [number, number],
            carFloorSeparation: [0, 5] as [number, number],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131313,
              brokenLines: 0x131313,
              leftCars: [0xDB2424, 0x8B1515, 0xFF4444],
              rightCars: [0xDB2424, 0x8B1515, 0xFF4444],
              sticks: 0xDB2424,
            },
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="font-display text-lg md:text-xl font-bold text-foreground/80 tracking-widest uppercase">Precision Engineering</p>
        </div>
      </section>

      {/* Services — Featured Big + Compact Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(219,36,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(219,36,36,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Comprehensive Care</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Mechanical Services</h2>
              <div className="gradient-line max-w-[120px] mx-auto" />
            </div>
          </ScrollReveal>

          {/* Top row: 3 featured services as large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {services.slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-5px_rgba(219,36,36,0.15)]">
                  <div className="relative h-[180px] border-b border-border/30 overflow-hidden">
                    <img src={featuredImages[i]} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 font-display text-5xl font-bold text-white/15 select-none z-10">{String(i + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="p-6">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom: compact 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.slice(3).map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.04}>
                <div className="group relative bg-card/60 backdrop-blur-sm border border-border/80 rounded-xl p-5 h-full overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-card/80">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <span className="font-display text-2xl font-bold text-primary/10 leading-none select-none absolute -top-1 -left-1">{String(i + 4).padStart(2, '0')}</span>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-3 ml-3 group-hover:bg-primary/15 transition-all duration-300">
                        <service.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display text-sm font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{service.description}</p>
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Schedule Your Service Today</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Don't wait for a breakdown. Preventative maintenance saves time and money.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Book Appointment <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MechanicalMaintenance;
