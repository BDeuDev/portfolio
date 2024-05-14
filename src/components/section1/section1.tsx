import { RefObject } from "react";
import { skillName, images, texts } from "../../gateways/skills";
import useIntersection from "../../hooks/useIntersection";
import Book from "../section2/book";

const Section1 = () => {
    const [isIntersecting1, ref1] = useIntersection({
        threshold: 0.4
    });
    const [isIntersecting2, ref2] = useIntersection({
        threshold: 0.6
    });
    const [isIntersecting3, ref3] = useIntersection({
        threshold: 0.6
    });

    const sections = [
        ref1 as RefObject<HTMLDivElement>,
        ref2 as RefObject<HTMLDivElement>,
        ref3 as RefObject<HTMLDivElement>
    ];
    const intersectings = [
        isIntersecting1 as boolean,
        isIntersecting2 as boolean,
        isIntersecting3 as boolean
    ]
    
    return (
        <div className=" h-full w-full flex flex-col  font-orbitron ">
            {skillName.map((skill,index)=>(
                <Book images={images[index]}  text={texts[index]} title={skill}  key={index+1} active={intersectings[index]} reference={sections[index]}/>
            ))}
            
        </div>
    )
}
export default Section1;