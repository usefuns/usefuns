import React from 'react'
import style from "./ManageReport.module.css"


const ManageReport = () => {

    const tableData = [
        { id: 1, title: 'its necessary'},
        { id: 1, title: 'its Abusive'},
        { id: 1, title: 'its Bad'},
        { id: 1, title: 'its Spam'},
        { id: 1, title: 'its Spam'},



       

      ];

      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
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
        <h3>Manage Report</h3>


        <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default ManageReport