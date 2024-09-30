import React, { useEffect, useState } from 'react';
import styles from "./ViewHostInfo.module.css"
import { useParams } from 'react-router-dom';

const ViewHostInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fun2fun.live/host/getbyid/${id}`);
        const jsonData = await response.json();
        console.log(jsonData.data);
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(id, "IDDDDDDDDDDDDDDDDDDDDDD")


  if (!data) {
    return <p>Loading...</p>;
  }




  // const dataa = {
  //   agencyCode: 123,
  //   userName: "abc",
  //   name: "xyz",
  //   status: "approved",
  //   email: "abc@gmail.com",
  //   created: "12/09/2023",
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h3>View Host Information</h3>

      <div className="main">
        <table>
          <thead>
            <tr>
              <th>Agency Code</th>
              <td>{data.agency_code}</td>
            </tr>
            <tr>
              <th>User Id</th>
              <td>{data.userId?.userId || "No data"}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{data.userId?.name || "No data"}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{data.status}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.userId?.email || "No data"}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{formatDate(data.createdAt
              ) || "no data"}</td>
            </tr>
          </thead>
        </table>
      </div>

      <div className={styles.box} >
        <label>Live(Ban/Unban)</label>
        <select name="" id="">
          <option value="banuser">Ban users</option>
          <option value="unabuser">Unban users</option>
        </select>

        <label>Host Request</label>
        <select name="" id="">
          <option value="banuser">Select User Status</option>
        </select>
      </div>
    </div>
  );
};

export default ViewHostInfo;
