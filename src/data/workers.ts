// Mock data - BACKEND TODO: replace with real /workers API
export type Worker = {
  id: string;
  name: string;
  categorySlug: string;
  rating: number;
  jobsDone: number;
  distanceKm: number;
  pricePerDay: number;
  verified: boolean;
  yearsExp: number;
  city: string;
};

export const workers: Worker[] = [
  { id: "w1", name: "Ramesh Kumar", categorySlug: "electrician", rating: 4.8, jobsDone: 214, distanceKm: 1.9, pricePerDay: 750, verified: true, yearsExp: 8, city: "Indore" },
  { id: "w2", name: "Sunil Yadav", categorySlug: "electrician", rating: 4.6, jobsDone: 168, distanceKm: 2.7, pricePerDay: 700, verified: true, yearsExp: 6, city: "Indore" },
  { id: "w3", name: "Deepak Sharma", categorySlug: "electrician", rating: 4.9, jobsDone: 302, distanceKm: 3.4, pricePerDay: 900, verified: true, yearsExp: 11, city: "Indore" },
  { id: "w4", name: "Vinod Patil", categorySlug: "plumber", rating: 4.7, jobsDone: 189, distanceKm: 2.0, pricePerDay: 850, verified: true, yearsExp: 9, city: "Indore" },
  { id: "w5", name: "Ashok Verma", categorySlug: "plumber", rating: 4.5, jobsDone: 141, distanceKm: 3.1, pricePerDay: 700, verified: true, yearsExp: 5, city: "Indore" },
  { id: "w6", name: "Raju Mehra", categorySlug: "painter", rating: 4.5, jobsDone: 122, distanceKm: 1.8, pricePerDay: 800, verified: true, yearsExp: 7, city: "Indore" },
  { id: "w7", name: "Manoj Solanki", categorySlug: "painter", rating: 4.6, jobsDone: 156, distanceKm: 2.4, pricePerDay: 900, verified: true, yearsExp: 8, city: "Indore" },
  { id: "w8", name: "Salim Khan", categorySlug: "carpenter", rating: 4.7, jobsDone: 201, distanceKm: 2.9, pricePerDay: 950, verified: true, yearsExp: 10, city: "Indore" },
  { id: "w9", name: "Bhagwan Das", categorySlug: "mason", rating: 4.6, jobsDone: 178, distanceKm: 2.3, pricePerDay: 1000, verified: true, yearsExp: 12, city: "Indore" },
  { id: "w10", name: "Kishan Meena", categorySlug: "mason", rating: 4.8, jobsDone: 245, distanceKm: 3.6, pricePerDay: 1100, verified: true, yearsExp: 14, city: "Indore" },
  { id: "w11", name: "Ganesh Rathore", categorySlug: "helper", rating: 4.4, jobsDone: 96, distanceKm: 1.5, pricePerDay: 600, verified: true, yearsExp: 4, city: "Indore" },
  { id: "w12", name: "Prakash Jat", categorySlug: "helper", rating: 4.5, jobsDone: 132, distanceKm: 2.2, pricePerDay: 700, verified: true, yearsExp: 5, city: "Indore" },
  { id: "w13", name: "Ravi Chauhan", categorySlug: "loading", rating: 4.5, jobsDone: 88, distanceKm: 2.4, pricePerDay: 600, verified: true, yearsExp: 3, city: "Indore" },
  { id: "w14", name: "Shifting Squad", categorySlug: "movers", rating: 4.7, jobsDone: 74, distanceKm: 4.1, pricePerDay: 2500, verified: true, yearsExp: 6, city: "Indore" },
  { id: "w15", name: "Sunita Devi", categorySlug: "cleaning", rating: 4.8, jobsDone: 210, distanceKm: 1.4, pricePerDay: 500, verified: true, yearsExp: 6, city: "Indore" },
  { id: "w16", name: "Meera Bai", categorySlug: "cleaning", rating: 4.6, jobsDone: 143, distanceKm: 2.0, pricePerDay: 450, verified: true, yearsExp: 4, city: "Indore" },
  { id: "w17", name: "Lokesh Bhil", categorySlug: "warehouse", rating: 4.4, jobsDone: 62, distanceKm: 3.2, pricePerDay: 650, verified: true, yearsExp: 3, city: "Indore" },
];
