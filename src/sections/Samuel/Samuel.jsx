import styles from './SamuelStyles.module.css'
import heroImg from '../../assets/samueldev2img.png'
import sun from '../../assets/sun.svg'  
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CVSamuel.pdf'
import { useTheme } from '../../common/ThemeContext.jsx';


function Samuel() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="samuel" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
        className={styles.samuel} 
        src={heroImg} 
        alt="Profile picture of Samuel Remolina"
        />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" 
        onClick = {toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Samuel 
        <br />
        Remolina Alvarez
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://twitter.com/" target='_blank'>
          <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/samueldeve6" target='_blank'>
          <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/samuel-remolina-alvarez-b17b84212/" target='_blank'>
          <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className= {styles.description}>
          With a passion for developing modern React web apps for comercial businesses.
        </p>
        <a href={CV}download>
          <button className="hover" >Resume</button>
        </a>
      </div>
      </section>
  )
}

export default Samuel