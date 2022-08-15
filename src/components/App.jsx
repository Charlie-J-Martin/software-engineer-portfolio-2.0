import React, { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import Home from '../pages';

const override = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  // TODO: Change this to true, once development is finished
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <>
          <img src='/img/logo.png' alt='CM Logo' className='loader-image' />
          <PuffLoader
            color={'#01bf71'}
            loading={loading}
            size={300}
            cssOverride={override}
            speedMultiplier={0.75}
          />
        </>
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
