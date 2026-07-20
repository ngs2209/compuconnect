import computerImage from "../assets/product-computer.svg";
import laptopImage from "../assets/product-laptop.svg";
import printerImage from "../assets/product-printer.svg";
import cctvImage from "../assets/product-cctv.svg";
import smartHomeImage from "../assets/product-networking.svg";
import upsImage from "../assets/product-ups.svg";
/*import serverImage from "../assets/product-server.svg";
import componentsImage from "../assets/product-components.svg";*/

export const company = {
  name: "COMPU CONNECT",
  tagline: "Computer sales, repair & CCTV installation in Pollachi",
  addressLines: ["Negamam Road, Kovilpalayam", "Pollachi, Tamil Nadu, India"],
  phones: ["+91 99945 14485", "+91 98434 60780"],
  whatsapp: "919994514485",
  email: "compuconnect.poy@gmail.com",
  hours: "Mon – Sat, 9:30 AM – 8:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Kovilpalayam,Pollachi,Tamil+Nadu&output=embed",
};

export type NavItem = { label: string; to: string };
export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export type ServiceNode = {
  id: string;
  label: string;
  short: string;
  description: string;
  bullets: string[];
};

export const serviceNodes: ServiceNode[] = [
  {
    id: "sales",
    label: "Computer, Laptop Sales & Service",
    short: "Business PCs, assembled desktops & accessories",
    description:
      "New desktops, laptops, assembled desktop PCs, and computer accessories sourced from authorised distributors, configured to meet your requirements before delivery.",
    bullets: [
      "Business PCs",
      "Assembled desktops",
      "Computer accessories",
      "Premium brands",
    ],
  },
  {
    id: "service",
    label: "UPS & Battery",
    short: "UPS installation, battery replacement and power backup solutions",
    description:
      "Reliable UPS installation, battery replacement, maintenance, and power backup solutions for homes and businesses, ensuring uninterrupted operations during power outages.",
    bullets: [
      "UPS installation",
      "Battery replacement",
      "UPS maintenance",
      "Power backup solutions",
    ],
  },
  {
    id: "cctv",
    label: "CCTV & Security",
    short: "AI surveillance with remote monitoring",
    description:
      "Camera surveys, installation and configuration for homes, shops and factories, with remote viewing set up on your phone before we leave site.",
    bullets: ["AI surveillance", "Remote monitoring", "Installation"],
  },
  {
    id: "networking",
    label: "Networking & Servers",
    short: "Enterprise WiFi, firewalls & server rooms",
    description:
      "Structured cabling, enterprise WiFi, firewall configuration and server setup for growing offices that need a network they can trust.",
    bullets: [
      "Enterprise WiFi",
      "Firewall",
      "Server setup",
      "Cloud integration",
    ],
  },
  {
    id: "automation",
    label: "Smart Office & Home",
    short: "IoT, biometric access & automation",
    description:
      "Biometric attendance, smart access control and connected automation that brings your home or office up to date, wired in cleanly by our own team.",
    bullets: ["IoT", "Smart security", "Biometric", "Access control"],
  },
  {
    id: "automation",
    label: "UPS & Batteries",
    short: "Reliable power backup solutions for home & business",
    description:
      "We supply, install, and maintain UPS systems and batteries for homes, offices, and businesses, ensuring uninterrupted power and dependable backup during outages.",
    bullets: [
      "UPS sales",
      "Battery replacement",
      "UPS installation",
      "Maintenance & support",
    ],
  },
];

export type Product = {
  id: string;
  category: string;
  name: string;
  specs: string[];
  applications: string;
  brands: string[];
  image: string;
};

