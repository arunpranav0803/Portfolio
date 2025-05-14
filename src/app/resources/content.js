import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Arunpranav",
  lastName: "Ks",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AWS & DevSecOps | Security Analyst",
  avatar: "/images/arun.jpeg",
  email: "arunpranav0803@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I protect AWS clouds by day (with code & tools like Wazuh) and automate security headaches away by night.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/arunpranav-ks-b706b0245/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Securing AWS & Java apps with DevSecOps agility.</>,

  subline: (
    <>
      I protect AWS clouds by day (with code & tools like Wazuh) 
      <br /> 
      and automate security headaches away by night.
      
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
     Arunpranav KS is a DevSecOps & Cloud Security Engineer who bridges the gap between security and automation. His expertise lies in hardening AWS environments, threat detection, and secure CI/CD pipelines, ensuring resilient systems without compromising agility.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
  {
    company: "Cytrusst Intelligence Private Ltd",
    timeframe: "Dec 2024 - Present",
    role: "Security Analyst & DevSecOps",
    achievements: [
      <>
        Implemented cloud security solutions in AWS, ensuring compliance and hardening environments against threats.
      </>,
      <>
        Managed endpoint security using <strong>SentinelOne</strong> and <strong>ManageEngine Endpoint Central</strong>, improving threat detection efficiency.
      </>,
      <>
        Automated security integration in CI/CD pipelines using <strong>Jenkins</strong>, reducing deployment risks by 25%.
      </>,
      <>
        Analyzed security logs and coordinated incident response with <strong>Wazuh</strong>, minimizing system vulnerabilities.
      </>,
    ],
    images: [], // Optional: Add AWS/SentinelOne/Wazuh dashboard screenshots if available
  },
  {
    company: "National Small Industries Corporation Ltd (NSIC)",
    timeframe: "Nov 2022 - Dec 2022",
    role: "UI/UX Design Intern",
    achievements: [
      <>
        Designed user interfaces for enterprise projects using <strong>Figma</strong>, enhancing usability and accessibility.
      </>,
    ],
    images: [], // Optional: Add Figma project mockups
  },
],
  },
  studies: {
  display: true, // Set to false to hide this section
  title: "Education",
  institutions: [
    {
      name: "Bannari Amman Institute of Technology, Erode",
      description: (
        <>
          <strong>B.E. Computer Science & Engineering</strong> (2020 – 2024)  
          CGPA: 7.6 | Specialized in cloud security and DevSecOps practices.
        </>
      ),
    },
    {
      name: "JSpiders Software Training Institute",
      description: (
        <>
          <strong>DevOps Engineer</strong> (Aug 2024 – Nov 2024)  
          <strong>Java Full Stack Development</strong> (Jun 2024 – Nov 2024)  
          Gained hands-on expertise in AWS, Jenkins, and Spring Boot.
        </>
      ),
    },
  ],
},
  technical: {
  display: true, // Set to false to hide this section
  title: "Technical Skills",
  skills: [
    {
      title: "AWS & Cloud Security",
      description: (
        <>
          Hardening environments with <strong>EC2, S3, IAM, CloudFormation</strong>, and enforcing compliance via <strong>CloudWatch</strong> and <strong>Wazuh</strong>.
        </>
      ),
      images: [], // Optional: Add AWS architecture diagrams or security dashboards
    },
    {
      title: "DevSecOps & CI/CD",
      description: (
        <>
          Automating secure pipelines with <strong>Jenkins</strong>, <strong>Docker</strong>, and <strong>Ansible</strong> to reduce deployment risks by 30%.
        </>
      ),
      images: [], // Optional: Add CI/CD workflow screenshots
    },
    {
      title: "Endpoint Security",
      description: (
        <>
          Threat hunting and response using <strong>SentinelOne</strong> and <strong>ManageEngine</strong>, with 95% detection accuracy.
        </>
      ),
      images: [], // Optional: Add threat analysis reports
    },
    {
      title: "Java Full Stack",
      description: (
        <>
          Building scalable apps with <strong>Spring Boot</strong>, <strong>React.js</strong>, and <strong>PostgreSQL</strong>.
        </>
      ),
      images: [], // Optional: Add project snapshots
    },
  ],
},
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
