export interface Project {
  id: number;
  title: string;
  shortTitle: string;
  domain: string;
  overview: string;
  strategy: string;
  tools: string[];
  challenges: string;
  outcome: string;
  image: string;
  category: string;
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
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Simpplr Performance Engineering',
    shortTitle: 'Simpplr',
    domain: 'AI / SaaS Platform',
    overview: 'Centralized K6 performance testing framework with reusable TypeScript modules, automated reporting, and CI/CD integration for AI-powered applications.',
    strategy: 'Entity-based execution model with configurable workload executors, baseline comparison, and InfluxDB + Grafana observability. GitHub Actions and Jenkins support for continuous performance validation.',
    tools: ['K6', 'TypeScript', 'InfluxDB', 'Grafana', 'GitHub Actions', 'Jenkins'],
    challenges: 'Connection pinning issues, RDS Proxy misconfigurations, and memory leaks in LLM orchestrator applications under variable AI inference loads.',
    outcome: 'Reduced test creation time through reusable framework. Established observability pipeline for real-time AI/ML performance insights.',
    image: 'images/profile.jpg',
    category: 'AI Performance',
    featured: true,
  },
  {
    id: 2,
    title: 'United Airlines — Cloud Migration Performance',
    shortTitle: 'United Airlines',
    domain: 'Airline / Cloud Migration',
    overview: 'Performance testing of on-premises to AWS migration. Comparative testing across environments to support migration readiness decisions.',
    strategy: 'Multiple performance testing cycles using LoadRunner comparing application behavior, response times, throughput, and resource utilization. Datadog and Dynatrace for cloud performance monitoring.',
    tools: ['LoadRunner', 'ALM', 'Datadog', 'Dynatrace', 'AWS'],
    challenges: 'Ensuring zero performance regression during migration. Comparative analysis across on-prem and cloud infrastructure.',
    outcome: 'Supported data-driven migration readiness decisions through comparative performance analysis.',
    image: 'images/united-airlines.jpg',
    category: 'Cloud Migration',
    featured: true,
  },
  {
    id: 3,
    title: 'Mitchell 1 — Automotive Performance',
    shortTitle: 'Mitchell 1',
    domain: 'Automotive Software',
    overview: 'Comprehensive performance testing for automotive repair software platform. Load, stress, and endurance scenarios.',
    strategy: 'LoadRunner scripts with parameterization, correlation, and dynamic data handling. Performance Center for scenario execution. Dynatrace, Splunk, Oracle AWR for bottleneck analysis.',
    tools: ['LoadRunner', 'Performance Center', 'Dynatrace', 'Splunk', 'Oracle AWR'],
    challenges: 'Cross-functional collaboration with development, infrastructure, and database teams. Complex business workflows with dynamic data.',
    outcome: 'Detailed root cause analysis and optimization recommendations delivered through comprehensive performance reports.',
    image: 'https://picsum.photos/seed/automotive/800/600',
    category: 'Performance Testing',
    featured: false,
  },
  {
    id: 4,
    title: 'RSuite — CCMS Performance',
    shortTitle: 'RSuite',
    domain: 'Content Management',
    overview: 'Performance testing for Component Content Management System (CCMS) platform. Web and web services testing.',
    strategy: 'LoadRunner scripts simulating business workflows. Workload modeling and test data preparation. AppDynamics for monitoring. ALM for test execution management.',
    tools: ['LoadRunner', 'AppDynamics', 'ALM'],
    challenges: 'Complex content management workflows with varied user interactions and data patterns.',
    outcome: 'Performance reports with findings and optimization recommendations for the CCMS platform.',
    image: 'images/Rsuite.jpg',
    category: 'Performance Testing',
    featured: false,
  },
  {
    id: 5,
    title: 'AI & LLM Performance Testing',
    shortTitle: 'AI / LLM',
    domain: 'AI / Machine Learning',
    overview: 'Performance testing and experimentation for AI/LLM-powered applications. Concurrency, burst traffic, latency, and resource utilization analysis.',
    strategy: 'Mock-based performance testing, concurrency testing, burst traffic simulation. Langfuse for LLM tracing. Kubernetes pod auto-scaling validation.',
    tools: ['K6', 'JMeter', 'Langfuse', 'Kubernetes', 'Grafana', 'Coralogix'],
    challenges: 'Variable AI inference loads, token optimization, memory leaks in orchestrator applications, and auto-scaling policy design.',
    outcome: 'End-to-end observability pipeline. Auto-scaling policies for variable AI inference loads. Memory leak identification and resolution.',
    image: 'https://picsum.photos/seed/ai-llm/800/600',
    category: 'AI Performance',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    role: 'Test Engineer',
    company: 'Simpplr',
    period: '2023 — Present',
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
    period: 'Aug 2022 — Jun 2023',
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
    period: '2021 — 2022',
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
    name: 'Performance Testing',
    color: '#c9a96e',
    skills: ['K6', 'LoadRunner', 'JMeter', 'Gatling', 'Locust', 'Artillery', 'Performance Center'],
  },
  {
    name: 'Automation',
    color: '#a8a49e',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Reusable Frameworks', 'CI/CD Automation', 'Groovy', 'Shell Scripting'],
  },
  {
    name: 'Observability',
    color: '#cfcac2',
    skills: ['Grafana', 'InfluxDB', 'Datadog', 'AppDynamics', 'Dynatrace', 'CloudWatch', 'Coralogix', 'GroundCover', 'Langfuse', 'Prometheus', 'Splunk'],
  },
  {
    name: 'Cloud & Infrastructure',
    color: '#efebe4',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'Linux', 'Microservices', 'Distributed Systems'],
  },
  {
    name: 'API Testing',
    color: '#f7f5f1',
    skills: ['Postman', 'REST APIs', 'HTTP', 'WebSocket Testing', 'Fiddler'],
  },
  {
    name: 'Engineering',
    color: '#c9a96e',
    skills: ['Performance Analysis', 'Workload Modelling', 'Bottleneck Analysis', 'Capacity Planning', 'Baseline Analysis', 'Stress Testing', 'Endurance Testing', 'Scalability Testing', 'Regression Testing'],
  },
  {
    name: 'AI Performance',
    color: '#a8a49e',
    skills: ['LLM Testing', 'AI Application Performance', 'Concurrency Testing', 'Burst Testing', 'Mock-Based Testing', 'AI Agent Performance'],
  },
];

