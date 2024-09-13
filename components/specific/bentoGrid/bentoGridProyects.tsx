import { ReactNode, RefObject } from "react";

interface BentoGridProps {
    children: ReactNode;
    reference: RefObject<HTMLDivElement>;

}

export default function BentoGridProjects({children,reference}: Readonly<BentoGridProps>) {
  return (
    <div className="w-[800px] h-[600px] grid grid-cols-12 grid-rows-12 mb-[80px]  gap-4" ref={reference}>
        {children}
    </div>
  );
}