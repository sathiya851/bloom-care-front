import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-[hsl(210,30%,12%)] py-14">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Kalyaan Speciaality Hospital" className="h-10 w-auto brightness-200 invert mb-4" />
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Cuddalore's trusted heart & multi-speciality care centre — advanced technology with compassionate treatment.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {["Services", "Doctors", "Facilities", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-white/45 hover:text-white/80 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-white/50">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/30" />
              No 5, Kundusalai Road, Alpet, Cuddalore – 607001
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Phone className="w-4 h-4 shrink-0 text-white/30" />
              9445281804 | 04142-220055
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Mail className="w-4 h-4 shrink-0 text-white/30" />
              info@kalyaanhospital.com
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/30">
        © {new Date().getFullYear()} Kalyaan Speciaality Hospital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
