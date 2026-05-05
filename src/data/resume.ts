export interface Metric { value: number; suffix: string; label: string; sublabel: string }
export interface Role { id: number; title: string; company: string; period: string; current: boolean; summary: string; achievements: string[]; tech: string[]; stat: { value: string; label: string }; accent: string }
export interface Project { id: number; title: string; subtitle: string; description: string; features: string[]; tech: string[]; status: 'In Progress' | 'Coming Soon' | 'Live'; github: string }
export interface Hobby { name: string; description: string; icon: string }
export interface Cert { name: string; issuer: string; year: string }
export interface Degree { degree: string; major: string; institution: string; period: string; detail?: string }

export const profile = {
  name: 'Visalakshi Saminathan',
  firstName: 'Visalakshi',
  lastName: 'Saminathan',
  title: 'Data & Analytics Leader',
  location: 'Sydney, NSW, Australia',
  email: 'visalakshisaminathan26@gmail.com',
  phone: '0405 594 760',
  linkedin: 'https://www.linkedin.com/in/visalakshi/',
  github: 'https://github.com/Visa2691',
  tagline: 'I build analytics functions from zero: the team, the stack, the governance, and the strategy.',
  summary: [
    'Data and analytics leader with over 10 years of continuous growth across Tier-1 banking, digital banking, and technology. A builder at heart, recognised for creating high-performing analytics teams from the ground up, developing data products that directly shape business strategy, and driving measurable commercial outcomes through people-first leadership.',
    'Technically fluent across the modern data stack and cloud platforms, with a track record of designing enterprise-grade solutions that scale. Combines deep product thinking with hands-on technical capability and a natural ability to bridge engineering teams with executive stakeholders.',
  ],
}

export const metrics: Metric[] = [
  { value: 10, suffix: '+', label: 'Years',         sublabel: 'of progressive leadership' },
  { value: 5,  suffix: '',  label: 'Industries',    sublabel: 'banking, education & tech' },
  { value: 40, suffix: '%', label: 'Reduction',     sublabel: 'in manual reporting workload' },
  { value: 3,  suffix: '',  label: 'Squads built',  sublabel: 'from zero with full governance' },
]

export const experience: Role[] = [
  {
    id: 1, title: 'Data Analytics Lead', company: 'UBank Pty Ltd (NAB Group)',
    period: 'Feb 2023 – Present', current: true, accent: 'sky',
    summary: "Appointed to build UBank's analytics function following the bank's post-merger scale-up. Accountable for enterprise data strategy, squad leadership, BI modernisation, and C-suite intelligence.",
    achievements: [
      'Built the analytics function from zero: defined squad operating rhythms, coding standards, QA protocols, and governance frameworks now embedded as standard practice.',
      'Architected enterprise data strategy migrating legacy pipelines to a Modern Data Stack (Databricks, Power BI, SQL), reducing time-to-insight by over 60%.',
      'Designed automated data products giving executives real-time visibility across risk exposure, customer acquisition trends, and business performance.',
      'Led automation initiatives eliminating manual reporting bottlenecks and materially improving SLA turnaround times across multiple business units.',
      'Championed pragmatic AI integration, deploying AI-as-a-Service tooling with ethical use standards and regulatory alignment.',
    ],
    tech: ['Databricks', 'Power BI', 'SQL', 'Python', 'AWS', 'Power Platform', 'Power Automate'],
    stat: { value: '60%', label: 'faster time-to-insight' },
  },
  {
    id: 2, title: 'Technology Lead, Operations Analytics', company: 'The University of Sydney',
    period: 'Apr 2022 – Jan 2023', current: false, accent: 'violet',
    summary: 'Engaged as Visualisation SME and technical lead to overhaul analytics and reporting infrastructure across multiple faculties and administrative divisions.',
    achievements: [
      'Redesigned visualisation frameworks using Power BI and SQL, enabling real-time data-backed decision-making across university operations.',
      'Automated key workflows using Power Automate, reducing manual administrative workload by 40% and freeing staff for higher-value activities.',
      'Implemented end-to-end data quality controls and lineage documentation, significantly improving confidence in reporting outputs.',
    ],
    tech: ['Power BI', 'SQL', 'Python', 'Power Automate', 'Azure'],
    stat: { value: '40%', label: 'reduction in manual workload' },
  },
  {
    id: 3, title: 'Senior Associate → Decision Analyst', company: 'Commonwealth Bank of Australia',
    period: 'Nov 2017 – Apr 2022', current: false, accent: 'emerald',
    summary: 'Five-year progressive tenure across Data & Decision Science, retail banking, FX products, and customer acquisition.',
    achievements: [
      'Built executive-level sales scorecards exposing hidden growth levers, contributing to a 15% revenue uplift across key product portfolios.',
      'Developed behavioural dashboards enabling a 20% uplift in customer growth and a 10% increase in FX-related revenue.',
      'Designed Next Best Conversation (NBC) algorithms in partnership with marketing, maximising product conversion and customer retention.',
      'Built predictive business case models for high-budget marketing campaigns, contributing to a 15% improvement in campaign ROI.',
      'Mentored and upskilled junior analysts in advanced data modelling, BI standards, and stakeholder engagement.',
    ],
    tech: ['SQL', 'Python', 'Tableau', 'Power BI', 'Advanced Excel'],
    stat: { value: '15%', label: 'revenue uplift' },
  },
  {
    id: 4, title: 'Decision Analyst', company: 'BizCubed Pty Ltd',
    period: 'Aug 2016 – Nov 2017', current: false, accent: 'amber',
    summary: 'Boutique data analytics consultancy delivering client-facing analytics, infrastructure monitoring, and data transformation solutions.',
    achievements: [
      'Enhanced client productivity by 15% through redesigned reporting pipelines using Pentaho data analytics tooling.',
      'Designed end-to-end data transformation workflows converting raw operational data into business-ready outputs.',
      'Reduced system downtime by 20% through proactive infrastructure monitoring.',
    ],
    tech: ['Pentaho', 'SQL', 'Data Transformation', 'ETL'],
    stat: { value: '20%', label: 'less system downtime' },
  },
  {
    id: 5, title: 'Systems Engineer', company: 'Adobe Systems (via Tata Consultancy Services)',
    period: 'Dec 2012 – Jun 2015', current: false, accent: 'rose',
    summary: "Delivered enterprise systems reliability and subscription management for Adobe's global SaaS platform within TCS managed services, Mumbai.",
    achievements: [
      'Engineered monitoring protocols reducing system breaches by 30% and recovering $17,200 annually through resolution of critical billing discrepancies.',
      'Built operational dashboards providing real-time visibility into platform health and subscription metrics.',
      'Designed preventive controls reducing recurring incident frequency by over 25%.',
    ],
    tech: ['System Monitoring', 'Dashboards', 'Billing Analytics', 'Incident Management'],
    stat: { value: '30%', label: 'fewer system breaches' },
  },
]

