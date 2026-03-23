import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const info = [
    { icon: MapPin, label: "No 5, Kundusalai Road, Alpet, Cuddalore – 607001, Tamil Nadu" },
    { icon: Phone, label: "9445281804  |  04142-220055" },
    { icon: Mail, label: "info@kalyaanhospital.com" },
    { icon: Clock, label: "Emergency: 24/7 • OPD: Mon–Sat" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              Contact Us
            </p>
            <h2 className="text-3xl lg:text-[2.5rem] text-foreground leading-tight text-balance" style={{ lineHeight: 1.15 }}>
              Schedule Your Visit
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Whether you need a consultation or a second opinion, our team is ready to help.
            </p>

            <div className="mt-10 space-y-5">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed pt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-md aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.123!2d79.7547!3d11.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ0JzQ5LjAiTiA3OcKwNDUnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kalyaan Speciaality Hospital Location"
              />
            </div>
          </div>

          <form
            className={`bg-card rounded-2xl p-8 shadow-lg border border-border/50 space-y-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "150ms" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-sans text-xl font-bold text-foreground">Request an Appointment</h3>
            <p className="text-sm text-muted-foreground -mt-3">Fill the form below and we'll get back to you shortly.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Full Name</label>
                <Input placeholder="Your name" className="rounded-lg" />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Phone</label>
                <Input placeholder="+91 _____ _____" type="tel" className="rounded-lg" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Email</label>
              <Input placeholder="you@email.com" type="email" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Message</label>
              <Textarea placeholder="Describe your concern or preferred appointment time..." rows={4} className="rounded-lg" />
            </div>
            <Button className="w-full bg-[hsl(35,90%,52%)] hover:bg-[hsl(35,90%,45%)] text-white font-semibold rounded-full h-12 gap-2 active:scale-[0.97] transition-all" size="lg">
              Request Appointment
              <ArrowRight className="w-4 h-4" />
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
