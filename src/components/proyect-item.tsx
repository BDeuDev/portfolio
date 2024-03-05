
import React from 'react';
interface ItemProp {
    children: string;
    width:number;
    content:string
    techs:string[]
    mayus:string
}


const ProyectItem: React.FC<ItemProp> = ({children,width,content,techs,mayus}) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-principal h-auto  text-white rounded-xl' style={{width:`${width}%`}}>
      <h1 className='text-3xl mt-10 font-bold underline'>{children}</h1>
      <p className='m-10 leading-8'><i className='text-xl font-bold'>{mayus}</i>{content}</p>
      <h3 className='text-xl font-bold'>Work with:</h3>
      <div className='ml-10 mr-10 mt-3 mb-10 p-5 leading-8 flex flex-col items-start justify-start'>{techs.map((item,index)=>(
        <ul className='list-disc'>
            <li className='text-white' key={index}>{item}</li>
        </ul>
      ))
      
      }</div>
    </div>
    </>
    
  );
};

export default ProyectItem;