import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface ExternalLinkProps {
    icons:IconProp[];

}

const ExternalLink:React.FC<ExternalLinkProps> = ({icons}) => {
const styles = "flex flex-row items-center justify-center gap-2 glassmorphism-externallink p-1 hover:bg-white hover:text-black transition transform ease-in-out duration-700"
    return (
        <div className="z-50 absolute text-white flex flex-row items-center justify-center text-lg bottom-0 gap-2">
            <button className={styles}>
                <p>Web</p>
                <FontAwesomeIcon icon={icons[0]}/>
            </button>
            <button className={styles}>
                <p>Repo</p>
                <FontAwesomeIcon icon={icons[1]}/>
            </button>
        </div>
        
        
    )
}
export default ExternalLink;