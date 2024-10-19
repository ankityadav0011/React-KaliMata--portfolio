import Hero from './Components/hero' 
import Navbar from './Components/Navbar' 
import About from './Components/About' 
import Project from './Components/Project' 
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Service from './Components/service'
import Education from './Components/Education'
                          
function App(){
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
     <Education/>
      <Project/>
      <Service/>
      <Contact/>
      <Footer/>
  
    </div>    
  )
}                                              
export  default App