export const products: Product[] = [
  {
    id: "business-desktop",
    category: "Desktop",
    name: "Desktop Computers",
    specs: [
      "Intel Core i3 / i5 / i7",
      "AMD Ryzen options",
      "8–32 GB RAM",
      "SSD & HDD storage",
    ],
    applications: "Office work, home use, education, business",
    brands: ["HP", "Dell", "Lenovo", "Acer", "Custom Build"],
    image: computerImage,
  },
  {
    id: "assembled-desktop",
    category: "Desktop",
    name: "Assembled Desktop PCs",
    specs: [
      "Custom configurations",
      "Intel & AMD processors",
      "Upgradeable components",
      "SSD / HDD options",
    ],
    applications: "Gaming, office, editing, custom requirements",
    brands: ["Custom Build"],
    image: computerImage,
  },
  {
    id: "laptop",
    category: "Laptop",
    name: "Business & Student Laptops",
    specs: [
      "Intel / AMD processors",
      "8–16 GB RAM",
      "256 GB–1 TB SSD",
      "Full HD display",
    ],
    applications: "Work, education, travel, remote office",
    brands: ["HP", "Dell", "Lenovo", "Acer", "ASUS"],
    image: laptopImage,
  },
  {
    id: "laser-printer",
    category: "Printer",
    name: "Laser Printers & MFPs",
    specs: [
      "Mono & Colour models",
      "Network & Wi-Fi printing",
      "Duplex printing",
    ],
    applications: "Offices, schools, businesses",
    brands: ["HP", "Canon", "Brother"],
    image: printerImage,
  },
  {
    id: "ink-tank-printer",
    category: "Printer",
    name: "Ink Tank Printers",
    specs: ["High-volume printing", "Low printing cost", "Scan & Copy"],
    applications: "Home, shops, offices",
    brands: ["Epson", "Canon", "HP"],
    image: printerImage,
  },
  {
    id: "cctv-camera",
    category: "CCTV",
    name: "CCTV Surveillance Systems",
    specs: [
      "2MP–8MP cameras",
      "Night vision",
      "AI motion detection",
      "Remote mobile viewing",
    ],
    applications: "Homes, shops, offices, warehouses",
    brands: ["CP Plus", "Hikvision", "Dahua"],
    image: cctvImage,
  },
  {
    id: "ups",
    category: "UPS & Batteries",
    name: "UPS Systems",
    specs: ["600 VA – 5 KVA", "Online & Line-Interactive", "Surge protection"],
    applications: "PCs, offices, billing counters, servers",
    brands: ["APC", "Luminous", "Microtek"],
    image: upsImage,
  },
  {
    id: "battery",
    category: "UPS & Batteries",
    name: "UPS Batteries",
    specs: [
      "Sealed Lead Acid",
      "Tubular batteries",
      "Long backup",
      "Maintenance-free options",
    ],
    applications: "UPS replacement, inverter backup, office power",
    brands: ["Exide", "Amaron", "Luminous"],
    image: upsImage,
  },
  {
    id: "smart-home",
    category: "Smart Home",
    name: "Smart Home Solutions",
    specs: [
      "Smart Wi-Fi devices",
      "Video door phones",
      "Smart locks",
      "Home automation",
    ],
    applications: "Home security, automation, remote monitoring",
    brands: ["CP Plus", "Hikvision", "Godrej", "Qubo"],
    image: smartHomeImage,
  },
];

export const industries = [
  {
    name: "Retail & Shops",
    note: "Billing PCs, CCTV and UPS backup for uninterrupted counters.",
  },
  {
    name: "Schools & Colleges",
    note: "Computer labs, projectors and campus WiFi.",
  },
  {
    name: "Textile & Manufacturing",
    note: "Factory-floor CCTV, networking and server backup.",
  },
  {
    name: "Healthcare Clinics",
    note: "Reception systems, biometric access and data backup.",
  },
  {
    name: "Offices & Co-working",
    note: "Structured cabling, enterprise WiFi and server setup.",
  },
  {
    name: "Homes",
    note: "Home automation, smart security and Wi-Fi coverage.",
  },
];

export const stats = [
  { value: 11, suffix: "+", label: "Years serving Pollachi" },
  { value: 4000, suffix: "+", label: "Installations completed" },
  { value: 25, suffix: "+", label: "Brands supported" },
  // { value: 98, suffix: "%", label: "AMC renewal rate" },
];

export const testimonials = [
  {
    name: "R. Saravanan",
    role: "Owner, Saravana Textiles",
    quote:
      "Our factory CCTV and networking were set up in a weekend with zero disruption to production. Support calls get answered the same day.",
  },
  {
    name: "K. Meena",
    role: "Principal, Little Flower Matric School",
    quote:
      "COMPU CONNECT built our entire computer lab and still handles our AMC. Machines that used to break down weekly now run all term.",
  },
  {
    name: "A. Dinesh",
    role: "Manager, Pollachi Diagnostics",
    quote:
      "Biometric access and a proper server backup were things we kept postponing. Their team explained the options plainly and installed everything cleanly.",
  },
];

export const faqs = [
  {
    q: "Do you provide on-site service in Pollachi and nearby villages?",
    a: "Yes. Our technicians visit homes, shops and offices across Pollachi, Kovilpalayam and surrounding areas for installation, repair and AMC visits.",
  },
  {
    q: "What is included in an Annual Maintenance Contract (AMC)?",
    a: "Scheduled preventive visits, priority breakdown support, discounted spares and free minor software support for the covered devices, for one year.",
  },
  {
    q: "Can I get a quotation without visiting the shop?",
    a: "Yes — send your requirement over WhatsApp or the quote form on this site and we'll reply with pricing and options the same day.",
  },
  {
    q: "Do you sell only new hardware or also handle upgrades and repairs?",
    a: "Both. We sell new PCs, laptops and networking gear, and also repair, upgrade and service existing hardware from any brand.",
  },
];

export const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "Acer",
  "Apple",
  "Asus",
  "Canon",
  "Epson",
  "Brother",
  "CP Plus",
  "Hikvision",
  "APC",
  "TP-Link",
  "Cisco",
  "Fortinet",
  "Samsung",
];
