import { Destination, TravelPackage, CustomerReview } from '../types/travel';

export const SAMPLE_DESTINATIONS: Destination[] = [
  {
    id: 'paris-france',
    name: 'Paris',
    city: 'Paris',
    country: 'France',
    region: 'Europe',
    price: 1850,
    rating: 4.9,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdef4dc1a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The City of Light captivates travelers with monumental architecture, timeless art galleries, riverside promenades along the Seine, and Michelin-starred culinary craft.',
    highlights: [
      'Sunset views from the Eiffel Tower Champagne bar',
      'Curated private tour of the Musée du Louvre & Orsay',
      'Artisanal pastry and wine tasting in Saint-Germain-des-Prés',
      'Day excursion to Versailles Palace & Royal Gardens'
    ],
    bestTimeToVisit: 'April to October (mild weather and garden blooms) or December for festive holiday lights.',
    popularActivities: [
      'Seine River Evening Dinner Cruise',
      'Louvre Masterpiece Guided Tour',
      'Montmartre Artist Quarter Walking Tour',
      'Boutique Vineyard Day Trip to Champagne'
    ],
    estimatedBudget: {
      backpacker: 95,
      midRange: 240,
      luxury: 650
    },
    recommendedHotels: [
      {
        name: 'Hôtel Plaza Athénée',
        stars: 5,
        pricePerNight: 980,
        amenities: ['Eiffel Tower Views', 'Dior Spa', 'Courtyard Garden', 'Michelin Dining']
      },
      {
        name: 'Le Relais Saint-Germain',
        stars: 4,
        pricePerNight: 380,
        amenities: ['Historic Latin Quarter', 'Bistronomy Dining', 'Air Conditioning', 'Art Deco Decor']
      }
    ],
    tag: 'Romance & Culture',
    featured: true
  },
  {
    id: 'bali-indonesia',
    name: 'Bali',
    city: 'Ubud & Seminyak',
    country: 'Indonesia',
    region: 'Asia',
    price: 1250,
    rating: 4.95,
    reviewsCount: 1890,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An idyllic island sanctuary of emerald stepped rice paddies, ancient stone sea temples, volcanic sunrises, and tranquil coastal surf breaks.',
    highlights: [
      'Sunrise yoga overlooking the lush Campuhan Ridge',
      'Tirta Empul holy spring water cleansing ritual',
      'Speedboat transfer to crystal turquoise bays of Nusa Penida',
      'Sunset seafood banquet on the sands of Jimbaran Bay'
    ],
    bestTimeToVisit: 'May to September (dry season with gentle breezes, low humidity, and calm seas).',
    popularActivities: [
      'Mount Batur Sunrise Volcanic Trek',
      'Ubud Sacred Monkey Forest Sanctuary',
      'Uluwatu Cliff Temple Kecak Fire Dance',
      'Traditional Balinese Cooking Masterclass'
    ],
    estimatedBudget: {
      backpacker: 45,
      midRange: 130,
      luxury: 420
    },
    recommendedHotels: [
      {
        name: 'Mandapa, a Ritz-Carlton Reserve',
        stars: 5,
        pricePerNight: 850,
        amenities: ['Ayung Riverfront', 'Private Pool Villas', 'Organic Wellness Pavilion', 'Butler Service']
      },
      {
        name: 'Alila Seminyak',
        stars: 5,
        pricePerNight: 320,
        amenities: ['Beachfront Infinity Pool', 'Spa Alila', 'Sunset Lounge', 'Modern Architecture']
      }
    ],
    tag: 'Wellness & Nature',
    featured: true
  },
  {
    id: 'switzerland-alps',
    name: 'Switzerland',
    city: 'Lauterbrunnen & Zermatt',
    country: 'Switzerland',
    region: 'Europe',
    price: 2450,
    rating: 4.98,
    reviewsCount: 1120,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dramatic alpine peaks, cascading glacial waterfalls, crystal clear lakes, and pristine mountain trains winding through timeless alpine valleys.',
    highlights: [
      'Glacier views facing the iconic pyramidal crest of the Matterhorn',
      'Scenic journey aboard the panoramic Glacier Express',
      'Hike past 72 roaring waterfalls in the Lauterbrunnen Valley',
      'Alpine cheese fondue and Swiss chocolate workshop'
    ],
    bestTimeToVisit: 'June to September for wildflower hiking; December to March for world-class skiing and winter wonderland.',
    popularActivities: [
      'Gornergrat Mountain Railway Excursion',
      'Jungfraujoch Top of Europe High Alpine Tour',
      'Lake Brienz Turquoise Steamboat Cruise',
      'First Cliff Walk suspension bridge in Grindelwald'
    ],
    estimatedBudget: {
      backpacker: 120,
      midRange: 320,
      luxury: 890
    },
    recommendedHotels: [
      {
        name: 'The Chedi Andermatt',
        stars: 5,
        pricePerNight: 950,
        amenities: ['Alpine Spa & Hydrotherapy', 'Ski Butler', 'Cheese Humidor', 'Fireplace Suites']
      },
      {
        name: 'Hotel Schweizerhof Zermatt',
        stars: 4,
        pricePerNight: 360,
        amenities: ['Matterhorn Views', 'Heated Indoor Pool', 'Fondue Stübli', 'Central Village Location']
      }
    ],
    tag: 'Alpine & Adventure',
    featured: true
  },
  {
    id: 'dubai-uae',
    name: 'Dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    price: 1980,
    rating: 4.88,
    reviewsCount: 1650,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A dazzling futuristic metropolis where architectural wonder meets endless golden desert dunes, luxury yacht marinas, and traditional spice souks.',
    highlights: [
      'Panoramic 360° sunset vistas from Burj Khalifa At The Top SKY',
      'Private 4x4 desert safari with vintage Land Rovers and Bedouin dinner',
      'Sunset catamaran sailing across the iconic Palm Jumeirah archipelago',
      'Abra boat ride across historic Dubai Creek to the Gold Souk'
    ],
    bestTimeToVisit: 'November to April when temperatures are pleasantly warm and outdoor desert activities peak.',
    popularActivities: [
      'Desert Starlight Glamping & Falconry',
      'Museum of the Future Interactive Experience',
      'Dubai Marina Luxury Yacht Cruise',
      'Sky Views Observatory Edge Walk'
    ],
    estimatedBudget: {
      backpacker: 80,
      midRange: 260,
      luxury: 750
    },
    recommendedHotels: [
      {
        name: 'Atlantis The Royal',
        stars: 5,
        pricePerNight: 1100,
        amenities: ['Cloud 22 Sky Pool', 'Celebrity Chef Restaurants', 'Private Beach', 'Aquaventure Access']
      },
      {
        name: 'Bab Al Shams Desert Resort',
        stars: 5,
        pricePerNight: 490,
        amenities: ['Desert Oasis Pool', 'Archery & Falconry', 'Traditional Arabic Spa', 'Dune Dining']
      }
    ],
    tag: 'Luxury & Modern',
    featured: true
  },
  {
    id: 'tokyo-japan',
    name: 'Tokyo',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    price: 2100,
    rating: 4.96,
    reviewsCount: 2150,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An electrifying fusion of hyper-modern neon streets, historic Shinto shrines, meticulous culinary artistry, and tranquil Zen gardens.',
    highlights: [
      'Early morning omakase sushi tasting near Toyosu Market',
      'Walking beneath vibrant red Torii gates at Meiji Jingu & Senso-ji',
      'Experiencing the kinetic Shibuya Crossing from an elevated glass terrace',
      'Shinkansen bullet train day journey to scenic Hakone and Mount Fuji'
    ],
    bestTimeToVisit: 'March to May (cherry blossom season) or October to November (autumn foliage and crisp clear skies).',
    popularActivities: [
      'teamLab Planets Immersive Digital Art',
      'Gion Style Traditional Tea Ceremony in Asakusa',
      'Akihabara Tech & Vintage Gaming Tour',
      'Private Izakaya & Street Food Crawl in Shinjuku'
    ],
    estimatedBudget: {
      backpacker: 75,
      midRange: 220,
      luxury: 680
    },
    recommendedHotels: [
      {
        name: 'Aman Tokyo',
        stars: 5,
        pricePerNight: 1250,
        amenities: ['Panoramic Mount Fuji Views', 'Traditional Onsen Bath', 'Zen Garden Atrium', 'Fine Dining']
      },
      {
        name: 'Hotel Gracery Shinjuku',
        stars: 4,
        pricePerNight: 210,
        amenities: ['Central Shinjuku Location', 'Modern Minimalist Rooms', 'Subway Proximity', 'Godzilla Terrace']
      }
    ],
    tag: 'Modern & Heritage',
    featured: true
  },
  {
    id: 'maldives-atoll',
    name: 'Maldives',
    city: 'North Malé Atoll',
    country: 'Maldives',
    region: 'Oceania',
    price: 3100,
    rating: 4.97,
    reviewsCount: 840,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Crystal turquoise lagoons, powdery white sands, and iconic private overwater villas offering uninterrupted Indian Ocean serenity.',
    highlights: [
      'Sleeping in an overwater villa with direct ladder access to private coral reefs',
      'Snorkeling alongside gentle whale sharks and manta rays in Hanifaru Bay',
      'Private sunset champagne sandbank dinner under constellation-filled skies',
      'Bioluminescent plankton night kayak experience'
    ],
    bestTimeToVisit: 'November to April during dry northeast monsoon season with calm waters and prime underwater visibility.',
    popularActivities: [
      'Reef Shark & Sea Turtle Snorkeling Safari',
      'Deep Sea Game Fishing & Sunset Dolphin Cruise',
      'Submarine Underwater Dining Experience',
      'Private Island Castaway Picnic'
    ],
    estimatedBudget: {
      backpacker: 140,
      midRange: 450,
      luxury: 1200
    },
    recommendedHotels: [
      {
        name: 'Soneva Jani Water Retreats',
        stars: 5,
        pricePerNight: 1800,
        amenities: ['Water Slide into Lagoon', 'Retractable Roof for Stargazing', 'Overwater Cinema', 'Private Pools']
      },
      {
        name: 'Kuramathi Maldives',
        stars: 4,
        pricePerNight: 420,
        amenities: ['Long Sandbank', 'Eco Center Diving', '12 Dining Venues', 'Overwater Spa']
      }
    ],
    tag: 'Tropical Luxury',
    featured: true
  },
  {
    id: 'london-uk',
    name: 'London',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    price: 1950,
    rating: 4.87,
    reviewsCount: 1530,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A global cultural capital steeped in royal heritage, grand Victorian avenues, world-class West End theatre, and rich historic riverbanks.',
    highlights: [
      'Early VIP access to the Tower of London and Crown Jewels',
      'Traditional British Afternoon Tea at The Savoy or Claridges',
      'Strolling Kensington Gardens and the Victoria & Albert Museum',
      'Orchestra seating for acclaimed West End theatrical performances'
    ],
    bestTimeToVisit: 'May to September for warm daylight and outdoor Royal Parks, or December for festive holiday shopfronts.',
    popularActivities: [
      'Thames River Private Cruise to Greenwich',
      'Westminster Abbey & Houses of Parliament Tour',
      'Borough Market Artisan Food Tasting',
      'Cotswolds Countryside Chauffeur Excursion'
    ],
    estimatedBudget: {
      backpacker: 85,
      midRange: 250,
      luxury: 720
    },
    recommendedHotels: [
      {
        name: 'The Savoy London',
        stars: 5,
        pricePerNight: 890,
        amenities: ['River Thames Views', 'Butler Service', 'American Bar', 'Luxury Wellness Pool']
      },
      {
        name: 'The Hoxton, Holborn',
        stars: 4,
        pricePerNight: 290,
        amenities: ['Vibrant Neighborhood', 'Co-working Lounge', 'Artisan Coffee', 'Mid-century Design']
      }
    ],
    tag: 'Heritage & Theater',
    featured: false
  },
  {
    id: 'new-york-usa',
    name: 'New York',
    city: 'New York City',
    country: 'United States',
    region: 'Americas',
    price: 2200,
    rating: 4.89,
    reviewsCount: 2300,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The pulse of global culture, architecture, and nightlife — from soaring Manhattan skyscrapers to leafy Brooklyn brownstones and Broadway stage lights.',
    highlights: [
      'Panoramic sunset skyline from SUMMIT One Vanderbilt glass mirrors',
      'Private morning bicycle tour through Central Park to The Met',
      'Sunset walk across the historic Brooklyn Bridge to DUMBO',
      'VIP front-row seating for legendary Broadway productions'
    ],
    bestTimeToVisit: 'September to November (crisp autumn weather) or April to June for lush Central Park blooms.',
    popularActivities: [
      'Statue of Liberty & Ellis Island Harbor Ferry',
      'High Line & Chelsea Market Culinary Stroll',
      'Helicopter Skyline Flight over Manhattan',
      'MoMA & Guggenheim Modern Art Tour'
    ],
    estimatedBudget: {
      backpacker: 110,
      midRange: 290,
      luxury: 850
    },
    recommendedHotels: [
      {
        name: 'The Plaza Hotel',
        stars: 5,
        pricePerNight: 1150,
        amenities: ['Central Park South Address', 'Guerlain Spa', 'Palm Court Afternoon Tea', 'White Glove Service']
      },
      {
        name: 'The Beekman, A Thompson Hotel',
        stars: 5,
        pricePerNight: 460,
        amenities: ['Nine-Story Victorian Atrium', 'Craft Cocktails by Tom Colicchio', 'Downtown Location']
      }
    ],
    tag: 'Skyline & Arts',
    featured: false
  }
];

