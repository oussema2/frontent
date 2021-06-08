import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './GamesHome.css';

const GamesHome = () => {
    const [games, setgames] = useState([])



    useEffect(() => {
        axios.get('http://localhost:5000/game/home')
            .then((res) => {

                setgames(res.data)
            })
            .catch((err) => console.log(err))






    }, [])


    const gamesView = games.map((game) => (

        <div className="col-4">
            <div className="card" style={{ width: "25rem" }}>
                <img src={process.env.PUBLIC_URL + `/images/gamesPhoto/${game.gamePhoto}`} alt={game._id} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{game.gameName}</h5>
                    <p className="card-text">{game.gameType}</p>
                    <Link to={`/tournaments/${game.gameName}`} className="btn btn-primary">Check Tournaments Now</Link>
                </div>
            </div>
        </div >




    ))

    return (
        <div>
            <h1 style={{
                textAlign: `center`
            }} className="pt-5">OUR GAMES</h1>
            <div className="styleHrOurGames">
                <hr></hr>
            </div>
            <div className="container">
                <div className="row mt-5">

                    {gamesView}

                </div>
            </div>


        </div>
    )
}

export default GamesHome
