export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Tool {
  name: string;
  icon: string;
}

export const skillsData: SkillCategory[] = [
  {
    id: 2,
    title: "Offensive Security",
    icon: "",
    skills: [
      {
        id: 201,
        name: "Web Application Security",
        proficiency: 95,
        level: "expert",
        description: "Advanced penetration testing of web applications and APIs, focusing on authentication, authorization, and business logic flaws."
      },
      {
        id: 203,
        name: "API Security",
        proficiency: 90,
        level: "expert",
        description: "Deep expertise in REST/GraphQL API testing, focusing on authentication, rate limiting, and data validation."
      },
      {
        id: 202,
        name: "Mobile Security",
        proficiency: 90,
        level: "expert",
        description: "Comprehensive security assessments of Android and iOS applications, including reverse engineering and runtime analysis."
      },
      {
        id: 204,
        name: "Thick Client Security",
        proficiency: 90,
        level: "expert",
        description: "Security assessment of desktop applications across Windows, macOS, and Linux platforms, including binary analysis and runtime security testing."
      },
      {
        id: 209,
        name: "Network Penetration Testing",
        proficiency: 85,
        level: "advanced",
        description: "Internal and external network assessments, vulnerability validation, and exploitation across on-prem and cloud networks."
      },
      {
        id: 210,
        name: "Security Research",
        proficiency: 85,
        level: "advanced",
        description: "Vulnerability research, tooling, and published articles that turn real pentest gaps into reusable techniques."
      }
    ]
  },
  {
    id: 3,
    title: "Product & Application Security",
    icon: "",
    skills: [
      {
        id: 205,
        name: "Product Security",
        proficiency: 88,
        level: "expert",
        description: "Embedding security into the software development lifecycle through threat modeling, security design reviews, and working with engineering teams to build secure-by-default products."
      },
      {
        id: 206,
        name: "Threat Modeling",
        proficiency: 85,
        level: "advanced",
        description: "Identifying and prioritizing potential security threats during the design phase using STRIDE and other methodologies to proactively reduce attack surface."
      },
      {
        id: 207,
        name: "Secure SDLC",
        proficiency: 85,
        level: "advanced",
        description: "Integrating security practices across all phases of the software development lifecycle from requirements and design through deployment and maintenance."
      },
      {
        id: 208,
        name: "Secure Code Review",
        proficiency: 85,
        level: "advanced",
        description: "Manual and automated source code analysis to identify security vulnerabilities, insecure patterns, and logic flaws across multiple languages and frameworks."
      },
      {
        id: 211,
        name: "Security Architecture Review",
        proficiency: 85,
        level: "advanced",
        description: "Assessment of system architectures, secure design patterns, and security control implementation review."
      },
      {
        id: 212,
        name: "SAST / DAST / SCA",
        proficiency: 85,
        level: "advanced",
        description: "Selecting, tuning, and integrating static, dynamic, and dependency scanning so findings reach engineers with low noise."
      }
    ]
  },
  {
    id: 4,
    title: "Cloud, DevSecOps & Infrastructure",
    icon: "",
    skills: [
      {
        id: 401,
        name: "AWS",
        proficiency: 85,
        level: "advanced",
        description: "Designing, building, and securing AWS workloads: IAM, VPC networking, and account posture across security and platform concerns."
      },
      {
        id: 402,
        name: "Terraform & IaC",
        proficiency: 82,
        level: "advanced",
        description: "Provisioning and managing cloud infrastructure as code with Terraform, including reusable modules and policy-as-code guardrails."
      },
      {
        id: 403,
        name: "CI/CD Pipelines",
        proficiency: 85,
        level: "advanced",
        description: "Building and hardening CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins) with security gates baked in."
      },
      {
        id: 404,
        name: "Docker & Kubernetes",
        proficiency: 78,
        level: "advanced",
        description: "Containerizing and orchestrating applications, plus securing images, registries, and cluster configuration."
      },
      {
        id: 405,
        name: "Cloud Security Posture",
        proficiency: 85,
        level: "advanced",
        description: "Managing AWS security posture with GuardDuty, Security Hub, and CSPM tooling such as Prowler and ScoutSuite."
      },
      {
        id: 406,
        name: "Networking",
        proficiency: 80,
        level: "advanced",
        description: "Network design, segmentation, firewalls, and access controls across on-prem and cloud environments."
      },
      {
        id: 407,
        name: "Linux & System Administration",
        proficiency: 82,
        level: "advanced",
        description: "Operating, hardening, and automating Linux systems that run production workloads and tooling."
      }
    ]
  },
  {
    id: 1,
    title: "Software Engineering",
    icon: "",
    skills: [
      {
        id: 101,
        name: "Python",
        proficiency: 85,
        level: "expert",
        description: "Primary language for security tool development, automation, and backend web development with Django/Flask."
      },
      {
        id: 103,
        name: "TypeScript",
        proficiency: 75,
        level: "advanced",
        description: "Modern web application development with React, security tooling, and type-safe application development."
      },
      {
        id: 104,
        name: "JavaScript",
        proficiency: 75,
        level: "advanced",
        description: "Frontend development, browser extensions, and security automation scripts."
      },
      {
        id: 107,
        name: "Swift",
        proficiency: 65,
        level: "advanced",
        description: "iOS and macOS application development and security assessment of Swift-based mobile applications."
      },
      {
        id: 108,
        name: "C#",
        proficiency: 65,
        level: "advanced",
        description: ".NET application development and security testing of Windows and cross platform desktop applications."
      },
      {
        id: 105,
        name: "Bash",
        proficiency: 75,
        level: "advanced",
        description: "Shell scripting for security automation, infrastructure tasks, and system administration."
      },
      {
        id: 102,
        name: "Java",
        proficiency: 65,
        level: "advanced",
        description: "Development of Burp Suite extensions and Android security tools."
      },
      {
        id: 106,
        name: "C",
        proficiency: 50,
        level: "intermediate",
        description: "Low-level programming for reverse engineering, native tooling, and system-level security work."
      }
    ]
  }
];

export const toolsList: Tool[] = [
  { name: "Burp Suite",              icon: "" },
  { name: "Metasploit",              icon: "" },
  { name: "Nmap",                    icon: "" },
  { name: "OWASP ZAP",               icon: "" },
  { name: "Frida",                   icon: "" },
  { name: "MobSF",                   icon: "" },
  { name: "Objection",               icon: "" },
  { name: "jadx",                    icon: "" },
  { name: "Ghidra",                  icon: "" },
  { name: "Wireshark",               icon: "" },
  { name: "Snyk",                    icon: "" },
  { name: "SonarQube",               icon: "" },
  { name: "Semgrep",                 icon: "" },
  { name: "OWASP Dependency Check",  icon: "" },
  { name: "AWS",                     icon: "" },
  { name: "Terraform",               icon: "" },
  { name: "Docker",                  icon: "" },
  { name: "Kubernetes",              icon: "" },
  { name: "GitHub Actions",          icon: "" },
  { name: "GitLab CI",               icon: "" },
  { name: "Jenkins",                 icon: "" },
  { name: "Ansible",                 icon: "" },
  { name: "AWS Security Hub",        icon: "" },
  { name: "AWS GuardDuty",           icon: "" },
  { name: "AWS Inspector",           icon: "" },
  { name: "Prowler",                 icon: "" },
  { name: "ScoutSuite",              icon: "" },
  { name: "Git",                     icon: "" },
  { name: "Linux",                   icon: "" },
  { name: "Python",                  icon: "" },
  { name: "TypeScript",              icon: "" },
  { name: "Kali Linux",              icon: "" }
];