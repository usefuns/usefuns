import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyCustomer = () => {
  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("merchantTransactionId")) {
      const merchantTransactionId = urlParams.get("merchantTransactionId");

      const response = await axios.get(
        `https://yoyo560live.live/payment/success/${merchantTransactionId}`,
      );
      console.log("newTppClose");
      if (response) {
        window.location.href = "https://www.usefuns.live/recharge";
      }
      // Navigate to the received URL

    }
  }, []);
  return (
    <></>




  )
}

export default MyCustomer