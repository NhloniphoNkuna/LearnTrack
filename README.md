# LearnTrack - Online Learning Platform

## 📚 What is LearnTrack?

LearnTrack is a comprehensive online learning platform (Learning Management System) built for the South African market. It connects instructors who want to share knowledge with students eager to learn new skills.

**Think of it as**: A marketplace where teachers create and sell courses, and students browse, purchase, and learn—all in one platform (similar to Udemy or Coursera).

---

## 🎯 Key Features

### For Students
- 📖 Browse and discover courses
- 💳 Enroll in free or paid courses (prices in Rands)
- 🎥 Watch video lectures
- 📄 Download course materials
- ✅ Take quizzes and complete assignments
- 📊 Track learning progress
- ⭐ Rate and review courses

### For Instructors
- ✏️ Create unlimited courses
- 📹 Upload videos (up to 50MB each)
- 📎 Add documents, links, quizzes, and assignments
- 💰 Set your own prices
- 📈 Track course statistics
- 🚀 Publish when ready

---

## 🛠️ Technologies Used

### Frontend (User Interface)
- **HTML5** - Page structure
- **CSS3 / Tailwind CSS** - Modern, responsive styling
- **JavaScript (ES6+)** - Interactive functionality

### Backend (Server)
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Supabase SDK** - Database integration

### Database & Storage
- **Supabase (PostgreSQL)** - User data, courses, enrollments
- **Supabase Storage** - Video and document files

### Development Tools
- **Git/GitHub** - Version control
- **VS Code** - Code editor
- **npm** - Package management

---

## 💻 System Requirements

### For Users (Students & Instructors)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Stable internet connection (5 Mbps+ recommended)
- Any device (computer, tablet, smartphone)

### For Deployment (Administrators)
- **Node.js** v16.x or higher
- **npm** v7.x or higher
- **Supabase account** (free tier available)
- **Port 5000** available (or custom port)

---

## 🚀 Quick Start

### 1. Prerequisites

```bash
# Check if Node.js is installed
node --version

# Check if npm is installed
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org)

### 2. Installation

```bash
# Clone or download the project
cd LearnTrack

# Install dependencies
npm install
```

### 3. Environment Setup

Create a `.env` file in the project root:

```env
# Server
PORT=5000
CORS_ORIGIN=http://localhost:5000

# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe (for payments)
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key

# Frontend URL
FRONTEND_URL=http://localhost:5000
```

**See `.env.example` for template**

### 4. Database Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Run the `database-migration.sql` file
4. Create storage buckets:
   - `course-videos`
   - `course-documents`
   - `course-thumbnails`

### 5. Start the Application

```bash
# Start the server
npm start

# For development (auto-restart on changes)
npm run dev
```

Visit: `http://localhost:5000/landing.html`

---

## 📖 Documentation

Comprehensive documentation available:

📘 **USER_GUIDE.md** - For Students & Instructors
- Getting started guide
- How to enroll in courses
- How to create courses
- Payment instructions
- Profile management
- FAQ section

📗 **TECHNICAL_DOCUMENTATION.md** - For Developers
- System architecture
- API documentation
- Database schema
- Authentication & security
- Payment integration
- Deployment guide
- Troubleshooting

📙 **Additional Documentation:**
- COURSE_PAYMENT_IMPLEMENTATION.md - Payment system details
- PROJECT_STRUCTURE.txt - File organization
- FINAL_UPDATES.md - Recent changes

---

## 🏗️ Project Structure

