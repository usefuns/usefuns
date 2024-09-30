import React from 'react';
import './Sallary.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Salerysetup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/diamoindValue/get`);
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
    <div className='salary-dashboard'>
      <h3>View Salary</h3>
      <div className='salary-container'>
        <div className='row1'>
          <div className='one-ele'>
            <label className='one-label'>Bins</label>
            <input type='text' value={data ? data.bins : ""} />
          </div>
          <div className='one-ele'>
            <label className='two-label'>Diamond</label>
            <input type='text' value={data ? data.diamoind : ""} />
          </div>
          <div className='one-ele'>
            <label className='three-label'>Cash</label>
            <input type='text' value={data ? data.cash : ""} />
          </div>
          <div className='view-btn' onClick={handleNavigate}><button>View</button></div>
        </div>

        <div className='row3'>
          <button className='submit-btn'>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default Salerysetup