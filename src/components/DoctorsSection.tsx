import { useEffect, useRef, useState } from "react";
import { Clock, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. K. Kalyanaraman",
    nameTA: "Dr.K.கல்யாணராமன்",
    role: "Cardiologist & Diabetologist",
    roleTA: "இருதய மற்றும் சர்க்கரை நோய் நிபுணர்",
    quals: "M.D. (Gen.Med.), D.M. (Cardiology), FESC (Europe), PGDHSC (Diab), FSCAI (USA), FCSI (India)",
    initials: "KK",
    featured: true,
  },
  {
    name: "Dr. R. Rajeswaran",
    nameTA: "Dr.R.ராஜேஸ்வரன்",
    role: "General & Paediatric Surgeon",
    roleTA: "பொது மற்றும் குழந்தை அறுவை சிகிச்சை மருத்துவர்",
    quals: "DNB (Gen.Sur.), M.S., M.Ch.",
    initials: "RR",
  },
  {
    name: "Dr. T. Arunsam",
    nameTA: "Dr.T.அருண்சாம்",
    role: "Orthopaedic & Spine Surgeon",
    roleTA: "எலும்பு, மூட்டு மற்றும் முதுகுத்தண்டு அறுவை சிகிச்சை நிபுணர்",
    quals: "M.S. (Ortho)",
    timing: "1 pm – 2 pm (Mon–Sat)",
    initials: "TA",
  },
  {
    name: "Dr. S. Hariharan",
    nameTA: "Dr.S. ஹரிஹரன்",
    role: "Pulmonologist",
    roleTA: "நுரையீரல் நிபுணர்",
    quals: "M.D. (Pulmonary)",
    timing: "1 pm – 2 pm (Mon–Sat)",
    initials: "SH",
  },
  {
    name: "Dr. B. Ragasivamalini",
    nameTA: "Dr.B.ராகசிவமாலினி",
    role: "Neurologist",
    roleTA: "நரம்பியியல் மருத்துவர்",
    quals: "M.D., D.M. (Neurology)",
    timing: "6 pm – 7 pm (Mon–Sat)",
    initials: "BR",
  },
  {
    name: "Dr. H. Ilakkiya",
    nameTA: "Dr.H. இலக்கியா",
    role: "General Medicine",
    roleTA: "பொது நல மருத்துவர்",
    quals: "M.D., General Medicine",
    timing: "5 pm – 8 pm (Mon–Sat)",
    initials: "HI",
  },
  {
    name: "Dr. Sankar Sambasivam",
    nameTA: "Dr.சங்கர் சாம்பசிவம்",
    role: "Gastroenterologist",
    roleTA: "குடல் இயல் மற்றும் கல்லீரல் சிறப்பு மருத்துவர்",
    quals: "M.D., D.M. (Gastro)",
    timing: "1 pm – 2 pm (Mon–Sat)",
    initials: "SS",
  },
];

const DoctorsSection = () => {
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

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            சிறப்பு மருத்துவர்கள்
          </p>
          <h2 className="text-3xl lg:text-[2.5rem] text-foreground leading-tight text-balance" style={{ lineHeight: 1.15 }}>
            Meet Our Specialists
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Experienced physicians across cardiology, orthopaedics, neurology, pulmonology, gastroenterology and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {/* Avatar header */}
              <div className={`h-28 flex items-end justify-center relative ${d.featured ? "bg-primary" : "bg-primary/80"}`}>
                <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center text-primary font-bold text-lg shadow-md translate-y-8 border-[3px] border-card">
                  {d.initials}
                </div>
              </div>

              <div className="pt-12 pb-6 px-5 text-center">
                <h3 className="font-sans font-bold text-foreground text-base">{d.name}</h3>
                <p className="text-primary text-sm font-semibold mt-1">{d.role}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{d.roleTA}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{d.quals}</p>
                {d.timing && (
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-xs font-semibold text-primary">
                    <Clock className="w-3 h-3" />
                    {d.timing}
                  </div>
                )}
                <a href="#contact" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[hsl(35,90%,52%)] hover:text-[hsl(35,90%,42%)] transition-colors">
                  Book Appointment <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
