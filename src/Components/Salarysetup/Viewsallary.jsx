import React, { useState, useEffect } from 'react';
import './Sallary.css';
import { useNavigate } from 'react-router-dom';

const Viewsallary = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/salarySetup/get`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      if (responseData.data.length > 0) {
        const salaryData = responseData.data[0];
        setData(salaryData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNavigate = () => {
    navigate("/salary-setup")
  }

  return (
    <div>
      <div className='salary-container'>
        <h3>View Commissions</h3>
        <div className='row-1'>
          <div className='one-elem'>
            <label className='one-labeler'>Target Diamond</label>
            <input type='text' value={data ? data.targetDiamoind : ''} />
          </div>
          <div className='one-elem'>
            <label className='two-labeler'>Get Salary</label>
            <input type='text' value={data ? data.getSalary : ''} />
          </div>
          <div className='one-elem'>
            <label className='three-labeler'>Agency Commission</label>
            <input type='text' value={data ? data.agencyCommision : ''} />
          </div>
          <div className='one-elem'>
            <label className='three-labeler'>Admin Commission</label>
            <input type='text' value={data ? data.adminCommision : ''} />
          </div>
          <div className='one-elem'>
            <label className='three-labeler'>Bid Commission</label>
            <input type='text' value={data ? data.bdCommision : ''} />
          </div>
          <div className='view-btn' onClick={handleNavigate}><button>View</button></div>
        </div>
        <div className='row-3'>
          <button className='submit-btn'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Viewsallary;
