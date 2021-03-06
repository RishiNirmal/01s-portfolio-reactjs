import React from 'react'


const DateTime= props =>
{
        return (
            <>
     <div className="c-wip__timeline-item o-flexy february-2021" data-date="february-2021" data-control="february-2021_control">
      <div className="c-wip__date">
        <div className="c-wip__date-content o-flexy o-flexy--top">
          <div className="o-flexy__item">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 2.66669H3.33333C2.59695 2.66669 2 3.26364 2 4.00002V13.3334C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3334V4.00002C14 3.26364 13.403 2.66669 12.6667 2.66669Z" stroke="#232320" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.668 1.33331V3.99998" stroke="#232320" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.33203 1.33331V3.99998" stroke="#232320" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 6.66669H14" stroke="#232320" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="o-flexy__block@md u-mrg-l-3">
            <span>{props.titleMMYY}</span>
          </div>
        </div>
      </div>
    </div>

    </>

  );
};

export default DateTime;