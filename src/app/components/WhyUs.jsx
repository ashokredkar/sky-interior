import styles from './WhyUs.module.css'

const PILLARS = [
  {
    title: 'A Team That Shows Up',
    body:  'With 80+ trained craftsmen on the floor, we have the manpower to handle large-scale and concurrent projects without compromising on quality or finish.',
  },
  {
    title: 'Four Decades of Craft',
    body:  "Since 1985, we've refined every detail of how interiors are built — from ceiling systems to custom joinery. That depth of experience shows in every surface.",
  },
  {
    title: 'Deadlines Are Non-Negotiable',
    body:  'We treat your handover date as our own. Every project is planned, sequenced, and supervised to ensure on-time completion — every single time.',
  },
  {
    title: 'Wherever the Project Is',
    body:  'From Mumbai to Bengaluru, Delhi to Hyderabad — our teams mobilise across India. Pan-India reach, with the precision of a local partner.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>

      {/* ── Bottom: image left, pillars right ── */}
      <div className={styles.body}>

        <div className={`${styles.imageWrap} revealLeft`}>
          <div className={styles.imageAccent} />
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80"
            alt="Craftsmanship"
            className={styles.img}
          />
        </div>

        <div className={styles.right}>
          <div className="reveal">
            <span className="sectionLabel">Why Choose Us</span>
            <h2 className="sectionTitle">
              Built on<br /><em>Trust </em> &amp; Craft
            </h2>
            <p className="sectionBody">
              We are the partner of choice for architects and developers who need
              a team with the experience, manpower, and discipline to deliver —
              anywhere in India.
            </p>
          </div>

          <div className={`${styles.pillars} stagger`}>
            {PILLARS.map(({ title, body }, i) => (
              <div key={title} className={styles.pillar}>
                <span className={styles.pillarNum}>0{i + 1}</span>
                <div>
                  <h4 className={styles.pillarTitle}>{title}</h4>
                  <p className={styles.pillarBody}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}