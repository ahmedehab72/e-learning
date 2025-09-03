import { motion } from "framer-motion";
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Heart,
  BookOpen,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    Courses: [
      { name: "Technology", href: "#features" },
      { name: "Business", href: "#features" },
      { name: "Design", href: "#features" },
      { name: "Personal Development", href: "#features" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Help Center", href: "#" },
      { name: "Student Success", href: "#" },
      { name: "Community", href: "#" },
      { name: "Mobile App", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-card border-t">
      {/* Background gradient */}
      <div className="absolute inset-0  bg-gradient-to-br from-pink-100 via-white to-rose-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <BookOpen
                  className=" dark:text-white text-black font-bold"
                  size={40}
                />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-white from-black to-red-500">
                  E-Learning
                </span>
              </motion.div>
              

              <motion.p
                className="text-muted-foreground mb-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Empowering learners worldwide to master new skills and advance
                their careers. Join over 250,000+ students who trust LearnHub
                for their professional development.
              </motion.p>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-red-100 dark:bg-red-900  group-hover:scale-110 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold mb-4 text-foreground">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <motion.button
                          onClick={() => scrollToSection(link.href)}
                          className="text-muted-foreground hover:text-primary !border-none !bg-transparent transition-colors text-left relative group"
                          whileHover={{ x: 4 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.1 + linkIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t py-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} E_learning made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>in egypt.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
