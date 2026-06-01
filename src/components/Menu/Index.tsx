import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu(){
    return(
        <nav className={styles.menu}>

            <a className={styles.icon} href="#">
                <HouseIcon/>
            </a>

            <a className={styles.icon} href="#">
                <HistoryIcon/>
            </a>

            <a className={styles.icon} href="#">
                <SettingsIcon/>
            </a>

            <a className={styles.icon} href="#">
                <SunIcon/>
            </a>

           
        </nav>
    )
}