export const SAMPLE_PACKAGES: TravelPackage[] = [
  {
    id: 'pkg-alpine-wonders',
    title: 'Alpine Grandeur & Glacier Express',
    destinationId: 'switzerland-alps',
    destinationName: 'Lauterbrunnen & Zermatt',
    country: 'Switzerland',
    durationDays: 7,
    durationNights: 6,
    price: 2199,
    rating: 4.98,
    reviewsCount: 168,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    travelStyle: 'Adventure',
    includedActivities: [
      'Glacier Express First-Class Scenic Rail Pass',
      'Matterhorn Glacier Paradise 3883m Cable Car',
      'Lauterbrunnen 72-Waterfalls Hiking Guide',
      'Private Swiss Fondue & Valais Wine Tasting'
    ],
    hotelInfo: {
      name: 'Grand Hotel Zermatterhof & Victoria-Jungfrau',
      type: '5-Star Alpine Palace',
      ratingStars: 5,
      description: 'Luxury heritage resorts with thermal spa pools, mountain-facing balconies, and Michelin-recognized dining.'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Zurich & Transfer to Interlaken', description: 'Meet your private concierge, board the panoramic GoldenPass express to Interlaken with check-in at luxury lakeside resort.' },
      { day: 2, title: 'Lauterbrunnen Valley & Trümmelbach Falls', description: 'Explore glacial waterfalls carved inside mountain caves followed by an alpine meadow picnic.' },
      { day: 3, title: 'Top of Europe: Jungfraujoch Excursion', description: 'Ascend by high-speed Eiger Express cable car to 3,454 meters with panoramic ice palace tour.' },
      { day: 4, title: 'Glacier Express Scenic Journey to Zermatt', description: 'Travel through 91 tunnels and across 291 bridges while savoring a 3-course regional lunch aboard the train.' },
      { day: 5, title: 'Matterhorn Glacier Paradise & Gornergrat', description: 'Ascend to Europe highest mountain station for 360-degree views of 38 alpine four-thousanders.' },
      { day: 6, title: 'Valais Alpine Village & Fondue Banquet', description: 'Leisurely stroll through traditional solar-tanned timber chalets and evening celebratory dinner.' },
      { day: 7, title: 'Scenic Rail to Zurich & Departure', description: 'Breakfast with Matterhorn sunrise views and private transfer for your onward journey.' }
    ],
    included: [
      '6 nights in 5-star handpicked alpine hotels with breakfast',
      'Unlimited Swiss First-Class Rail & Mountain Cable Car Pass',
      'Certified English-speaking Swiss alpine mountain guide',
      'Private airport transfers with luxury Mercedes van',
      '3 gourmet dinners featuring regional alpine specialties'
    ],
    notIncluded: [
      'International flights',
      'Personal travel insurance',
      'Personal equipment & ski gear rentals'
    ],
    featured: true
  },
  {
    id: 'pkg-bali-retreat',
    title: 'Tropical Ubud & Nusa Sanctuary',
    destinationId: 'bali-indonesia',
    destinationName: 'Ubud & Seminyak',
    country: 'Indonesia',
    durationDays: 8,
    durationNights: 7,
    price: 1450,
    rating: 4.95,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    travelStyle: 'Wellness',
    includedActivities: [
      'Tegallalang Rice Terrace Sunrise Walk',
      'Tirta Empul Holy Water Cleansing Ritual',
      'Nusa Penida Manta Ray Snorkeling Yacht Day',
      'Balinese Organic Farm-to-Table Cooking Class'
    ],
    hotelInfo: {
      name: 'Mandapa, a Ritz-Carlton Reserve & Alila',
      type: '5-Star Rainforest & Ocean Retreat',
      ratingStars: 5,
      description: 'Private infinity plunge pool villas nestled within lush tropical ravines, complete with 24-hour dedicated Patih butler.'
    },
    itinerary: [
      { day: 1, title: 'Denpasar Arrival & Private Transfer to Ubud', description: 'Welcoming frangipani blessing and check-in to your private rainforest pool villa.' },
      { day: 2, title: 'Campuhan Ridge Sunrise & Sacred Monkeys', description: 'Morning ridge hike followed by botanical garden walk and artisan craft tour in Celuk.' },
      { day: 3, title: 'Tirta Empul Cleansing & Waterfalls', description: 'Spiritual blessing at ancient water springs and swimming in secluded Tibumana Waterfall.' },
      { day: 4, title: 'Mount Batur Sunrise Caldera Trek', description: 'Early ascent of Mount Batur with breakfast cooked over volcanic steam, followed by natural hot springs.' },
      { day: 5, title: 'Transfer to Seminyak Coast & Beach Club', description: 'Relocate to beachfront villa with afternoon cocktails and sunset dinner on Jimbaran Bay.' },
      { day: 6, title: 'Private Speedboat to Nusa Penida Island', description: 'Snorkel with majestic manta rays at Manta Point and photograph dramatic Kelingking T-Rex cliff.' },
      { day: 7, title: 'Uluwatu Sunset Temple & Fire Dance', description: 'Perched 70 meters above crashing waves, witness the hypnotic traditional Kecak chorus.' },
      { day: 8, title: 'Spa Ritual & Airport Departure', description: 'Signature 120-minute Balinese herbal massage before departure transfer.' }
    ],
    included: [
      '7 nights luxury private pool villa accommodation',
      'Daily farm-fresh organic breakfast & 2 gourmet dinners',
      'Private air-conditioned chauffeur throughout your stay',
      'High-speed boat transfers & snorkeling equipment',
      'All temple entry fees and community donation permits'
    ],
    notIncluded: [
      'International flights',
      'Entry visa on arrival fees',
      'Alcoholic beverages beyond welcome tastings'
    ],
    featured: true
  },
  {
    id: 'pkg-tokyo-kyoto',
    title: 'Kyoto Heritage & Tokyo Neon Odyssey',
    destinationId: 'tokyo-japan',
    destinationName: 'Tokyo & Kyoto',
    country: 'Japan',
    durationDays: 10,
    durationNights: 9,
    price: 2850,
    rating: 4.97,
    reviewsCount: 245,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    travelStyle: 'Cultural',
    includedActivities: [
      'Shinkansen Bullet Train Green-Car Pass',
      'Exclusive Gion Tea Ceremony with Geiko Apprentice',
      'Early Morning Fushimi Inari 10,000 Gates Stroll',
      'Toyosu Fish Market Private Sushi Omakase'
    ],
    hotelInfo: {
      name: 'Aman Tokyo & Hoshinoya Kyoto',
      type: '5-Star Urban Sanctuary & Historic Ryokan',
      ratingStars: 5,
      description: 'Award-winning architectural masterpieces showcasing traditional Japanese woodwork, natural hot spring onsens, and garden sanctuaries.'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Tokyo Haneda / Narita', description: 'Private VIP airport greeting and seamless transfer to central Tokyo luxury hotel.' },
      { day: 2, title: 'Imperial Tokyo & Asakusa Senso-ji', description: 'Explore ancient temple grounds, Nakamise shopping street, and peaceful Sumida riverwalk.' },
      { day: 3, title: 'Modern Tokyo: Shibuya & Harajuku', description: 'Cross iconic Shibuya intersection, visit tranquil Meiji Jingu shrine forest, and discover cutting-edge design.' },
      { day: 4, title: 'teamLab Digital Art & Michelin Dining', description: 'Walk through water and mirror art installations followed by curated Wagyu dining.' },
      { day: 5, title: 'Bullet Train to Kyoto & Ryokan Check-in', description: 'Speed at 320 km/h past Mount Fuji to Kyoto, followed by traditional kaiseki dinner in tatami suite.' },
      { day: 6, title: 'Arashiyama Bamboo Grove & Tenryu-ji', description: 'Private rickshaw tour through emerald bamboo forest and UNESCO heritage Zen temple garden.' },
      { day: 7, title: 'Fushimi Inari & Gion Evening Walk', description: 'Ascend Mount Inari through crimson Torii tunnels and explore lantern-lit Gion alleyways.' },
      { day: 8, title: 'Nara Deer Park & Todai-ji Giant Buddha', description: 'Day excursion to ancient Nara capital feeding gentle free-roaming sacred deer.' },
      { day: 9, title: 'Kyoto Crafts & Tea Ceremony', description: 'Private matcha whisking masterclass and free afternoon for Nishiki market food browsing.' },
      { day: 10, title: 'Kansai / Tokyo Departure', description: 'Express train transfer with luggage forwarding service directly to departure gate.' }
    ],
    included: [
      '9 nights boutique 5-star hotels & luxury Ryokan with onsen',
      '7-day Japan Rail Pass with reserved Green Car seats',
      'Licensed English-speaking Japanese cultural historian guide',
      'Multi-course Kaiseki dinner & Toyosu sushi tasting',
      'High-speed pocket Wi-Fi router for seamless connectivity'
    ],
    notIncluded: [
      'International flights',
      'Personal shopping and non-specified lunches'
    ],
    featured: true
  },
  {
    id: 'pkg-maldives-lagoon',
    title: 'Maldives Overwater Lagoon Romance',
    destinationId: 'maldives-atoll',
    destinationName: 'North Malé Atoll',
    country: 'Maldives',
    durationDays: 6,
    durationNights: 5,
    price: 3200,
    rating: 4.99,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    travelStyle: 'Honeymoon',
    includedActivities: [
      'Sunset Dolphin Watching Catamaran Cruise',
      'Private Sandbank Dinner with Dedicated Chef',
      'Coral Reef Marine Biologist Snorkel Safari',
      'Bioluminescent Plankton Night Excursion'
    ],
    hotelInfo: {
      name: 'Soneva Jani Water Retreats',
      type: '5-Star Iconic Overwater Villa',
      ratingStars: 5,
      description: 'Private overwater villa with retractable bedroom roof for stargazing, private freshwater plunge pool, and ocean slide.'
    },
    itinerary: [
      { day: 1, title: 'Seaplane Flight & Overwater Check-in', description: 'Scenic 35-minute aerial seaplane flight over turquoise atolls to your private villa.' },
      { day: 2, title: 'House Reef Snorkeling & Floating Breakfast', description: 'Breakfast served directly in your plunge pool followed by guided marine reef tour.' },
      { day: 3, title: 'Sunset Dolphin Cruise & Champagne', description: 'Sail into open ocean surrounded by playful spinner dolphins in their natural playground.' },
      { day: 4, title: 'Private Sandbank Castaway Experience', description: 'Four hours on an uninhabited white sandbank with chilled refreshments and sun canopy.' },
      { day: 5, title: 'Overwater Spa & Candlelit Beach Dinner', description: 'Signature couple coconut scrub and massage followed by private beachfront seafood grill.' },
      { day: 6, title: 'Seaplane Return & Male Departure', description: 'Morning dip in the crystal lagoon and seaplane transfer to international terminal.' }
    ],
    included: [
      '5 nights luxury overwater villa accommodation',
      'Round-trip scenic seaplane transfers from Malé Airport',
      'All-inclusive gourmet dining across 4 resort restaurants',
      'Complimentary non-motorized watersports and snorkel gear',
      'Dedicated Barefoot Guardian butler service'
    ],
    notIncluded: [
      'International flights to Malé',
      'Premium vintage cellar wines'
    ],
    featured: true
  },
  {
    id: 'pkg-paris-haute',
    title: 'Parisian Elegance & Loire Castles',
    destinationId: 'paris-france',
    destinationName: 'Paris & Loire Valley',
    country: 'France',
    durationDays: 7,
    durationNights: 6,
    price: 2490,
    rating: 4.92,
    reviewsCount: 195,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    travelStyle: 'Luxury',
    includedActivities: [
      'After-Hours VIP Louvre Museum Tour',
      'Seine River Gourmet Champagne Dinner Cruise',
      'Château de Chambord & Chenonceau Day Excursion',
      'Montmartre Private Macaron & Pastry Workshop'
    ],
    hotelInfo: {
      name: 'Hôtel Plaza Athénée & Relais de Chambord',
      type: '5-Star Parisian Palace & Chateaux',
      ratingStars: 5,
      description: 'Epitome of French haute couture hospitality located on prestigious Avenue Montaigne.'
    },
    itinerary: [
      { day: 1, title: 'Paris Welcome & Seine Twilight Cruise', description: 'Check-in to Plaza Athénée and evening champagne river cruise under illuminated bridges.' },
      { day: 2, title: 'VIP Louvre & Tuileries Garden', description: 'Skip all queues for Mona Lisa and Winged Victory with our resident art historian.' },
      { day: 3, title: 'Eiffel Tower Gourmet Lunch & Marais District', description: 'Dining at Madame Brasserie followed by boutique fashion galleries in Le Marais.' },
      { day: 4, title: 'Loire Valley Castle Day Trip by Chauffeur', description: 'Visit Renaissance castles of Chambord and Chenonceau with private wine cellar tasting.' },
      { day: 5, title: 'Montmartre Artisan Pastry Masterclass', description: 'Learn the secrets of French macarons from a Master Pâtissier with panoramic Sacré-Cœur views.' },
      { day: 6, title: 'Versailles Hall of Mirrors & Royal Gardens', description: 'Walk through Marie Antoinette private estate and King Sun apartments.' },
      { day: 7, title: 'Parisian Farewell & Departure', description: 'Final cafe au lait at Place des Vosges before luxury private airport transfer.' }
    ],
    included: [
      '6 nights accommodation in 5-star Parisian palace hotels',
      'Daily French artisan buffet breakfast & 2 Michelin dinners',
      'Private Mercedes-Benz chauffeur for all day excursions',
      'All VIP skip-the-line museum admissions & private guides'
    ],
    notIncluded: [
      'International flights',
      'City tourist taxes payable on checkout'
    ],
    featured: false
  },
  {
    id: 'pkg-dubai-desert',
    title: 'Dubai Desert Starlight & Modern Marvels',
    destinationId: 'dubai-uae',
    destinationName: 'Dubai',
    country: 'United Arab Emirates',
    durationDays: 5,
    durationNights: 4,
    price: 1780,
    rating: 4.88,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    travelStyle: 'Luxury',
    includedActivities: [
      'Burj Khalifa Level 148 VIP Lounge Access',
      'Luxury 4x4 Desert Safari & Starlight Falconry',
      'Private Palm Jumeirah Sunset Yacht Cruise',
      'Old Dubai Heritage Souk & Street Food Tour'
    ],
    hotelInfo: {
      name: 'Atlantis The Royal',
      type: '5-Star Ultra-Luxury Resort',
      ratingStars: 5,
      description: 'World-renowned architectural marvel featuring 17 restaurants, infinity sky pool, and private cabanas.'
    },
    itinerary: [
      { day: 1, title: 'Dubai Airport VIP Meet & Palm Arrival', description: 'Fast-track immigration escort and transfer to Atlantis The Royal.' },
      { day: 2, title: 'Modern Architecture & Burj Khalifa Sky', description: 'Explore Dubai Mall, Dubai Fountain show, and private sunset access at Level 148.' },
      { day: 3, title: 'Desert Conservation Safari & Bedouin Dinner', description: 'Dune bashing, falconry demonstration, camel riding, and 6-course barbecue under starry skies.' },
      { day: 4, title: 'Private Marina Yacht Cruise & Souk Walk', description: 'Afternoon private yacht charter along JBR coast, followed by historic Al Fahidi heritage tour.' },
      { day: 5, title: 'Luxury Spa Morning & Departure Transfer', description: 'Hammam treatment at Awaken Spa and private chauffeur to terminal.' }
    ],
    included: [
      '4 nights in luxury sea-view rooms at Atlantis The Royal',
      'Full-day desert safari experience with gourmet dinner',
      'Private 2-hour luxury yacht rental with refreshments',
      'All VIP entrance tickets and chauffeured transfers'
    ],
    notIncluded: [
      'International flights',
      'UAE Tourism Dirham fees'
    ],
    featured: false
  }
];

