import TypedComponent from "../utils/typedComponent";
import Links from "./links";



const Section0 = () => {

  return (

    <div className="flex flex-col items-center justify-center font-orbitron absolute z-40 top-[30%]">
      <div className="flex flex-row items-start justify-start mt-5 mb-5 ">
        <h1 className="text-white text-6xl cursor-pointer font-bold">W</h1>
        <h1 className="text-white text-6xl  cursor-pointer font-bold">elcome,</h1>
      </div>
      <div className="flex flex-row items-center justify-center lg:w-[600px] xl:w-[700px] md:w-[600px] mobile:w-[270px]">
        <h1 className=" text-2xl cursor-pointer font-light text-opacity-75 text-white "><span className="text-2xl  cursor-pointer font-medium text-opacity-75 text-white">I'm</span> Bernabé Deusich <span className="text-2xl  cursor-pointer font-medium text-opacity-75 text-white">a:</span> <span className="text-opacity-80 text-blue-700 font-medium"><TypedComponent /></span></h1>
      </div>

      <Links />
    </div>

  )
}
export default Section0;