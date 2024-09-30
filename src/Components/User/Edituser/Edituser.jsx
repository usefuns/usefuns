import { useEffect, useState } from "react";
import Title from "../../common/Title";
import "./Edituser.css";
import { GiRoundStar } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import { Button, Col, Row } from "react-bootstrap";
const Edituser = () => {
  const { id } = useParams();
  const [badges, setBadges] = useState([]);
  const [Vehicle, setVehicle] = useState([]);
  const [wallpaper, setWallpaper] = useState([]);
  const [frame, setFrame] = useState([]);
  const [chatProfile, setChatProfile] = useState([]);
  const [vip, setVip] = useState([]);
  const [svip, setSvip] = useState([]);
  const [lockRoom, setLockRoom] = useState([]);
  const [extraSeat, setExtraSeat] = useState([]);
  const [specialId, setSpecialId] = useState([]);
  const [agency, setAgency] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [subAdmin, setSubAdmin] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const [selectedwallpaper, setSelectedwallpaper] = useState([]);
  const [selectedframe, setSelectedframe] = useState([]);
  const [selectedchatProfile, setSelectedchatProfile] = useState([]);
  const [selectedvip, setSelectedvip] = useState([]);
  const [selectedsvip, setSelectedsvip] = useState([]);
  const [selectedlockRoom, setSelectedlockRoom] = useState([]);
  const [selectedextraSeat, setSelectedextraSeat] = useState([]);
  const [selectedspecialId, setSelectedspecialId] = useState([]);
  const [selectedagency, setSelectedagency] = useState([]);
  const [selectedadmin, setSelectedadmin] = useState([]);
  const [selectedsubAdmin, setSelectedsubAdmin] = useState([]);
  const [userData, setUserData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    fetchData();
    fetchBadges();
    fetchVip();
    fetchAdmin();
    fetchAgency();
    fetchChatProfile();
    fetchVehicle();
    fetchFrame();
    fetchExtraSeat();
    fetchSpecialId();
    fetchLockRoom();
    fetchSubAdmin();
    fetchSvip();
    fetchWallpaper();
    fetchRoomData();
  }, []);
  const fetchBadges = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/tags/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setBadges(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchVehicle = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/vehicle/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setVehicle(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchWallpaper = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/wallpaper/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setWallpaper(jsonData?.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchFrame = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/frame/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setFrame(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchChatProfile = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/chatBubble/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setChatProfile(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchVip = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/vip/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setVip(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchSvip = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/svip/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setSvip(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchLockRoom = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/lockRoom/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setLockRoom(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchExtraSeat = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/extraSeat/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setExtraSeat(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchSpecialId = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/specialId/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setSpecialId(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchAgency = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/agency/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setAgency(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchAdmin = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/adminuser/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setAdmin(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  const fetchSubAdmin = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/subAdminUser/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setSubAdmin(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };


  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/user/getbyid/${id}`
      );
      const jsonData = await response.json();
      console.log(jsonData.data)
      setUserData(jsonData.data);
      setSelectedframe(jsonData.data?.frame)
      setSelectedBadges(jsonData.data.tags)
      setSelectedVehicle(jsonData.data.vehicle)
      setSelectedadmin(jsonData.data.admin)
      setSelectedsubAdmin(jsonData.data.subAdmin)
      setSelectedagency(jsonData.data.agency)
      setSelectedchatProfile(jsonData.data.chatBubble)
      setSelectedextraSeat(jsonData.data.extraSeat)
      setSelectedlockRoom(jsonData.data.lockRoom)
      setSelectedspecialId(jsonData.data.special_id)
      setSelectedsvip(jsonData.data.svip)
      setSelectedsvip(jsonData.data.vip)
      setSelectedwallpaper(jsonData.data.roomWallpaper)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  console.log(selectedframe, "selectedframe");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const fetchRoomData = async () => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/room/getbyuserId/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setRoomData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleRemoveDP = async () => {
    console.log(roomData[0]?.roomId);
    try {
      const response = await fetch(
        `https://yoyo560live.live/room/deleteRoomDp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ roomId: roomData[0]?.roomId })
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedData = await response.json();
      fetchRoomData();
      console.log("DP Removed:", updatedData.data);
      toast.success("DP removed");
    } catch (error) {
      console.error("Error removing DP:", error);
      toast.error("Error while removing DP");
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/admin/user/update/${userData?.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userData?.name,
            email: userData?.email,
            diamonds: userData?.diamonds,
            coins: userData?.coins,
            beans: userData?.beans,
            roomName: userData?.roomName,
            bio: userData?.bio,
            mobile: userData?.mobile,
            tags: selectedBadges,
            vehicle: selectedVehicle,
            frame: selectedframe,
            roomWallpaper: selectedwallpaper,
            chatBubble: selectedchatProfile,
            vip: selectedvip,
            svip: selectedsvip,
            lockRoom: selectedlockRoom,
            extraSeat: selectedextraSeat,
            agency: selectedagency,
            admin: selectedadmin,
            subAdmin: selectedsubAdmin,
            special_id: selectedspecialId,
          }),
        }
      );

      if (response.ok) {
        console.log("User data updated successfully");
        toast.success("Data Successfully edited")
        fetchData();

      } else {
        console.error("Error updating user data");
        toast.error("Error while editing")
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <>
      <Title title="Edit User" />
      <div className="fields">
        <h6>
          Name
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="text"
          name="name"
          id="username"
          value={userData.name}
          onChange={handleInputChange}
          maxLength={20}
        />
      </div>
      <div className="fields">
        <h6>
          Email
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Coin
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="coins"
          id="purchasedcoin"
          value={userData.coins}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Benes
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="beans"
          id="beans"
          value={userData.beans}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Diamonds
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="diamonds"
          id="diamonds"
          value={userData.diamonds}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Mobile
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="mobile"
          id="mobile"
          value={userData.mobile}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Bio

        </h6>
        <input
          type="textarea"
          name="bio"
          id="bio"
          value={userData.bio}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Room Name

        </h6>
        <input
          type="text"
          name="roomName"
          id="roomName"
          value={userData.roomName}
          onChange={handleInputChange}
        />
      </div>
      <Row>
        <Col lg="6">
          <div className="user-badges">
            <label htmlFor="user-badges">
              Tags
            </label>
            <Select
              value={selectedBadges}
              onChange={(e) => {
                setSelectedBadges(e);
              }}
              placeholder={"Select Lists"}
              options={badges}
              classNamePrefix="select2-selection"
              required
              isMulti
            />


          </div>
          <div className="user-badges">
            <label htmlFor="user-badges">
              Vehicle
            </label>
            <Select
              value={selectedVehicle}
              onChange={(e) => {
                setSelectedVehicle(e);
              }}
              placeholder={"Select Vehicle"}
              options={Vehicle}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>
          <div className="user-badges">
            <label htmlFor="user-badges">
              Room Wallpaper
            </label>
            <Select
              value={selectedwallpaper}
              onChange={(e) => {
                setSelectedwallpaper(e);
              }}
              placeholder={"Select Lists"}
              options={wallpaper}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Frame
            </label>
            <Select
              value={selectedframe}
              onChange={(e) => {
                setSelectedframe(e);
              }}
              placeholder={"Select Lists"}
              options={frame}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Chat Profile Card
            </label>
            <Select
              value={selectedchatProfile}
              onChange={(e) => {
                setSelectedchatProfile(e);
              }}
              placeholder={"Select Lists"}
              options={chatProfile}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Vip List
            </label>
            <Select
              value={selectedvip}
              onChange={(e) => {
                setSelectedvip(e);
              }}
              placeholder={"Select Lists"}
              options={vip}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Svip List
            </label>
            <Select
              value={selectedsvip}
              onChange={(e) => {
                setSelectedsvip(e);
              }}
              placeholder={"Select Lists"}
              options={svip}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Lock Room
            </label>
            <Select
              value={selectedlockRoom}
              onChange={(e) => {
                setSelectedlockRoom(e);
              }}
              placeholder={"Select Lists"}
              options={lockRoom}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Extra Seat
            </label>
            <Select
              value={selectedextraSeat}
              onChange={(e) => {
                setSelectedextraSeat(e);
              }}
              placeholder={"Select Lists"}
              options={extraSeat}
              classNamePrefix="select2-selection"
              required
              isMulti
            />

          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Special Id
            </label>
            <Select
              value={selectedspecialId}
              onChange={(e) => {
                setSelectedspecialId(e);
              }}
              placeholder={"Select Lists"}
              options={specialId}
              classNamePrefix="select2-selection"
              required
              isMulti
            />
          </div>

          <div className="user-badges">
            <label htmlFor="user-badges">
              Agency
            </label>
            <Select
              value={selectedagency}
              onChange={(e) => {
                setSelectedagency(e);
              }}
              placeholder={"Select Id"}
              options={agency}
              classNamePrefix="select2-selection"
              required
            />
          </div>
        </Col>
        <Col lg="6">
          {/* <div className="user-badges" >
            <label >
              Badges Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div> */}
          <div className="user-badges" >
            <label htmlFor="user-badges">
              Entry Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div>
          <div className="user-badges" >
            <label htmlFor="user-badges">
              Room Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div>
          <div className="user-badges" >
            <label htmlFor="user-badges">
              Frame Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div>
          <div className="user-badges" >
            <label htmlFor="user-badges">
              Chat Profile Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div>
          <div className="user-badges" >
            <label htmlFor="user-badges">
              Vip Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div>
          <div className="user-badges" >
            <label htmlFor="user-badges">
              Svip Validity
            </label>
            <select>
              <option value="someOption">1 Day</option>
              <option value="otherOption">2 Day</option>
              <option value="otherOption">3 Day</option>
            </select>
          </div>
          &nbsp;
          <div className="user-badges">
            <label htmlFor="user-badges">
              Admin
            </label>
            <Select
              value={selectedadmin}
              onChange={(e) => {
                setSelectedadmin(e);
              }}
              placeholder={"Select Id"}
              options={admin}
              classNamePrefix="select2-selection"
              required
            />
          </div>
          <div className="user-badges">
            <label htmlFor="user-badges">
              Sub Admin
            </label>
            <Select
              value={selectedsubAdmin}
              onChange={(e) => {
                setSelectedsubAdmin(e);
              }}
              placeholder={"Select Id"}
              options={subAdmin}
              classNamePrefix="select2-selection"
              required
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="field-button" style={{ marginTop: "9px" }}>
              {/* <button className="cancel-butt">Cancel</button> */}
              <img style={{ height: "50%" }} src={roomData[0]?.images[0]} />
            </div>
            <div style={{ marginTop: "5rem" }}>
              <Button onClick={handleRemoveDP} variant="danger">
                Remove Room DP
              </Button>
            </div></div>
        </Col>
      </Row>
      <div className="field-button" style={{ marginTop: "9px" }}>
        {/* <button className="cancel-butt">Cancel</button> */}
        <button className="submit-butt" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Edituser;
