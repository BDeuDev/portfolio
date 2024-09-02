import { ReactNode, RefObject } from "react";

interface BentoGridProps {
    observed: boolean;
    reference: RefObject<HTMLDivElement>;
    children: ReactNode;
}

export default function BentoGrid({observed,reference,children}: Readonly<BentoGridProps>) {
    return (
        <div className={`flex min-h-screen w-full items-center justify-center p-6 `} ref={reference}>
            <div className="grid h-[600px] w-[650px] grid-cols-10 grid-rows-10 gap-4">
                {children}
            </div>
        </div>
    );
} 