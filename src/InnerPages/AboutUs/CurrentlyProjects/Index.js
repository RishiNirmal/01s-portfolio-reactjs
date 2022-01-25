import React, { Component } from 'react'
import CurrentlyProjects from './CurrentlyProjects';
import Img1 from '../../../Images/reading__01@1x.png'
import Img2 from '../../../Images/reading__02@1x.png'
import Img3 from '../../../Images/reading__03@1x.png'



export default class CurrentlyIndex extends Component {
    currentlyproject = [
        { id: 1, title:"Hokusai Prints &amp; Drawings", author:"Matthi Forrer", altchange:"Hokusai Prints Drawings", imag: Img1 },

        { id: 2, title:"Hand Drawn Maps", author:"Helen Cann", altchange:"Hand Drawn Maps", imag: Img2  },

        { id: 3,title:"The Dublin Artbook", author:"Edited by Emma Bennett", altchange:"The Dublin Artbook", imag: Img3},
      ];
    render() {  
        return (
            <>
              <div className="c-reading">
      <h2>
        Currently reading
      </h2>
      <div className="c-reading__block o-flexy@lg">
                {
                this.currentlyproject.map(item =><CurrentlyProjects {...item} />)
                
                }
                </div>
                </div>

            </>
        )
    }
}
