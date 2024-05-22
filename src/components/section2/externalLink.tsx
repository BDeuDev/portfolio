import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface ExternalLinkProps {
    icons: IconProp[];
    texts: string[];
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ icons,texts }) => {
    const styles = "flex flex-row items-center justify-center gap-2 glassmorphism-externallink p-1 hover:bg-white hover:text-black transition transform ease-in-out duration-700 absolute"
    return (
        <div className="z-40 absolute text-white flex flex-row items-center justify-center text-lg bottom-0 gap-2">
            {icons.map((icon, index) => (
                <a className={styles} key={index + 1} href="" target="blank">
                    <p>{texts[index]}</p>
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    )
}
export default ExternalLink;