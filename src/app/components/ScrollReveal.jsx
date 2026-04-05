'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .revealLeft, .revealRight, .stagger'
    const elements  = document.querySelectorAll(selectors)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Unobserve after first trigger — animate only once
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Renders nothing — purely a behaviour hook
  return null
}