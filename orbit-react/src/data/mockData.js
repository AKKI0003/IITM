// Spin2Build — shared mock data.
// No backend this event: treat localStorage as your database.
// Import whatever this array/object you need, e.g.:
//   import { complaints } from "../data/mockData";
//
// "services" here mirrors the real array in Services.jsx with a category
// field added — feel free to add `category` to that array instead and
// delete this copy, whichever is faster for the feature you got.

export const services = [
  { id: "SVC01", name: "Water Supply & Jal Seva", category: "Utilities" },
  { id: "SVC02", name: "Electricity & Solar Net-Metering", category: "Utilities" },
  { id: "SVC03", name: "Swachh Waste Management", category: "Utilities" },
  { id: "SVC04", name: "Property Tax & Trade License (BBPS)", category: "Payments" },
  { id: "SVC05", name: "Citizen Grievance Redressal (Nivaran)", category: "Complaints" },
  { id: "SVC06", name: "DigiLocker Civic Certificates", category: "Documents" },
];

export const complaints = [
  { id: "CMP1001", category: "Water", description: "Low water pressure in Sector 9", status: "Open", date: "2026-08-10" },
  { id: "CMP1002", category: "Roads", description: "Pothole near Metro Gate 2", status: "In Progress", date: "2026-08-15" },
  { id: "CMP1003", category: "Electricity", description: "Streetlight not working", status: "Resolved", date: "2026-08-02" },
];

export const transportRoutes = [
  { route: "Metro Blue Line", mode: "metro", stops: ["City Centre", "Sector 12", "Sector 21", "Tech Park"] },
  { route: "Bus 42", mode: "bus", stops: ["Old Town", "Market Square", "Civic Hospital"] },
  { route: "Bus 7", mode: "bus", stops: ["Riverfront", "College Road", "Stadium"] },
];

// Extends the `events` array already in Events.jsx with an id, a full
// date (with year), and a seat count — needed for Seats & Waitlist /
// Smart Event Calendar. Match by title, or just use this array directly.
export const eventsExtra = [
  { id: "EVT1", title: "Independence Day Civic Parade & Cultural Mela", date: "2026-08-15", seats: 5 },
  { id: "EVT2", title: "Orbit Smart City Annual Night Marathon (10K & 21K)", date: "2026-08-28", seats: 3 },
  { id: "EVT3", title: "National Smart City & Clean Mobility Expo 2026", date: "2026-09-10", seats: 8 },
  { id: "EVT4", title: "Heritage Handloom & Food Festival", date: "2026-09-10", seats: 6 }, // shares a date with EVT3 on purpose — tests the "+N more" calendar case
];

export const parkingSlots = [
  { id: "P1", status: "free" },
  { id: "P2", status: "booked" },
  { id: "P3", status: "free" },
  { id: "P4", status: "free" },
  { id: "P5", status: "booked" },
  { id: "P6", status: "free" },
];

export const tripCostRules = {
  hotelTiers: { Budget: 1200, Standard: 2500, Premium: 4500 }, // per night, ₹
  foodTiers: { Budget: 400, Standard: 800, Premium: 1500 }, // per day, ₹
  groupDiscountAboveDays: 3,
  groupDiscountPercent: 10,
};

export const feedbackRatings = [
  { category: "Water", ratings: [5, 4, 5, 3, 5, 2, 4] },
  { category: "Electricity", ratings: [3, 4, 2, 5, 4] },
  { category: "Roads", ratings: [2, 3, 2, 1, 3, 2] },
];

export const alerts = [
  { type: "Critical", message: "Flood warning in Sector 14" },
  { type: "Warning", message: "Water supply disruption tomorrow" },
  { type: "Info", message: "Municipal office closed Sunday" },
];

export const appointmentSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
export const maxBookingsPerCitizenPerDay = 2;

export const polls = [
  { id: "POLL1", question: "Best upcoming civic project?", options: ["New Park", "Bike Lanes", "Smart Streetlights"] },
  { id: "POLL2", question: "Preferred event time?", options: ["Morning", "Evening", "Weekend"] },
];

// Digital ID format: ORB-2026-XXXX-C
// XXXX = random 4-digit number, C (check digit) = (sum of the 4 digits) mod 9
// Example: ORB-2026-4821-6  ->  4+8+2+1 = 15  ->  15 mod 9 = 6
export function generateCitizenId() {
  const digits = String(Math.floor(1000 + Math.random() * 9000));
  const check = digits.split("").reduce((sum, d) => sum + Number(d), 0) % 9;
  return `ORB-2026-${digits}-${check}`;
}
export function verifyCitizenId(id) {
  const match = /^ORB-2026-(\d{4})-(\d)$/.exec(id);
  if (!match) return false;
  const [, digits, check] = match;
  const expected = digits.split("").reduce((sum, d) => sum + Number(d), 0) % 9;
  return Number(check) === expected;
}

export const mapPins = [
  { name: "City Hospital", type: "emergency", status: "Available" },
  { name: "Fire Station 2", type: "emergency", status: "Busy" },
  { name: "Central Library", type: "landmark" },
  { name: "Riverfront Park", type: "landmark" },
];
