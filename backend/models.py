from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Contact Form Models
class ContactFormCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    budget_range: Optional[str] = None
    project_types: List[str] = Field(default_factory=list)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    company: Optional[str] = None
    budget_range: Optional[str] = None
    project_types: List[str] = Field(default_factory=list)
    message: str
    status: str = Field(default="new")  # new, read, responded
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Profile Models
class Profile(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    title: str
    tagline: str
    bio: str
    location: str
    email: str
    phone: str
    company: str
    availability_status: str
    languages: List[str]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Skills Models
class Skill(BaseModel):
    name: str
    level: int = Field(..., ge=0, le=100)

class SkillCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    skills: List[Skill]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Experience Models
class Experience(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    type: str  # entrepreneurial, professional, creative
    title: str
    company: str
    period: str
    location: str
    description: str
    achievements: List[str]
    tags: List[str]
    order: int = 0
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Products Models
class Product(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    icon: str
    category: str
    is_active: bool = True
    order: int = 0
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Response Models
class ContactResponse(BaseModel):
    message: str
    contact_id: str

class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None