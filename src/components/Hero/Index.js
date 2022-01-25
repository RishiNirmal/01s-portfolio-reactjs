import React, { Component } from 'react'
import HomeAnimatEye from '../HomeAnimateEye/Index'
import NameTittle from '../NameTitle/Index'

export default class Index extends Component {
  render() {
    return (
      <>
        <section className="c-hero">
          <div className="c-hero__box">
            <NameTittle />
            <HomeAnimatEye />
          </div>
        </section>

      </>
    )
  }
}
