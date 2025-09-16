import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ArrowDown, Eye, Mail } from 'lucide-react';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-bold">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  DESIGNS THAT THINK. VIDEOS THAT FEEL.
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    VENKATESHWARAN
                  </span>
                  <br />
                  <span className="text-emerald-400">C P</span>
                </h1>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                  AI-Powered Graphic Designer &
                  <br />
                  <span className="text-emerald-400">Strategic Creative</span>
                </p>
              </div>
              
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl">
                Transforming businesses through strategic design thinking. 20+ years of entrepreneurial leadership 
                now focused on creating compelling visual narratives enhanced with cutting-edge AI technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 lg:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsResumeOpen(true)}
                  className="border-gray-600 text-white hover:bg-gray-800 px-6 lg:px-8 py-3 rounded-full transition-all duration-300"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Resume
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-400">20+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-400">3</div>
                  <div className="text-xs lg:text-sm text-gray-400">Companies Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-400">50+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Design Projects</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & Logo */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Main Photo */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_a3d50be0-e9a5-47f6-bac9-65a33232c315/artifacts/e0ddcbu7_Photo.jpg"
                      alt="Venkateshwaran C P - AI-Powered Graphic Designer"
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: '50% 30%' }}
                    />
                  </div>
                </div>
                
                {/* Animated Logo */}
                <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-20 h-20 lg:w-24 lg:h-24 bg-gray-800 rounded-full border-4 border-gray-700 flex items-center justify-center shadow-xl">
                  <video 
                    src="https://customer-assets.emergentagent.com/job_a3d50be0-e9a5-47f6-bac9-65a33232c315/artifacts/2uve8rof_Animate%20Sarvo%20Logo.mp4"
                    autoPlay 
                    loop 
                    muted
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
              </div>
              
              {/* Floating Elements - Hidden on mobile */}
              <div className="hidden lg:block absolute top-10 -left-10 w-20 h-20 bg-emerald-500/10 rounded-full animate-pulse"></div>
              <div className="hidden lg:block absolute bottom-20 -right-5 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Hero;