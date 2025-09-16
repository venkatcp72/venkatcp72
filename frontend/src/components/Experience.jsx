import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mockPortfolioData } from '../mock/portfolioData';
import { Building2, Rocket, User, Palette, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const { experiences } = mockPortfolioData;
  const [activeTab, setActiveTab] = useState("all");

  const typeIcons = {
    entrepreneurial: <Rocket className="w-5 h-5" />,
    professional: <Building2 className="w-5 h-5" />,
    creative: <Palette className="w-5 h-5" />
  };

  const typeColors = {
    entrepreneurial: "from-emerald-500 to-teal-500",
    professional: "from-blue-500 to-indigo-500", 
    creative: "from-purple-500 to-pink-500"
  };

  const typeBadgeColors = {
    entrepreneurial: "bg-emerald-100 text-emerald-700 border-emerald-200",
    professional: "bg-blue-100 text-blue-700 border-blue-200",
    creative: "bg-purple-100 text-purple-700 border-purple-200"
  };

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
              Professional Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Two Decades of
              <span className="text-emerald-600"> Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From engineering solutions to entrepreneurial ventures, culminating in a passionate 
              pursuit of strategic design excellence.
            </p>
          </div>

          {/* Experience Filter Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto bg-white border border-gray-200">
              <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                All Experience
              </TabsTrigger>
              <TabsTrigger value="entrepreneurial" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                <Rocket className="w-4 h-4 mr-1" />
                Founding
              </TabsTrigger>
              <TabsTrigger value="professional" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <Building2 className="w-4 h-4 mr-1" />
                Corporate
              </TabsTrigger>
              <TabsTrigger value="creative" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                <Palette className="w-4 h-4 mr-1" />
                Creative
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="space-y-8">
                {filteredExperiences.map((experience, index) => (
                  <Card 
                    key={experience.id} 
                    className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-emerald-200 overflow-hidden"
                  >
                    <CardHeader className={`bg-gradient-to-r ${typeColors[experience.type]} text-white relative`}>
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <div className="transform rotate-12 scale-150 mt-8 mr-8">
                          {typeIcons[experience.type]}
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            {typeIcons[experience.type]}
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold mb-2">
                              {experience.title}
                            </CardTitle>
                            <p className="text-white/90 text-lg font-medium mb-1">
                              {experience.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {experience.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {experience.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Badge className={`${typeBadgeColors[experience.type]} w-fit`}>
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-8">
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {experience.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Career Timeline Summary */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Career Evolution Timeline
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-purple-500 rounded-full"></div>
              
              <div className="space-y-12">
                <div className="flex items-center justify-center">
                  <div className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold">
                    2002 - Energy Solutions Entrepreneur
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold">
                    2005-2017 - Engineering Leadership
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold">
                    2017-2022 - Tech Startup Founder
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                    2020-2025 - Retail Brand Builder
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold">
                    2025+ - AI-Powered Creative Professional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;