export const SAMPLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Elena Rostova',
    location: 'Geneva, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'February 2026',
    tripTaken: 'Alpine Grandeur & Glacier Express',
    comment: 'The level of curation by the Aura Voyages team was genuinely unforgettable. From our first-class seats on the Glacier Express to the private fondue evening in Zermatt, every detail was flawlessly timed and executed.'
  },
  {
    id: 'rev-2',
    name: 'Marcus & Sophia Chen',
    location: 'San Francisco, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'January 2026',
    tripTaken: 'Tropical Ubud & Nusa Sanctuary',
    comment: 'Our honeymoon in Bali exceeded all expectations! The private villa in Ubud felt like a secluded paradise, and our dedicated concierge took care of every restaurant reservation and boat excursion with zero stress.'
  },
  {
    id: 'rev-3',
    name: 'David Harrington',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'March 2026',
    tripTaken: 'Kyoto Heritage & Tokyo Neon Odyssey',
    comment: 'As someone who has traveled extensively, having a licensed cultural historian guide us through Kyoto made all the difference. We experienced hidden zen temples and sushi masters we could never have found on our own.'
  },
  {
    id: 'rev-4',
    name: 'Amara Al-Mansoori',
    location: 'Abu Dhabi, UAE',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'December 2025',
    tripTaken: 'Parisian Elegance & Loire Castles',
    comment: 'The private after-hours tour of the Louvre was magical. No crowds, pure tranquility with the masterpieces, and our hotel on Avenue Montaigne was sheer perfection. Will book our next holiday exclusively with them!'
  }
];

