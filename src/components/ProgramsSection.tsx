import { Clock, Users, Laptop, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import danceClass from "@/assets/dance-class.jpg";

const programs = [
  {
    title: "Beginner Dance Program",
    description: "Start your dance journey with fundamental techniques and build confidence step by step.",
    features: ["No experience needed", "Basic techniques", "Weekly sessions"],
    ageGroup: "16+ years",
    mode: "Offline & Online",
    icon: "🌱",
  },
  {
    title: "Advanced Choreography",
    description: "Elevate your skills with complex routines and performance-ready training.",
    features: ["Complex choreography", "Stage presence", "Performance training"],
    ageGroup: "18+ years",
    mode: "Offline",
    icon: "⭐",
  },
  {
    title: "Kids Dance Classes",
    description: "Fun, age-appropriate dance classes that build coordination, confidence, and creativity.",
    features: ["Fun environment", "Age-appropriate", "Build confidence"],
    ageGroup: "6-15 years",
    mode: "Offline",
    icon: "🎀",
  },
  {
    title: "Online Dance Classes",
    description: "Learn from anywhere with live virtual classes and recorded sessions for practice.",
    features: ["Live sessions", "Flexible timing", "Recorded replays"],
    ageGroup: "All ages",
    mode: "Online Only",
    icon: "💻",
  },
  {
    title: "Personal 1-on-1 Sessions",
    description: "Customized private sessions tailored to your goals, pace, and preferred dance style.",
    features: ["Personalized attention", "Custom choreography", "Flexible scheduling"],
    ageGroup: "All ages",
    mode: "Online & Offline",
    icon: "💫",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <img
          src={danceClass}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              Class Programs
            </span>
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Find Your <span className="italic text-primary">Perfect Program</span>
          </h2>
          <p className="text-muted-foreground">
            Whether you're a complete beginner or an experienced dancer, we have the 
            right program to help you grow and express yourself.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <span className="text-4xl mb-4 block">{program.icon}</span>

              {/* Title */}
              <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  {program.ageGroup}
                </span>
                <span className="flex items-center gap-1.5">
                  {program.mode.includes("Online") ? (
                    <Laptop className="w-3.5 h-3.5" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5" />
                  )}
                  {program.mode}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
