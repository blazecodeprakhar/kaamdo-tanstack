// Mock data - BACKEND TODO: replace with real testimonials from CMS/API
export type CustomerTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type WorkerBubble = {
  hindi: string;
  english: string;
};

export const customerTestimonials: CustomerTestimonial[] = [
  {
    name: "Ritu S.",
    role: "Homeowner · Indore",
    quote:
      "Booked an electrician on Sunday morning - verified, showed up within an hour, price was exactly what the app showed. No haggling, no waiting.",
    rating: 5,
  },
  {
    name: "Ankit M.",
    role: "Shop Owner · Indore",
    quote:
      "Needed loading help for a same-day shipment. Two verified workers reached in 40 minutes. Paid on UPI, got a proper receipt.",
    rating: 5,
  },
  {
    name: "Preeti K.",
    role: "Interior Designer · Indore",
    quote:
      "I run 3-4 site jobs a week. KaamDo's OTP check-in and timer billing killed all the pricing arguments. My clients trust the invoices now.",
    rating: 4,
  },
];

export const workerBubbles: WorkerBubble[] = [
  { hindi: "मजदूरी का काम आज ही मिला ₹600 ✅", english: "Got labour work today - ₹600" },
  { hindi: "Loading का काम पास में ही ₹500 ✅", english: "Loading work found nearby - ₹500" },
  { hindi: "पेंटर का काम कल से ₹800 ✅", english: "Painter work starting tomorrow - ₹800" },
  { hindi: "Domestic help का काम आज से ₹450 ✅", english: "Domestic help work from today - ₹450" },
];

