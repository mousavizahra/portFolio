//  components
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import About from '../components/About'
import Skills from '../components/Skills'
import Certificates from '../components/Certificates'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
// style
import styles from '../styles/general.module.css'

export default function  Home() {
  return (
    <div className={styles.body}>  
        <Navbar/>
        <Section/>
        <About/>
        <Skills/>
        <Certificates/>
        <Projects/>
        <Contact/>
    </div>
  )
}
