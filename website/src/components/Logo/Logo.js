import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

import Icon from '../../assets/icon.png';

const Logo = () => (
    <div>
        <Link to="/" className={classes.Container}>
        <img className={classes.Icon} src={Icon} alt="Icon" draggable={false}/>
            <strong className={classes.Name}>SmartCan™</strong>
        </Link>
    </div>
)

export default Logo; 
