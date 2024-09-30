import React, { useState, useEffect } from "react";
import "./Mannageuser.css";
import Title from "../../common/Title";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from "../../Customhook/usePaginate";


const Mannageuser = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const { currentPage, pageLimit, goToPage, changePageLimit } = usePagination();
  const shouldShowPagination = data.length > 10;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://yoyo560live.live/user/getall"
      );
      const jsonData = await response.json();
      console.log(jsonData.data)
      setData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Pagination 
  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;

  //Search
  const filteredData = data.filter(user => {
    const searchTerm = searchInput.toLowerCase();
    return (
      user?.name?.toLowerCase().includes(searchTerm) ||
      user?.userId?.toLowerCase().includes(searchTerm) ||
      (user?.email && user?.email.toLowerCase().includes(searchTerm)) ||
      (typeof user?.mobile === "string" && user?.mobile.toLowerCase().includes(searchTerm))
    );
  });

  const visibleData = filteredData.slice(startIndex, endIndex);

  const deleteUserHandler = (userId) => {
    const url = `https://yoyo560live.live/admin/user/delete/${userId}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("User deleted successfully");
          toast.success("Data deleted")
          fetchData();
        } else {
          console.log("Error deleting user");
          toast.error("Error while deleting data")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAction = (user, action) => {
    switch (action) {
      case "view":
        navigate(`/view-user/${user._id}`);
        break;
      case "edit":
        navigate(`/edit-user/${user._id}`);
        break;
      case "delete":
        deleteUserHandler(user);
        break;
      case "received-gift-history":
        navigate(`/recieved-gift-history/${user._id}`);
        break;
      case "send-gift-history":
        navigate(`/send-gift-history/${user._id}`);

        break;
      case "coin-history":
        navigate(`/mannage-purchased-coin-history/${user._id}`);
        break;
      case "live-history":
        navigate(`/mannage-live-user-history/${user._id}`);
        break;
      case "decline":
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Title title="Mannage Users" />
      <div className="d-flex align-items-center gap-1 input-fields">
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Search</p>
          <input
            type="text"
            name="search"
            id="search"
            className="p-1"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
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
            <th scope="col">UserId</th>
            <th scope="col">Phone</th>
            <th scope="col">Diamonds</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data ?
              visibleData.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={user?.images[0] || ""}
                      alt="profile"
                      style={{
                        width: "40px",
                        height: "50px",
                      }}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user?.userId}</td>
                  <td>{user?.mobile}</td>
                  <td>{user?.diamonds}</td>

                  <td>
                    <div>{user.is_active_userId === true ? "Active" : "Inactive"}</div>
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
                            onClick={() => handleAction(user && user._id, "delete")}
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
              )) : <h3>No data Available</h3>}
        </tbody>
      </table>
      {/* //Pagination  */}
      {shouldShowPagination && (
        <div className="pagination">
          <div className="pagination-controls">
            <button className="pagination-btn"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button className="pagination-btn"
              onClick={() => goToPage(currentPage + 1)}
              disabled={endIndex >= data.length}
            >
              Next
            </button>
          </div>
          <div className="page-limit-dropdown">
            <select
              value={pageLimit}
              onChange={(e) => changePageLimit(Number(e.target.value))}
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>

        </div>
      )}
    </>
  );
};

export default Mannageuser;
