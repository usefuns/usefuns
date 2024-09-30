import React from 'react'
import './RechargeOption.css';
import admin from '../../assets/icons/admin.png';

function RechargeOption() {
    return (

        <>
            <div className='main-cont'>
                <div className='heading-part'>
                    <div className="image-short">
                        <img src="https://i.gifer.com/IPNp.gif" alt="" />

                    </div>
                    <div className='phone'>
                        <p className='no'>6375360267</p>
                        <p className='blnc'>my agent balance:500$</p>
                    </div>
                    <div className='button-logout'>
                        <button className='logout'>Logout</button>
                    </div>
                </div>
                <div className='middle-center'>
                    <p>Recharge To</p>
                    <p>My Agent Balance</p>
                    <p>Agent Center</p>
                </div>

                
                <div className='last-last-cont-div'>

                    <div className='last-last-cont'>
                        <label for="amount">Payment Method</label>
                        <input type='text' className='usefun-id-text' placeholder='enter usefun id' />
                    </div>
                    <div className='last-last-cont'>
                        <label for="amount">Amount</label>
                        <input type='text' className='usefun-id-text' placeholder='enter usefun id' />
                    </div>


                </div>
                <div className='button-btn-recharge'>
                    <button>Recharge Now</button>
                </div>

            </div>
        </>
    )
}

export default RechargeOption
