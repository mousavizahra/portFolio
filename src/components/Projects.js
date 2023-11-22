 // styles
 import styles from '../styles/general.module.css'
 import {FaReact,FaHtml5,FaCss3,FaSass,FaJs,FaBootstrap,FaJquery} from "react-icons/fa";
// images
import Image from 'next/image'
import Panel from '../../public/images/projects/admin-panel.jpg'
import Company from '../../public/images/projects/company.jpg'
import Digi from '../../public/images/projects/digikala.jpg'
import Hotel from '../../public/images/projects/hotel.jpg'
import Painter from '../../public/images/projects/painter.jpg'
import Restaurant from '../../public/images/projects/restaurant.jpg'

export default function Projects() {
  return (
    <div className={styles.projects} id='projects'>
         <h1>____Projects____</h1>

         <div>
            {/* Admin-panel */}
        <div className={styles.project}>
            <Image src={Panel} className={styles.img}/>
            <div className={styles.icons}>
            <FaReact/>
            <FaCss3/>
            </div>
            <h2> Admin-Panel</h2>
            <div className={styles.btn}>
                <a href='https://github.com/mousavizahra/Admin_Panel' target='_blank'> <button>see code</button> </a>
            </div>
        </div>

         {/* Company */}
         <div className={styles.project}>
            <Image src={Company} className={styles.img}/>
            <div className={styles.icons}>
              <FaBootstrap/>
              <FaSass/>
            </div>
            <h2> Company website</h2>
            <div className={styles.btn}>
                <a href='https://github.com/mousavizahra/-Company-Website' target='_blank'> <button>see code</button> </a>
            </div>
        </div>

        {/* Digi */}
        <div className={styles.project}>
            <Image src={Digi} className={styles.img}/>
            <div className={styles.icons}>
            <FaReact/>
            <FaSass/>
            <FaCss3/>
            </div>
            <h2> E-SaleWebsite-digikala</h2>
            <div className={styles.btn}>
                <a href='https://github.com/mousavizahra/E_SaleWebSite_digikala' target='_blank'> <button>see code</button> </a>
            </div>
        </div>

         {/* Hotel */}
         <div className={styles.project}>
            <Image src={Hotel} className={styles.img}/>
            <div className={styles.icons}>
             <FaBootstrap/>
            <FaSass/>
            </div>
            <h2> Hotel Website</h2>
            <div className={styles.btn}>
                <a href='https://github.com/mousavizahra/Hotel-Website' target='_blank'> <button>see code</button> </a>
            </div>
        </div>

         {/* Painter */}
         <div className={styles.project}>
            <Image src={Painter} className={styles.img}/>
            <div className={styles.icons}>
             <FaBootstrap/>
            <FaSass/>
            </div>
            <h2> E-Sale-Website-Painter</h2>
            <div className={styles.btn}>
                <a href='https://github.com/mousavizahra/E-Sale-Website-Painter' target='_blank'> <button>see code</button> </a>
            </div>
        </div>

         {/*Restaurant */}
         <div className={styles.project}>
            <Image src={Restaurant} className={styles.img}/>
            <div className={styles.icons}>
             <FaHtml5/>
            <FaSass/>
            </div>
            <h2> Restaurant-Website</h2>
            <div className={styles.btn}>
                <a href='https://github.com/mousavizahra/Restaurant-Website' target='_blank'> <button>see code</button> </a>
            </div>
        </div>
        
         </div>

    </div>
  )
}
