import React, { Component } from 'react'
import Img1 from  '../../skills-image/hs.png'
import Img2 from  '../../skills-image/shape.png'
import Img3 from  '../../skills-image/browso.png'
import Img4 from  '../../skills-image/custoji.png'
import Img5 from  '../../skills-image/figma.png'
import Img6 from  '../../skills-image/jeff.jpg'
import Skills from './skills'



export default class Index extends Component {
    ankerclasschange = [
        { id: 1, classChange:"--hs",imgsrc:Img1,title:"Help Scout",content:"Mobile",imgClass:'c-tile__img c-tile__img--hs lazy', ariaLable:"Help Scout Case Study" , linkChange:"/work/help-scout/" },

        { id: 2, classChange:"--shape" ,imgsrc:Img2,title:"Shape",content:"Web App" ,imgClass:'c-tile__img c-tile__img--shape lazy' , ariaLable:"Shape Case Study" , linkChange:"/work/shape/"},

        { id: 3, classChange:"--browso",imgsrc:Img3,title:"Browso",content:"Web App" ,imgClass:'c-tile__img c-tile__img--browso lazy' , ariaLable:"Browso Case Study" , linkChange:"/work/browso/"},

        { id: 4, classChange:"--custoji",imgsrc:Img4,title:"Custoji",content:"Web App" ,imgClass:'c-tile__img c-tile__img--custoji lazy' , ariaLable:"Custoji Case Study" , linkChange:"/work/custoji/"},

        { id: 5, classChange:"--figma" ,imgsrc:Img5,title:"Figma",content:"Plugins" ,imgClass:'c-tile__img c-tile__img--figma lazy' , ariaLable:"Figma Plugins Case Study" , linkChange:"/work/figma/"},

        { id: 6, classChange:"--jeffsum",imgsrc:Img6,title:"Jeffsum",content:"Wtf" ,imgClass:'c-tile__img c-tile__img--jeffsum lazy' , ariaLable:"Jeffsum Case Study" , linkChange:"/work/jeffsum/"}
      ];
    render() {  
        return (
            <>
                <div className="c-tiles">
                {
                this.ankerclasschange.map(item =><Skills {...item} />)
                
                }
                </div>

            </>
        )
    }
}
