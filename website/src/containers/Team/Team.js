import React, { Component } from 'react'; 
import Member from '../../components/Member/Member';
import classes from './Team.module.css';

import Zain from '../../assets/team/zain.jpg';
import Leo from '../../assets/team/leo.jpg';
import Jenny from '../../assets/team/jenny.jpg';
import Anna from '../../assets/team/anna.jpg';
import Jerry from '../../assets/team/jerry.jpg';

class Team extends Component {
    render() {
        return (
            <>
                <div className={classes.Container}>
                    <Member image={Zain} name="Zain Salman" role="Hardware"/>
                    <Member image={Leo} name="Leo Tian" role="Mechanics"/>
                    <Member image={Jenny} name="Jenny Hui" role="Research & Video"/>
                    <Member image={Anna} name="Anna Li" role="Insights & Video"/>
                    <Member image={Jerry} name="Jerry Zheng" role="Software"/>
                </div>
                <p className={classes.Signature}>Zen of the West Coast</p>
            </>
        )
    }
}

export default Team; 
