/**
 * All portfolio content lives here. Edit this file to update the site —
 * no component code needs to change.
 */

export type Skill = { name: string; learning?: boolean };
export type SkillGroup = {
  title: string;
  icon: "code" | "cloud" | "layers" | "file" | "database" | "wrench";
  description: string;
  /** Featured groups are shown as large SAP cards; the rest as compact supporting cards. */
  featured?: boolean;
  skills: Skill[];
};

export const profile = {
  name: "Lakshmana Selvan V",
  initials: "LS",
  role: "SAP ABAP Developer",
  focus: ["ABAP Cloud", "CDS Views", "RAP", "SAP CAP"],
  location: "Tirunelveli, Tamil Nadu, India",
  availability: "Open to SAP ABAP Developer and Technical Consultant roles",
  tagline:
    "Software engineer with 2 years 4 months of backend experience in Java and Spring Boot, now building with ABAP Cloud, CDS Views, RAP and SAP CAP.",

  email: "lakshmanaselvanv.eng@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshmana-selvan-v",
  /** Set to a string like "+91 XXXXX XXXXX" to show the phone number publicly. */
  phone: null as string | null,
  /** Put your PDF in /public and set this to "/resume.pdf" to show "Download résumé" buttons. */
  resumeUrl: null as string | null,
  /** Optional GitHub profile URL. */
  github: null as string | null,
};

export const highlights = [
  { value: "2\u00A0yrs 4\u00A0mos", label: "Software engineering" },
  { value: "3", label: "SAP projects" },
];

