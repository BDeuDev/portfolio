import BackToHome from "@/components/specific/backtohome/backToHome";
import BentoCellProjects from "@/components/specific/bentoGrid/bentoCellProyects";
import BentoGridProjects from "@/components/specific/bentoGrid/bentoGridProyects";
import useIntersection from "@/hooks/useIntersection";
import useStore from "@/store/store";
import { RefObject } from "react";
import { projects } from "@/components/lib/projects";

interface ProjectsProps {
  reference: RefObject<HTMLDivElement>;
  observed: boolean;
  scrollToSection: (index: number) => void;
  currentSection: number;
}

export default function Projects({ reference, observed, scrollToSection, currentSection }: Readonly<ProjectsProps>) {
  const { switchState } = useStore();
  const [isIntersecting1, ref1] = useIntersection({
    threshold: 0.7
  });
  const [isIntersecting2, ref2] = useIntersection({
    threshold: 0.7
  });
  const [isIntersecting3, ref3] = useIntersection({
    threshold: 0.7
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
    <section
      ref={reference}
      className={`min-h-screen ${switchState ? 'bg-[#121725]' : 'bg-[#f5f4f4]'} text-black pt-[64px] flex flex-col items-center justify-center`}
    >


      
      <BentoGridProjects reference={refs[0]}>
        {projects.map((project, index) => (
          <BentoCellProjects
            key={index+1}
            colSpan={project.colSpan}
            rowSpan={project.rowSpan}
            altText={project.altText}
            animationClasses={project.animationClasses}
            bgColor={project.bgColor}
            duration={project.duration}
            imgFit={project.imgFit}
            imgH={project.imgH}
            imgSrc={project.imgSrc}
            observed={intersectings[0]}
            text={project?.text}
          />
        ))}

      </BentoGridProjects>
      <BackToHome
        scrollToSection={scrollToSection}
        currentSection={currentSection}
      />
    </section>
  );
}
