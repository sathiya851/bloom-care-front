import { useEffect, useRef, useState } from "react";
import facilityOT from "@/assets/facility-ot.jpeg";
import facilityCathlab from "@/assets/facility-cathlab.jpeg";
import facilityRoom from "@/assets/facility-room.jpeg";
import facilityWard from "@/assets/facility-ward.jpeg";
import facilityTreadmill from "@/assets/facility-treadmill.jpeg";
import facilityEndoscopy from "@/assets/facility-endoscopy.jpeg";

const facilities = [
  { img: facilityOT, label: "Modern Operation Theatre" },
  { img: facilityCathlab, label: "Cath Lab" },
  { img: facilityWard, label: "General Ward" },
  { img: facilityRoom, label: "AC Inpatient Room" },
  { img: facilityTreadmill, label: "TMT / Stress Test" },
  { img: facilityEndoscopy, label: "Endoscopy Suite" },
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
    <section id="facilities" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Our Facilities
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl text-foreground leading-tight text-balance">
            State-of-the-Art Infrastructure
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Equipped with modern technology and comfortable spaces for the best patient experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {facilities.map((f, i) => (
            <div
              key={f.label}
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={f.img}
                alt={f.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-sans font-semibold text-primary-foreground text-sm">
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
