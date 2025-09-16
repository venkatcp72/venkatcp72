import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Briefcase, GraduationCap, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Entrepreneurial Leadership",
      description: "20+ years building successful ventures across retail, technology, and sustainability sectors"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Masters in Energy Engineering with advanced certifications in Generative AI"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "Multilingual professional fluent in English, Tamil, Hindi, and Kannada"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Creative Vision",
      description: "Passionate designer combining strategic thinking with compelling visual storytelling"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
              About Me
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Where Strategy Meets
              <span className="text-emerald-600"> Creativity</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A unique journey from engineering to entrepreneurship, now channeling decades of 
              business insight into transformative design solutions.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                My journey began in the world of engineering and energy solutions, where I learned the power of 
                systematic thinking and problem-solving. Over two decades, I've built and led three successful 
                companies, each teaching me valuable lessons about leadership, innovation, and market dynamics.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Throughout this entrepreneurial journey, I consistently pursued my passion for visual storytelling 
                through diverse freelance design projects. From branding and packaging to digital media campaigns, 
                I discovered the profound impact of strategic design thinking.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Today, I'm making a decisive transition to full-time creative work, bringing a unique combination 
                of business acumen, design versatility, and cutting-edge AI integration. This rare blend allows me 
                to create not just beautiful designs, but strategically effective solutions that drive real business results.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-emerald-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Academic Excellence & Continuous Learning
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Masters in Energy Engineering</h4>
                <p className="text-gray-600 text-sm">PSG Tech, Coimbatore</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Generative AI Foundations</h4>
                <p className="text-gray-600 text-sm">UpGrad × Microsoft 2025</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI Mastermind Program</h4>
                <p className="text-gray-600 text-sm">Outskill 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;