# Wanderlust 🧭

A full-stack web application for browsing and managing vacation rental listings, built with Node.js, Express, MongoDB, and EJS templating.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Wanderlust is a vacation rental marketplace application that allows users to browse, create, edit, and delete property listings. The platform features a clean, modern interface with property cards displaying images, descriptions, locations, and pricing information.

## ✨ Features

- **Browse Listings**: View all available vacation rental properties
- **Detailed View**: See comprehensive information about each listing
- **Create Listings**: Add new properties with title, description, price, location, and images
- **Edit Listings**: Update existing property information
- **Delete Listings**: Remove properties from the database
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Image Integration**: Unsplash API integration for property images

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS (Embedded JavaScript)** - Templating engine
- **Bootstrap** - CSS framework
- **Font Awesome** - Icon library
- **Google Fonts** (Plus Jakarta Sans)

### Middleware & Tools
- **EJS-Mate** - Layout support for EJS
- **Method-Override** - HTTP method override for RESTful routes

## 📁 Project Structure

```
wanderlust/
├── models/
│   └── listing.js          # Mongoose schema for listings
├── views/
│   ├── includes/
│   │   ├── footer.ejs      # Footer partial
│   │   └── navbar.ejs      # Navigation bar partial
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout template
│   └── listings/
│       ├── index.ejs       # All listings page
│       ├── show.ejs        # Individual listing page
│       ├── new.ejs         # Create listing form
│       └── edit.ejs        # Edit listing form
├── public/
│   └── css/
│       └── style.css       # Custom styles
├── init/
│   ├── data.js            # Sample listing data
│   └── index.js           # Database initialization script
├── app.js                 # Main application file
├── package.json           # Project dependencies
└── README.md             # Project documentation
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
- Fill in the property details:
  - Title
  - Description
  - Image URL
  - Price per night
  - Location
  - Country
- Submit the form to create the listing

### Editing a Listing
- On the listing detail page, click "Edit"
- Update the desired fields
- Save changes

### Deleting a Listing
- On the listing detail page, click "Delete"
- Confirm the deletion

## 🛣️ API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/listings` | Display all listings |
| GET | `/listings/new` | Show form to create new listing |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Show specific listing details |
| GET | `/listings/:id/edit` | Show form to edit listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

## 📊 Database Schema

### Listing Model

```javascript
{
  title: String,
  description: String,
  image: {
    filename: String,
    url: String
  },
  price: Number,
  location: String,
  country: String
}
```

## 🎨 Design Features

- **Custom Font**: Plus Jakarta Sans for modern typography
- **Color Scheme**: 
  - Primary: `#fe424d` (coral red)
  - Background: White with subtle gray accents
  - Text: `#222222`
- **Responsive Grid**: Bootstrap-based card layout
- **Interactive Elements**: 
  - Hover effects on property cards
  - Smooth transitions
  - Font Awesome icons

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] User reviews and ratings system
- [ ] Advanced search and filtering
- [ ] Booking functionality with calendar
- [ ] Payment integration
- [ ] Image upload capability
- [ ] Geolocation and maps integration
- [ ] Favorite/wishlist feature
- [ ] Email notifications
- [ ] Admin dashboard

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

---

**Note**: This is a learning project and is not intended for production use without proper security implementations, error handling, and validation.