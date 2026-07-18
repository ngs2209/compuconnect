# 🚀 COMPU CONNECT - Modern IT Service Company Website

A professional, animated, and modern website for COMPU CONNECT - Leading IT Sales & Service Provider in Pollachi, Tamil Nadu.

## ✨ Features

### Frontend
- ⚡ Built with **React.js + Vite** for blazing fast performance
- 🎨 **Tailwind CSS** for modern, responsive design
- 🎭 **Framer Motion** for smooth, professional animations
- 🌐 **Three.js** powered hero section with 3D particle effects
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 🎯 SEO optimized with meta tags and schema markup
- ♿ Accessible and user-friendly interface
- 🔄 Smooth scroll navigation
- 📊 Animated counters and statistics
- 🎨 Custom logo with SVG graphics

### Backend
- 🔧 **Node.js + Express.js** REST API
- 📦 **MongoDB** with Mongoose ODM
- 🔐 JWT authentication for admin panel
- ✅ Input validation with express-validator
- 🛡️ CORS and security middleware
- 📧 Contact form with email notifications (optional)
- 🎛️ Admin dashboard for content management

### Key Sections
1. **Hero Section** - Three.js animated background with stats counters
2. **Services Grid** - 20+ IT services with animated cards
3. **Pricing Plans** - AMC plans (Basic, Business, Enterprise)
4. **Why Choose Us** - 6 compelling reasons with icons
5. **About Section** - Company information with visual cards
6. **Contact Form** - Google Maps + Working contact form
7. **Footer** - Comprehensive footer with social links
8. **Floating Buttons** - WhatsApp & Call buttons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.x or higher)
- **MongoDB** (v6.x or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Clone or Extract the Project

```bash
cd compu-connect-project
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your configuration
nano .env
```

**Required Environment Variables:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/compuconnect
JWT_SECRET=your_super_secret_jwt_key_change_this
ADMIN_EMAIL=admin@compuconnect.in
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:3000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

### 4. Start MongoDB

```bash
# Start MongoDB service
sudo systemctl start mongod

# Or if using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on: `http://localhost:3000`

## 🔑 Admin Setup

### Create First Admin Account

1. Make a POST request to create the first admin:

```bash
curl -X POST http://localhost:5000/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@compuconnect.in",
    "password": "securePassword123",
    "name": "Admin"
  }'
```

2. After creating the admin, **disable the setup route** in `authRoutes.js` for security.

### Admin Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@compuconnect.in",
    "password": "securePassword123"
  }'
```

You'll receive a JWT token to use for authenticated requests.

## 📁 Project Structure

```
compu-connect-project/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── logo.svg
│   │   │   └── favicon.svg
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ThreeBackground.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── backend/
    ├── src/
    │   ├── config/
    │   │   └── database.js
    │   ├── models/
    │   │   ├── Contact.js
    │   │   ├── Service.js
    │   │   └── Admin.js
    │   ├── controllers/
    │   │   ├── contactController.js
    │   │   ├── serviceController.js
    │   │   └── authController.js
    │   ├── routes/
    │   │   ├── contactRoutes.js
    │   │   ├── serviceRoutes.js
    │   │   └── authRoutes.js
    │   ├── middleware/
    │   │   └── auth.js
    │   └── server.js
    ├── package.json
    └── .env.example
```

## 🌐 API Endpoints

### Public Endpoints
- `GET /` - API information
- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/services` - Get all services

### Admin Endpoints (Requires JWT Token)
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get admin profile
- `GET /api/contact` - Get all contact submissions
- `PUT /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

## 🚀 Production Deployment

### Frontend (Vercel / Netlify)

1. **Build the frontend:**
```bash
cd frontend
npm run build
```

2. **Deploy to Vercel:**
```bash
npm install -g vercel
vercel --prod
```

Or use Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Backend (Heroku / Railway / DigitalOcean)

1. **Prepare for deployment:**
```bash
cd backend
# Update package.json start script
"start": "node src/server.js"
```

2. **Deploy to Railway:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

3. **Set environment variables** in your hosting platform dashboard.

### Database (MongoDB Atlas)

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in your environment variables

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0A3D62',    // Change primary color
  secondary: '#1B98E0',   // Change secondary color
  accent: '#00D4FF',      // Change accent color
}
```

### Update Logo
Replace files in `frontend/src/assets/`:
- `logo.svg` - Main logo
- `favicon.svg` - Favicon

### Modify Services
Edit the `services` array in `Services.jsx` component.

### Update Contact Info
Search for phone number and email across components and update.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimization

- Images: Use WebP format
- Lazy loading: Implemented for images
- Code splitting: Automatic with Vite
- Minification: Production builds are minified
- Caching: Browser caching headers configured

## 🔒 Security Best Practices

- JWT tokens for authentication
- Password hashing with bcrypt
- Input validation on all forms
- CORS configuration
- Environment variables for secrets
- Rate limiting (implement as needed)

## 📞 Support

For issues or questions:
- **Phone:** 099945 14485
- **Email:** info@compuconnect.in
- **Location:** Kovilpalayam, Pollachi, Tamil Nadu

## 📝 License

This project is proprietary software for COMPU CONNECT.

## 🙏 Acknowledgments

- React.js Team
- Three.js Community
- Framer Motion
- Tailwind CSS
- MongoDB Team

---

**Built with ❤️ for COMPU CONNECT**
**© 2024 COMPU CONNECT. All rights reserved.**
