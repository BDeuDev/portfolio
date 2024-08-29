import useStore from "@/store/store";
import { RefObject } from "react";

interface AboutProps {
    reference: RefObject<HTMLDivElement>;
    observed: boolean;
}

export default function About({ reference, observed }: Readonly<AboutProps>) {

    const { switchState } = useStore();
    return (
        <section ref={reference} className={`min-h-screen ${switchState ? 'bg-black' : 'bg-[#fff]'} text-black pt-[64px] flex flex-row items-center justify-center`}>
            <div className={`w-[50%] flex flex-col items-center justify-center`}>
                <h2 className={` ${observed ? ' opacity-100' : 'translate-x-[-200px] opacity-0'} ${switchState ? 'text-white' : 'text-black'} text-[3em] transition transform ease-in-out duration-[2s]`}>
                    Who I am?
                </h2>
            </div>
            <div className={`w-[50%]`}>

            </div>
        </section>
    );
}