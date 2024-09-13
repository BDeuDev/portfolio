import useStore from "@/store/store";
interface DescriptionProps {
    observed: boolean;
}
export default function Description({observed}: Readonly<DescriptionProps>) {
    const { switchState } = useStore();
  return (
    <div className={`w-[500px] ${switchState ? 'text-white' : 'text-black'} ${observed ? ' opacity-100' : 'translate-x-[100px] opacity-0'} transition transform ease-in-out duration-[2s]`}>
        I am a self-taught developer focused on the React and Node.js ecosystem, working with both JavaScript and TypeScript. Currently, I am pursuing a Higher Technician Degree in Programming.
    </div>
  );
}