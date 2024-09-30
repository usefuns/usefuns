import React from 'react';
import './Managesplash.css';

const ManageSplashImage = () => {
  return (
    <div className='splash-head'>
        <h2>Manage Splash Image</h2>

        <div className='label-splash'>
           <label> Update Splash Image</label>
            <input type="file" />
        </div>
    </div>
  )
}

export default ManageSplashImage