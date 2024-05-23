import { projects } from "../../gateways/images";
import Cards from "./cards";



import Carousel from "./carousel";


const Section2 = () => {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center  ">
            <Carousel images={projects}/> 
            {/* <div className="flex flex-wrap gap-72">
{skillName.map((skill,index)=>(
                <Book images={images[index]} index={index} title={skill}  key={index+1} />
            ))}
            </div> */}
         <Cards/> 
            
        </div>
    )
}
export default Section2;