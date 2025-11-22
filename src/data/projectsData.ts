export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  category: string;
  demo?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "InterceptSuite",
    description: "Cross-platform MITM proxy application for non-HTTP protocols supporting TCP, TLS, UDP, and DTLS. The only proxy app with TLS upgrade MITM support for any protocol including STARTTLS, PostgreSQL, and custom protocols. Features real-time traffic analysis and manipulation, SOCKS5 proxy integration, certificate authority management, and a modern GUI interface. Designed for security testing where traditional web proxies fall short.",
    technologies: [
      "C/C++",
      "C#",
      ".NET",
      "OpenSSL",
      "SOCKS5",
      "TLS/SSL",
      "Windows API",
      "macOS",
      "Linux",
      "Network Security"
    ],
    link: "https://github.com/InterceptSuite/InterceptSuite",
    image: "/assets/interceptsuite.jpg",
    category: "Security Tools"
  },
  {
    id: 2,
    title: "ProxyBridge",
    description: "Lightweight, open-source universal proxy client (Proxifier alternative) that provides transparent proxy routing for applications on Windows and macOS. Redirects TCP and UDP traffic from specific processes through SOCKS5 or HTTP proxies, with the ability to route, block, or allow traffic on a per-application basis. Works at the system level, making it compatible with proxy-unaware applications without requiring any configuration changes.",
    technologies: [
      "C/C++",
      "C#",
      ".NET",
      "Swift",
      "TCP",
      "UDP",
      "HTTP Proxy",
      "SOCKS5",
      "Windows",
      "macOS",
      "Network Security"
    ],
    link: "https://github.com/InterceptSuite/ProxyBridge",
    image: "/assets/proxybridge.jpg",
    category: "Security Tools"
  },
  {
    id: 3,
    title: "APTRS",
    description: "Automated Penetration Testing Reporting System (APTRS) - A comprehensive platform for managing security assessments and generating professional reports. Features include customizable report templates (PDF/DOCX/Excel), vulnerability management database, customer dashboard portal, project tracking, and dynamic content management. Live demo available at aptrs.com.",
    technologies: [
      "Python",
      "Django",
      "TypeScript",
      "React",
      "Vite",
      "Docker",
      "REST APIs",
      "PostgreSQL",
      "CI/CD"
    ],
    link: "https://github.com/APTRS/APTRS",
    image: "/assets/aptrs.png",
    category: "Security Tools",
    demo: "https://live.aptrs.com"
  },
  {
    id: 4,
    title: "PyCript",
    description: "Advanced Burp Suite extension for handling encrypted traffic during penetration testing. Features include real-time request/response encryption/decryption, support for custom encryption logic in multiple languages (Python, Go, Node.js, C, Bash), automated scanning capabilities, and flexible key/IV management. Enables seamless testing of encrypted applications with tools like SQL Map and Burp Scanner.",
    technologies: [
      "Java",
      "Python",
      "Burp Suite",
      "Cryptography",
      "Multi-language Support",
      "Web Security",
    ],
    link: "https://github.com/Anof-cyber/PyCript",
    image: "/assets/pycript.jpg",
    category: "Burp Suite Extensions"
  },
  {
    id: 5,
    title: "PyCript WebSocket",
    description: "Burp Suite extension for testing encrypted WebSocket communications. Features real-time WebSocket message encryption/decryption, custom encryption logic support in multiple languages (Python, Go, Node.js, C, Bash), and seamless integration with Burp's testing capabilities. Enables security testing of WebSocket applications using custom encryption schemes.",
    technologies: [
      "Java",
      "WebSocket",
      "Burp Suite",
      "Cryptography",
      "Web Security"
    ],
    link: "https://github.com/Anof-cyber/PyCript-WebSocket",
    image: "/assets/pycript.jpg",
    category: "Burp Suite Extensions"
  },
  {
    id: 6,
    title: "Pentest Mapper",
    description: "Innovative Burp Suite extension that streamlines application security testing workflow by integrating custom checklists with request logging. Features include API flow mapping, vulnerability tracking with custom checklist integration, and comprehensive test case management. Supports automated data persistence and checklist customization for efficient penetration testing.",
    technologies: [
      "Python",
      "Burp Suite",
      "Web Security",
      "API Testing",
      "Security Automation"
    ],
    link: "https://github.com/Anof-cyber/Pentest-Mapper",
    image: "/assets/pentest-mapper.jpg",
    category: "Burp Suite Extensions"
  },
  {
    id: 7,
    title: "CryptoJS",
    description: "Simple utility web tool for testing client-side encryption/decryption operations using the CryptoJS library. Essential for validating and troubleshooting applications that implement client-side encryption with CryptoJS.",
    technologies: ["JavaScript", "CryptoJS", "Cryptography", "Web Security"],
    link: "https://anof-cyber.github.io/CryptoJS/",
    image: "/assets/CryptoJS.jpg",
    category: "Security Tools",
    demo: "https://anof-cyber.github.io/CryptoJS/"
  },
  {
    id: 8,
    title: "Crylo TryHackMe Room",
    description: "Created an interactive cybersecurity challenge room on TryHackMe platform focused on cryptography and security concepts.",
    technologies: ["Cryptography", "Security Training", "CTF"],
    link: "https://tryhackme.com/room/crylo4a",
    image: "/assets/Crylo.jpg",
    category: "Training"
  },
  {
    id: 9,
    title: "ParaForge",
    description: "Simple and practical Burp Suite extension for extracting parameters and endpoints from HTTP requests to create custom wordlists for fuzzing and enumeration. Streamlines the process of gathering target-specific test data during penetration testing.",
    technologies: ["Python", "Burp Suite", "Web Security", "Fuzzing"],
    link: "https://github.com/Anof-cyber/ParaForge",
    image: "/assets/ParaForge.jpg",
    category: "Burp Suite Extensions"
  },
  {
    id: 10,
    title: "MobSecco",
    description: "Python tool for analyzing and cloning Cordova-based Android applications. Features include source code extraction, debug APK creation, and detection of outdated Cordova library versions for security assessment purposes.",
    technologies: ["Python", "Android", "Cordova", "Mobile Security","JavaScript"],
    link: "https://github.com/Anof-cyber/MobSecco",
    image: "/assets/MobSecco.jpg",
    category: "Mobile Security"
  },
  {
    id: 11,
    title: "Androset",
    description: "Automation script for configuring Android devices for Burp Suite interception. Automates certificate installation and IP table modifications to redirect all Android traffic through Burp Suite proxy, streamlining mobile app security testing setup.",
    technologies: ["Android", "Scripting", "Burp Suite", "Python"],
    link: "https://github.com/Anof-cyber/Androset",
    image: "/assets/Androset.jpg",
    category: "Mobile Security"
  }
];