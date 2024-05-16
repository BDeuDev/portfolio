import { useRef, useState, useEffect, RefObject } from 'react';

import { icons, texts } from "../../gateways/icons";
import SectionLink from "../header/sectionLink";
import useIntersection from '../../hooks/useIntersection';
import Section0 from '../section0/section0';
import Section1 from '../section1/section1';

import Smoke from '../section0/smoke';
import Section2 from '../section2/section2';
import Menu from '../header/menu';
import { useSelector } from 'react-redux';
import LinkContainer from '../header/linkContainer';



const Main = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    const [currentSection, setCurrentSection] = useState<number>(0);
    //@ts-ignore
    const {isClicked} = useSelector((state) => state.menu);
    console.log(isClicked)
    const [isIntersecting1, ref1] = useIntersection({
        threshold: 0.6
    });
    const [isIntersecting2, ref2] = useIntersection({
        threshold: 0.1
    });
    const [isIntersecting3, ref3] = useIntersection({
        threshold: 0.6
    });
    const sections = [
        ref1 as RefObject<HTMLDivElement>,
        ref2 as RefObject<HTMLDivElement>,
        ref3 as RefObject<HTMLDivElement>
    ];

    const intersectings = [
        isIntersecting1,
        isIntersecting2,
        isIntersecting3
    ];

    const scrollToSection = (index: number) => {
        if (sections[index].current) {
            sections[index].current?.scrollIntoView({ behavior: 'smooth' });
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
        <main ref={mainRef} className="h-screen w-full main">
            <header className='fixed glassmorphism-xl-header h-[50px] top-0 w-full border-b-[2px] border-[#30363d] flex flex-row items-center justify-end z-50'>
                <nav className="nav-desktop flex-row items-end justify-end mr-1">
                    {icons.map((icono, index) => (
                        <SectionLink key={index + 1} icon={icono} onclick={() => scrollToSection(index)} text={texts[index]} active={currentSection === index} />
                    ))}
                </nav>
                <nav className='nav-mobile text-white z-50 flex-row items-center justify-center'>
                    <Menu/>
                </nav>
                <LinkContainer click={isClicked}/>
                
            </header>
            
            <section ref={sections[0]} className= {`h-full w-full flex flex-col justify-center items-center transition transform ease-in-out duration-[1.5s] ${!isClicked ? 'brightness-50' : ''}`}>
                <Section0/>
                <div className='w-full h-screen ' style={{ zIndex: 10 }}>
                    <img src="./bg-2.png" alt="" className="object-cover h-full w-full " style={{maskImage: 'linear-gradient(black 90%, transparent)'}}/>
                    <Smoke/>
                </div>
                
            </section>
            <section ref={sections[1]} className=" w-full ">
                <Section1 />
            </section>
            <section ref={sections[2]} className=" w-full  flex flex-col  justify-center items-center">
                <Section2 />
            </section>
            <section>
   
            </section>
        </main>
    );
}

export default Main;


