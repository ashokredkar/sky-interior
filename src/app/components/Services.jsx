import styles from './Services.module.css'

const SERVICES = [
  'Interior Design',
  'False Ceiling Systems',
  'Turnkey Projects',
  'Custom Furniture',
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>

        {/* Left: heading + list */}
        <div>
          <div className="reveal">
            <span className="sectionLabel">What We Do</span>
            <h2 className="sectionTitle">Crafting <em>Every</em><br />Detail</h2>
            <p className="sectionBody">
              From concept to completion, we deliver end-to-end interior solutions
              with precision craftsmanship and materials of enduring quality.
            </p>
          </div>

          <ul className={`${styles.list} stagger`}>
            {SERVICES.map((name, i) => (
              <li key={name} className={styles.item}>
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.name}>{name}</span>
                <span className={styles.arrow}>→</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: tall image + badge */}
        <div className={`${styles.visual} revealRight`}>
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80"
            alt="Interior craftsmanship"
            className={styles.img}
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>40</span>
            <span className={styles.badgeLabel}>Years of<br />Excellence</span>
          </div>
        </div>

      </div>
    </section>
  )
}