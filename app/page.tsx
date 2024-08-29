"use client";
import { RefObject, useEffect, useState } from "react";
import useIntersection from "../hooks/useIntersection";
import Header from "../components/ui/header/header";
import Home from "@/components/ui/sections/home/home";
import About from "@/components/ui/sections/about/about";
import Technologies from "@/components/ui/sections/technologies/technologies";
import Projects from "@/components/ui/sections/projects/projects";
import Footer from "@/components/ui/footer/footer";
import useStore from "@/store/store";
import Line from "@/components/common/lineSection/line";

export default function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const [isIntersecting1, ref1] = useIntersection({
    threshold: 0.6
  });
  const [isIntersecting2, ref2] = useIntersection({
    threshold: 0.6
  });
  const [isIntersecting3, ref3] = useIntersection({
    threshold: 0.6
  });
  const [isIntersecting4, ref4] = useIntersection({
    threshold: 0.6
  });
  const refs = [
    ref1 as RefObject<HTMLDivElement>,
    ref2 as RefObject<HTMLDivElement>,
    ref3 as RefObject<HTMLDivElement>,
    ref4 as RefObject<HTMLDivElement>
  ];
  const intersectings = [
    isIntersecting1,
    isIntersecting2,
    isIntersecting3,
    isIntersecting4
  ];
  const scrollToSection = (index: number) => {
    if (refs[index].current) {
      refs[index].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {

    intersectings.map((value, index) => {
      if (value) {
        setCurrentSection(index);
      }
    });
  });
  return (
    <main className="flex min-h-screen flex-col ">
      <Header scrollToSection={scrollToSection} currentSection={currentSection} />
      <Home reference={refs[0]} observed={intersectings[0] as boolean} />
      <Line/>
      <About reference={refs[1]} observed={intersectings[1] as boolean} />
      <Line/>
      <Technologies reference={refs[2]} observed={intersectings[2] as boolean} />
      <Line/>
      <Projects reference={refs[3]} observed={intersectings[2] as boolean}  scrollToSection={scrollToSection} currentSection={currentSection}/>
      <Line/>
      <Footer/>
    </main>
  );
}
