import {
  Briefcase,
  Compass,
  FileCheck2,
  Hotel,
  MoonStar,
  Plane,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";
import type { ServiceIconName } from "@/lib/types";

const icons = {
  plane: Plane,
  visa: FileCheck2,
  hotel: Hotel,
  shield: ShieldCheck,
  moon: MoonStar,
  compass: Compass,
  briefcase: Briefcase,
};

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" {...props} />;
}
