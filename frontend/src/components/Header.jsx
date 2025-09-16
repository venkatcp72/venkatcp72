import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Menu, X, Eye, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">VC</span>
            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Venkateshwaran C P
              </div>
              <div className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-emerald-600' : 'text-emerald-400'
              }`}>
                AI-Powered Designer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 hover:text-emerald-500 ${
                  isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-emerald-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsResumeOpen(true)}
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Eye className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsResumeOpen(true)}
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
                <Button 
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resume Modal */}
      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Venkateshwaran C P - Resume
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-0">
            <div className="w-full h-[70vh] overflow-auto rounded-lg border border-gray-200">
              <img 
                src="https://customer-assets.emergentagent.com/job_sarvo-studio/artifacts/mamg01e1_Venkateshwaran%20CV.png"
                alt="Venkateshwaran C P Resume"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;