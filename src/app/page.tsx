"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#process" },
    { label: "FAQ", href: "#contact" },
    { label: "Contact", href: "#contact" },
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
            className={styles.brandLogoWordmark}
            src="/zerogrid-logo-bg-remove.png"
            alt="Zerogrid logo"
            width={300}
            height={80}
            priority
          />
        </a>
        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navItemLink}>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <a className={styles.navCta} href="#contact">
          <span>Book a call</span>
          <span className={styles.navCtaIcon}>{"->"}</span>
        </a>
        <button
          className={`${styles.hamburgerButton} ${isMobileMenuOpen ? styles.hamburgerButtonOpen : ""}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-nav-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuLinks}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className={styles.mobileMenuCta}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Book a call
        </a>
      </nav>

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
