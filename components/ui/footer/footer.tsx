import BackToHome from "@/components/specific/backtohome/backToHome";
import useStore from "@/store/store";

interface FooterProps {
  scrollToSection: (index: number) => void;
  currentSection: number;
}
export default function Footer({scrollToSection,currentSection}: Readonly<FooterProps>) {
  const { switchState } = useStore();
  return (
    <footer className={`flex flex-col w-full h-[200px] shadow-top ${switchState ? 'bg-[#1e2432]' : 'bg-[#d0d0d0]'}`}>
        <BackToHome currentSection={currentSection} scrollToSection={scrollToSection}/>
        <div className="flex flex-grow"></div>

        <div className={`${switchState ? 'bg-[#1e2432] text-white' : 'bg-[#d0d0d0] text-black'} font-thin text-center py-4 `}>
        &copy; 2024 Bernabe Deusich. Todos los derechos reservados.
        </div>
       
    </footer>
  );
}