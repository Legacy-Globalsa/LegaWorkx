import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/pushittothelimit-fUuLytfmlE4b3coyDlkhjpNL/"
          className="w-full h-full border-0"
          title="3D Background"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Powered by Legacy Global Commercial Services Co.
          </p>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            LEGAWORKX
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Driving Excellence, Powered by Innovation
          </p>

          <div className="gradient-line max-w-xs mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }} />

          <p
            className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            Your complete automotive partner — car care, customization, sales & service, powered by AI and advanced innovation.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
