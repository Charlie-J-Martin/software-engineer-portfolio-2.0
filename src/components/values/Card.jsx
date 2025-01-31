import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <>
      <div className='card-container'>
        <div className={props.isActive ? 'card-text-active' : 'card-text'}>
          <h1 className='card-text-h1'>{props.title}</h1>
          <p className='card-text-p'>{props.description}</p>
        </div>
        <picture>
          <source media='(min-width: 480px)' srcset={props.webImg} />
          <img
            className={props.isActive ? 'card-image-active' : 'card-image'}
            src={props.img}
            alt={props.imgAltTag}
          />
        </picture>
      </div>
    </>
  );
};

export default Card;
