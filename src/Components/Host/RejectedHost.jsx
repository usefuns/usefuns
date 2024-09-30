import React, { useEffect, useState } from 'react'
import style from "./PendingHost.module.css"
import { useNavigate } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'

const RejectedHost = () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://yoyo560live.live/host/getRejected");
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  const handleNavigate = (itemId) => {
    navigate(`/view-host-info/${itemId}`);
  }


  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];

      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item?.userId || "No data"}</td>
              <td>{item.agency_code || "No data"}</td>
              <td>{item.status || "No data"}</td>
              {/* <td>
                <select onChange={(e) => {
                  const selectedValue = e.target.value;
                  if (selectedValue === 'view') {
                    handleNavigate(item._id);
                  }


                }}>
                  <option value="">Action</option>
                  <option value="view">View</option>
                </select>
              </td> */}
            </tr>
          ))}
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2><SyncLoader color="#f403fc" /></h2>
          </td>
        </tr>
      );
    }
  };


  return (
    <div className={style.main}>
      <h3>Manage Rejected Host </h3>
      <div className={style.filter}>
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button>Search</button>
      </div>

      {/* ----------------------table---------------------- */}
      <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>UserId</th>
            <th>Agency Code</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

    </div>
  )
}

export default RejectedHost