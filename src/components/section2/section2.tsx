import { projects } from "../../gateways/images";
import Carousel from "./carousel";


const Section2 = () => {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center font-orbitron ">
            <Carousel images={projects}/> 
        </div>
    )
}
export default Section2;