import {
  Award,
  Building2,
  CarTaxiFront,
  Globe,
  Handshake,
  Headset,
  Heart,
  HeartHandshake,
  Hotel,
  Landmark,
  LayoutGrid,
  Lightbulb,
  LifeBuoy,
  Luggage,
  MoonStar,
  Plane,
  ShieldCheck,
  Store,
  User,
  UserCheck,
  Users,
  FileCheck2,
  HandHeart,
  type LucideIcon,
} from "lucide-react";

export interface Item {
  title: string;
  text: string;
  icon: LucideIcon;
}

/** Home: "Why Choose Us" */
export const whyChoose: Item[] = [
  {
    title: "Reliable Travel Solutions",
    text: "Dependable service you can trust from planning to arrival.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Travel Experts",
    text: "Knowledgeable professionals dedicated to finding the best travel options.",
    icon: Headset,
  },
  {
    title: "Personalized Service",
    text: "Travel solutions tailored to your individual or business needs.",
    icon: UserCheck,
  },
  {
    title: "Comprehensive Services",
    text: "Air ticketing, visa assistance, hotel reservations, travel insurance, tours, and corporate travel management.",
    icon: LayoutGrid,
  },
  {
    title: "Professional & Responsive Support",
    text: "Prompt assistance before, during, and after your journey.",
    icon: LifeBuoy,
  },
  {
    title: "Commitment to Excellence",
    text: "Guided by our core values of Excellence, Integrity, Teamwork, Reliability, and Respect.",
    icon: Award,
  },
];

/** Home: "Our Services" (short descriptions taken from the reference mockup) */
export const homeServices: Item[] = [
  { title: "Flight Booking", text: "Airline tickets at best rates.", icon: Plane },
  { title: "Hotel Booking", text: "Accommodations for every trip.", icon: Hotel },
  { title: "Visa Assistance", text: "Visa help and processing.", icon: FileCheck2 },
  { title: "Travel Insurance", text: "Protect your journeys.", icon: ShieldCheck },
  { title: "Umrah Services", text: "Umrah packages and support.", icon: MoonStar },
  {
    title: "Airport Transfers",
    text: "Airport pick-up and drop-off.",
    icon: CarTaxiFront,
  },
  { title: "Baggage Transfers", text: "Luggage delivery service.", icon: Luggage },
];

export const clients: { name: string; icon: LucideIcon }[] = [
  { name: "Government Institutions", icon: Landmark },
  { name: "International Organizations", icon: Globe },
  { name: "INGOs", icon: Building2 },
  { name: "NGOs", icon: HeartHandshake },
  { name: "Travel Agencies", icon: Store },
  { name: "Individual Travelers", icon: User },
];

export const partners = {
  airlines: [
    "Kam Air",
    "Ariana Afghan Airlines",
    "Iran Air Tour",
    "Air Arabia",
    "Turkish Airlines",
    "Emirates",
    "flydubai",
  ],
  gsa: "Air Arabia",
  technology: {
    name: "Amadeus",
    text: "Our reservation system is powered by Amadeus, one of the world's leading travel technology platforms, enabling fast, accurate, and efficient booking solutions.",
  },
  // Taken from the reference mockup: confirm these are current before publishing.
  memberships: ["IATA TIDS", "ISO Certified"],
};

/** About */
export const history = [
  {
    label: "2015",
    title: "Where it began",
    text: "Founded in 2015, Mark Travel & Tours was established with a clear mission: to deliver reliable, seamless, and customer-focused travel solutions with professionalism, integrity, and excellence. What began as a local travel agency with a small team of dedicated professionals has grown into one of Afghanistan's trusted travel service providers.",
  },
  {
    label: "Growing",
    title: "Built on trust",
    text: "Through our commitment to personalized service, industry expertise, and customer satisfaction, we have built lasting relationships with individual travelers, corporate clients, and a strong network of global travel partners. Our team has expanded to meet evolving needs while maintaining the high standards that have defined us from the beginning.",
  },
  {
    label: "Today",
    title: "Every journey, perfected",
    text: "Today, Mark Travel & Tours offers air ticketing, visa assistance, hotel reservations, travel insurance, tour packages, and corporate travel management. As we continue to grow, we remain committed to creating seamless travel experiences and delivering exceptional customer care, ensuring every journey reflects our promise of excellence.",
  },
];

export const vision =
  "We strive to become the most trusted and respected travel agency in Afghanistan, setting the mark of excellence in the travel and tourism industry through exceptional service delivery.";
export const mission =
  "Our mission is to transform every journey into a golden experience by delivering reliable, seamless, and customer-focused travel services with professionalism, integrity, and excellence, while building lasting relationships with our customers and business partners.";

export const values: { name: string; quote: string; text: string; icon: LucideIcon }[] = [
  {
    name: "Excellence",
    quote:
      "We strive for excellence in every journey we plan and every service we deliver.",
    text: "We are committed to delivering high-quality travel solutions through professionalism, attention to detail, and continuous improvement.",
    icon: Award,
  },
  {
    name: "Integrity",
    quote: "We act with honesty, transparency, and accountability.",
    text: "We build trust by conducting our business ethically and honoring our commitments to customers, partners, and colleagues.",
    icon: Handshake,
  },
  {
    name: "Customer Commitment",
    quote: "Our customers are at the heart of everything we do.",
    text: "We listen, understand, and respond to our customers' needs with professionalism and care, ensuring a seamless travel experience.",
    icon: Heart,
  },
  {
    name: "Teamwork",
    quote: "Together we achieve more.",
    text: "We collaborate across departments, support one another, and work toward common goals while respecting each person's contribution.",
    icon: Users,
  },
  {
    name: "Innovation",
    quote: "We embrace change and continuously improve.",
    text: "We seek better ways to serve our customers through technology, creative ideas, and efficient processes.",
    icon: Lightbulb,
  },
  {
    name: "Reliability",
    quote: "Customers can depend on us.",
    text: "We deliver our promises consistently and provide dependable support before, during, and after every journey.",
    icon: ShieldCheck,
  },
  {
    name: "Respect",
    quote: "We value every customer, partner, and colleague.",
    text: "We foster an inclusive and respectful environment where everyone is treated with dignity and professionalism.",
    icon: HandHeart,
  },
];
