import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import heroDancer from "@/assets/hero-dancer.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDancer}
          alt="Elegant dancer in motion"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Decorative element */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="w-12 h-[2px] bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
              Professional Choreography
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Where Movement
            <br />
            <span className="text-gradient-rose italic">Becomes Emotion</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Professional dance training & choreography that transforms passion into artistry. 
            Discover the grace within you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book a Class
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Performances
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 animate-fade-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <div>
              <span className="font-heading text-4xl font-semibold text-primary">10+</span>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div>
              <span className="font-heading text-4xl font-semibold text-primary">500+</span>
              <p className="text-sm text-muted-foreground mt-1">Students Trained</p>
            </div>
            <div>
              <span className="font-heading text-4xl font-semibold text-primary">200+</span>
              <p className="text-sm text-muted-foreground mt-1">Performances</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
