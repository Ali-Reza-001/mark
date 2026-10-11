import type { Post, Site } from "./types";

const posts: Post[] = [
  {
    slug: "preparing-for-your-first-umrah",
    title: "Preparing for your first Umrah",
    category: "Umrah",
    date: "2026-09-12",
    readMinutes: 4,
    excerpt:
      "A calm checklist covering visas, vaccinations, packing and what to expect at each stage.",
    body: [
      "Start with the paperwork. Confirm your passport validity, apply for your visa early and check which vaccinations are required for your travel dates.",
      "Pack light and comfortable: unscented toiletries, sturdy sandals and a small bag for daily essentials. Book lodging close to the Haram if mobility is a concern.",
      "Our Umrah team can arrange flights, visas, hotels and guided support in one package, so you can focus on the journey itself.",
    ],
  },
  {
    slug: "flying-from-kabul-with-air-arabia",
    title: "Flying from Kabul with Air Arabia",
    category: "Flights",
    date: "2026-08-28",
    readMinutes: 3,
    excerpt: "How routes via Sharjah work and how to find the best fares for your dates.",
    body: [
      "Most itineraries from Kabul connect through the carrier's hub, which makes onward travel simple once you have a single booking.",
      "Fares move with the calendar. Flexible dates, early booking and checking baggage allowances before you pay will save more than any last-minute trick.",
      "As the official GSA, we can quote fares directly and help with changes after you book.",
    ],
  },
  {
    slug: "visa-documents-checked-once",
    title: "Visa documents, checked once",
    category: "Visas",
    date: "2026-08-10",
    readMinutes: 4,
    excerpt:
      "The paperwork most applications miss, and how to avoid a second trip to the embassy.",
    body: [
      "Most delays come from small gaps: an expired passport, a missing photo format or a hotel booking that does not match the travel dates.",
      "Build a folder with originals and copies, and review it against the embassy's current requirements before you submit.",
      "We check every document before it goes in, so your application is complete the first time.",
    ],
  },
  {
    slug: "running-travel-for-a-team-of-fifty",
    title: "Running travel for a team of fifty",
    category: "Corporate",
    date: "2026-07-22",
    readMinutes: 5,
    excerpt: "How managed accounts keep itineraries, budgets and approvals in one place.",
    body: [
      "Group travel fails on coordination, not on tickets. A single point of contact avoids duplicate bookings and lost approvals.",
      "A managed account gives you one invoice, clear spending reports and fast rebooking when plans change.",
      "Organizations that travel often work with us on consolidated billing and 24/7 support.",
    ],
  },
  {
    slug: "choosing-a-hotel-for-a-long-stay",
    title: "Choosing a hotel for a long stay",
    category: "Hotels",
    date: "2026-07-05",
    readMinutes: 3,
    excerpt: "What to compare beyond price when you are away for weeks, not days.",
    body: [
      "For long stays, a kitchenette, laundry access and a quiet desk matter more than a lobby.",
      "Ask about weekly rates, check the neighborhood at night and confirm the cancellation terms in writing.",
      "We negotiate agreed rates with hotels and can match a property to your routine.",
    ],
  },
  {
    slug: "why-travel-insurance-matters",
    title: "Why travel insurance matters",
    category: "Insurance",
    date: "2026-06-18",
    readMinutes: 3,
    excerpt: "Situations where cover pays for itself, and what to look for in a policy.",
    body: [
      "Delays, lost baggage and medical needs abroad can cost far more than the premium.",
      "Read the exclusions, check the medical limit and make sure your policy covers your destination and activities.",
      "We match cover to your route so a problem stays a problem, not a crisis.",
    ],
  },
];

export const site: Site = {
  name: "Mark Travel & Tours",
  tagline: "Excellence in Every Journey",
  since: 2015,
  address: "Ansari Square, Shahr-e-now, Kabul, Afghanistan",
  email: "info@marktravel.af",
  phone: "+93 766 929 292",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  routes: [
    { city: "Dubai", x: 0.62, y: 0.52 },
    { city: "Sharjah", x: 0.66, y: 0.47 },
    { city: "Jeddah", x: 0.3, y: 0.76 },
    { city: "Istanbul", x: 0.16, y: 0.18 },
    { city: "Delhi", x: 0.8, y: 0.24 },
  ],
  services: [
    {
      slug: "flights",
      name: "Flights",
      icon: "plane",
      description:
        "Air Arabia GSA fares and global ticketing for travelers, NGOs and businesses.",
    },
    {
      slug: "visas",
      name: "Visas",
      icon: "visa",
      description:
        "Document checks, applications and follow-up so you arrive with the right paperwork.",
    },
    {
      slug: "hotels",
      name: "Hotels",
      icon: "hotel",
      description:
        "Handpicked stays at agreed rates, from business hotels to family suites.",
    },
    {
      slug: "insurance",
      name: "Insurance",
      icon: "shield",
      description:
        "Travel cover matched to your route, so a delay never becomes a crisis.",
    },
    {
      slug: "umrah",
      name: "Umrah",
      icon: "moon",
      description:
        "Complete pilgrimage packages: flights, visas, lodging and guided support.",
    },
    {
      slug: "tours",
      name: "Tours",
      icon: "compass",
      description: "Curated itineraries with local guides and unhurried pacing.",
    },
    {
      slug: "corporate",
      name: "Corporate travel",
      icon: "briefcase",
      description:
        "Managed accounts, consolidated billing and 24/7 rebooking for organizations.",
    },
  ],
  pillars: [
    { title: "Travel Experts", text: "Specialists who know every route out of Kabul." },
    {
      title: "Corporate Choice",
      text: "Trusted by businesses, organizations and institutions.",
    },
    {
      title: "Global Connectivity",
      text: "Reliable connections to destinations worldwide.",
    },
  ],
  posts,
};

export const getPost = (slug: string) => site.posts.find((p) => p.slug === slug);
