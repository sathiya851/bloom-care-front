import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-hospital.jpg";
import { ArrowRight, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Heart Sepalicty Hospital building"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-16">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-up"
          >
            <Shield className="w-3.5 h-3.5 text-primary-foreground/80" />
            <span className="text-xs font-medium text-primary-foreground/80 tracking-wide uppercase">
              Trusted Cardiac Care Since 1987
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-[1.08] tracking-tight text-balance animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Where Every Heartbeat Matters
          </h1>

          <p
            className="mt-5 text-lg text-primary-foreground/70 max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Advanced cardiovascular diagnostics and treatment, delivered with warmth and precision by our world-class team.
          </p>

          <div
            className="flex flex-wrap gap-3 mt-8 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="hero" size="lg" className="gap-2">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Our Services
            </Button>
          </div>

          <div
            className="flex items-center gap-6 mt-12 animate-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Clock className="w-4 h-4" />
              <span className="text-sm">24/7 Emergency</span>
            </div>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <span className="text-sm text-primary-foreground/60">
              128+ Cardiac Specialists
            </span>
            <div className="h-4 w-px bg-primary-foreground/20 hidden sm:block" />
            <span className="text-sm text-primary-foreground/60 hidden sm:block">
              47,000+ Surgeries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
