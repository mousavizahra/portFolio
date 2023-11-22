//  style
import style from '../styles/general.module.css'
// images
import Image from 'next/image'
import Boot from '../../public/images/certificates/boot.jpg'
import Html from '../../public/images/certificates/html.jpg'
import Js from '../../public/images/certificates/js.jpg'
import React from '../../public/images/certificates/react.jpg'

export default function Certificates() {
  return (
    <div className={style.certificates} id='certificates'> 
            <h1>____Certificates____</h1>
        <div className={style.images}>
            {/* html */}
          <div className={style.wrapper}>
          <div className={style.image}> 
            <Image src={Html} className={style.img}/>
            <div className={style.content}>
            <ul>
              <li>Setting Up the Document Structure</li>
              <li>Formatting Text by Using Tags</li>
              <li>Define Lists and Backgrounds</li>
              <li>Creating Hyperlinks and Anchors</li>
              <li>Cascading Style Sheets and Graphics</li>
              <li>Formatting Text by Using Style Sheets</li>
              <li>Formatting Paragraphs by Using Style Sheets</li>
              <li>Displaying Graphics</li>
              <li>Creating Navigational Aids</li>
              <li>Creating User Forms</li>
              <li>Incorporating Sound and Video</li>
            </ul>
          </div>

            </div>
          </div>
          {/* boot */}
          <div className={style.wrapper}>
          <div className={style.image}> 
            <Image src={Boot} className={style.img}/>
            <div className={style.content}>
             <ul>
              <li>Intermediate Design</li>
              <li>Bootstrap Advanced Level</li>
              <li>jQuery basics</li>
              <li>jQuery intermediate</li>
              <li>jQuery Advanced Level</li>
             </ul>
          </div>

            </div>
          </div>
          {/* js */}
          <div className={style.wrapper}>
          <div className={style.image}> 
            <Image src={Js} className={style.img}/>
            <div className={style.content}>
             <ul>
              <li>JavaScript syntax</li>
              <li>Data Types</li>
              <li>Conditional statements</li>
              <li>Loop statements</li>
              <li>Operators</li>
              <li>Methods and Properties</li>
              <li>Functions</li>
              <li>DOM and Browser</li>
              <li>Error Handling</li>
              <li>ES6</li>
              <li>Module</li>
              <li>Webpack</li>
             </ul>
          </div>

            </div>
          </div>
          {/* react */}
          <div className={style.wrapper}>
          <div className={style.image}> 
            <Image src={React} className={style.img}/>
            <div className={style.content}>
             <ul>
              <li>Components</li>
              <li>Data</li>
              <li>Hooks</li>
              <li>Routing</li>
              <li>Context</li>
              <li>Redux</li>
              <li>Ant Design</li>
              <li>Material UI</li>
              <li>SSR</li>
              <li>Testing</li>
             </ul>
          </div>

            </div>
          </div>

        </div>
    </div>
  )
}