export const pipelineSteps = [
  { num: '01', title: 'Requirement & NFR Analysis', desc: 'Understanding system behavior under load' },
  { num: '02', title: 'Workload Modelling', desc: 'Simulating peak production traffic patterns' },
  { num: '03', title: 'Test Data Preparation', desc: 'Parameterization and dynamic data handling' },
  { num: '04', title: 'Script Development', desc: 'Reusable, modular test scripts' },
  { num: '05', title: 'Test Execution', desc: 'Load, stress, endurance scenarios' },
  { num: '06', title: 'Monitoring & Observability', desc: 'Real-time metrics and distributed tracing' },
  { num: '07', title: 'Bottleneck Identification', desc: 'Root cause analysis across the stack' },
  { num: '08', title: 'Performance Optimization', desc: 'Improving scalability and reliability' },
  { num: '09', title: 'Regression Validation', desc: 'Ensuring zero performance regression' },
  { num: '10', title: 'Reporting & Recommendations', desc: 'Data-driven insights and optimization strategies' },
];

export const aboutChapters = [
  { num: '01', title: 'Performance', desc: 'Understanding system behavior under load.' },
  { num: '02', title: 'Engineering', desc: 'Building reusable performance testing frameworks.' },
  { num: '03', title: 'Observability', desc: 'Finding bottlenecks through data and monitoring.' },
  { num: '04', title: 'Optimization', desc: 'Improving performance, scalability and reliability.' },
];

export const frameworkNodes = [
  { label: 'Test Config', icon: '⚙️' },
  { label: 'Entity', icon: '📦' },
  { label: 'Script', icon: '📝' },
  { label: 'Load Execution', icon: '🚀' },
  { label: 'Metrics', icon: '📊' },
  { label: 'Analysis', icon: '🔍' },
  { label: 'Report', icon: '📋' },
];

export const frameworkFeatures = [
  'Modular TypeScript architecture',
  'Entity-based execution',
  'Reusable test scripts',
  'Configurable workload executors',
  'Test data management',
  'Baseline comparison',
  'HTML reporting',
  'Slack notifications',
  'GitHub Actions integration',
  'Jenkins support',
  'Grafana & InfluxDB integration',
  'Automated performance analysis',
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
  title: 'Performance Test Engineer',
  tagline: 'Engineering performance. Revealing bottlenecks. Building resilience.',
  description: 'Performance Test Engineer focused on performance testing, performance engineering, workload modelling, bottleneck identification, automation frameworks, monitoring, performance optimization and scalable systems.',
  url: 'https://satyaganesh.github.io/satya-ganesh-portfolio/',
  links: {
    github: 'https://github.com/satyaganesh',
    linkedin: 'https://www.linkedin.com/in/rs-ganesh-bb349b246',
  },
};