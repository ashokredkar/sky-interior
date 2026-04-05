import styles from './Statsbar.module.css'

const STATS = [
  { number: '80+', label: 'Skilled Craftsmen' },
  { number: '40',   label: 'Years of Expertise'  },
  { number: '100%',  label: 'On-Time Delivery'    },
  { number: '10+',  label: 'Clients'  },
]

export default function StatsBar() {
  return (
    <div className={`${styles.bar} stagger`}>
      {STATS.map(({ number, label }) => (
        <div key={label} className={styles.stat}>
          <span className={styles.number}>{number}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  )
}