import Logo from '../assets/FaricDev.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='mb-4 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={Logo} alt="logo" className='mx-2 max-w-28'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/faric-andrevano-10367a2a4/">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/faricandrevano">
                <FaGithub/>
            </a>
            <a href="https://x.com/FaricAndrevano">
                <FaTwitterSquare/>
            </a>
            <a href="https://www.instagram.com/developement_wesid/">
                <FaInstagram/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar;