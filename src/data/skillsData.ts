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
    title: "Application Security",
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
        id: 202,
        name: "Mobile Security",
        proficiency: 90,
        level: "expert",
        description: "Comprehensive security assessments of Android and iOS applications, including reverse engineering and runtime analysis."
      },
      {
        id: 203,
        name: "API Security",
        proficiency: 90,
        level: "expert",
        description: "Deep expertise in REST/GraphQL API testing, focusing on authentication, rate limiting, and data validation."
      },
      {
        id: 204,
        name: "Thick Client Security",
        proficiency: 90,
        level: "expert",
        description: "Security assessment of desktop applications across Windows, macOS, and Linux platforms, including binary analysis and runtime security testing."
      },
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
      }
    ]
  },
  {
    id: 3,
    title: "Infrastructure Security",
    icon: "",
    skills: [
      {
        id: 301,
        name: "Network Security",
        proficiency: 85,
        level: "expert",
        description: "Network infrastructure assessment, vulnerability scanning, and network penetration testing."
      },
      {
        id: 302,
        name: "Security Architecture Review",
        proficiency: 85,
        level: "expert",
        description: "Assessment of system architectures, secure design patterns, and security control implementation review."
      },
      {
        id: 303,
        name: "Configuration Review",
        proficiency: 90,
        level: "expert",
        description: "Security configuration assessment of servers, network devices, and security appliances including hardening validation."
      },
      {
        id: 304,
        name: "Firewall & Network Controls",
        proficiency: 85,
        level: "expert",
        description: "Analysis of firewall rules, network segmentation, access controls, and security device configurations."
      },
      {
        id: 305,
        name: "DevSecOps",
        proficiency: 85,
        level: "expert",
        description: "Integration of security controls in CI/CD pipelines and implementation of security automation."
      }
    ]
  },
  {
    id: 1,
    title: "Languages & Development",
    icon: "",
    skills: [

      {
        id: 101,
        name: "Python",
        proficiency: 80,
        level: "expert",
        description: "Primary language for security tool development, automation, and web application development with Django/Flask."
      },
      {
        id: 103,
        name: "TypeScript",
        proficiency: 70,
        level: "expert",
        description: "Modern web application development with React, security tooling, and type-safe application development."
      },
      {
        id: 104,
        name: "JavaScript",
        proficiency: 70,
        level: "expert",
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
        proficiency: 70,
        level: "advanced",
        description: "Shell scripting for security automation, penetration testing, and system administration."
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
        level: "advanced",
        description: "Low-level programming for reverse engineering, malware analysis, and system-level security assessments."
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
  { name: "OWASP Dependency Check",  icon: "" },
  { name: "Semgrep",                 icon: "" },
  { name: "AWS Security Hub",        icon: "" },
  { name: "AWS IAM",                 icon: "" },
  { name: "AWS GuardDuty",           icon: "" },
  { name: "AWS Inspector",           icon: "" },
  { name: "ScoutSuite",              icon: "" },
  { name: "Prowler",                 icon: "" },
  { name: "Docker",                  icon: "" },
  { name: "Git",                     icon: "" },
  { name: "Jenkins",                 icon: "" },
  { name: "Python",                  icon: "" },
  { name: "TypeScript",              icon: "" },
  { name: "Java",                    icon: "" },
  { name: "Kali Linux",              icon: "" }
];