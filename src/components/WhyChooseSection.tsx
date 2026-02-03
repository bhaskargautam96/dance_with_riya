import { Award, Globe, Sparkles, Theater, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Professional",
    description: "Trained and certified in multiple dance forms with years of professional experience.",
  },
  {
    icon: Globe,
    title: "Online & Offline Classes",
    description: "Flexible learning options to suit your schedule, from anywhere in the world.",
  },
  {
    icon: Sparkles,
    title: "Personalized Choreography",
    description: "Custom routines designed specifically for your events, goals, and personality.",
  },
  {
    icon: Theater,
    title: "Performance-Ready Training",
    description: "Build stage presence and confidence to shine in any performance setting.",
  },
  {
    icon: Heart,
    title: "Safe & Supportive Space",
    description: "A welcoming environment where every woman can express herself freely.",
  },
  {
    icon: Shield,
    title: "Women-Focused Classes",
    description: "Dedicated classes designed with the unique needs of female dancers in mind.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blush-light via-lavender-light to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lavender/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              Why Choose Me
            </span>
            <span className="w-8 h-[2px] bg-primary" />
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Dance with <span className="italic text-primary">Confidence</span>
          </h2>
          <p className="text-muted-foreground">
            What makes my classes special and why hundreds of women have chosen 
            to begin their dance journey with me.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-light group-hover:bg-primary transition-colors duration-500 mb-6">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
