interface BentoCellProps {
    rowSpan: string;
    colSpan: string;
    imgSrc: string;
    imgH: string;
    imgFit: string;
    bgColor: string;
    observed: boolean;
    text?: string;
    animationClasses: string;
    duration: string;
    altText: string;
    url:string;
}
import { FaRocket } from 'react-icons/fa6';
import './cell.css'
export default function BentoCellProjects({
    colSpan, 
    rowSpan, 
    imgSrc, 
    altText,
    bgColor, 
    imgFit, 
    imgH,
    observed,
    text,
    animationClasses,
    duration,
    url
}: Readonly<BentoCellProps>) {
    return (
        <div className={` rounded-2xl ${colSpan} ${rowSpan} ${bgColor}  ${observed ? "opacity-100" : animationClasses} cell ${colSpan === 'col-span-3' ? 'after:w-[90%]' : 'after:w-[80%]'} flex items-center justify-center  transition transform ease-in-out ${duration} cursor-pointer rounded-lg`}>
            <img src={imgSrc} alt={altText} className={` ${imgFit} ${imgH} ${imgSrc === './next.svg' || './vercel.svg' ? '' : 'rounded-xl'}   filter drop-shadow-2xl`} />
            <h2 className="text-gray-100">{text}</h2>
            <a href={url} target='_blank' className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover-cell-content">
                <FaRocket className="text-white text-4xl mb-2" />
                <span className="text-white text-lg">Visit me</span>
            </a>
        </div>
    );
}