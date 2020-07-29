import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from '../ButtonLink/ButtonLink';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="MyFlix" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;