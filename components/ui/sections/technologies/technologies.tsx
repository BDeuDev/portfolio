import BentoGrid from "@/components/specific/bentoGrid/bentoGrid";
import useStore from "@/store/store";
import { RefObject } from "react";

interface TechnologiesProps {
    reference: RefObject<HTMLDivElement>;
    observed: boolean;
}
    
  
export default function Technologies({reference,observed}: Readonly<TechnologiesProps>) {
  const { switchState } = useStore();
  return (
    <section ref={reference} className={`min-h-screen ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex flex-col items-center justify-center`}>
        <BentoGrid/>
    </section>
  );
}