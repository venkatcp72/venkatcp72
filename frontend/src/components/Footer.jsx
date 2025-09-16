import React from 'react';
import { Badge } from './ui/badge';
import { mockPortfolioData } from '../mock/portfolioData';
import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { contact } = mockPortfolioData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'AI-Enhanced Design',
    'Brand Identity & Strategy',
    'Digital Marketing Creatives',
    'Packaging Design',
    'Social Media Content',
    'Design Consultation'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">VC</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">
                  Venkateshwaran C P
                </div>
                <div className="text-emerald-400 text-sm">
                  AI-Powered Designer
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through strategic design thinking and AI-enhanced creative solutions. 
              20+ years of experience delivering measurable results.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                {contact.availability}
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={contact.socialLinks.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={contact.socialLinks.instagram}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={contact.socialLinks.behance}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  {contact.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a 
                  href={`tel:${contact.phone}`}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  {contact.phone}
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{contact.location}</span>
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="text-sm font-medium text-white mb-2">Languages</div>
              <div className="flex flex-wrap gap-2">
                {contact.languages.map((language, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Venkateshwaran C P. All rights reserved. 
              <span className="inline-flex items-center gap-1 ml-2">
                Made with <Heart className="w-4 h-4 text-red-500" /> and AI-enhanced creativity
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button className="hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;