import React, { Component } from 'react'
import Img1 from '../../../Images/me@1x.png'
import EmployeeInformation from './Information';




export default class InformationIndex extends Component {
    EmployeeDetails = [
        { id: 1, title:"Hokusai Prints &amp; Drawings", author:"Matthi Forrer", altchange:"Hokusai Prints Drawings", imag: Img1,
        boldcontent1:"I’m 01Synergy, a Product Designer working remotely for",
        linkContent:"Help Scout",
        boldcontent2:"on their mobile products in Ludhiana, India.",
        p1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " ,
        p2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        p3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    },
      ];
    render() {  
        return (
            <>
           
           <div className="c-info__hero">
                {
                this.EmployeeDetails.map(item =><EmployeeInformation {...item} />)
                
                }
                
                </div>

            </>
        )
    }
}
