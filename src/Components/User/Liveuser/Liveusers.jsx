import React, { useEffect, useState } from "react";
import "./Liveusers.css";
import Title from "../../common/Title";

const Liveusers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://yoyo560live.live/user/live/getall`);
        if (!res.ok) {
          throw new Error("Network response is not ok!!!");
        }
        const jsonData = await res.json();
        console.log(jsonData.data);
        setUsers(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Title title="Mannage Live Users" />
      <div className="d-flex align-items-center gap-1 input-fields">
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Search</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Start Date</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">End Date</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <button className="py-1 px-3 text-white search-btn">Search</button>
      </div>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">Status</th>
            <th scope="col">Date/Time</th>
            <th scope="col">Live Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users !== null
            ? Object.values(users).map((userData, i) => (
              <tr key={userData._id}>
                <th scope="row">{i + 1}</th>
                <td>{userData.userId}</td>
                <td>{userData.name || "no data available"}</td>
                <td>{userData.channelName || "N/A"}</td>
                <td>Archived</td>
                <td>{userData.time || "no data available"}</td>
                <td>{userData.livetime || "no data available"}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    // Missing Dropdown options
                    >
                      <span>Action</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item">View</button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))
            : "Data Loading..."}
        </tbody>
      </table>
    </>
  );
};

export default Liveusers;
