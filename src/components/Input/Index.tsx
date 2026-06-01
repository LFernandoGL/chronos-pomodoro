import styles from './styles.module.css'

type InputProps = {children: React.ReactNode} & React.ComponentProps<'input'>

export function Input({children, ...props}: InputProps){
    return(
        <div className={styles.container}>
            <label>{children}</label>
            <input className={styles.input} {...props} />
        </div>
    )
}