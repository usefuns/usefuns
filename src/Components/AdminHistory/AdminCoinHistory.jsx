import React from 'react'
import style from "./AdminCoinHistory.module.css"
import coinImg from "../../assets/icons/coin.png"

const AdminCoinHistory = () => {

    const tableData = [
        { id: 1, level: 'level 22',expCount:"5000000000", image:coinImg },
        { id: 2, level: 'level 22',expCount:"5000000000", image:coinImg },
        { id: 3, level: 'level 22',expCount:"5000000000", image:coinImg },
        { id: 4, level: 'level 22',expCount:"5000000000", image:coinImg },
        { id: 5, level: 'level 22',expCount:"5000000000", image:coinImg },


      ];

      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.level}</td>
            <td>{row.expCount}</td>
            <td>{<img className={style.images} src={row.image} alt='images'/>}</td>
            <td>{<select>
                <option value="action">Action</option>
                <option value="update">Update</option>
                <option value="remove">Remove</option>
                
                </select>}</td>
          </tr>
        ));
      };

  return (
    <div>
        <h3>Coin Seller</h3>



        <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Level</th>
            <th>ExpCount</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default AdminCoinHistory