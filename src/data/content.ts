
import laptopImage from "../assets/product/product-2.png";
import systemImage from "../assets/product/product-1.png";
import printerImage from "../assets/product/product-3.png";
import cctvImage from "../assets/product/product-4.png";
import smartHomeImage from "../assets/product/product-6.png";
import upsImage from "../assets/product/product-5.png";
/*import serverImage from "../assets/product-server.svg";
import computerImage from "../assets/product/product-2.png";
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
    id: "desktop-pc",
    label: "Desktop PC's",
    short: "Business PCs, assembled desktops & accessories",
    description:
      "New desktop computers, assembled PCs, and computer accessories sourced from authorised distributors, configured to meet your requirements before delivery.",
    bullets: [
      "Business PCs",
      "Assembled desktops",
      "Custom configurations",
      "Computer accessories",
    ],
  },
  {
    id: "laptops",
    label: "Laptops",
    short: "Business and personal laptops from leading brands",
    description:
      "We supply laptops from trusted brands for home, business, and educational use, with configuration, software installation, and ready-to-use delivery.",
    bullets: [
      "Business laptops",
      "Premium brands",
      "Software installation",
      "Warranty support",
    ],
  },
  {
    id: "printers",
    label: "Printers",
    short: "Printers, scanners & office printing solutions",
    description:
      "Sales, installation, and support for inkjet, laser, and multifunction printers suitable for homes, offices, and commercial environments.",
    bullets: [
      "Laser printers",
      "Inkjet printers",
      "Multifunction devices",
      "Installation & support",
    ],
  },
  {
    id: "cctv",
    label: "CCTV",
    short: "AI surveillance with remote monitoring",
    description:
      "Professional CCTV installation and configuration for homes, shops, offices, and factories with remote viewing and smart security features.",
    bullets: [
      "AI surveillance",
      "Remote monitoring",
      "Professional installation",
      "Mobile access",
    ],
  },
  {
    id: "ups",
    label: "UPS & Batteries",
    short: "Reliable power backup solutions for home & business",
    description:
      "We supply, install, and maintain UPS systems and batteries for homes, offices, and businesses, ensuring uninterrupted power during outages.",
    bullets: [
      "UPS sales",
      "Battery replacement",
      "UPS installation",
      "Maintenance & support",
    ],
  },
  {
    id: "smart-home-office",
    label: "Smart Home & Office",
    short: "IoT, biometric access & automation",
    description:
      "Smart automation solutions including biometric attendance, access control, IoT devices, and connected security systems for homes and offices.",
    bullets: [
      "IoT automation",
      "Smart security",
      "Biometric access",
      "Access control",
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
    id: "desktop-pc",
    category: "Desktop PC's",
    name: "Desktop PCs",
    specs: [
      "Branded & Assembled Systems",
      "Intel Core i3 / i5 / i7 / Ultra",
      "AMD Ryzen Processors",
      "8 GB–64 GB RAM",
      "SSD & HDD Storage Options",
    ],
    applications: "Office work, home use, education, business, gaming, workstations",
    brands: ["HP", "Dell", "Lenovo", "Acer", "Custom Build"],
    image: systemImage,
  },
  {
    id: "laptops",
    category: "Laptops",
    name: "Business & Personal Laptops",
    specs: [
      "Intel & AMD Processors",
      "8 GB–32 GB RAM",
      "256 GB–2 TB SSD",
      "Full HD & IPS Displays",
    ],
    applications: "Business, education instutions, work from home, travel",
    brands: ["HP", "Dell", "Lenovo", "Acer", "ASUS"],
    image: laptopImage,
  },
  {
    id: "printers",
    category: "Printer",
    name: "Printers",
    specs: [
      "Laser & Ink Tank Models",
      "Print, Scan & Copy",
      "Wi-Fi & Network Support",
      "Automatic Duplex Printing",
    ],
    applications: "Homes, offices, schools, retail shops, businesses",
    brands: ["HP", "Canon", "Brother", "Epson"],
    image: printerImage,
  },
  {
    id: "cctv",
    category: "CCTV",
    name: "CCTV Surveillance Systems",
    specs: [
      "2MP–8MP HD Cameras",
      "Night Vision",
      "AI Motion Detection",
      "Remote Mobile Viewing",
    ],
    applications: "Homes, shops, offices, factories, warehouses",
    brands: ["CP Plus", "Hikvision", "Dahua"],
    image: cctvImage,
  },
  {
    id: "ups-batteries",
    category: "UPS & Batteries",
    name: "UPS & Batteries",
    specs: [
      "600 VA–5 KVA UPS",
      "Online & Line-Interactive UPS",
      "Sealed Lead Acid & Tubular Batteries",
      "Reliable Power Backup",
    ],
    applications: "PCs, offices, billing counters, servers, inverter backup",
    brands: ["APC", "Luminous", "Microtek", "Exide", "Amaron"],
    image: upsImage,
  },
  {
    id: "smart-home",
    category: "Smart Home",
    name: "Smart Home Solutions",
    specs: [
      "Smart Wi-Fi Devices",
      "Video Door Phones",
      "Smart Locks",
      "Biometric Access & Automation",
    ],
    applications: "Home security, office automation, access control, remote monitoring",
    brands: ["CP Plus", "Hikvision", "Godrej", "Qubo"],
    image: smartHomeImage,
  },
];

export const industries = [
  {
    name: "Retail & Shops",
    note: "Desktop PCs, billing systems, printers, CCTV and UPS backup for smooth daily operations.",
  },
  {
    name: "Schools & Colleges",
    note: "Computer labs, laptops, printers, CCTV surveillance and campus-wide networking solutions.",
  },
  {
    name: "Corporate Offices",
    note: "Desktop PCs, laptops, printers, networking, UPS systems and smart office automation.",
  },
  {
    name: "Healthcare & Clinics",
    note: "Reception systems, printers, CCTV security, UPS backup and biometric access control.",
  },
  {
    name: "Manufacturing & Industries",
    note: "Factory surveillance, networking, server infrastructure, UPS backup and access control systems.",
  },
  {
    name: "Homes & Apartments",
    note: "Desktop PCs, laptops, smart home automation, CCTV security, Wi-Fi coverage and UPS solutions.",
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
    q: "Do you provide on-site installation and support?",
    a: "Yes. Our technicians provide on-site installation, configuration, maintenance and repair services for homes, offices, schools and businesses in Pollachi and nearby areas.",
  },
  {
    q: "What products do you supply?",
    a: "We supply Desktop PCs, Laptops, Printers, CCTV surveillance systems, UPS & Batteries, and Smart Home & Office automation solutions from leading brands.",
  },
  {
    q: "Do you offer custom-built desktop computers?",
    a: "Yes. We build custom desktop PCs tailored for office work, business applications, gaming, graphic design and other performance requirements using quality components.",
  },
  {
    q: "Can I get a quotation before purchasing?",
    a: "Absolutely. Share your requirements through WhatsApp, phone or the enquiry form on our website, and we'll provide a detailed quotation with suitable product options.",
  },
  {
    q: "Do you provide warranty and after-sales support?",
    a: "Yes. All products come with the manufacturer's warranty where applicable, along with installation assistance and reliable after-sales service from our technical team.",
  },
  {
    q: "Do you install CCTV systems with mobile viewing?",
    a: "Yes. We install and configure CCTV systems with remote mobile access, allowing you to monitor your home or business securely from anywhere.",
  },
];
export const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "Acer",
  "ASUS",
  "Canon",
  "Epson",
  "Brother",
  "CP Plus",
  "Hikvision",
  "Dahua",
  "APC",
  "Luminous",
  "Microtek",
  "Exide",
  "Amaron",
  "Godrej",
  "Qubo",
];
