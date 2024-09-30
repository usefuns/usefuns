import React from 'react';
import User_icon from "../../assets/icons/user.png"
import styles from "./TrasactionHistory.module.css";

const transactions = [
  {
    sr: "1",
    image: User_icon,
    name: "Sumit Kumar",
    username: "27",
    email: "sumitsammy12345@gmail.com",
    price: "20 $",
    coin: "9255",
    orderId: "BNGODRID50650",
    status: "not completed",
  },
  
];

const TransactionHistory = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Transaction History</h3>
      <table className={styles.table}>
      <tr>
        <th>Sr.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Price</th>
        <th>Coin</th>
        <th>OrderId</th>
        <th>Status</th>
        </tr>
      
      {transactions.map((transaction, index) => (
        <tr key={index}>
          <td>{transaction.sr}</td>
          <td>
            <img className={styles.profile_img} src={transaction.image} alt="Profile-pic" />
          </td>
          
            <td>{transaction.name}</td>
            <td>{transaction.username}</td>
            <td>{transaction.email}</td>
            <td>{transaction.price}</td>
            <td>{transaction.coin}</td>
            <td>{transaction.orderId}</td>
            <td>{transaction.status}</td>
          </tr>
        
      ))}
    </table>
    </div>
  );
}

export default TransactionHistory;
