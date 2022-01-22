import React from 'react'
import cardStyle from './card.module.scss'

const Card = ({card}) => {
    return <div className={ cardStyle.main }>
        <img src={card?.url} alt={card?.categories?.name} />
        <p className={cardStyle.photoSize}>{card.width} x {card.height}</p>
    </div>
}

export default Card