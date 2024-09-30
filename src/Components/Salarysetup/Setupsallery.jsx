import React, { useEffect, useState } from 'react';
import './Sallary.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Setupsallery = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [salaryData, setSalaryData] = useState(null);
  const [salaryForm, setSalaryForm] = useState({
    bins: '',
    diamoind: '',
    cash: '',
  });

  const [formData, setFormData] = useState({
    targetDiamoind: '',
    getSalary: '',
    agencyCommision: '',
    adminCommision: '',
    bdCommision: '',
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/salarySetup/get`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      if (responseData.data.length > 0) {
        const commissionData = responseData.data[0];
        setData(commissionData);
        setFormData(commissionData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSalaryData = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/diamoindValue/get`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      if (responseData.data.length > 0) {
        const salaryData = responseData.data[0];
        setSalaryData(salaryData);
        setSalaryForm(salaryData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchSalaryData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SalaryChange = (e) => {
    const { name, value } = e.target;
    setSalaryForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.agencyCommision.endsWith('%') ||
        !formData.adminCommision.endsWith('%') ||
        !formData.bdCommision.endsWith('%')
      ) {
        const missingPercentageFields = [];
        if (!formData.agencyCommision.endsWith('%')) missingPercentageFields.push('Agency Commission');
        if (!formData.adminCommision.endsWith('%')) missingPercentageFields.push('Admin Commission');
        if (!formData.bdCommision.endsWith('%')) missingPercentageFields.push('Bid Commission');

        toast.error(`Please add '%' after the numbers in the following fields: ${missingPercentageFields.join(', ')}`);
        return;
      }

      const response = await fetch('https://yoyo560live.live/admin/salarySetup/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success('Data Edited');
    } catch (error) {
      console.error('Error editing data:', error);
      toast.error('Error occur while editing data');
    }
  };

  const handleSalarySubmit = async () => {
    try {
      const response = await fetch('https://yoyo560live.live/admin/diamoindValue/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(salaryForm),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success('Salary Edited');
    } catch (error) {
      console.error('Error editing Salary:', error);
      toast.error('Error occur while editing Salary');
    }
  };

  const handleNavigate = () => {
    navigate('/view-salary');
  };

  const NavigateToSalary = () => {
    navigate('/salary');
  };

  return (
    <div className='salary-dashboard'>
      <h3>Edit Commissions</h3>
      <div className='salary-container'>
        <div className='row-1'>
          <div className='one-elem'>
            <label className='one-labeler'>Target Diamond</label>
            <input type='number' name='targetDiamoind' placeholder='Target Diamond' value={formData ? formData.targetDiamoind : ''} onChange={handleChange} />
          </div>
          <div className='one-elem'>
            <label className='two-labeler'>Get Salary</label>
            <input type='number' name='getSalary' placeholder='Get Salary' value={formData ? formData.getSalary : ''} onChange={handleChange} />
          </div>
          <div className='one-elem'>
            <label className='three-labeler'>Agency Commission</label>
            <input type='text' name='agencyCommision' placeholder='Agency Commission' value={formData ? formData.agencyCommision : ''} onChange={handleChange} />
          </div>
          <div className='one-elem'>
            <label className='three-labeler'>Admin Commission</label>
            <input type='text' name='adminCommision' placeholder='Admin Commission' value={formData ? formData.adminCommision : ''} onChange={handleChange} />
          </div>
          <div className='one-elem'>
            <label className='three-labeler'>Bid Commission</label>
            <input type='text' name='bdCommision' placeholder='Bid Comission' value={formData ? formData.bdCommision : ''} onChange={handleChange} />
          </div>
          <div className='view-btn' onClick={handleNavigate}><button>View</button></div>
        </div>

        <div className='row-3'>
          <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div className='salary-container'>
        <h3>Edit Salary</h3>
        <div className='row1'>
          <div className='one-ele'>
            <label className='one-label'>Bins</label>
            <input type='number' name='bins' value={salaryForm?.bins || ''} onChange={SalaryChange} />
          </div>
          <div className='one-ele'>
            <label className='two-label'>Diamond</label>
            <input type='number' name='diamoind' value={salaryForm?.diamoind || ''} onChange={SalaryChange} />
          </div>
          <div className='one-ele'>
            <label className='three-label'>Cash</label>
            <input type='number' name='cash' value={salaryForm?.cash || ''} onChange={SalaryChange} />
          </div>
          <div className='view-btn' onClick={NavigateToSalary}><button>View</button></div>
        </div>

        <div className='row3'>
          <button className='submit-btn' onClick={handleSalarySubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Setupsallery;
