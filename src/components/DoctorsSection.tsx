import { useEffect, useRef, useState } from "react";
import { Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Dr. K. Kalyanaraman",
    nameTA: "Dr.K.கல்யாணராமன்",
    role: "இருதய மற்றும் சர்க்கரை நோய் நிபுணர்",
    roleEN: "Cardiologist & Diabetologist",
    quals: "M.D. (Gen.Med.), D.M. (Cardiology), FESC (Europe), PGDHSC (Diab), FSCAI (USA), FCSI (India)",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Dr. R. Rajeswaran",
    nameTA: "Dr.R.ராஜேஸ்வரன்",
    role: "பொது மற்றும் குழந்தை அறுவை சிகிச்சை மருத்துவர்",
    roleEN: "General & Paediatric Surgeon",
    quals: "DNB (Gen.Sur.), M.S., M.Ch.",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dr. T. Arunsam",
    nameTA: "Dr.T.அருண்சாம்",
    role: "எலும்பு, மூட்டு மற்றும் முதுகுத்தண்டு அறுவை சிகிச்சை நிபுணர்",
    roleEN: "Orthopaedic & Spine Surgeon",
    quals: "M.S. (Ortho)",
    timing: "1 pm – 2 pm (Mon–Sat)",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dr. S. Hariharan",
    nameTA: "Dr.S. ஹரிஹரன்",
    role: "நுரையீரல் நிபுணர்",
    roleEN: "Pulmonologist",
    quals: "M.D. (Pulmonary)",
    timing: "1 pm – 2 pm (Mon–Sat)",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dr. B. Ragasivamalini",
    nameTA: "Dr.B.ராகசிவமாலினி",
    role: "நரம்பியியல் மருத்துவர்",
    roleEN: "Neurologist",
    quals: "M.D., D.M. (Neurology)",
    timing: "6 pm – 7 pm (Mon–Sat)",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dr. H. Ilakkiya",
    nameTA: "Dr.H. இலக்கியா",
    role: "பொது நல மருத்துவர்",
    roleEN: "General Medicine",
    quals: "M.D., General Medicine",
    timing: "5 pm – 8 pm (Mon–Sat)",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dr. Sankar Sambasivam",
    nameTA: "Dr.சங்கர் சாம்பசிவம்",
    role: "குடல் இயல் மற்றும் கல்லீரல் சிறப்பு மருத்துவர்",
    roleEN: "Gastroenterologist",
    quals: "M.D., D.M. (Gastro)",
    timing: "1 pm – 2 pm (Mon–Sat)",
    color: "bg-primary/10 text-primary",
  },
];

const DoctorsSection = () => {
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
    <section id="doctors" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            சிறப்பு மருத்துவர்கள்
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl text-foreground leading-tight text-balance">
            Our Specialist Doctors
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Experienced physicians across cardiology, orthopaedics, neurology, pulmonology, gastroenterology and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-[box-shadow,transform] duration-300 hover:-translate-y-1 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-full ${d.color} flex items-center justify-center mb-4`}>
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-semibold text-foreground text-base">
                {d.name}
              </h3>
              <p className="text-sm text-accent font-medium mt-1">{d.roleEN}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{d.role}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{d.quals}</p>
              {d.timing && (
                <p className="text-xs text-primary font-medium mt-2">
                  🕐 {d.timing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
