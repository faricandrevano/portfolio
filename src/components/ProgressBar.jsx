import {motion, useScroll} from 'framer-motion'; 
function ProgressBar() {
    const {scrollYProgress} = useScroll();
  return (
    <motion.div style={{scaleX: scrollYProgress}} className='fixed top-0 right-0 left-0 h-2 bg-purple-500 origin-[0] z-10'></motion.div>
  )
}

export default ProgressBar