export const profile = {
  name: "Visalakshi Saminathan",
  title: "Data & Analytics Leader",
  location: "Sydney, NSW, Australia",
  email: "visalakshisaminathan26@gmail.com",
  phone: "0405 594 760",
  linkedin: "https://linkedin.com/in/visalakshi-saminathan",
  github: "https://github.com/Visa2691",
  summary: `Data and analytics leader with over 10 years of continuous growth across Tier-1 banking, digital banking, and technology. A builder at heart — recognised for creating high-performing analytics teams from the ground up, developing data products that directly shape business strategy, and driving measurable commercial outcomes through people-first leadership.

Technically fluent across the modern data stack and cloud platforms, with a track record of designing enterprise-grade solutions that scale. Combines deep product thinking with hands-on technical capability and a natural ability to bridge engineering teams with executive stakeholders.`,
}

export const metrics = [
  { value: 10, suffix: "+", label: "Years of Leadership", color: "violet", description: "Progressive growth across Tier-1 & digital banking" },
  { value: 5,  suffix: "",  label: "Industries Spanned",  color: "cyan",   description: "Finance, banking, education, consulting & tech" },
  { value: 40, suffix: "%", label: "Reporting Reduced",   color: "amber",  description: "Manual workload eliminated through automation" },
  { value: 3,  suffix: "",  label: "Analytics Squads Built", color: "rose", description: "Built from zero with full governance frameworks" },
]

export const industries = [
  { name: "Financial Services", icon: "🏦" },
  { name: "Digital Banking",    icon: "📱" },
  { name: "Higher Education",   icon: "🎓" },
  { name: "Consulting",         icon: "💼" },
  { name: "Enterprise Tech",    icon: "⚙️"  },
]

