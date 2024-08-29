import useStore from '@/store/store';
import style from './style.module.css';
import { FaAnglesUp } from 'react-icons/fa6';

interface BackToHomeProps {
    scrollToSection: (index: number) => void;
    currentSection: number;
}

export default function BackToHome({ scrollToSection }: Readonly<BackToHomeProps>) {
    const { switchState } = useStore();
    return (
        <div className='mt-auto translate-y-[30px]'>
            <button className={`${style.container} ${switchState ? 'bg-white' : 'bg-black'}  w-[40px] h-[40px]`} onClick={() => scrollToSection(0)}>
                <FaAnglesUp className={`${switchState ? 'text-black ' : 'text-white'}  text-[1.6rem] text-center w-full `} />
            </button>

        </div>

    );
}