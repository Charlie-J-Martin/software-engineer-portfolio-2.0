/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <picture>
        <source media='(min-width: 1024px)' srcset={'/img/404-web.jpg'} />
        <img className='page-not-found-image' src='/img/404.jpg' />
      </picture>
      <div className='page-not-found-container'>
        <div className='page-not-found-text-container'>
          <h3 className='page-not-found-text'>
            Oops! - 404 Error
            <br />
            <br />
            We can't seem to find the page you're looking for!
          </h3>
        <div>
          <Link to='/'>
            <button type='button' className='button-41'>
              Go back home!
            </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
