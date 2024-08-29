import { RefObject } from "react";
import './home.css'
import useStore from "@/store/store";

interface HomeProps {
  reference: RefObject<HTMLDivElement>;
  observed: boolean;
}

export default function Home({ reference, observed }: Readonly<HomeProps>) {
  const { switchState } = useStore();

  const baseClass = observed ? 'opacity-100' : 'opacity-0';
  const glowingClass2 = switchState ? 'text-glowing-dark-2' : 'text-glowing-light-2';
  const text = switchState ? 'text-light' : 'text-dark';
  const text2 = switchState ? 'text-white ' : 'text-black';
  return (
    <section ref={reference} className={`min-h-screen ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex flex-col items-center justify-center`}>
      <h2 className={`${baseClass} ${observed ? text2 : 'translate-x-[-200px]'} welcome text-[5em] transition transform ease-in-out duration-[2s]`}>Welcome!</h2>
      <div className="flex flex-row  w-auto text-[1.4em]  my-[70px]">
        <div className="mx-4">
          <h2 className={`${baseClass} ${observed ? text : 'translate-y-[-200px]'} leading-[0.70rem] tracking-[15px] outline-none transition transform ease-in-out duration-[2s]`}>I&apos;m</h2>
        </div>
        <h2 className={`${baseClass} ${observed ? text : 'translate-x-[200px]'} transition transform ease-in-out duration-[2s]`}>Bernabe Deusich a</h2>
      </div>
      <h2 className={`${baseClass} ${observed ? glowingClass2 : 'translate-x-[-200px]'} text-center text-[3em] transition transform ease-in-out duration-[2s]`}>
        FullStack Developer
      </h2>
    </section>
  );
}
