import styles from './styles.module.css';

export function Cycles(){
    return (
        <div className={styles.cycles}>
            <span className={styles.lorem}>Lorem ipsum dolor sit amet. asaaiu sghgsgy lapsolj</span>
            <span>Ciclos</span>

             <div className={styles.cycleDots}>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
             </div>
        </div>
    )
}