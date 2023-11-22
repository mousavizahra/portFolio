// styles
import styles from '../styles/general.module.css'
// import Resum from '../../public/Resum/Resume-Zahra-Mousavi (9).pdf'

export default function About() {
  return (
    <div className={styles.about} id='about'>
        <div className={styles.left}>
        </div>

        <div className={styles.right}>
          <h3>  __ABOUT ME</h3>
          <p>I am a highly motivated front-end developer with a passion for creating beautiful websites that are easy to navigate and absorb. passionate in HTML, CSS, JavaScript, React, plus modern libraries and frameworks. I am a hardworking and thorough person.</p>

          {/* <div className={styles.btn}>
          <button><a href={Resum}>My Resum</a> </button>
        </div> */}

        </div>
        
    </div>
  )
}
