import { aboutEn } from "../constants"
import Links from "./links"
import MyTypedComponent from "./typingEffect"


const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-raleway">
        <div className="flex flex-row items-start justify-start mt-5  mb-5">
          <h1 className="text-opacity-80 text-blue-700 text-6xl  cursor-pointer font-bold">W</h1>
          <h1 className="text-zinc-800 text-opacity-75 text-6xl  cursor-pointer font-extralight">elcome,</h1>
        </div>
        <div className="flex flex-row items-center justify-center lg:w-[600px] xl:w-[600px] md:w-[600px] mobile:w-[270px]">
          <h1 className=" text-2xl cursor-pointer font-light text-opacity-75 text-zinc-800 "><span className="text-2xl  cursor-pointer font-medium text-opacity-75 text-zinc-800">I'm</span> Bernabé Deusich <span className="text-2xl  cursor-pointer font-medium text-opacity-75 text-zinc-800">a:</span> <span className="text-opacity-80 text-blue-700 font-medium"><MyTypedComponent /></span></h1>
        </div>
      </div>

      <span className="w-full h-[25px]"></span>

      <div className="flex flex-row items-center justify-center lg:w-[820px] xl:w-[820px] md:w-[600px] mobile:w-[350px] ">
        <h1 className=" text-xl cursor-pointer text-zinc-800 text-opacity-75 leading-9 font-raleway font-light">{aboutEn}</h1>
      </div>
      <Links/>
    </>
  )
}
export default About;