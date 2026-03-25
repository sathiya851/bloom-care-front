import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-hospital.jpg";

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kalyaan Hospital" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-[hsl(var(--dark))]/70" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight animate-fade-up">
        Advanced Heart Care &<br />Multi-Speciality Hospital
      </h1>
      <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
        Trusted healthcare partner in Cuddalore with expert doctors and modern facilities.
      </p>
      <div className="mt-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base" asChild>
          <a href="#contact">Book Appointment</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
