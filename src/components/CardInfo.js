import React from "react";
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="my-card-info" style={style}>
            <p className="my-card-title">{props.title}</p>
            <p className="my-card-sub-title">{props.subTitle}</p>
            
            <p>
            <a href={props.link1} target="_blank" rel="noopener noreferrer">Deployed</a>
            </p>

            <p>
            <a href={props.link2} target="_blank" rel="noopener noreferrer">Repo</a>
            </p>
        </animated.div>
    );

}

export default CardInfo;

