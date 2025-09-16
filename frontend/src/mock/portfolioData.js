export const mockPortfolioData = {
  skills: [
    {
      category: "AI-Enhanced Design",
      skills: [
        { name: "Generative AI Design", level: 95 },
        { name: "AI-Powered Workflows", level: 90 },
        { name: "Strategic Creative Direction", level: 98 },
        { name: "Brand Strategy & Identity", level: 92 }
      ]
    },
    {
      category: "Design Tools & Software",
      skills: [
        { name: "Canva Pro", level: 95 },
        { name: "Adobe Photoshop", level: 88 },
        { name: "CorelDraw", level: 85 },
        { name: "Motion Design", level: 75 }
      ]
    },
    {
      category: "Business & Leadership",
      skills: [
        { name: "Entrepreneurial Leadership", level: 98 },
        { name: "Project Management", level: 95 },
        { name: "Cross-functional Teams", level: 92 },
        { name: "Strategic Planning", level: 90 }
      ]
    },
    {
      category: "Digital Marketing",
      skills: [
        { name: "Social Media Creatives", level: 90 },
        { name: "Brand Campaigns", level: 88 },
        { name: "Content Strategy", level: 85 },
        { name: "Digital Asset Creation", level: 92 }
      ]
    }
  ],

  experiences: [
    {
      id: 1,
      type: "entrepreneurial",
      title: "Founder & CEO",
      company: "Kaveri Angadi",
      period: "Feb 2020 – May 2025",
      location: "Bengaluru, India",
      description: "Built a successful organic retail brand in five years, managing all operations from procurement to customer service. Curated authentic products, built ethical supply chains, led store teams, and drove marketing and community engagement.",
      achievements: [
        "Achieved sustainable profitability through smart pricing and tech-enabled operations",
        "Built strong values-driven culture and community engagement",
        "Managed complete operations from procurement to customer service"
      ],
      tags: ["Leadership", "Operations", "Marketing", "Sustainability"]
    },
    {
      id: 2,
      type: "entrepreneurial", 
      title: "Founder & CEO",
      company: "Parkati Enterprises",
      period: "Nov 2017 – Apr 2022",
      location: "Bengaluru, India",
      description: "Launched and led a tech startup offering structural and fluid simulation solutions. Directed product development, marketed software and training to engineering colleges, built academic partnerships.",
      achievements: [
        "Conducted faculty programs and managed licensing agreements",
        "Built B2B sales and service delivery systems",
        "Established partnerships with engineering institutions"
      ],
      tags: ["Technology", "B2B Sales", "Product Development", "Education"]
    },
    {
      id: 3,
      type: "professional",
      title: "Chief Operating Officer",
      company: "Innovent Engineering Solutions Pvt. Ltd.",
      period: "Sep 2012 – Mar 2017",
      location: "Bengaluru, India", 
      description: "Directed complex operations, led vendor relations and financial planning. Represented management in institutional and industry collaborations and business agreements.",
      achievements: [
        "Oversaw ISO 9001:2008 and SSC-NASSCOM certifications",
        "Forged academic MoUs for simulation training programs",
        "Led institutional collaborations and business agreements"
      ],
      tags: ["Operations", "Certifications", "Partnerships", "Financial Planning"]
    },
    {
      id: 4,
      type: "creative",
      title: "AI-Enhanced Graphic Designer",
      company: "Independent Projects & Collaborations",
      period: "Ongoing",
      location: "Remote / India",
      description: "Pursued graphic design alongside full-time roles, handling projects for personal ventures, NGOs, and clients, now enhanced with AI integration.",
      achievements: [
        "Designed logos, packaging, promotional material for retail and wellness brands",
        "Specializing in AI-powered design workflows and generative creative solutions",
        "Strategic brand development with data-driven design decisions"
      ],
      tags: ["AI Design", "Branding", "Packaging", "Digital Marketing"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Kaveri Angadi Brand Identity",
      category: "Branding",
      description: "Complete brand identity design for organic retail chain including logo, packaging, store design, and marketing materials.",
      image: "/api/placeholder/400/300",
      tags: ["Brand Identity", "Packaging", "Retail Design"],
      year: "2020-2025",
      client: "Kaveri Angadi",
      status: "Completed"
    },
    {
      id: 2,
      title: "Sarvo AI Studio Animated Logo",
      category: "Motion Design",
      description: "Dynamic animated logo design incorporating AI elements and modern aesthetics for tech startup branding.",
      image: "/api/placeholder/400/300",
      tags: ["Animation", "Logo Design", "AI Branding"],
      year: "2025",
      client: "Sarvo AI Studio",
      status: "Completed"
    },
    {
      id: 3,
      title: "Wellness Brand Campaign",
      category: "Digital Marketing",
      description: "Social media campaign design with AI-generated imagery and strategic content planning for wellness startup.",
      image: "/api/placeholder/400/300",
      tags: ["Social Media", "AI Generated", "Campaign Design"],
      year: "2024",
      client: "Confidential",
      status: "Completed"
    },
    {
      id: 4,
      title: "NGO Awareness Materials",
      category: "Social Impact",
      description: "Pro-bono design work for Isha Foundation including promotional materials, digital assets, and campaign visuals.",
      image: "/api/placeholder/400/300", 
      tags: ["Non-profit", "Social Impact", "Print Design"],
      year: "2008-Present",
      client: "Isha Foundation",
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Engineering Training Materials",
      category: "Educational Design",
      description: "Design of training manuals, presentations, and marketing materials for simulation software training programs.",
      image: "/api/placeholder/400/300",
      tags: ["Educational", "Technical", "Training Materials"],
      year: "2017-2022",
      client: "Parkati Enterprises",
      status: "Completed"
    },
    {
      id: 6,
      title: "AI-Powered Product Mockups",
      category: "Product Design",
      description: "Leveraging generative AI for rapid product mockup creation and visualization for multiple client projects.",
      image: "/api/placeholder/400/300",
      tags: ["AI Generated", "Product Mockups", "Visualization"],
      year: "2024-2025",
      client: "Various Clients",
      status: "Ongoing"
    }
  ],

  contact: {
    email: "venkatcp72@gmail.com",
    phone: "+91-9341282551",
    location: "Bengaluru, Karnataka, India",
    company: "Sarvo AI Studio",
    availability: "Available for Projects",
    languages: ["English", "Tamil", "Hindi", "Kannada"],
    socialLinks: {
      linkedin: "#",
      behance: "#", 
      dribbble: "#",
      instagram: "#"
    }
  },

  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "WellnessFirst",
      content: "Venkatesh brought a unique combination of business insight and creative excellence to our brand campaign. His AI-enhanced approach delivered results beyond our expectations.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Dean of Engineering",
      company: "SRM Institute",
      content: "His ability to translate complex technical concepts into engaging visual content is remarkable. The training materials he created significantly improved our program effectiveness.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Anitha Menon",
      role: "Retail Operations Head",
      company: "Green Valley Stores",
      content: "Working with Venkatesh was transformative. His strategic approach to brand design helped us establish a strong market presence in the organic retail space.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ]
};