```
LearnTrack/
├── public/                    # Frontend files
│   ├── css/                  # Stylesheets
│   │   └── theme.css         # Main styles
│   ├── js/                   # JavaScript files
│   │   ├── icons.js          # Icon library
│   │   ├── landing.js        # Landing page logic
│   │   └── notifications.js  # Toast notifications
│   ├── landing.html          # Homepage
│   ├── browse.html           # Course catalog
│   ├── signUp.html           # Registration
│   ├── signIn.html           # Login
│   ├── studentDashboard.html # Student home
│   ├── instructorDashboard.html # Instructor home
│   ├── courseCreate.html     # Course creation
│   ├── courseView.html       # Course player
│   ├── payment.html          # Checkout page
│   └── ...                   # Other pages
├── routes/                    # Backend API routes
│   ├── auth.js               # Authentication
│   ├── courses.js            # Course management
│   ├── enrollments.js        # Student enrollments
│   └── uploads.js            # File uploads
├── middleware/                # Server middleware
│   └── auth.js               # Auth verification
├── server.js                  # Main server file
├── database-migration.sql     # Database setup
├── package.json              # Dependencies
└── .env                      # Configuration (create this)
```

---

## 👥 User Roles

### Student
- Browse and search courses
- Enroll in courses
- Access course content
- Track progress
- Rate courses

### Instructor
- Create courses
- Upload content
- Manage courses
- View statistics
- Set pricing

---

## 🔒 Security Features

- ✅ Password hashing (bcrypt)
- ✅ Secure session management
- ✅ Row-level security (database)
- ✅ Input validation & sanitization
- ✅ XSS and SQL injection prevention
- ✅ File upload validation
- ✅ HTTPS/SSL support
- ✅ Role-based access control

---

## 🌍 Currency

All prices displayed in **South African Rand (R)**
- Example: R99, R499, R1,299

---

## 📱 Responsive Design

Works perfectly on:
- 💻 Desktop computers
- 📱 Smartphones
- 📟 Tablets
- All screen sizes

---

## 🎨 Design Features

- Modern, professional UI
- Clean SVG icons (no emojis)
- Smooth animations
- Intuitive navigation
- Accessible design
- Mobile-first approach

---

## 🔄 Current Status

✅ **Completed Features**:
- User authentication (sign up, sign in)
- Student dashboard and course enrollment
- Instructor dashboard and course creation
- Video & document upload (50MB videos, 10MB documents)
- Course browsing and filtering
- **Stripe payment integration** (instructor registration & course enrollment)
- Profile management (student & instructor)
- Professional icon system
- Responsive design
- Payment verification system
- Enrollment tracking
- Course statistics

💳 **Payment System**:
- Instructor registration: R 1,500 one-time fee
- Course enrollment: Variable pricing (set by instructor)
- Stripe Checkout integration
- Automatic enrollment after payment
- Test mode with test cards

📋 **Planned Features**:
- Payment webhooks for real-time updates
- Course completion certificates
- Advanced search and filters
- Discussion forums
- Live streaming classes
- Mobile apps (iOS & Android)

---

## 📧 Support & Contact

### Documentation Resources:
- **USER_GUIDE.md** - User instructions and FAQ
- **TECHNICAL_DOCUMENTATION.md** - Developer documentation
- **COURSE_PAYMENT_IMPLEMENTATION.md** - Payment system details

### Getting Help:
1. Check the appropriate documentation
2. Review FAQ sections
3. Contact system administrator
4. Check GitHub issues (if applicable)

---

## 📝 License

This project is proprietary software. All rights reserved.

---

## 🙏 Acknowledgments

Built with modern web technologies and best practices for online education.

**Technologies**:
- Node.js & Express.js
- Supabase (PostgreSQL & Storage)
- Tailwind CSS
- Vanilla JavaScript

---

## 🚀 Getting Help

### For Students
1. Check the user guide in documentation
2. Review common issues section
3. Contact your instructor
4. Reach out to support

### For Instructors
1. Read the instructor guide
2. Check course creation documentation
3. Review upload troubleshooting
4. Contact technical support

### For Administrators
1. Review technical documentation
2. Check database migration guide
3. See deployment instructions
4. Review system requirements

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Platform**: Web-based (Browser)  
**Currency**: South African Rand (R)  
**Payment Gateway**: Stripe  
**Status**: Production Ready ✅
# Learntrack
