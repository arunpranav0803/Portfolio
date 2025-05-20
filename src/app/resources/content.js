import { Logo } from "@/once-ui/components";

const person = {
  firstName: "ARUNPRANAV",
  lastName: "KS",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "DevSecOps | Security Analyst",
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
      I Protect AWS cloud by day (with code & tools) and automate security Headaches away by Night !!
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/arunpranav0803/",
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
  image: "/images/og/cover-01.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Zero-trust, full-speed  securing AWS in real time.</>,

  subline: (
    <>
      Cloud-native. Security-first. DevSecOps always.<br/>
      <br /> 
      From commit to cloud — securing AWS at DevOps speed with automated precision.
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
     As a DevSecOps Engineer, I specialize in securing and automating AWS infrastructure using Docker, Kubernetes (EKS), and CI/CD pipelines. I manage endpoint security with SentinelOne and oversee DLP, patching, and web restrictions using ManageEngine.</>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
  {
    company: "CYTRUSST INTELLIGENCE PRIVATE LTD",
    timeframe: "Dec 2024 - Present",
    role: "Security Analyst & DevSecOps",
    achievements: [
  <>
  Designed and deployed secure AWS infrastructure leveraging <strong>Ubuntu</strong>, <strong>Amazon Linux</strong>, and <strong>RHEL</strong> servers within hardened <strong>VPCs</strong>, implementing robust <strong>security groups</strong> to safeguard network traffic and access.
</>,
<>
  Enabled centralized logging and auditing by implementing <strong>AWS CloudTrail</strong>, enhancing visibility into user and resource activity for improved compliance and threat detection.
</>,
<>
  Deployed and managed containerized microservices environments using <strong>Docker Compose</strong> and <strong>Docker Swarm</strong> to support scalable and resilient development and staging workflows.
</>,
<>
  Managed critical production workloads on <strong>Amazon EKS</strong>, configuring <strong>persistent volumes (PV)</strong>, <strong>persistent volume claims (PVC)</strong>, and <strong>horizontal pod autoscalers (HPA)</strong> to ensure high availability and efficient resource utilization. Oversaw <strong>ArgoCD</strong> to facilitate GitOps-based Kubernetes deployments and version control of infrastructure.
</>,
<>
  Administered code repositories and pull request workflows, coordinating safe merges in isolated environments. Built and maintained Jenkins pipelines to automate build, test, and deployment cycles, supporting continuous integration and delivery.
</>,
<>
  Developed and optimized CI/CD pipelines to accelerate application deployment and infrastructure updates, reinforcing automation and operational efficiency across cloud platforms.
</>,
<>
  Implemented endpoint security using <strong>SentinelOne</strong>, providing advanced EDR capabilities including real-time threat detection, containment, and automated remediation.
</>,
<>
  Conducted thorough root cause analysis (RCA) for security incidents and threats, devising and executing remediation strategies to fortify system defenses and prevent recurrence.
</>,
<>
  Utilized <strong>ManageEngine Endpoint Central</strong> to enforce data loss prevention (DLP), perform timely patch management, and restrict unauthorized web access through URL filtering on endpoints.
</>,
<>
  Implemented centralized log aggregation and continuous threat monitoring with <strong>Wazuh</strong>, improving incident response times and compliance posture.
</>,
<>
  Initiated and led the identification and remediation of Cloud Security Posture Management (CSPM) findings in the AWS environment, significantly enhancing cloud security and compliance standards.
</>,
<>
  Generated and managed SSL/TLS certificates for <strong>NGINX</strong> servers, ensuring secure HTTPS communication and protecting web services against interception.
</>,
<>
  Configured <strong>NGINX</strong> as a reverse proxy to optimize traffic routing, implement load balancing, and enhance the security posture of deployed applications.
</>,
<>
  Managed employee IT assets including OS configuration, laptop provisioning, and storage optimization. Oversaw hardware procurement, software licensing, inventory control, and provided technical support to end-users. Enforced security policies such as patch management and data protection, collaborating with teams to deploy updates and new technologies efficiently.
</>,
<>
  Performed root cause analysis (RCA) for security threats and incidents, formulating and implementing effective remediation plans to strengthen overall environment security.
</>,
<>
  Maintained and streamlined Jira workflows for access management, change management, and incident management processes, improving coordination and operational transparency across teams.
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
    <>
      Created interactive prototypes and wireframes in <strong>Figma</strong> to effectively communicate design concepts and workflows to stakeholders.
    </>,
    <>
      Collaborated with cross-functional teams by sharing design files and gathering feedback directly within <strong>Figma</strong>, accelerating the design iteration process.
    </>,
    <>
      Implemented design systems and reusable components in <strong>Figma</strong> to maintain consistency across multiple projects.
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
          | CGPA: 7.6 
        </>
      ),
    },
    {
  name: "JSpiders Software Training Institute, Bangalore",
  description: (
    <>
    <br/>
      <strong>DevSecOps Engineer</strong> (Aug 2024 – Nov 2024) <br/> <br/>
      Gained practical knowledge in securing and automating AWS infrastructure with hands-on experience in Linux, Git/GitHub, Maven, Jenkins, Docker, Ansible, Terraform, and Kubernetes. Built secure CI/CD pipelines and managed server automation and container orchestration.  
      <br /><br />
      <strong>Java Full-Stack Developer</strong> (Jun 2024 – Nov 2024) <br/> <br/> 
      Acquired full-stack development skills with a strong foundation in HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Core and Advanced Java, JDBC, Servlets, Hibernate, and SQL. Built responsive web applications and integrated backend logic with secure data handling.
    </>
  ),
}


  ],
},
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
  title: "AWS & Cloud Services",
  description: (
    <>
      Hands-on experience with <strong>AWS EC2, ELB, AMI, Security Groups, VPC, NAT Gateway, S3, RDS, IAM, Elastic IP, EBS Volumes, Auto Scaling, CloudTrail, CloudWatch</strong> for infrastructure management, security, automation, and monitoring.  
      <br /><br />
      Proficient in Kubernetes with practical knowledge of <strong>EKS clusters, Nodes, Pods, Persistent Volumes (PV), Persistent Volume Claims (PVC), Horizontal Pod Autoscaling (HPA), Ingress NGINX controller, LoadBalancer services, Pods, Persistent Volumes, Persistent Volume Claims, and Autoscaling</strong> for container orchestration and scalable deployments.
    </>
  ),
  images: [],
},

    {
      title: "Security & Endpoint Protection",
      description: (
        <>
          Managing endpoint security with <strong>SentinelOne (EDR)</strong>, Data Loss Prevention (<strong>DLP</strong>) policies, patch management using <strong>ManageEngine</strong>, and threat detection with <strong>Wazuh</strong>.
        </>
      ),
      images: [],
    },
    {
  title: "DevSecOps & Automation Tools",
  description: (
    <>
      Automation and pipeline orchestration using <strong>Git, GitHub, Bitbucket, Maven, Jenkins, Docker, Kubernetes (EKS), Ansible, Terraform
      </strong>
      , following the complete DevOps lifecycle including version control, build, continuous integration and deployment, containerization, orchestration, configuration management, and infrastructure as code.
    </>
  ),
  images: [],
},

    {
      title: "Programming & Web Development",
      description: (
        <>
          Proficient in <strong>Java (Core & Advanced), Servlets, Hibernate, JDBC, SQL, PostgreSQL</strong>, and frontend frameworks including <strong>HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js</strong>.
        </>
      ),
      images: [],
    },
    {
      title: "Linux & Scripting",
      description: (
        <>
          Linux server management and automation with <strong>Shell scripting</strong>, supporting infrastructure reliability and maintenance.
        </>
      ),
      images: [],
    },
    {
      title: "Web Servers & Application Servers",
      description: (
        <>
          Experience with <strong>NGINX (reverse proxy with SSL), Apache, Tomcat</strong> to secure and serve web applications.
        </>
      ),
      images: [],
    },
    {
      title: "Monitoring & Incident Management",
      description: (
        <>
          Incident investigation and<strong> Root Cause Analysis (RCA)</strong>, enforcing security policies and workflow management via <strong>Jira</strong>.
        </>
      ),
      images: [],
    },
    {
      title: "Task Scheduling & Event Management",
      description: (
        <>
          Implemented scheduled automation tasks using <strong>Cron jobs, AWS EventBridge</strong>, and <strong>AWS Lambda</strong> for serverless event-driven workflows.
        </>
      ),
      images: [],
    },
  ],
},

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "My Journey from Computer Science Graduate to DevSecOps | Security Analyst",
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
    // {
    //   src: "/images/gallery/horizontal-1.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/horizontal-2.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
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
    {
      src: "/images/gallery/vertical-5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-6.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
