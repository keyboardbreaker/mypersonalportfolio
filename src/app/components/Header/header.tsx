import Navigation from '../Navigation';
// import Socials from '../Socials';
import styles from './Header.module.css';

interface HeaderProps {
    name: string;
    image: string;
    title: string;
    // twitter: string;
    // linkedin: string;
}

const Header = ({
    name,
    image,
    title
    // twitter,
    // linkedin
}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <img 
                src={image} alt={`${name} image`} 
                className={styles.myimg} 
            />
            <div className={styles.info}>
                <h1>{name}</h1>
                <h3>{title}</h3>
                {/* <Socials 
                    twitter={twitter}
                    linkedin={linkedin}
                /> */}
                <Navigation />
            </div>
        </header>
    )
}

export default Header; 
