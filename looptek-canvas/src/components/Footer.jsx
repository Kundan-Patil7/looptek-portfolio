// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/looptek.in', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/looptek', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/looptek', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/looptek', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://youtube.com/@looptek', label: 'YouTube' }
  ];

  const quickLinks = ['Home', 'Industries', 'Services', 'Workflow', 'Contact'];

  return (
    <footer className="bg-dark-light pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LoopteK
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted digital growth partner, helping businesses transform their online presence and achieve remarkable results through data-driven strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 bg-dark border border-gray-700 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>


          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-3">Subscribe for digital marketing tips</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-dark border border-gray-700 rounded-l-lg focus:border-primary outline-none"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p className="flex items-center space-x-1">
            <span>© 2024 LoopteK. All rights reserved.</span>
          </p>
          <p className="flex items-center space-x-1 mt-2 md:mt-0">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>in India</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;