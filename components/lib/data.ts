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
export const techs: BentoCellProps[][] = [
    [
        {
            rowSpan: "row-span-2",
            colSpan: "col-span-4",
            imgSrc: "./mysql.png",
            imgH: "h-[90%]",
            imgFit: "object-contain",
            bgColor: "bg-white",
            animationClasses: "translate-x-[-100px] opacity-0",
            duration: "duration-[1.5s]",
            altText: ""
        },
        {
            rowSpan: "row-span-2",
            colSpan: "col-span-4",
            imgSrc: "./express.png",
            imgH: "h-[90%] w-[90%]",
            imgFit: "object-cover",
            bgColor: "bg-white",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./py.png",
            imgH: "w-[90%]",
            imgFit: "object-cover",
            bgColor: "bg-white",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./postgre.png",
            imgH: "w-[80%]",
            imgFit: "object-cover",
            bgColor: "bg-white",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./sequelize.svg",
            imgH: "w-[80%]",
            imgFit: "object-cover",
            bgColor: "bg-[#1e2432]",
            animationClasses: "",
            duration: "",
            altText: ""
        }
        ,{
            rowSpan: "row-span-4",
            colSpan: "col-span-6",
            imgSrc: "./nodejs.png",
            imgH: "w-[80%] h-[90%]",
            imgFit: "object-cover",
            bgColor: "bg-white",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./mongodb.svg",
            imgH: "w-[80%]",
            imgFit: "object-cover",
            bgColor: "bg-[#1e2432]",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./nestjs.svg",
            imgH: "w-[80%]",
            imgFit: "object-cover",
            bgColor: "bg-[#1e2432]",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-6",
            imgSrc: "",
            imgH: "",
            imgFit: "",
            bgColor: "bg-[#1e2432]",
            animationClasses: "",
            duration: "",
            altText: "",
            text: "Principal Backend Technologies"
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./ts-logo-128.svg",
            imgH: "h-[100%] w-full",
            imgFit: "object-cover",
            bgColor: "bg-[#3178c6]",
            animationClasses: "",
            duration: "",
            altText: ""
        },{
            rowSpan: "row-span-2",
            colSpan: "col-span-2",
            imgSrc: "./js.svg",
            imgH: "h-[100%] w-full",
            imgFit: "object-cover",
            bgColor: "bg-black",
            animationClasses: "",
            duration: "",
            altText: "",
            
        }
        
    ],
    [
        {
            rowSpan: "row-span-2",
            colSpan: "col-span-4",
            imgSrc: "",
            imgH: "",
            imgFit: "",
            bgColor: "",
            animationClasses: "",
            duration: "",
            altText: ""
        }
    ],
    [
        {
            rowSpan: "",
            colSpan: "",
            imgSrc: "",
            imgH: "",
            imgFit: "",
            bgColor: "",
            animationClasses: "",
            duration: "",
            altText: ""
        }
    ]
]