import React from "react";

const BriefHistory= props =>
{
   
    return(
        <>
       
        
        <div className={`c-gant__entry c-gant__entry${props.classChange}`}>
            <div className="o-flexy">
              <div className="o-flexy__block">
                <span className="c-gant__company">{props.content}</span>
                <span className="c-gant__role">{props.title}</span>
              </div>
              <div className="o-flexy__item">
                <div className="c-gant__tenure">{props.number}</div>
              </div>
            </div>
          </div>
        
        
                    </>
       
    );
};

export default BriefHistory;