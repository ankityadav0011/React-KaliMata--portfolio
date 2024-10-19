import React from 'react'
import Portimage from '../assets/portfolio.png'
import Codeeditorimage from '../assets/code.png'
import  Rockimage   from '../assets/rock.png'
import  Amazonimage from '../assets/Amazonn.png'
import  Tacimage    from '../assets/tac.png'
const projects=[
    {
        Id:1,
        Name:"Portfolio Website" ,
        Technologies:"HTML,CSS,JavaScript and ReactJs ",
        Image:Portimage,
        Link: "https://ankityadav0011.github.io/PORTFOLIO-WEBSITE-/"
    },
    {
        Id:2,
        Name:"Code Editor" ,
        Technologies:"HTML,CSS and JavaScript",
        Image:Codeeditorimage,
        Link: ""
    },
    {
        Id:3,
        Name:"Rock Scissor Paper" ,
        Technologies:"HTML,CSS and JavaScript",
        Image:Rockimage,
        Link: ""
    },
    {
        Id:4,
        Name:"Amazon Clone" ,
        Technologies:"HTML,CSS",
        Image:Amazonimage,
        Link: ""
    },
    {
        Id:5,
        Name:"Tic Tac Toe" ,
        Technologies:"HTML,CSS and JavaScript",
        Image:Tacimage,
        Link: "",
    },
];
const Project = () => {
  return (
   <div className='bg-black text-white py-20' id='project'>
     <div className='container mx-auto px-8 md:px-16 lg:px-24'>
       <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {projects.map(project=>(
                <div key={project.Id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300  hover:scale-105'>
                  <img src={project.Image} alt={project.Name} className='rounded-lg mb-4 w-full h-48 object-cover'/> 
                  <h3 className='text-2xl font-bold mb-2'>{project.Name}</h3> 
                  <p className='text-gray-400 mb-4'>{project.Technologies}</p>
                  <a  href={project.Link} className='inline-block bg-gradient-to-tr from-green-400 to-blue-500
                   text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>Link</a>

                </div>
            ))}
         </div>
     </div>
   </div>
  )
}
export default Project
