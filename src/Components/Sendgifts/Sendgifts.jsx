import React from "react";
import "./Sendgifts.css";
import Title from "../common/Title";

const Sendgifts = () => {
  return (
    <>
      <Title title="Send Gift History" />
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card">
            <div className="card-body d-flex align-items-start justify-content-between">
              <h5 className="card-title">Total Gift</h5>
              <p className="card-text">0</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card">
            <div className="card-body d-flex align-items-start justify-content-between">
              <h5 className="card-title">Total Coin</h5>
              <p className="card-text">0</p>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Username</th>
            <th scope="col">Gift Image</th>
            <th scope="col">Coin</th>
            <th scope="col">Live Id</th>
            <th scope="col">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sourav007</td>
            <td>
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="profile"
                style={{
                  width: "50px",
                  height: "40px",
                }}
              />
            </td>
            <td>43</td>
            <td>822e609g</td>
            <td>03-08-2023/16:18</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Sendgifts;
