import React, { Component } from 'react'
import Hero from '../Hero/Index'
import Skills from '../Skills/Index'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className='s-home'>
                <Hero/>
           <Skills/> 
           </div>
            </>
        )
    }
}
