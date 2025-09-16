#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests all backend endpoints with comprehensive scenarios
"""

import requests
import json
import os
from datetime import datetime
import sys

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BASE_URL}/api"

print(f"Testing backend API at: {API_BASE}")
print("=" * 60)

# Test results tracking
test_results = {
    "passed": 0,
    "failed": 0,
    "errors": []
}

def log_test(test_name, success, message="", response_data=None):
    """Log test results"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {test_name}")
    if message:
        print(f"   {message}")
    if response_data and not success:
        print(f"   Response: {response_data}")
    
    if success:
        test_results["passed"] += 1
    else:
        test_results["failed"] += 1
        test_results["errors"].append(f"{test_name}: {message}")
    print()

def test_health_check():
    """Test API health check endpoint"""
    print("🔍 Testing API Health Check...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("status") == "healthy":
                log_test("Health Check", True, "API is healthy and responding")
                return True
            else:
                log_test("Health Check", False, f"Unexpected response: {data}")
                return False
        else:
            log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Health Check", False, f"Connection error: {str(e)}")
        return False

def test_contact_form_valid():
    """Test contact form with valid data"""
    print("🔍 Testing Contact Form - Valid Submission...")
    
    valid_contact_data = {
        "full_name": "John Smith",
        "email": "john.smith@example.com",
        "company": "Tech Solutions Inc",
        "budget_range": "$5,000 - $10,000",
        "project_types": ["Corporate Branding", "Video Production"],
        "message": "I'm interested in creating a corporate explainer video for our new product launch. We need something professional and engaging that can showcase our key features."
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=valid_contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if "contact_id" in data and "message" in data:
                log_test("Contact Form - Valid Data", True, f"Contact submitted successfully with ID: {data['contact_id']}")
                return data["contact_id"]
            else:
                log_test("Contact Form - Valid Data", False, f"Missing required fields in response: {data}")
                return None
        else:
            log_test("Contact Form - Valid Data", False, f"HTTP {response.status_code}: {response.text}")
            return None
            
    except requests.exceptions.RequestException as e:
        log_test("Contact Form - Valid Data", False, f"Connection error: {str(e)}")
        return None

def test_contact_form_missing_fields():
    """Test contact form with missing required fields"""
    print("🔍 Testing Contact Form - Missing Required Fields...")
    
    invalid_data = {
        "full_name": "Jane Doe",
        # Missing email and message
        "company": "Design Studio"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # Validation error expected
            log_test("Contact Form - Missing Fields", True, "Correctly rejected submission with missing required fields")
            return True
        elif response.status_code == 200:
            log_test("Contact Form - Missing Fields", False, "Should have rejected invalid data but accepted it")
            return False
        else:
            log_test("Contact Form - Missing Fields", False, f"Unexpected status code {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Contact Form - Missing Fields", False, f"Connection error: {str(e)}")
        return False

def test_contact_form_invalid_email():
    """Test contact form with invalid email format"""
    print("🔍 Testing Contact Form - Invalid Email Format...")
    
    invalid_email_data = {
        "full_name": "Bob Johnson",
        "email": "invalid-email-format",
        "message": "This should fail due to invalid email format."
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=invalid_email_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # Validation error expected
            log_test("Contact Form - Invalid Email", True, "Correctly rejected invalid email format")
            return True
        elif response.status_code == 200:
            log_test("Contact Form - Invalid Email", False, "Should have rejected invalid email but accepted it")
            return False
        else:
            log_test("Contact Form - Invalid Email", False, f"Unexpected status code {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Contact Form - Invalid Email", False, f"Connection error: {str(e)}")
        return False

def test_get_contacts():
    """Test retrieving contact form submissions"""
    print("🔍 Testing Get Contacts Endpoint...")
    
    try:
        response = requests.get(f"{API_BASE}/contacts", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                log_test("Get Contacts", True, f"Successfully retrieved {len(data)} contact submissions")
                return True
            else:
                log_test("Get Contacts", False, f"Expected list but got: {type(data)}")
                return False
        else:
            log_test("Get Contacts", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Get Contacts", False, f"Connection error: {str(e)}")
        return False

def test_get_profile():
    """Test profile data endpoint"""
    print("🔍 Testing Get Profile Endpoint...")
    
    try:
        response = requests.get(f"{API_BASE}/profile", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["name", "title", "email", "bio"]
            
            if all(field in data for field in required_fields):
                log_test("Get Profile", True, f"Profile data retrieved with all required fields")
                return True
            else:
                missing_fields = [field for field in required_fields if field not in data]
                log_test("Get Profile", False, f"Missing required fields: {missing_fields}")
                return False
        else:
            log_test("Get Profile", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Get Profile", False, f"Connection error: {str(e)}")
        return False

def test_get_skills():
    """Test skills data endpoint"""
    print("🔍 Testing Get Skills Endpoint...")
    
    try:
        response = requests.get(f"{API_BASE}/skills", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list) and len(data) > 0:
                # Check if first skill category has required structure
                first_skill = data[0]
                if "category" in first_skill and "skills" in first_skill:
                    log_test("Get Skills", True, f"Skills data retrieved with {len(data)} categories")
                    return True
                else:
                    log_test("Get Skills", False, f"Invalid skill structure: {first_skill}")
                    return False
            else:
                log_test("Get Skills", False, f"Expected non-empty list but got: {data}")
                return False
        else:
            log_test("Get Skills", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Get Skills", False, f"Connection error: {str(e)}")
        return False

def test_get_experience():
    """Test experience data endpoint"""
    print("🔍 Testing Get Experience Endpoint...")
    
    try:
        response = requests.get(f"{API_BASE}/experience", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list) and len(data) > 0:
                # Check if first experience has required structure
                first_exp = data[0]
                required_fields = ["title", "company", "period", "description"]
                if all(field in first_exp for field in required_fields):
                    log_test("Get Experience", True, f"Experience data retrieved with {len(data)} entries")
                    return True
                else:
                    missing_fields = [field for field in required_fields if field not in first_exp]
                    log_test("Get Experience", False, f"Missing required fields: {missing_fields}")
                    return False
            else:
                log_test("Get Experience", False, f"Expected non-empty list but got: {data}")
                return False
        else:
            log_test("Get Experience", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Get Experience", False, f"Connection error: {str(e)}")
        return False

def test_get_products():
    """Test products/services data endpoint"""
    print("🔍 Testing Get Products Endpoint...")
    
    try:
        response = requests.get(f"{API_BASE}/products", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list) and len(data) > 0:
                # Check if first product has required structure
                first_product = data[0]
                required_fields = ["name", "description", "category"]
                if all(field in first_product for field in required_fields):
                    log_test("Get Products", True, f"Products data retrieved with {len(data)} items")
                    return True
                else:
                    missing_fields = [field for field in required_fields if field not in first_product]
                    log_test("Get Products", False, f"Missing required fields: {missing_fields}")
                    return False
            else:
                log_test("Get Products", False, f"Expected non-empty list but got: {data}")
                return False
        else:
            log_test("Get Products", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        log_test("Get Products", False, f"Connection error: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Test Suite")
    print(f"Target API: {API_BASE}")
    print("=" * 60)
    
    # Test 1: Health Check
    health_ok = test_health_check()
    
    if not health_ok:
        print("❌ API Health Check failed - skipping other tests")
        return False
    
    # Test 2: Contact Form Tests
    test_contact_form_valid()
    test_contact_form_missing_fields()
    test_contact_form_invalid_email()
    test_get_contacts()
    
    # Test 3: Portfolio Data Tests
    test_get_profile()
    test_get_skills()
    test_get_experience()
    test_get_products()
    
    # Print summary
    print("=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"✅ Passed: {test_results['passed']}")
    print(f"❌ Failed: {test_results['failed']}")
    print(f"📈 Success Rate: {(test_results['passed'] / (test_results['passed'] + test_results['failed']) * 100):.1f}%")
    
    if test_results['errors']:
        print("\n🔍 FAILED TESTS:")
        for error in test_results['errors']:
            print(f"   • {error}")
    
    return test_results['failed'] == 0

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)