import { ReactNode, RefObject } from "react";

interface BentoGridProps {
    children: ReactNode;
    reference: RefObject<HTMLDivElement>;

}

export default function BentoGrid({children,reference}: Readonly<BentoGridProps>) {
  return (
    <div className="w-[650px] h-[600px] grid grid-cols-10 grid-rows-10  gap-4" ref={reference}>
        {children}
    </div>
  );
}