import useStore from "@/store/store";

export default function Footer() {
  const { switchState } = useStore();
  return (
    <footer className={`flex flex-col w-full h-[200px] ${switchState ? 'bg-[#1e2432]' : ''}`}>
        <div className="flex flex-grow"></div>

        <div className={`${switchState ? 'bg-[#1e2432] text-black' : 'bg-[#1e2432] text-white'} font-thin text-center py-4 `}>
        &copy; 2024 Bernabe Deusich. Todos los derechos reservados.
        </div>
       
    </footer>
  );
}