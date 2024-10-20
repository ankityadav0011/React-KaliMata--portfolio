import React from 'react';
import heroimage from '../assets/profile-red.jpg';
import resume from '../assets/resume.pdf';
import image from '../assets/bg-image.jpg'; // Import the background image
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words:['Software Developer', 'Frontend Developer', 'Problem Solver', 'Youtuber', 'Singer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div
      className='text-white text-center py-16 h-screen flex flex-col justify-center'
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Inline style for background image
    >
      <img
        src={heroimage}
        alt=""
        className='mx-auto mb-10 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I am{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white'>
          Ankit Kumar a {text}
        </span>
        <Cursor />
      </h1>
      <p className='mt-4 text-lg text-white'>
        Please take a look at my resume to know more about me.
      </p>
      <div className='mt-9 mb- space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href={resume} download='resume'>Download Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;



