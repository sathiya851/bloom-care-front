import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Kalyaan Speciaality Hospital" className="h-8 w-auto brightness-200 invert" />
        </div>
        <div className="flex flex-wrap gap-6">
          {["Services", "Doctors", "Facilities", "Reviews", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-background/50 hover:text-background/80 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-sm text-background/50">
        📍 No 5, Kundusalai Road, Alpet, Cuddalore – 607001 &nbsp;|&nbsp; 📞 9445281804 &nbsp;|&nbsp; 04142-220055
      </div>
      <div className="mt-4 pt-6 border-t border-background/10 text-xs text-background/40">
        © 2026 Kalyaan Speciaality Hospital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
