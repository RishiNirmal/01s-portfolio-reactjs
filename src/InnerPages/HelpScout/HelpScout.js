import React, { Component } from 'react'
import NextPrev from '../../CommonComponents/NextPrev'
import PositionCard from '../../CommonComponents/PositionCard'
import HandcraftOff from './HandcraftOff'
import PageTitle from './PageTitle'
import ProjectDesign from './ProjectDesign'
import TheProblem from './TheProblem'

export default class HelpScout extends Component {
    render() {
        return (
            <>
    
  <PageTitle/>
  <TheProblem/>
  <ProjectDesign/>
  <HandcraftOff/>
  {/* Common components in employee */}
  <PositionCard/>
  <NextPrev/>

            </>
        )
    }
}
