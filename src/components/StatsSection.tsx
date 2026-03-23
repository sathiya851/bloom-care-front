import { useEffect, useRef, useState } from "react";
import { HeartPulse, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "24/7", suffix: "", label: "Emergency Care" },
  { icon: Users, value: "7", suffix: "+", label: "Specialist Doctors" },
  { icon: HeartPulse, value: "10,000", suffix: "+", label: "Patients Treated" },
  { icon: Award, value: "98", suffix: "%", label: "Patient Satisfaction" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl lg:text-4xl font-serif text-primary-foreground tabular-nums" style={{ lineHeight: 1.1 }}>
                {s.value}
                <span className="text-primary-foreground/50">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-primary-foreground/65 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
