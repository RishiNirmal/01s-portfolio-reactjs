import React from "react";

const EmployeeInformation= props =>
{
   
    return(
        <>
       
       <div className="c-info__hero-col ">
        <div className="c-info__avatar">
          <picture>
            <img className="lazy" src={ `${props.imag}`} alt={ `${props.altchange}`} />
          </picture>
        </div>
      </div>
      <div className="c-info__hero-col ">
      <h1>{props.boldcontent1} <a href="/" rel="nofollow noreferrer noopener" target="_blank"><span>{props.linkContent}</span></a> {props.boldcontent2}</h1>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
      </div>
        
                    </>
       
    );
};

export default EmployeeInformation;
