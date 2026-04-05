'use client'

import { useEffect } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
      rafId = requestAnimationFrame(animRing)
    }
    animRing()

    const grow = () => {
      dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%) scale(2)`
      ring.style.width     = '56px'
      ring.style.height    = '56px'
      ring.style.opacity   = '0.3'
    }
    const shrink = () => {
      dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%) scale(1)`
      ring.style.width     = '36px'
      ring.style.height    = '36px'
      ring.style.opacity   = '0.6'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  className={styles.dot}  />
      <div id="cursor-ring" className={styles.ring} />
    </>
  )
}