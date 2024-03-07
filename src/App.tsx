import { useRef, useState, useEffect } from 'react';
import './App.css';
import Links from './components/links';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Particles1 from './components/particles';
import Settings from './components/settings';
import NavBar from './components/navBar';
import Skills from './components/skills';
import Span from './components/span';
import ActiveSlider from './components/carrousel';
import ActiveSlider2 from './components/carrousel2';
import SectionTitle from './components/titleSection';



const textButton = ['Inicio', 'About', 'Skills', 'Proyectos'];

const App = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [currentSection, setCurrentSection] = useState<number>(0);
  const isScrolling = useRef(false);


  const scrollToSection = (index: number) => {
    if (sectionRefs[index].current) {
      isScrolling.current = true;
      sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (mainRef.current && !isScrolling.current) {
      const scrollPosition = mainRef.current.scrollTop;
      const sectionOffsets = sectionRefs.map((ref) => ref.current?.offsetTop || 0);

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          setCurrentSection(i);
          break;
        }
      }
    } else {
      isScrolling.current = false;
    }
  };

  useEffect(() => {
    if (sectionRefs[0].current) {

      sectionRefs[0].current.scrollIntoView({ behavior: 'instant' });
    }
    if (mainRef.current) {
      mainRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Particles1 />
      <main ref={mainRef} className="overflow-y-scroll h-screen relative z-10 ">
        <header className='flex justify-end w-screen bg-principal text-white border-b border-gray-500 fixed top-0 font-nunito z-10 mobile:h-auto lg:h-auto'>
          {textButton.map((text, index) => (
            <NavBar
              key={index}
              className={currentSection === index ? 'active' : ''}
              showLine={currentSection === index}
              onClick={() => scrollToSection(index)}
            >
              {text}
            </NavBar>
          ))}
        </header>
        <section ref={sectionRefs[0]} className='text-black min-h-screen flex flex-col justify-center items-center mt-10'>
          <Home />
        </section>
        <Span />
        <section ref={sectionRefs[1]} className='min-h-screen flex flex-col justify-center items-center mt-10'>
          <SectionTitle children='About Me' />
          <AboutMe />
        </section>
        <Span />
        <section ref={sectionRefs[2]} className='min-h-screen flex flex-col justify-center items-center mt-10'>
          <SectionTitle children='Have Experiencie With' />
          <Skills />
        </section>
        <Span />
        <section ref={sectionRefs[3]} className='min-h-screen  mt-10'>
          <SectionTitle children='Proyects' />
          <ActiveSlider2 />
          <ActiveSlider />
        </section>

        <Links />
        <Settings />
      </main>
    </>
  );
}

export default App;