export const COMPANY_STATS = [
  { value: '50,000+', label: 'Happy Travelers Hosted' },
  { value: '120+', label: 'Curated Global Destinations' },
  { value: '4.95 / 5', label: 'Verified Guest Satisfaction' },
  { value: '15+ Years', label: 'Bespoke Travel Heritage' }
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Handpicked 4 & 5-Star Accommodations',
    description: 'We personally inspect and partner only with premier heritage palaces, eco-luxury villas, and boutique sanctuaries that offer authentic character.'
  },
  {
    number: '02',
    title: 'Certified Local Naturalists & Historians',
    description: 'Bypass tourist crowds with accredited cultural storytellers, alpine guides, and resident marine biologists dedicated to your group.'
  },
  {
    number: '03',
    title: '24/7 Dedicated Concierge Support',
    description: 'From last-minute table reservations to flight reschedules, your personal travel specialist is just one WhatsApp message or phone call away.'
  },
  {
    number: '04',
    title: 'Transparent Pricing & Best Guarantee',
    description: 'No hidden taxes, surprise resort fees, or middleman markups. Complete visibility and full travel insurance protection on every package.'
  },
  {
    number: '05',
    title: 'Bespoke Flexible Itineraries',
    description: 'Every trip is customized around your personal passions, dietary preferences, mobility needs, and ideal pacing.'
  },
  {
    number: '06',
    title: 'Sustainable & Community-First Travel',
    description: 'A portion of every booking directly funds local reef restoration, cultural heritage preservation, and rural community schools.'
  }
];
