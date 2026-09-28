# Aura Voyages — Modern Travel & Tourism Platform

A modern, responsive, and full-stack **Travel & Tourism Platform** built with React, Vite, Tailwind CSS, Node.js + Express, and MongoDB.

Designed for travelers to explore world destinations, view curated all-inclusive packages, discover boutique hotels and activities, and make seamless reservations.

---

## 📁 Complete Project Folder Structure

```
├── Dockerfile                   # Multi-stage production Dockerfile (Node 20 Alpine)
├── .dockerignore                # Excluded build artifacts for Docker packaging
├── README.md                    # Comprehensive documentation and deployment guide
├── package.json                 # Project dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── index.html                   # HTML entry point with fonts & metadata
├── server.ts                    # Node.js + Express backend server (Vite middleware in dev, static in prod)
│
├── server/                      # Backend Architecture
│   ├── config/
│   │   └── db.ts                # MongoDB connection handler with in-memory resilient fallback
│   ├── models/                  # Mongoose Schemas & Models
│   │   ├── Destination.ts       # Destination schema (city, country, budget, hotels, activities)
│   │   ├── Package.ts           # Travel Package schema (days, itinerary, hotel info, style)
│   │   ├── Booking.ts           # Booking reservation schema
│   │   └── Contact.ts           # Customer inquiry schema
│   ├── routes/                  # Express API Endpoints
│   │   ├── destinationRoutes.ts # GET /api/destinations, GET /api/destinations/:id
│   │   ├── packageRoutes.ts     # GET /api/packages, GET /api/packages/:id
│   │   ├── bookingRoutes.ts     # POST /api/bookings, GET /api/bookings
│   │   ├── contactRoutes.ts     # POST /api/contact, GET /api/contact
│   │   └── reviewRoutes.ts      # GET /api/reviews
│   └── data/
│       └── seedData.ts          # Default initial seeds for MongoDB & in-memory store
│
├── src/                         # Frontend Application (React 19 + TypeScript + Tailwind)
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive header adhering to 3-zone contract with mobile menu
│   │   ├── Footer.tsx           # Site footer with brand, navigation, dispatch newsletter & contact
│   │   ├── Hero.tsx             # Travel hero banner with exact copy & call-to-action buttons
│   │   ├── SearchSection.tsx    # Interactive destination search & budget filter
│   │   ├── DestinationCard.tsx  # Reusable destination card with zero-pill typography & image fallback
│   │   ├── PackageCard.tsx      # Reusable package card with hotel info & included activities
│   │   ├── DestinationModal.tsx # Destination deep-dive modal (gallery, budget guidance, hotels)
│   │   ├── BookingModal.tsx     # Interactive reservation modal with real-time price calculation
│   │   ├── WhyChooseUs.tsx      # 6 core quality pillars with quantitative proof metrics
│   │   └── TestimonialsSection.tsx # Verified customer reviews with ratings and dates
│   ├── pages/
│   │   ├── Home.tsx             # Complete homepage assembling all sections
│   │   ├── DestinationsPage.tsx # Destinations explorer with search, region tabs & sorting
│   │   ├── PackagesPage.tsx     # Packages catalog with travel style filters & itinerary modals
│   │   ├── DestinationDetailPage.tsx # Dedicated destination details view (/destination/:id)
│   │   ├── AboutPage.tsx        # Company heritage, mission, statistics & specialist team
│   │   └── ContactPage.tsx      # Contact form with API submission, info desk & FAQ accordion
│   ├── types/
│   │   └── travel.ts            # TypeScript interfaces for destinations, packages, bookings, contacts
│   ├── data/
│   │   └── travelData.ts        # Comprehensive demo data for Paris, Dubai, Bali, Switzerland, etc.
│   ├── App.tsx                  # React Router configuration & layout wrapper
│   ├── main.tsx                 # Client application entry point
│   └── index.css                # Tailwind CSS v4 configuration & styles
```

---

## 🚀 Getting Started

### 1. Installation

Install all required npm dependencies:

```bash
npm install
```

### 2. Run in Development Mode

Launch the unified Express API backend with Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

### 3. Production Build

Compile the production-ready React client bundle into `/dist`:

```bash
npm run build
```

---

## 🗄️ Database Configuration (MongoDB)

The application supports both live MongoDB instances and an automatic zero-config in-memory fallback.

To connect your own MongoDB database:
1. Create a `.env` file in the root directory (or set environment variables in your deployment environment):
   ```env
   MONGODB_URI=mongodb://localhost:27017/travel_db
   PORT=3000
   ```
2. When `MONGODB_URI` is provided, Mongoose automatically connects and seeds the collections. If MongoDB is not running, the application gracefully operates using the in-memory fallback store without failing.

---

## 🐳 Docker & DevOps Deployment (AWS EC2)

### 1. Build Docker Image

```bash
docker build -t aura-voyages .
```

### 2. Run Docker Container

```bash
docker run -d -p 3000:3000 --name aura-travel-app aura-voyages
```

### 3. Deploy to AWS EC2

1. Launch an **AWS EC2 Ubuntu / Amazon Linux** instance.
2. Ensure Security Group allows inbound traffic on **Port 80 / 443** (and Port 3000 if not using Nginx reverse proxy).
3. Connect via SSH:
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```
4. Install Docker and clone the repository:
   ```bash
   sudo apt update && sudo apt install -y docker.io git
   git clone <YOUR_GITHUB_REPO_URL>
   cd <REPO_FOLDER>
   ```
5. Build and launch:
   ```bash
   sudo docker build -t travel-app .
   sudo docker run -d --restart always -p 80:3000 travel-app
   ```

---

## 🌐 Backend API Endpoints

- `GET /api/destinations` — Retrieve all destinations (supports `?search=`, `?region=`, `?sort=`)
- `GET /api/destinations/:id` — Retrieve destination by ID
- `GET /api/packages` — Retrieve travel packages (supports `?travelStyle=`, `?maxPrice=`)
- `GET /api/packages/:id` — Retrieve package by ID
- `POST /api/bookings` — Create a new guest reservation with validation
- `GET /api/bookings` — List all reservations
- `POST /api/contact` — Submit a traveler inquiry or callback request
- `GET /api/contact` — View traveler messages
- `GET /api/reviews` — Retrieve customer testimonials
- `GET /api/health` — Service health check
