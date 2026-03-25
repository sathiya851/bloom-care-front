const reviews = [
  { text: "Excellent care and friendly staff.", name: "Meera" },
  { text: "Best hospital in Cuddalore.", name: "Rajesh" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-foreground mb-12">What Patients Say</h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-section-alt rounded-xl p-6 shadow-sm">
            <p className="text-muted-foreground italic mb-4">"{r.text}"</p>
            <p className="text-sm font-semibold text-foreground">- {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
