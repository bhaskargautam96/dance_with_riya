import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    content: "Aura choreographed my sangeet performance and it was absolutely magical! She understood exactly what I wanted and made me feel like a star on my special day.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Dance Student",
    content: "I gained so much confidence, grace, and expression through her classes. The best dance experience I've ever had. Highly recommend!",
    rating: 5,
  },
  {
    name: "Meera Kapoor",
    role: "Working Professional",
    content: "As someone with no dance background, I was nervous. But Aura's patient teaching and supportive environment made me fall in love with dance.",
    rating: 5,
  },
  {
    name: "Shreya Joshi",
    role: "Teen Dancer",
    content: "The kids classes are amazing! My daughter looks forward to every session. She's grown so much in confidence and skill.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              Testimonials
            </span>
            <span className="w-8 h-[2px] bg-primary" />
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Words from <span className="italic text-primary">My Students</span>
          </h2>
          <p className="text-muted-foreground">
            Real stories from women who have transformed through dance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
