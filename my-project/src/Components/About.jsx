import React from 'react'
import AboutImage from '../assets/newprofile.jpg'

const About = () => {
  return (
    <div className='bg-black c:\Users\Ankit Kumar\Downloads\pexels-pixabay-414727.jpg text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
           <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
           <div className='flex flex-col md:flex-row  md:space-x-12'>
               <img src={AboutImage} alt=""
               className='w-72 h-80 rounded object-cover mb:-9 md:mb-0' />
             <div className='flex-1'>
              <p className='text-lg mb-8'>
              My name is Ankit Kumar. I am currently pursuing my Bachelor of Technology in Electronics and Communication Engineering from Maharaja Surajmal Institute of
               Technology, New Delhi, India. I love solving complex problems, enjoy challenges, and thrive under pressure while maintaining a positive image. With logical
                and creative thinking, I have a deep interest in coding and creating unique art. Additionally, I enjoy reading, playing games like Sudoku, exercising, and 
                c:\Users\Ankit Kumar\Downloads\pexels-sevenstormphotography-981866.jpgalways smiling. I am a driven and dedicated individual with a diverse range of skills and interests. I possess excellent communication and leadership skills,
                 and I love meeting new people and learning from them. I am constantly seeking new opportunities to learn and grow, and I am excited to see what the future holds.
             </p>
{/* ----------------Skill-1---------------------------------------------------------------- */}
             <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(1) HTML and CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                    </div>
                </div>
             </div>
{/* ---------------Skill-2-------------------------------------------------------------------- */}
             <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(2) JavaScript</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12'></div>

                    </div>
                </div>
             </div>
 {/* -------------------skill-3---------------------------------------------------------------*/}
             <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(3) ReactJs</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-8/12'></div>

                    </div>
                </div>
             </div>

{/* -----------------------skill-4------------------------------------------------------------*/}
            <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(4) Tailwind</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'></div>

                    </div>
                </div>
             </div>
             <hr className='mt-9' />

             <div className='space-y-4'>
                <div className=' mt-12 flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(1) DSA with C++</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                    </div>
                </div>
             </div>
             <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(2) Object Oriented Programming</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                    </div>
                </div>
             </div>
             <hr className='mt-9' />
             <div className='space-y-4'>
                <div className=' mt-12 flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(1) DataBase Management System(DBMS)</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'></div>

                    </div>
                </div>
             </div>
             <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(2) operating System(OS)</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-11/12'></div>

                    </div>
                </div>
             </div>
             <div className='space-y-4'>
                <div className='flex items-center'> 
                    <label htmlFor="htmlandcss" className='w-2/12'>(3) Computer Networks</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12'></div>

                    </div>
                </div>
             </div>
             </div>
             <div>
                <div>
                    <h3>
                        
                    </h3>
                    <p></p>
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default About