export const experience = [
  {
    id: 1,
    title: "Data Analytics Lead",
    company: "UBank Pty Ltd (NAB Group)",
    period: "Feb 2023 – Present",
    current: true,
    summary: "Appointed to build and lead UBank's analytics function post-merger. Accountable for enterprise data strategy, squad leadership, BI modernisation, and C-suite intelligence.",
    achievements: [
      "Built the analytics function from zero — defined squad operating rhythms, coding standards, QA protocols, and governance frameworks now embedded as standard practice.",
      "Architected enterprise data strategy, migrating legacy pipelines to a Modern Data Stack using Databricks, Power BI, and SQL — reducing time-to-insight by over 60%.",
      "Designed and delivered automated data products giving executives real-time visibility across risk exposure, customer acquisition, and business performance.",
      "Led automation initiatives eliminating manual reporting bottlenecks, materially improving SLA turnaround times across multiple business units.",
      "Acted as trusted analytical voice at the leadership table through structured data storytelling, scenario modelling, and customer-journey analysis.",
      "Championed pragmatic AI integration, deploying AI-as-a-Service tooling with ethical use standards and regulatory alignment.",
    ],
    tech: ["Databricks", "Power BI", "SQL", "Python", "AWS", "Power Platform", "Power Automate"],
    highlight: { value: "60%", label: "faster time-to-insight" },
    color: "violet",
  },
  {
    id: 2,
    title: "Technology Lead, Operations Analytics",
    company: "The University of Sydney",
    period: "Apr 2022 – Jan 2023",
    current: false,
    summary: "Engaged as Visualisation SME and technical lead to overhaul analytics and reporting infrastructure across multiple faculties and administrative divisions.",
    achievements: [
      "Redesigned visualisation frameworks using Power BI and SQL, integrating multi-system data to enable real-time decision-making across university operations.",
      "Automated key operational workflows using Power Automate, reducing manual administrative workload by 40% and freeing staff for higher-value activities.",
      "Delivered integrated performance dashboards combining disparate source systems to surface trends, anomalies, and optimisation opportunities.",
      "Implemented end-to-end data quality controls and lineage documentation, significantly improving confidence in reporting outputs.",
    ],
    tech: ["Power BI", "SQL", "Python", "Power Automate", "Azure"],
    highlight: { value: "40%", label: "reduction in manual workload" },
    color: "cyan",
  },
  {
    id: 3,
    title: "Senior Associate → Decision Analyst",
    company: "Commonwealth Bank of Australia",
    period: "Nov 2017 – Apr 2022",
    current: false,
    summary: "Five-year progressive tenure across Data & Decision Science, retail banking, FX products, and customer acquisition — from analyst to senior analytics leader.",
    achievements: [
      "Built executive-level sales scorecards exposing hidden growth levers, contributing to a 15% revenue uplift across key product portfolios.",
      "Developed behavioural dashboards enabling a 20% uplift in customer growth and a 10% increase in FX-related revenue.",
      "Shaped product penetration strategy through data-driven insights, contributing to 15% increase in market share for key retail financial products.",
      "Designed and implemented Next Best Conversation (NBC) algorithms in partnership with marketing, maximising product conversion and retention.",
      "Built predictive business case models for high-budget marketing campaigns, contributing to a 15% improvement in campaign ROI.",
      "Mentored and upskilled junior analysts in advanced data modelling, BI standards, and stakeholder engagement.",
    ],
    tech: ["SQL", "Python", "Tableau", "Power BI", "Advanced Excel"],
    highlight: { value: "15%", label: "revenue uplift via scorecards" },
    color: "emerald",
  },
  {
    id: 4,
    title: "Decision Analyst",
    company: "BizCubed Pty Ltd",
    period: "Aug 2016 – Nov 2017",
    current: false,
    summary: "Boutique data analytics consultancy delivering client-facing analytics, infrastructure monitoring, and data transformation solutions across multiple industry clients.",
    achievements: [
      "Provided technical expertise in Pentaho data analytics tooling, enhancing client productivity by 15% through redesigned reporting pipelines.",
      "Designed and deployed end-to-end data transformation workflows, converting raw operational data into business-ready outputs.",
      "Monitored server infrastructure proactively, reducing system downtime by 20% and improving service reliability for key accounts.",
      "Collaborated directly with client stakeholders to translate business requirements into scalable analytics solutions.",
    ],
    tech: ["Pentaho", "SQL", "Data Transformation", "ETL"],
    highlight: { value: "20%", label: "reduction in system downtime" },
    color: "orange",
  },
  {
    id: 5,
    title: "Systems Engineer",
    company: "Adobe Systems (via Tata Consultancy Services)",
    period: "Dec 2012 – Jun 2015",
    current: false,
    summary: "Delivered enterprise systems reliability and subscription management for Adobe's global SaaS platform, embedded within TCS managed services in Mumbai, India.",
    achievements: [
      "Engineered proactive monitoring protocols reducing system breaches by 30% and recovering $17,200 annually through resolution of critical billing discrepancies.",
      "Built operational dashboards providing real-time visibility into platform health and subscription metrics.",
      "Collaborated with cross-functional teams to design preventive controls reducing recurring incident frequency by over 25%.",
      "Developed technical documentation for monitoring processes, enabling faster onboarding of new team members.",
    ],
    tech: ["System Monitoring", "Dashboards", "Billing Analytics", "Incident Management"],
    highlight: { value: "30%", label: "reduction in system breaches" },
    color: "rose",
  },
]

export const competencies = [
  { subject: "People Leadership",    A: 92 },
  { subject: "Product Development",  A: 85 },
  { subject: "Data Strategy",        A: 95 },
  { subject: "AI & Governance",      A: 80 },
  { subject: "Commercial Analytics", A: 90 },
  { subject: "Technical Stack",      A: 85 },
]

export const techStack = {
  expert:     ["Power BI", "SQL", "Databricks"],
  proficient: ["Python", "AWS", "Azure", "Power Platform", "Power Automate", "Tableau"],
  familiar:   ["React", "Git", "ETL / Pentaho"],
}

