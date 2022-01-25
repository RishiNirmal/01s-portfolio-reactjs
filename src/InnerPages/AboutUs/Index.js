import React, { Component } from 'react'
import NextPrev from '../../CommonComponents/NextPrev'
import BriefIndex from './BriefHistory/Index'
import CurrentlyIndex from './CurrentlyProjects/Index'
import Information from './Information/Index'

export default class AboutUs extends Component {
    render() {
        return (
            <>
            <div className='s-info'>
  <div className="c-info">
   <Information/>
   <BriefIndex/>
    <CurrentlyIndex/>
  </div>
  </div>
  <NextPrev/>

            </>
        )
    }
}
