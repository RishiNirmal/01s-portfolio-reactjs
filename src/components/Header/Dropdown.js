import React, { Component } from 'react'
import {  NavLink } from "react-router-dom"

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
} 

const DropdownList = props => {
    const dropdown = [
      { id: 1,  title: "Help Scout", menulink:"/help-scout"},
      { id: 2, title: "Shape", menulink:"/help-scout"},
      { id: 3, title: "Browso" , menulink:"/help-scout"},
      { id: 4, title: "Custoji" , menulink:"/help-scout" },
      { id: 3, title: "Figma Plugins", menulink:"/help-scout" },
      { id: 4, title: "Jeffsum", menulink:"/help-scout"  }
    ];
  
    return (
      <>
       <div className="c-nav__work">
      <ul className="c-nav__work-list">
        {dropdown.map(item => (
           
          <li key={item.id} className="c-nav__work-list-item">
          <NavLink to={item.menulink} activeClassName="active" className="c-nav__work-list-item-link" onClick={refreshPage}><span>{item.title}</span>
          </NavLink>
          </li>
             
        ))}
        </ul>
        </div>
      </>
    );
  };

  export default DropdownList;