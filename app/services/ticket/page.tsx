import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Air tickets | Mark Travel & Tours",
  description: "Air Arabia and international flights booked and managed for you.",
};

export default function TicketsPage() {
  return (
    <ServicePage
      eyebrow="Air tickets"
      title="The right flight,"
      accent="at the right fare."
      intro="As official GSA of Air Arabia, we book and manage tickets directly, and we can also arrange other airlines for your route."
      included={[
        { title: "Air Arabia fares", text: "Direct booking through our GSA desk, with support from the same team after you buy." },
        { title: "Other airlines", text: "Comparable options on other carriers when they suit your dates better." },
        { title: "Every trip type", text: "One-way, return and multi-city itineraries." },
        { title: "Changes & refunds", text: "We handle date changes, cancellations and refund requests for you." },
        { title: "Group bookings", text: "Seats for families, delegations and organisations in one booking." },
        { title: "Corporate accounts", text: "Central booking and clear invoicing for businesses." },
      ]}
      notesTitle="Booking options"
      notes={["Office booking", "Phone booking", "Online request", "Corporate accounts", "Group fares"]}
      steps={[
        { title: "Share your route", text: "Tell us where, when and how many people are travelling." },
        { title: "Compare options", text: "We send you fares and baggage rules in plain language." },
        { title: "Confirm and fly", text: "Pay, receive your e-ticket and call us if anything changes." },
      ]}
      ctaTitle="Ready to book a flight?"
      ctaText="Send us your route and dates. We will reply with the best available fares."
    />
  );
}
