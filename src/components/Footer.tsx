import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Dance With<span className="text-primary"> Riya </span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Where movement becomes emotion. Professional choreography and
              dance training for women who want to discover their inner grace.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/with_riya26"
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-primary transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contemporary Dance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bollywood Choreography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Wedding Dance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Online Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Private Sessions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>
                  123 Dance Studio Lane,
                  <br />
                  Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@auradance.com</span>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <Button variant="gold" className="mt-6 w-full">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2024 Dance With Riya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
            for dancers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
