import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart';
import classes from './Overview.module.css'; 

const INTRODUCTION = "Have you ever needed to throw something away, but the garbage can's lid was closed? Or have you ever wondered just exactly how many times the trash can has been opened? Zen of the West Coast presents the ultimate solution: SmartCan™.";

const AUTOMATION = "SmartCan™ uses a linear actuator with a sensor to detect movement, automatically opening and closing the trash can lid securely and reliably.";

const LCD_DISPLAY = "The built-in LCD Display component displays the total number of times the trash can has been opened, so you can keep track of your trashing habits!";

const Overview = () => {
    return (
        <section className={classes.Container}>
            <OverviewPart title="Introduction" body={INTRODUCTION}/>
            <OverviewPart title="Automation" body={AUTOMATION}/>
            <OverviewPart title="LCD Display" body={LCD_DISPLAY}/>
        </section> 
    )
}

export default Overview;