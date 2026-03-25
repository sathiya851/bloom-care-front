const doctors = [
  { name: "Dr. Kalyanaraman", role: "Cardiologist", initials: "KK" },
  { name: "Dr. Rajeswaran", role: "General Surgeon", initials: "RR" },
  { name: "Dr. Arunsam", role: "Orthopaedic", initials: "TA" },
];

const DoctorsSection = () => (
  <section id="doctors" className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-foreground mb-12">Our Specialists</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {doctors.map((d) => (
          <div key={d.name} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
              {d.initials}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{d.name}</h3>
            <p className="text-sm text-primary mt-1">{d.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
