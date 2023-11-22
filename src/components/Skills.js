// styles
import styles from '../styles/general.module.css'
// Logos
import Image from 'next/image'
import Jqury from '../../public/images/logos/jquery.png'
import Html from '../../public/images/logos/html.png'
import Bootstrap from '../../public/images/logos/bootstrap.png'
import Css from '../../public/images/logos/css.png'
import Git from '../../public/images/logos/git.png'
import Js from '../../public/images/logos/js.png'
import Next from '../../public/images/logos/next.png'
import React from '../../public/images/logos/react.png'
import Redux from '../../public/images/logos/redux.png'
import Sass from '../../public/images/logos/sass.png'


export default function Skills() {
  return (
    <div className={styles.skills} id='skills'> 
      <h1>____Skills____</h1>

<div className={styles.skill}>

    <div>
        <Image src={Html} width={100} />
        <h3>Html</h3>
      </div>

      
      <div>
        <Image src={Css} width={100}/>
        <h3>Css</h3>
      </div>


      <div >
        <Image src={React} width={100}/>
        <h3>React</h3>
      </div>

      
      <div>
        <Image src={Js} width={100}/>
        <h3>Js</h3>
      </div>

      
      <div>
        <Image src={Redux} width={100}/>
        <h3>Redux</h3>
      </div>

      
      <div>
        <Image src={Sass} width={100}/>
        <h3>Sass</h3>
      </div>

      
      <div>
        <Image src={Bootstrap} width={100}/>
        <h3>Bootstrap</h3>
      </div>

      
      <div>
        <Image src={Jqury} width={100}/>
        <h3>Jqury</h3>
      </div>

      
      <div>
        <Image src={Next} width={100}/>
        <h3>Next</h3>
      </div>

      <div>
        <Image src={Git} width={100}/>
        <h3>Git</h3>
      </div>

</div>
    </div>
    
  )
}
