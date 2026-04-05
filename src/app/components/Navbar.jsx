'use client'

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Sky Interior</div>

      <div className={styles.links}>
        <a href="#projects">Projects</a>
        <a href="#award">Awards</a>
        <a href="#why">About</a>
        <a href="#testimonials">Clients</a>
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
    </nav>
  )
}