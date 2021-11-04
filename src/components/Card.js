import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block my-card" onClick={(e) => props.onClick(props.item)}>
            <img className="my-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link1={props.item.link1} link2={props.item.link2}  /> }
        </div>
    );
}

export default Card;