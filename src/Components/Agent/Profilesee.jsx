import React from 'react'
import './Profilesee.css';
import admin from '../../assets/icons/admin.png';

function Profilesee() {
    return (

        <>
            <div className='main-contai'>
                
                
                <div className='profile-container'>
                    <div className='prof-img'>
                    <div className='flex-basis'>
                    
                    <img src={admin} alt="Example Image" />
                    </div>
                    <p>UseFun Id:1254698753</p>
                    </div>
                </div>
                <div className='text-contai'>
                    <p>Are you sure to recharge</p>
                    <p>100 Diamonds to this Usefun Id</p>
                    <div className='buttn'>
                    <button className='submit-butt'>Submit</button>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Profilesee
