import React from 'react'
import './Card.scss'
const Card = (props) => {
    const {imageStr, name, description} = props
    const firstSentence = description.split(".")
  return (
    <div className='beerCard'>
        <img className='beerCard__image'src={imageStr} alt={name} />
        <h1 className='beerCard__title'>{name}</h1>
        <p className='beerCard__description'>{firstSentence[0]}</p>
    </div>
  )
}

export default Card