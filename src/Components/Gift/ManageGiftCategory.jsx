import React, { useEffect, useState } from "react";
import './AddLiveGifts.css';
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";


function ManageGiftcategory() {
  const [giftc, setGiftc] = useState(null);
  const [formData, setFormData] = useState({
    name: ''
  });

  useEffect(() => {

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const responsedata = await fetch("https://fun2fun.live/admin/giftCategory/getall");
      if (!responsedata.ok) {
        throw new Error("Network issue");
      }
      const response = await responsedata.json();
      setGiftc(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("fetching problem", error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Please add a Image")
      return
    }
    try {
      const response = await fetch('https://fun2fun.live/admin/giftCategory/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name
        }),
      });

      if (response.ok) {
        // console.log('Response data:', responseData);
        toast.success('added successfully.');
        fetchData();
      } else {
        // console.error('Failed to add Frames. Response status:', response.status);
        toast.error('Error occurred');
      }
    } catch (error) {
      // console.error('Error adding Frames:', error);
    }
  };
  return (
    <div id="gift_main">
      <div className="gift_header">
        <h3>Manage Gift Category</h3>
        <button className="gift_btn">Add Gift Category</button>
        <br />   <br />
        <form onSubmit={handleSubmit}>
          <label>Name*</label>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='category name' />
          <div >
            <br />
            <Button variant="success" type="submit">Submit</Button>
          </div>
        </form>
      </div>
      <br />
      <table className="gift_table">
        <tr>
          <th>Sr.</th>
          <th> Title</th>
          {/* <th>Action</th> */}
        </tr>
        {giftc && giftc.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            {/* <td><select>
              <option>select</option>
            </select></td> */}
          </tr>

        ))}

      </table>
    </div>
  );
}

export default ManageGiftcategory;