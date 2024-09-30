import React from 'react'
import "../Recharge/RechargeDashboard.css"

const AgencyBalance = () => {
  return (
    <div>
      <div className='last-cont'>
        <div className='last-cont-1'>
          <label htmlFor='text'>Payment Method</label>
          <div className='confirm-flex'>
            <input
              type='text'
              className='usefun-id-text'
              placeholder='Payment Method'
            />
            {/* <div className='btn2'>
              <button className='cofirm-btn'>
                Confirm
              </button>
            </div> */}
          </div>
        </div>
        <div className='last-cont-1'>
          <label htmlFor='text'>Amount</label>
          <input
            type='text'
            className='usefun-id-text'
            placeholder='enter recharge amount'
          />
        </div>
        <div className='button-sub'>
          <button className='confirm'>
            Recharge
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgencyBalance