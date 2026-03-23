import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Car Enthusiast",
    content: "The level of detail LEGAWORKX puts into their work is unmatched. They completely transformed my vehicle, and their customer service is top-tier. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah T.",
    role: "Business Owner",
    content: "I manage a fleet of vehicles for my business. Partnering with LEGAWORKX for maintenance and AI diagnostics has saved us time and money. True professionals.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Classic Car Collector",
    content: "Trusting someone with a classic car is hard, but the restoration team here is incredible. They knew exactly how to handle the delicate parts and brought my car back to life.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 bg-grid-pattern overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Testimonials</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-xl p-8 relative card-hover-glow h-full flex flex-col">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-brand-gray">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
