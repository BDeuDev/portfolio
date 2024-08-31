import BentoGrid from "@/components/specific/bentoGrid/bentoGrid";
import useIntersection from "@/hooks/useIntersection";
import useStore from "@/store/store";
import { RefObject } from "react";

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
        <BentoGrid observed={intersectings[0]} reference={refs[0]}/>
        <BentoGrid observed={intersectings[1]} reference={refs[1]}/>
        <BentoGrid observed={intersectings[2]} reference={refs[2]}/>
    </section>
  );
}