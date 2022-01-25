import React, { Component } from 'react'
import CraftingMobile from './CraftingMobile'

export default class TheProblem extends Component {
    render() {
        return (
            <>
            <div className="o-container">
              <div className="o-row">
      <div className="o-col-10@md o-col-offset-1@md o-col-6@lg o-col-offset-3@lg">
        <h2>The problem</h2>
        <p>
          The first iteration of the Beacon SDK by <a href="/" className="c-work__out-link" target="_blank" rel="noreferrer nofollow noopener"><span>Help Scout</span></a> focused on getting the core functionality found in its web counterpart: self-service and message sending, into a mobile-friendly build. What it lacked, however, was a primary focus on the mobile experience. Some design patterns were taken from the web that did not quite gel with a mobile user's expectations. I worked on making the transition to a more native feel, while reworking the UX and the UI.
        </p>
      </div>
    </div>
    <section className="s-shots">
      <div className="o-row">
        <div className="o-col-10@md o-col-offset-1@md o-col-8@lg o-col-offset-2@lg">
          <div className="c-work__arrow-right">
            <svg width={328} height={331} viewBox="0 0 328 331" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M324.602 144.598C323.787 143.565 322.459 143.062 320.87 143.839C320.532 144.006 320.189 144.172 319.849 144.34C302.191 148.282 284.219 150.139 266.122 150.026C261.445 149.997 262.1 157.231 266.743 157.262C276.818 157.325 286.822 156.738 296.758 155.562C251.276 177.273 201.562 197.418 151.163 190.96C138.019 189.276 124.751 184.786 115.531 175.299C124.206 170.081 132.28 163.813 139.141 156.494C149.101 145.869 152.038 129.334 136.181 122.407C123.438 116.841 109.421 124.378 102.682 135.496C95.4802 147.376 97.3011 161.804 104.548 173.105C101.927 174.456 99.2692 175.729 96.5697 176.883C68.1871 189.002 35.6737 190.485 6.60351 179.873C2.24897 178.283 -0.833802 184.864 3.5708 186.472C34.3885 197.723 68.8308 196.609 99.0061 183.725C102.38 182.284 105.722 180.692 109.004 178.968C132.101 204.895 176.186 201.291 206.976 195.277C236.989 189.415 265.362 178.042 293.03 165.215C288.557 169.216 284.241 173.404 280.106 177.803C276.904 181.211 282.468 185.876 285.661 182.48C297.305 170.092 310.35 159.431 324.754 150.408C327.352 148.774 326.565 145.917 324.602 144.598ZM110.307 168.679C102.539 156.309 103.712 139.14 116.91 130.903C123.182 126.987 132.017 126.337 137.631 131.911C145.288 139.516 136.368 149.299 130.642 154.729C124.677 160.386 118.009 165.346 110.917 169.571C110.716 169.271 110.501 168.988 110.307 168.679Z" fill="#F5E0AC" />
            </svg>
          </div>
          <div className="o-flexy u-pos-relative">
            <div className="o-flexy__block tx-center">
              <img className="c-work__compare" src="https://www.seanhalpin.design/images/work/hs/hs-shot--old.png" alt="" loading="lazy" />
            </div>
            <div className="o-flexy__block tx-center">
              <img className="c-work__compare" src="https://www.seanhalpin.design/images/work/hs/hs-shot--new.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>  
    <CraftingMobile/>
    </div>
            </>
        )
    }
}