export const competencies = [
  { label: 'Data Strategy',        score: 95 },
  { label: 'People Leadership',    score: 92 },
  { label: 'Commercial Analytics', score: 90 },
  { label: 'Product Development',  score: 85 },
  { label: 'Technical Stack',      score: 85 },
  { label: 'AI & Governance',      score: 80 },
]

export const techStack: Record<string, string[]> = {
  Expert:     ['Power BI', 'SQL', 'Databricks'],
  Proficient: ['Python', 'AWS', 'Azure', 'Power Platform', 'Power Automate', 'Tableau'],
  Familiar:   ['React', 'Git', 'Pentaho / ETL'],
}

export const certifications: Cert[] = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Certified Scrum Master (CSM)',  issuer: 'Scrum Alliance',       year: '2023' },
]

export const education: Degree[] = [
  { degree: 'Master of Information Technology', major: 'Software Engineering', institution: 'The University of Sydney', period: '2015 – 2017', detail: 'GPA 74.02%' },
  { degree: 'Master of IT Management', major: 'Dual-degree program', institution: 'The University of Sydney', period: '2015 – 2017' },
]

export const projects: Project[] = [
  {
    id: 1, title: 'SmartMeals', subtitle: 'AI Family Meal Planner',
    description: "AI-powered meal planning built to eliminate the 'what's for dinner?' chaos by generating toddler-friendly, nutritionally balanced weekly menus and shopping lists for a busy working parent.",
    features: ['Weekly plan tailored to toddler nutritional milestones', 'One-click grouped shopping list', 'Pantry inventory to reduce food waste', 'Cuisine variety and allergy settings'],
    tech: ['React', 'Claude AI API', 'Node.js', 'TypeScript'],
    status: 'In Progress', github: 'https://github.com/Visa2691',
  },
  {
    id: 2, title: 'FamilyTrip', subtitle: 'AI Travel Planning Checklist',
    description: 'AI-orchestrated travel planner for families with young children: packing lists, day-by-day itineraries, toddler-essentials checklists, and restaurant shortlists.',
    features: ['Destination-aware packing list', 'Toddler essentials and safety kit', 'Itinerary with nap windows built in', 'Family-friendly restaurant finder'],
    tech: ['React', 'Claude AI API', 'TypeScript', 'Tailwind CSS'],
    status: 'Coming Soon', github: 'https://github.com/Visa2691',
  },
]

export const hobbies: Hobby[] = [
  { name: 'Pilates',          icon: '◎', description: 'Reformer Pilates 3× a week. My anchor for mental clarity, the one hour that is entirely mine.' },
  { name: 'Strength Training',icon: '△', description: 'Progressively overloading and chasing PRs. The same data-driven mindset, applied to fitness.' },
  { name: 'Gardening',        icon: '◈', description: 'Growing herbs, vegetables, and flowers. A slow, patient practice and the perfect counterweight to a fast career.' },
  { name: 'Painting',         icon: '◻', description: 'Watercolours and acrylic on weekends. A creative outlet that keeps the right brain active.' },
  { name: 'Carnatic Music',   icon: '♩', description: 'A lifelong classical music practice. Taught me the value of discipline, rhythm, and listening deeply.' },
]
