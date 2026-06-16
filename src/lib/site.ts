import santander from "@/app/assets/companies/santander.png";
import cargill from "@/app/assets/companies/cargill.png";
import tous from "@/app/assets/companies/tous.png";
import vistaprint from "@/app/assets/companies/vistaprint.png";
import sony from "@/app/assets/companies/sony.png";
import aena from "@/app/assets/companies/aena.png";
import adp from "@/app/assets/companies/adp_logo.png";
import adaptive from "@/app/assets/companies/adaptive-1.png";
import cibc from "@/app/assets/companies/CIBC.png";
import azaCuriosity from "@/app/assets/aza/Curiosidad.png";
import azaCompassion from "@/app/assets/aza/Compasion.png";
import azaPresence from "@/app/assets/aza/Presencia.png";
import azaAutonomy from "@/app/assets/aza/Autonomia.png";
import azaBonds from "@/app/assets/aza/Vinculos.png";

/*
  Single source of truth for site content (English).
  Data drawn from softdevarts.com (main), aza.family (Projects)
  and blackboxcoworking.com / on-site photos (Office).
*/

export const site = {
  name: "SoftDevArts",
  longName: "Software Development Artisans S.L.",
  tagline: "Your partners in software and business excellence",
  email: "info@softdevarts.com",
  address: {
    street: "Carrer de la Plaça, 61, local derecha",
    city: "08330 Premià de Mar",
    region: "Barcelona, Spain",
  },
  social: {
    instagram: "https://www.instagram.com/blackboxcoworking/",
    linkedin: "https://www.linkedin.com/",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Carrer+de+la+Pla%C3%A7a+61+Premi%C3%A0+de+Mar",
} as const;

export const projectsUrl = "https://aza.family";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/office", label: "Office" },
  { href: "/sobre-nosotros", label: "About" },
] as const;

/* Clients referenced on softdevarts.com (real logos, black on transparent) */
export const clients = [
  { name: "Santander", logo: santander },
  { name: "Cargill", logo: cargill },
  { name: "Tous", logo: tous },
  { name: "Vistaprint", logo: vistaprint },
  { name: "Sony", logo: sony },
  { name: "Aena", logo: aena },
  { name: "ADP", logo: adp },
  { name: "Adaptive", logo: adaptive },
  { name: "CIBC", logo: cibc },
] as const;

/* Three service pillars */
export const servicePillars = [
  {
    icon: "compass",
    title: "Comprehensive consulting",
    text: "We support the entire software development lifecycle, from business needs analysis to implementation.",
    items: [
      "Business & requirements analysis",
      "Architecture & technical roadmap",
      "System audit & improvement",
    ],
  },
  {
    icon: "layers",
    title: "Flexible engagement",
    text: "We plug into your team with the model you need: by project, by sprint, or as an extension of your staff.",
    items: [
      "On-demand tailored teams",
      "Project or hourly development",
      "Mentoring & team reinforcement",
    ],
  },
  {
    icon: "spark",
    title: "Cutting-edge practices",
    text: "We apply modern methodologies and technology to build software that is efficient, maintainable and ready to scale.",
    items: [
      "Modern & cloud architectures",
      "Quality, testing & CI/CD",
      "Performance & user experience",
    ],
  },
] as const;

/* Why SoftDevArts, five reasons (condensed from softdevarts.com) */
export const reasons = [
  {
    icon: "shield",
    title: "Proven expertise",
    text: "Full command of the lifecycle, from analysis to deployment, across many industries.",
  },
  {
    icon: "spark",
    title: "Detail-oriented",
    text: "Meticulous by default: quality, performance and experience in every delivery.",
  },
  {
    icon: "compass",
    title: "Strategic guidance",
    text: "We clear obstacles and bring the methods and frameworks that actually move you forward.",
  },
  {
    icon: "network",
    title: "Powerful network",
    text: "Specialised developers and senior consultants, on hand for the hardest problems.",
  },
  {
    icon: "rocket",
    title: "Built for startups",
    text: "End-to-end support, from shaping the idea to running the team that builds it.",
  },
] as const;

/* ---- About us (condensed from softdevarts.com) ---- */
export const aboutStory = [
  "A small, dynamic team with decades of multinational experience as developers and business analysts.",
  "We blend craftsmanship with modern technology, every line written with care, and build lasting relationships, not throwaway projects.",
] as const;

export const foundersIntro =
  "Two co-founders who lead by example, guiding the team towards excellence in every project.";

