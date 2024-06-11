import { SiTailwindcss,SiReact,SiFlutter,SiMongodb,SiLaravel,SiDotnet,SiPrisma,SiExpress,SiNodedotjs } from "react-icons/si";
import {animate, motion} from "framer-motion"
const icon = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        initial={{opacity: 0,y: -100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        initial={{opacity: 0,x: -100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration: 1.4}}
         className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
            <motion.div
            variants={icon(2.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://flutter.dev/" target="_blank">
                    <SiFlutter className="text-7xl text-cyan-400"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(3)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://laravel.com/" target="_blank">
                    <SiLaravel className="text-7xl text-red-400" title="Laravel"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(3.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                    <SiReact className="text-7xl text-cyan-400" title="ReactJS"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(4)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                    <SiMongodb className="text-7xl text-green-400" title="MongoDB"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(4.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">
                    <SiDotnet className="text-7xl text-purple-400" title=".NET"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                    <SiTailwindcss className="text-7xl text-cyan-400" title="Tailwindcss"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(5.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
                    <SiPrisma className="text-7xl text-[#0c344b]" title="PrismaJS"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(6)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                    <SiNodedotjs className="text-7xl text-green-400" title="Nodejs"/>
                </a>
            </motion.div>
            <motion.div
            variants={icon(6.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                    <SiExpress className="text-7xl text-white" title="ExpressJS"/>
                </a>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech