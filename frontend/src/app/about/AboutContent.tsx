import "./about.css";

const stats = [
  {
    number: "47",
    label: "COLLEGES ONBOARDED",
    desc: "Across 9 states. Including 4 of India's top engineering schools.",
  },
  {
    number: "128k",
    label: "CANDIDATES SERVED",
    desc: "Resumes built, interviews run, offers landed in 2025 alone.",
  },
  {
    number: "340",
    label: "EMPLOYER PARTNERS",
    desc: "From Series-A startups to Fortune 100 GCCs.",
  },
  {
    number: "8",
    label: "LANGUAGES SUPPORTED",
    desc: "English, Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The first version",
    desc: "CareerXel started as a side project: an AI mock-interview tool for placement preparation. By month three, it had 800 weekly users and zero spend on marketing.",
    meta: "FOUNDED · MAR 2024 · KOTA",
  },
  {
    year: "2024",
    title: "First college partnership",
    desc: "A regional engineering college signed up to onboard their entire 2025 batch. We built bulk CSV onboarding in 11 days.",
    meta: "JUL 2024 · 412 STUDENTS · 1 CAMPUS",
  },
  {
    year: "2025",
    title: "Recruiter ATS launch",
    desc: "We launched the recruiter ATS — stages, scorecards, calendars — and added our first employer partners.",
    meta: "FEB 2025 · ATS · EMPLOYER WORKSPACE",
  },
  {
    year: "2025",
    title: "Proctoring and scoring engine",
    desc: "Identity verification, face presence, and the 12-dimension scoring engine were calibrated against real placement and hiring outcomes.",
    meta: "NOV 2025 · 12 DIMS · AI SCORING",
  },
  {
    year: "2026",
    title: "International launch",
    desc: "Offices in Bangalore and San Francisco. First international cohorts onboarded from Singapore and Dubai.",
    meta: "APR 2026 · INTERNATIONAL COHORTS",
  },
  {
    year: "Now",
    title: "What we are building next",
    desc: "Private fine-tuned models, video-first interview replay, college dashboards, and career roadmaps tied directly into LMS workflows.",
    meta: "ROADMAP · OPEN ROLES · BUILDING",
  },
];

const team = [
  {
    name: "Aarav Sundaram",
    role: "CO-FOUNDER · CEO",
    tag: "CEO",
    initials: "AS",
    bio: "Previously built ed-tech and hiring products. Started CareerXel after seeing strong candidates fail because they lacked structured interview preparation.",
  },
  {
    name: "Priya Khurana",
    role: "CO-FOUNDER · CTO",
    tag: "CTO",
    initials: "PK",
    bio: "ML and platform engineering leader focused on applied NLP, interview scoring, and explainable hiring intelligence.",
  },
  {
    name: "Rohan Kapoor",
    role: "CO-FOUNDER · COO",
    tag: "COO",
    initials: "RK",
    bio: "Worked closely with placement teams and colleges. Leads operations, onboarding, and institutional success.",
  },
  {
    name: "Maya Sundaram",
    role: "VP ENGINEERING",
    tag: "VP ENG",
    initials: "MS",
    bio: "Leads the recruiter ATS, scorecards, interview pipeline, and employer dashboard experience.",
  },
];

export default function AboutContent() {
  return (
    <main>
      {/* §00 MANIFESTO HERO */}
      <section className="dark-mesh" style={{ padding: "64px 0 48px" }}>
        <div className="container">
          <div className="serif-kicker">A small team, on a long road.</div>

          <h1 className="display mt-24" style={{ maxWidth: "1100px" }}>
            <span className="bone-grad">Hiring is broken.</span>
            <br />
            <span className="muted-weight">
              We&apos;re building the better version.
            </span>
          </h1>

          <div className="manifesto" style={{ marginTop: "64px" }}>
            <p>
              The last decade taught the industry how to{" "}
              <span className="muted-weight">post jobs at scale</span>, parse
              resumes at scale, and ghost candidates at scale.
            </p>

            <p>
              It did not teach anyone{" "}
              <span className="muted-weight">how to actually decide</span> if a
              person can do the work.
            </p>

            <p>
              We&apos;re building a platform where the candidate is heard, the
              recruiter has evidence, and the college has the numbers{" "}
              <span className="muted-weight">it can actually defend</span>.
            </p>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--amber)",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-d)",
                marginTop: "56px",
              }}
            >
              FOUNDED 2024 · KOTA · BANGALORE · SAN FRANCISCO
            </p>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <div className="stat-cell" key={stat.label}>
                <div className="num">
                  {stat.number}
                  <span className="acc">.</span>
                </div>
                <div className="lab">{stat.label}</div>
                <div className="desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §01 TIMELINE LIGHT */}
      <section className="light section">
        <div className="container">
          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Every milestone,
              <br />
              <span className="muted-weight">in the order it happened.</span>
            </h2>
          </div>

          <div className="timeline" style={{ marginTop: "56px" }}>
            {timeline.map((item, index) => (
              <div className="tl-row" key={`${item.year}-${item.title}-${index}`}>
                <div className="tl-year">{item.year}</div>
                <div className="tl-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="meta">{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §02 TEAM DARK */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
              The people
              <br />
              <span className="muted-weight">building this.</span>
            </h2>
          </div>

          <div className="team-grid">
            {team.map((person) => (
              <div className="person" key={person.name}>
                <div className="av">
                  <div className="blob" />
                  <span className="tag">{person.tag}</span>
                  <div className="ini">{person.initials}</div>
                </div>

                <div>
                  <div className="name">{person.name}</div>
                  <div className="role">{person.role}</div>
                </div>

                <div className="bio">{person.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
