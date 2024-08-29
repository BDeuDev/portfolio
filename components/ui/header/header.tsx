'use client'
import { useCallback, useEffect, useState } from 'react';
import styles from './header.module.css';
import './header.css'
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
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     
        if (scrollTop > lastScrollTop) {
           setIsHidden(true);
        } else {
           setIsHidden(false);
        }
     
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
     }, []);
    const { switchState, setSwitchState } = useStore();

    const handleChange = (event: { target: { checked: boolean; }; }) => {
      setSwitchState(event.target.checked);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const text = switchState ? 'text-white' : 'text-black';
    return (
        <header className={`${isHidden ? styles.hidden : ''} ${styles.header} bg-[#1e2432] h-[64px] w-full z-50 flex flex-row items-center justify-center shadow-md   fixed top-0`}>
            <nav className="w-full h-full">
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
            <ThemeSwitch checked={switchState} onChange={handleChange} />
        </header>
    );
}
