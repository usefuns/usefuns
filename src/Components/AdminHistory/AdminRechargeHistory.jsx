import React from 'react'
import style from "./AdminRechargeHistory.module.css"
import coinImg from "../../assets/icons/coin.png"

const AdminRechargeHistory = () => {

    const tableData = [
        { id: 1, name: 'Main Coin Portal',coins:"5000000000", datetime:"2023-03-02 21:45:55" },
        { id: 2, name: 'Main Coin Portal',coins:"5000000000", datetime:"2023-03-02 21:45:55" },
        { id: 3, name: 'Main Coin Portal',coins:"5000000000", datetime:"2023-03-02 21:45:55" },
        { id: 4, name: 'Main Coin Portal',coins:"5000000000", datetime:"2023-03-02 21:45:55" },



      ];

      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.coins}</td>
           <td>{row.datetime}</td>
          </tr>
        ));
      };

  return (
    <div>
        <h3>Admin Recharge History</h3>



        <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Coins</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default AdminRechargeHistory