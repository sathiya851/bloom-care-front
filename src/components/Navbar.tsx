import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Doctors", "Facilities", "Contact"];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[hsl(var(--dark))] text-primary-foreground text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <span className="flex items-center gap-1.5 opacity-80">
            <MapPin className="w-3 h-3" />
            Cuddalore – 607001, Tamil Nadu
          </span>
          <span className="flex items-center gap-1.5 opacity-80">
            <Phone className="w-3 h-3" />
            📞 9445281804
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card shadow-sm border-b border-border/40">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="text-xl font-semibold text-primary">
            KALYAAN <span className="text-foreground">Hospital</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            Book Appointment
          </Button>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-card border-t border-border px-4 pb-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 text-sm text-muted-foreground hover:text-primary border-b border-border/30 last:border-0"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button size="sm" className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Book Appointment
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
