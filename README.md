# Wanderlust - Vacation Rental Marketplace

A full-stack web application for managing vacation rental listings with comprehensive user authentication, authorization, reviews system, and production-ready features.

**[Live Demo](#)** | **[Documentation](#table-of-contents)** | **[Contributing](#contributing)**

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Security & Authentication](#security--authentication)
- [Validation & Error Handling](#validation--error-handling)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Wanderlust is a modern vacation rental marketplace built with the MERN stack (MongoDB, Express, React/EJS, Node.js). The platform enables users to discover, create, and manage property listings with a focus on user experience, data validation, and security.

**Key Highlights:**
- Secure user authentication with Passport.js
- Role-based access control and authorization
- Real-time form validation (client & server-side)
- Comprehensive review and rating system
- Cloud-based image storage with Cloudinary
- Production-ready error handling
- RESTful API design
- Session management with MongoDB store

---

## Key Features

### 🏠 Listing Management
- **Browse & Search**: Explore all available vacation rentals with intuitive filtering
- **Detailed Views**: Comprehensive property information with high-quality images
- **Create Listings**: Add properties with validated forms and image uploads
- **Edit Listings**: Update property details with validation
- **Delete Listings**: Remove listings with authorization checks
- **Owner-Only Access**: Only property owners can edit/delete their listings

### 👤 User Management
- **User Registration**: Secure account creation with password hashing
- **User Login/Logout**: Session-based authentication with Passport.js
- **Profile Management**: User account management
- **Authorization Middleware**: Role-based access control

### ⭐ Review System
- **Add Reviews**: Leave ratings and comments on listings
- **Delete Reviews**: Authors can remove their reviews
- **Rating Display**: Aggregate ratings displayed on listing pages
- **Author Verification**: Only review authors can delete their reviews

### 🔒 Security Features
- **Password Hashing**: Secure password storage using Passport Local Mongoose
- **Session Management**: Encrypted sessions stored in MongoDB
- **CSRF Protection**: Secure form handling
- **Input Validation**: Server-side validation using Joi
- **Error Handling**: No sensitive information exposed in error messages
- **HTTP Security**: httpOnly cookies and secure session configuration

### 📸 Image Management
- **Cloudinary Integration**: Cloud-based image storage and optimization
- **Automatic Uploads**: Images automatically uploaded during listing creation
- **Image Optimization**: Responsive image handling

---

## Tech Stack

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | Runtime environment | 20.19.6 |
| **Express.js** | Web framework | ^5.2.1 |
| **MongoDB** | NoSQL database | - |
| **Mongoose** | ODM (Object Data Modeling) | ^9.2.1 |
| **Passport.js** | Authentication | ^0.7.0 |
| **Joi** | Data validation | ^18.0.2 |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **EJS** | Templating engine |
| **Bootstrap 5** | CSS framework |
| **Font Awesome** | Icon library |
| **HTML5 & CSS3** | Markup & styling |

### Infrastructure & Services
| Service | Purpose |
|---------|---------|
| **Cloudinary** | Image storage & optimization |
| **MongoDB Atlas** | Cloud database |
| **Node Geocoder** | Location services |

---

## Project Architecture

```
Wanderlust (Full-Stack Application)
│
├── Client Layer (EJS Templates)
│   ├── Authentication Views (login, register)
│   ├── Listing Views (browse, detail, create, edit)
│   ├── Review Views
│   └── Error Pages
│
├── API Layer (Express Routes)
│   ├── /listings (Listing CRUD operations)
│   ├── /reviews (Review management)
│   └── / (User authentication)
│
├── Business Logic Layer (Middleware)
│   ├── Authentication middleware
│   ├── Authorization middleware
│   └── Validation middleware
│
├── Data Layer (MongoDB)
│   ├── Listings collection
│   ├── Users collection
│   └── Reviews collection
│
└── External Services
    ├── Cloudinary (Image storage)
    └── MongoDB Atlas (Database)
```

---

## Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** v20.19.6 or higher ([Download](https://nodejs.org/))
- **npm** v10 or higher (comes with Node.js)
- **Git** for version control
- **MongoDB Atlas Account** ([Create free account](https://www.mongodb.com/cloud/atlas))
- **Cloudinary Account** ([Sign up](https://cloudinary.com/))

### System Requirements
- RAM: Minimum 2GB
- Disk Space: Minimum 500MB
- Internet: Required for API calls and image uploads

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/arponroy/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages from `package.json`:
- express, mongoose, ejs, passport
- Validation (joi), image handling (cloudinary, multer)
- Session management (express-session, connect-mongo)

### 3. Create Environment Variables

Create a `.env` file in the project root:

```env
# Server Configuration
NODE_ENV=development
PORT=8081

# Database
ATLASTDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust

# Session & Security
SECRET=your_super_secret_key_here_use_random_string

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

**How to obtain credentials:**
- **MongoDB Atlas URL**: Create cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- **Cloudinary Credentials**: Sign up at [cloudinary.com](https://cloudinary.com/) and get from dashboard
- **SECRET**: Generate a strong random string (use `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

### 4. Start MongoDB

#### If using MongoDB locally:
```bash
# macOS/Linux
mongod

# Windows (run in command prompt as Administrator)
net start MongoDB
```

#### If using MongoDB Atlas:
No action needed - connection is remote.

### 5. Run the Application

```bash
node app.js
```

Expected output:
```
server is listening to port 8081
connected to DB
```

### 6. Access the Application

Open your browser and navigate to:
```
http://localhost:8081
```

---

## Environment Configuration

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` or `production` |
| `PORT` | Server port | `8081` |
| `ATLASTDB_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `SECRET` | Session encryption key | `a1b2c3d4e5f6...` |
| `CLOUD_NAME` | Cloudinary project name | `my-cloud-project` |
| `CLOUD_API_KEY` | Cloudinary API key | `123456789` |
| `CLOUD_API_SECRET` | Cloudinary API secret | `abcdefghijklmno` |

### Environment-Specific Configuration

**Development:**
```env
NODE_ENV=development
PORT=8081
# ... other vars
```

**Production:**
```env
NODE_ENV=production
PORT=3000
# Use strong SECRET value
# Enable cookie.secure = true
```

---

## Usage Guide

### For Users

#### 1. Create Account
- Click "Sign Up" on homepage
- Enter email and password
- Account created and automatically logged in

#### 2. Browse Listings
- View all listings on `/listings`
- Click any listing for detailed information
- See reviews and ratings

#### 3. Create a Listing (Authenticated Users)
- Navigate to "Add New Listing"
- Fill in required fields:
  - **Title**: Property name
  - **Description**: Detailed description
  - **Location**: City/area
  - **Country**: Country name
  - **Price**: Nightly rate (USD)
  - **Image**: Upload property photo
- Click "Submit"

#### 4. Add Review
- Go to any listing detail page
- Scroll to reviews section
- Rate (1-5 stars) and leave comment
- Your review appears immediately

#### 5. Manage Your Listings
- Visit your listing detail page
- **Edit**: Update property information
- **Delete**: Remove listing permanently

### For Developers

#### Testing the API

```bash
# Create a listing (requires authentication)
curl -X POST http://localhost:8081/listings \
  -H "Content-Type: application/json" \
  -d '{"listing": {"title": "Beach House", "price": 100, ...}}'

# Get all listings
curl http://localhost:8081/listings

# Get specific listing
curl http://localhost:8081/listings/:id

# Add review
curl -X POST http://localhost:8081/listings/:id/reviews \
  -H "Content-Type: application/json" \
  -d '{"review": {"rating": 5, "comment": "Great!"}}'
```

---

## API Documentation

### Base URL
```
http://localhost:8081
```

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Home page | ❌ |
| GET | `/register` | Registration form | ❌ |
| POST | `/register` | Create account | ❌ |
| GET | `/login` | Login form | ❌ |
| POST | `/login` | Authenticate user | ❌ |
| GET | `/logout` | End session | ✅ |

### Listing Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/listings` | List all listings | ❌ |
| POST | `/listings` | Create new listing | ✅ |
| GET | `/listings/new` | Create form | ✅ |
| GET | `/listings/:id` | Get listing details | ❌ |
| PUT | `/listings/:id` | Update listing | ✅ (Owner only) |
| GET | `/listings/:id/edit` | Edit form | ✅ (Owner only) |
| DELETE | `/listings/:id` | Delete listing | ✅ (Owner only) |

### Review Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/listings/:id/reviews` | Add review | ✅ |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review | ✅ (Author only) |

### Response Format

**Success Response (200):**
```json
{
  "success": true,
  "data": { /* listing or review object */ },
  "message": "Operation completed successfully"
}
```

**Error Response:**
```json
{
  "statusCode": 400,
  "message": "Validation error description",
  "error": { /* error details */ }
}
```

---

## Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Listing Collection

```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String (required),
  price: Number (required, min: 0),
  location: String (required),
  country: String (required),
  image: {
    filename: String,
    url: String
  },
  owner: ObjectId (reference to User),
  reviews: [ObjectId] (reference to Review),
  createdAt: Date,
  updatedAt: Date
}
```

### Review Collection

```javascript
{
  _id: ObjectId,
  comment: String (required),
  rating: Number (required, 1-5),
  author: ObjectId (reference to User),
  listing: ObjectId (reference to Listing),
  createdAt: Date,
  updatedAt: Date
}
```

---

## Security & Authentication

### Authentication Flow

```
User Input → Passport Local Strategy → Password Verification → 
Session Creation → Cookie Storage → Middleware Verification
```

### Authorization Levels

1. **Public**: Accessible to all users
   - Browse listings, view reviews, register, login

2. **Authenticated**: Logged-in users only
   - Create listings, add reviews, logout

3. **Owner-Only**: Property/review author only
   - Edit/delete own listings, delete own reviews

### Security Measures

- **Passwords**: Hashed using bcrypt (via Passport Local Mongoose)
- **Sessions**: Encrypted and stored in MongoDB
- **Cookies**: HTTPOnly flag prevents XSS attacks
- **Validation**: Input sanitization via Joi schema
- **CORS**: Configured for trusted origins (production)
- **Error Messages**: Generic messages prevent information leakage

### Middleware Stack

```javascript
app.use(session(sessionOptions));           // Session management
app.use(passport.initialize());             // Authentication
app.use(passport.session());                // Session persistence
app.use(isLoggedIn);                        // Auth verification
app.use(isOwner);                           // Ownership verification
app.use(validateListing);                   // Input validation
```

---

## Validation & Error Handling

### Client-Side Validation

- Real-time HTML5 input validation
- Bootstrap form validation classes
- Visual feedback on input state
- Submission prevention on invalid data

### Server-Side Validation

#### Joi Schemas

**Listing Schema:**
```javascript
listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.object({
      url: Joi.string().allow("", null),
    }),
  }).required(),
})
```

**Review Schema:**
```javascript
reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
})
```

### Error Handling Architecture

#### Custom Error Class
```javascript
class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
```

#### Error Middleware
Catches all errors and renders custom error page with status code and message.

#### HTTP Status Codes
- **200**: Success
- **400**: Bad Request (validation error)
- **401**: Unauthorized (not authenticated)
- **403**: Forbidden (not authorized)
- **404**: Not Found
- **500**: Server Error

---

## Project Structure

```
wanderlust/
├── routes/
│   ├── listing.js              # Listing CRUD routes
│   ├── review.js               # Review management routes
│   └── user.js                 # Authentication routes
├── models/
│   ├── listing.js              # Listing schema & model
│   ├── user.js                 # User schema & model
│   └── review.js               # Review schema & model
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs     # Main layout template
│   ├── includes/
│   │   ├── navbar.ejs          # Navigation component
│   │   └── footer.ejs          # Footer component
│   ├── listings/
│   │   ├── index.ejs           # All listings page
│   │   ├── show.ejs            # Listing detail page
│   │   ├── new.ejs             # Create listing form
│   │   └── edit.ejs            # Edit listing form
│   ├── users/
│   │   ├── register.ejs        # Registration form
│   │   └── login.ejs           # Login form
│   └── error.ejs               # Error page
├── public/
│   └── css/
│       └── style.css           # Custom styles
├── utils/
│   ├── ExpressError.js         # Custom error class
│   └── wrapAsync.js            # Async error wrapper
├── middleware.js               # Custom middleware
├── schema.js                   # Joi validation schemas
├── cloudConfig.js              # Cloudinary configuration
├── app.js                      # Main application file
├── package.json                # Dependencies & scripts
└── README.md                   # Documentation
```

---

## Deployment

### Deploy to Render

1. **Create Account**: Sign up at [render.com](https://render.com)

2. **Connect Repository**: Link your GitHub repository

3. **Set Environment Variables**:
   - Go to Environment → Environment Groups
   - Add all variables from `.env` file

4. **Configure Start Command**:
   ```bash
   node app.js
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Render automatically deploys on push to main branch

### Deploy to Railway

1. **Connect Repository**: Link GitHub account

2. **Add Variables**: Set all environment variables

3. **Deploy**: Push to repository

4. **Access Application**: Railway provides live URL

### Pre-Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong `SECRET` value (32+ characters)
- [ ] Update MongoDB connection to Atlas
- [ ] Configure Cloudinary credentials
- [ ] Set cookie.secure = true in production
- [ ] Test all features locally
- [ ] Run security audit (`npm audit`)

---

## Troubleshooting

### Common Issues

#### 1. Database Connection Error
**Error**: `MongooseError: Cannot connect to MongoDB`

**Solution**:
```bash
# Check MongoDB Atlas connection string
# Ensure IP whitelist includes your IP
# Verify USERNAME:PASSWORD in connection string
# Test connection with: mongosh "your-connection-string"
```

#### 2. Session Store Error
**Error**: `ERROR IN MONGO SESSION STORE`

**Solution**:
```bash
# Ensure ATLASTDB_URL is correct
# Check MongoDB connection status
# Verify connect-mongo package version compatibility
```

#### 3. Cloudinary Upload Failed
**Error**: `Error uploading to Cloudinary`

**Solution**:
```bash
# Verify CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET
# Check file format is png, jpg, or jpeg
# Ensure file size < 5MB
# Verify folder exists: wanderlust_DEV
```

#### 4. Port Already in Use
**Error**: `listen EADDRINUSE :::8081`

**Solution**:
```bash
# Find process on port 8081
lsof -i :8081

# Kill process (macOS/Linux)
kill -9 <PID>

# Or change PORT in .env
```

#### 5. Module Not Found
**Error**: `Cannot find module 'express'`

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository
Click "Fork" on GitHub to create your copy

### 2. Create Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Commit Changes
```bash
git commit -m 'Add amazing feature: description'
```

### 4. Push to Branch
```bash
git push origin feature/amazing-feature
```

### 5. Open Pull Request
Provide clear description of changes and why they're needed

### Code Style Guidelines
- Use consistent indentation (2 spaces)
- Follow Express.js conventions
- Add comments for complex logic
- Write meaningful commit messages
- Test changes before submitting PR

### Reporting Issues
Use GitHub Issues with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Node version, OS, etc.)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## Learning Outcomes & Skills Demonstrated

This project showcases proficiency in:

### Backend Development
- ✅ RESTful API design and implementation
- ✅ Express.js middleware and routing
- ✅ MongoDB and Mongoose ODM
- ✅ Authentication and authorization patterns
- ✅ Error handling and custom error classes
- ✅ Input validation and sanitization

### Security
- ✅ Password hashing and verification
- ✅ Session management and security
- ✅ CSRF protection
- ✅ XSS prevention
- ✅ Authorization middleware

### Frontend Development
- ✅ EJS templating engine
- ✅ Bootstrap responsive design
- ✅ Form validation (client & server)
- ✅ Dynamic page rendering

### DevOps & Deployment
- ✅ Environment configuration management
- ✅ Cloud database integration (MongoDB Atlas)
- ✅ Cloud storage integration (Cloudinary)
- ✅ Deployment to Render/Railway

### Best Practices
- ✅ MVC architecture pattern
- ✅ DRY principle
- ✅ Async/await and promise handling
- ✅ Middleware architecture
- ✅ Error handling
- ✅ Git version control

---

## Roadmap

### Short Term
- [ ] Implement password reset functionality
- [ ] Add email verification on registration
- [ ] Create user profile pages
- [ ] Add search and filtering options
- [ ] Implement pagination for listings

### Medium Term
- [ ] Integrate payment system (Stripe)
- [ ] Add booking calendar functionality
- [ ] Implement geolocation mapping
- [ ] Add favorites/wishlist feature
- [ ] Create admin dashboard

### Long Term
- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] AI-powered recommendations

---

## Support & Contact

For questions or support:
- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/arponroy/wanderlust/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/arponroy/wanderlust/discussions)

---

## Acknowledgments

Special thanks to:
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Passport.js](http://www.passportjs.org/) - Authentication
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Cloudinary](https://cloudinary.com/) - Image management
- [Joi](https://joi.dev/) - Data validation

---

## Version History

**v1.0.0** (Current)
- Initial release
- Core listing management
- User authentication
- Review system
- Image uploads
- Production-ready error handling

---

**Made with ❤️ by Arpon Roy**

*Last Updated: 2026*