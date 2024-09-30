import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import style from "./UserReport.module.css";

const UserReport = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yoyo560live.live/user/userReport/getall`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        console.log("Fetched Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);

  console.log(data, "data")






  return (
    <div className={style.main}>
      <h3>Manage User Report</h3>
      <div className={style.filter}>
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className={style.searchbtn}>Search</button>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>User Name</th>
            <th>User Id</th>
            <th>Report User Name</th>
            <th>Report User Id</th>
            <th>Report</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <tbody>{renderTableRows()}</tbody> */}
        <tbody>
          {data ? data.map((data, i) => (
            <tr key={data._id}>
              <th scope="row">{i + 1}</th>
              <td>{data.name}</td>
              <td>{data._id}</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>{data.message}</td>
              <td>N/A</td>
            </tr>
          ))
            : "No Data Found"}
        </tbody>
      </table>


    </div>
  );
};

export default UserReport;
