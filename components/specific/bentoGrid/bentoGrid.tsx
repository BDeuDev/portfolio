import { FaNodeJs } from "react-icons/fa6";

export default function BentoGrid() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
        <div className="grid h-[600px] w-[650px] grid-cols-10 grid-rows-10 gap-4">
            <div className="col-span-4 row-span-2 bg-white rounded-2xl flex justify-center items-center">
            <img src="./mysql.png" alt="" className="object-contain w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-4 row-span-2 bg-black rounded-2xl flex justify-center items-center">
                {/* <h2 className="text-blue-300 text-center">Sequelize</h2> */}
            <img src="./sequelize.svg" alt="" className="object-contain w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-2 row-span-2 bg-indigo-400 rounded-2xl flex justify-center items-center">
            <img src="./py.png" alt="" className="object-cover w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-2 row-span-2 bg-white rounded-2xl flex justify-center items-center">
            <img src="./postgre.png" alt="" className="object-contain w-full h-[90%] rounded-2xl"/>
            </div>
            <div className="col-span-2 row-span-2 bg-white rounded-2xl flex justify-center items-center">
            <img src="./express.svg" alt="" className="object-contain w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-6 row-span-4  rounded-2xl flex justify-center items-center  bg-green-900">
            <img src="./nodejs.png" alt="" className="object-cover w-full h-full rounded-2xl"/>
               
            </div>
            <div className="col-span-2 row-span-2 bg-green-900 rounded-2xl flex justify-center items-center">
            <img src="./mongodb.svg" alt="" className="object-contain w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-2 row-span-2 bg-black rounded-2xl flex justify-center items-center">
            <img src="./nestjs.svg" alt="" className="object-contain w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-6 row-span-2 bg-[#1e2432] text-white rounded-2xl flex justify-center items-center font-semibold ">Principal Backend Technologies</div>
            <div className="col-span-2 row-span-2 bg-indigo-400 rounded-2xl flex justify-center items-center">
                <img src="./ts-logo-128.svg" alt="" className="object-cover w-full h-full rounded-2xl"/>
            </div>
            <div className="col-span-2 row-span-2 bg-black rounded-2xl flex justify-center items-center">
            <img src="./js.svg" alt="" className="object-cover w-full h-full rounded-2xl"/>
            </div>
        </div>
    </div>
  );
} 