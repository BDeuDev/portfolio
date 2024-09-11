import { techs } from "@/components/lib/data";
import BentoCell from "@/components/specific/bentoGrid/bentoCell";
import BentoGrid from "@/components/specific/bentoGrid/bentoGrid";

import useIntersection from "@/hooks/useIntersection";
import useStore from "@/store/store";
import { RefObject } from "react";

interface TechnologiesProps {
  reference: RefObject<HTMLDivElement>;
  observed: boolean;
}


export default function Technologies({ reference, observed }: Readonly<TechnologiesProps>) {
  const { switchState } = useStore();
  const [isIntersecting1, ref1] = useIntersection({
    threshold: 0.7
  });
  const [isIntersecting2, ref2] = useIntersection({
    threshold: 0.7
  });
  const [isIntersecting3, ref3] = useIntersection({
    threshold: 0.7
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
    <section ref={reference} className={`min-h-screen w-full ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex flex-col items-center justify-center`}>
      {techs.map((tech, index) => (
        <BentoGrid key={index + 1} reference={refs[index]}>
          {tech.map((tec, indexT) => (
            <BentoCell
              key={indexT + 1}
              colSpan={tec.colSpan}
              rowSpan={tec.rowSpan}
              altText={tec.altText}
              animationClasses={tec.animationClasses}
              bgColor={tec.bgColor}
              duration={tec.duration}
              imgFit={tec.imgFit}
              imgH={tec.imgH}
              imgSrc={tec.imgSrc}
              observed={intersectings[index]}
              text={tec?.text}

            />
          ))}


        </BentoGrid>
      ))}


    </section>
  );
}