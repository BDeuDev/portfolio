// BentoCell.tsx
interface BentoCellProps {
    colSpan: string;
    rowSpan: string;
    bgColor: string;
    imgSrc?: string;
    imgAlt?: string;
    objectFit?: 'contain' | 'cover';
    children?: React.ReactNode;
}

export default function BentoCell({
    colSpan,
    rowSpan,
    bgColor,
    imgSrc,
    imgAlt = '',
    objectFit = 'contain',
    children
}: Readonly<BentoCellProps>) {
    return (
        <div
            className={`col-span-${colSpan} row-span-${rowSpan} ${bgColor} rounded-2xl flex justify-center items-center`}
        >
            {imgSrc ? (
                <img src={imgSrc} alt={imgAlt} className={`object-${objectFit} w-full h-full rounded-2xl`} />
            ) : (
                children
            )}
        </div>
    );
}
