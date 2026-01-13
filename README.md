# Wanderlust 🧭

A full-stack web application for browsing and managing vacation rental listings with robust form validation and error handling, built with Node.js, Express, MongoDB, and EJS templating.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Validation & Error Handling](#validation--error-handling)
- [API Routes](#api-routes)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Wanderlust is a vacation rental marketplace application that allows users to browse, create, edit, and delete property listings. The platform features a clean, modern interface with comprehensive form validation, error handling, and an aesthetically pleasing user experience.

## ✨ Features

- **Browse Listings**: View all available vacation rental properties with beautiful cards
- **Detailed View**: See comprehensive information about each listing
- **Create Listings**: Add new properties with validated forms
- **Edit Listings**: Update existing property information with validation
- **Delete Listings**: Remove properties from the database
- **Form Validation**: 
  - Client-side validation using Bootstrap classes
  - Server-side validation using Joi schema
  - Real-time feedback for users
- **Error Handling**: 
  - Custom error pages with aesthetic design
  - Graceful error handling with meaningful messages
  - 404 page for non-existent routes
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Image Integration**: Unsplash API integration for property images

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Joi** - Schema validation library

### Frontend
- **EJS (Embedded JavaScript)** - Templating engine
- **Bootstrap 5** - CSS framework with form validation classes
- **Font Awesome** - Icon library
- **Google Fonts** (Plus Jakarta Sans)

### Middleware & Utilities
- **EJS-Mate** - Layout support for EJS
- **Method-Override** - HTTP method override for RESTful routes
- **Custom Error Handler** - ExpressError class for error management
- **Async Wrapper** - wrapAsync utility for handling async errors

## 📁 Project Structure

```
wanderlust/
├── models/
│   └── listing.js              # Mongoose schema for listings
├── views/
│   ├── includes/
│   │   ├── footer.ejs          # Footer partial
│   │   └── navbar.ejs          # Navigation bar partial
│   ├── layouts/
│   │   └── boilerplate.ejs     # Main layout template
│   ├── listings/
│   │   ├── index.ejs           # All listings page
│   │   ├── show.ejs            # Individual listing page
│   │   ├── new.ejs             # Create listing form
│   │   └── edit.ejs            # Edit listing form
│   └── error.ejs               # Custom error page
├── public/
│   └── css/
│       └── style.css           # Custom styles
├── utils/
│   ├── ExpressError.js         # Custom error class
│   └── wrapAsync.js            # Async error wrapper utility
├── init/
│   ├── data.js                 # Sample listing data
│   └── index.js                # Database initialization script
├── schema.js                   # Joi validation schemas
├── app.js                      # Main application file
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Key dependencies installed:
   - express
   - mongoose
   - ejs
   - ejs-mate
   - method-override
   - joi (for validation)

3. **Start MongoDB**
   ```bash
   # On macOS/Linux
   mongod

   # On Windows
   # Start MongoDB from Services or run:
   "C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe"
   ```

4. **Initialize the database with sample data**
   ```bash
   node init/index.js
   ```

5. **Start the application**
   ```bash
   node app.js
   ```

6. **Access the application**
   
   Open your browser and navigate to: `http://localhost:8080`

## 💡 Usage

### Viewing Listings
- Navigate to `/listings` to see all available properties
- Click on any property card to view detailed information

### Creating a New Listing
- Click "Add New Listing" or navigate to `/listings/new`
- Fill in the property details with validation:
  - **Title** (required)
  - **Description** (required)
  - **Image URL** (required, must be valid URL)
  - **Price** (required, must be positive number)
  - **Location** (required)
  - **Country** (required)
- Client-side validation provides immediate feedback
- Server-side validation ensures data integrity
- Submit the form to create the listing

### Editing a Listing
- On the listing detail page, click "Edit"
- Update the desired fields with the same validation rules
- Save changes

### Deleting a Listing
- On the listing detail page, click "Delete"
- Confirm the deletion

## 🛡️ Validation & Error Handling

### Client-Side Validation
- **Bootstrap Form Validation**: Real-time feedback using Bootstrap's validation classes
- **Required Fields**: Visual indicators for mandatory fields
- **Input Types**: Proper HTML5 input types for different data (text, number, URL)
- **User Feedback**: Immediate visual feedback for invalid inputs

### Server-Side Validation
- **Joi Schema Validation**: Robust server-side validation using Joi
- **Schema Definition** (`schema.js`):
  ```javascript
  listingSchema = Joi.object({
    listing: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().allow("", null),
      price: Joi.number().required().min(0),
      location: Joi.string().required(),
      country: Joi.string().required()
    }).required()
  })
  ```
- **Validation Middleware**: Custom middleware validates all requests before processing

### Error Handling Architecture

#### 1. Custom Error Class (`utils/ExpressError.js`)
```javascript
class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
```

#### 2. Async Error Wrapper (`utils/wrapAsync.js`)
- Automatically catches errors in async route handlers
- Passes errors to Express error handling middleware
- Eliminates repetitive try-catch blocks

#### 3. Error Handling Middleware
- **Custom Error Page**: Aesthetic error display with `error.ejs`
- **404 Handler**: Catches all undefined routes
- **Default Error Handler**: Catches all other errors with proper status codes
- **Meaningful Messages**: User-friendly error descriptions

#### 4. Error Types Handled
- 400: Bad Request (validation errors)
- 404: Page Not Found
- 500: Internal Server Error
- Custom errors with specific status codes and messages

## 🛣️ API Routes

| Method | Route | Validation | Description |
|--------|-------|------------|-------------|
| GET | `/` | - | Home page |
| GET | `/listings` | - | Display all listings |
| GET | `/listings/new` | - | Show form to create new listing |
| POST | `/listings` | ✅ | Create a new listing (validated) |
| GET | `/listings/:id` | - | Show specific listing details |
| GET | `/listings/:id/edit` | - | Show form to edit listing |
| PUT | `/listings/:id` | ✅ | Update a listing (validated) |
| DELETE | `/listings/:id` | - | Delete a listing |
| ALL | `/*` | - | 404 error handler |

## 📊 Database Schema

### Listing Model

```javascript
{
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    filename: {
      type: String,
      default: "listingimage"
    },
    url: {
      type: String,
      default: "default-image-url",
      set: (v) => v === "" ? "default-image-url" : v
    }
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  location: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
}
```

## 🎨 Design Features

- **Custom Font**: Plus Jakarta Sans for modern typography
- **Color Scheme**: 
  - Primary: `#fe424d` (coral red)
  - Background: White with subtle gray accents
  - Text: `#222222`
- **Responsive Grid**: Bootstrap-based card layout
- **Form Validation Styling**: 
  - Green borders for valid inputs
  - Red borders for invalid inputs
  - Helpful validation messages
- **Interactive Elements**: 
  - Hover effects on property cards
  - Smooth transitions
  - Font Awesome icons
- **Error Pages**: Custom-designed error pages with branding

## 🔮 Future Enhancements

- [ ] User authentication and authorization (Passport.js)
- [ ] User reviews and ratings system
- [ ] Advanced search and filtering
- [ ] Image upload capability (Cloudinary integration)
- [ ] Booking functionality with calendar
- [ ] Payment integration (Stripe)
- [ ] Geolocation and maps integration (Mapbox/Google Maps)
- [ ] Favorite/wishlist feature
- [ ] Email notifications (Nodemailer)
- [ ] Admin dashboard
- [ ] Flash messages for user feedback
- [ ] Session management
- [ ] Deploy to cloud (Heroku/Railway/Render)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ by Arpon Roy

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Validation powered by [Joi](https://joi.dev/)

## 📝 Learning Outcomes

This project demonstrates proficiency in:
- ✅ RESTful API design and implementation
- ✅ MVC architecture pattern
- ✅ CRUD operations with MongoDB
- ✅ Server-side and client-side form validation
- ✅ Error handling and custom error pages
- ✅ Middleware creation and usage
- ✅ Async/await and promise handling
- ✅ Template engines and dynamic rendering
- ✅ Bootstrap framework and responsive design

---

**Note**: This is a learning project showcasing full-stack development skills including robust validation and error handling. For production use, additional security measures, authentication, and testing should be implemented.