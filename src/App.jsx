import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProgressBar from './components/ProgressBar';
function App() {
  return (
    <>
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      
      </div>
      <ProgressBar/>
        <div className='container mx-auto px-12'>
          <Navbar/>
          <Hero/>
          <About/>
          <Tech/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
