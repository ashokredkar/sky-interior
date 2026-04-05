"use client"

import Link from 'next/link'
import styles from './Cta.module.css'

export default function Cta() {
  return (
    <section id="cta" className={styles.section}>
      <div className={`${styles.imageWrap} revealLeft`}>
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
          alt="Start a project"
          className={styles.img}
        />
      </div>

      <div className={`${styles.content} revealRight`}>
        <span className="sectionLabel">Start a Project</span>
        <h2 className="sectionTitle">
          Have a Vision<br />in <em>Mind?</em>
        </h2>
        <p className="sectionBody">
          Share your brief and let&apos;s explore what we can build together.
          We work with architects, builders, and private clients across
          residential and commercial spaces.
        </p>
        <div className={styles.actions}>
          <button
            className="btnDark"
            onClick={() =>
              window.open(
                "https://wa.me/7977040314?text=Hi,%20I%20want%20a%20quote%20for%20interior%20work",
                "_blank",
              )
            }
          >
            Request a Quote
          </button>
          <Link href="#projects" className="btnOutlineDark">View Portfolio</Link>
        </div>
      </div>
    </section>
  )
}