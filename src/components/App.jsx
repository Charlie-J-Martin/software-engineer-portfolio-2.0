import React, { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const override = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  // TODO: Change this to true, once development is finished
  const [loading, setLoading] = useState(false);

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
            color={'#F37A24'}
            loading={loading}
            size={300}
            cssOverride={override}
            speedMultiplier={0.75}
          />
        </>
      ) : (
        <h1>Hello World</h1>
      )}
    </div>
  );
}

export default App;
