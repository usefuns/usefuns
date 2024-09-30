import React, { useState } from 'react';
import "./AddAppEntry.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppEntry = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      toast.error("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('images', selectedFile);

    try {
      const response = await fetch('https://yoyo560live.live/admin/appEntry/update', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        toast.success('App Entry Updated');
      } else {
        toast.error('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('An error occurred while submitting data.');
    }
  };

  return (
    <div className='app-entry'>
      <h2>Update AppEntry</h2>
      <form className="container" onSubmit={handleSubmit}>
        <label>Images*</label>
        <input type="file" name="appEntry" id="appEntry" onChange={handleFileChange} />
        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AppEntry;
