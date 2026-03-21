import { Heart, Activity, Stethoscope, Brain, Syringe, Scan } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Heart,
    title: "Interventional Cardiology",
    desc: "Minimally invasive cardiac procedures including angioplasty, stenting, and valve repair.",
  },
  {
    icon: Activity,
    title: "Cardiac Electrophysiology",
    desc: "Advanced diagnosis and treatment of heart rhythm disorders using cutting-edge mapping technology.",
  },
  {
    icon: Stethoscope,
    title: "Preventive Cardiology",
    desc: "Comprehensive risk assessment and lifestyle programs to keep your heart healthy for life.",
  },
  {
    icon: Brain,
    title: "Neurocardiology",
    desc: "Specialized care at the intersection of neurological and cardiovascular health.",
  },
  {
    icon: Syringe,
    title: "Cardiac Rehabilitation",
    desc: "Structured recovery programs with exercise, nutrition, and psychological support.",
  },
  {
    icon: Scan,
    title: "Advanced Imaging",
    desc: "State-of-the-art cardiac MRI, CT angiography, and echocardiography diagnostics.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl text-foreground leading-tight text-balance">
            Comprehensive Cardiac Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From prevention to recovery, our integrated departments cover every facet of heart health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-xl p-7 shadow-sm hover:shadow-lg transition-[box-shadow,transform] duration-300 hover:-translate-y-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-card-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
