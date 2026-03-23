import ScrollReveal from "./ScrollReveal";
import Grainient from "./Grainient";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-y border-border">
      <div className="absolute inset-0">
        <Grainient
          color1="#DB2424"
          color2="#0D0F11"
          color3="#6C707A"
          zoom={0.8}
          timeSpeed={0.2}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-background" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Elevate Your Driving Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book an appointment today and discover why we are the region's preferred choice for premium automotive care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider" asChild>
              <Link to="/#contact">
                Schedule Service <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 border-border hover:bg-white/5 font-semibold uppercase tracking-wider" asChild>
              <Link to="/#services">
                Explore Services
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
