import './index.scss'
import me from '../../img/me.jpg';
import "@fontsource/gloria-hallelujah"; // Defaults to weight 400
import 'animate.css'
const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
  
          <img    src={me} className='imgMe center'/>
        </div>

        <div class="container">
        <div class="row fontGloria">
          <b className='animate__animated animate__bounce animate__repeat-2'><strong>Mohammad</strong> Saltanatpouri</b>
          <br/>
          <span>With More than <strong>6</strong> Years Experince As Frontend/Backnend Developer</span>
<br/>
<div class="col fontGloria">
          <span><strong>Frontend: </strong></span>
        <li>React/Next JS</li>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>Jquery</li>

</div>

<div class="col fontGloria">

        <span><strong>Backend: </strong></span>
        <li>Php</li>
        <li>MVC Frameworks  (Yii,Zend,Laravel/Lumen)</li>
  
  
</div>

<div class="col">

  
        <span><strong>Other Skills: </strong></span>
        <li>Mysql</li>
        <li>Redis</li>
        <li>Docker</li>
        <li>Git</li>
        </div>
          
</div>

        </div>
      </div>
    </>
  )
}

export default About