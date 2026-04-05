"use client"

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.tag}>
          Perfect Ceiling, Perfect Finish, Anywhere in India
        </span>
        <h1 className={styles.heading}>
          Spaces Crafted
          <br />
          for the <em>Discerning</em>
        </h1>
        <div className={styles.actions}>
          <Link href="#projects" className="btnPrimary">
            View Projects
          </Link>
          <button
            className="btnGhost"
            onClick={() =>
              window.open(
                "https://wa.me/7977040314?text=Hi,%20I%20want%20a%20quote%20for%20interior%20work",
                "_blank",
              )
            }
          >
            Get Quote
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
