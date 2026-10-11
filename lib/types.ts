export type ServiceIconName =
  "plane" | "visa" | "hotel" | "shield" | "moon" | "compass" | "briefcase";

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: ServiceIconName;
}
export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  body: string[];
}
export interface FlightRoute {
  city: string;
  x: number;
  y: number;
}
export interface Pillar {
  title: string;
  text: string;
}
export interface NavItem {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  tagline: string;
  since: number;
  address: string;
  email: string;
  phone: string;
  nav: NavItem[];
  routes: FlightRoute[];
  services: Service[];
  pillars: Pillar[];
  posts: Post[];
}
