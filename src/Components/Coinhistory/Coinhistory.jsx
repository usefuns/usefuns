import React from "react";
import "./Coinhistory.css";
import Title from "../common/Title";

const Coinhistory = () => {
  return (
    <>
      <Title title="Mannage Purchased Coin History" />
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card">
            <div className="card-body d-flex align-items-start justify-content-between">
              <h5 className="card-title">Total Amount</h5>
              <p className="card-text">100</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card">
            <div className="card-body d-flex align-items-start justify-content-between">
              <h5 className="card-title">Total Coin</h5>
              <p className="card-text">30</p>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Coin</th>
            <th scope="col">Coin Price</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Coin</td>
            <td>43</td>
            <td>822e609g</td>
            <td>03-08-2023/16:18</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Coinhistory;
