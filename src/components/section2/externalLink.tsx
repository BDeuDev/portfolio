import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface ExternalLinkProps {
    icons: IconProp[];
    texts: string[];
    web: string[];
    repo: string[];
    indexI: number;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ icons,texts,repo,web,indexI }) => {
    
    return (
        <div className="z-40 text-white flex flex-row items-center justify-center text-lg  absolute top-64">
            {icons.map((icon,index)=>(
                <a href={index === 0 ? web[indexI] : repo[indexI]} target="blank" className="glassmorphism-link rounded-lg p-2 flex flex-row items-center justify-center m-5 gap-2 transition transform ease-in-out duration-700 hover:bg-white hover:text-black">
                    <p>{texts[index]}</p>
                    <FontAwesomeIcon icon={icon} className="text-3xl"/>
                </a>
            ))}
        </div>
    )
}
export default ExternalLink;