export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  live: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  color: string;
  skills: { name: string; level: number }[];
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Simpplr – Salesforce to AWS Customer Data Migration Validation Framework',
    description: 'Designed and developed a centralized, reusable data validation framework to automate verification of 800+ customer migrations from Salesforce to AWS. The framework captured source data from Salesforce and validated against migrated AWS data, identifying discrepancies and reducing manual validation effort. Built automated source-to-target data validation logic with repeatable execution across migration cycles.',
    image: 'https://picsum.photos/seed/migration/800/600',
    technologies: ['Salesforce', 'AWS', 'Data Validation', 'Automation Framework', 'Migration Testing'],
    category: 'Data Migration',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'United Airlines – UAL Dotcom Cloud Migration Performance Testing',
    description: 'Led performance testing for United Airlines\' on-premises to AWS cloud migration initiative. Conducted multiple performance testing cycles using LoadRunner to compare application behavior, response times, throughput, and resource utilization between environments. Used Datadog and Dynatrace for cloud performance monitoring and comparative analysis to support migration readiness decisions.',
    image: 'images/united-airlines.jpg',
    technologies: ['LoadRunner', 'ALM', 'Datadog', 'Dynatrace', 'AWS', 'Performance Testing'],
    category: 'Cloud Migration',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Mitchell 1 – Automotive Software Performance Testing',
    description: 'Performed comprehensive performance testing for automotive repair software platform. Developed LoadRunner scripts with parameterization, correlation, and dynamic data handling. Executed load, stress, and performance scenarios using Performance Center. Analyzed bottlenecks using Dynatrace, Splunk, Oracle AWR, and LoadRunner Analysis. Collaborated cross-functionally with development, infrastructure, and database teams.',
    image: 'https://picsum.photos/seed/automotive/800/600',
    technologies: ['LoadRunner', 'Performance Center', 'Dynatrace', 'Splunk', 'Oracle AWR', 'Performance Testing'],
    category: 'Performance Testing',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'RSuite – CCMS Performance Testing',
    description: 'Executed performance testing for Component Content Management System (CCMS) platform. Developed LoadRunner scripts simulating business workflows and user interactions. Designed workload scenarios and executed tests using LoadRunner Controller. Monitored application performance with AppDynamics and managed test execution through ALM. Delivered performance reports with findings and optimization recommendations.',
    image: 'images/Rsuite.jpg',
    technologies: ['LoadRunner', 'AppDynamics', 'ALM', 'Performance Testing', 'Content Management'],
    category: 'Performance Testing',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    role: 'Test Engineer',
    company: 'Simpplr',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Spearheading AI performance testing initiatives for LLM-powered applications. Managing Kubernetes architecture for pod auto-scaling and response time optimization. Building comprehensive observability stacks for AI/ML workloads.',
    technologies: ['JMeter', 'K6', 'Kubernetes', 'Langfuse', 'Jenkins', 'AWS', 'GitHub', 'Coralogix', 'GroundCover', 'Grafana', 'CloudWatch', 'Jira'],
    achievements: [
      'Established new K6 performance testing framework for AI applications, reducing test creation time by 60%',
      'Identified and resolved critical bottlenecks including connection pinning issues and RDS Proxy misconfigurations',
      'Discovered and fixed memory leak in LLM orchestrator application, improving stability by 40%',
      'Designed and implemented auto-scaling policies for Kubernetes pods handling variable AI inference loads',
      'Built end-to-end observability pipeline using Coralogix, GroundCover, and Grafana for real-time performance insights',
    ],
  },
  {
    role: 'SQA Analyst',
    company: 'RSI Content Solutions India Pvt Ltd',
    period: 'Aug 2022 - Jun 2023',
    location: 'Chennai, India',
    description: 'Led performance testing and engineering initiatives for on-premise infrastructure. Conducted deep bottleneck analysis across application and database layers, establishing performance baselines and optimization strategies.',
    technologies: ['JMeter', 'Grafana', 'JUnit', 'PerfMon', 'AppDynamics', 'Linux'],
    achievements: [
      'Built performance testing practice from scratch, defining processes, templates, and standards',
      'Independently managed end-to-end performance engineering lifecycle for multiple applications',
      'Identified and resolved critical infrastructure bottlenecks on-premise, improving throughput by 35%',
      'Established continuous performance monitoring with Grafana and PerfMon for production visibility',
      'Designed and executed complex workload models simulating peak production traffic patterns',
    ],
  },
  {
    role: 'Senior Quality Assurance Engineer',
    company: 'Genisys Group',
    period: '2021 - 2022',
    location: 'Remote',
    description: 'Maintained and extended enterprise performance testing framework using LoadRunner. Developed complex test scripts for business-critical applications and collaborated with stakeholders on AWS migration performance validation.',
    technologies: ['LoadRunner', 'Fiddler', 'DataDog', 'AppDynamics', 'Postman', 'AWS'],
    achievements: [
      'Created and maintained performance scripts for complex business scenarios with 95%+ accuracy',
      'Received client commendation for well-structured, maintainable test scripts and comprehensive reporting',
      'Delivered on-time performance test reports with detailed root cause analysis and optimization recommendations',
      'Validated application performance during AWS migration, ensuring zero regression in response times',
      'Integrated AppDynamics and DataDog for real-time performance monitoring during test execution',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Performance Testing Tools',
    color: '#0ea5e9',
    skills: [
      { name: 'JMeter', level: 95 },
      { name: 'K6', level: 90 },
      { name: 'LoadRunner', level: 85 },
      { name: 'Gatling', level: 75 },
      { name: 'Locust', level: 70 },
      { name: 'Artillery', level: 65 },
    ],
  },
  {
    name: 'Observability & Monitoring',
    color: '#22c55e',
    skills: [
      { name: 'Grafana', level: 90 },
      { name: 'AppDynamics', level: 85 },
      { name: 'DataDog', level: 80 },
      { name: 'Coralogix', level: 85 },
      { name: 'GroundCover', level: 80 },
      { name: 'CloudWatch', level: 85 },
      { name: 'Prometheus', level: 75 },
      { name: 'Langfuse', level: 70 },
    ],
  },
  {
    name: 'Infrastructure & Cloud',
    color: '#f59e0b',
    skills: [
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Jenkins', level: 85 },
      { name: 'Linux/Shell', level: 85 },
      { name: 'Terraform', level: 70 },
      { name: 'CI/CD Pipelines', level: 85 },
    ],
  },
  {
    name: 'Scripting & Automation',
    color: '#ef4444',
    skills: [
      { name: 'Groovy', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Shell Scripting', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'JUnit/TestNG', level: 75 },
    ],
  },
  {
    name: 'AI/ML Performance',
    color: '#8b5cf6',
    skills: [
      { name: 'LLM Orchestration', level: 80 },
      { name: 'Token Optimization', level: 75 },
      { name: 'RAG Evaluation', level: 70 },
      { name: 'Langfuse Tracing', level: 80 },
      { name: 'Prompt Engineering', level: 70 },
      { name: 'Model Benchmarking', level: 75 },
    ],
  },
];

export const contactInfo = [
  { label: 'Email', value: 'rsganesh2088@gmail.com', href: 'mailto:rsganesh2088@gmail.com' },
  { label: 'Location', value: 'Hyderabad, India', href: null },
  { label: 'Phone', value: '+91 90438 44723', href: 'tel:+919043844723' },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/satyaganesh' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rs-ganesh-bb349b246' },
  { name: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029VaBHffzDzgT52MBtsl0s' },
];

export const siteConfig = {
  name: 'Satya Ganesh',
  title: 'AI Performance Test Engineer',
  description: 'Experienced Software Engineer (Performance) with a demonstrated history of working in the Information Technology and Services Industry. Strong experience in Performance Testing using LoadRunner and hands-on with JMeter. Working experience in Airline Domain, eCommerce, and Content Management Systems. Involved in all phases of the Performance Testing Life Cycle. Analyzed Performance Test Business Scenarios.',
  url: 'https://portfolio.example.com',
  ogImage: 'https://portfolio.example.com/og.jpg',
  links: {
    github: 'https://github.com/satyaganesh',
    linkedin: 'https://www.linkedin.com/in/rs-ganesh-bb349b246',
    twitter: 'https://twitter.com',
  },
};