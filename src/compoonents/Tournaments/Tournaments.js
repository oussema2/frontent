import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Tournaments = () => {

    const [tournaments, settournaments] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/tournament/`)
            const tr = await response.data
            settournaments(tr);
        }

        fetchData();


    }, [])
    return (
        <div style={{
            height: `1000px`
        }}>



            <div>
                <div className="container"
                    style={{
                        display: `flex`,
                        flexDirection: `column`
                    }}>
                    <h1 style={{
                        textAlign: `center`,
                        margin: `auto`,
                        padding: `50px `

                    }}>Tournaments</h1>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Tournament Name</th>
                                <th scope="col">Tournament Game</th>

                                <th scope="col">Time</th>
                                <th scope="col">Participant</th>
                                <th scope="col">Price</th>
                                <th scope="col">Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tournaments.map((tour) => (
                                    <tr >
                                        <td>{tour.nameTournament}</td>
                                        <td >{tour.gameOfTournament}</td>

                                        <td>{tour.dateByDate} {tour.dateByTime} </td>
                                        <td>{tour.participantNumber}/ {tour.numberOfPlayers} </td>
                                        <td>{tour.price}</td>
                                        <td className="btn btn-warning"><Link to={`./tournament/${tour._id}`}>Incpect</Link></td>

                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div >

        </div>
    )
}

export default Tournaments
