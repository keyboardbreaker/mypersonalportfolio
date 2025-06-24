import styles from './Socials.module.css'

interface  SoclalsProps{
    twitter: string,
    linkedin: string,
}

const Socials = ({
    twitter,
    linkedin
}: SoclalsProps) => {
    return (
        <p>Follow me in 
            <a href={twitter}>
                <img src='/li.png' alt={'linkedin image'} className={styles.socials} />
            </a>
            
            <a href={linkedin}>
                <img src='/tw.png' alt={'twitter image'}  className={styles.socials} />
            </a>
        </p>
    )
}

export default Socials;