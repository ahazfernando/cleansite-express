import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2" title="Skill City Facility Solutions">
              <div className="relative h-16 w-56">
                <img
                  src="/SkillCityFSEC.png"
                  alt="Skill City Facility Solutions - Professional Cleaning Melbourne Victoria"
                  className="h-full w-auto object-contain object-left"
                />
              </div>
            </Link>
            <h3 className="text-lg font-semibold text-primary-foreground sr-only">Skill City Facility Solutions</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              <strong className="text-primary-foreground">Skill City Facility Solutions</strong> — Professional cleaning services for homes and businesses across Melbourne, Oakleigh and Victoria. We make your spaces sparkle so you can focus on what matters most.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link === "Home" ? "" : link.toLowerCase().replace(" ", "-").replace("us", "")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["House Cleaning", "Office Cleaning", "Deep Cleaning", "Move In/Out Cleaning", "Commercial Cleaning"].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  4A Haughton Road, Oakleigh,<br />
                  3166, VIC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+61370447710" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  037 044 7710
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:admin@skillcityfacilitysolutions.com.au" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  admin@skillcityfacilitysolutions.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 Skill City Facility Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
