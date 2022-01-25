import React, { Component } from 'react'

export default class PageTitle extends Component {
    render() {
        return (
            <>
               <div className="c-work__hero c-work__hero--hs">
    <div className="c-work__hero-desc">
      <h1 className="c-work__title js-bounce-in">Help Scout.</h1>
      <span className="c-work__breakdown js-bounce-in" >Product Designer • UI / UX / Prototyping • 2019-2020</span>
    </div>
    <div className="c-work__hero-shot c-work__hero-shot--hs o-flexy js-bounce-in">
      <img className="lazy" data-src="https://www.seanhalpin.design/images/work/hs/hs-header__1.png" alt="Wireframe of Beacon Message" />
      <img className="lazy" data-src="https://www.seanhalpin.design/images/work/hs/hs-header__1.png" alt="Wireframe of Beacon Articles" />
      <img className="lazy" data-src="https://www.seanhalpin.design/images/work/hs/hs-header__1.png" alt="Wireframe of Beacon Chat" />
    </div>
    <div className="c-loader ">
      <svg className="c-loader__svg" width={88} height={63} viewBox="0 0 88 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M44 62.8571C68.3005 62.8571 88 48.7861 88 31.4286C88 14.0711 68.3005 0 44 0C19.6995 0 0 14.0711 0 31.4286C0 48.7861 19.6995 62.8571 44 62.8571ZM44 47.1429C52.6788 47.1429 59.7143 40.1073 59.7143 31.4286C59.7143 22.7498 52.6788 15.7143 44 15.7143C35.3212 15.7143 28.2857 22.7498 28.2857 31.4286C28.2857 40.1073 35.3212 47.1429 44 47.1429Z" fill="#000000" />
      </svg>
    </div>
  </div> 
            </>
        )
    }
}
