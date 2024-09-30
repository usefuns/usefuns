import { useEffect, useState } from "react";
import Title from "../common/Title";
import "./Edituser.css";
import { GiRoundStar } from "react-icons/gi";

const Edituser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = localStorage.getItem("userId").trim();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://yoyo560live.live/user/getbyid/${id}`
        );
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLoading(false);
    fetchData();
  }, [id]);
  console.log(data);
  return (
    <>
      <Title title="Edit User" />
      <div className="fields">
        <h6>
          Username
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="text" name="username" id="username" value={data.name} />
      </div>
      <div className="fields">
        <h6>
          Email
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="email" name="email" id="email" />
      </div>
      <div className="fields">
        <h6>
          Purchased Coin
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="purchasedcoin"
          id="purchasedcoin"
          value={data.coins}
        />
      </div>
      <div className="fields">
        <h6>
          Mobile
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="number" name="mobile" id="mobile" value={data.mobile} />
      </div>
      <div className="field-button">
        <button className="cancel-butt">Cancel</button>
        <button className="submit-butt">Submit</button>
      </div>
    </>
  );
};

export default Edituser;
