// Mock data - BACKEND TODO: replace with real /categories API
import type { LucideIcon } from "lucide-react";
import { Zap, Wrench, Paintbrush, Hammer, HardHat, Users, Truck, Package, Sparkles, Warehouse } from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  hindi?: string;
  description: string;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  unit: "day" | "job";
  icon: LucideIcon;
  phase: 1 | 2;
};

export const categories: Category[] = [
  { slug: "electrician", name: "Electrician", description: "Wiring, fittings, fan/switchboard install & repair", priceRange: "₹500-₹900/day", priceMin: 500, priceMax: 900, unit: "day", icon: Zap, phase: 2 },
  { slug: "plumber", name: "Plumber", description: "Leak repair, fittings, bathroom & kitchen plumbing", priceRange: "₹600-₹1100/day", priceMin: 600, priceMax: 1100, unit: "day", icon: Wrench, phase: 2 },
  { slug: "painter", name: "Painter", description: "Interior & exterior wall painting, touch-ups", priceRange: "₹600-₹1000/day", priceMin: 600, priceMax: 1000, unit: "day", icon: Paintbrush, phase: 2 },
  { slug: "carpenter", name: "Carpenter", description: "Furniture repair, fittings, custom woodwork", priceRange: "₹600-₹1100/day", priceMin: 600, priceMax: 1100, unit: "day", icon: Hammer, phase: 2 },
  { slug: "mason", name: "Mason (Rajmistri)", hindi: "राजमिस्त्री", description: "Tiling, brickwork, construction & repair", priceRange: "₹700-₹1200/day", priceMin: 700, priceMax: 1200, unit: "day", icon: HardHat, phase: 1 },
  { slug: "helper", name: "Helper / Labour", hindi: "मजदूर", description: "General labour, loading, site helper work", priceRange: "₹500-₹800/day", priceMin: 500, priceMax: 800, unit: "day", icon: Users, phase: 1 },
  { slug: "loading", name: "Loading & Unloading", description: "Moving goods, warehouse & shifting support", priceRange: "₹500-₹700/day", priceMin: 500, priceMax: 700, unit: "day", icon: Truck, phase: 1 },
  { slug: "movers", name: "Packers & Movers", description: "Full-service home & office shifting", priceRange: "₹1500-₹3500/job", priceMin: 1500, priceMax: 3500, unit: "job", icon: Package, phase: 1 },
  { slug: "cleaning", name: "House Help / Cleaning", description: "Deep cleaning, domestic help", priceRange: "₹350-₹600/day", priceMin: 350, priceMax: 600, unit: "day", icon: Sparkles, phase: 2 },
  { slug: "warehouse", name: "Warehouse Worker", description: "Inventory handling, warehouse support", priceRange: "₹500-₹800/day", priceMin: 500, priceMax: 800, unit: "day", icon: Warehouse, phase: 1 },
];

