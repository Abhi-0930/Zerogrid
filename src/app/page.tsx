import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const navItems = [
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#services" },
    { label: "About", href: "#process" },
    { label: "Plans", href: "#contact" },
    { label: "FAQ", href: "#contact" },
  ];

  const services = [
    {
      title: "AI Workflow Design",
      description:
        "We map repetitive ops into AI-assisted flows that cut manual effort and speed delivery.",
    },
    {
      title: "Automation Engineering",
      description:
        "From internal tools to CRM pipelines, we build reliable automations that remove bottlenecks.",
    },
    {
      title: "Conversion Websites",
      description:
        "Fast, clear websites designed to communicate value quickly and convert qualified leads.",
    },
  ];

  const process = [
    "Discovery and workflow audit",
    "Roadmap with quick-win priorities",
    "Build, launch, and track outcomes",
  ];

  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#" aria-label="Zerogrid home">
          <Image
            className={styles.brandLogoImage}
            src="/zerogrid-logo-bg-remove.png"
            alt="Zerogrid logo"
            width={320}
            height={72}
            priority
          />
        </a>
        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.navCta} href="#contact">
          Book a call
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.kicker}>AI Automation Agency</p>
          <h1>Build faster systems. Ship smarter growth.</h1>
          <p className={styles.heroText}>
            Zerogrid helps modern teams automate repetitive operations, improve
            lead flow, and launch digital experiences that convert.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primary} href="#contact">
              Book a Discovery Call
            </a>
            <a className={styles.secondary} href="#services">
              Explore Services
            </a>
          </div>
          <div className={styles.metrics}>
            <div>
              <strong>30+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>2.8x</strong>
              <span>Avg. Process Speedup</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <h2>Services built for growth-stage teams</h2>
          <div className={styles.cardGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className={styles.process}>
          <h2>A simple execution model</h2>
          <ol>
            {process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>Let us build your next growth engine</h2>
          <p>
            Tell us your goals, current bottlenecks, and timeline. We will send
            a tailored action plan in the first call.
          </p>
          <a className={styles.primary} href="mailto:hello@zerogrid.io">
            hello@zerogrid.io
          </a>
        </section>
      </main>
    </div>
  );
}
