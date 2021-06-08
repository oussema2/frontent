import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Games = () => {
    const [games, setgames] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/game")
            .then((res) => {
                setgames(res.data)
                console.log(games)
            })
            .catch(err => console.log(err))
    }, [])

    const gamesView = games.map((game) => (<div className="col-md-4" key={game._id}>
        <div className="card" style={{ width: `18rem`, marginBottom: `50px` }}>
            <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/gamesPhoto/' + game.gamePhoto} alt={game._id} />
            <div className="card-body">
                <h5 className="card-title">{game.gameName}</h5>
                <p className="card-text">{game.gameType}</p>
                <Link to={`/tournaments/${game.gameName}`} className="btn btn-primary">See Tournaments</Link>
            </div>
        </div>
    </div>
    ))
    return (
        <div className="container">
            <div className="row" style={{
                marginTop: `50px`
            }}>
                {

                    gamesView
                }
            </div>
        </div >
    )
}

export default Games
