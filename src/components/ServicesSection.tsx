import contemporaryDance from "@/assets/contemporary-dance.jpg";
import bollywoodDance from "@/assets/bollywood-dance.jpg";
import weddingDance from "@/assets/wedding-dance.jpg";
import freestyleDance from "@/assets/freestyle-dance.jpg";
import stagePerformance from "@/assets/stage-performance.jpg";

const services = [
  {
    title: "Contemporary Dance",
    description: "Express emotions through fluid movements and modern techniques. Perfect for those seeking artistic expression.",
    image: contemporaryDance,
    duration: "60 mins",
    level: "All Levels",
  },
  {
    title: "Bollywood Choreography",
    description: "Learn vibrant, energetic Bollywood routines perfect for celebrations, events, and pure joy.",
    image: bollywoodDance,
    duration: "75 mins",
    level: "Beginner+",
  },
  {
    title: "Wedding Dance",
    description: "Create magical moments for your special day. Personalized choreography for brides, couples, and groups.",
    image: weddingDance,
    duration: "Custom",
    level: "All Levels",
  },
  {
    title: "Freestyle & Fusion",
    description: "Discover your unique style by blending different dance forms. Unleash your creativity.",
    image: freestyleDance,
    duration: "60 mins",
    level: "Intermediate+",
  },
  {
    title: "Stage Performances",
    description: "Professional choreography for events, competitions, and stage shows. Make every performance unforgettable.",
    image: stagePerformance,
    duration: "Custom",
    level: "Advanced",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              What I Offer
            </span>
            <span className="w-8 h-[2px] bg-primary" />
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Dance Styles & <span className="italic text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground">
            From graceful contemporary to vibrant Bollywood, discover the perfect dance 
            style to express your inner artistry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-blush-light/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {service.duration}
                  </span>
                  <span className="px-3 py-1 bg-lavender/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {service.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