export const founders = [
  {
    name: "Azahara",
    role: "Co-founder · Senior Business Analyst and Data Analyst",
    bio: "Turns sharp analysis into insight, keeping every project aligned with real needs.",
    photo: "/team/azahara.png",
    linkedin: "https://es.linkedin.com/in/azahara-trigueros-martinez-88479027",
  },
  {
    name: "Carlos",
    role: "Co-founder · Senior Software Developer",
    bio: "Drives innovation and efficiency, leading the team to build solutions that push what’s possible.",
    photo: "/team/carlos.png",
    linkedin: "https://es.linkedin.com/in/carlosrfernandez",
  },
] as const;

/* ---- Projects · AZA (aza.family) ---- */
export const aza = {
  name: "aza.family",
  url: projectsUrl,
  logo: "/aza-flower.png",
  tagline: "Listen to each other, truly",
  intro:
    "A product we designed and built ourselves: a free, web-based method that helps families reconnect, combining psychology with thoughtful product design.",
  claims: [
    "Free methodology",
    "Designed with psychologists",
    "No extra mental load",
  ],
  how: "One mission a week, lived naturally in everyday life, closed with a short reflection. Five weeks, five guides, one per petal.",
  phases: [
    { title: "Mission", text: "A guide proposes one small, easy task for the week." },
    { title: "In action", text: "Live it at your own pace. No pressure, no perfectionism." },
    { title: "Reflection", text: "A short moment to pause and share what you noticed." },
  ],
  weeks: [
    { n: "01", title: "Curiosity", text: "Real listening: swap automatic questions for ones that open up.", color: "#e6b33f", img: azaCuriosity },
    { n: "02", title: "Compassion", text: "Let go of the daily guilt. You're already doing your best.", color: "#e07a59", img: azaCompassion },
    { n: "03", title: "Presence", text: "Less screen noise. Be there, with all five senses.", color: "#7fb4e3", img: azaPresence },
    { n: "04", title: "Autonomy", text: "Space and freedom for each person in the family.", color: "#c89a63", img: azaAutonomy },
    { n: "05", title: "Bonds", text: "Unique moments, more laughter, a deeper connection.", color: "#8ba86a", img: azaBonds },
  ],
} as const;

/* ---- Office (BlackBox Coworking) ---- */
export const officeSpaces = [
  {
    icon: "desk",
    title: "Hot desk",
    text: "A free spot in the shared area, by the day or by the month. Show up, plug in and work.",
    image: "/office/puestos-trabajo.jpg",
  },
  {
    icon: "users",
    title: "Fixed desk",
    text: "Your reserved spot in the shared office, with a monitor and everything ready each morning.",
    image: "/office/rincon.jpg",
  },
  {
    icon: "sofa",
    title: "Relax zone",
    text: "A cosy corner to step away, recharge and switch off between sprints.",
    image: "/office/lounge.jpg",
  },
  {
    icon: "calendar",
    title: "Meeting rooms",
    text: "Equipped rooms by the hour for meetings, training sessions or client presentations.",
    image: "/office/sala-reuniones-2.jpg",
  },
] as const;

export const officeAmenities = [
  { icon: "shield", label: "24/7 alarm & CCTV" },
  { icon: "key", label: "Digital access" },
  { icon: "desk", label: "Ergonomic chair & sit-stand desk" },
  { icon: "printer", label: "Printer" },
  { icon: "monitor", label: "Curved monitor" },
  { icon: "coffee", label: "Coffee, kitchen & fridge" },
  { icon: "sofa", label: "Relax area" },
  { icon: "calendar", label: "Meeting room with whiteboard" },
] as const;

/* Curated gallery for the Office page */
export const officeGallery = [
  { src: "/office/sala-reuniones.jpg", alt: "Meeting room with red chairs and the BlackBox screen" },
  { src: "/office/rincon.jpg", alt: "Open workspace with ergonomic chairs and dual monitors" },
  { src: "/office/despacho-privado.jpg", alt: "Office desk with plants and warm light" },
  { src: "/office/cafe.jpg", alt: "Coffee corner with a vintage shelving unit" },
  { src: "/office/lounge.jpg", alt: "Reading armchair next to an ochre curtain" },
  { src: "/office/zona-trabajo.jpg", alt: "Meeting table with cane chairs on a red rug" },
  { src: "/office/mesa-comunitaria.jpg", alt: "Communal table with tableware and artwork" },
  { src: "/office/cocina.jpg", alt: "Kitchen with white tiles and warm details" },
  { src: "/office/detalle-silla.jpg", alt: "Detail of a cane Cesca chair" },
  { src: "/office/detalle-flores.jpg", alt: "Tulips in a vase on a glass table" },
  { src: "/office/planta.jpg", alt: "Snake plant in a woven basket" },
  { src: "/office/detalle-vela.jpg", alt: "Candle and matches on terracotta tiles" },
] as const;
