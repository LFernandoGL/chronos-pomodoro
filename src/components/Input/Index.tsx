import styles from './styles.module.css'

type InputProps = {
    labelText?: string;
} & React.ComponentProps<'input'>

export function Input({labelText, ...props}: InputProps){
    return(
        <div className={styles.container}>
            {labelText && <label>{labelText}</label>}
            <input className={styles.input} {...props}/>
        </div>
    )
}