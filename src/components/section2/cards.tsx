import { projects } from '../../gateways/images';
import { titles, techs, descriptions } from '../../gateways/info';



const Cards = () => {
  return (
    <div className='w-10/12 h-full  flex-wrap items-center justify-center gap-10 xl:hidden lg:hidden mobile:flex sm:flex '>
      {projects.map((image, index) => (
        <div className='flex flex-col items-start justify-center  w-full h-[300px] shadow-2xl border-2 border-white rounded-xl backdrop-brightness-0' key={index + 1}>
          <h2 className='absolute text-white text-xl'>{titles[index]}</h2>
          <img src={image} alt="" key={index + 1} className='object-cover h-full w-full rounded-xl' />
        </div>
      ))}

    </div>





  );
};

export default Cards;