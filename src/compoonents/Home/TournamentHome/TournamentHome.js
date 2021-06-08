import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const TournamentHome = () => {
    const [tournaments, settournaments] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:5000/tournament/home')
            .then((res) => {

                settournaments(res.data)
            })
            .catch((err) => console.log(err))






    }, [])
    const handleInspcet = (id) => {
        history.push(`/tournament/${id}`)
    }

    const TournamentsView = tournaments.map((tournament) => (

        <div className="col-4">
            <div className="card" style={{ width: "25rem" }}>
                <img src={`http://localhost:5000/images/tournamentPhoto/${tournament.tournamentPic}`} alt={tournament._id} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tournament.nameTournament} </h5>
                    <p className="card-text">{tournament.gameOfTournament}</p>
                    <p className="card-text">{tournament.participantNumber}/ {tournament.numberOfPlayers}</p>

                    <button onClick={() => handleInspcet(tournament._id)} className="btn btn-warning">Inspect</button>
                </div>
            </div>
        </div >




    ))

    const addTournament = () => {
        if (JSON.parse(localStorage.getItem('userData'))) {
            history.push(`./createTournament`);
        } else {
            history.push(`./SignIn`);
        }
    }

    return (
        <div>
            <h1 style={{
                textAlign: `center`
            }} className="pt-5">OUR TOURNAMENTS</h1>


            <div className="styleHrOurGames">
                <hr></hr>
            </div>
            <div style={{
                display: `flex`,
                marginTop: `25px`
            }}>
                <button className="btn btn-warning m-auto" style={{
                    height: `45px`,
                    fontWeight: `bold`,

                }}
                    onClick={addTournament}> Add Tournament</button>
            </div>
            <div className="container">
                <div className="row mt-5">

                    {TournamentsView}

                </div>
            </div>


        </div >
    )
}

export default TournamentHome
