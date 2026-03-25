import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 max-w-lg">
      <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Contact Us</h2>
      <form className="bg-card rounded-xl p-6 shadow-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Input placeholder="Your Name" className="rounded-lg" />
        <Input placeholder="Phone Number" type="tel" className="rounded-lg" />
        <Textarea placeholder="Your Message" rows={4} className="rounded-lg" />
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-11">
          Send Message
        </Button>
      </form>
    </div>
  </section>
);

export default ContactSection;
