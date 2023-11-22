// styles
import styles from '../styles/general.module.css'
// icons
import {FaLinkedin ,FaGithub} from "react-icons/fa";

export default function Contact() {
  return (
    <div id='contact' className={styles.contact}>
        <h1>____Contact____</h1>
        <ul>
            <li> <h4>Number:</h4> 09115689015</li>
            <li> <h4>Mail:</h4> mousavizahra681@gmail.com</li>
            <li> <h4>Linkedin:</h4> <a href='https://www.linkedin.com/in/zahra-mousavi-054356211/'>https://www.linkedin.com/in/zahra-mousavi-054356211/</a></li>
        </ul>
    </div>
  )
}
