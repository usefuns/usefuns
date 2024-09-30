import React, { useEffect, useState } from 'react';
import styles from "./SendCoins.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const SendCoins = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [adminUsers1, setAdminUsers1] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const [selectedAdmin1, setSelectedAdmin1] = useState('');
  const [coin1, setCoin1] = useState();
  const [coin, setCoin] = useState("");
  useEffect(() => {
    fetch('https://yoyo560live.live/admin/coinSeller/getall')
      .then(response => response.json())
      .then(data => {
        if (data.status === 1) {
          setAdminUsers(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching admin users:', error);
      });
    fetch('https://yoyo560live.live/admin/adminUser/getall')
      .then(response => response.json())
      .then(data => {
        if (data.status === 1) {
          setAdminUsers1(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching admin users:', error);
      });
  }, []);

  const handleAdminChange = (e) => {
    const selectedUserId = e.target.value;
    setSelectedAdmin(selectedUserId);
  };
  const handleAdminChange1 = (e) => {
    const selectedUserId1 = e.target.value;
    setSelectedAdmin1(selectedUserId1);
  };
  const handleSubmit = () => {
    if (selectedAdmin && coin) {
      const dataToSend = {
        coinSellerId: selectedAdmin,
        amount: Number(coin)
      };

      fetch('https://yoyo560live.live/admin/coinseller/recharge/offline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Coins sent successfully:', data);
          toast.success("Coin Send Successfully")
          setSelectedAdmin1('');
          setCoin('');
        })
        .catch(error => {
          console.error('Error sending coins:', error);
          toast.error("Error while sending Coins")
        });
    }
  };
  const handleSubmit1 = () => {
    if (selectedAdmin1 && coin1) {
      const dataToSend = {
        id: selectedAdmin1,
        totalCoins: Number(coin1)
      };

      fetch('https://yoyo560live.live/admin/adminUser/send/coin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Coins sent successfully:', data);
          toast.success("Coin Send Successfully")
          setSelectedAdmin('');
          setCoin('');
        })
        .catch(error => {
          console.error('Error sending coins:', error);
          toast.error("Error while sending Coins")
        });
    }
  };



  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Send Coins</h3>

      <div style={{ display: "flex" }}>
        <div className={styles.formcontainer}>
          <label className={styles.label} htmlFor="adminInput">Coinseller*</label>
          <select className={styles.selectadmin} name="admin" value={selectedAdmin} onChange={handleAdminChange}>
            <option value="">Select Coinseller</option>
            {adminUsers.map(user => (

              <option key={user._id} value={user._id}>
                {user.seller_name}
              </option>

            ))}
          </select>
          <label>Coins</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Coin"
            onChange={(e) => setCoin(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            {/* <Button variant='danger' onClick={handleCancel}>Cancel</Button> */}
            <Button variant='success' onClick={handleSubmit}>Submit</Button>
          </div>
        </div>



        <div className={styles.formcontainer}>
          <label className={styles.label} htmlFor="adminInput">Admin*</label>
          <select className={styles.selectadmin} name="admin" value={selectedAdmin1} onChange={handleAdminChange1}>
            <option value="">Select Admin</option>
            {adminUsers1.map(user => (

              <option key={user._id} value={user._id}>
                {user.username}
              </option>

            ))}
          </select>
          <label>Coins</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Coin"
            onChange={(e) => setCoin1(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <Button variant='success' onClick={handleSubmit1}>Submit</Button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SendCoins;
