import React, { Component } from 'react'

export default class Breadcrum extends Component {
    render() {
        return (
            <>
               <div className="c-wip__header" style={{opacity: "1", transform: "translateY(0px)"}}>
    <div className="c-wip__header-text js-bounce-in" style={{opacity: "1", transform: "translateY(0px)"}}>
      <h1 className="c-wip__title">Work in Progress</h1>
      <p className="c-wip__sub">A behind the scenes look at my work in progress, design inspiration, questionable creations, <span className="c-wip__amp">&amp;</span> random life updates.</p>
      <div className="c-wip__blob c-wip__blob--1" />
      <div className="c-wip__blob c-wip__blob--2" />
      <div className="c-wip__blob c-wip__blob--3" />
      <div className="c-wip__blob c-wip__blob--4" />
    </div>
  </div>  
            </>
        )
    }
}
