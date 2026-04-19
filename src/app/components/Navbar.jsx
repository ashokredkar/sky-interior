"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#award", label: "Awards" },
  { href: "#why", label: "About" },
  // { href: "#testimonials", label: "Clients" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>Sky Interior</div>

        {/* Desktop links */}
        <div className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <button
          className={styles.cta}
          onClick={() =>
            window.open(
              "https://wa.me/7977040314?text=Hi,%20I%20want%20a%20quote%20for%20interior%20work",
              "_blank",
            )
          }
        >
          Get Quote
        </button>

        {/* Hamburger — visible on mobile */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Full-screen mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>
            {label}
          </a>
        ))}
        <button
          className={styles.drawerCta}
          onClick={() => {
            window.open(
              "https://wa.me/7977040314?text=Hi,%20I%20want%20a%20quote%20for%20interior%20work",
              "_blank",
            );
            close();
          }}
        >
          Get Quote
        </button>
      </div>
    </>
  );
}
