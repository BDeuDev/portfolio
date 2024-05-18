import React from 'react';
import { useDispatch } from 'react-redux';
import { click } from '../../redux/menuSlice';

interface mobileLinkProps {
    link:string[];
    texts:string[]
}
const MobileLink:React.FC<mobileLinkProps> = ({link,texts}) => {
    const dispatch = useDispatch();
    const handler = () =>{
       return dispatch(click())
    }
  return (
   <div className='flex flex-col items-center justify-center'>
    {texts.map((text,index)=>(
         <a href={link[index]} onClick={()=>handler()} key={index} className='text-black p-2 m-2 text-xl bg-white w-[100px] text-center rounded-md'>{text}</a>
    ))}
   </div>
      

  );
};

export default MobileLink;