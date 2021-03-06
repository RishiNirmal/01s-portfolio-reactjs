import React, { Component } from 'react'

export default class HomeAnimatEye extends Component {
    render() {
        return (
     <>
      <div className="o-flexy__block js-bounce-in-home">
      <div className="c-hero__eye-wrap">
        <div className="c-hero__eye-wrap--blck c-hero__eye-wrap--tl" aria-hidden="true" />
        
        <div className="c-hero__eye-wrap--blck c-hero__eye-wrap--tr" aria-hidden="true" />
        <div className="c-hero__eye-wrap--blck c-hero__eye-wrap--br" aria-hidden="true" />
        <div className="c-hero__eye-wrap--blck c-hero__eye-wrap--bl" aria-hidden="true" />
        <div className="c-hero__eye-wrap--blck c-hero__eye-wrap--bb" aria-hidden="true" />
        <div className="c-hero__eye-holder" aria-hidden="true">
          <div className="c-hero__eye" aria-hidden="true">
            <div className="c-hero__eye__inner" aria-hidden="true">
              <div className="c-hero__eye__scale" aria-hidden="true">
                <svg width={275} height={269} viewBox="0 0 275 269" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect className="c-eyelash c-eyelash--3" x="0.301636" y="40.4437" width={20} height={64} rx={8} transform="rotate(-45 0.301636 40.4437)" fill="white" />
                  <rect className="c-eyelash c-eyelash--2" x={126} width={20} height={64} rx={8} fill="white" />
                  <rect className="c-eyelash c-eyelash--1" x="257.556" y="26.3015" width={20} height={64} rx={8} transform="rotate(45 257.556 26.3015)" fill="white" />
                  <ellipse className="c-eyeball" cx="137.5" cy="181.5" rx="137.5" ry="87.5" fill="white" />
                  <path className="c-cornea" d="M138 233C166.719 233 190 209.943 190 181.5C190 153.057 166.719 130 138 130C109.281 130 86 153.057 86 181.5C86 209.943 109.281 233 138 233Z" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
            </>
        )
    }
}
