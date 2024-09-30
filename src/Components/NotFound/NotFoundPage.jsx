import React from 'react'
import notfound from "../../assets/icons/5203299.jpg"
const NotFoundPage = () => {
    return (
        <>
        {/* <h1 style={{ display: "flex", justifyContent: "center" }}>The Page you're looking for does not Exist !!</h1> */}
       <img style={{width:"100%"}} src={notfound} alt="" />  
        </>
    )
}

export default NotFoundPage