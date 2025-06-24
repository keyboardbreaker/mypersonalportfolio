import Socials from "../Socials";

import styles from "./Footer.module.css"

interface FooterProps {
    linkedIn: string;
    twitter: string;
}

const Footer = ({
    linkedIn,
    twitter
}: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <Socials linkedin={linkedIn} twitter={twitter} />
        </footer>
    )
}

export default Footer; 