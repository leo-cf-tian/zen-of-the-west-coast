import React from 'react'; 
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return <div className={[classes.Container, props.show ? classes.Show : ''].join(' ')} onClick={props.onClick}/>;
};

export default Backdrop; 
