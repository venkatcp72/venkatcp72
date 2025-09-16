import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockPortfolioData } from '../mock/portfolioData';
import { Mail, Phone, MapPin, Globe, Send, Clock, Languages, Briefcase } from 'lucide-react';

const Contact = () => {
  const { contact } = mockPortfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Create
              <span className="text-emerald-600"> Together</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your ideas into compelling visual solutions? 
              I'm here to help bring your creative vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Availability Status */}
              <Card className="border-emerald-200 bg-emerald-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-emerald-700">{contact.availability}</span>
                  </div>
                  <p className="text-emerald-600 text-sm">
                    Currently accepting new projects and collaborations for 2025.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600 text-sm">{contact.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600 text-sm">{contact.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600 text-sm">{contact.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <Briefcase className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="font-medium text-gray-900">Studio</div>
                      <div className="text-gray-600 text-sm">{contact.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Globe className="w-5 h-5 text-emerald-500" />
                    Languages & Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Languages className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-gray-900">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {contact.languages.map((language, index) => (
                        <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-700">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-gray-900">Response Time</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Typically within 24 hours on business days
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Start Your Project</CardTitle>
                  <p className="text-gray-600">
                    Tell me about your project and let's explore how we can work together 
                    to create something extraordinary.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <Input 
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Company/Organization
                        </label>
                        <Input 
                          placeholder="Your company name"
                          className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Project Budget Range
                        </label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under ₹10,000</option>
                          <option value="10k-25k">₹10,000 - ₹25,000</option>
                          <option value="25k-50k">₹25,000 - ₹50,000</option>
                          <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                          <option value="100k-plus">₹1,00,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Project Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {["Brand Identity", "Digital Marketing", "AI-Enhanced Design", "Packaging Design", "Social Media", "Consultation"].map((type) => (
                          <label key={type} className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="text-emerald-500 focus:ring-emerald-500" />
                            <span className="text-sm text-gray-700">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Project Description *
                      </label>
                      <Textarea 
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        required
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Project Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;