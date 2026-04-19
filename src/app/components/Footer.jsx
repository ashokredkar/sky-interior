import styles from './Footer.module.css'

const COMPANY_LINKS = [{title: 'Projects', link: '#projects'}, {title: 'Awards', link: '#award'}, {title: 'About Us', link: '#why'}]
const SERVICE_LINKS = ['Interior Design', 'False Ceiling', 'Turnkey', 'Custom Furniture']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <span className={styles.logo}>Sky Interior</span>
          <p className={styles.brandText}>
            Premium interior and ceiling solutions for architects
            and builders who demand the finest.
          </p>
        </div>

        <div className={styles.col}>
          <h5 className={styles.colHeading}>Company</h5>
          {COMPANY_LINKS.map(item => (
            <a key={item.title} href={item.link} className={styles.link}>{item.title}</a>
          ))}
        </div>

        <div className={styles.col}>
          <h5 className={styles.colHeading}>Services</h5>
          {SERVICE_LINKS.map(link => (
            <p key={link} className={styles.link}>{link}</p>
          ))}
        </div>

        <div className={styles.col}>
          <h5 className={styles.colHeading}>Contact</h5>
          <a href="mailto:raviv9924@gmail.com" className={styles.link}>raviv9924@gmail.com</a>
          <a href="tel:+917977040314" className={styles.link}>+91 7977040314 / +91 9821374095</a>
          <p className={styles.link}>Mumbai, India</p>
        </div>

      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 SkyInterior. All rights reserved.</p>
        {/* <div className={styles.social}>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>Houzz</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
        </div> */}
      </div>
    </footer>
  )
}