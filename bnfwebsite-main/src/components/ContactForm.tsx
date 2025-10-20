import { motion } from "framer-motion";
import { useState, type FormEvent} from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const SERVICE_ID = "service_trndhzb";
const TEMPLATE_ID = "template_r5hq58s";
const PUBLIC_KEY  = "O_H0Kjep503x2xWuJ";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ולידציה בסיסית: רק שם ואימייל חובה (כפי שביקשת)
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSending(true);

      // שולחים ל-EmailJS לפי השדות שבתבנית שלך ({{name}}, {{email}}, {{message}} וכו')
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          organization: formData.organization || "",
          phone: formData.phone || "",
          interest: formData.interest || "",
          message: formData.message || "",
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "A BNF representative will reach out to schedule a confidential consultation.",
      });

      // איפוס הטופס
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Failed to send",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
        viewport={{ amount: 0.2 }}
        className="max-w-2xl w-full z-10"
      >
        <motion.div
          className="text-center mb-6 md:mb-8 px-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ amount: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
            Let's Build the Next Line of Defense
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-3xl mx-auto">
            Whether you represent a government agency, enterprise, or research partner, our team is ready to collaborate.
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-neutral-700/50 shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ amount: 0.3 }}
        >
          {/* Full Name (required) */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/50 border-primary/20 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
              placeholder="Your full name"
            />
          </div>

          {/* Organization (optional) */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium mb-2 text-foreground">
              Organization
            </label>
            <Input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="bg-background/50 border-primary/20 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
              placeholder="Your organization"
            />
          </div>

          {/* Email (required) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/50 border-primary/20 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone (optional) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/50 border-primary/20 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Interest (optional) */}
          <div>
            <label htmlFor="interest" className="block text-sm font-medium mb-2 text-foreground">
              Area of Interest
            </label>
            <Select
              value={formData.interest}
              onValueChange={(value) => setFormData({ ...formData, interest: value })}
            >
              <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors">
                <SelectValue placeholder="Select an area" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-primary/20">
                <SelectItem value="planet-nine" className="focus:bg-primary/20 focus:text-primary">Planet Nine</SelectItem>
                <SelectItem value="epos" className="focus:bg-primary/20 focus:text-primary">Epos</SelectItem>
                <SelectItem value="spring" className="focus:bg-primary/20 focus:text-primary">Spring.ai</SelectItem>
                <SelectItem value="bnf-sg" className="focus:bg-primary/20 focus:text-primary">BNF SG</SelectItem>
                <SelectItem value="partnership" className="focus:bg-primary/20 focus:text-primary">Partnership</SelectItem>
                <SelectItem value="media" className="focus:bg-primary/20 focus:text-primary">Media</SelectItem>
              </SelectContent>
            </Select>
            {/* כדי להעביר את הערך ל-EmailJS אם אי פעם תרצה FormData --> שומרים בעזרת input חבוי */}
            <input type="hidden" name="interest" value={formData.interest} />
          </div>

          {/* Message (optional now — removed required) */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/50 border-primary/20 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors min-h-[100px]"
              placeholder="Tell us about your needs..."
            />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-black font-bold py-5 text-base hover:bg-primary/90 transition-all shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] border-2 border-primary"
            >
              {sending ? "Sending…" : "Book a Briefing"}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;