import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import { useEffect, useRef, useState } from "react";

const doctors = [
  {
    name: "Dr. Rafael Mendes",
    role: "Chief of Cardiac Surgery",
    exp: "22 years experience",
    img: doctor1,
  },
  {
    name: "Dr. Amara Santos",
    role: "Interventional Cardiologist",
    exp: "16 years experience",
    img: doctor2,
  },
  {
    name: "Dr. Liam Ashford",
    role: "Electrophysiologist",
    exp: "14 years experience",
    img: doctor3,
  },
];

const DoctorsSection = () => {
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
    <section id="doctors" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl text-foreground leading-tight text-balance">
            Meet Our Leading Specialists
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Board-certified physicians with decades of combined experience in every cardiac discipline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`group ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-sans font-semibold text-primary-foreground text-lg">
                    {d.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">{d.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground font-medium tracking-wide">
                {d.exp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
