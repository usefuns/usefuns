import React from 'react';
import "./Managelength.css"

const ManageLength = () => {
  return (
    <div className='length-head'>
        <h2>ManageLength</h2>
        <div className='label-length'>
           <label> Descrpition length</label>
            <select name="" id="">
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
            </select>
        </div>
    </div>
  )
}

export default ManageLength