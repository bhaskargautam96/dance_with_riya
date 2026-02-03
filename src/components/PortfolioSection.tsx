import { Play } from "lucide-react";
import heroDancer from "@/assets/hero-dancer.jpg";
import contemporaryDance from "@/assets/contemporary-dance.jpg";
import bollywoodDance from "@/assets/bollywood-dance.jpg";
import weddingDance from "@/assets/wedding-dance.jpg";
import stagePerformance from "@/assets/stage-performance.jpg";
import danceClass from "@/assets/dance-class.jpg";

const portfolioItems = [
  {
    image: heroDancer,
    title: "Contemporary Solo",
    category: "Performance",
    isVideo: true,
  },
  {
    image: bollywoodDance,
    title: "Bollywood Fusion",
    category: "Stage Show",
    isVideo: true,
  },
  {
    image: weddingDance,
    title: "Wedding Choreography",
    category: "Bridal Dance",
    isVideo: false,
  },
  {
    image: stagePerformance,
    title: "Stage Performance",
    category: "Competition",
    isVideo: true,
  },
  {
    image: contemporaryDance,
    title: "Studio Session",
    category: "Training",
    isVideo: false,
  },
  {
    image: danceClass,
    title: "Group Class",
    category: "Workshops",
    isVideo: false,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              Portfolio
            </span>
            <span className="w-8 h-[2px] bg-primary" />
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Moments of <span className="italic text-primary">Grace</span>
          </h2>
          <p className="text-muted-foreground">
            A glimpse into performances, events, and the beautiful journey of dance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-xl cursor-pointer animate-fade-up opacity-0 ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className={`relative ${index === 0 || index === 3 ? "h-[400px] md:h-[500px]" : "h-[200px] md:h-[240px]"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500" />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.isVideo && (
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  )}
                  <h3 className="font-heading text-xl text-primary-foreground font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">{item.category}</p>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blush-light/90 backdrop-blur-sm rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