export const about = {
  paragraphs: [
    "I'm a Software Development Engineer with 2 years 4 months of experience building scalable backend applications, enterprise systems and RESTful APIs with Java, Spring Boot, Python and Django.",
    "I'm now moving into SAP ABAP development. I work hands-on in Eclipse with ABAP Development Tools: custom DDIC tables, CDS Views, ABAP classes and modern ABAP syntax. I also build with the SAP Cloud Application Programming Model (CAP) and OData V4.",
    "I'm looking for a role as an SAP ABAP Developer or Technical Consultant where my software engineering background helps deliver clean, maintainable SAP solutions.",
  ],
  pillars: [
    { title: "Engineering foundation", text: "2 years 4 months of production backend work: APIs, SQL tuning, event-driven systems and debugging." },
    { title: "SAP ABAP and Cloud", text: "OO ABAP, DDIC, ABAP SQL and CDS Views in Eclipse ADT on the SAP BTP ABAP Environment." },
    { title: "Currently learning", text: "RAP business objects, EML, Traditional ABAP (ALV, Module Pool) and S/4HANA development." },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "SAP ABAP core",
    icon: "code",
    description: "Modern and object-oriented ABAP, from data modeling to debugging.",
    featured: true,
    skills: [
      { name: "ABAP programming" },
      { name: "Object-Oriented ABAP" },
      { name: "Classes, interfaces, inheritance" },
      { name: "Internal tables (standard, sorted, hashed)" },
      { name: "Structures and field symbols" },
      { name: "Data Dictionary (DDIC)" },
      { name: "ABAP SQL / Open SQL" },
      { name: "Modern ABAP syntax" },
      { name: "Exception handling and debugging" },
    ],
  },
  {
    title: "S/4HANA and ABAP Cloud",
    icon: "cloud",
    description: "Cloud-ready ABAP on SAP BTP, following clean core principles.",
    featured: true,
    skills: [
      { name: "ABAP Cloud fundamentals" },
      { name: "CDS Views and annotations" },
      { name: "ABAP Development Tools (ADT)" },
      { name: "RAP", learning: true },
      { name: "EML", learning: true },
      { name: "OData services" },
      { name: "Clean core principles" },
    ],
  },
  {
    title: "SAP BTP and CAP",
    icon: "layers",
    description: "Full-stack services with the Cloud Application Programming Model.",
    featured: true,
    skills: [
      { name: "SAP CAP" },
      { name: "CDS data modeling" },
      { name: "OData V4" },
      { name: "CAP service handlers and actions" },
      { name: "Node.js and JavaScript" },
      { name: "SAP Fiori / SAPUI5 basics" },
    ],
  },
  {
    title: "Traditional ABAP",
    icon: "file",
    description: "Classic on-premise development I'm studying now.",
    skills: [
      { name: "Classical and interactive reports", learning: true },
      { name: "ALV reports", learning: true },
      { name: "Selection screens", learning: true },
      { name: "Module Pool programming", learning: true },
      { name: "RICEF concepts", learning: true },
      { name: "Enhancements and user exits", learning: true },
      { name: "Smart Forms and Adobe Forms", learning: true },
    ],
  },
  {
    title: "Programming and databases",
    icon: "database",
    description: "2 years 4 months of production backend engineering.",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Spring Boot" },
      { name: "Django" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    description: "Daily development environment.",
    skills: [
      { name: "Eclipse ADT" },
      { name: "SAP BTP ABAP Environment" },
      { name: "SAP Business Application Studio" },
      { name: "VS Code" },
      { name: "Git and GitHub" },
      { name: "Postman" },
    ],
  },
];

export const experience = [
  {
    title: "Software Development Engineer",
    company: "ICANIO Technologies",
    period: "January 2024 – Present",
    points: [
      "Designed and built scalable backend applications with Java, Spring Boot and Django using object-oriented, modular architecture.",
      "Developed and maintained RESTful APIs for enterprise workflows, data processing and third-party integrations.",
      "Optimised SQL queries and database operations in PostgreSQL and MongoDB to improve application performance.",
      "Implemented secure workflows with authentication, authorisation, role-based access control and encryption.",
      "Built asynchronous, event-driven processing with Apache Kafka and RabbitMQ, and integrated Elasticsearch for full-text search.",
      "Worked with cross-functional teams to turn business requirements into technical solutions, documented with Swagger/OpenAPI.",
    ],
    tags: ["Java", "Spring Boot", "Django", "PostgreSQL", "MongoDB", "Kafka", "RabbitMQ", "Elasticsearch"],
  },
];

export const projects = [
  {
    category: "ABAP Cloud",
    title: "Employee management system",
    summary: "Hands-on ABAP Cloud development of employee master data, from DDIC tables to CDS data models.",
    points: [
      "Structured an ABAP package hierarchy in Eclipse ADT.",
      "Designed custom DDIC objects and an employee database table.",
      "Built CDS-based data models to read and expose employee data.",
      "Applied OO ABAP classes, methods and standard, sorted and hashed internal tables.",
    ],
    tags: ["ABAP Cloud", "Eclipse ADT", "ABAP SQL", "DDIC", "CDS Views"],
  },
  {
    category: "SAP CAP",
    title: "Healthcare appointment and patient management",
    summary: "A CAP backend that manages patients, doctors, availability and appointments through OData V4.",
    points: [
      "Modeled entities, associations and compositions in CDS.",
      "Built OData V4 services with CRUD, custom actions and service handlers.",
      "Configured SQLite persistence for local development and testing.",
      "Used CDS annotations and projections for service exposure.",
    ],
    tags: ["SAP CAP", "Node.js", "CDS", "OData V4", "SQLite"],
  },
  {
    category: "SAP CAP + AI",
    title: "AI-based student leave email automation",
    summary: "Google Gemini reads leave emails; CAP validates the extracted details and updates leave records.",
    points: [
      "Integrated Google Gemini to extract student details, dates and reasons from email text.",
      "Wrote CAP service handlers to validate data and update leave records.",
      "Designed CDS entities and OData V4 services for students, attendance and leave.",
      "Added custom actions and SQLite persistence for status tracking.",
    ],
    tags: ["SAP CAP", "Node.js", "OData V4", "Google Gemini", "SQLite"],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Computer Science and Engineering",
  school: "Thamirabharani Engineering College",
  year: "2024",
};

export const certifications = [
  { name: "Basic ABAP Programming", issuer: "SAP Learning" },
  { name: "Claude 101", issuer: "Anthropic" },
  { name: "AI Fluency: Framework and Foundations", issuer: "Anthropic" },
];

/** Headline skills shown above the skill cards. */
export const coreFocus: Skill[] = [
  { name: "ABAP Cloud" },
  { name: "CDS Views" },
  { name: "OO ABAP" },
  { name: "ABAP SQL" },
  { name: "SAP CAP" },
  { name: "OData V4" },
  { name: "RAP", learning: true },
];

/** Kinds of roles shown in the contact panel. */
export const openTo = ["SAP ABAP Developer", "SAP Technical Consultant", "ABAP Cloud and CAP projects"];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
