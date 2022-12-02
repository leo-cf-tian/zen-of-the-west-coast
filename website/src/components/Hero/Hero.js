import React from 'react';

import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.Container}>
            <h1 className={classes.PrimaryText}>SmartCan™</h1>
            <span className={classes.BackgroundBox}/>
        </section> 
    )
}

export default Hero;
