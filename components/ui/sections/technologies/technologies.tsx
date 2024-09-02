import { techs } from "@/components/lib/data";
import BentoCell from "@/components/specific/bentoGrid/bentoCell";
import BentoGrid from "@/components/specific/bentoGrid/bentoGrid";
import useIntersection from "@/hooks/useIntersection";
import useStore from "@/store/store";
import { RefObject, useEffect } from "react";

interface TechnologiesProps {
    reference: RefObject<HTMLDivElement>;
    observed: boolean;
}
    
  
export default function Technologies({reference,observed}: Readonly<TechnologiesProps>) {
  const { switchState } = useStore();
  const [isIntersecting1, ref1] = useIntersection({
    threshold: 0.6
  });
  const [isIntersecting2, ref2] = useIntersection({
    threshold: 0.6
  });
  const [isIntersecting3, ref3] = useIntersection({
    threshold: 0.6
  });
  const refs = [
    ref1 as RefObject<HTMLDivElement>,
    ref2 as RefObject<HTMLDivElement>,
    ref3 as RefObject<HTMLDivElement>,

  ];
  const intersectings = [
    isIntersecting1 as boolean,
    isIntersecting2 as boolean,
    isIntersecting3 as boolean,

  ];
 
  return (
    <section ref={reference} className={`min-h-screen ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex flex-col items-center justify-center`}>
        {techs.map((_,index)=>(
         <BentoGrid key={index + 1} observed={intersectings[index]} reference={refs[index]}>
          {techs[0].map((_,indexC)=>(
            <BentoCell key={indexC} colSpan={techs[index][indexC]?.colSpan}
                    rowSpan={techs[index][indexC]?.rowSpan}
                    observed={intersectings[index]}
                    bgColor={techs[index][indexC]?.bgColor}
                    object={techs[index][indexC]?.object}
                    imageSrc={techs[index][indexC]?.imageSrc}
                    additionalClasses={techs[index][indexC]?.additionalClasses}
                    text={techs[index][indexC]?.text}
                    altText={techs[index][indexC]?.altText}
                    duration={techs[index][indexC]?.duration}
                    animationClasses={techs[index][indexC]?.animationClasses}/>
          ))}
            
          </BentoGrid>
        ))}
    </section>
  );
}