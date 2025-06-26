import styles from './Socials.module.css'

interface  SoclalsProps{
    twitter: string,
    linkedin: string,
}

const Socials = ({
    // twitter,
    linkedin
}: SoclalsProps) => {
    return (
        <p className={styles.items}>Follow me on &nbsp;
            <a href={linkedin}>
                <img src={'/li.png'} alt={'linkedin image'} className={styles.socials} />
            </a>  
            {/* <a href={twitter}>
                <img src={'/tw.png'} alt={'twitter image'}  className={styles.socials} />
            </a> */}
        </p>
    )
}

export default Socials;