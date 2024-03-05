import React from 'react';
import ProyectItem from './proyect-item';



const ProyectContainer = () => {
    const content = [
        'he initial project I developed is a web application for a local gym. This application enables the gym administrator to perform operations such as viewing registered users, deleting users, updating workout routines, and creating templates with new routines. Additionally, there is functionality in progress for inserting new exercises and deleting existing ones.',
        'his project stemmed from the idea of learning to use TypeScript, React, and Vite in tandem, and it proved to be a challenging yet enjoyable experience. I undertook this self-directed journey without following any specific courses or utilizing templates, developing this initial version (which I plan to continuously improve). In my opinion, it was a success given the short period it took (just 7 days) to both learn these technologies from scratch and apply them in a functional manner.'
    ]
    const mayus = ['T','T']
    const title = ['Leadergym','This portfolio']
    const techs = [["HTML5, CSS, JS","NodeJs, Express.js",'MySQL, NestJs','Git, GitHub','EJS (Embedded JavaScript)','JsonWebToken (JWT)','WebSockets (socket.io)','Hashing (bcrypt)'],["TypeScript","NodeJs","ReactJs",'TailwindCss','Vite',"Git, GitHub, GitPages"]]
  return (
    <>
    <div>
    <h1 className='text-3xl text-white mb-8 mt-28 font-bold bg-principal bg-opacity-90 p-4 rounded-xl hover:shadow-black cursor-pointer hover:underline'>My proyects</h1>
    </div>
    <div className='bg-secundario bg-opacity-90 w-10/12 flex flex-wrap p-6 rounded-xl gap-10 font-nunito shadow-2xl'>
        {content.map((text,index)=>(
            <ProyectItem children={title[index]} width={48} content={text} techs={techs[index]} mayus={mayus[index]}/>
        ))}
        
        
        
        
    </div>
    </>
    
  );
};

export default ProyectContainer;