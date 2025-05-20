export interface ToolCard {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
  duration: string;
  category: string;
  toolCard?: ToolCard;
}

export const videosData: Video[] = [
  {
    id: 1,
    title: "PyCript Tool Demo - Client-Side Encryption Bypass",
    description: "Comprehensive demonstration of the PyCript tool for testing and bypassing client-side encryption implementations in web applications. Learn how to use PyCript's advanced features for security testing and discover how to effectively identify and bypass various client-side encryption mechanisms.",
    thumbnail: "/assets/pycript.png",
    videoUrl: "https://youtu.be/J8KE5VR8yDk",
    date: "Mar 2023",
    duration: "15:20",
    category: "Tool Demo",
    toolCard: {
      name: "PyCript",
      description: "A powerful security testing framework designed for analyzing and bypassing client-side encryption implementations.",
      features: [
        "Automated encryption detection",
        "Custom encryption bypass scripts",
        "Integration with Burp Suite",
        "Real-time traffic analysis"
      ],
      technologies: ["Python", "Cryptography", "Web Security"],
      githubUrl: "https://github.com/Anof-cyber/PyCript"
    }
  }
];
