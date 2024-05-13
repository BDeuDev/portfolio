import React, { RefObject } from 'react';

interface BookProps{
    active:boolean;
    reference:RefObject<HTMLDivElement>
    title:string;
    images:string[]
    text:string[];

}
const Book:React.FC<BookProps> = ({images,text,title,active,reference}) => {
  return (
    <div className={`book ${active ? 'opacity-100 ':'opacity-0 scale-[5%]'} translate-x-[-150px] hover:translate-x-0 my-[300px] mx-auto transition transform ease-in-out duration-700` } ref={reference}>
        <div className="cover flex flex-col items-center justify-center text-white">
            <h2 className='text-2xl font-bold'>
                {title}
            </h2>
        </div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page flex flex-col items-center justify-center text-black ">
            
        </div>
        <div className="last-page flex flex-col items-center justify-center">
        <div className="cube-container justify-start items-center ">
            {images.map((image,index)=>(
               <div className='flex flex-col items-center justify-center' key={index+1}>
                <div className="cube flex flex-col items-center justify-center mx-6 my-3">
                    <img src={image} alt="" className='object-cover rounded-lg w-full h-auto' />
                </div>
                <h4 className='text-sm font-bold'>{text[index]}</h4>
               </div>
                
            ))}
            </div>
        </div>
        <div className="back-cover"></div>
    </div>
  );
};

export default Book;