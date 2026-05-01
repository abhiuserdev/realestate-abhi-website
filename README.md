# EstateLuxe - Luxury Real Estate Website

A production-quality, fully responsive real estate website built with vanilla HTML5, CSS3, and JavaScript. Features a Modern Luxury aesthetic with deep navy and champagne gold accents.

## Features

- **13 Complete Pages**: Homepage, Properties, Property Detail, About, Contact, Agents, Services, Blog, Blog Post, Favorites, Compare, Login, Register, Forgot Password
- **Property Search & Filtering**: Real-time filtering by location, type, price, beds, baths
- **Interactive Maps**: Leaflet.js maps on property detail and contact pages
- **Mortgage Calculator**: Dynamic payment calculator on property detail pages
- **Favorites System**: Save properties to localStorage with persistent wishlist
- **Property Comparison**: Compare up to 3 properties side-by-side
- **Image Gallery**: Lightbox with keyboard navigation
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Scroll Animations**: Intersection Observer-based reveal animations
- **Form Validation**: Client-side validation with toast notifications

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** - Vanilla JS with modules
- **Leaflet.js** - Interactive maps
- **Google Fonts** - Playfair Display + Inter
- **Unsplash** - Property and lifestyle images

## Project Structure

```
/
├── index.html              # Homepage with hero, featured listings, stats
├── properties.html         # Property listing with filters and pagination
├── property-detail.html    # Property detail with gallery, map, calculator
├── about.html              # Company story, team, values
├── contact.html            # Contact form, map, FAQ
├── agents.html             # Agent profiles
├── services.html           # Services and process
├── blog.html               # Blog listing
├── blog-post.html          # Individual blog post
├── favorites.html          # Saved properties
├── compare.html            # Property comparison
├── login.html              # Authentication
├── register.html
├── forgot-password.html
├── css/
│   ├── main.css            # Design system, utilities, base styles
│   ├── components.css      # Reusable components
│   ├── pages.css           # Page-specific styles
│   └── responsive.css      # Media queries
├── js/
│   ├── data.js             # Mock data (properties, agents, blog, etc.)
│   └── main.js             # Navigation, favorites, utilities
└── README.md
```

## Getting Started

1. Clone or download the project
2. Open `index.html` in your browser, or serve with any static server:
   ```bash
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080`

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1a1a2e` | Headers, nav, footer |
| Secondary | `#c9a96e` | CTAs, accents, gold |
| Font Heading | Playfair Display | Headlines |
| Font Body | Inter | Body text |
| Container Max | `1280px` | Content width |

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for demonstration purposes.
