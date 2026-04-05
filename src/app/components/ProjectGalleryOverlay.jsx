'use client'

import { useEffect, useRef, useCallback } from 'react'
import styles from './ProjectGalleryOverlay.module.css'

export default function ProjectGalleryOverlay({ project, onClose }) {
  const trackRef  = useRef(null)
  const isDragging = useRef(false)
  const startX    = useRef(0)
  const scrollStart = useRef(0)

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // ── Mouse drag to scroll ──────────────────────────────
  const onMouseDown = useCallback((e) => {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return
    const delta = e.pageX - startX.current
    trackRef.current.scrollLeft = scrollStart.current - delta
  }, [])

  const stopDrag = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }, [])

  // Arrow key scrolling
  useEffect(() => {
    const onKey = (e) => {
      if (!trackRef.current) return
      if (e.key === 'ArrowRight') trackRef.current.scrollBy({ left:  420, behavior: 'smooth' })
      if (e.key === 'ArrowLeft')  trackRef.current.scrollBy({ left: -420, behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!project) return null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      {/* Stop propagation so clicking inside the panel doesn't close */}
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>

        {/* Top meta bar */}
        <div className={styles.meta}>
          <div className={styles.metaLeft}>
            <span className={styles.metaCategory}>{project.category}</span>
            <h2 className={styles.metaTitle}>{project.title}</h2>
            <p className={styles.metaSummary}>{project.summary}</p>
          </div>

          <div className={styles.metaRight}>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>Worked with</span>
              <span className={styles.metaVal}>{project.workedWith}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>Location</span>
              <span className={styles.metaVal}>{project.location}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>Area</span>
              <span className={styles.metaVal}>{project.area}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>Year</span>
              <span className={styles.metaVal}>{project.year}</span>
            </div>
            <div className={styles.tags}>
              {project.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <button className={styles.close} onClick={onClose} aria-label="Close">
            <span />
            <span />
          </button>
        </div>

        {/* Horizontal image strip */}
        <div
          ref={trackRef}
          className={styles.track}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {project.images.map((src, i) => (
            <div key={i} className={styles.imageSlot}>
              <img
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                className={styles.image}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className={styles.hint}>
          <span className={styles.hintLine} />
          <span className={styles.hintText}>Drag or use arrow keys to explore</span>
          <span className={styles.hintLine} />
        </div>

      </div>
    </div>
  )
}