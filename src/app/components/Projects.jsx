"use client";

import Image from "next/image";
import styles from "./Projects.module.css";
import Link from "next/link";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    src: "/images/23.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/24.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/25.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/26.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/1.jpeg",
    tag: "Residential",
    category: "Living Spaces",
    title: "The Ahuja Residence",
  },
  {
    src: "/images/2.jpeg",
    tag: "Commercial",
    category: "False Ceiling",
    title: "Skyline Corporate Hub",
  },
  {
    src: "/images/3.jpeg",
    tag: "Turnkey",
    category: "Custom Kitchen",
    title: "Mehta Penthouse",
  },
  {
    src: "/images/4.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/5.jpeg",
    tag: "Commercial",
    category: "Office Interior",
    title: "Nexus Tech HQ",
  },
  {
    src: "/images/6.jpeg",
    tag: "Furniture",
    category: "Custom Furniture",
    title: "Sharma Dining Room",
  },
  {
    src: "/images/7.jpeg",
    tag: "Residential",
    category: "Living Spaces",
    title: "The Ahuja Residence",
  },
  {
    src: "/images/8.jpeg",
    tag: "Commercial",
    category: "False Ceiling",
    title: "Skyline Corporate Hub",
  },
  {
    src: "/images/9.jpeg",
    tag: "Turnkey",
    category: "Custom Kitchen",
    title: "Mehta Penthouse",
  },
  {
    src: "/images/10.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/11.jpeg",
    tag: "Commercial",
    category: "Office Interior",
    title: "Nexus Tech HQ",
  },
  {
    src: "/images/12.jpeg",
    tag: "Furniture",
    category: "Custom Furniture",
    title: "Sharma Dining Room",
  },
  {
    src: "/images/13.jpeg",
    tag: "Residential",
    category: "Living Spaces",
    title: "The Ahuja Residence",
  },
  {
    src: "/images/14.jpeg",
    tag: "Commercial",
    category: "False Ceiling",
    title: "Skyline Corporate Hub",
  },
  {
    src: "/images/15.jpeg",
    tag: "Turnkey",
    category: "Custom Kitchen",
    title: "Mehta Penthouse",
  },
  {
    src: "/images/16.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
  {
    src: "/images/17.jpeg",
    tag: "Commercial",
    category: "Office Interior",
    title: "Nexus Tech HQ",
  },
  {
    src: "/images/18.jpeg",
    tag: "Furniture",
    category: "Custom Furniture",
    title: "Sharma Dining Room",
  },
  {
    src: "/images/19.jpeg",
    tag: "Residential",
    category: "Living Spaces",
    title: "The Ahuja Residence",
  },
  {
    src: "/images/20.jpeg",
    tag: "Commercial",
    category: "False Ceiling",
    title: "Skyline Corporate Hub",
  },
  {
    src: "/images/21.jpeg",
    tag: "Turnkey",
    category: "Custom Kitchen",
    title: "Mehta Penthouse",
  },
  {
    src: "/images/22.jpeg",
    tag: "Residential",
    category: "Master Suite",
    title: "The Kapoor Retreat",
  },
];

export default function Projects() {
  const [showImageSlider, setShowImageSlider] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = sliderRef.current.scrollLeft;

    sliderRef.current.classList.add("dragging");
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - startX.current;
    sliderRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.touches[0].clientX - startX.current;
    sliderRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div>
          <span className="sectionLabel">Portfolio</span>
          <h2 className="sectionTitle">
            Our <em>Finest</em> Work
          </h2>
        </div>
        <p className={styles.viewAll} onClick={() => setShowImageSlider(true)}>
          View All Projects &nbsp;→
        </p>
      </div>

      {showImageSlider && (
        <div
          className={styles.imageSlider}
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <span
            className={styles.closeIcon}
            onClick={() => setShowImageSlider(false)}
          >
            ❌
          </span>
          {PROJECTS.map(({ src, tag, category, title, featured, id }) => (
            <div key={src} className={styles.sliderImg}>
              <img src={src} alt={title} className={styles.img} />
              {/* <span className={styles.tag}>{tag}</span>
              <div className={styles.cardOverlay}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>{category}</span>
                  <h4 className={styles.cardTitle}>{title}</h4>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      )}

      <div className={`${styles.grid} stagger`}>
        {PROJECTS.slice(0, 6).map(
          ({ src, tag, category, title, featured, id }) => (
            <div
              key={src}
              className={`${styles.card} ${id === 0 ? styles.featured : ""}`}
            >
              <img src={src} alt={title} className={styles.img} />
              {/* <span className={styles.tag}>{tag}</span>
              <div className={styles.cardOverlay}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>{category}</span>
                  <h4 className={styles.cardTitle}>{title}</h4>
                </div>
              </div> */}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
