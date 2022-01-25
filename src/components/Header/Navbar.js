import React from 'react'
import Logo from '../Logo/Index'
import Dropdown from './Dropdown'
import TopSocial from './TopSocial'
import {  NavLink } from "react-router-dom"
import GoToTop from '../../GotoTop'

// function refreshPage() {
//   setTimeout(()=>{
//       window.location.reload(false);
//   }, 0);
//   // console.log('page to reload')==onClick={refreshPage}
// } 

const MenuList = props => {
    const navbar = [
      { id: 1,  title: "Work",dropDownClass:"--work", jsWork:" js-work", menulink:"#;"},
      { id: 2, title: "About",dropDownClass:"--info", jsWork:"" , menulink:"/about-us"},
      { id: 3, title: "Wip",dropDownClass:"--wip", jsWork:"" , menulink:"/wip"},
      { id: 4, title: "Contact",dropDownClass:"--contact", jsWork:"js-seanbot" , menulink:""}
    ];
  
    return (
      <>
       <nav className="c-nav">
            <ul className="c-nav-list c-nav-list--info o-flexy o-flexy--top">
       <li className="c-nav-list__item o-flexy__item">
       <Logo/>
        </li>
        {navbar.map(item => (
           
          <li key={item.id} className={`c-nav-list__item o-flexy__item c-nav-list__item${item.dropDownClass}  ${item.jsWork}`} >
          <NavLink to={item.menulink} activeClassName="active" className={`c-nav-list__link c-nav-list__link${item.dropDownClass}`} ><span>{item.title}</span>
          </NavLink>
          </li>
             
        ))}
         <TopSocial/>
          </ul>
          <Dropdown/>
          </nav>
          <GoToTop/>
      </>
    );
  };

  export default MenuList;