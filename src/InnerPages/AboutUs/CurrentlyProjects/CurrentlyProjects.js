import React from "react";

const CurrentlyProject= props =>
{
   
    return(
        <>
       
       <div className="c-reading__item o-flexy__block">
          <div className="c-reading__book">
            <picture>
              <source srcSet={ `${props.imag}`}  alt={ `${props.altchange}`} width className type="image/png" />
              <img src={ `${props.imag}`} alt={ `${props.altchange}`} />
            </picture>
          </div>
          <span className="c-reading__title">{props.title}</span>
          <span className="c-reading__author">{props.author}</span>
        </div>
        
        
                    </>
       
    );
};

export default CurrentlyProject;