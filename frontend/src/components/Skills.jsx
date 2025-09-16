import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { mockPortfolioData } from '../mock/portfolioData';
import { Brain, Palette, Briefcase, Megaphone } from 'lucide-react';

const Skills = () => {
  const { skills } = mockPortfolioData;

  const categoryIcons = {
    "AI-Enhanced Design": <Brain className="w-6 h-6" />,
    "Design Tools & Software": <Palette className="w-6 h-6" />,
    "Business & Leadership": <Briefcase className="w-6 h-6" />,
    "Digital Marketing": <Megaphone className="w-6 h-6" />
  };

  const categoryColors = {
    "AI-Enhanced Design": "from-purple-500 to-pink-500",
    "Design Tools & Software": "from-blue-500 to-cyan-500", 
    "Business & Leadership": "from-emerald-500 to-teal-500",
    "Digital Marketing": "from-orange-500 to-red-500"
  };

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Strategic Design
              <span className="text-emerald-600"> Mastery</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Two decades of business leadership combined with cutting-edge design skills and 
              AI integration for transformative creative solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-emerald-200 overflow-hidden"
              >
                <CardHeader className={`bg-gradient-to-r ${categoryColors[skillCategory.category]} text-white relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="transform rotate-12 scale-150 mt-8 mr-8">
                      {categoryIcons[skillCategory.category]}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      {categoryIcons[skillCategory.category]}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {skillCategory.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-100"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Strengths Summary */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Unique Value Proposition
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI-First Approach</h4>
                <p className="text-gray-600 text-sm">Leveraging cutting-edge AI tools to create innovative design solutions that push creative boundaries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Acumen</h4>
                <p className="text-gray-600 text-sm">Deep understanding of market dynamics and business strategy informs every design decision.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Creativity</h4>
                <p className="text-gray-600 text-sm">Combining artistic vision with data-driven insights to deliver measurable creative impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;