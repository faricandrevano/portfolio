import { motion } from "framer-motion"
import { BiSend,BiLocationPlus,BiPhone,BiEnvelopeOpen } from "react-icons/bi"
import { FaLinkedin,FaGithub,FaTwitterSquare,FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser'
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
function Contact() {
  const [Loading,setLoading] = useState(false);
  const handleSubmit = (e) =>  {
    e.preventDefault()
    // if (e.target.name.value == '' | e.target.email.value == '' | e.target.message == '') {
    //   console.log('dont push')
    // } else {
      
    // }
    try {
      setLoading(true);
      setTimeout(async () => {
        await emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,{
          to_name: e.target.name.value,
          message: e.target.message.value,
          email: e.target.email.value
        }, process.env.REACT_APP_PUBLIC_KEY);
        console.log('success')
        setLoading(false);
        e.target.name.value = ''
        e.target.email.value = ''
        e.target.message.value = ''
      },2000)
    } catch (error) {
      console.log(error);
    } 
  }
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
                <form onSubmit={handleSubmit}>
                {/* <p className="text-sm tracking-tight text-neutral-400">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p> */}
                <div className="mb-6">
                  <label className="pb-2 block tracking-tighter text-neutral-400">
                      Your Name :
                  </label>
                  <input type="text" id="name" className="w-full rounded text-neutral-400 bg-neutral-900 outline-none px-3 py-2 focus:outline-2 focus:outline-slate-800 transition-all duration-300 border border-neutral-400" required={true}/>
                </div>
                <div className="mb-6">
                  <label className="pb-2 block tracking-tighter text-neutral-400">
                    Your Email :
                  </label>
                  <input type="email" id="email" className="w-full rounded text-neutral-400 bg-neutral-900 outline-none px-3 py-2 focus:outline-2 focus:outline-slate-800 transition-all duration-300 border border-neutral-400" required={true}/>
                </div>
                <div className="mb-6">
                  <label className="pb-2 block tracking-tighter text-neutral-400">
                      Your Message :
                  </label>
                  <textarea type="text" id="message" className="w-full rounded-md text-neutral-400 bg-neutral-900 focus:outline-2 focus:outline-slate-800 outline-none transition-all duration-300 px-3 py-2 h-36 border border-neutral-400" maxLength={500} required={true} />
                </div>
                <div>
                  {
                    Loading ? (
                      <ThreeDots 
                      height={50}
                      width={50}
                      color="#4e0a57"
                      wrapperClass="flex justify-center"
                      />
                      ) : (
                      <motion.button
                        initial={{scale: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration:0.2}}
                       type="submit" className="flex items-center mx-auto bg-neutral-900 px-3 py-2 rounded-full focus:outline focus:outline-slate-900 transition-all duration-300">Send Message<span className="pl-2"><BiSend/></span></motion.button>
                    )
                  }
                </div>
                </form>
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