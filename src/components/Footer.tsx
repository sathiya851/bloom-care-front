import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-accent fill-accent/30" />
          <span className="font-serif text-lg text-background">Heart Sepalicty</span>
        </div>
        <div className="flex flex-wrap gap-6">
          {["Services", "Doctors", "About", "Contact", "Careers", "Privacy"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-background/50 hover:text-background/80 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-background/10 text-xs text-background/40">
        © 2026 Heart Sepalicty Hospital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