export const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    color: "amber",
    icon: "☁️",
  },
  {
    name: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    year: "2023",
    color: "violet",
    icon: "🏅",
  },
]

export const education = [
  {
    degree: "Master of Information Technology",
    major: "Software Engineering",
    institution: "The University of Sydney",
    period: "2015 – 2017",
    detail: "GPA: 74.02% | Sydney, NSW",
  },
  {
    degree: "Master of Information Technology Management",
    major: "Dual-degree program",
    institution: "The University of Sydney",
    period: "2015 – 2017",
    detail: "Sydney, NSW",
  },
]

export const projects = [
  {
    id: 1,
    title: "SmartMeals",
    subtitle: "AI Family Meal Planner",
    description: "An AI-powered meal planning app built to eliminate weekly decision fatigue. Generates toddler-friendly, nutritionally balanced weekly menus, automated shopping lists, and pantry tracking — all optimised for a busy working parent.",
    problem: "Spent hours each week deciding what to cook, cross-referencing toddler nutritional needs and pantry stock.",
    solution: "AI generates a full weekly meal plan in seconds, accounts for a toddler's nutritional milestones, and produces a grouped shopping list ready for Woolworths.",
    features: [
      "Weekly meal plan generation with toddler portion sizes",
      "Nutritional balance tracking (iron, calcium, protein)",
      "One-click shopping list by category",
      "Pantry inventory to reduce food waste",
      "Cuisine variety settings & allergy flags",
    ],
    tech: ["React", "Claude AI API", "Node.js", "Tailwind CSS"],
    status: "In Progress",
    statusColor: "amber",
    github: "https://github.com/Visa2691",
    icon: "🍽️",
    color: "violet",
  },
  {
    id: 2,
    title: "FamilyTrip",
    subtitle: "AI Travel Planning Checklist",
    description: "An AI-orchestrated travel planning tool for families with young children. Generates personalised packing lists, day-by-day itineraries, toddler-essentials checklists, and destination research — so every trip runs smoothly.",
    problem: "Planning travel with a toddler involves 10× more logistics — car seats, snacks, nap schedules, medication, documentation. A standard checklist app doesn't cut it.",
    solution: "Input your destination, trip duration, and toddler's age — the AI builds a complete plan: packing list, safety kit, activity itinerary suited to toddler attention spans, and restaurant shortlist with kids' menus.",
    features: [
      "Destination-aware packing list (weather, culture, duration)",
      "Toddler-specific essentials checklist",
      "Day-by-day itinerary with toddler rest windows",
      "Restaurant finder filtered for family-friendly venues",
      "Printable PDF trip pack",
    ],
    tech: ["React", "Claude AI API", "Tailwind CSS"],
    status: "Coming Soon",
    statusColor: "cyan",
    github: "https://github.com/Visa2691",
    icon: "✈️",
    color: "cyan",
  },
]

export const hobbies = [
  {
    name: "Pilates",
    icon: "🧘",
    description: "My anchor for mental clarity and physical strength. Reformer Pilates 3× a week — the one hour that's entirely mine.",
    color: "violet",
  },
  {
    name: "Strength Training",
    icon: "💪",
    description: "Progressively overloading, tracking lifts, and chasing PRs. Brings the same data-driven mindset I use at work into fitness.",
    color: "rose",
  },
  {
    name: "Gardening",
    icon: "🌱",
    description: "Growing herbs, vegetables and flowers in our backyard. A slow, patient practice that's the perfect counterweight to a fast-paced career.",
    color: "emerald",
  },
  {
    name: "Painting",
    icon: "🎨",
    description: "Watercolours and acrylic on weekends. A creative outlet that keeps the right brain active and the analytical brain quiet for a while.",
    color: "amber",
  },
  {
    name: "Music",
    icon: "🎵",
    description: "Playing Carnatic classical music — a lifelong practice. Music taught me the value of discipline, rhythm, and listening deeply.",
    color: "cyan",
  },
]
