import ScrollReveal from "./ScrollReveal";

const brands = [
  "BMW", "Mercedes-Benz", "Audi", "Porsche", "Lexus", "Bentley", "Ferrari", "Lamborghini", "Land Rover", "Maserati"
];

const BrandsSection = () => {
  return (
    <section className="py-20 border-y border-border bg-card/10 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-10 text-center">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Trusted with the World's Finest Brands
          </p>
        </ScrollReveal>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {brands.map((brand, i) => (
            <div key={`${brand}-${i}`} className="mx-8 md:mx-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-display font-bold text-foreground/20 uppercase tracking-wider hover:text-primary transition-colors duration-500 cursor-default">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {brands.map((brand, i) => (
            <div key={`dup-${brand}-${i}`} className="mx-8 md:mx-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-display font-bold text-foreground/20 uppercase tracking-wider hover:text-primary transition-colors duration-500 cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
