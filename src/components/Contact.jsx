import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { BiSend,BiLocationPlus,BiPhone,BiEnvelopeOpen } from "react-icons/bi"
import { FaLinkedin,FaGithub,FaTwitterSquare,FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser'
function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        initial={{opacity: 0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}} 
        className="my-10 text-center text-4xl">CONTACT</motion.h1>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
              <motion.div
              initial={{x: -100,opacity:0}}
              whileInView={{x:0 ,opacity:1}}
              transition={{duration:1.5}}
              className="w-full p-4 rounded-md">
                {/* <p className="text-sm tracking-tight text-neutral-400">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p> */}
                <div className="mb-6">
                  <label className="pb-2 block tracking-tighter text-neutral-400">
                      Your Name :
                  </label>
                  <input type="text" className="w-full rounded text-neutral-400 bg-neutral-900 outline-none px-3 py-2 focus:outline-2 focus:outline-slate-800 transition-all duration-300 border border-neutral-400"/>
                </div>
                <div className="mb-6">
                  <label className="pb-2 block tracking-tighter text-neutral-400">
                    Your Email :
                  </label>
                  <input type="email" className="w-full rounded text-neutral-400 bg-neutral-900 outline-none px-3 py-2 focus:outline-2 focus:outline-slate-800 transition-all duration-300 border border-neutral-400" />
                </div>
                <div className="mb-6">
                  <label className="pb-2 block tracking-tighter text-neutral-400">
                      Your Message :
                  </label>
                  <textarea type="email" className="w-full rounded-md text-neutral-400 bg-neutral-900 focus:outline-2 focus:outline-slate-800 outline-none transition-all duration-300 px-3 py-2 h-32 border border-neutral-400" maxLength={500} />
                </div>
                <div className="">
                    <button type="submit" className="flex items-center mx-auto bg-neutral-900 px-3 py-2 rounded-full focus:outline focus:outline-slate-900 transition-all duration-300">Send Message<span className="pl-2"><BiSend/></span></button>
                </div>
              </motion.div>
          </div>
          <div className="lg:w-1/2 w-full">
          <motion.div
          initial={{x: 100,opacity:0}}
          whileInView={{x:0 ,opacity:1}}
          transition={{duration:1.5}}
          >
              <div className="p-4 space-y-4 mt-8">
                <div className="flex items-center text-lg text-neutral-400"><BiPhone/><span className="pl-2">+62 8977267557</span></div>
                <div className="flex items-center text-lg text-neutral-400"><BiEnvelopeOpen/><span className="pl-2">faric26andrevano@gmail.com</span></div>
                <div className="flex items-center text-lg text-neutral-400"><BiLocationPlus/><span className="pl-2">Griya Persada Blok A3/22</span></div>
              </div>
              <div className="flex text-3xl justify-evenly mt-10">
                  <div><a href="https://github.com/faricandrevano" target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
                  <div><a href="https://www.linkedin.com/in/faric-andrevano-10367a2a4/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></div>
                  <div><a href="https://x.com/FaricAndrevano" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a></div>
                  <div><a href="https://www.instagram.com/developement_wesid/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></div>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Contact