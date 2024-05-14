import React from 'react';
import './Hero.css';
import handIcon from '../Assets/handicon.png';
import thales from '../Assets/thales.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>Everything you need for your baby</h2>
            </div>
            <div className='hero-right'>
                <div className='thales'>
                    <img src={thales} alt='Thales product' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
