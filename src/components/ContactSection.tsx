import { Phone, Mail, Globe, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  { icon: Phone, label: "Mobile Hotline", value: "+966 50 360 2359", href: "tel:+966503602359" },
  { icon: Mail, label: "Email", value: "info@legacyglobalsa.com", href: "mailto:info@legacyglobalsa.com" },
  { icon: Globe, label: "Website", value: "www.legacyglobalsa.com", href: "https://www.legacyglobalsa.com" },
  { icon: MapPin, label: "Office", value: "Near Al Mutlaq Hotel, King Abdulaziz Rd, Kingdom of Saudi Arabia", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Reach Out</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <a
                href={item.href}
                className="block bg-card border border-border rounded-lg p-6 card-hover-glow text-center h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.value}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
