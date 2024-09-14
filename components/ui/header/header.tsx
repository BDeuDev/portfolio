'use client'
import { useCallback, useEffect, useState } from 'react';
import styles from './header.module.css';
import './header.css'
import { IoMenuSharp,  } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ThemeSwitch from '@/components/specific/themeSwitch/themeSwitch';
import useStore from '@/store/store';
interface HeaderProps {
    scrollToSection: (index: number) => void;
    currentSection: number;
}

export default function Header({ scrollToSection, currentSection }: Readonly<HeaderProps>) {
    const sectionName = ['Home', 'About me', 'Technologies', 'Projects'];
    const [isHidden, setIsHidden] = useState(false);

    let lastScrollTop = 0;

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
     
        if (scrollTop > lastScrollTop) {
           setIsHidden(true);
        } else {
           setIsHidden(false);
        }
     
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
     }, []);
    const { switchState, setSwitchState, menu, setMenu } = useStore();

    const handleChange = (event: { target: { checked: boolean; }; }) => {
      setSwitchState(event.target.checked);
    };
    const handleMenu = () => {
        if(!menu){
            setMenu(true)
        }else{
            setMenu(false)
        }
        
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    const text = switchState ? 'text-white' : 'text-[#030136]';
    return (
        <header className={`${isHidden ? styles.hidden : ''} ${styles.header} ${switchState ? 'bg-[#1e2432]' : 'bg-[#d0d0d0]'}  h-[64px] w-full z-50 flex flex-row items-center justify-center shadow-md   fixed top-0`}>
            <nav className="w-full h-full 2xl:block xl:block lg: md:block mob:hidden">
                <div className="flex items-center justify-center gap-5 p-2 list-none h-full text-white">
                    {sectionName.map((section, index) => {
                        const isActive = currentSection === index;
                        const key = `${section}-${isActive ? 'active' : 'inactive'}`;
                        
                        return (
                            <button
                                key={key}
                                onClick={() => scrollToSection(index)}
                                className={`${isActive ? ' border-b-[2px] border-[#0380f4] ' : ''} ${text} mx-2 transition transform ease-in-out duration-1000`}
                            >
                                <h2
                                    
                                    className=" rounded-md p-1 leading-normal "
                                >
                                    {section}
                                </h2>
                            </button>
                        );
                    })}
                    
                </div>
                
            </nav>
            <nav className={`${switchState ? ' text-white' : ' text-black'} text-[45px]  top-[5px] right-[10px] 2xl:hidden xl:hidden md:hidden mob:absolute bg-transparent transition transform ease-in-out duration-[0.10s]`}>
                        <button onClick={()=>handleMenu()} className={`${menu ? 'rotate-90' : 'rotate-0'} transition transform ease-in-out duration-[0.5s]`}>
                            {menu ? <RxCross2/> : <IoMenuSharp/> }
                            
                        </button>
                    </nav>
            <ThemeSwitch checked={switchState} onChange={handleChange} />
        </header>
    );
}
