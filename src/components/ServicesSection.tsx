import { Heart, Activity, Stethoscope, Brain, Syringe, Scan, Bone, Wind, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  { icon: Heart, title: "Interventional Cardiology", desc: "Angioplasty, stenting, pacemaker implantation and advanced cardiac interventions." },
  { icon: Activity, title: "Cardiac Diagnostics", desc: "ECG, Echo, TMT, Holter monitoring and CT angiography for complete heart evaluation." },
  { icon: Bone, title: "Orthopaedic Surgery", desc: "Joint replacements, spine surgery, fracture management and sports injury treatment." },
  { icon: Brain, title: "Neurology", desc: "Expert diagnosis and treatment of stroke, epilepsy, headaches and neurological disorders." },
  { icon: Wind, title: "Pulmonology", desc: "Comprehensive lung care — asthma, COPD, sleep apnea and respiratory infections." },
  { icon: Stethoscope, title: "General Medicine", desc: "Preventive health check-ups, diabetes management and common medical conditions." },
  { icon: Syringe, title: "General & Paediatric Surgery", desc: "Minimally invasive and open surgeries for adults and children." },
  { icon: Scan, title: "Gastroenterology", desc: "Endoscopy, colonoscopy, liver disease management and digestive disorder treatments." },
];

const ServicesSection = () => {
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

  return (
    <section id="services" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Our Specialities
          </p>
          <h2 className="text-3xl lg:text-[2.5rem] text-foreground leading-tight text-balance" style={{ lineHeight: 1.15 }}>
            Comprehensive Healthcare Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Multi-speciality care across cardiology, orthopaedics, neurology, pulmonology and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-sm">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card p-7 hover:bg-primary/[0.03] transition-colors cursor-default ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-[15px] font-sans font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {s.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
