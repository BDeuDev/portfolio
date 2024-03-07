
interface ItemProp {
    children: string;
    width:number;
   
    techs:string[]
    
}


const ProyectItem: React.FC<ItemProp> = ({children,width,techs}) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-principal h-auto  text-white rounded-xl hover:shadow-white' style={{width:`${width}%`}}>
      <h1 className='text-3xl mt-10 font-bold hover:underline hover:scale-110'>{children}</h1>
      
      <h3 className='text-xl font-bold hover:scale-110 hover:underline' >Work with:</h3>
      <div className='ml-10 mr-10 mt-3 mb-10 p-5 leading-8 flex flex-col items-start justify-start '>{techs.map((item,index)=>(
        <ul className='list-disc'>
            <li className='text-white hover:underline hover:scale-110' key={index}>{item}</li>
        </ul>
      ))
      
      }</div>
    </div>
    </>
    
  );
};

export default ProyectItem;