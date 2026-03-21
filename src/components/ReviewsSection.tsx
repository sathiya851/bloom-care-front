import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Meera Krishnan",
    initials: "MK",
    rating: 5,
    date: "2 weeks ago",
    text: "Dr. Sharma and the entire team were exceptional. After my bypass surgery, I felt cared for every step of the way. The nurses checked on me regularly, and the follow-up plan was thorough. Highly recommend this hospital for cardiac care.",
  },
  {
    name: "Rajesh Venkataraman",
    initials: "RV",
    rating: 5,
    date: "1 month ago",
    text: "I came in with severe chest pain and was treated within minutes. The emergency response was world-class. The doctors explained every test clearly and kept my family informed throughout. Truly grateful.",
  },
  {
    name: "Anitha Balan",
    initials: "AB",
    rating: 4,
    date: "3 weeks ago",
    text: "Very professional staff and clean facilities. My father had his pacemaker implanted here and the procedure went smoothly. The only reason for 4 stars is the wait time for outpatient appointments could be shorter.",
  },
  {
    name: "Farhan Qureshi",
    initials: "FQ",
    rating: 5,
    date: "1 week ago",
    text: "The cardiac rehabilitation program changed my life. Six months post-surgery, I'm walking 5 km daily thanks to their structured recovery plan. The physiotherapy team is fantastic and truly motivating.",
  },
  {
    name: "Lakshmi Narayanan",
    initials: "LN",
    rating: 5,
    date: "2 months ago",
    text: "Best cardiac hospital in the region. My angioplasty was done with minimal discomfort, and I was back home within 48 hours. Dr. Patel's expertise gave our family complete peace of mind.",
  },
  {
    name: "Suresh Iyer",
    initials: "SI",
    rating: 4,
    date: "5 weeks ago",
    text: "Came for a routine heart check-up and was impressed by the thoroughness. The echo and stress test results were explained in plain language. Facilities are modern and well-maintained. Great preventive care.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review, delay }: { review: typeof reviews[0]; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4 ${
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
      }`}
      style={{
        transition: "opacity 600ms ease-out, transform 600ms ease-out, filter 600ms ease-out, box-shadow 300ms ease-out",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
            {review.initials}
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{review.name}</p>
            <p className="text-muted-foreground text-xs">{review.date}</p>
          </div>
        </div>
        <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5 opacity-70" />
      </div>
      <StarRating rating={review.rating} />
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{review.text}</p>
    </div>
  );
};

const ReviewsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          ref={headerRef}
          className={`text-center mb-14 ${
            headerVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
          }`}
          style={{ transition: "opacity 700ms ease-out, transform 700ms ease-out, filter 700ms ease-out" }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Quote className="h-4 w-4" />
            Patient Reviews
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3" style={{ lineHeight: 1.1 }}>
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground text-lg">{avgRating}</span>
            <span className="text-muted-foreground text-sm">based on {reviews.length} Google reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={80 * i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
