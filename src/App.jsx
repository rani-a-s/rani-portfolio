import "./App.css";

function App() {
  const projects = [
    {
      title: "AI Hallucination Mitigation System",
      description:
        "An evidence-grounded AI verification system that retrieves relevant sources and validates generated claims against supporting evidence.",
      technologies: ["Python", "RAG", "SciBERT", "FAISS", "FastAPI"],
      github: "https://github.com/rani-a-s/AIHM",
    },
    {
      title: "Harmony Heal",
      description:
        "A music-based wellness application that recommends relaxation, focus, and stress-relief music based on user preferences.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      github: null,
    },
    {
      title: "CodePilot – AI Software Engineering Agent",
      description:
        "An AI-powered software engineering assistant that analyzes repositories, detects technologies, performs code analysis, indexes code, and supports semantic code search.",
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "Sentence Transformers",
      ],
      github:
        "https://github.com/rani-a-s/CodePilot-AI-Software-Engineering-Agent",
    },
  ];

  const skills = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "React.js", "PHP"],
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning", "NLP", "RAG", "SciBERT"],
    },
    {
      title: "Backend",
      skills: ["FastAPI", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "FAISS", "Pytest"],
    },
  ];

  const certifications = [
    {
      number: "01",
      title: "Python",
      issuer: "Delithe",
    },
    {
      number: "02",
      title: "MySQL and DBMS",
      issuer: "Infosys Springboard",
    },
    {
      number: "03",
      title: "Cryptography and Cybersecurity",
      issuer: "Sanfoundry",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Rani<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Available for Internship Opportunities
          </div>

          <p className="welcome">HELLO, I'M</p>

          <h1>
            Rani <span>Sankanur</span>
          </h1>

          <h2>
            Computer Science &amp; Engineering Student
          </h2>

          <p className="hero-description">
            I build practical software, web applications, and AI-driven
            solutions that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects →
            </a>

            <a
              href="/Rani_Sankanur_Resume.pdf"
              className="btn secondary"
              download
            >
              Download Resume ↓
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/rani-a-s"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/rani-sankanur-597616295/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:ranisankanur@gmail.com">
              Email ↗
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="profile-card">

            <div className="profile-image-wrap">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Rani Sankanur"
                className="profile-image"
              />
            </div>

            <h3>Rani Sankanur</h3>

            <p>
              Computer Science &amp; Engineering Student
            </p>

            <div className="profile-status">
              <span></span>
              Open to internship opportunities
            </div>

          </div>

          <div className="about-text">

            <p>
              I am a Computer Science and Engineering student with a strong
              interest in software development, web technologies, and applied
              AI.
            </p>

            <p>
              I enjoy turning ideas into practical applications, exploring
              new technologies, and solving problems through programming.
            </p>

            <p>
              I am currently looking for opportunities where I can learn from
              experienced teams, contribute to real-world projects, and grow
              as a software engineer.
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((category) => (
            <div className="skill-card" key={category.title}>

              <div className="skill-number">
                {category.title.charAt(0)}
              </div>

              <h3>{category.title}</h3>

              <div className="skill-tags">

                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>

              <div className="project-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                >
                  View on GitHub ↗
                </a>
              )}

            </div>
          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section">

        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-year">
            2023 — 2027
          </div>

          <div>

            <h3>Bachelor of Engineering</h3>

            <h4>
              Computer Science &amp; Engineering
            </h4>

            <p>
              Jain College of Engineering and Research, Belagavi
            </p>

            <div className="education-details">
              <span>CGPA: 8.8 / 10</span>
              <span>Expected Graduation: 2027</span>
            </div>

          </div>

        </div>

        <div className="education-card small-card">

          <div className="education-year">
            2021 — 2023
          </div>

          <div>

            <h3>Pre-University Education</h3>

            <p>
              Spandana PU Science College, Ilkal
            </p>

            <div className="education-details">
              <span>Percentage: 90.33%</span>
            </div>

          </div>

        </div>

        <div className="education-card small-card">

          <div className="education-year">
            2021
          </div>

          <div>

            <h3>SSLC</h3>

            <p>
              MGHPS, Gudur (SC)
            </p>

            <div className="education-details">
              <span>Percentage: 91.84%</span>
            </div>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="section certifications">

        <div className="section-heading">
          <p>CONTINUOUS LEARNING</p>
          <h2>Certifications</h2>
        </div>

        <div className="certification-grid">

          {certifications.map((certificate) => (
            <div
              className="cert-card"
              key={certificate.number}
            >

              <span>{certificate.number}</span>

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="contact-box">

          <p className="contact-small">
            HAVE AN OPPORTUNITY?
          </p>

          <h2>
            Let's build something{" "}
            <span>meaningful.</span>
          </h2>

          <p>
            I'm currently open to internship opportunities,
            collaborative projects, and learning experiences.
          </p>

          <div className="hero-buttons">

            <a
              href="mailto:ranisankanur@gmail.com"
              className="btn primary"
            >
              Get In Touch →
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Rani_Sankanur_Resume.pdf`}
              className="btn secondary"
              download
            >
              Download Resume ↓
            </a>

          </div>

          <div className="contact-info">

            <a href="mailto:ranisankanur@gmail.com">
              📧 ranisankanur@gmail.com
            </a>

            <a href="tel:+919380744549">
              📱 9380744549
            </a>

            <a
              href="https://www.linkedin.com/in/rani-sankanur-597616295/"
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn ↗
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>© 2026 Rani Sankanur</p>

        <div className="footer-links">
          <a
            href="https://github.com/rani-a-s"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/rani-sankanur-597616295/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </footer>

    </div>
  );
}

export default App;