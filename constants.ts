// src/constants.ts

// -------------------- PROJECTS --------------------
export const PROJECTS = [
  {
    title: "Hollow Blocks",
    image: "/images/products/hollow-blocks.jpg",
    category: "Blocks",
    description: "Lightweight, higher insulation hollow blocks used in masonry and partition walls."
  },
  {
    title: "Interlocking Bricks",
    image: "/images/products/interlocking-bricks.jpg",
    category: "Paving",
    description: "Precision interlocking bricks for driveways and pedestrian paths — fast installation, low maintenance."
  },
  {
    title: "RCC Fencing Posts",
    image: "/images/products/rcc-fencing-post.jpg",
    category: "Posts",
    description: "Precast reinforced concrete posts for strong, durable fencing and boundary solutions."
  },
  {
    title: "RCC Pipes",
    image: "/images/products/rcc-pipes.jpg",
    category: "Pipes",
    description: "Reinforced concrete pipes for drainage, culverts and agricultural irrigation systems."
  },
  {
    title: "RCC Rings",
    image: "/images/products/rcc-rings.jpg",
    category: "Rings",
    description: "Precast rings for wells, manholes and underground water structures."
  },
  {
    title: "RCC Slabs",
    image: "/images/products/rcc-slabs.jpg",
    category: "Slabs",
    description: "Strong precast slabs suitable for covers and platform uses in civil projects."
  },
  {
    title: "Solid Blocks",
    image: "/images/products/solid-blocks.jpg",
    category: "Blocks",
    description: "High density solid blocks for load-bearing walls and foundations."
  }
];

// -------------------- WHY CHOOSE US --------------------
export const WHY_CHOOSE_US_ITEMS = [
  {
    id: "01",
    title: "Quality Assurance",
    description: "ISO-like process & quality checks to ensure every product meets industry standards."
  },
  {
    id: "02",
    title: "Dedicated Project Management",
    description: "A dedicated project manager for each job to keep communication clear and efficient."
  },
  {
    id: "03",
    title: "Fast Prototyping",
    description: "Rapid prototyping and sample turnaround to help you move quickly from design to production."
  },
  {
    id: "04",
    title: "Competitive Pricing",
    description: "Transparent and fair pricing without compromising on quality or timelines."
  }
];

// -------------------- SERVICES --------------------
export const SERVICES = [
  {
    id: "design",
    title: "Mechanical Design",
    icon: "/images/service-design.svg",
    description: "CAD modelling, FEA checks and producible shop drawings."
  },
  {
    id: "fabrication",
    title: "Sheet Metal Fabrication",
    icon: "/images/service-fab.svg",
    description: "Laser cutting, bending, welding and finishing — small to large batches."
  },
  {
    id: "assembly",
    title: "Assembly & Integration",
    icon: "/images/service-assembly.svg",
    description: "Sub-assembly, final assembly and quality checks for production runs."
  },
  {
    id: "inspection",
    title: "Inspection & Testing",
    icon: "/images/service-qc.svg",
    description: "Dimensional inspection, pressure & safety tests, and certification support."
  }
];

// -------------------- TESTIMONIALS --------------------
export const TESTIMONIALS = [
  {
    quote: "MGV delivered the panels on time and the quality was exceptional.",
    name: "Arun Kumar",
    company: "Sakthi Automation",
    avatar: "/images/testi1.jpg"
  },
  {
    quote: "Excellent communication and fast prototyping — highly recommended.",
    name: "Priya Nair",
    company: "Veda Systems",
    avatar: "/images/testi2.jpg"
  },
  {
    quote: "They handled the certification process and helped us meet deadlines.",
    name: "R. Sharma",
    company: "GMR Industries",
    avatar: "/images/testi3.jpg"
  }
];

// -------------------- FAQ --------------------
export const FAQ = [
  { q: "What is your lead time for prototypes?", a: "Typically 7–14 days depending on complexity." },
  { q: "Do you accept small batch orders?", a: "Yes — we work from single prototypes to large production runs." },
  { q: "What materials do you work with?", a: "SS, MS, Aluminium, Copper, and specialty alloys." },
  { q: "Do you provide certifications?", a: "We assist with third-party inspections and provide test documentation." }
];

// -------------------- SITE (default) --------------------
export const SITE = {
  companyName: "MGV Engineering Works",
  slogan: "Engineering Craft. Trusted Delivery.",
  logo: "/images/logo.png",
  hero: {
    image: "/images/hero.jpg",
    title: "Industrial Engineering & Fabrication",
    subtitle: "Custom metalwork, precision assemblies and turnkey solutions.",
    cta: { text: "Get a Quote", href: "#contact" }
  },
  about: {
    image: "/images/about-team.jpg",
    heading: "Who we are",
    paragraphs: [
      "MGV Engineering Works is a family-run fabrication and assembly company with over 12 years of experience serving manufacturing and infrastructure sectors.",
      "We deliver turnkey projects — from concept design and prototyping to mass production and site commissioning. Our focus: durability, safety and on-time delivery."
    ],
    stats: [
      { label: "Years experience", value: "12+" },
      { label: "Projects delivered", value: "320+" },
      { label: "Happy clients", value: "120+" }
    ]
  }
};

export default SITE;
