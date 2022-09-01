import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className='card-container'>
        <div
          className={props.isActive ? 'card-text-active' : 'card-text'}
        >
          <h1 className='card-text-h1'>{props.title}</h1>
          <p className='card-text-p'>{props.description}</p>
        </div>
        <img
          className={props.isActive ? 'card-image-active' : 'card-image'}
          src={props.img}
          alt=''
        />
        <div className='card-sub-image'></div>
      </div>
    </>
  );
};

export default Card;
