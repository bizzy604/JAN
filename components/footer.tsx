"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const quickLinks = [
    { title: "About Ariko", href: "/about" },
    { title: "Campaign Priorities", href: "/priorities" },
    { title: "News & Updates", href: "/news" },
    { title: "Get Involved", href: "/contact" },
    { title: "Donate", href: "/donate" },
  ];

  const contactInfo = [
    { icon: Phone, text: "(254) 700-000-000", href: "tel:+254700000000" },
    { icon: Mail, text: "info@ariko.com", href: "mailto:info@ariko.com" },
    { icon: MapPin, text: "123 Campaign HQ, Nairobi, Kenya", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10">
          {/* Logo & Social Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="block">
                <div className="text-2xl font-bold">Dr. John Ariko Namoit</div>
                <div className="text-primary text-sm">For Governor 2027</div>
              </Link>
            </motion.div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Dr. John Ariko Namoit. All rights reserved.</p>
          <p className="mt-2">Created by <Link href="https://www.linkedin.com/in/amoni-kevin/" className="hover:text-primary transition-colors">Amoni Kevin</Link>.</p>
        </div>
      </div>
    </footer>
  );
}