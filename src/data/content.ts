import computerImage from "../assets/product-computer.svg";
import laptopImage from "../assets/product-laptop.svg";
import printerImage from "../assets/product-printer.svg";
import cctvImage from "../assets/product-cctv.svg";
import networkingImage from "../assets/product-networking.svg";
import upsImage from "../assets/product-ups.svg";
import serverImage from "../assets/product-server.svg";
import componentsImage from "../assets/product-components.svg";

export const company = {
  name: "COMPU CONNECT",
  tagline: "Computer sales, repair & CCTV installation in Pollachi",
  addressLines: ["Negamam Road, Kovilpalayam", "Pollachi, Tamil Nadu, India"],
  phones: ["+91 99945 14485", "+91 98434 60780"],
  whatsapp: "919994514485",
  email: "info@compuconnect.in",
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
    label: "Computer & Laptop Sales",
    short: "Business PCs, gaming rigs & workstations",
    description:
      "New and upgraded desktops, laptops and workstations sourced from authorised distributors, configured for your workload before they leave our counter.",
    bullets: ["Business PCs", "Gaming PCs", "Workstations", "Premium brands"],
  },
  {
    id: "service",
    label: "Repair & AMC",
    short: "Diagnostics, repair and annual maintenance",
    description:
      "In-shop and on-site diagnostics for hardware and software faults, backed by Annual Maintenance Contracts that keep offices running without surprise downtime.",
    bullets: ["Hardware repair", "OS & software support", "Data recovery", "AMC plans"],
  },
  {
    id: "cctv",
    label: "CCTV & Security",
    short: "AI surveillance with remote monitoring",
    description:
      "Camera surveys, installation and configuration for homes, shops and factories, with remote viewing set up on your phone before we leave site.",
    bullets: ["AI surveillance", "Remote monitoring", "Installation", "AMC"],
  },
  {
    id: "networking",
    label: "Networking & Servers",
    short: "Enterprise WiFi, firewalls & server rooms",
    description:
      "Structured cabling, enterprise WiFi, firewall configuration and server setup for growing offices that need a network they can trust.",
    bullets: ["Enterprise WiFi", "Firewall", "Server setup", "Cloud integration"],
  },
  {
    id: "automation",
    label: "Smart Office & Home",
    short: "IoT, biometric access & automation",
    description:
      "Biometric attendance, smart access control and connected automation that brings your home or office up to date, wired in cleanly by our own team.",
    bullets: ["IoT", "Smart security", "Biometric", "Access control"],
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
    name: "Business Desktop PC",
    specs: ["Intel Core i5 / Ryzen 5", "8–16 GB RAM", "512 GB SSD", "3-year warranty"],
    applications: "Office workstations, billing counters, reception desks",
    brands: ["HP", "Dell", "Lenovo", "Acer"],
    image: computerImage,
  },
  {
    id: "gaming-desktop",
    category: "Desktop",
    name: "Gaming / Creator PC",
    specs: ["Intel Core i7 / Ryzen 7", "16–32 GB RAM", "RTX-series GPU", "1 TB NVMe SSD"],
    applications: "Gaming, video editing, 3D rendering, streaming",
    brands: ["Custom Build", "MSI", "ASUS"],
    image: computerImage,
  },
  {
    id: "laptop",
    category: "Laptop",
    name: "Business & Student Laptops",
    specs: ["Intel / AMD / M-series options", "8–16 GB RAM", "256 GB–1 TB SSD", "Full-HD display"],
    applications: "Remote work, college, field staff, travel",
    brands: ["HP", "Dell", "Lenovo", "Apple", "Acer"],
    image: laptopImage,
  },
  {
    id: "laser-printer",
    category: "Printer",
    name: "Laser Printer / MFP",
    specs: ["Mono & colour options", "Network + WiFi printing", "Duplex printing"],
    applications: "Offices, print shops, schools",
    brands: ["HP", "Canon", "Brother"],
    image: printerImage,
  },
  {
    id: "ink-tank-printer",
    category: "Printer",
    name: "Ink Tank Printer",
    specs: ["High-volume printing", "Low cost per page", "Scan & copy"],
    applications: "Shops, small offices, high-volume home use",
    brands: ["Epson", "Canon", "HP"],
    image: printerImage,
  },
  {
    id: "cctv-camera",
    category: "CCTV",
    name: "AI Dome / Bullet Camera",
    specs: ["2MP–8MP resolution", "Night vision", "Motion & AI detection"],
    applications: "Shops, homes, factories, warehouses",
    brands: ["CP Plus", "Hikvision", "Dahua"],
    image: cctvImage,
  },
  {
    id: "nvr-dvr",
    category: "CCTV",
    name: "NVR / DVR Recorder",
    specs: ["4–32 channel options", "Mobile app viewing", "1–8 TB storage"],
    applications: "Central recording for camera networks",
    brands: ["CP Plus", "Hikvision", "Dahua"],
    image: cctvImage,
  },
  {
    id: "ups",
    category: "UPS",
    name: "Line-Interactive / Online UPS",
    specs: ["600 VA – 3 KVA options", "Sealed lead-acid / lithium battery", "Surge protection"],
    applications: "PC backup, server rooms, billing counters",
    brands: ["APC", "Luminous", "Microtek"],
    image: upsImage,
  },
  {
    id: "network-switch",
    category: "Networking",
    name: "Managed / Unmanaged Switch",
    specs: ["8–48 port options", "Gigabit ports", "PoE variants available"],
    applications: "Office LAN, CCTV networks, server rooms",
    brands: ["TP-Link", "Cisco", "D-Link"],
    image: networkingImage,
  },
  {
    id: "router-firewall",
    category: "Networking",
    name: "Router / Firewall Appliance",
    specs: ["Dual-WAN options", "VPN support", "Content & access control"],
    applications: "Branch offices, multi-floor buildings",
    brands: ["TP-Link", "Fortinet", "MikroTik"],
    image: networkingImage,
  },
  {
    id: "server-rack",
    category: "Server",
    name: "Tower / Rack Server",
    specs: ["Xeon processors", "16–128 GB RAM", "RAID storage"],
    applications: "File servers, ERP hosting, backup servers",
    brands: ["Dell", "HPE", "Lenovo"],
    image: serverImage,
  },
  {
    id: "components",
    category: "Components",
    name: "SSD, RAM, Motherboard, CPU, GPU",
    specs: ["NVMe & SATA SSD", "DDR4 / DDR5 RAM", "ATX / mATX boards"],
    applications: "Upgrades, custom builds, replacements",
    brands: ["Samsung", "Western Digital", "Kingston", "ASUS", "Gigabyte"],
    image: componentsImage,
  },
];

export const industries = [
  { name: "Retail & Shops", note: "Billing PCs, CCTV and UPS backup for uninterrupted counters." },
  { name: "Schools & Colleges", note: "Computer labs, projectors and campus WiFi." },
  { name: "Textile & Manufacturing", note: "Factory-floor CCTV, networking and server backup." },
  { name: "Healthcare Clinics", note: "Reception systems, biometric access and data backup." },
  { name: "Offices & Co-working", note: "Structured cabling, enterprise WiFi and server setup." },
  { name: "Homes", note: "Home automation, smart security and Wi-Fi coverage." },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years serving Pollachi" },
  { value: 4000, suffix: "+", label: "Installations completed" },
  { value: 25, suffix: "+", label: "Brands supported" },
  { value: 98, suffix: "%", label: "AMC renewal rate" },
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
  "HP", "Dell", "Lenovo", "Acer", "Apple", "Asus", "Canon", "Epson", "Brother",
  "CP Plus", "Hikvision", "APC", "TP-Link", "Cisco", "Fortinet", "Samsung",
];
