import React, { Component } from 'react'
import {  Link } from "react-router-dom"

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 0);
    // console.log('page to reload')
  }
export default class Index extends Component {
    render() {
        return (
            <>
                <Link className="c-nav-list__link c-nav-list__link--logo" to="/" aria-label="Home" onClick={refreshPage}>
                    <div className="c-logo">
            <div className="c-logo__eye">
              <div className="c-logo__iris" />
            </div>
          </div>
        </Link>  
            </>
            
        )
    }
}
