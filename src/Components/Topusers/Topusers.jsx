import React from "react";
import "./Topusers.css";
import Title from "../common/Title";

const Topusers = () => {
  return (
    <>
      <Title title="Hotlist User" />
      <button className="hotlist-btn">Add Hot List User</button>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Image</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="profile"
                style={{
                  width: "40px",
                  height: "50px",
                }}
              />
            </td>
            <td>Sourav007</td>
            <td>example@example.com</td>
            <td>9485959543</td>
            <td>
              <button className="remove-btn">Remove</button>
           </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Topusers;
