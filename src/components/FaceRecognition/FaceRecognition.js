import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return(
    <div className='center ma'>
      <div className='absolute mt2'></div>
      <img alt='' src={imageUrl} width='500px' height='auto'/>
    </div>
  )
}

export default FaceRecognition;