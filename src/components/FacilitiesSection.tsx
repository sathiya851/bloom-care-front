import { useEffect, useRef, useState } from "react";
import facilityOT from "@/assets/facility-ot.jpeg";
import facilityCathlab from "@/assets/facility-cathlab.jpeg";
import facilityRoom from "@/assets/facility-room.jpeg";
import facilityWard from "@/assets/facility-ward.jpeg";
import facilityTreadmill from "@/assets/facility-treadmill.jpeg";
import facilityEndoscopy from "@/assets/facility-endoscopy.jpeg";

const facilities = [
  { img: facilityOT, label: "Modern Operation Theatre", tag: "Surgery" },
  { img: facilityCathlab, label: "Cath Lab", tag: "Cardiology" },
  { img: facilityWard, label: "General Ward", tag: "Inpatient" },
  { img: facilityRoom, label: "AC Inpatient Room", tag: "Premium" },
  { img: facilityTreadmill, label: "TMT / Stress Test", tag: "Diagnostics" },
  { img: facilityEndoscopy, label: "Endoscopy Suite", tag: "Gastro" },
];

const FacilitiesSection = () => {
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
    <section id="facilities" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Infrastructure
          </p>
          <h2 className="text-3xl lg:text-[2.5rem] text-foreground leading-tight text-balance" style={{ lineHeight: 1.15 }}>
            World-Class Facilities
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Equipped with modern technology and comfortable spaces for the best patient experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {facilities.map((f, i) => (
            <div
              key={f.label}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={f.img}
                alt={f.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,30%,12%/0.7)] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                  {f.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-sans font-bold text-white text-base">
                  {f.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
