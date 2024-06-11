import aboutPic from '../assets/about.jpg';
import {ABOUT_TEXT} from '../constants';
import { motion } from 'framer-motion';
import GithubCallender from './GithubCallender';

function About() {
  return (
    <div className="border-b border-neutral-900 pb-8">
        <motion.h1
         initial={{opacity: 0, y: -100}}
         whileInView={{opacity: 1,y:0}}
         transition={{duration:1 }}
        className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img
                    whileInView={{opacity: 1,x:0}}
                    initial={{opacity: 0,x: -100}}
                    transition={{duration: 0.5}}
                    src={aboutPic} alt="About Pics" className='rounded-2xl'/>
                </div>
            </div>
            <motion.div
            whileInView={{opacity: 1,x: 0}}
            initial={{opacity: 0,x: 100}}
            transition={{duration: 0.5}}
             className='w-full lg:w-1/2'>
                <div className='flex justify-start lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div> 
            </motion.div>    
        </div>
        <div className='flex flex-wrap flex-col items-center'>
            <motion.h1
            initial={{opacity: 0,y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}} 
            className='my-20 text-4xl'>Days I Code</motion.h1>
            <motion.span > 
                <GithubCallender/>
            </motion.span>
        </div>
    </div>
  )
}

export default About