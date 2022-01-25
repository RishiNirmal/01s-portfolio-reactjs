import React, { Component } from 'react'

export default class PositionCard extends Component {
    render() {
        return (
            <>
             <div className="c-duties">
    <div className="c-duties__col">
      <h6 className="c-duties__title">
        Position
      </h6>
      <ul className="c-duties__list">
        <li className="c-duties__list-item">Product Designer</li>
      </ul>
      <h6 className="c-duties__title">
        Org
      </h6>
      <ul className="c-duties__list">
        <li className="c-duties__list-item">Help Scout</li>
      </ul>
      <h6 className="c-duties__title">
        Year
      </h6>
      <ul className="c-duties__list">
        <li className="c-duties__list-item">2019-2020</li>
      </ul>
    </div>
    <div className="c-duties__col">
      <h6 className="c-duties__title">
        Work
      </h6>
      <ul className="c-duties__list">
        <li className="c-duties__list-item">
          Product design
        </li>
        <li className="c-duties__list-item">
          Design hand-off tools
        </li>
      </ul>
      <h6 className="c-duties__title">
        Www
      </h6>
      <ul className="c-duties__list">
        <li className="c-duties__list-item">
          <a href="/" className="c-duties__link" target="_blank" rel="noopener noreferrer nofollow"><span>iOS SDK on Github</span></a>
        </li>
        <li className="c-duties__list-item">
          <a href="/" className="c-duties__link" target="_blank" rel="noopener noreferrer nofollow"><span>Android SDK on Github</span></a>
        </li>
      </ul>
    </div>
  </div>   
            </>
        )
    }
}
