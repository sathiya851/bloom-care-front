import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Services", "Doctors", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <Heart className="w-7 h-7 text-accent fill-accent/20 group-hover:fill-accent/40 transition-colors" />
          <span className="font-serif text-xl text-foreground tracking-tight">
            Heart Sepalicty
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm text-primary font-medium">
            <Phone className="w-4 h-4" />
            Emergency
          </a>
          <Button size="sm">Book Appointment</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 animate-fade-in">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button size="sm" className="w-full mt-2">Book Appointment</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
