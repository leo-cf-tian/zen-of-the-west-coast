import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Error.module.css';

import Button from '../../Button/Button';

const Error = (props) => {
    const history = useNavigate();
    
    return (
        <section className={classes.Container}>
            <h2 className={classes.Title}>{props.title}</h2>
            <p className={classes.Description}>{props.description}</p>
            <Button onClick={() => history('/')} buttonClass={classes.HomeButton}>🏠 Home</Button>
        </section>
    );
};

export default Error; 
