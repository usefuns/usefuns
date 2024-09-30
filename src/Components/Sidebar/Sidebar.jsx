import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hostIcon, userIcon } from "../../assets";
// import hostIcon from "../../assets/icons/host.png"
import agencyIcon from "../../assets/icons/agency.png";
import adminIcon from "../../assets/icons/admin.png";
import subAdminIcon from "../../assets/icons/subadmin.png";
import appEntryIcon from "../../assets/icons/appentey.png";
import securityIcon from "../../assets/icons/security.png";
import roomWallpaperIcon from "../../assets/icons/coinHistory.png";
import framesIcon from "../../assets/icons/frames.png";
import shopIcon from "../../assets/icons/shop.png";
import mylevel from "../../assets/icons/mylevel.png";
import talentIcon from "../../assets/icons/talent.png";
import reportIcon from "../../assets/icons/report.png";
import rechargeIcon from "../../assets/icons/Recharge.png";
import vehicleIcon from "../../assets/icons/vehicle.png";
import lockroomIcon from "../../assets/icons/lockroom.png";
import chatbubbleIcon from "../../assets/icons/chatbubble.png";
import relationshipIcon from "../../assets/icons/relationship.png";
import specialIdIcon from "../../assets/icons/specialid.png";
import extraSeatIcon from "../../assets/icons/extraseat.png";
import VipIcon from "../../assets/icons/vip.png";
import BannerIcon from "../../assets/icons/banner.png";
import GiftIcon from "../../assets/icons/gift.png";
import coinIcon from "../../assets/icons/coin.png";
import tagIcon from "../../assets/icons/tags.png"
import salary from "../../assets/icons/salary.png"
import signout from "../../assets/icons/signout.png"

import { useCollapse } from "react-collapsed";
import { useState } from "react";

