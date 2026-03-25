import facilityOT from "@/assets/facility-ot.jpeg";
import facilityCathlab from "@/assets/facility-cathlab.jpeg";
import facilityWard from "@/assets/facility-ward.jpeg";

const facilities = [
  { img: facilityOT, label: "Operation Theatre" },
  { img: facilityCathlab, label: "Cath Lab" },
  { img: facilityWard, label: "General Ward" },
];

const FacilitiesSection = () => (
  <section id="facilities" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-foreground mb-12">World-Class Facilities</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {facilities.map((f) => (
          <div key={f.label} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={f.img} alt={f.label} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-foreground">{f.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
