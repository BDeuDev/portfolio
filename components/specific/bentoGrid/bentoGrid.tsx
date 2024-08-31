import { RefObject } from "react";

interface BentoGridProps {
    observed: boolean;
    reference: RefObject<HTMLDivElement>;
}

export default function BentoGrid({observed,reference}: Readonly<BentoGridProps>) {
    return (
        <div className={`flex min-h-screen w-full items-center justify-center p-6 `} ref={reference}>
            <div className="grid h-[600px] w-[650px] grid-cols-10 grid-rows-10 gap-4">
                <div className="col-span-4 row-span-2 bg-white rounded-2xl flex justify-center items-center">
                    <img src="./mysql.png" alt="" className="object-contain w-full h-full rounded-2xl" />
                </div>
                <div className="col-span-4 row-span-2 bg-gray-800 rounded-2xl flex justify-center items-center">
                    <h2 className="text-blue-300 w-[70%] text-end font-semibold">Sequelize</h2>
                    <img src="./sequelize.svg" alt="" className="object-contain w-full h-full rounded-2xl" />
                </div>
                <div className="col-span-2 row-span-2 bg-indigo-400 rounded-2xl flex justify-center items-center">
                    <img src="./py.png" alt="" className="object-cover w-full h-full rounded-2xl" />
                </div>
                <div className="col-span-2 row-span-2 bg-white rounded-2xl flex justify-center items-center">
                    <img src="./postgre.png" alt="" className="object-contain w-full h-[90%] rounded-2xl" />
                </div>
                <div className="col-span-2 row-span-2 bg-white rounded-2xl flex justify-center items-center">
                    <img src="./express.svg" alt="" className="object-contain w-full h-full rounded-2xl" />
                </div>
                <div className={`col-span-6 row-span-4 ${observed ? ' opacity-100' : 'opacity-0 translate-x-[200px]'} transition transform ease-in-out duration-[1.5s] rounded-2xl flex justify-center items-center  bg-green-900`}>
                    <img src="./nodejs.png" alt="" className="object-cover w-full h-full rounded-2xl" />

                </div>
                <div className="col-span-2 row-span-2 bg-green-900 rounded-2xl flex justify-center items-center">
                    <img src="./mongodb.svg" alt="" className="object-contain w-full h-full rounded-2xl" />
                </div>
                <div className="col-span-2 row-span-2 bg-black rounded-2xl flex justify-center items-center">
                    <img src="./nestjs.svg" alt="" className="object-contain w-full h-full rounded-2xl" />
                </div>
                <div className={`col-span-6 row-span-2 bg-[#1e2432] text-white rounded-2xl flex justify-center items-center font-semibold ${observed ? ' opacity-100' : 'opacity-0 translate-y-[200px]'} transition transform ease-in-out duration-1000`}>Principal Backend Technologies</div>
                <div className="col-span-2 row-span-2 bg-indigo-400 rounded-2xl flex justify-center items-center">
                    <img src="./ts-logo-128.svg" alt="" className="object-cover w-full h-full rounded-2xl" />
                </div>
                <div className="col-span-2 row-span-2 bg-black rounded-2xl flex justify-center items-center">
                    <img src="./js.svg" alt="" className="object-cover w-full h-full rounded-2xl" />
                </div>
            </div>
        </div>
    );
} 