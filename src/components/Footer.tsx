import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center shadow-medium">
                <span className="text-2xl font-bold text-primary-foreground">LZ</span>
              </div>
              <div>
                <div className="text-xl font-bold">LINDSEY ZAHN P.C.</div>
                <div className="text-xs uppercase tracking-wider opacity-80">
                  Alcohol + Food Law
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Leading law firm representing wineries, breweries, distilleries, cideries, meaderies,
              and food manufacturers with expert legal guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Industries", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-coral transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-coral" />
                <a
                  href="mailto:info@zahnlawpc.com"
                  className="text-primary-foreground/80 hover:text-coral transition-colors"
                >
                  info@zahnlawpc.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-coral" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-coral transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-coral" />
                <span className="text-primary-foreground/80">New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Lindsey Zahn P.C. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-coral transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-coral transition-colors"
              >
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
