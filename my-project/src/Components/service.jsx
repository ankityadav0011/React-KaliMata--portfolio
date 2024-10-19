import React from "react";
const services = [
  {
    id: 1,
    title: "Software Developer Intern at BlueStock Fintech ",
    description: "Create a web application and REST API that provides IPO-related information to the public,The application will display information such as company logo ,name price band etc .",
    link:"https://drive.google.com/file/d/11UtKYGG60QhO2aguvRW3OhhbcYplwcOB/view",
  },
  {
    id: 2,
    title: "DSA Mentor at Youtube",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sed ex suscipit obcaecati inventore officia tenetur. Magni vero quibusdam similique eaque debitis optio. Accusantium animi, neque veniam placeat beatae officia?",
    link:"https://www.youtube.com/@youtuberankit001",
  },
  
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a  href={service.link} className='inline-block bg-gradient-to-tr from-green-400 to-blue-500
               text-white px-4 py-2  mt-5 rounded-full' target='_blank' rel='noopener noreferrer'>View Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;