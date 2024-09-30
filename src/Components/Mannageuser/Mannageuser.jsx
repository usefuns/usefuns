import React, { useState, useEffect } from "react";
import "./Mannageuser.css";
import Title from "../common/Title";
import { useNavigate } from "react-router-dom";

const Mannageuser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fun2fun.live/user/getall"
        );
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchall = async () => {
    try {
      const response = await fetch("https://fun2fun.live/user/getall");
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUserHandler = () => {
    const id = localStorage.getItem("userId");
    const url = `https://fun2fun.live/admin/user/delete/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("User deleted successfully");
          fetchall();
        } else {
          console.log("Error deleting user");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAction = (user, action) => {
    localStorage.setItem("userId", user._id);

    switch (action) {
      case "view":
        navigate("/view-user");
        break;
      case "edit":
        navigate("/edit-user");
        break;
      case "delete":
        deleteUserHandler();
        break;
      case "received-gift-history":
        navigate("/recieved-gift-history");
        break;
      case "send-gift-history":
        navigate("/send-gift-history");

        break;
      case "coin-history":
        navigate("/mannage-purchased-coin-history");
        break;
      case "live-history":
        navigate("/mannage-live-user-history");
        break;
      case "decline":
        break;
      default:
        break;
    }
  };
  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={user.img_url}
                  alt="profile"
                  style={{
                    width: "40px",
                    height: "50px",
                  }}
                />
              </td>
              <td>{user.name}</td>
              <td>{user?.userId}</td>
              <td>{user?.name}</td>
              <td>{user?.mobile}</td>
              <td>{user?.coin}</td>
              <td>{user?.diamonds}</td>
              <td>
                <div className="user-status">{user.status}</div>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="action-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Action</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "view")}
                      >
                        View
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "edit")}
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "delete")}
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          handleAction(user, "received-gift-history")
                        }
                      >
                        Recieved Gift History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "send-gift-history")}
                      >
                        Send Gift History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "coin-history")}
                      >
                        Coin History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "live-history")}
                      >
                        Live History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "decline")}
                      >
                        Decline
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2><SyncLoader color="#f403fc" /></h2>
          </td>
        </tr>
      );
    }
  };
  return (
    <>
      <Title title="Mannage Users" />
      <div className="d-flex align-items-center gap-1 input-fields">
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Search</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Start Date</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">End Date</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <button className="py-1 px-3 text-white search-btn">Search</button>
      </div>

      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Total Coins</th>
            <th scope="col">Total Diamonds</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </>
  );
};

export default Mannageuser;
