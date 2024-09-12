interface BentoCellProps {
    rowSpan: string;
    colSpan: string;
    imgSrc: string;
    imgH: string;
    imgFit: string;
    bgColor: string;
    animationClasses: string;
    duration: string;
    altText: string;
    text?:string;
}
export const projects: BentoCellProps[] = [

        {
            rowSpan: "row-span-12",
            colSpan: "col-span-3",
            imgSrc: "./gym.png",
            imgH: "",
            imgFit: "object-contain",
            bgColor: "bg-transparent",
            animationClasses: "translate-x-[-100px] opacity-0",
            duration: "duration-[1.5s]",
            altText: ""
        },{
            rowSpan: "row-span-7",
            colSpan: "col-span-6",
            imgSrc: "./space.png",
            imgH: "h-full",
            imgFit: "object-contain",
            bgColor: "",
            animationClasses: "translate-y-[-100px] opacity-0",
            duration: "duration-[1.5s]",
            altText: ""
        },{
            rowSpan: "row-span-12",
            colSpan: "col-span-3",
            imgSrc: "./task.png",
            imgH: "",
            imgFit: "object-contain",
            bgColor: "bg-transparent",
            animationClasses: "translate-x-[100px] opacity-0",
            duration: "duration-[1.5s]",
            altText: ""
        }
    
]