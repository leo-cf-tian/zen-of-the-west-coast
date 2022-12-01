import React from 'react';
import classes from './Button.module.css'; 

const Button = (props) => {
    return (
        <button 
            className={[classes.Container, props.buttonClass ? props.buttonClass : ''].join(' ')}
            onClick={props.onClick} 
            disabled={props.disabled}
            style={props.style}
        >
            {props.children}
        </button>
    );
};

export default Button; 
