import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/User/Mannageuser/Mannageuser";
import Viewuser from "./Components/User/Viewuser/Viewuser";
import Sidebar from "./Components/Sidebar/Sidebar";
import Edituser from "./Components/User/Edituser/Edituser";
import Receivedgifts from "./Components/Receivedgifts/Receivedgifts";
import Sendgifts from "./Components/Sendgifts/Sendgifts";
import Coinhistory from "./Components/Coinhistory/Coinhistory";
import Liveuserhistory from "./Components/User/Liveuserhistory/Liveuserhistory";
import Topusers from "./Components/User/Topusers/Topusers";
import AddAgency from "./Components/Agency/AddAgency";
import ViewAgency from "./Components/Agency/ViewAgency";
import AddAdmin from "./Components/Admin/AddAdmin";
import ViewAdmin from "./Components/Admin/ViewAdmin";
import AddSubAdmin from "./Components/Admin/SubAdmin/AddSubAdmin";
import ViewSubAdmin from "./Components/Admin/SubAdmin/ViewSubAdmin";
import AddAppEntry from "./Components/AppEntry/AddAppEntry";
import ViewAppEntry from "./Components/AppEntry/ViewAppEntry";
import AddRoomWallpaper from "./Components/RoomWallpaper/AddRoomWallpaper";
import ViewRoomWallpaper from "./Components/RoomWallpaper/ViewRoomWallpaper";
import PendingHost from "./Components/Host/PendingHost";
import ApprovedHost from "./Components/Host/ApprovedHost";
import RejectedHost from "./Components/Host/RejectedHost";
import ViewHostInfo from "./Components/Host/ViewHostInfo";
import AddFrames from "./Components/Frames/AddFrames";
import ViewFrames from "./Components/Frames/ViewFrames";
import Liveusers from "./Components/User/Liveuser/Liveusers";
import Userslist from "./Components/User/Userlist/Userslist";
import Pushmessage from "./Components/User/Pushmessage/Pushmessage";
import UserProfile from "./Components/Account/UserProfile";
import ChangePassword from "./Components/Account/ChangePassword";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import SendCoins from "./Components/TransactionHistory/SendCoins";
import OfflineRechargeHistory from "./Components/Recharge/OfflineRechargeHistory";
import ManageLogo from "./Components/Account/Managelogo";
import AdminCoinHistory from "./Components/AdminHistory/AdminCoinHistory";
import AdminRechargeHistory from "./Components/AdminHistory/AdminRechargeHistory";
import ManageMyLevel from "./Components/MyLevel/ManageMyLevel";
import ManageTalentLevel from "./Components/Talent/ManageTalentLevel";
import ManageReport from "./Components/Report/ManageReport";
import UserReport from "./Components/Report/UserReport";
import ManageLength from "./Components/Account/ManageLength";
import ManageSplashImage from "./Components/Account/ManageSplashImage";
import AddVehicle from "./Components/Vehicle/AddVehicle";
import ViewVehicle from "./Components/Vehicle/ViewVehicle";
import ExtraSeat from "./Components/ExtraSeat/ExtraSeat";
import SpecialIdComp from "./Components/SpecialId/SpecialId";
import LockRoom from "./Components/LockRoom/LockRoom";
import RelationShip from "./Components/RelationShip/RelationShip";
import ChatBubble from "./Components/ChatBubble/ChatBubble";
import ManageProblemReport from "./Components/Report/ManageProblemReport";
import UserVideoReport from "./Components/Report/UserVideoReport";
import AddBanner from "./Components/Banner/AddBanner";
import ViewBanner from "./Components/Banner/ViewBanner";
import AddVip from "./Components/Vip/AddVip";
import ViewVip from "./Components/Vip/ViewVip";
import AddSvip from "./Components/Svip/AddSvip";
import ViewSvip from "./Components/Svip/ViewSvip";
import AddLiveGifts from "./Components/Gift/AddLiveGifts";
import ManageGiftcategory from "./Components/Gift/ManageGiftCategory";
import ManageGift from "./Components/Gift/ManageGifts";
import SignIn from "./Components/SignIn/SignIn";
import AddBubble from "./Components/ChatBubble/AddBubble";
import CoinSeller from "./Components/Coinhistory/CoinSeller";
import AddLevel from "./Components/MyLevel/AddLevel";
import AgentLogin from "./Components/Agent/Login";
import Otp from "./Components/Agent/Otp";
import RechargeDashboard from "./Components/Agent/Recharge/RechargeDashboard";
import DiamondAccount from "./Components/Agent/Recharge/DiamondAccount";
import Profilesee from "./Components/Agent/Profilesee";
import Welcome from "./Components/Welcome/Welcome.jsx";
import AddTags from "./Components/Tags/AddTags";
import Ranking from "./Components/Agent/Ranking";
import AgentPanel from "./Components/Agent/AgentPanel";
import { useState } from "react";
import { useEffect } from "react";
import Salerysetup from "./Components/Salarysetup/Salerysetup";
import Setupsallery from "./Components/Salarysetup/Setupsallery";
import Viewsallary from "./Components/Salarysetup/Viewsallary";
import Login from "./Components/Account/Login";
import NotFoundPage from "./Components/NotFound/NotFoundPage";
import AdminLogin from "./Components/Admin/Login";
import AdminPanel from "./Components/Admin/AdminPanel";
import SubAdminLogin from "./Components/Admin/SubAdmin/Login";
import SubAdminPanel from "./Components/Admin/SubAdmin/AdminPanel";
import SecurityLogin from "./Components/Admin/Security/Login.jsx";
import SecurityPanel from "./Components/Admin/Security/SecurityPanel.jsx";
import AddSecurity from "./Components/Admin/Security/AddSecurity.jsx";
import ViewSecurity from "./Components/Admin/Security/ViewSecurity.jsx";
import ViewCoinSeller from "./Components/Coinhistory/ViewCoinSeller.jsx";
import ViewSpecialId from "./Components/SpecialId/ViewSpecialId.jsx";
import AddOfficialUser from "./Components/User/OfficialUser/AddOfficialUser.jsx";
import ViewTags from "./Components/Tags/ViewTags.jsx";
import MyCustomer from "./Components/Agent/AgentCenter/MyCustomer.jsx";
// import SignOutComp from "./Components/SignOut/SignOutComp";





