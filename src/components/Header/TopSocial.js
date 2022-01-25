import React, { Component } from 'react'
import {  Link } from "react-router-dom"
import { FaTwitter, FaFacebookF} from 'react-icons/fa'

export default class TopSocial extends Component {
    render() {
        return (
            <>
           <li className="c-nav-list__item o-flexy__item u-mrg-l-auto">
          <Link to="/" className="c-nav-list__link external"  target="_blank" rel="noopener" aria-label="Twitter">
            <FaTwitter/>
        </Link>
        </li>
      <li className="c-nav-list__item o-flexy__item">
      <Link to="/" className="c-nav-list__link external"  target="_blank" rel="noopener" aria-label="facebook">
      <FaFacebookF/>
        </Link></li>  
            </>
        )
    }
}
