import { Heart, Brain, Bone, Wind } from "lucide-react";

const services = [
  { icon: Heart, title: "Cardiology", desc: "Advanced heart treatments & surgeries." },
  { icon: Brain, title: "Neurology", desc: "Brain & nerve related treatments." },
  { icon: Bone, title: "Orthopaedics", desc: "Bone & joint care." },
  { icon: Wind, title: "Pulmonology", desc: "Lung & respiratory care." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-foreground mb-2">Our Specialities</h2>
      <p className="text-muted-foreground mb-12">Providing world-class treatment across multiple departments</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
