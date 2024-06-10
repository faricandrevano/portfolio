import {motion, useScroll} from 'framer-motion';
function ProgressBar() {
    const {scrollYProgress} = useScroll();
  return (
    <motion.div style={{scaleX: scrollYProgress}} className='fixed top-0 right-0 left-0 h-1 bg-purple-800 origin-left z-10'></motion.div>
  )
}

export default ProgressBar