import Head from 'next/head';
import styles from './resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <Head>
        <title>Nakul Dev M V - Resume</title>
        <meta name="description" content="Professional resume of Nakul Dev M V" />
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.name}>NAKUL DEV M V</h1>
        <p className={styles.location}>Kozhikode, Kerala, India</p>
        <div className={styles.contact}>
          <a href="mailto:nakuldevmv@gmail.com">nakuldevmv@gmail.com</a>
          <span className={styles.separator}>|</span>
          <a href="tel:+919946981561">+91 9946981561</a>
          <span className={styles.separator}>|</span>
          <a href="https://www.linkedin.com/in/nakuldevmv/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className={styles.separator}>|</span>
          <a href="https://github.com/nakuldevmv" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className={styles.separator}>|</span>
          <a href="https://nakuldevmv.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
      </header>

      {/* Summary Section */}
      <Section title="SUMMARY">
        <p>
          Computer Science student with a strong foundation in full-stack development and scalable system design.  
          Built 3+ impactful apps including Spamurai (automated email unsubscribe handler) and FindX (deep web search).  
          Proficient in Node.js, Flutter, MongoDB, Puppeteer, REST APIs, and responsive UI design.  
          Seeking SDE roles to Implement efficient, user-centric software using modern development pipelines.
        </p>
      </Section>

      {/* Technical Skills Section */}
      <Section title="TECHNICAL SKILLS">
        <ul className={styles.skillsList}>
          <li><span className={styles.label}>Programming Languages:</span> JavaScript, C++, C, TypeScript (basic), Dart (Flutter)</li>
          <li><span className={styles.label}>Frameworks & Technologies:</span> Node.js, React, MongoDB, Express (familiar), REST APIs, Next.js (basic), HTML5, CSS3, Responsive Design, Flutter</li>
          <li><span className={styles.label}>Tools & Software:</span> Git, GitHub, VS Code, Figma, Vercel, Render</li>
        </ul>
      </Section>

      {/* Projects Section */}
      <Section title="PROJECTS & TECHNICAL EXPERIENCE">
        <ProjectItem
          title="Spamurai: Automated Email unsubscribe handler"
          tech="Node.js, Puppeteer, MongoDB"
          period="Apr 2025 – Jun 2025"
          links={[
            { label: "Live Demo", url: "https://spamurai.vercel.app/" },
            { label: "GitHub", url: "https://github.com/nakuldevmv/Spamurai" }
          ]}
        >
          Initiated and built a solution to auto-clean inboxes by handling 500+ email unsubscribe, solving real user pain
          <ul className={styles.projectDetails}>
            <li>Streamlined unsubscribe requests across 500+ sample emails using headless Puppeteer scripts</li>
            <li>Integrated IPQualityScore API to flag phishing links with 90%+ reliability during testing</li>
            <li>Engineered a live session dashboard with WebSockets to stream unsub/unread stats across 500+ emails</li>
          </ul>
        </ProjectItem>

        <ProjectItem
          title="FindX: Advanced Web Search with Google Dorking"
          tech="Flutter, Dart"
          period="Nov 2024 – Dec 2024"
          links={[
            { label: "Live Demo", url: "https://findx24.vercel.app/" },
            { label: "GitHub", url: "https://github.com/nakuldevmv/FindX" }
          ]}
        >
          Proactively created a custom Dork search tool to explore hidden web content, automating 1K+ advanced queries
          <ul className={styles.projectDetails}>
            <li>Engineered focused file search (PDF, DOC) via Dork patterns across 10K+ indexed URLs</li>
            <li>Tested with 100+ queries to optimize backend parsing & improve response latency</li>
            <li>Designed minimal UI with filter-based navigation for intuitive file search</li>
          </ul>
        </ProjectItem>

        <ProjectItem
          title="Portfolio Website: Mobile-First Interactive Showcase"
          tech="Flutter, Dart"
          period="Sep 2024 – Oct 2024"
          links={[
            { label: "Live Demo", url: "https://nakuldevmv.github.io/2024/index.html" },
            { label: "GitHub", url: "https://github.com/nakuldevmv/Portfolio-Website" }
          ]}
        >
          Independently launched personal portfolio to centralize all projects, reaching 1K+ users with mobile-first design
          <ul className={styles.projectDetails}>
            <li>Hosted portfolio on GitHub Pages with 1s resume download and full mobile responsiveness</li>
            <li>Designed Bento-style project tiles to streamline recruiter navigation and improve engagement</li>
            <li>Took initiative to gather peer feedback, iterated 5+ UI tweaks post 15+ community reviews</li>
          </ul>
        </ProjectItem>
      </Section>

      {/* Education Section */}
      <Section title="EDUCATION">
        <EducationItem
          degree="Bachelor of Engineering (B.E), Computer Science and Engineering"
          period="Sep 2023 – May 2026"
          institution="JCT College of Engineering and Technology"
          location="Tamil Nadu, India"
          details="CGPA: 8.65/10 | Honors List"
          coursework="Relevant Coursework: Data Structures, Operating Systems, Computer Networks, DBMS"
        />

        <EducationItem
          degree="Diploma in Computer Engineering"
          period="Sep 2021 – Apr 2023"
          institution="M-DIT Polytechnic College"
          location="Kerala, India"
          details="CGPA: 8.66/10 | First Class with Distinction"
          coursework="Relevant Coursework: C++, Java, Data Structures, Digital Electronics"
        />
      </Section>

      {/* Leadership Section */}
      <Section title="LEADERSHIP">
        <ul className={styles.leadershipList}>
          <li>Led 2–4 member teams in academic projects, delegating tasks and communicating timelines clearly</li>
          <li>Volunteered to mentor B.E. juniors during a web design event, simplifying UI/UX and HTML for beginners</li>
          <li>Served as Class Rep & Edu Minister, facilitating academic coordination and delivering updates to faculty</li>
          <li>Enabled peer success by hosting study sessions and simplifying technical concepts into exam-ready material</li>
        </ul>
      </Section>
    </div>
  );
}

// Reusable Section Component
function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}

// Project Item Component
function ProjectItem({ title, tech, period, links, children }) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.projectPeriod}>{period}</div>
      </div>
      <div className={styles.projectTech}>{tech}</div>
      <div className={styles.projectDescription}>
        {children}
      </div>
      <div className={styles.projectLinks}>
        {links.map((link, index) => (
          <span key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {link.label}
            </a>
            {index < links.length - 1 && <span className={styles.linkSeparator}>|</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

// Education Item Component
function EducationItem({ degree, period, institution, location, details, coursework }) {
  return (
    <div className={styles.educationItem}>
      <div className={styles.educationHeader}>
        <h3 className={styles.degree}>{degree}</h3>
        <div className={styles.educationPeriod}>{period}</div>
      </div>
      <div className={styles.institution}>
        {institution}, {location}
      </div>
      <div className={styles.educationDetails}>{details}</div>
      <div className={styles.coursework}>{coursework}</div>
    </div>
  );
}