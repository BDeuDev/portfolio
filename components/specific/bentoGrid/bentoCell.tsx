// src/components/BentoCell.tsx
import React from 'react';

interface BentoCellProps {
    colSpan?: number;
    rowSpan?: number;
    observed?: boolean;
    imageSrc?: string;
    altText?: string;
    bgColor?: string;
    text?: string;
    object?: string;
    additionalClasses?: string;
    animationClasses?: string;
    duration?: string;
}

const BentoCell: React.FC<BentoCellProps> = ({
    colSpan,
    rowSpan,
    observed,
    imageSrc,
    altText,
    bgColor,
    text,
    object,
    additionalClasses = "",
    duration,
    animationClasses = ""
}) => {
    return (
        <div className={`col-span-${colSpan} row-span-${rowSpan} ${observed ? 'opacity-100' : animationClasses }  transition transform ease-in-out ${bgColor} rounded-2xl flex justify-center items-center ${duration} shadow-2xl `}>
            {imageSrc && <img src={imageSrc} alt={altText} className={`object-${object ? object : 'contain'} ${additionalClasses ? additionalClasses : 'h-full'} w-full  ${altText === 'NextJS' ? '' : 'rounded-[15px]'}`} /> }
            <h2 className='text-white font-medium'>{text}</h2>
        </div>
    );
};

export default BentoCell;
