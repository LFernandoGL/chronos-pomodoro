import './styles/theme.css'
import './styles/global.css'


import { Container } from './components/Container/Index';
import { Logo } from './components/Logo/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';
import { Input } from './components/Input/Index';
import { Cycles } from './components/Cycles/Index';
import { useState } from 'react';
import { Heading } from './components/Heading/Index';



export function App(){
    const [numero, configurarNumero] = useState(0);

    function handleClick(){
        configurarNumero(numero + 1);
    }

    return (
        <>
            <Heading>{numero}</Heading>
            <button onClick={handleClick}>Aumentar</button>
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
                    <Input labelText={numero.toString()} type='text'/>
                </form>
            </Container>

            <Container>
                <Cycles/>
            </Container>

        </>
    );
}

