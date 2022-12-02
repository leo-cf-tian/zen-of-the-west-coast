import React from 'react';

import classes from './OverviewPart.module.css'; 

const OverviewPart = (props) => {
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>{props.title}</h2>
            <hr className={classes.Divider}/>
            <div className={classes.Content}>
                <p className={classes.Body}>{props.body}</p> 
                <img className={classes.Image} src={props.image} alt={props.title}/>
            </div>
        </div>
    )
}

export default OverviewPart;
