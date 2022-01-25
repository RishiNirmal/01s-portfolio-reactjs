import React, { Component } from 'react'
import BriefHistory from './BriefHistory';




export default class BriefIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
        a :[{
           title: "Heyyya"
       },
       {
           body: "This is second test"
       }
   ],
}
}
render() {  
        let briefclasschange =[
           { id: 1, classChange:"--ct", content:"Shape", title: this.state.a[0].title, number:"07-10" },
        
           { id: 2, classChange:"--df" ,content:"Shape",title:"Dotfusion", number:"10-14" },
        
           { id: 3, classChange:"--fl",content:"Browso",title:"Freelance", number:"12-15"},
        
           { id: 4, classChange:"--hs",content:"Custoji",title:"Help Scout", number:"15 ~"},
         ]
        return (
            <>
             <div className="c-timecard">
      <h2> A brief history </h2>
      <div className="c-gant">
      <div className="c-gant__chart">
                {
                briefclasschange.map(item =><BriefHistory {...item} />)
                
                }
                </div></div>
                </div>

            </>
        )
    }
}
