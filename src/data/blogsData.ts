export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
  publishedOn: string;
  readTime?: string;
  category: string;
}

export const blogsData: BlogPost[] = [
  {
    id: 1,
    title: "Intercepting MacOS XPC",
    description: "Intercepting XPC Messages With Frida - An in-depth guide to intercepting and analyzing XPC messages in macOS applications using Frida",
    date: "Apr 2024",
    link: "https://blog.souravkalal.tech/intercepting-macos-xpc-e11103dacafd",
    publishedOn: "InfoSec Write-ups",
    readTime: "10 min read",
    category: "Desktop Security"
  },
  {
    id: 2,
    title: "Electron JS ASAR Integrity Bypass",
    description: "A detailed exploration of bypassing Electron's built-in integrity detection in Windows and MacOS applications.",
    date: "Jul 2024",
    link: "https://blog.souravkalal.tech/electron-js-asar-integrity-bypass-431ac4269ed5",
    publishedOn: "InfoSec Write-ups",
    readTime: "8 min read",
    category: "Desktop Security"
  },
  {
    id: 3,
    title: "Flutter Windows Thick Client SSL Pinning Bypass",
    description: "A comprehensive guide to bypassing SSL pinning in Flutter-based Windows applications, including methodology.",
    date: "May 2024",
    link: "https://blog.souravkalal.tech/flutter-windows-thick-client-ssl-pinning-bypass-492389ae1218",
    publishedOn: "InfoSec Write-ups",
    readTime: "12 min read",
    category: "Desktop Security"
  },
  {
    id: 4,
    title: "Recreating Cordova Mobile Apps",
    description: "In-depth tutorial on cloning Cordova Mobile Apps to bypass security implementations, with focus on security testing methodologies",
    date: "Jun 2023",
    link: "https://blog.souravkalal.tech/recreating-cordova-mobile-apps-to-bypass-security-implementations-8845ff7bdc58",
    publishedOn: "InfoSec Write-ups",
    readTime: "15 min read",
    category: "Mobile Security"
  },
  {
    id: 5,
    title: "Bypassing Asymmetric Client Side Encryption",
    description: "Technical walkthrough of bypassing asymmetric encryption without private key access using Chrome DevTools and PyCript",
    date: "Mar 2023",
    link: "https://blog.souravkalal.tech/bypassing-asymmetric-client-side-encryption-without-private-key-822ed0d8aeb6",
    publishedOn: "InfoSec Write-ups",
    readTime: "10 min read",
    category: "Web Security"
  },
  {
    id: 6,
    title: "Manipulating Encrypted Traffic using PyCript",
    description: "Step-by-step guide to intercepting and manipulating encrypted traffic using Burp Suite and PyCript, with real-world examples",
    date: "Mar 2023",
    link: "https://blog.souravkalal.tech/manipulating-encrypted-traffic-using-pycript-b637612528bb",
    publishedOn: "InfoSec Write-ups",
    readTime: "8 min read",
    category: "Web Security"
  }
];
