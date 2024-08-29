import BackToHome from "@/components/specific/backtohome/backToHome";
import useStore from "@/store/store";
import { RefObject } from "react";

interface ProjectsProps {
  reference: RefObject<HTMLDivElement>;
  observed: boolean;
  scrollToSection: (index: number) => void;
  currentSection: number;
}

export default function Projects({ reference, observed, scrollToSection, currentSection }: Readonly<ProjectsProps>) {
  const { switchState } = useStore();
  return (
    <section 
      ref={reference} 
      className={`min-h-screen ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex flex-col items-center justify-center`}
    >

      <div className="flex-grow"></div> 

      <BackToHome 
        scrollToSection={scrollToSection} 
        currentSection={currentSection} 
      />
    </section>
  );
}
