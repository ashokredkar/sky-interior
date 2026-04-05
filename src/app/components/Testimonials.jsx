import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    quote: 'Execution was flawless. The false ceiling work on our corporate project was delivered ahead of schedule with exceptional finishing. Will partner again.',
    name: 'Rahul Mehta',
    role: 'Principal Architect, Mehta & Associates',
  },
  {
    quote: 'DesignCo transformed a shell space into something truly extraordinary. They understood the brief instantly and never needed hand-holding.',
    name: 'Priya Kapoor',
    role: 'Director, Kapoor Developers',
  },
  {
    quote: 'Rare to find a firm that genuinely collaborates with architects. Their attention to material quality and on-site coordination is best-in-class.',
    name: 'Vikram Sharma',
    role: 'Lead Designer, Studio Forma',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="reveal">
        <span className={`sectionLabel ${styles.label}`}>Trusted By</span>
        <h2 className={`sectionTitle ${styles.title}`}>
          What Our <em>Clients</em> Say
        </h2>
      </div>

      <div className={`${styles.grid} stagger`}>
        {TESTIMONIALS.map(({ quote, name, role }) => (
          <div key={name} className={styles.card}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.openQuote}>&ldquo;</span>
            <p className={styles.quote}>{quote}</p>
            <p className={styles.author}>{name}</p>
            <p className={styles.role}>{role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}