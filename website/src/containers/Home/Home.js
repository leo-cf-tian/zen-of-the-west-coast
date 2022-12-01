import React, { Component } from 'react'; 

import Hero from '../../components/Hero/Hero'; 
import Overview from '../../components/Overview/Overview';

class Home extends Component {
    render() {
        return (
            <>
                <Hero/>
                <Overview/>
            </>
        )
    }
}

export default Home; 
