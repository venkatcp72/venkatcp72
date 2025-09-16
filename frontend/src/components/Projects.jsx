import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockPortfolioData } from '../mock/portfolioData';
import { ExternalLink, Calendar, User, Filter, Grid, List, Palette, Play, Megaphone, Heart, GraduationCap, Package } from 'lucide-react';

const Projects = () => {
  const { projects } = mockPortfolioData;
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["all", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categoryColors = {
    "Branding": "from-purple-500 to-pink-500",
    "Motion Design": "from-blue-500 to-cyan-500",
    "Digital Marketing": "from-orange-500 to-red-500",
    "Social Impact": "from-emerald-500 to-teal-500",
    "Educational Design": "from-indigo-500 to-purple-500",
    "Product Design": "from-yellow-500 to-orange-500"
  };

  const categoryIcons = {
    "Branding": <Palette className="w-16 h-16 text-white" />,
    "Motion Design": <Play className="w-16 h-16 text-white" />,
    "Digital Marketing": <Megaphone className="w-16 h-16 text-white" />,
    "Social Impact": <Heart className="w-16 h-16 text-white" />,
    "Educational Design": <GraduationCap className="w-16 h-16 text-white" />,
    "Product Design": <Package className="w-16 h-16 text-white" />
  };

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
              Portfolio Showcase
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Creative
              <span className="text-emerald-600"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A curated selection of projects showcasing the intersection of strategic thinking, 
              creative design, and AI-enhanced workflows.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={`capitalize transition-all duration-300 ${
                    activeFilter === category 
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white" 
                      : "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-1" />
                  {category === "all" ? "All Projects" : category}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <div className={`${
            viewMode === "grid" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-8"
          }`}>
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-emerald-200 overflow-hidden ${
                  viewMode === "list" ? "flex flex-col lg:flex-row" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === "list" ? "lg:w-1/3" : "h-48"
                } bg-gradient-to-br ${categoryColors[project.category] || 'from-gray-400 to-gray-600'}`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Category Icon and Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {categoryIcons[project.category] || <Package className="w-16 h-16 text-white" />}
                    </div>
                    <div className="text-white text-center">
                      <div className="text-sm font-semibold tracking-wide uppercase">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-emerald-500/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      size="sm" 
                      className="bg-white text-emerald-600 hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className={viewMode === "list" ? "lg:w-2/3" : ""}>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className="bg-emerald-100 text-emerald-700 border-emerald-200 flex-shrink-0"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {project.client}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's collaborate to create compelling visual solutions that drive real business results. 
                From brand identity to AI-enhanced campaigns, I bring strategic insight to every creative challenge.
              </p>
              <Button 
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;