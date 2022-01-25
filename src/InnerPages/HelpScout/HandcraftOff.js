import React, { Component } from 'react'

export default class HandcraftOff extends Component {
    render() {
        return (
            <>
              <div className="o-container">
    <div className="o-row">
      <div className="o-col-10@md o-col-offset-1@md o-col-6@lg o-col-offset-3@lg">
        <h2>Design hand-off</h2>
        <p>Animations help guide the user along, and micro-interactions, those small blink-and-you’ll-miss-it moments, add that extra polish level. With this update, we completely overhauled all the animations within the app.</p>
        <p>But how do you communicate these transitions to those building the app? Prototyping tools have come a long way, but their output remains the same - essentially a ‘video’ of what you want the app to accomplish: no code breakdowns, no real hand-off. Just more fancy prototypes that’s ultimately eye candy, useless to those that need the nitty-gritty details. What usually ends up happening is guesswork. Given how nuanced some of these interactions can be, that never ends well. </p>
        <p>I decided to address this by creating Aanimator.</p>
        <p>Aanimator is a hand-off tool designed to cover these interactions in a step by step fashion. Documentation is added on an app screen basis, and developers can access that nuanced information without the guesswork. Help Scout is a remote-first company, so good documentation is key to working life. Aanimator meant engineers could access this information, any time of day, without being bottlenecked by design.</p>
      </div>
    </div>
  </div>
  <div className="c-work__callout">
    <div className="c-work__aanimator">
      <video className="c-work__video" playsInline autobuffer autoPlay muted loop preload="auto" poster="/images/work/hs/animator.png">
        <source src="https://www.seanhalpin.design/images/work/hs/animator.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
  <div className="o-container">
    <div className="o-row">
      <div className="o-col-12">
        <span className="c-work__caption u-mrg-t-10">
          ☝️&nbsp;&nbsp;Aanimator showing the transition properties for various screens in the iOS SDK
        </span>
      </div>
    </div>
  </div>  
            </>
        )
    }
}
