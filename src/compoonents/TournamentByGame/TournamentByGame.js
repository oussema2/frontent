import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TournamentByGame = (props) => {



    const [tournaments, settournaments] = useState([])
    const [gameImage, setgameImage] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/tournament/findWithGame/${props.match.params.game}`)
            const response1 = await axios.get(`http://localhost:5000/game/findGame/${props.match.params.game}`)
            const gm = await response1.data
            const tr = await response.data
            settournaments(tr);
            setgameImage(gm.gamePhoto)

        }
        fetchData();

    }, [])


    const tournamentView = tournaments.map((tour) => (
        <tr key={tour._id} >
            <td >{tour.nameTournament}</td>

            <td>{tour.dateByDate} {tour.dateByTime} </td>
            <td>{tour.participantNumber}/ {tour.numberOfPlayers} </td>
            <td>{tour.price}</td>
            <td className="btn btn-warning"><Link to={`./tournament/${tour._id}`}>Incpect</Link></td>

        </tr>
    ))
    return (
        <div style={{
            height: `1000px`
        }}>
            <div className="container"
                style={{
                    display: `flex`,
                    flexDirection: `column`
                }}>
                <h1 style={{
                    textAlign: `center`,
                    margin: `auto`,
                    padding: `50px `

                }}>Tournament For {props.match.params.game}</h1>
                <div style={{
                    display: `flex`
                }}>
                    <img alt={props.match.params.game} style={{
                        width: `300px`,
                        margin: ` auto`,



                    }} src={process.env.PUBLIC_URL + `/images/gamesPhoto/${gameImage}`} />
                </div>

                {
                    tournaments.length === 0 ? <h1 style={{
                        textAlign: `center`,
                        marginBottom: `50px`
                    }}>There Is No Tournament for {props.match.params.game}</h1> :
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Tournament Name</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Participant</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Details</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tournamentView
                                }


                            </tbody>
                        </table>
                }

            </div>
        </div >
    )
}

export default TournamentByGame
