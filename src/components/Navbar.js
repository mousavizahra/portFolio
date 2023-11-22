// styles
import styles from '../styles/general.module.css'

 
 export default function Navbar() {
   return (
        <div className={styles.navbar}>
          <navbar >
        <ul className={styles.ul}>
            <li> 
                <a href='#about'>About</a>
            </li>

            <li>
                <a href='#skills'>Skills</a>
            </li>

            <li> 
              <a href='#certificates'>Certificates</a>
            </li>

            <li>
              <a href='#projects'>Projects</a>
            </li>
            
            <li> 
               <a href='#contact'>Contact</a> 
            </li>
        </ul>
      </navbar>
        </div>
   )
 }
 