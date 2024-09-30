import React, { useState, useEffect } from "react";
import "./Viewuser.css";
import Title from "../common/Title";
import { SyncLoader } from "react-spinners";

const Viewuser = () => {
  const [data, setData] = useState(null);
  const id = localStorage.getItem("userId").trim();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://yoyo560live.live/user/getbyid/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        console.log("Fetched Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(data, "data");
  return (
    <>
      <Title title="View User" />
      <div className="view-user">
        {data ? (
          <div className="view-user1">
            <div className="user-keys">
              <div className="user-name">
                <p>User Name</p>
              </div>
              <div className="user-email">
                <p>Email</p>
              </div>
              <div className="user-number">
                <p>Mobile</p>
              </div>
              <div className="user-status1">
                <p>Status</p>
              </div>
              <div className="user-varify-email">
                <p>Is Email varified</p>
              </div>
              <div className="user-type">
                <p>User Type</p>
              </div>
              <div className="user-device-id">
                <p>Device ID</p>
              </div>
              <div className="user-device-type">
                <p>Device Type</p>
              </div>
              <div className="user-id-ban">
                <label htmlFor="user-ban">
                  User ID(Ban/Unban)
                  <select name="user-ban" id="user-ban">
                    <option value="ban">Ban</option>
                    <option value="unban">Unban</option>
                  </select>
                </label>
              </div>
              <div className="user-badges">
                <label htmlFor="user-badges">
                  Badges
                  <select name="user-badges" id="user-badges">
                    <option value="badges">Select Badges</option>
                    <option value="ban">Ban</option>
                    <option value="unban">Unban</option>
                  </select>
                </label>
              </div>
              <div className="live-hotlist">
                <label htmlFor="live-hotlist">
                  Live Hotlist
                  <select name="live-hotlist" id="live-hotlist">
                    <option value="ban">Ban</option>
                    <option value="unban">Unban</option>
                  </select>
                </label>
              </div>
            </div>
            {data && (
              <div key={data._id} className="user-values">
                <div className="user-name">
                  <p>{data.name}</p>
                </div>
                <div className="user-email">
                  <p>{data.name}</p>
                </div>
                <div className="user-number">
                  <p>{data.mobile}</p>
                </div>
                <div className="user-status1">
                  <p>{data.status}</p>
                </div>
                <div className="user-varify-email">
                  <p>{data.status}</p>
                </div>
                <div className="user-type">
                  <p>{data.user_type}</p>
                </div>
                <div className="user-device-id">
                  <p>{data._id}</p>
                </div>
                <div className="user-device-type">
                  <p>Android</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>No data available</p>
        )}
        {data ? (
          <div className="view-user2">
            <div className="user-keys">
              <div className="user-follower">
                <p>No of Followers</p>
              </div>
              <div className="user-following">
                <p>No of Following</p>
              </div>
              <div className="user-likes">
                <p>No of Likes</p>
              </div>
              <div className="user-comment">
                <p>No of Comment</p>
              </div>
              <div className="user-viewsno">
                <p>No of views</p>
              </div>
              <div className="user-blocklist">
                <p>No of Block User</p>
              </div>
              <div className="user-account">
                <p>No of Account</p>
              </div>
              <div className="user-live">
                <label htmlFor="user-live">
                  Live(Ban/Unban)
                  <select name="user-live" id="user-live">
                    <option value="ban">Ban</option>
                    <option value="unban">Unban</option>
                  </select>
                </label>
              </div>
              <div className="user-deviceid-ban">
                <label htmlFor="user-deviceban">
                  Device ID(Ban/Unban)
                  <select name="user-deviceban" id="user-deviceban">
                    <option value="ban">Ban</option>
                    <option value="unban">Unban</option>
                  </select>
                </label>
              </div>
              <button className="remove-button">Remove DP</button>
            </div>
            {data && (
              <div key={data._id} className="user-values">
                <div className="user-follower">
                  <p>{data.followers || 0}</p>
                </div>
                <div className="user-following">
                  <p>{data.following || 0}</p>
                </div>
                <div className="user-likes">
                  <p>{data.likes}</p>
                </div>
                <div className="user-comment">
                  <p>{data.comments}</p>
                </div>
                <div className="user-viewsno">
                  <p>{data.views}</p>
                </div>
                <div className="user-blocklist">
                  <p>{data.block_users}</p>
                </div>
                <div className="user-account">
                  <p>{data.accounts}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p><SyncLoader color="#f403fc" /></p>
        )}
      </div>
    </>
  );
};

export default Viewuser;
