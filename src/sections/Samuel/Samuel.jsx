import styles from './SamuelStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'

function Samuel() {
  return (
    <section id="samuel" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
        className={styles.samuel} 
        src={heroImg} 
        alt="Profile picture of Samuel Remolina"
        />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
      </div>
      <div className={styles.info}>
        <h1>Samuel 
        <br />
        Remolina
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://twitter.com/" target='_blank'>
          <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
      </div>
      </section>
  )
}

export default Samuel