const User = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={userIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Users</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/view-users">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-users">
              <p>View Users</p>
            </Link>
          </li>
          <li>
            <Link to="/top-users">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/top-users">
              <p>Top Users</p>
            </Link>
          </li>
          <li>
            <Link to="/live-users">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/live-users">
              <p>Live Users</p>
            </Link>
          </li>
          <li>
            <Link to="/users-list">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/users-list">
              <p>Users List</p>
            </Link>
          </li>
          <li>
            <Link to="/push-message">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/push-message">
              <p>Push Message</p>
            </Link>
          </li>
          <li>
            <Link to="/official-user/add">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/official-user/add">
              <p>Add Official User</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Host
const Host = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Host</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/pending-host-request">
              {" "}
              <img src={hostIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/pending-host-request">
              <p>Pending Host Request</p>
            </Link>
          </li>
          <li>
            <Link to="/approved-host-request">
              {" "}
              <img src={hostIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/approved-host-request">
              <p>Approved Host Request</p>
            </Link>
          </li>
          <li>
            <Link to="/rejected-host-request">
              {" "}
              <img src={hostIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/rejected-host-request">
              <p>Rejected Host Request</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
const Signout1 = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {

    const apiUrl = "https://yoyo560live.live/admin/adminuser/logout";
    const authToken = localStorage.getItem("Admintoken");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("Admintoken");
        localStorage.removeItem("AdminLoginData");
        navigate("/admin/login");
        toast.success("Logged out successfully");
      } else {
        toast.error("Error logging out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
    }
  }
  return (
    <li>
      <Link to="#" onClick={handleSignOut}>
        <img src={signout} alt="icon" />
      </Link>
      <Link to="#" onClick={handleSignOut}>
        <p>Sign Out</p>
      </Link>
    </li>
  );
};
const Signout2 = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {

    const apiUrl = "https://yoyo560live.live/admin/subadminuser/logout";
    const authToken = localStorage.getItem("SubAdmintoken");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("SubAdmintoken");
        localStorage.removeItem("SubAdminLoginData");
        navigate("/subadmin/login");
        toast.success("Logged out successfully");
      } else {
        toast.error("Error logging out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
    }
  }
  return (
    <li>
      <Link to="#" onClick={handleSignOut}>
        <img src={signout} alt="icon" />
      </Link>
      <Link to="#" onClick={handleSignOut}>
        <p>Sign Out</p>
      </Link>
    </li>
  );
};
const Signout3 = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {

    const apiUrl = "https://yoyo560live.live/admin/securityUser/logout";
    const authToken = localStorage.getItem("Securitytoken");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("Securitytoken");
        localStorage.removeItem("SecurityLoginData");
        navigate("/uf_team/login");
        toast.success("Logged out successfully");
      } else {
        toast.error("Error logging out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
    }
  }
  return (
    <li>
      <Link to="#" onClick={handleSignOut}>
        <img src={signout} alt="icon" />
      </Link>
      <Link to="#" onClick={handleSignOut}>
        <p>Sign Out</p>
      </Link>
    </li>
  );
};
//Agent route from here //=================================================
const Admin1 = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/admin-panel">
          <p>Home</p>
        </Link>

      </li>
    </>
  );
};
const Admin2 = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/sub-admin-panel">
          <p>Home</p>
        </Link>

      </li>
    </>
  );
};
const Admin3 = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/uf_team">
          <p>Home</p>
        </Link>

      </li>
    </>
  );
};
//Agency
const Agency = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={agencyIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Manage Agency</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-agency">
              {" "}
              <img src={agencyIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-agency">
              <p>Add Agency</p>
            </Link>
          </li>
          <li>
            <Link to="/view-agency">
              {" "}
              <img src={agencyIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-agency">
              <p>View Agency</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Admin
const Admin = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={adminIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Admin</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-admin">
              {" "}
              <img src={adminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-admin">
              <p>Add Admin</p>
            </Link>
          </li>
          <li>
            <Link to="/view-admin">
              {" "}
              <img src={adminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-admin">
              <p>View Admin</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//SubAdmin
const SubAdmin = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={subAdminIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Sub Admin</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-subadmin">
              {" "}
              <img src={subAdminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-subadmin">
              <p>Add Sub Admin</p>
            </Link>
          </li>
          <li>
            <Link to="/view-subadmin">
              {" "}
              <img src={subAdminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-subadmin">
              <p>View Sub Admin</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
const Security = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={securityIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>UF Team</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-uf_team">
              {" "}
              <img src={subAdminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-uf_team">
              <p>Add UF Team</p>
            </Link>
          </li>
          <li>
            <Link to="/view-uf_team">
              {" "}
              <img src={subAdminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-uf_team">
              <p>View UF Team</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//AppEntry
const AppEntry = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={appEntryIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>App Entry</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-appentry">
              {" "}
              <img src={appEntryIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-appentry">
              <p>Add App Entry</p>
            </Link>
          </li>
          <li>
            <Link to="/view-appentry">
              {" "}
              <img src={appEntryIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-appentry">
              <p>View App Entry</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//RoomWallpaper
const Shop = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={shopIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Shop</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-room-wallpaper">
              {" "}
              <img src={roomWallpaperIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-room-wallpaper">
              <p>Add Room Wallpaper</p>
            </Link>
          </li>
          <li>
            <Link to="/view-room-wallpaper">
              {" "}
              <img src={roomWallpaperIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-room-wallpaper">
              <p>View Room Wallpaper</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/add-frames">
              {" "}
              <img src={framesIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-frames">
              <p>Add Frames</p>
            </Link>
          </li>
          <li>
            <Link to="/view-frames">
              {" "}
              <img src={framesIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-frames">
              <p>View Frames</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/add-vehicle">
              {" "}
              <img src={vehicleIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-vehicle">
              <p>Add Vehicle</p>
            </Link>
          </li>
          <li>
            <Link to="/view-vehicle">
              {" "}
              <img src={vehicleIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-vehicle">
              <p>View Vehicle</p>
            </Link>
          </li>
          <li>
            <Link to="/lock-room">
              <p>Lock Room</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/addbubble">
              {" "}
              <img src={agencyIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/addbubble">
              <p>Add Bubble</p>
            </Link>
          </li>
          <li>
            <Link to="/chat-bubble">
              {" "}
              <img src={agencyIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/chat-bubble">
              <p>View Chat Bubble</p>
            </Link>
          </li>
          <li>
            <Link to="/relationship">
              {" "}
              <img src={relationshipIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/relationship">
              <p>Relationship</p>
            </Link>
          </li>
          <li>
            <Link to="/specialid">
              {" "}
              <img src={specialIdIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/specialid">
              <p>Add Special ID</p>
            </Link>
          </li>
          <li>
            <Link to="/view-special-id">
              {" "}
              <img src={specialIdIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-special-id">
              <p>View Special ID</p>
            </Link>
          </li>
          <li>
            <Link to="/extra-seat">
              {" "}
              <img src={extraSeatIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/extra-seat">
              <p>Extra Seat</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/add-svip">
              {" "}
              <img src={mylevel} alt="icon" srcset="" />
            </Link>
            <Link to="/add-svip">
              <p>Add Svip</p>
            </Link>
          </li>
          <li>
            <Link to="/view-svip">
              {" "}
              <img src={mylevel} alt="icon" srcset="" />
            </Link>
            <Link to="/view-svip">
              <p>View Svip</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/add-vip">
              {" "}
              <img src={VipIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-vip">
              <p>Add Vip</p>
            </Link>
          </li>
          <li>
            <Link to="/view-vip">
              {" "}
              <img src={VipIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-vip">
              <p>View Vip</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/add-banner">
              {" "}
              <img src={BannerIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-banner">
              <p>Add Banner</p>
            </Link>
          </li>
          <li>
            <Link to="/view-banner">
              {" "}
              <img src={BannerIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-banner">
              <p>View Banner</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/manage-gift-category">
              {" "}
              <img src={GiftIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-gift-category">
              <p>Manage Gift Category</p>
            </Link>
          </li>
          <li>
            <Link to="/add-live-gifts">
              {" "}
              <img src={GiftIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-live-gifts">
              <p>Add Live Gift</p>
            </Link>
          </li>
          <li>
            <Link to="/manage-gifts">
              {" "}
              <img src={GiftIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-gifts">
              <p>Manage Gift</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Frames
// const Frames = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={framesIcon} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Frames</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/add-frames">
//               {" "}
//               <img src={framesIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/add-frames">
//               <p>Add Frames</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/view-frames">
//               {" "}
//               <img src={framesIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/view-frames">
//               <p>View Frames</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

//Vehicle
// const Vehicle = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={vehicleIcon} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Vehicle</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/add-vehicle">
//               {" "}
//               <img src={vehicleIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/add-vehicle">
//               <p>Add Vehicle</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/view-vehicle">
//               {" "}
//               <img src={vehicleIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/view-vehicle">
//               <p>View Vehicle</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };
//lockroom
// const LockRoom = () => {
//   return (
//     <>
//       <li>
//         <Link to="/lock-room">
//           {" "}
//           <img src={lockroomIcon} alt="icon" srcset="" />
//         </Link>
//         <Link to="/lock-room">
//           <p>Lock Room</p>
//         </Link>
//       </li>
//     </>
//   );
// };

//ChatBubble
// const ChatBubble = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={agencyIcon} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Chat Bubble</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/addbubble">
//               {" "}
//               <img src={agencyIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/addbubble">
//               <p>Add Bubble</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/chat-bubble">
//               {" "}
//               <img src={agencyIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/chat-bubble">
//               <p>View Chat Bubble</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

//Relationship
// const Relationship = () => {
//   return (
//     <>
//       <li>
//         <Link to="/relationship">
//           {" "}
//           <img src={relationshipIcon} alt="icon" srcset="" />
//         </Link>
//         <Link to="/relationship">
//           <p>Relationship</p>
//         </Link>
//       </li>
//     </>
//   );
// };

//SpecialID
// const SpecialId = () => {
//   return (
//     <>
//       <li>
//         <Link to="/specialid">
//           {" "}
//           <img src={specialIdIcon} alt="icon" srcset="" />
//         </Link>
//         <Link to="/specialid">
//           <p>Special ID</p>
//         </Link>
//       </li>
//     </>
//   );
// };

//Extra Seat
// const ExtraSeat = () => {
//   return (
//     <>
//       <li>
//         <Link to="/extra-seat">
//           {" "}
//           <img src={extraSeatIcon} alt="icon" srcset="" />
//         </Link>
//         <Link to="/extra-seat">
//           <p>Extra Seat</p>
//         </Link>
//       </li>
//     </>
//   );
// };

//SVIP
// const Svip = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={mylevel} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Svip</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/add-svip">
//               {" "}
//               <img src={mylevel} alt="icon" srcset="" />
//             </Link>
//             <Link to="/add-svip">
//               <p>Add Svip</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/view-svip">
//               {" "}
//               <img src={mylevel} alt="icon" srcset="" />
//             </Link>
//             <Link to="/view-svip">
//               <p>View Svip</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

//VIP
// const Vip = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={VipIcon} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Vip</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/add-vip">
//               {" "}
//               <img src={VipIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/add-vip">
//               <p>Add Vip</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/view-vip">
//               {" "}
//               <img src={VipIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/view-vip">
//               <p>View Vip</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

//Banner
// const Banner = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={BannerIcon} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Banner</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/add-banner">
//               {" "}
//               <img src={BannerIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/add-banner">
//               <p>Add Banner</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/view-banner">
//               {" "}
//               <img src={BannerIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/view-banner">
//               <p>View Banner</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

//Gifts
// const Gift = () => {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//     <>
//       <li
//         {...getToggleProps({
//           onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//         })}
//       >
//         <Link>
//           {" "}
//           <img src={GiftIcon} alt="icon" srcset="" />
//         </Link>
//         <Link>
//           <p>Gifts</p>
//         </Link>
//       </li>
//       <div {...getCollapseProps()}>
//         <ul>
//           <li>
//             <Link to="/manage-gift-category">
//               {" "}
//               <img src={GiftIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/manage-gift-category">
//               <p>Manage Gift Category</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/add-live-gifts">
//               {" "}
//               <img src={GiftIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/add-live-gifts">
//               <p>Add Live Gift</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/manage-gifts">
//               {" "}
//               <img src={GiftIcon} alt="icon" srcset="" />
//             </Link>
//             <Link to="/manage-gifts">
//               <p>Manage Gift</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

//Coin Seller
const CoinSeller = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={coinIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Coin Seller</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/coin-seller">
              {" "}
              <img src={coinIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/coin-seller">
              <p>Add Coin Seller</p>
            </Link>
          </li>
          <li>
            <Link to="/view-coin-seller">
              {" "}
              <img src={coinIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-coin-seller">
              <p>View Coin Seller</p>
            </Link>
          </li>
          <li>
            <Link to="/send-coins">
              {" "}
              <img src={coinIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/send-coins">
              <p>Send Coins</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Master Admin Coin history
const MasterAdmin = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={roomWallpaperIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Master Admin Coin History</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/admin-coin-history">
              {" "}
              <img src={roomWallpaperIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/admin-coin-history">
              <p>Admin Coin History</p>
            </Link>
          </li>
          <li>
            <Link to="/admin-recharge-history">
              {" "}
              <img src={roomWallpaperIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/admin-recharge-history">
              <p>Manage Admin Recharge History</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//My Level
const MyLevel = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={mylevel} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>My Level</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-level">
              {" "}
              <img src={mylevel} alt="icon" srcset="" />
            </Link>
            <Link to="/add-level">
              <p>Add Level</p>
            </Link>
          </li>
          <li>
            <Link to="/manage-mylevel">
              {" "}
              <img src={mylevel} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-mylevel">
              <p>View Level</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//The Talent
const TheTalent = () => {
  return (
    <>
      <li>
        <Link to="/manage-talent">
          {" "}
          <img src={talentIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/manage-talent">
          <p> The Talent</p>
        </Link>
      </li>
    </>
  );
};

//Tags
const Tags = () => {
  return (
    <>
      <li>
        <Link to="/addTags">
          {" "}
          <img src={tagIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/addTags">
          <p>Add Tags</p>
        </Link>
      </li>
      <li>
        <Link to="/viewTags">
          {" "}
          <img src={tagIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/viewTags">
          <p>View Tags</p>
        </Link>
      </li>
    </>
  );
};


//Report
const Report = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={reportIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Report</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/mange-report">
              {" "}
              <img src={reportIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/mange-report">
              <p>Manage report</p>
            </Link>
          </li>
          <li>
            <Link to="/user-report">
              {" "}
              <img src={reportIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/user-report">
              <p>User report</p>
            </Link>
          </li>
          <li>
            <Link to="/manage-problem-report">
              {" "}
              <img src={reportIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-problem-report">
              <p>Manage Problem report</p>
            </Link>
          </li>
          <li>
            <Link to="/user-video-report">
              {" "}
              <img src={reportIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/user-video-report">
              <p>User Video report</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Transaction History
const TransactionHistory = () => {
  return (
    <>
      <li>
        <Link to="/transaction-history">
          {" "}
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/transaction-history">
          <p>Transaction History</p>
        </Link>
      </li>
    </>
  );
};

//recharge
const Recharge = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={rechargeIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Recharge</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          {/* <li>
            <Link to="/admin-recharge-history">
              {" "}
              <img src={rechargeIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/admin-recharge-history">
              <p>Admin recharge history</p>
            </Link>
          </li> */}
          <li>
            <Link to="/offline-recharge-history">
              {" "}
              <img src={rechargeIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/offline-recharge-history">
              <p>Offline recharge history</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
//Account
const Account = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={userIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Account</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/user-profile">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/user-profile">
              <p>User Profile</p>
            </Link>
          </li>
          <li>
            <Link to="/change-password">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/change-password">
              <p>Change password</p>
            </Link>
          </li>
          <li>
            <Link to="/manage-logo">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-logo">
              <p>Manage Logo</p>
            </Link>
          </li>
          <li>
            <Link to="/manage-length">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-length">
              <p>Manage Length</p>
            </Link>
          </li>
          <li>
            <Link to="/manage-splash-image">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/manage-splash-image">
              <p>Manage Splash Image</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const Salary = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={salary} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Salary Setup</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/salary">
              {" "}
              <img src={salary} alt="icon" srcset="" />
            </Link>
            <Link to="/salary">
              <p>salary</p>
            </Link>
          </li>
          <li>
            <Link to="/salary-setup">
              {" "}
              <img src={salary} alt="icon" srcset="" />
            </Link>
            <Link to="/salary-setup">
              <p>Salary Setup</p>
            </Link>
          </li>
          <li>
            <Link to="/view-salary">
              {" "}
              <img src={salary} alt="icon" srcset="" />
            </Link>
            <Link to="/view-salary">
              <p>View</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Signout
const Signout = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const apiUrl = "https://yoyo560live.live/admin/logout";
    const authToken = localStorage.getItem("MasterAdmintoken");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("MasterAdmintoken");
        window.location.reload()
        navigate("/login");
        toast.success("Logged out successfully");
      } else {
        toast.error("Error logging out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
    }
  };

  return (
    <li>
      <Link to="/login" onClick={handleSignOut}>
        <img src={signout} alt="icon" />
      </Link>
      <Link to="/login" onClick={handleSignOut}>
        <p>Sign Out</p>
      </Link>
    </li>
  );
};

// const Home = () => {
//   return (
//     <>
//       <li>
//         <Link to="/">
//           {" "}
//           <img src={hostIcon} alt="icon" srcset="" />
//         </Link>
//         <Link to="/">
//           <p>Home</p>
//         </Link>
//       </li>
//     </>
//   );
// };



const Sidebar = () => {
  const location = useLocation();
  const isAgentLoginRoute = location.pathname === '/agent/login' || location.pathname === '/agent-panel' || location.pathname === '/agent-ranking';
  const admin = localStorage.getItem("Admintoken");
  const subadmin = localStorage.getItem("SubAdmintoken");
  const security = localStorage.getItem("Securitytoken");
  const masterAdmin = localStorage.getItem("MasterAdmintoken");


  if (masterAdmin || admin || subadmin || security) {
    return (
      <div className="container-sidebar">
        <div className="side_nav_header">
          <h5>Dashboard</h5>
        </div>
        <div className="side_nav_body">
          <ul>
            {admin ?
              <>
                <Admin1 />
                {/* <User /> */}
                <Agency />
                <SubAdmin />
                {/* <CoinSeller /> */}
                <Signout1 />
              </>
              : null
            }
            {subadmin ?
              <>
                <Admin2 />
                {/* <User /> */}
                <Agency />
                {/* <CoinSeller /> */}
                <Signout2 />
              </>
              : null
            }
            {security ?
              <>
                <Admin3 />
                <User />
                <Signout3 />
              </>
              : null
            }

            {masterAdmin ?
              <>
                <User />
                <Host />
                <Agency />
                <Admin />
                <SubAdmin />
                <Security />
                <AppEntry />
                <Shop />
                {/* <Frames />
                <Vehicle />
                <LockRoom />
                <ChatBubble />
                <Relationship />
                <SpecialId />
                <ExtraSeat />
                <Svip />
                <Vip />
                <Banner />
                <Gift /> */}
                <CoinSeller />
                <MasterAdmin />
                <MyLevel />
                <TheTalent />
                <Tags />
                <Report />
                <TransactionHistory />
                <Recharge />
                <Account />
                <Salary />
                <Signout />
              </>
              : null
            }


          </ul>
        </div>
      </div>
    );
  }
  else {
    return null
  }

};

export default Sidebar;




