import React, { useEffect, useState } from "react";
import "./Userslist.css";
import Title from "../../common/Title";
import { SyncLoader } from "react-spinners";

const Userslist = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://3.7.46.22:4000/user/getall"
        );
        const jsonData = await response.json();
        if (response.ok) {
          console.log(jsonData.data, "DATA")
          setData(jsonData.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  console.log(data)

  const handleSearch = () => {
    const filteredData = data.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setData(filteredData);
  };

  return (
    <>
      <Title title="Mannage Report" />
      <div className="d-flex align-items-center gap-1 input-fields">
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Search</p>
          <input
            type="text"
            name="search"
            id="search"
            className="p-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Start Date</p>
          <input
            type="text"
            name="search"
            id="search"
            className="p-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div> */}
        {/* <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">End Date</p>
          <input
            type="text"
            name="search"
            id="search"
            className="p-1"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div> */}
        <button
          className="py-1 px-3 text-white search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Bio</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {!loading && data !== null
            ? data.map((data, i) => (
              <tr key={data._id}>
                <th scope="row">{i + 1}</th>
                <td>{data.name}</td>
                <td>N/A</td>
                <td>{data.mobile}</td>
                <td>N/A</td>
                <td>{data.dob}</td>
                <td>{data.status}</td>
              </tr>
            ))
            : <h2><SyncLoader color="#f403fc" /></h2>}
        </tbody>
      </table>
    </>
  );
};

export default Userslist;
