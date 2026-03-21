import { Heart, Activity, Stethoscope, Brain, Syringe, Scan, Bone, Wind } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Heart,
    title: "Interventional Cardiology",
    desc: "Angioplasty, stenting, pacemaker implantation and advanced cardiac interventions by experienced cardiologists.",
  },
  {
    icon: Activity,
    title: "Cardiac Diagnostics",
    desc: "ECG, Echo, TMT (treadmill test), Holter monitoring and CT angiography for complete heart evaluation.",
  },
  {
    icon: Bone,
    title: "Orthopaedic Surgery",
    desc: "Joint replacements, spine surgery, fracture management and sports injury treatment.",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Expert diagnosis and treatment of stroke, epilepsy, headaches and neurological disorders.",
  },
  {
    icon: Wind,
    title: "Pulmonology",
    desc: "Comprehensive lung care — asthma, COPD, sleep apnea and respiratory infections.",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Preventive health check-ups, diabetes management and treatment of common medical conditions.",
  },
  {
    icon: Syringe,
    title: "General & Paediatric Surgery",
    desc: "Minimally invasive and open surgeries for adults and children by experienced surgeons.",
  },
  {
    icon: Scan,
    title: "Gastroenterology",
    desc: "Endoscopy, colonoscopy, liver disease management and digestive disorder treatments.",
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
            Heart & Multi-Speciality Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive care across cardiology, orthopaedics, neurology, pulmonology and more — all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              <h3 className="text-base font-sans font-semibold text-card-foreground mb-2">
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
