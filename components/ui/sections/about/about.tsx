import Description from "@/components/specific/description/description";
import useStore from "@/store/store";
import { RefObject } from "react";

interface AboutProps {
    reference: RefObject<HTMLDivElement>;
    observed: boolean;
}

export default function About({ reference, observed }: Readonly<AboutProps>) {

    const { switchState } = useStore();
    return (
        <section ref={reference} className={`min-h-screen ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col mob:flex-col items-center justify-center`}>
            <div className={`2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full mob:w-full flex flex-col items-center justify-center`}>
                <h2 className={` ${observed ? 'translate-x-0 opacity-100' : 'translate-x-[-200px] opacity-0'} ${switchState ? 'text-white' : 'text-black'}  text-[3em] transition transform ease-in-out duration-[2s]`}>
                    Who I am?
                </h2>
            </div>
            <div className={`2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full mob:w-full flex flex-col items-center justify-center`}>
                <Description observed={observed}/>
            </div>
        </section>
    );
}