import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Doctors", "Facilities", "Reviews", "Contact"];

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 opacity-80">
              <MapPin className="w-3 h-3" />
              Cuddalore – 607001, Tamil Nadu
            </span>
            <span className="flex items-center gap-1.5 opacity-80">
              <Phone className="w-3 h-3" />
              9445281804 | 04142-220055
            </span>
          </div>
          <span className="opacity-70">24/7 Emergency Services Available</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card shadow-[0_2px_16px_hsl(210_30%_12%/0.06)] border-b border-border/40">
        <div className="container mx-auto flex items-center justify-between h-[68px] px-4 lg:px-8">
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img src={logo} alt="Kalyaan Speciaality Hospital" className="h-11 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-[13px] font-semibold uppercase tracking-wide text-foreground/70 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:9445281804" className="flex items-center gap-1.5 text-sm text-primary font-semibold">
              <Phone className="w-4 h-4" />
              9445281804
            </a>
            <Button size="sm" className="bg-[hsl(35,90%,52%)] hover:bg-[hsl(35,90%,45%)] text-white font-semibold rounded-full px-5 active:scale-[0.97]">
              Book Appointment
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-card border-t border-border px-4 pb-4 animate-fade-in">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 text-sm font-semibold text-foreground/70 hover:text-primary border-b border-border/30 last:border-0"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 text-sm text-primary font-semibold">
              <Phone className="w-4 h-4" /> 9445281804
            </div>
            <Button size="sm" className="w-full mt-3 bg-[hsl(35,90%,52%)] hover:bg-[hsl(35,90%,45%)] text-white font-semibold rounded-full active:scale-[0.97]">
              Book Appointment
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
