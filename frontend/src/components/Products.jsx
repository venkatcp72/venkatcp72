import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Play, Sparkles, Brain, Zap } from 'lucide-react';

const Products = () => {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
              Our Products
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered
              <span className="text-emerald-600"> Creative Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover our innovative products that blend cutting-edge AI technology with 
              strategic design thinking to deliver exceptional creative solutions.
            </p>
          </div>

          {/* Featured Product - Sarvo AI Studio */}
          <div className="mb-16">
            <Card className="overflow-hidden border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-blue-50">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-600 text-sm font-medium mb-4 mx-auto">
                  <Sparkles className="w-4 h-4" />
                  Featured Product
                </div>
                <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sarvo AI Studio
                </CardTitle>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Revolutionary AI-powered design studio that transforms creative workflows 
                  with intelligent automation and strategic design insights.
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                {/* Video Section */}
                <div className="relative mb-8">
                  <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    <video 
                      src="https://customer-assets.emergentagent.com/job_a3d50be0-e9a5-47f6-bac9-65a33232c315/artifacts/2uve8rof_Animate%20Sarvo%20Logo.mp4"
                      autoPlay 
                      loop 
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Driven Design</h3>
                    <p className="text-gray-600">
                      Harness the power of artificial intelligence to create stunning designs 
                      with unprecedented speed and precision.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">
                      Accelerate your creative process with automated workflows that deliver 
                      professional results in minutes, not hours.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Creativity</h3>
                    <p className="text-gray-600">
                      Combine human creativity with AI intelligence to produce designs that 
                      are both innovative and strategically effective.
                    </p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Learn More About Sarvo AI Studio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Products Placeholder */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-emerald-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Motion Design Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional motion graphics and animation tools powered by AI for creating 
                  engaging video content and dynamic brand experiences.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-emerald-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Brand Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AI-powered brand strategy and identity generator that creates cohesive 
                  brand systems based on market analysis and consumer insights.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;