import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-hospital.jpg";
import { ArrowRight, CalendarCheck, Stethoscope, HeartPulse, Building2 } from "lucide-react";

const quickActions = [
  { icon: CalendarCheck, label: "Book Appointment", href: "#contact" },
  { icon: Stethoscope, label: "Find a Doctor", href: "#doctors" },
  { icon: HeartPulse, label: "Our Services", href: "#services" },
  { icon: Building2, label: "Our Facilities", href: "#facilities" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Kalyaan Speciaality Hospital"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-8 pb-28">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(35,90%,52%)] mb-5 animate-fade-up"
          >
            Heart & Multi-Speciality Care
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] text-primary-foreground text-balance animate-fade-up"
            style={{ animationDelay: "80ms", lineHeight: 1.1 }}
          >
            Kalyaan Speciaality Hospital
          </h1>

          <p
            className="mt-5 text-lg text-primary-foreground/65 max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Cuddalore's trusted centre for advanced cardiac care and multi-speciality treatment — combining technology with compassion.
          </p>

          <div
            className="flex flex-wrap gap-3 mt-8 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button className="bg-[hsl(35,90%,52%)] hover:bg-[hsl(35,90%,45%)] text-white font-semibold rounded-full px-7 h-12 gap-2 shadow-lg hover:shadow-xl active:scale-[0.97] transition-all" asChild>
              <a href="#contact">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-7 h-12" asChild>
              <a href="tel:9445281804">📞 Call Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick action bar — Apollo style */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-card rounded-t-2xl shadow-[0_-8px_32px_hsl(210_30%_12%/0.12)] overflow-hidden">
            {quickActions.map((action, i) => (
              <a
                key={action.label}
                href={action.href}
                className="group flex items-center gap-3 px-5 py-5 lg:py-6 hover:bg-primary/5 transition-colors border-r border-b lg:border-b-0 border-border/40 last:border-r-0 even:border-r-0 lg:even:border-r active:scale-[0.98]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <action.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {action.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
