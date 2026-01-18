import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Product: ["Live Classes", "Skill Tracks", "Find Mentors", "Pricing"],
    Company: ["About Us", "Careers", "Blog", "Contact"],
    Resources: ["Help Center", "Community", "Tutorials", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  return (
    <footer className="border-t border-primary/30 bg-background pt-16">
      {/* Top accent line */}
      <div className="h-1 w-full bg-primary" />

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
                L
              </div>
              <span className="font-display text-xl font-semibold text-foreground">Lyfex</span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground max-w-xs">
              Empowering learners with interactive LIVE classes and world-class mentors.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-semibold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border/30 pt-8">
          <div>
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest skills and classes
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 bg-secondary border-border/50 rounded-full"
            />
            <Button variant="gold" className="rounded-full">Subscribe</Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/30 pt-8">
          <p className="text-sm text-muted-foreground">
            © 2025 Lyfex. All rights reserved. Built for learners, by educators.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
