import React, { useState, useEffect } from "react";
import './Chatbubble.css';
import { Button } from "react-bootstrap";

const ChatBubble = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      await fetch("https://yoyo560live.live/admin/chatBubble/getall")
        .then((res) => res.json())
        .then((data) => setData(data.data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const handleConfirmDelete = async (id) => {

    try {
      const response = await fetch(`https://yoyo560live.live/admin/chatBubble/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Network problem");
      }

      fetchData();

    } catch (error) {
      console.error("Error deleting data:", error);
    }

  }
  return (
    <div className="chat-bubble">
      {data ?
        data.map((item) => (
          <div key={item._id}>
            <p>Price: {item.price}</p>
            <img className="chatbubbleimg" src={item.images} alt="svg" /><button onClick={() => handleConfirmDelete(item?._id)} style={{ color: "white", background: "red" }} variant="danger">Delete</button>
          </div>
        )) : <td colSpan="8">
          <h2>No data available</h2>
        </td>
      }
    </div>
  );
};

export default ChatBubble;
