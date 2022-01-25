import React from "react";

const Skills = props => {

    return (
        <>

            <a href={props.linkChange} className={`c-tile c-tile${props.classChange}`} aria-label={props.ariaLable}>
                <span className="c-tile__category">{props.content}</span>
                <h2 className="c-tile__title">{props.title}</h2>
                <div className="c-tile__holder">
                    <img className={props.imgClass} data-src={props.imgsrc} alt="Help Scout" aria-label="Help Scout image" />
                </div>
            </a>

        </>

    );
};

export default Skills;







