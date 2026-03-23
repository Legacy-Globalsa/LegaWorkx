import ScrollReveal from "./ScrollReveal";
import { Trophy, Wrench, Users, Star } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Wrench,
    value: "10k+",
    label: "Vehicles Serviced",
  },
  {
    icon: Users,
    value: "5k+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 border-y border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
