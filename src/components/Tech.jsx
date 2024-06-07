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
         className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            <motion.div
            variants={icon(2.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className="text-7xl text-cyan-400" title="Flutter"/>
            </motion.div>
            <motion.div
            variants={icon(3)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLaravel className="text-7xl text-red-400" title="Laravel"/>
            </motion.div>
            <motion.div
            variants={icon(3.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiReact className="text-7xl text-cyan-400" title="ReactJS"/>
            </motion.div>
            <motion.div
            variants={icon(4)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400" title="MongoDB"/>
            </motion.div>
            <motion.div
            variants={icon(4.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDotnet className="text-7xl text-purple-400" title=".NET"/>
            </motion.div>
            <motion.div
            variants={icon(5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-cyan-400" title="Tailwindcss"/>
            </motion.div>
            <motion.div
            variants={icon(5.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPrisma className="text-7xl text-[#0c344b]" title="PrismaJS"/>
            </motion.div>
            <motion.div
            variants={icon(6)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNodedotjs className="text-7xl text-green-400" title="ExpressJS"/>
            </motion.div>
            <motion.div
            variants={icon(6.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-white" title="ExpressJS"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech