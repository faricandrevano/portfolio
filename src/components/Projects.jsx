import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ProjectCard from "./ProjectCard";
function Projects() {
    const [countProject,setCountProject] = useState(3)
    const [Loading,setLoading] = useState(false);
    const [items,setItems] = useState([]);
    const showMoreItem = () => {
        setLoading(true);
        setTimeout(() => {
            setCountProject(prevCount => prevCount + 3)
            setLoading(false);
        },2000)
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
                Loading ? (
                    <ThreeDots 
                      height={50}
                      width={50}
                      color="#4e0a57"
                      wrapperClass="flex justify-center"
                      />
                ) : (
                    countProject < PROJECTS.length && (
                        <motion.button
                        initial={{scale: 1}}
                        whileHover={{scale: 1.1}}
                        onClick={showMoreItem}
                        className="block mx-auto text-white rounded-full bg-neutral-900 px-3 py-2 my-6 text-md">Show More</motion.button>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Projects