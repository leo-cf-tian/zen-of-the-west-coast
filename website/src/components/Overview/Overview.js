import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart';
import classes from './Overview.module.css'; 

import SmartCan from '../../assets/home/smartcan.jpeg';
import LCDDisplay from '../../assets/home/lcddisplay.png';
import Automation from '../../assets/home/automation.png';

const INTRODUCTION = "Have you ever needed to throw something away with your hands full, but the garbage can's lid was closed? Or have you ever wondered just exactly how many times the trash can has been opened? Aligning with the new trend of \"smart\" devices, Zen of the West Coast presents the ultimate solution to your garbage can needs: SmartCan™.";

const AUTOMATION = "SmartCan™ uses a linear actuator with an ultrasonic sensor to detect movement, automatically opening and closing the trash can lid securely and reliably. The sensor is mounted using a custom designed 3D printed shield for sleekness and robustness.";

const LCD_DISPLAY = "The built-in liquid-crystal display (LCD) component displays the total number of times the trash can has been opened, so you can keep track of your garbage throwing habits! It is also mounted using a 3D printed shield that is custom fitted.";

const Overview = () => {
    return (
        <section className={classes.Container}>
            <OverviewPart title="Introduction" body={INTRODUCTION} image={SmartCan}/>
            <OverviewPart title="Automation" body={AUTOMATION} image={Automation}/>
            <OverviewPart title="LCD Display" body={LCD_DISPLAY} image={LCDDisplay}/>
        </section> 
    )
}

export default Overview;