import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import ProjectCard from "./ProjectCard";
const ContainerVariants = (Leftcontainer,index) => ({
    from: {
        x: Leftcontainer? -100: 100,
        opacity: 0
    },
    to: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}) 
function Projects() {
    const [countProject,setCountProject] = useState(3)
    const [items,setItems] = useState([]);
    const showMoreItem = () => {
        setCountProject(prevCount => prevCount + 3)
    }
    useEffect(() => {
        setItems(PROJECTS.slice(0,countProject));
    },[countProject])
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        initial={{y: -100,opacity: 0}}
        whileInView={{y: 0,opacity:1}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            {items.map((el,index) => (
                <motion.div
                initial={{x: -100,opacity: 0}}
                whileInView={{x: 0,opacity:1}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="my-4" key={index}>
                    <ProjectCard project={el}/>
                </motion.div>
            ))}
            {
                countProject < PROJECTS.length && (
                    <motion.button
                    initial={{scale: 1}}
                    whileHover={{scale: 1.1}}
                    onClick={showMoreItem}
                    className="block mx-auto text-white rounded-full bg-neutral-900 px-3 py-2 my-6 text-md">Show More</motion.button>
                )
            }
        </div>
    </div>
  )
}

export default Projects