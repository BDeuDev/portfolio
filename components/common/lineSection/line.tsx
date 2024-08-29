import useStore from "@/store/store";

export default function Line() {
    const { switchState } = useStore();
  return (
    <span className={`w-full h-[2px] ${switchState ? 'bg-white' : 'bg-black' }`}></span>
  );
}