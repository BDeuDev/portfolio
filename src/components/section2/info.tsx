import React from 'react';
interface InfoProps {
    title: string;
    tech: string[];
    description:string
}
const Info: React.FC<InfoProps> = ({ title ,tech,description }) => {
    return (
        <div className='bg-gray-800 w-full h-full z-40 absolute group bg-opacity-0 hover:bg-opacity-75 transition transform ease-in-out duration-700 '>
            <div className=' absolute group-hover:opacity-100 opacity-0 z-50 transition transform ease-in-out duration-700 '>
                <div className='flex flex-col items-start justify-center mx-8 my-8 gap-5'>

                    <h2 className='text-white  p-1 rounded-sm text-2xl'>
                        {title}
                    </h2>

                    <div className='flex flex-row items-center justify-center gap-4'>
                        {tech.map((value, index) => (
                            <h2 className='text-black bg-white font-bold p-1 text-lg rounded-sm ' key={index + 1}>
                                {value}
                            </h2>
                        ))}
                    </div>

                    <div className="h-auto w-96 relative text-left">
                        <p className="absolute text-white text-xl">
                            {description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Info;