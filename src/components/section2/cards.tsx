import { projects } from '../../gateways/images';
import { titles, techs, descriptions } from '../../gateways/info';

interface CadrsProps {
  techno: string[]
}

const Cards = () => {
  return (
    <div className='w-10/12 h-full  flex-wrap items-center justify-center gap-10 xl:hidden lg:hidden mobile:flex sm:flex '>
      {projects.map((image, index) => (
        <div className='relative flex flex-col items-center justify-center  w-full h-[300px] shadow-2xl border-2 border-white rounded-xl ' key={index + 1}>
          <div className='absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-75 rounded-xl gap-4'>
            <h2 className='text-white text-xl'>{titles[index]}</h2>

            <div className='w-11/12 flex flex-wrap items-center justify-center gap-2 '>
              {techs[index].map((tech, index) => (
                <h2 className='text-black bg-white rounded-sm  p-1' key={index + 1}>{tech}</h2>
              ))}
              <p key={index + 1} className='text-white'>{descriptions[index]}</p>
            </div>
          </div>
          <img src={image} alt="" key={index + 1} className='object-cover h-full w-full rounded-xl' />
        </div>
      ))}

    </div>
  );
};

export default Cards;