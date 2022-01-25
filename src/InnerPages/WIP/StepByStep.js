import React from 'react'


const StepByStep = props => {
  return (
    <>

      <div className="c-wip__timeline-item o-flexy February-2021" data-date="February-2021">
        <div className="c-wip__timeline-icon o-flexy__item ">
          <div className="c-wip__timeline-icon-holder">
            <img src={`${props.Icons}`} alt="Timeline Icon" />
          </div>
        </div>
        <div className="c-wip__timeline-content o-flexy__block ">
          <h2>{props.mainTitle}</h2>
          <span className="c-wip__timestamp">{props.dateTime}</span>
          <p>{props.p1}<em></em></p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
          <img className="lazy" src={`${props.mainImage}`} aria-label="Room for questions. image" />
          <div className="c-wip__link-block">
            <a href="/" target="_blank" rel="nofollow noreferrer"><span>{props.ImageName}</span></a>
          </div>
        </div>
      </div>


    </>

  );
};

export default StepByStep;
