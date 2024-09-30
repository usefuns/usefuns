import React, { useEffect, useState } from 'react'
import admin from '../../assets/icons/admin.png';
import './Ranking.css';
import diamondIcon from "../../assets/icons/diamond.png"




function Ranking() {
    const [ranking, setRanking] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://yoyo560live.live/admin/agentRanking");
                if (!response.ok) {
                    throw new Error("network issue");
                }
                const jsonData = await response.json();
                setRanking(jsonData.data);
                console.log("Ranking", jsonData.data)
            } catch (error) {
                console.error("error fetching data", error)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className='all-data'>
                <div className='first-head'>
                    <div className='heading-pro'><p>Ranking</p></div>
                    <div className='below-head'><p>Statistics Based on the diamond purchase</p></div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Agent Id</th>
                            <th>Purchased</th>
                        </tr>
                        {ranking && ranking.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.coinSellerId}</td>
                                <td>
                                    <img src={diamondIcon} alt="Diamond Icon" />
                                    X {` ${item.amount} `}
                                </td>
                                <td>{item.day}</td>


                            </tr>
                        ))


                        }
                    </thead>

                </table>
            </div>
        </>
    )
}

export default Ranking
