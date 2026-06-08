import './styles/theme.css'
import './styles/global.css'


import { Container } from './components/Container/Index';
import { Logo } from './components/Logo/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';
import { Input } from './components/Input/Index';
import { Cycles } from './components/Cycles/Index';
import { DefaultButton } from './components/DefaultButton/Index';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer/Index';



export function App(){
    

    return (
        <>
            <Container>
                <Logo/>
            </Container>

            <Container>
                <Menu/>
            </Container>

            <Container>
                <CountDown/>
            </Container>

            <Container>
                <form>
                    <Input type='text'/>
                    
                    <Container>
                        <Cycles/>
                    </Container>

                    <Container>
                        <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                    </Container>
                </form>
            </Container>
            <Container>
                <Footer/>
            </Container>

            

        </>
    );
}

