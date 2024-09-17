import { ReactNode, RefObject } from "react";

interface BentoGridProps {
    children: ReactNode;
    reference: RefObject<HTMLDivElement>;

}

export default function BentoGrid({children,reference}: Readonly<BentoGridProps>) {
  return (
    <div className=" 2xl:w-[750px] xl:w-[650px] lg:w-[650px] md:w-[700px] mob:w-[98%] 2xl:h-[700px] xl:h-[600px] lg:h-[600px] md:h-[650px] mob:h-[450px]    grid grid-cols-10 grid-rows-10 mb-[80px] gap-4" ref={reference}>
        {children}
    </div>
  );
}