import { Button } from "@/components/ui/button";
import logo from "@/assets/legaworkx-logo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background — fully interactive, no overlay blocking it */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/pushittothelimit-lg4CwAg3kHJegKUlMTDlkMGL/"
          className="w-full h-full border-0"
          title="3D Background"
          loading="eager"
        />
      </div>

      {/* Content — left-aligned, non-selectable, pointer-events only on buttons */}
      <div className="relative z-10 container mx-auto px-4 pointer-events-none select-none">
        <div className="max-w-2xl">

          <p
            className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Powered by Legacy Global Commercial Services Co.
          </p>

          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="text-brand-gray">LEGA</span>
            <span className="text-primary text-glow-red">WORKX</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl font-light text-muted-foreground max-w-lg mb-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            Driving Excellence, Powered by Innovation
          </p>

          <div className="gradient-line max-w-[200px] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "1.0s" }} />

          <p
            className="text-sm text-muted-foreground max-w-md mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            Your complete automotive partner — car care, customization, sales & service, powered by AI and advanced innovation.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up pointer-events-auto"
            style={{ animationDelay: "1.3s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
