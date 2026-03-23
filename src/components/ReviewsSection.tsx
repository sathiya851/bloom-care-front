import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Meera Krishnan", initials: "MK", rating: 5, date: "2 weeks ago", text: "Dr. Kalyanaraman and the entire team were exceptional. The cardiac care here is outstanding — the staff kept us informed at every step. Truly the best hospital in Cuddalore for heart care." },
  { name: "Rajesh Venkataraman", initials: "RV", rating: 5, date: "1 month ago", text: "Came in with severe chest pain and was treated immediately. The emergency response was world-class. The cath lab facility is excellent and the doctors explained everything clearly." },
  { name: "Anitha Balan", initials: "AB", rating: 4, date: "3 weeks ago", text: "Very professional staff and spotless facilities. My father had orthopaedic surgery here with Dr. Arunsam and recovered smoothly. The AC inpatient rooms are comfortable." },
  { name: "Farhan Qureshi", initials: "FQ", rating: 5, date: "1 week ago", text: "The TMT and echo facilities are modern and well-maintained. Dr. Kalyanaraman's expertise in cardiology gave our family complete peace of mind. Highly recommend Kalyaan Hospital." },
  { name: "Lakshmi Narayanan", initials: "LN", rating: 5, date: "2 months ago", text: "Best multi-speciality hospital in Cuddalore. My angioplasty was done with minimal discomfort. The nursing staff were caring and attentive throughout my stay." },
  { name: "Suresh Iyer", initials: "SI", rating: 4, date: "5 weeks ago", text: "Came for a gastro consultation with Dr. Sankar. The endoscopy facility is excellent and the procedure was painless. Results were explained in detail. Very impressed." },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${i < rating ? "fill-[hsl(35,90%,52%)] text-[hsl(35,90%,52%)]" : "fill-muted text-muted"}`} />
    ))}
  </div>
);

const ReviewCard = ({ review, delay, visible }: { review: typeof reviews[0]; delay: number; visible: boolean }) => (
  <div
    className={`bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-[box-shadow,opacity,transform,filter] duration-500 flex flex-col gap-3 ${
      visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-5 blur-[2px]"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
          {review.initials}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{review.name}</p>
          <p className="text-muted-foreground text-[11px]">{review.date}</p>
        </div>
      </div>
      <img src="https://www.google.com/favicon.ico" alt="Google" className="h-4 w-4 opacity-60" />
    </div>
    <StarRating rating={review.rating} />
    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{review.text}</p>
  </div>
);

const ReviewsSection = () => {
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

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Patient Feedback
          </p>
          <h2 className="text-3xl lg:text-[2.5rem] text-foreground" style={{ lineHeight: 1.15 }}>
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[hsl(35,90%,52%)] text-[hsl(35,90%,52%)]" />
              ))}
            </div>
            <span className="font-bold text-foreground text-lg">{avgRating}</span>
            <span className="text-muted-foreground text-sm">based on {reviews.length} reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={80 * i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
