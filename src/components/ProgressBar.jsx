import {motion, useScroll} from 'framer-motion';
function ProgressBar() {
    const {scrollYProgress} = useScroll();
  return (
    <div className='fixed top-0 right-0 left-0 h-1 bg-neutral-600 z-10'>
      <motion.div style={{scaleX: scrollYProgress}} className='fixed top-0 right-0 left-0 h-1 bg-purple-800 origin-left'></motion.div>
    </div>
  )
}

export default ProgressBar