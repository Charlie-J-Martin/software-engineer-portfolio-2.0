import React from 'react';
import './subheading.css';

const Subheading = (props) => {
  return (
    <>
      <div className='subheading-container'>
        <div className='subheading-text'>
          <h3 className='subheading-number'>{props.number}</h3>
          <h3 className='subheading-title'>{props.name}</h3>
        </div>
        <div className='subheading-container-overlap'></div>
      </div>
    </>
  );
};

export default Subheading;
