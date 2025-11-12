import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center shadow-medium">
              <span className="text-2xl font-bold text-primary-foreground">LZ</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground">LINDSEY ZAHN P.C.</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Alcohol + Food Law
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-coral transition-smooth rounded-md hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="ml-4">
              Client Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md shadow-large">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-coral hover:bg-muted rounded-md transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full">Client Portal</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
