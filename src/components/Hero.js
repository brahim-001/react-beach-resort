import React from 'react';
import Slider from './Slider';
import { Navbar } from 'react-bootstrap';

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
Hero.defaultProps = {
    hero: "defaultHero"
}
