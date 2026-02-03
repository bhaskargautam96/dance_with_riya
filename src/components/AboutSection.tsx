import choreographerPortrait from "@/assets/choreographer-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={choreographerPortrait}
                alt="Professional choreographer portrait"
                className="w-full h-[600px] object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blush-light rounded-full opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender rounded-full opacity-50" />
            <div className="absolute top-1/2 -right-4 w-[2px] h-32 bg-gradient-to-b from-primary to-accent" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                About Me
              </span>
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
              Meet the
              <br />
              <span className="italic text-primary">Choreographer</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm <strong className="text-foreground">Riya</strong> — a professional choreographer 
                who believes dance is not just steps, but storytelling through movement. With over 
                4+ years of experience, I've dedicated my life to the art of dance and helping 
                others discover their own grace.
              </p>
              <p>
                My journey began in a small studio, where I fell in love with the way movement 
                could express emotions words couldn't capture. Today, I specialize in 
                <strong className="text-foreground"> contemporary, Bollywood fusion, and expressive freestyle</strong> — 
                each style offering a unique way to connect with your inner self.
              </p>
              <p>
                My mission is simple: to create a safe, supportive space where every woman can 
                find confidence, grace, and joy through dance. Whether you're preparing for your 
                wedding, seeking a creative outlet, or dreaming of performing on stage — 
                I'm here to guide you every step of the way.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-3 bg-blush-light px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Certified Professional</span>
              </div>
              <div className="flex items-center gap-3 bg-lavender-light px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium">4+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 bg-blush-light px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">5 Dance Styles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
