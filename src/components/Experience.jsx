import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const animationContainer = (sideLeft,duration) => ({
    hidden: {
        opacity: 0,
        x: sideLeft ? -100 : 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.5 + duration}
    }
})
function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        initial={{y: -100,opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((el,index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <motion.p
                        variants={animationContainer(true,index)}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once: true}}
                        className="mb-2 text-sm text-neutral-400">{el.year}</motion.p>
                    </div>
                    <motion.div
                    variants={animationContainer(false,index)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}} 
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{el.role} - <span className="text-sm text-purple-100">{el.company}</span></h6>
                        <p className="mb-4 text-neutral-400">{el.description}</p>
                        {el.technologies.map((tech,index) => (
                            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" key={index}>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Experience;