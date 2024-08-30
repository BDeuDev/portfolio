import useStore from "@/store/store";

export default function Footer() {
  const { switchState } = useStore();
  return (
    <footer className={`flex flex-col w-full h-[200px] shadow-top ${switchState ? 'bg-[#1e2432]' : 'bg-[#d0d0d0]'}`}>
        <div className="flex flex-grow"></div>

        <div className={`${switchState ? 'bg-[#1e2432] text-white' : 'bg-[#d0d0d0] text-black'} font-thin text-center py-4 `}>
        &copy; 2024 Bernabe Deusich. Todos los derechos reservados.
        </div>
       
    </footer>
  );
}