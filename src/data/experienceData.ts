interface Experience {
  id: number;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  promotions?: {
    title: string;
    date: string;
  }[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Senior Product Security Engineer",
    company: "Cybrilla",
    startDate: "March 2026",
    endDate: "Present",
    description: "Leading product security initiatives across the SDLC from threat modeling and security design reviews to CI/CD pipeline hardening and cloud security. Conducting security assessments for product features, driving AWS security posture improvements, and collaborating with engineering teams to build secure-by-default systems.",
    skills: [
      "Product Security",
      "Threat Modeling",
      "Secure SDLC",
      "Web Application Security",
      "API Security Testing",
      "Secure Code Review",
      "Security Architecture Review",
      "Cloud Security (AWS)",
      "AWS IAM & Policies",
      "AWS Security Hub",
      "CI/CD Pipeline Security",
      "Container Security",
      "Dependency & SCA Review",
      "SAST / DAST Integration",
      "Risk Assessment & Management"
    ]
  },
  {
    id: 2,
    title: "Senior Security Engineer I",
    company: "Security Innovation A Bureau Veritas company",
    startDate: "May 2023",
    endDate: "February 2026",
    description: "Drove enterprise-level security initiatives and led critical assessments for clients. Developed innovative testing methodologies for complex applications. Authored custom security tools and Burp Suite extensions to enhance assessment capabilities.",
    skills: [
      "Web Application Security",
      "Mobile Security (iOS/Android)",
      "API Security Testing",
      "Network Security Assessment",
      "Thick Client Security",
      "Secure Code Review",
      "Security Architecture Review",
      "Infrastructure Security",
      "Android App Testing",
      "iOS App Testing",
      "Windows/macOS/Linux Testing",
      "Security Consulting"
    ],
    promotions: [
      {
        title: "Senior Security Engineer I",
        date: "February 2025 - February 2026"
      },
      {
        title: "Security Engineer III",
        date: "February 2024 - January 2025"
      },
      {
        title: "Security Engineer II",
        date: "May 2023 - January 2024"
      }
    ]
  },
  {
    id: 3,
    title: "Associate Security Analyst",
    company: "Indusface Pvt Ltd",
    startDate: "March 2022",
    endDate: "April 2023",
    description: "Led web and mobile application security assessments for enterprise clients. Developed automated testing tools and handled client communication for project scoping and result presentations. Focused on API security testing and thick client applications.",
    skills: [
      "Web Application Security",
      "Mobile App Security",
      "API Security Testing",
      "Thick Client Security",
      "Client Management",
      "Security Assessment",
      "Technical Documentation"
    ]
  },
  {
    id: 4,
    title: "Security Consultant",
    company: "Security Brigade InfoSec Private Limited",
    startDate: "May 2020",
    endDate: "March 2022",
    description: "Performed security assessments of web applications, mobile apps, and network infrastructure. Created security testing tools and conducted configuration reviews. Handled comprehensive security testing across multiple platforms and technologies.",
    skills: [
      "Web Application Security",
      "Mobile App Security",
      "API Security Testing",
      "Network Security",
      "Infrastructure Assessment",
      "Configuration Review",
      "Security Architecture",
      "Thick Client Testing",
      "Security Consulting"
    ]
  }
];