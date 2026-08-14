# Oakland Barber Studio 💈

A modern, responsive web application for **Oakland Barber**, a private 1-on-1 solo barber studio in Downtown Oakland, California.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**, seamlessly integrated with **Calendly** for appointment reservations.

---

## 📁 Project Structure

```
oakland-barber1/
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── gallery/
│   │   └── barber/
│   │
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx           # Minimal sticky header with mobile drawer
│   │   ├── Button.jsx           # Reusable brass & dark button variants
│   │   ├── SectionTitle.jsx     # Editorial typography section headings
│   │   ├── ServiceCard.jsx      # Pricing, duration, and inclusions card
│   │   ├── TrustCard.jsx        # Private 1-on-1 studio experience highlights
│   │   ├── GalleryGrid.jsx      # Filterable lookbook with lightbox modal
│   │   ├── TestimonialCard.jsx  # Client feedback card component
│   │   ├── BookingCTA.jsx       # Direct Calendly schedule callout banner
│   │   ├── ContactInfo.jsx      # Oakland address, BART, parking & phone info
│   │   └── Footer.jsx           # Brand footer, hours & links
│   │
│   ├── sections/
│   │   ├── Hero.jsx             # Atmospheric hero with solo studio intro
│   │   ├── Services.jsx         # Full service menu & category filters
│   │   ├── About.jsx            # Solo master barber story & philosophy
│   │   ├── Trust.jsx            # Studio amenities & private chair perks
│   │   ├── Gallery.jsx          # Lookbook section
│   │   ├── Testimonials.jsx     # Clean verified rating accreditation
│   │   ├── Booking.jsx          # Calendly integration & studio etiquette
│   │   └── Location.jsx         # Interactive Google Maps & directions
│   │
│   ├── data/
│   │   ├── services.js          # Service definitions, pricing, studio info
│   │   ├── testimonials.js      # Studio review & rating data
│   │   └── gallery.js           # Lookbook categories and imagery
│   │
│   ├── pages/
│   │   └── Home.jsx             # Main assembled homepage
│   │
│   ├── App.jsx                  # Root component with Calendly modal state
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind base & custom studio tokens
│
├── .env                         # Studio environment config (Calendly URL, Phone, etc.)
├── .gitignore
├── index.html                   # HTML entry with Google Fonts & Calendly scripts
├── package.json
├── vite.config.js
├── tailwind.config.js           # Custom studio color palette & typography
├── postcss.config.js
└── README.md
```

---

## ⚡ Key Features

- **Solo Barber Focus**: Tailored specifically for an independent artisan studio experience (no crowded multi-chair chaos).
- **Calendly Integration**: Direct popup widget and modal fallback for live scheduling with zero wait times.
- **Authentic Editorial Aesthetic**: Warm charcoal, deep graphite, and subtle brass palette designed for high craftsmanship feel (no generic AI gradient clutter).
- **Transparent Pricing**: Detailed breakdowns of what is included in each cut, taper, beard ritual, and shave.
- **Filterable Lookbook**: Interactive gallery with category filtering and full-resolution lightbox viewer.
- **Downtown Oakland Location**: Complete transit (19th St BART), parking details, and interactive map embed.
- **Fully Responsive**: Optimized for mobile screens, tablets, and high-DPI desktop displays.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Edit `.env` to set your actual Calendly link, phone number, and studio address:
```env
VITE_APP_NAME="Oakland Barber"
VITE_BARBER_NAME="Marcus Vance"
VITE_CALENDLY_URL="https://calendly.com/your-username"
VITE_PHONE="(510) 842-7890"
VITE_EMAIL="marcus@oaklandbarber.com"
VITE_ADDRESS="1942 Broadway, Suite 204, Oakland, CA 94612"
VITE_HOURS="Tuesday - Saturday: 9:00 AM - 7:00 PM"
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```