function App() {

  const token = localStorage.getItem("MasterAdmintoken");
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(token));
  const tokenAdmin = localStorage.getItem("Admintoken");
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(Boolean(tokenAdmin));

  const PrivateRoute = ({ children, ...rest }) => {
    console.log("PrivateRoute isLoggedIn:", isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
  };
  const AdminRoute = ({ children, ...rest }) => {

    return !isLoggedInAdmin ? children : <Navigate to="/admin/login" />;
  };




  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />
        <Welcome />
        <div className="app_body p-5">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            {/* <Route path="/signIn" element={<SignIn />} /> */}
            {/* <Route path="/signout" element={<SignOutComp/>}/> */}
            <Route path="/view-users" element={<Mannageuser />} />

            <Route path="/view-user/:id" element={<Viewuser />} />
            <Route path="/edit-user/:id" element={<Edituser />} />
            <Route path="/recieved-gift-history/:id" element={<Receivedgifts />} />
            <Route path="/send-gift-history/:id" element={<Sendgifts />} />
            <Route path="/mannage-purchased-coin-history/:id" element={<Coinhistory />} />
            <Route path="/mannage-live-user-history/:id" element={<Liveuserhistory />} />
            <Route path="/top-users" element={<Topusers />} />
            <Route path="/live-users" element={<Liveusers />} />
            <Route path="/users-list" element={<Userslist />} />
            <Route path="/push-message" element={<PrivateRoute><Pushmessage /></PrivateRoute>} />
            <Route path="/add-agency" element={<AddAgency />} />
            <Route path="/view-agency" element={<ViewAgency />} />
            <Route path="/add-admin" element={<PrivateRoute><AddAdmin /></PrivateRoute>} />
            <Route path="/view-admin" element={<PrivateRoute><ViewAdmin /></PrivateRoute>} />
            <Route path="/add-subadmin" element={<AddSubAdmin />} />
            <Route path="/view-subadmin" element={<ViewSubAdmin />} />
            <Route path="/add-uf_team" element={<AddSecurity />} />
            <Route path="/view-uf_team" element={<ViewSecurity />} />
            <Route path="/add-appentry" element={<PrivateRoute><AddAppEntry /></PrivateRoute>} />
            <Route path="/view-appentry" element={<PrivateRoute><ViewAppEntry /></PrivateRoute>} />
            <Route path="/add-room-wallpaper" element={<PrivateRoute><AddRoomWallpaper /></PrivateRoute>} />
            <Route path="/view-room-wallpaper" element={<PrivateRoute><ViewRoomWallpaper /></PrivateRoute>} />
            <Route path="/pending-host-request" element={<PrivateRoute><PendingHost /></PrivateRoute>} />
            <Route path="/approved-host-request" element={<PrivateRoute><ApprovedHost /></PrivateRoute>} />
            <Route path="/rejected-host-request" element={<PrivateRoute><RejectedHost /></PrivateRoute>} />
            <Route path="/view-host-info/:id" element={<ViewHostInfo />} />
            <Route path="/add-frames" element={<PrivateRoute><AddFrames /></PrivateRoute>} />
            <Route path="/view-frames" element={<PrivateRoute><ViewFrames /></PrivateRoute>} />
            <Route path="/add-vehicle" element={<PrivateRoute><AddVehicle /></PrivateRoute>} />
            <Route path="/view-vehicle" element={<PrivateRoute><ViewVehicle /></PrivateRoute>} />
            <Route path="/extra-seat" element={<PrivateRoute><ExtraSeat /></PrivateRoute>} />

            <Route path="/specialid" element={<PrivateRoute><SpecialIdComp /></PrivateRoute>} />
            <Route path="/lock-room" element={<PrivateRoute><LockRoom /></PrivateRoute>} />
            <Route path="/add-banner" element={<PrivateRoute><AddBanner /></PrivateRoute>} />
            <Route path="/view-banner" element={<PrivateRoute><ViewBanner /></PrivateRoute>} />
            <Route path="/add-vip" element={<PrivateRoute><AddVip /></PrivateRoute>} />
            <Route path="/view-vip" element={<PrivateRoute><ViewVip /></PrivateRoute>} />
            <Route path="/add-svip" element={<PrivateRoute><AddSvip /></PrivateRoute>} />
            <Route path="/view-svip" element={<PrivateRoute><ViewSvip /></PrivateRoute>} />
            <Route path="/add-live-gifts" element={<PrivateRoute><AddLiveGifts /></PrivateRoute>} />
            <Route path="/manage-gift-category" element={<PrivateRoute><ManageGiftcategory /></PrivateRoute>} />
            <Route path="/manage-gifts" element={<PrivateRoute><ManageGift /></PrivateRoute>} />
            <Route path="/relationship" element={<PrivateRoute><RelationShip /></PrivateRoute>} />
            <Route path="/addbubble" element={<PrivateRoute><AddBubble /></PrivateRoute>} />
            <Route path="/chat-bubble" element={<PrivateRoute><ChatBubble /></PrivateRoute>} />
            <Route path="/admin-coin-history" element={<PrivateRoute><AdminCoinHistory /></PrivateRoute>} />
            <Route path="/admin-recharge-history" element={<PrivateRoute><AdminRechargeHistory /></PrivateRoute>} />
            <Route path="/manage-mylevel" element={<PrivateRoute><ManageMyLevel /></PrivateRoute>} />
            <Route path="/add-level" element={<PrivateRoute><AddLevel /></PrivateRoute>} />
            <Route path="/manage-talent" element={<PrivateRoute><ManageTalentLevel /></PrivateRoute>} />
            <Route path="/mange-report" element={<PrivateRoute><ManageReport /></PrivateRoute>} />
            <Route path="/user-report" element={<PrivateRoute><UserReport /></PrivateRoute>} />
            <Route path="/manage-problem-report" element={<PrivateRoute><ManageProblemReport /></PrivateRoute>} />
            <Route path="/user-video-report" element={<PrivateRoute><UserVideoReport /></PrivateRoute>} />
            <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />

            <Route path="/manage-logo" element={<PrivateRoute><ManageLogo /></PrivateRoute>} />
            <Route path="/manage-length" element={<PrivateRoute><ManageLength /></PrivateRoute>} />
            <Route path="/manage-splash-image" element={<PrivateRoute><ManageSplashImage /></PrivateRoute>} />
            <Route path="/transaction-history" element={<PrivateRoute><TransactionHistory /></PrivateRoute>} />
            <Route path="/send-coins" element={<SendCoins />} />
            <Route path="/coin-seller" element={<CoinSeller />} />
            <Route path="/view-coin-seller" element={<ViewCoinSeller />} />
            <Route path="/view-special-id" element={<ViewSpecialId />} />

            <Route path="/offline-recharge-history" element={<PrivateRoute><OfflineRechargeHistory /></PrivateRoute>} />
            <Route path="/otp-recharge" element={<PrivateRoute><Otp /></PrivateRoute>} />
            <Route path="/recharge-dashboard" element={<PrivateRoute><RechargeDashboard /></PrivateRoute>} />
            <Route path="/diamond-account" element={<PrivateRoute><DiamondAccount /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profilesee /></PrivateRoute>} />
            <Route path="/addTags" element={<AddTags />} />
            <Route path="/viewTags" element={<ViewTags />} />
            <Route path="/agent-ranking" element={<Ranking />} />
            <Route path="/recharge" element={<AgentPanel />} />
            <Route path="/recharge/checkout_success" element={<MyCustomer />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/sub-admin-panel" element={<SubAdminPanel />} />
            <Route path="/uf_team" element={<SecurityPanel />} />
            <Route path="/agent/login" element={<AgentLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/subadmin/login" element={<SubAdminLogin />} />
            <Route path="/uf_team/login" element={<SecurityLogin />} />
            <Route path="/official-user/add" element={<AddOfficialUser />} />
            <Route path="/salary" element={<PrivateRoute><Salerysetup /></PrivateRoute>} />
            <Route path="/salary-setup" element={<PrivateRoute><Setupsallery /></PrivateRoute>} />
            <Route path="/view-salary" element={<PrivateRoute><Viewsallary /></PrivateRoute>} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
