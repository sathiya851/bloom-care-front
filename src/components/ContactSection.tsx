import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const info = [
    { icon: MapPin, label: "425 Cardiac Boulevard, Suite 100" },
    { icon: Phone, label: "+1 (555) 234-7890" },
    { icon: Mail, label: "care@heartsepalicty.org" },
    { icon: Clock, label: "Emergency: 24/7 • Clinics: 7am–8pm" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={visible ? "animate-fade-up" : "opacity-0"}>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl text-foreground leading-tight text-balance">
              Schedule Your Visit
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Whether you need a consultation or a second opinion, our team is ready to help.
            </p>

            <div className="mt-10 space-y-5">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form
            className={`bg-card rounded-2xl p-8 shadow-sm space-y-5 ${visible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                  Full Name
                </label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                  Phone
                </label>
                <Input placeholder="+1 (___) ___-____" type="tel" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                Email
              </label>
              <Input placeholder="you@email.com" type="email" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                Message
              </label>
              <Textarea placeholder="Describe your concern or preferred appointment time..." rows={4} />
            </div>
            <Button className="w-full" size="lg">
              Request Appointment
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              We typically respond within 2 business hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
