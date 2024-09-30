import React from 'react';
import './Otp.css';

function Otp() {
  return (
    <>
      <form>
        <div className="login-image">
          <img src="https://i.gifer.com/IPNp.gif" alt="" />
        </div>
        <div className='text-data'>
            <h4>4Fun recharge agent system</h4>
            <br/>
            <h4>The OTP has sent to your</h4><br/>
            <h4>6375360267</h4>
        </div>
        <div className='button-cont'>
        <div className='resend'>
            <button className='resend-btn'>Resend</button>
            </div>
            <div className='submit'>
            <button className='submit-btn'>Submit</button>
            </div>
        </div>
        
      </form>
    </>
  )
}

export default Otp
