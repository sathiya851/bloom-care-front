import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-[hsl(var(--dark))] text-primary-foreground">
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">KALYAAN Hospital</h4>
            <p className="text-sm text-primary-foreground/60">Advanced cardiac & multi-speciality hospital.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <a href="#services" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground/80 mb-1">Services</a>
            <a href="#doctors" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground/80">Doctors</a>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Phone className="w-4 h-4" /> 9445281804
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 rounded-xl overflow-hidden h-[250px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.2!2d79.7547!3d11.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363c21346e2a1%3A0x4a09a3e78e5e1f0!2sKalyaan+Speciality+Hospital!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kalyaan Hospital Location"
          />
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4">
      <p className="text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Kalyan Hospital
      </p>
    </div>
  </footer>
);

export default Footer;
