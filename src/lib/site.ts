/*
  Single source of truth for site content (English).
  Data drawn from softdevarts.com (main), aza.family (Projects)
  and blackboxcoworking.com / on-site photos (Office).
*/

export const site = {
  name: "SoftDevArts",
  longName: "Software Development Artisans",
  tagline: "Your partners in software and business excellence",
  email: "info@softdevarts.com",
  address: {
    street: "Carrer de la Plaça, 61, local derecha",
    city: "08330 Premià de Mar",
    region: "Barcelona, Spain",
  },
  social: {
    instagram: "https://www.instagram.com/",
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
  { href: "/contacto", label: "Contact" },
] as const;

/* Clients referenced on softdevarts.com */
export const clients = [
  "Santander",
  "Cargill",
  "Tous",
  "Vistaprint",
  "Sony",
  "Aena",
  "ADP",
  "Adaptive",
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

/* Why SoftDevArts, five reasons (real copy from softdevarts.com) */
export const reasons = [
  {
    icon: "shield",
    title: "Proven Expertise",
    text: "With a track record of success across various industries, we know what it takes to build software that not only works but excels. Our deep understanding of the entire software development lifecycle – from need analysis to deployment – ensures that nothing is left to chance.",
  },
  {
    icon: "spark",
    title: "Detail-Oriented Excellence",
    text: "We believe in the power of details. Our approach is meticulous, ensuring that every aspect of your project is thoughtfully considered, expertly executed, and aligned with your business goals. We focus on quality, performance, and user experience to create solutions that truly stand out.",
  },
  {
    icon: "compass",
    title: "Strategic Guidance",
    text: "We understand the challenges companies face today – from managing development teams to keeping up with the latest technologies. With our strategic guidance, you’ll overcome obstacles, streamline processes, and implement the most effective techniques, methodologies, and frameworks that drive success.",
  },
  {
    icon: "network",
    title: "Powerful Network",
    text: "Our network of seasoned professionals is at your service. From specialized developers to top-tier consultants, we bring together the best minds in the industry to tackle your most complex challenges.",
  },
  {
    icon: "rocket",
    title: "Tailored Solutions for Startups",
    text: "New to software development? No problem. We provide end-to-end support, helping you navigate the entire development process. From shaping your ideas to managing your team, we ensure your product is built right from the start.",
  },
] as const;

/* ---- About us (real copy from softdevarts.com) ---- */
export const aboutStory = [
  "Welcome to Software Development Artisans, where we specialize in crafting digital solutions with care and precision. As a small yet dynamic team, we bring together decades of collective experience from our roles in multinational corporations. Our journey began in the fast-paced world of international teams, where we honed our skills as developers and business analysts.",
  "At Software Development Artisans, we believe in blending ancient artistry with modern innovation. Every line of code we write is a testament to our dedication to craftsmanship, ensuring that each project is crafted with meticulous attention to detail. From hammering out elegant designs to handcrafting robust software solutions, we take pride in shaping your vision into reality.",
  "Our commitment to excellence extends beyond just delivering projects; it’s about building lasting relationships with our clients. We understand the challenges you face and are dedicated to finding innovative solutions that meet your unique needs.",
] as const;

export const foundersIntro =
  "Azahara and Carlos, the Co-Founders of Software Development Artisans, are seasoned professionals with a passion for technology and innovation. With a wealth of experience in their respective fields, they lead by example, guiding the team towards excellence in every project.";

export const founders = [
  {
    name: "Azahara",
    role: "Co-founder · Senior Business Analyst",
    bio: "Azahara, a senior business analyst, leverages her keen analytical skills to uncover insights that drive business growth. Her strategic mindset and attention to detail ensure that each project is aligned with client objectives and delivers tangible results.",
    photo: "/team/azahara.png",
  },
  {
    name: "Carlos",
    role: "Co-founder · Senior Developer",
    bio: "Carlos, a Senior Developer, brings a wealth of technical knowledge and expertise to the table. With a focus on innovation and efficiency, he leads the development team in building cutting-edge solutions that push the boundaries of what’s possible in the digital world.",
    photo: "/team/carlos.png",
  },
] as const;

/* ---- Projects · AZA (aza.family) ---- */
export const aza = {
  name: "AZA",
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
  how: "Once a week you open the app, get your mission, live it naturally in everyday life, and close with a short reflection. Five weeks, five guides, one per petal.",
  weeks: [
    { n: "01", title: "Curiosity", text: "Ask better questions and really listen.", color: "#88a06a" },
    { n: "02", title: "Compassion", text: "Meet each other with kindness, not judgement.", color: "#f0c24a" },
    { n: "03", title: "Presence", text: "Be there, fully, in the small moments.", color: "#e8745a" },
    { n: "04", title: "Autonomy", text: "Give space to grow while staying close.", color: "#d6a15f" },
    { n: "05", title: "Bonds", text: "Strengthen the ties that hold you together.", color: "#8fc3ef" },
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
    icon: "building",
    title: "Private office",
    text: "A closed space for your team, the privacy of an office with the perks of the coworking.",
    image: "/office/despacho-privado.jpg",
  },
  {
    icon: "calendar",
    title: "Meeting rooms",
    text: "Equipped rooms by the hour for meetings, training sessions or client presentations.",
    image: "/office/sala-reuniones-2.jpg",
  },
] as const;

export const officeAmenities = [
  { icon: "wifi", label: "High-speed fibre" },
  { icon: "coffee", label: "Coffee & kitchen" },
  { icon: "printer", label: "Printing & scanning" },
  { icon: "calendar", label: "Bookable rooms" },
  { icon: "users", label: "Community & networking" },
  { icon: "clock", label: "Flexible access" },
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
