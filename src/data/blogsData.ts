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
    title: "Intercepting Thick Client TCP and TLS Traffic",
    description: "Intercepting and analysing the traffic is one of the important parts of the pentest, whether it's a mobile, web or desktop application.",
    date: "Sep 2025",
    link: "https://blog.souravkalal.tech/intercepting-thick-client-tcp-and-tls-traffic-72fab07fffe7",
    publishedOn: "InfoSec Write-ups",
    readTime: "13 min read",
    category: "Desktop Security"
  },
  {
    id: 2,
    title: "Intercepting LDAP With InterceptSuite",
    description: "LDAP authentication is everywhere in networks, but intercepting encrypted LDAP traffic can be challenging. LDAP authentication in the web…",
    date: "Aug 2025",
    link: "https://blog.souravkalal.tech/intercepting-ldap-with-interceptsuite-45d219c14943",
    publishedOn: "InfoSec Write-ups",
    readTime: "4 min read",
    category: "Desktop Security"
  },
  {
    id: 3,
    title: "Beyond HTTP: InterceptSuite for TCP/TLS Traffic Interception",
    description: "InterceptSuite is a tool I created to intercept and analyse network traffic in desktop applications, whether encrypted or not. Unlike…",
    date: "May 2025",
    link: "https://blog.souravkalal.tech/beyond-http-interceptsuite-for-tcp-tls-traffic-interception-in-windows-518934bba22f",
    publishedOn: "InfoSec Write-ups",
    readTime: "18 min read",
    category: "Desktop Security"
  },
  {
    id: 4,
    title: "Intercepting MacOS XPC",
    description: "Intercepting XPC Messages With Frida - An in-depth guide to intercepting and analyzing XPC messages in macOS applications using Frida",
    date: "Apr 2025",
    link: "https://blog.souravkalal.tech/intercepting-macos-xpc-e11103dacafd",
    publishedOn: "InfoSec Write-ups",
    readTime: "10 min read",
    category: "Desktop Security"
  },
  {
    id: 5,
    title: "Electron JS ASAR Integrity Bypass",
    description: "A detailed exploration of bypassing Electron's built-in integrity detection in Windows and MacOS applications.",
    date: "Jul 2024",
    link: "https://blog.souravkalal.tech/electron-js-asar-integrity-bypass-431ac4269ed5",
    publishedOn: "InfoSec Write-ups",
    readTime: "8 min read",
    category: "Desktop Security"
  },
  {
    id: 6,
    title: "Flutter Windows Thick Client SSL Pinning Bypass",
    description: "A comprehensive guide to bypassing SSL pinning in Flutter-based Windows applications, including methodology.",
    date: "May 2024",
    link: "https://blog.souravkalal.tech/flutter-windows-thick-client-ssl-pinning-bypass-492389ae1218",
    publishedOn: "InfoSec Write-ups",
    readTime: "12 min read",
    category: "Desktop Security"
  },
  {
    id: 7,
    title: "Recreating Cordova Mobile Apps",
    description: "In-depth tutorial on cloning Cordova Mobile Apps to bypass security implementations, with focus on security testing methodologies",
    date: "Jun 2023",
    link: "https://blog.souravkalal.tech/recreating-cordova-mobile-apps-to-bypass-security-implementations-8845ff7bdc58",
    publishedOn: "InfoSec Write-ups",
    readTime: "15 min read",
    category: "Mobile Security"
  },
  {
    id: 8,
    title: "Bypassing Asymmetric Client Side Encryption",
    description: "Technical walkthrough of bypassing asymmetric encryption without private key access using Chrome DevTools and PyCript",
    date: "Mar 2023",
    link: "https://blog.souravkalal.tech/bypassing-asymmetric-client-side-encryption-without-private-key-822ed0d8aeb6",
    publishedOn: "InfoSec Write-ups",
    readTime: "10 min read",
    category: "Web Security"
  },
  {
    id: 9,
    title: "Manipulating Encrypted Traffic using PyCript",
    description: "Step-by-step guide to intercepting and manipulating encrypted traffic using Burp Suite and PyCript, with real-world examples",
    date: "Mar 2023",
    link: "https://blog.souravkalal.tech/manipulating-encrypted-traffic-using-pycript-b637612528bb",
    publishedOn: "InfoSec Write-ups",
    readTime: "8 min read",
    category: "Web Security"
  }
];
