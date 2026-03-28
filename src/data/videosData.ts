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
    thumbnail: "https://img.youtube.com/vi/J8KE5VR8yDk/maxresdefault.jpg",
    videoUrl: "https://youtu.be/J8KE5VR8yDk",
    date: "Mar 2023",
    duration: "1:25:25",
    category: "Tool Demo"
  },
  {
    id: 2,
    title: "InterceptSuite MITM Setup: Install CA Certificate on Windows",
    description: "Step-by-step guide on setting up InterceptSuite for MITM interception by installing the CA certificate on Windows, enabling you to decrypt and inspect TLS traffic from desktop applications.",
    thumbnail: "https://img.youtube.com/vi/wf8tCvlw_yg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=wf8tCvlw_yg",
    date: "2025",
    duration: "2:06",
    category: "Tool Demo"
  },
  {
    id: 3,
    title: "Intercept Windows Thick Client with InterceptSuite",
    description: "Hands-on demonstration of using InterceptSuite to intercept and analyze network traffic from a Windows thick client application, covering setup, traffic capture, and real-time request manipulation.",
    thumbnail: "https://img.youtube.com/vi/8Gude5ksGZM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=8Gude5ksGZM",
    date: "2025",
    duration: "1:42",
    category: "Tool Demo"
  }
];
