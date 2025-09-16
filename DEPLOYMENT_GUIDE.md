# Portfolio Website Deployment Guide - Free Tier

## 🚀 Complete Free Deployment Strategy

### Overview
- **Frontend**: Vercel (Free tier - unlimited bandwidth, custom domains)
- **Backend**: Railway (Free tier - $5/month credit, sleeps after inactivity)
- **Database**: MongoDB Atlas (Free M0 cluster - 512MB storage)

---

## 📋 Prerequisites

Before starting deployment:
1. Create accounts on:
   - [Vercel](https://vercel.com) 
   - [Railway](https://railway.app)
   - [MongoDB Atlas](https://cloud.mongodb.com)
2. Install Git and have GitHub account
3. Have your code ready in a Git repository

---

## 🗄️ Step 1: Database Setup (MongoDB Atlas)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign up for free account
3. Create new project: "Portfolio-Website"

### 1.2 Create Free Cluster
1. Click "Build a Database"
2. Choose **M0 Sandbox** (FREE tier)
3. Select closest region (e.g., AWS Mumbai ap-south-1)
4. Cluster name: `portfolio-cluster`
5. Click "Create"

### 1.3 Setup Database Access
1. **Database Access** → **Add New Database User**
   - Username: `portfolio-user`
   - Password: Generate secure password
   - Database User Privileges: **Read and write to any database**

2. **Network Access** → **Add IP Address**
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - This allows Railway backend to connect

### 1.4 Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy connection string:
   ```
   mongodb+srv://portfolio-user:<password>@portfolio-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Save this connection string for backend deployment

---

## 🔧 Step 2: Backend Deployment (Railway)

### 2.1 Prepare Backend for Railway
1. Create `railway.json` in `/app/backend/`:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn server:app --host 0.0.0.0 --port $PORT"
  }
}
```

2. Update `/app/backend/.env` for production:
```env
MONGO_URL=mongodb+srv://portfolio-user:YOUR_PASSWORD@portfolio-cluster.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
DB_NAME=portfolio
```

### 2.2 Deploy to Railway
1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Choose `/app/backend` as root directory

### 2.3 Configure Railway Environment
1. In Railway project → **Variables** tab
2. Add environment variables:
   ```
   MONGO_URL=mongodb+srv://portfolio-user:YOUR_PASSWORD@portfolio-cluster.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   DB_NAME=portfolio
   PORT=8000
   ```

### 2.4 Get Backend URL
1. Go to **Settings** → **Domains**
2. Generate domain (e.g., `your-backend-xxxxx.up.railway.app`)
3. Save this URL for frontend configuration

---

## 🎨 Step 3: Frontend Deployment (Vercel)

### 3.1 Prepare Frontend for Vercel
1. Update `/app/frontend/.env`:
```env
REACT_APP_BACKEND_URL=https://your-backend-xxxxx.up.railway.app
```

2. Create `vercel.json` in `/app/frontend/`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install"
}
```

### 3.2 Deploy to Vercel
1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### 3.3 Configure Environment Variables
1. In Vercel project → **Settings** → **Environment Variables**
2. Add:
   ```
   REACT_APP_BACKEND_URL=https://your-backend-xxxxx.up.railway.app
   ```

### 3.4 Deploy
1. Click "Deploy"
2. Vercel will build and deploy automatically
3. Get your live URL (e.g., `your-portfolio.vercel.app`)

---

## 🔗 Step 4: Final Configuration & Testing

### 4.1 Update CORS Settings
Update backend CORS to allow your Vercel domain:
```python
# In /app/backend/server.py
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[
        "https://your-portfolio.vercel.app",
        "https://*.vercel.app",
        "http://localhost:3000"  # For development
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 4.2 Test Deployment
1. Visit your Vercel URL
2. Test contact form submission
3. Check Railway logs for backend activity
4. Verify data storage in MongoDB Atlas

---

## 📊 Free Tier Limitations & Solutions

### Vercel (Frontend)
- ✅ **Unlimited bandwidth**
- ✅ **100GB build time/month**
- ✅ **Custom domains**
- ⚠️ **Function timeout**: 10 seconds

### Railway (Backend)
- ✅ **$5 credit/month** (sufficient for portfolio)
- ⚠️ **Sleeps after 30min inactivity**
- ⚠️ **500MB RAM limit**
- 💡 **Solution**: Use Railway's "Keep Alive" or upgrade if needed

### MongoDB Atlas
- ✅ **512MB storage** (plenty for portfolio)
- ✅ **100 connections**
- ⚠️ **No automated backups**

---

## 🚀 Alternative Free Options

If Railway credits run out, consider:

### Backend Alternatives:
1. **Render** (Free tier with 750 hours/month)
2. **Fly.io** (Free tier with resource limits)
3. **PythonAnywhere** (Limited free tier)

### Database Alternatives:
1. **Railway PostgreSQL** (if willing to migrate)
2. **Supabase** (Free PostgreSQL with 500MB)
3. **PlanetScale** (Free MySQL tier)

---

## 🔧 Troubleshooting

### Common Issues:
1. **CORS Error**: Update backend CORS origins
2. **Backend Sleep**: Railway sleeps - first request might be slow
3. **Build Errors**: Check Node.js version compatibility
4. **Database Connection**: Verify MongoDB Atlas IP whitelist

### Monitoring:
- **Vercel**: Function logs in dashboard
- **Railway**: Real-time logs in project
- **MongoDB**: Performance metrics in Atlas

---

## 📈 Going Production

For production with more traffic:
1. **Upgrade Railway**: $5/month for always-on backend
2. **Custom Domain**: Add your domain to Vercel (free)
3. **SSL Certificate**: Automatic with Vercel
4. **MongoDB Scaling**: Upgrade Atlas cluster as needed

---

## 🎯 Quick Start Commands

1. **Deploy Backend**:
   ```bash
   # Push to GitHub, then connect to Railway
   git add .
   git commit -m "Deploy backend to Railway"
   git push origin main
   ```

2. **Deploy Frontend**:
   ```bash
   # Update .env, then connect to Vercel
   git add .
   git commit -m "Deploy frontend to Vercel"
   git push origin main
   ```

Your portfolio will be live at: `https://your-portfolio.vercel.app` 🎉