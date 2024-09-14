import useStore from "@/store/store";
interface DescriptionProps {
    observed: boolean;
}
export default function Description({observed}: Readonly<DescriptionProps>) {
    const { switchState } = useStore();
  return (
    <div className={` 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[300px] mob:w-[300px] text-start ${switchState ? 'text-white' : 'text-black'} ${observed ? ' opacity-100' : 'translate-x-[50px] opacity-0'} transition transform ease-in-out duration-[2s]`}>
        I am a self-taught developer focused on the React and Node.js ecosystem, working with both JavaScript and TypeScript. Currently, I am pursuing a Higher Technician Degree in Programming.
    </div>
  );
}