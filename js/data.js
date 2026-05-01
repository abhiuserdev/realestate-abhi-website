/* ========================================
   MOCK DATA
   Realistic data for the real estate website
   ======================================== */

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse with Panoramic City Views",
    address: "432 Park Avenue, Unit 85B",
    city: "New York",
    state: "NY",
    zip: "10022",
    price: 5200000,
    type: "Penthouse",
    status: "For Sale",
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    lotSize: null,
    yearBuilt: 2015,
    garage: 2,
    description: "Experience the pinnacle of luxury living in this stunning penthouse perched high above Manhattan. Floor-to-ceiling windows frame breathtaking 360-degree views of Central Park and the city skyline. The open-concept living space features imported Italian marble floors, custom millwork, and a chef's kitchen with Sub-Zero and Wolf appliances. The primary suite includes a spa-like bathroom with heated floors and a walk-in closet. Building amenities include a private fitness center, rooftop pool, concierge service, and valet parking.",
    features: ["Central Park Views", "Private Elevator", "Smart Home System", "Wine Cellar", "Home Theater", "Rooftop Pool Access", "Concierge", "Valet Parking", "Fitness Center", "Private Terrace"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 1,
    coordinates: { lat: 40.7614, lng: -73.9776 },
    dateListed: "2024-12-15",
    featured: true
  },
  {
    id: 2,
    title: "Modern Waterfront Villa in Miami Beach",
    address: "1234 Ocean Drive",
    city: "Miami",
    state: "FL",
    zip: "33139",
    price: 3850000,
    type: "Villa",
    status: "For Sale",
    beds: 5,
    baths: 5,
    sqft: 5600,
    lotSize: "0.45 acres",
    yearBuilt: 2019,
    garage: 3,
    description: "This architectural masterpiece offers direct ocean access and unobstructed water views from every room. The sleek, contemporary design features walls of glass, soaring ceilings, and premium finishes throughout. The gourmet kitchen boasts custom cabinetry and professional-grade appliances. Outdoor living is equally impressive with an infinity pool, summer kitchen, and private dock. The master retreat features a sitting area, dual bathrooms, and a balcony overlooking the Atlantic.",
    features: ["Ocean Front", "Private Dock", "Infinity Pool", "Summer Kitchen", "Home Office", "Wine Room", "Smart Home", "Impact Windows", "Generator", "Landscaped Gardens"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80"
    ],
    agentId: 2,
    coordinates: { lat: 25.7907, lng: -80.1300 },
    dateListed: "2025-01-10",
    featured: true
  },
  {
    id: 3,
    title: "Elegant Brownstone in Historic Brooklyn",
    address: "156 Clinton Street",
    city: "New York",
    state: "NY",
    zip: "11201",
    price: 2450000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    lotSize: "0.08 acres",
    yearBuilt: 1890,
    garage: 1,
    description: "Meticulously restored Brooklyn brownstone combining historic charm with modern luxury. Original details include crown moldings, pocket doors, and marble fireplaces. The parlor floor features a grand living room with 12-foot ceilings and a formal dining room. The renovated kitchen opens to a landscaped garden perfect for entertaining. Upper floors contain four bedrooms including a luxurious master suite. The finished basement offers additional living space.",
    features: ["Historic Architecture", "Original Details", "Garden", "Finished Basement", "Fireplace", "Hardwood Floors", "Renovated Kitchen", "Walk-in Closets", "High Ceilings", "Near Parks"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 1,
    coordinates: { lat: 40.6892, lng: -73.9942 },
    dateListed: "2025-02-01",
    featured: true
  },
  {
    id: 4,
    title: "Contemporary Hillside Estate in Los Angeles",
    address: "8765 Mulholland Drive",
    city: "Los Angeles",
    state: "CA",
    zip: "90046",
    price: 4500000,
    type: "House",
    status: "For Sale",
    beds: 6,
    baths: 6,
    sqft: 6800,
    lotSize: "1.2 acres",
    yearBuilt: 2018,
    garage: 4,
    description: "A stunning contemporary estate nestled in the Hollywood Hills with sweeping views from downtown to the ocean. This architectural gem features soaring ceilings, walls of glass, and seamless indoor-outdoor living. The gourmet kitchen is equipped with professional appliances and a massive island. The primary suite is a true retreat with a spa bathroom, fireplace, and private terrace. Outdoor amenities include a heated pool, spa, outdoor kitchen, and fire pit.",
    features: ["City & Ocean Views", "Heated Pool", "Outdoor Kitchen", "Fire Pit", "Home Theater", "Wine Cellar", "Gym", "Guest House", "Gated Entry", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 3,
    coordinates: { lat: 34.1203, lng: -118.3605 },
    dateListed: "2025-01-20",
    featured: true
  },
  {
    id: 5,
    title: "Sleek Downtown Condo with Skyline Views",
    address: "225 North Michigan Ave, Unit 4501",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    price: 1200000,
    type: "Condo",
    status: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1850,
    lotSize: null,
    yearBuilt: 2010,
    garage: 1,
    description: "Live above it all in this sophisticated downtown condo with panoramic views of Lake Michigan and the Chicago skyline. The open floor plan is perfect for entertaining with a designer kitchen featuring quartz countertops and premium appliances. The master suite includes a walk-in closet and spa-inspired bathroom. Building amenities include a rooftop deck, 24-hour door staff, fitness center, and indoor parking. Steps from Millennium Park, shopping, and world-class dining.",
    features: ["Lake Views", "Rooftop Deck", "24hr Doorman", "Fitness Center", "Indoor Parking", "Walk-in Closet", "Quartz Countertops", "In-unit Laundry", "Pet Friendly", "Near Transit"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
    ],
    agentId: 4,
    coordinates: { lat: 41.8853, lng: -87.6244 },
    dateListed: "2025-02-15",
    featured: false
  },
  {
    id: 6,
    title: "Stylish Loft in Historic Warehouse District",
    address: "456 W 7th Street",
    city: "Austin",
    state: "TX",
    zip: "78701",
    price: 875000,
    type: "Apartment",
    status: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1650,
    lotSize: null,
    yearBuilt: 1925,
    garage: 1,
    description: "Authentic warehouse conversion loft in the heart of Austin's vibrant Warehouse District. Exposed brick walls, soaring timber ceilings, and original hardwood floors create undeniable character. The open living space is anchored by a chef's kitchen with professional appliances. The master suite features a luxurious bathroom with soaking tub. Located steps from Sixth Street, Rainey Street, and Lady Bird Lake.",
    features: ["Exposed Brick", "Timber Ceilings", "Hardwood Floors", "Chef's Kitchen", "Soaking Tub", "Rooftop Access", "Bike Storage", "Pet Friendly", "Near Entertainment", "Walk Score 95"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 5,
    coordinates: { lat: 30.2672, lng: -97.7431 },
    dateListed: "2025-03-01",
    featured: false
  },
  {
    id: 7,
    title: "Pacific Northwest Craftsman in Capitol Hill",
    address: "1523 15th Avenue E",
    city: "Seattle",
    state: "WA",
    zip: "98112",
    price: 1650000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3,
    sqft: 2800,
    lotSize: "0.15 acres",
    yearBuilt: 1912,
    garage: 1,
    description: "Beautifully restored Craftsman home in coveted Capitol Hill. Original leaded glass windows, built-in cabinetry, and a grand fireplace showcase the home's heritage. The renovated kitchen blends modern functionality with period charm. French doors open to a lush garden with mature landscaping. Upper floor contains three bedrooms and a beautifully appointed bathroom. The finished attic provides a fourth bedroom or home office.",
    features: ["Leaded Glass", "Built-in Cabinetry", "Fireplace", "Renovated Kitchen", "French Doors", "Mature Garden", "Finished Attic", "Hardwood Floors", "Near Parks", "Walkable Neighborhood"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 6,
    coordinates: { lat: 47.6205, lng: -122.3123 },
    dateListed: "2025-01-05",
    featured: false
  },
  {
    id: 8,
    title: "Ultra-Modern Apartment in Brickell",
    address: "1000 Brickell Plaza, Unit 3205",
    city: "Miami",
    state: "FL",
    zip: "33131",
    price: 950000,
    type: "Apartment",
    status: "For Rent",
    beds: 2,
    baths: 2,
    sqft: 1400,
    lotSize: null,
    yearBuilt: 2022,
    garage: 1,
    description: "Experience luxury living in Miami's financial district. This sleek apartment features floor-to-ceiling windows with bay and city views, Italian porcelain floors, and a gourmet kitchen with European cabinetry. The building offers world-class amenities including a rooftop infinity pool, spa, fitness center, and business lounge. Walk to Brickell City Centre, Mary Brickell Village, and the Metromover.",
    features: ["Bay Views", "Infinity Pool", "Spa", "Business Lounge", "European Kitchen", "Porcelain Floors", "Valet Parking", "Concierge", "Pet Spa", "Co-working Space"],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ],
    agentId: 2,
    coordinates: { lat: 25.7650, lng: -80.1936 },
    dateListed: "2025-02-20",
    featured: false
  },
  {
    id: 9,
    title: "Tudor Revival in Prestigious Scarsdale",
    address: "78 Heathcote Road",
    city: "Scarsdale",
    state: "NY",
    zip: "10583",
    price: 3200000,
    type: "House",
    status: "For Sale",
    beds: 5,
    baths: 4.5,
    sqft: 4800,
    lotSize: "0.75 acres",
    yearBuilt: 1928,
    garage: 2,
    description: "Magnificent Tudor Revival on a premier street in Scarsdale. The grand foyer with sweeping staircase sets the tone for this exceptional home. Formal rooms with period details flow to a stunning eat-in kitchen and great room. The primary suite is a sanctuary with sitting room, fireplace, and spa bath. The finished lower level includes a wine cellar, recreation room, and gym. Professionally landscaped grounds with mature trees and a slate patio.",
    features: ["Tudor Architecture", "Grand Foyer", "Wine Cellar", "Home Gym", "Fireplace", "Slate Patio", "Mature Trees", "Eat-in Kitchen", "Sitting Room", "Near Schools"],
    images: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    agentId: 1,
    coordinates: { lat: 40.9893, lng: -73.7830 },
    dateListed: "2025-01-15",
    featured: false
  },
  {
    id: 10,
    title: "Mid-Century Modern in the Hollywood Hills",
    address: "2345 Outpost Drive",
    city: "Los Angeles",
    state: "CA",
    zip: "90068",
    price: 2100000,
    type: "House",
    status: "For Sale",
    beds: 3,
    baths: 3,
    sqft: 2400,
    lotSize: "0.3 acres",
    yearBuilt: 1962,
    garage: 2,
    description: "Authentic mid-century modern designed by a noted architect. Post-and-beam construction, walls of glass, and original terrazzo floors define this iconic home. The open living room with fireplace flows to a dining area and renovated kitchen. Each bedroom opens to the outdoors. The terraced backyard features a pool, mature landscaping, and canyon views. A true piece of Los Angeles architectural history.",
    features: ["Post-and-Beam", "Terrazzo Floors", "Walls of Glass", "Renovated Kitchen", "Pool", "Canyon Views", "Original Details", "Terraced Garden", "Fireplace", "Architectural Significance"],
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 3,
    coordinates: { lat: 34.1203, lng: -118.3500 },
    dateListed: "2025-02-28",
    featured: false
  },
  {
    id: 11,
    title: "Charming Bungalow in Wicker Park",
    address: "1625 N Damen Avenue",
    city: "Chicago",
    state: "IL",
    zip: "60647",
    price: 750000,
    type: "House",
    status: "For Sale",
    beds: 3,
    baths: 2,
    sqft: 1600,
    lotSize: "0.1 acres",
    yearBuilt: 1910,
    garage: 1,
    description: "Delightful bungalow in the heart of trendy Wicker Park. This well-maintained home features original hardwood floors, arched doorways, and built-in bookcases. The updated kitchen includes stainless steel appliances and granite countertops. The unfinished basement offers expansion potential. The backyard deck and garden are perfect for summer entertaining. Steps to Division Street shops, restaurants, and the Blue Line.",
    features: ["Hardwood Floors", "Built-in Bookcases", "Updated Kitchen", "Granite Counters", "Deck", "Garden", "Unfinished Basement", "Near Transit", "Walkable", "Historic Charm"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 4,
    coordinates: { lat: 41.9100, lng: -87.6775 },
    dateListed: "2025-03-05",
    featured: false
  },
  {
    id: 12,
    title: "Lakefront Condo in Gold Coast",
    address: "1550 N Lake Shore Drive, Unit 2801",
    city: "Chicago",
    state: "IL",
    zip: "60610",
    price: 1850000,
    type: "Condo",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    lotSize: null,
    yearBuilt: 1970,
    garage: 1,
    description: "Rare high-floor corner unit with unobstructed lake and park views in prestigious Gold Coast. The spacious living room with wraparound windows is perfect for entertaining. The renovated kitchen features custom cabinetry and high-end appliances. Three bedrooms include a master suite with lake views and spa bathroom. Building amenities include a lakefront pool, fitness center, and 24-hour door staff.",
    features: ["Lake Views", "Corner Unit", "Wraparound Windows", "Custom Kitchen", "Spa Bathroom", "Lakefront Pool", "24hr Doorman", "Fitness Center", "Near Beach", "Gold Coast"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
    ],
    agentId: 4,
    coordinates: { lat: 41.9105, lng: -87.6278 },
    dateListed: "2025-01-25",
    featured: false
  },
  {
    id: 13,
    title: "Spanish Colonial in Coconut Grove",
    address: "3450 Poinciana Avenue",
    city: "Miami",
    state: "FL",
    zip: "33133",
    price: 2800000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3.5,
    sqft: 3600,
    lotSize: "0.4 acres",
    yearBuilt: 1925,
    garage: 2,
    description: "Stunning Spanish Colonial estate on a lush lot in Coconut Grove. Original architectural details include wrought iron, terra cotta, and beamed ceilings. The grand living room with fireplace opens to a loggia overlooking the pool. The gourmet kitchen features professional appliances and a butler's pantry. The master suite occupies the entire second floor with a private terrace. Tropical gardens surround the property.",
    features: ["Spanish Colonial", "Wrought Iron", "Terra Cotta", "Beamed Ceilings", "Loggia", "Pool", "Butler's Pantry", "Private Terrace", "Tropical Garden", "Historic District"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ],
    agentId: 2,
    coordinates: { lat: 25.7250, lng: -80.2450 },
    dateListed: "2025-02-10",
    featured: false
  },
  {
    id: 14,
    title: "Modern Farmhouse in East Austin",
    address: "2100 E Cesar Chavez Street",
    city: "Austin",
    state: "TX",
    zip: "78702",
    price: 1100000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3,
    sqft: 2600,
    lotSize: "0.2 acres",
    yearBuilt: 2020,
    garage: 2,
    description: "Striking modern farmhouse in vibrant East Austin. The open floor plan features shiplap walls, soaring ceilings, and concrete floors. The chef's kitchen includes a massive island, quartz countertops, and a walk-in pantry. The primary suite features a freestanding tub and rain shower. Outdoor living includes a covered porch, fire pit, and raised garden beds. Minutes to downtown, breweries, and food trucks.",
    features: ["Modern Farmhouse", "Shiplap Walls", "Concrete Floors", "Chef's Kitchen", "Walk-in Pantry", "Freestanding Tub", "Covered Porch", "Fire Pit", "Raised Garden", "Near Downtown"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    agentId: 5,
    coordinates: { lat: 30.2600, lng: -97.7200 },
    dateListed: "2025-03-10",
    featured: false
  },
  {
    id: 15,
    title: "Floating Home on Lake Union",
    address: "2400 N Northlake Way, Slip 18",
    city: "Seattle",
    state: "WA",
    zip: "98103",
    price: 1350000,
    type: "House",
    status: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1500,
    lotSize: null,
    yearBuilt: 2015,
    garage: 0,
    description: "Unique floating home on Lake Union with stunning water and city views. This contemporary home features walls of glass, a rooftop deck, and a private dock. The open living space includes a gourmet kitchen with premium appliances. Two bedrooms include a master with water views and spa bathroom. Enjoy Seattle's iconic houseboat lifestyle with kayaks included. Minutes to Gas Works Park and Fremont.",
    features: ["Floating Home", "Lake Views", "Rooftop Deck", "Private Dock", "Walls of Glass", "Kayaks Included", "Near Parks", "Waterfront Living", "City Views", "Unique Property"],
    images: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    agentId: 6,
    coordinates: { lat: 47.6500, lng: -122.3300 },
    dateListed: "2025-01-30",
    featured: false
  }
];

const agents = [
  {
    id: 1,
    name: "Alexandra Sterling",
    title: "Senior Luxury Specialist",
    phone: "(212) 555-0147",
    email: "alexandra@estateluxe.com",
    bio: "With over 15 years of experience in Manhattan's luxury market, Alexandra has closed over $500 million in real estate transactions. Her expertise in historic properties and penthouses makes her the go-to agent for discerning buyers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    properties: [1, 3, 9]
  },
  {
    id: 2,
    name: "Marcus Rivera",
    title: "Waterfront Property Expert",
    phone: "(305) 555-0283",
    email: "marcus@estateluxe.com",
    bio: "Marcus specializes in Miami's most coveted waterfront properties. His deep knowledge of coastal architecture and marina access has made him one of South Florida's top-producing agents for luxury homes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    properties: [2, 8, 13]
  },
  {
    id: 3,
    name: "Olivia Chen",
    title: "Celebrity & Estate Agent",
    phone: "(310) 555-0391",
    email: "olivia@estateluxe.com",
    bio: "Olivia represents some of Los Angeles' most iconic estates and architectural properties. Her background in interior design gives clients unique insights into property potential and value-add opportunities.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    properties: [4, 10]
  },
  {
    id: 4,
    name: "James Whitfield",
    title: "Urban Market Specialist",
    phone: "(312) 555-0456",
    email: "james@estateluxe.com",
    bio: "James has an unmatched understanding of Chicago's diverse neighborhoods. From historic greystones to modern luxury towers, he helps clients find their perfect urban home with expert market analysis.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    properties: [5, 11, 12]
  },
  {
    id: 5,
    name: "Sofia Martinez",
    title: "Emerging Markets Advisor",
    phone: "(512) 555-0172",
    email: "sofia@estateluxe.com",
    bio: "Sofia is passionate about Austin's rapidly evolving real estate landscape. She specializes in helping clients discover up-and-coming neighborhoods and investment opportunities in one of America's fastest-growing cities.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    properties: [6, 14]
  },
  {
    id: 6,
    name: "David Nakamura",
    title: "Pacific Northwest Specialist",
    phone: "(206) 555-0234",
    email: "david@estateluxe.com",
    bio: "David brings deep local knowledge of Seattle's unique housing market, from historic Craftsman homes to modern waterfront properties. He's known for his patient approach and commitment to finding the right fit for every client.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    properties: [7, 15]
  }
];

const neighborhoods = [
  {
    id: 1,
    name: "Upper East Side",
    city: "New York",
    description: "Manhattan's most prestigious residential neighborhood, known for its museum mile, luxury boutiques, and elegant pre-war buildings.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
    avgPrice: 3200000,
    propertyCount: 142
  },
  {
    id: 2,
    name: "South Beach",
    city: "Miami",
    description: "Iconic beachfront neighborhood famous for its Art Deco architecture, vibrant nightlife, and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=600&q=80",
    avgPrice: 1850000,
    propertyCount: 89
  },
  {
    id: 3,
    name: "Beverly Hills",
    city: "Los Angeles",
    description: "World-renowned luxury destination featuring sprawling estates, celebrity homes, and the famous Rodeo Drive shopping district.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
    avgPrice: 4500000,
    propertyCount: 67
  },
  {
    id: 4,
    name: "Capitol Hill",
    city: "Seattle",
    description: "Vibrant urban neighborhood known for its historic homes, eclectic shops, diverse dining scene, and panoramic city views.",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=600&q=80",
    avgPrice: 950000,
    propertyCount: 203
  }
];

const testimonials = [
  {
    id: 1,
    name: "Rebecca & Thomas Hartley",
    role: "Home Buyers",
    text: "Alexandra made our dream of owning a Manhattan penthouse a reality. Her attention to detail, negotiation skills, and knowledge of the market were exceptional. She guided us through every step with patience and expertise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Property Investor",
    text: "Marcus helped me build a portfolio of waterfront properties in Miami. His understanding of the market trends and investment potential is unmatched. I've worked with many agents, but none compare to his level of service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    location: "Miami, FL"
  },
  {
    id: 3,
    name: "Jennifer Liu",
    role: "First-time Homebuyer",
    text: "As a first-time buyer in Los Angeles, I was overwhelmed until I met Olivia. She took the time to understand exactly what I wanted and found us the perfect mid-century modern home. We couldn't be happier!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    location: "Los Angeles, CA"
  },
  {
    id: 4,
    name: "Robert & Amanda Klein",
    role: "Relocating Family",
    text: "James helped our family relocate from New York to Chicago. He showed us every neighborhood that fit our criteria and found the perfect home for our kids near top-rated schools. Truly exceptional service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    location: "Chicago, IL"
  },
  {
    id: 5,
    name: "Carlos Mendez",
    role: "Luxury Home Seller",
    text: "When it came time to sell our waterfront villa, Marcus priced it perfectly and marketed it aggressively. We received multiple offers above asking within the first week. His professionalism is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    location: "Miami Beach, FL"
  },
  {
    id: 6,
    name: "Emily Chen",
    role: "Condo Buyer",
    text: "Sofia was incredible throughout our home search in Austin. She knows the city inside and out and found us a modern farmhouse in East Austin that we absolutely love. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    location: "Austin, TX"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Luxury Home Buyers",
    excerpt: "Navigating the luxury real estate market for the first time can be daunting. Here are essential tips from our expert agents to help you make informed decisions.",
    content: "Full article content would go here...",
    author: "Alexandra Sterling",
    date: "2025-03-15",
    category: "Buying Guide",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Hottest Neighborhoods to Watch in 2025",
    excerpt: "Our market analysis reveals the up-and-coming neighborhoods across America's major cities that offer the best value and growth potential.",
    content: "Full article content would go here...",
    author: "Marcus Rivera",
    date: "2025-03-10",
    category: "Market Trends",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Staging Your Home for a Quick Sale",
    excerpt: "Professional staging can increase your home's sale price by up to 10%. Learn the secrets top agents use to make properties irresistible to buyers.",
    content: "Full article content would go here...",
    author: "Olivia Chen",
    date: "2025-03-05",
    category: "Selling Tips",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Understanding Property Taxes in Major Cities",
    excerpt: "Property taxes can significantly impact your home ownership costs. We break down what you need to know in New York, Miami, LA, Chicago, and more.",
    content: "Full article content would go here...",
    author: "James Whitfield",
    date: "2025-02-28",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Sustainable Luxury: Eco-Friendly High-End Homes",
    excerpt: "The luxury market is going green. Discover how sustainable features are adding value to high-end properties and what buyers are looking for.",
    content: "Full article content would go here...",
    author: "Sofia Martinez",
    date: "2025-02-20",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Waterfront Living: What You Need to Know",
    excerpt: "Dreaming of a home on the water? Our waterfront specialist shares insights on insurance, maintenance, and the unique joys of coastal living.",
    content: "Full article content would go here...",
    author: "David Nakamura",
    date: "2025-02-15",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    readTime: "9 min read"
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { properties, agents, neighborhoods, testimonials, blogPosts };
}
