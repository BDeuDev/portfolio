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
}

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
    duration
}: Readonly<BentoCellProps>) {
    return (
        <div className={` rounded-2xl ${colSpan} ${rowSpan} ${bgColor}  ${observed ? "opacity-100" : animationClasses} flex items-center justify-center  transition transform ease-in-out ${duration} `}>
            <img src={imgSrc} alt={altText} className={` ${imgFit} ${imgH} ${imgSrc === './next.svg' || './vercel.svg' ? '' : 'rounded-xl'} `} />
            <h2 className="text-gray-100">{text}</h2>
        </div>
    );
}