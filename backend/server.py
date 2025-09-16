from fastapi import FastAPI, APIRouter, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from datetime import datetime
from typing import List

# Import models
from models import (
    ContactFormCreate, ContactForm, ContactResponse, ApiResponse,
    Profile, SkillCategory, Experience, Product
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running", "status": "healthy"}

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactFormCreate):
    try:
        # Create contact form entry
        contact = ContactForm(**contact_data.dict())
        
        # Insert into database
        result = await db.contacts.insert_one(contact.dict())
        
        if result.inserted_id:
            logger.info(f"New contact form submitted: {contact.email}")
            return ContactResponse(
                message="Thank you for your message! We'll get back to you soon.",
                contact_id=contact.id
            )
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to submit contact form"
            )
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while submitting your message"
        )

@api_router.get("/contacts", response_model=List[ContactForm])
async def get_contacts(limit: int = 50, skip: int = 0):
    try:
        contacts = await db.contacts.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        return [ContactForm(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contacts"
        )

# Profile Endpoints
@api_router.get("/profile", response_model=Profile)
async def get_profile():
    try:
        profile = await db.profile.find_one()
        if not profile:
            # Return default profile data
            default_profile = {
                "name": "Venkateshwaran C P",
                "title": "AI-Powered Graphic Designer & Strategic Creative",
                "tagline": "DESIGNS THAT THINK. VIDEOS THAT FEEL.",
                "bio": "Transforming businesses through strategic design thinking. 20+ years of entrepreneurial leadership now focused on creating compelling visual narratives enhanced with cutting-edge AI technology.",
                "location": "Bengaluru, Karnataka, India",
                "email": "venkatcp72@gmail.com",
                "phone": "+91-9341282551",
                "company": "Sarvo AI Studio",
                "availability_status": "Available for Projects",
                "languages": ["English", "Tamil", "Hindi", "Kannada"]
            }
            return Profile(**default_profile)
        return Profile(**profile)
    except Exception as e:
        logger.error(f"Error fetching profile: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch profile"
        )

# Skills Endpoints
@api_router.get("/skills", response_model=List[SkillCategory])
async def get_skills():
    try:
        skills = await db.skills.find().to_list(100)
        if not skills:
            # Return default skills data
            default_skills = [
                {
                    "category": "AI-Enhanced Design",
                    "skills": [
                        {"name": "Generative AI Design", "level": 95},
                        {"name": "AI-Powered Workflows", "level": 90},
                        {"name": "Strategic Creative Direction", "level": 98},
                        {"name": "Brand Strategy & Identity", "level": 92}
                    ]
                },
                {
                    "category": "Design Tools & Software",
                    "skills": [
                        {"name": "Canva Pro", "level": 95},
                        {"name": "Adobe Photoshop", "level": 88},
                        {"name": "CorelDraw", "level": 85},
                        {"name": "Motion Design", "level": 75}
                    ]
                },
                {
                    "category": "Business & Leadership",
                    "skills": [
                        {"name": "Entrepreneurial Leadership", "level": 98},
                        {"name": "Project Management", "level": 95},
                        {"name": "Cross-functional Teams", "level": 92},
                        {"name": "Strategic Planning", "level": 90}
                    ]
                },
                {
                    "category": "Digital Marketing",
                    "skills": [
                        {"name": "Social Media Creatives", "level": 90},
                        {"name": "Brand Campaigns", "level": 88},
                        {"name": "Content Strategy", "level": 85},
                        {"name": "Digital Asset Creation", "level": 92}
                    ]
                }
            ]
            return [SkillCategory(**skill) for skill in default_skills]
        return [SkillCategory(**skill) for skill in skills]
    except Exception as e:
        logger.error(f"Error fetching skills: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch skills"
        )

# Experience Endpoints
@api_router.get("/experience", response_model=List[Experience])
async def get_experience():
    try:
        experiences = await db.experience.find().sort("order", 1).to_list(100)
        if not experiences:
            # Return default experience data
            default_experiences = [
                {
                    "type": "entrepreneurial",
                    "title": "Founder & CEO",
                    "company": "Kaveri Angadi",
                    "period": "Feb 2020 – May 2025",
                    "location": "Bengaluru, India",
                    "description": "Built a successful organic retail brand in five years, managing all operations from procurement to customer service. Curated authentic products, built ethical supply chains, led store teams, and drove marketing and community engagement.",
                    "achievements": [
                        "Achieved sustainable profitability through smart pricing and tech-enabled operations",
                        "Built strong values-driven culture and community engagement",
                        "Managed complete operations from procurement to customer service"
                    ],
                    "tags": ["Leadership", "Operations", "Marketing", "Sustainability"],
                    "order": 1
                },
                {
                    "type": "entrepreneurial", 
                    "title": "Founder & CEO",
                    "company": "Parkati Enterprises",
                    "period": "Nov 2017 – Apr 2022",
                    "location": "Bengaluru, India",
                    "description": "Launched and led a tech startup offering structural and fluid simulation solutions. Directed product development, marketed software and training to engineering colleges, built academic partnerships.",
                    "achievements": [
                        "Conducted faculty programs and managed licensing agreements",
                        "Built B2B sales and service delivery systems",
                        "Established partnerships with engineering institutions"
                    ],
                    "tags": ["Technology", "B2B Sales", "Product Development", "Education"],
                    "order": 2
                },
                {
                    "type": "professional",
                    "title": "Chief Operating Officer",
                    "company": "Innovent Engineering Solutions Pvt. Ltd.",
                    "period": "Sep 2012 – Mar 2017",
                    "location": "Bengaluru, India", 
                    "description": "Directed complex operations, led vendor relations and financial planning. Represented management in institutional and industry collaborations and business agreements.",
                    "achievements": [
                        "Oversaw ISO 9001:2008 and SSC-NASSCOM certifications",
                        "Forged academic MoUs for simulation training programs",
                        "Led institutional collaborations and business agreements"
                    ],
                    "tags": ["Operations", "Certifications", "Partnerships", "Financial Planning"],
                    "order": 3
                },
                {
                    "type": "creative",
                    "title": "AI-Enhanced Graphic Designer",
                    "company": "Independent Projects & Collaborations",
                    "period": "Ongoing",
                    "location": "Remote / India",
                    "description": "Pursued graphic design alongside full-time roles, handling projects for personal ventures, NGOs, and clients, now enhanced with AI integration.",
                    "achievements": [
                        "Designed logos, packaging, promotional material for retail and wellness brands",
                        "Specializing in AI-powered design workflows and generative creative solutions",
                        "Strategic brand development with data-driven design decisions"
                    ],
                    "tags": ["AI Design", "Branding", "Packaging", "Digital Marketing"],
                    "order": 4
                }
            ]
            return [Experience(**exp) for exp in default_experiences]
        return [Experience(**exp) for exp in experiences]
    except Exception as e:
        logger.error(f"Error fetching experience: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch experience"
        )

# Products Endpoints
@api_router.get("/products", response_model=List[Product])
async def get_products():
    try:
        products = await db.products.find({"is_active": True}).sort("order", 1).to_list(100)
        if not products:
            # Return default products data
            default_products = [
                {
                    "name": "Corporate Explainer Videos",
                    "description": "Professional corporate video content",
                    "icon": "Users",
                    "category": "video",
                    "order": 1
                },
                {
                    "name": "Digital Wedding Video Invites",
                    "description": "Beautiful wedding invitation videos",
                    "icon": "Gift",
                    "category": "video",
                    "order": 2
                },
                {
                    "name": "Product Demo Videos",
                    "description": "Engaging product demonstration videos",
                    "icon": "Package",
                    "category": "video",
                    "order": 3
                },
                {
                    "name": "Instagram Videos",
                    "description": "Social media optimized video content",
                    "icon": "Instagram",
                    "category": "social",
                    "order": 4
                },
                {
                    "name": "YouTube Videos",
                    "description": "Professional YouTube content creation",
                    "icon": "Youtube",
                    "category": "social",
                    "order": 5
                },
                {
                    "name": "And More...",
                    "description": "Custom video solutions",
                    "icon": "Video",
                    "category": "custom",
                    "order": 6
                }
            ]
            return [Product(**product) for product in default_products]
        return [Product(**product) for product in products]
    except Exception as e:
        logger.error(f"Error fetching products: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch products"
        )

# Include the router in the main app
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
