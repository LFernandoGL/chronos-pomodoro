import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react';

export function App(){

    return(
    <>
        <Heading>
            Iai meus fi
            <button>
                <TimerIcon/>
            </button>
        </Heading>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aperiam ipsam suscipit, illo, sapiente, adipisci laborum distinctio veritatis repudiandae minima doloremque porro dolorem! Maxime maiores pariatur eveniet, porro excepturi aliquid.
        </p>
    </>
    );
}

