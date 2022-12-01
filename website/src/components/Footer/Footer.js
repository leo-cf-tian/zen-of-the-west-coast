import React from 'react';

import classes from './Footer.module.css'; 

const Footer = () => {
    return (
        <footer className={classes.Container}>
            <p className={classes.LeftText}>Made with ❤ (V1.0.0)</p>
            <p className={classes.CopyrightText}>© 2022 Zen of the West Coast</p>
        </footer>
    );
};

export default Footer; 
