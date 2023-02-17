import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logoSalt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCogs } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect,useState } from 'react'
const Sidebar = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]
  
    // useEffect(() => {
    //   return setTimeout(() => {
    //     setLetterClass('text-animate-hover')
    //   }, 4000)
    // }, [])
    return (

        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={1} />
           </Link>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>

                <NavLink
                    exact='true'
                    className="about-link"
                    activeclassname="active"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>




                <NavLink
                    exact='true'
                    className="skills-link"
                    activeclassname="active"
                    to="/skills"
                >
                    <FontAwesomeIcon icon={faCogs} color="#4d4d4d" />
                </NavLink>


                <NavLink
                    exact='true'
                    className="contact-link"
                    activeclassname="active"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>

            </nav>
        </div>
    )
}
export default Sidebar