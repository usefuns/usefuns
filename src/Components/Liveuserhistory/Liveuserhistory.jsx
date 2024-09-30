import React from "react";
import "./Liveuserhistory.css";
import Title from "../common/Title";

const Liveuserhistory = () => {
  return (
    <>
      <Title title="Mannage Live User History" />
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card">
            <div className="card-body d-flex align-items-start justify-content-between">
              <h6>Start date</h6>
              <input type="date" name="startdate" id="startdate" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card">
            <div className="card-body d-flex align-items-start justify-content-between">
              <h6>End date</h6>
              <input type="date" name="enddate" id="enddate" />
            </div>
          </div>
        </div>
      </div>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Last Login(Date/Time)</th>
            <th scope="col">Live Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>03-08-2023/16:18</td>
            <td>43min</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Liveuserhistory;
