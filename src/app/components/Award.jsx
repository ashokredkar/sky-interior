import styles from "./Award.module.css";

const AWARDED_WORKS = [
  {
    title: "The Ahuja Residence",
    location: "Bandra West, Mumbai",
    year: "2023",
    image: "/images/award1.jpeg",
    caption: "AD 100 — Residential Excellence",
  },
  {
    title: "Skyline Corporate Hub",
    location: "BKC, Mumbai",
    year: "2022",
    image: "/images/award2.jpeg",
    caption: "AD 100 — Commercial Design",
  },
];

export default function Award() {
  return (
    <section id="award" className={styles.section}>
      {/* Left: award identity */}
      <div className={`${styles.left} reveal`}>
        <div className={styles.copy}>
          <span className="sectionLabel">Recognition</span>
          <h2 className={`sectionTitle ${styles.title}`}>
            Awarded by
            <br />
            <em>Architectural</em>
            <br />
            Digest
          </h2>
          <p className={styles.body}>
            Two of our projects were selected for the prestigious AD 100 —
            Architectural Digest's definitive list of the finest designers and
            architects in India. A recognition of craft, vision, and an
            uncompromising standard of finish.
          </p>
          <div className={styles.rule}>
            <span className={styles.ruleYear}>2022 &amp; 2023</span>
            <span className={styles.ruleLine} />
          </div>
        </div>
      </div>

      {/* Right: two awarded images */}
      <div className={`${styles.right} stagger`}>
        {AWARDED_WORKS.map(({ title, location, year, image, caption }) => (
          <div key={title} className={styles.card}>
            <div className={styles.cardImageWrap}>
              <img src={image} alt={title} className={styles.cardImage} />
              <div className={styles.cardBadge}>
                <span className={styles.cardBadgeText}>AD 100</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardCaption}>{caption}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <div className={styles.cardMeta}>
                <span>{location}</span>
                <span className={styles.cardDot} />
                <span>{year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
