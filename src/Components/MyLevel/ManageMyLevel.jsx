import React, { useEffect, useState } from 'react'
import style from "./ManageMyLevel.module.css"
// import level1icon from "../../assets/icons/lvl1.png"
// import level2icon from "../../assets/icons/lvl2.png"
// import level3icon from "../../assets/icons/lvl3.png"
// import level4icon from "../../assets/icons/lvl4.png"
// import level5icon from "../../assets/icons/lvl5.png"
import { useNavigate } from 'react-router-dom'

const ManageMyLevel = () => {

  const [data, setData] = useState(null)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://yoyo560live.live/admin/level/getall");
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data)




  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.level}</td>
              <td>{item.count ? item.count : "N/A"}</td>
              {/* <td>{
                <img src={item.images} />
              }</td> */}

            </tr>
          ))}
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2>No data available</h2>
          </td>
        </tr>
      );
    }
  };


  return (
    <div>
      <h3>Manage My Levels</h3>


      <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Level</th>
            <th>ExpCount</th>
            {/* <th>Image</th> */}
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default ManageMyLevel