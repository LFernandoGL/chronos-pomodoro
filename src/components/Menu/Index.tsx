import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu(){

    const [themes, setThemes] = useState<AvailableThemes>('dark');

    function handleThemeChangeClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        console.log('Clicado', Date.now());

        event.preventDefault();

        setThemes(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light': 'dark';
            return nextTheme;
        })

        document.documentElement.setAttribute('data-theme', themes)
    }



    return(
        
        <nav className={styles.menu}>
            <h1>{themes}</h1>


            <a className={styles.icon} href="#" aria-label='Ir para Home' title='Ir para Home'>
                <HouseIcon/>
            </a>

            <a className={styles.icon} href="#"  aria-label='Ir para Historico' title='Ir para Historico'>
                <HistoryIcon/>
            </a>

            <a className={styles.icon} href="#"  aria-label='Ir para Configuracoes' title='Ir para Configuracoes'>
                <SettingsIcon/>
            </a>

            <a className={styles.icon} href="#" aria-label='Trocar tema' title='Trocar tema' onClick={handleThemeChangeClick}>
                <SunIcon/>
            </a>

           
        </nav>
    )
}