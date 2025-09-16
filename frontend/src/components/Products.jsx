import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Video, Play, Users, Gift, Package, Instagram, Youtube } from 'lucide-react';

const Products = () => {
  const offerings = [
    { name: "Corporate Explainer Videos", icon: <Users className="w-6 h-6" /> },
    { name: "Digital Wedding Video Invites", icon: <Gift className="w-6 h-6" /> },
    { name: "Product Demo Videos", icon: <Package className="w-6 h-6" /> },
    { name: "Instagram Videos", icon: <Instagram className="w-6 h-6" /> },
    { name: "YouTube Videos", icon: <Youtube className="w-6 h-6" /> },
    { name: "And More...", icon: <Video className="w-6 h-6" /> }
  ];

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
              AI technology with strategic design thinking to deliver exceptional creative solutions.
            </p>
          </div>

          {/* Our Offerings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Offerings</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((offering, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-emerald-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                      <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                        {offering.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900">{offering.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sarvo AI Studio Video - Square Format */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Sarvo AI Studio</h3>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  src="https://customer-assets.emergentagent.com/job_a3d50be0-e9a5-47f6-bac9-65a33232c315/artifacts/2uve8rof_Animate%20Sarvo%20Logo.mp4"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;