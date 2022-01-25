import React, { Component } from 'react'

export default class CraftingMobile extends Component {
    render() {
        return (
            <>
               <div className="o-row">
      <div className="o-col-10@md o-col-offset-1@md o-col-6@lg o-col-offset-3@lg">
        <h2>Crafting for mobile</h2>
        <p>
          Users have come to expect specific design patterns when using their phones, even if they aren't aware of it. Searching is generally at the top; swiping left takes you back. All ingrained into us through repetition. Beacon's core experience was adjusted to make it feel part of the platforms we were developing for, while maintaining Beacons' own sense of visual identity.
        </p>
      </div>
    </div>
    <div className="c-work__mosaics">
      <div className="o-row">
        <div className="o-col-5@md o-col-offset-1@md">
          <div  className="c-work__mosaic c-work__mosaic--tall js-mosaic" >
          <video class="c-work__video" playsinline="" autoplay="" loop="">
            <source src="https://www.seanhalpin.design/images/work/hs/hs__wire-4.mp4" type="video/mp4" /></video>
          </div>
          <div  className="c-work__mosaic c-work__mosaic--medium js-mosaic">
          <video class="c-work__video" playsinline="" autoplay="" loop="">
            <source src="https://www.seanhalpin.design/images/work/hs/hs__wire-4.mp4" type="video/mp4" /></video>
          </div>
        </div>
        <div className="o-col-5@md">
          <div className="c-work__mosaic c-work__mosaic--medium">
            <video className="c-work__video" playsInline autobuffer autoPlay muted loop>
              <source src="https://www.seanhalpin.design/images/work/hs/hs__wire-4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="c-work__mosaic c-work__mosaic--tall js-mosaic">
          <video class="c-work__video" playsinline="" autoplay="" loop="">
            <source src="https://www.seanhalpin.design/images/work/hs/hs__wire-4.mp4" type="video/mp4"/></video>
          </div>
        </div>
      </div>
      <div className="o-row">
        <div className="o-col-12">
          <span className="c-work__caption">
            ☝️&nbsp;&nbsp;Some high level sketching for how all the pieces would fit together
          </span>
        </div>
      </div>
    </div>  

    {/* ///////// */}
    <div className="c-work__mosaics u-d-none u-d-block@sm">
      <div className="o-row">
        <div className="o-col-5@md o-col-offset-1@md">
          <div className="c-work__mosaic c-work__mosaic--half-1">
            <video className="c-work__video" playsInline autobuffer autoPlay muted loop>
              <source src="https://www.seanhalpin.design/images/work/hs/hs__mock--1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="c-work__mosaic c-work__mosaic--half-2 js-mosaic" >
          <video class="c-work__video" playsinline="" autoplay="" loop="">
            <source src="https://www.seanhalpin.design/images/work/hs/hs__wire-4.mp4" type="video/mp4"/></video>
          </div>
        </div>
        <div className="o-col-5@md">
          <div className="c-work__mosaic c-work__mosaic--extra">
            <video className="c-work__video" playsInline autobuffer autoPlay muted loop>
              <source src="https://www.seanhalpin.design/images/work/hs/hs__mock--3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="o-row">
        <div className="o-col-12">
          <span className="c-work__caption">
            ☝️&nbsp;&nbsp;Grid considerations applied to Beacons typography alongside some animation exploration for iOS
          </span>
        </div>
      </div>
    </div>
            </>
        )
    }
}
