import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light via-lavender-light to-primary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lavender/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8 animate-float">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Ready to Dance with
            <br />
            <span className="italic text-primary">Confidence?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join a space where movement meets expression. Start your transformative 
            dance journey today and discover the grace within you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              <Sparkles className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Join Now
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book Trial Class
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <span>✨ First class is free</span>
            <span>💖 Women-only batches available</span>
            <span>🎯 Personalized attention</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
