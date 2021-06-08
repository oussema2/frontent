import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TournamentDetails = (props) => {
    const [tournament, settournament] = useState({})
    const [participant, setparticipant] = useState([])
    const [isJoinedStatue, setisJoinedStatue] = useState(null)
    useEffect(() => {
        const doFetching = async () => {
            const response = await axios.get(`http://localhost:5000/tournament/findOne/${props.match.params.tournamentId}`)
            const data = await response.data;
            settournament(data)
            setparticipant(data.participants)

        }

        doFetching();
        isJoined();


    }, [])




    const onJoinTournament = () => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData)
        setisJoinedStatue(true)
        const dataForAPi = {};
        dataForAPi["userID"] = userData._id
        dataForAPi["IGN"] = userData.IGN
        dataForAPi["avatar"] = userData.avatar

        console.log(dataForAPi)

        axios.put(`http://localhost:5000/tournament/join/${props.match.params.tournamentId}`, dataForAPi)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })


    }


    const isJoined = () => {

        for (var i = 0; i < participant.length; i++) {
            console.log(participant[i].userID, JSON.parse(localStorage.getItem('userData'))._id)
            if (participant[i].userID === JSON.parse(localStorage.getItem('userData'))._id) {
                setisJoinedStatue(true)
                return true;
            }


        }
        setisJoinedStatue(false)
        return false

    }


    return (
        <div style={{
            backgroundImage: `url(http://localhost:5000/images/tournamentPhoto/${tournament.tournamentPic})`,
            height: `1500px`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            display: `flex`,
            flexDirection: `column`
        }}>
            <div style={{
                display: `flex`,
                flexDirection: `column`,
                textAlign: `center`,
                margin: `100px auto `
            }}>
                <div style={{
                    height: `300px`,
                    width: `600px`,
                    backgroundColor: `rgba(0,0,0,0.5)`,


                }}>
                    <h1 style={{
                        color: `yellow`
                    }}>{tournament.nameTournament}</h1>
                    <h2 style={{
                        color: `yellow`
                    }}>{tournament.gameOfTournament}</h2>
                    <h2 style={{
                        color: `white`
                    }}>{tournament.participantNumber}/ {tournament.numberOfPlayers}</h2>

                    <h3 style={{
                        color: `white`
                    }}>{tournament.dateByDate} -- {tournament.dateByTime}</h3>


                    <h3 style={{
                        color: `white`
                    }}>{tournament.price} $</h3>



                </div>

            </div>

            <div style={{
                margin: `-10px auto`,
                color: `white`,
                width: `600px`,
                textAlign: `center`
            }}>
                <h1 style={{
                    marginBottom: `50px`
                }}>JOIN TOURNAMENT NOW AND COMPETE FOR COOL PRIZES</h1>
                {
                    isJoinedStatue ? <h1 style={{ color: `yellow`, fontWeight: `bold` }}>YOU ARE ALREADY JOINED</h1> : <button style={{
                        height: `50px`,
                        fontWeight: `bold`
                    }} className="btn btn-warning"
                        onClick={onJoinTournament}
                    >JOIN TOURNAMENT NOW </button>
                }

            </div>
            <div style={{ marginTop: `50px` }}>
                {
                    tournament.participants === 0 ? <h1 style={{
                        color: `white`,
                        textAlign: `center`,
                        padding: `45px`

                    }}>NO ONE IS JOINED YET TAKE YOUR PLACE AND COMPETE</h1> : <div>
                        <div className="container">
                            <table className="table" style={{
                                color: `yellow`,

                            }}>

                                <tbody style={{

                                }}>
                                    {
                                        participant.map((part) => (
                                            <tr >
                                                <td ><img style={{
                                                    width: `70px`,
                                                    borderRadius: `25px`
                                                }} src={`http://localhost:5000/images/tournamentPhoto/${part.avatar}`} alt={part._id} /></td>


                                                <td>{part.IGN}</td>


                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


export default TournamentDetails
