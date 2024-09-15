import useStore from "@/store/store";
import Image from "next/image";
interface DescriptionProps {
  observed: boolean;
}
export default function Description({ observed }: Readonly<DescriptionProps>) {
  const { switchState } = useStore();
  return (
    <div className={` 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[300px] mob:w-[300px] text-start ${switchState ? 'text-white' : 'text-black'} ${observed ? ' opacity-100' : 'translate-x-[50px] opacity-0'} transition transform ease-in-out duration-[2s]`}>
      <div className="w-full flex items-center justify-center my-7 ">
        <Image src={'/profile.png'} width={300} height={300} alt="" className={`p-2 ${switchState ? 'bg-[#1e2432] border-[#d0d0d0]' : 'bg-[#d0d0d0] border-[#1e2432]'}  rounded-full  border filter drop-shadow-2xl`} />
      </div>
      <h2>
        I am a self-taught developer focused on the React and Node.js ecosystem, working with both JavaScript and TypeScript. Currently, I am pursuing a Higher Technician Degree in Programming.
      </h2>

    </div>
  );
}