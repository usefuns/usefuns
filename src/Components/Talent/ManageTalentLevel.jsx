import React from 'react'
import style from "./ManageTalentLevel.module.css"
import level1icon from "../../assets/icons/lvl1.png"
import level2icon from "../../assets/icons/lvl2.png"
import level3icon from "../../assets/icons/lvl3.png"
import level4icon from "../../assets/icons/lvl4.png"
import level5icon from "../../assets/icons/lvl5.png"

const ManageTalentLevel = () => {

    const tableData = [
        { id: 1, level: 'level 1',expCount:"455555555", image:level1icon },
        { id: 2, level: 'level 1',expCount:"455555555", image:level2icon },
        { id: 3, level: 'level 1',expCount:"455555555", image:level3icon },
        { id: 4, level: 'level 1',expCount:"455555555", image:level4icon },
        { id: 5, level: 'level 1',expCount:"455555555", image:level5icon },

       

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
        <h3>Manage Talent Levels</h3>


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

export default ManageTalentLevel