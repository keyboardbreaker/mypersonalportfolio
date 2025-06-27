
import styles from './Textbox.module.css';

interface TextboxProps {
    label: string,
    handleChange: (value: string) => void;
}

const Textbox = ({
    label,
    handleChange
}: TextboxProps) => {

    return (
        <label className={styles.label}>
            {label}
            <input 
                onChange={(e) => handleChange(e.target.value)}
                name={label} 
            />
        </label>
    )

}

export default Textbox;