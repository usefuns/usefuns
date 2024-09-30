import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import "./Dashboard.css";
import Title from "../common/Title";

const Dashboard = () => {
  const [loading, setLoading] = useState(null);
  const [totalUser, setTotalUser] = useState(null);
  const [totalApprovedHost, setTotalApprovedHost] = useState(null);
  const [totalRejectedHost, setTotalRejectedHost] = useState(null);
  const [totalPendingHost, setTotalPendingHost] = useState(null);

  const getTotalUser = () => {
    fetch("https://fun2fun.live/user/getall")
      .then((response) => response.json())
      .then((data) => setTotalUser(data.data.length));
  };
  const getApprovedHost = () => {
    fetch("https://fun2fun.live/host/getApproved")
      .then((response) => response.json())
      .then((data) => setTotalApprovedHost(data.data.length));
  };
  const getRejectedHost = () => {
    fetch("https://fun2fun.live/host/getRejected")
      .then((response) => response.json())
      .then((data) => setTotalRejectedHost(data.data.length));
  };
  const getPendingHost = () => {
    fetch("https://fun2fun.live/host/getPending")
      .then((response) => response.json())
      .then((data) => setTotalPendingHost(data.data.length));
  };
  useEffect(() => {
    setLoading(true);
    getTotalUser();
    getApprovedHost();
    getRejectedHost();
    getPendingHost();
    return setLoading(false);
  }, []);

  return (
    <>
      <Title title="Dashboard" />
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card card-1">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total User</h5>
                <p className="card-text text-white">
                  {!loading && totalUser !== null ? totalUser : "Loading Data"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card card-2">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total Approved Host</h5>
                <p className="card-text text-white">
                  {!loading && totalApprovedHost !== null
                    ? totalApprovedHost
                    : "Loading Data"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card card-3">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total Rejected Host</h5>
                <p className="card-text text-white">
                  {!loading && totalRejectedHost !== null
                    ? totalRejectedHost
                    : "Loading Data"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
          <div className="card card-3">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total Pending Host</h5>
                <p className="card-text text-white">
                  {!loading && totalPendingHost !== null
                    ? totalPendingHost
                    : "Loading Data"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
